import express from 'express';
import { createServer as createViteServer } from 'vite';
import nodemailer from 'nodemailer';
import path from 'path';

async function startServer() {
  const app = express();
  const PORT = Number(process.env.PORT) || 3000;

  // Middleware para processar JSON na requisição
  app.use(express.json());

  // Rota do Formulário de Contato via SMTP
  app.post('/api/contact', async (req, res) => {
    const { name, email, phone, subject, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Nome, E-mail e Mensagem são obrigatórios.' });
    }

    try {
      const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: parseInt(process.env.SMTP_PORT || '587'),
        secure: process.env.SMTP_PORT === '465',
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS,
        },
      });

      const mailOptions = {
        from: process.env.SMTP_FROM || process.env.SMTP_USER,
        to: process.env.SMTP_TO || 'plada@intec.tec.br',
        replyTo: email,
        subject: `Novo Contato do Site: ${subject || 'Sem Assunto'}`,
        html: `
          <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #2563eb;">Novo Contato - Site INTEC</h2>
            <p><strong>Nome:</strong> ${name}</p>
            <p><strong>E-mail:</strong> ${email}</p>
            <p><strong>Telefone/WhatsApp:</strong> ${phone || 'Não informado'}</p>
            <p><strong>Assunto:</strong> ${subject || 'Não informado'}</p>
            <hr style="border: 1px solid #e5e7eb; margin: 20px 0;" />
            <p><strong>Mensagem:</strong></p>
            <p style="background: #f3f4f6; padding: 15px; border-radius: 8px;">${message}</p>
          </div>
        `,
      };

      await transporter.sendMail(mailOptions);
      res.status(200).json({ success: true, message: 'Mensagem enviada com sucesso!' });
    } catch (error) {
      console.error('Erro ao enviar e-mail via SMTP:', error);
      res.status(500).json({ error: 'Falha ao conectar ou enviar e-mail. Verifique o servidor SMTP.' });
    }
  });

  // Middleware do Vite (Dev/Produção)
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Servidor SMTP e Aplicação rodando na porta ${PORT}`);
  });
}

startServer();
