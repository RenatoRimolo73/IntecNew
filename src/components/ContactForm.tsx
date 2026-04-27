import React, { useState } from 'react';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Erro ao enviar a mensagem.');
      }

      setStatus('success');
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
      
      // Reseta para formulário após 5 segundos
      setTimeout(() => setStatus('idle'), 5000);
    } catch (error: any) {
      console.error('Erro de envio:', error);
      setErrorMessage(error.message || 'Ocorreu um erro no envio. Tente novamente mais tarde.');
      setStatus('error');
    }
  };

  return (
    <div className="bg-zinc-900 border border-white/10 rounded-2xl p-6 sm:p-8 shadow-2xl relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-brand/10 blur-[80px] rounded-full pointer-events-none" />
      
      <h3 className="text-2xl font-bold text-white mb-6">Envie uma mensagem</h3>
      
      <AnimatePresence mode="wait">
        {status === 'success' ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="flex flex-col items-center justify-center text-center py-12"
          >
            <div className="w-16 h-16 bg-brand/10 rounded-full flex items-center justify-center mb-4">
              <CheckCircle className="w-8 h-8 text-brand" />
            </div>
            <h4 className="text-xl font-bold text-white mb-2">Mensagem Enviada!</h4>
            <p className="text-zinc-400">Recebemos seu contato e retornaremos em breve através do e-mail ou telefone informado.</p>
            <button 
              onClick={() => setStatus('idle')}
              className="mt-6 text-sm font-medium text-brand hover:text-blue-300 transition-colors"
            >
              Enviar nova mensagem
            </button>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            onSubmit={handleSubmit}
            className="space-y-4 relative z-10"
          >
            {status === 'error' && (
              <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-xl flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                <p className="text-sm text-red-400">{errorMessage}</p>
              </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label htmlFor="name" className="text-sm font-medium text-zinc-400">Nome completo</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  disabled={status === 'loading'}
                  className="w-full px-4 py-3 bg-zinc-950 border border-white/5 rounded-xl text-zinc-200 placeholder:text-zinc-600 focus:outline-none focus:border-brand/50 focus:ring-1 focus:ring-brand/50 transition-all disabled:opacity-50"
                  placeholder="Seu nome"
                />
              </div>
              <div className="space-y-1.5">
                <label htmlFor="phone" className="text-sm font-medium text-zinc-400">Telefone / WhatsApp</label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  disabled={status === 'loading'}
                  className="w-full px-4 py-3 bg-zinc-950 border border-white/5 rounded-xl text-zinc-200 placeholder:text-zinc-600 focus:outline-none focus:border-brand/50 focus:ring-1 focus:ring-brand/50 transition-all disabled:opacity-50"
                  placeholder="(00) 00000-0000"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label htmlFor="email" className="text-sm font-medium text-zinc-400">E-mail corporativo</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  disabled={status === 'loading'}
                  className="w-full px-4 py-3 bg-zinc-950 border border-white/5 rounded-xl text-zinc-200 placeholder:text-zinc-600 focus:outline-none focus:border-brand/50 focus:ring-1 focus:ring-brand/50 transition-all disabled:opacity-50"
                  placeholder="voce@empresa.com"
                />
              </div>
              <div className="space-y-1.5">
                <label htmlFor="subject" className="text-sm font-medium text-zinc-400">Assunto</label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  value={formData.subject}
                  onChange={handleChange}
                  disabled={status === 'loading'}
                  className="w-full px-4 py-3 bg-zinc-950 border border-white/5 rounded-xl text-zinc-200 placeholder:text-zinc-600 focus:outline-none focus:border-brand/50 focus:ring-1 focus:ring-brand/50 transition-all disabled:opacity-50"
                  placeholder="Como podemos ajudar?"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label htmlFor="message" className="text-sm font-medium text-zinc-400">Mensagem</label>
              <textarea
                id="message"
                name="message"
                required
                rows={4}
                value={formData.message}
                onChange={handleChange}
                disabled={status === 'loading'}
                className="w-full px-4 py-3 bg-zinc-950 border border-white/5 rounded-xl text-zinc-200 placeholder:text-zinc-600 focus:outline-none focus:border-brand/50 focus:ring-1 focus:ring-brand/50 transition-all resize-none disabled:opacity-50"
                placeholder="Descreva as necessidades da sua infraestrutura..."
              />
            </div>

            <button
              type="submit"
              disabled={status === 'loading'}
              className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-white bg-brand-dark rounded-xl hover:bg-brand transition-all focus:ring-4 focus:ring-brand/20 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {status === 'loading' ? (
                <>
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  <span>Enviando...</span>
                </>
              ) : (
                <>
                  <Send className="w-5 h-5" />
                  <span>Enviar Solicitação</span>
                </>
              )}
            </button>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
