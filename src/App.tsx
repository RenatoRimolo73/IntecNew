import {
  Activity,
  ArrowRight,
  Briefcase,
  Cable,
  CheckCircle2,
  ChevronRight,
  Code2,
  GitMerge,
  Headset,
  Lock,
  MonitorSmartphone,
  Network,
  PhoneCall,
  Radio,
  ServerCog,
  ShieldCheck,
  SignalHigh
} from 'lucide-react';
import { motion } from 'motion/react';

const SERVICES = [
  {
    icon: Network,
    title: 'Redes Corporativas',
    description: 'Estabilidade e desempenho com Wi-Fi profissional, Mikrotik, Cisco e Unifi sob medida.'
  },
  {
    icon: ShieldCheck,
    title: 'Segurança e Firewall',
    description: 'VPN segura, segmentação de rede e proteção perimetral contra ameaças modernas.'
  },
  {
    icon: ServerCog,
    title: 'Servidores e Automação',
    description: 'Implantação robusta, VPS, automação e backups em nuvem com alta disponibilidade.'
  },
  {
    icon: Headset,
    title: 'Suporte e Monitoramento',
    description: 'Atendimento e monitoramento proativo com documentação técnica rigorosa e ágil.'
  },
  {
    icon: Cable,
    title: 'Cabeamento Estruturado',
    description: 'Cabeamento trançado ou redes POL (Passive Optical LAN) para alta capacidade.'
  },
  {
    icon: PhoneCall,
    title: 'Telefonia em Nuvem',
    description: 'PABX proprietário com suporte a telefones IP e softphones, reduzindo custos.'
  },
  {
    icon: GitMerge,
    title: 'Links Redundantes',
    description: 'Entrega de link dedicado com redundância garantindo 99,8% de disponibilidade SLA.'
  },
  {
    icon: MonitorSmartphone,
    title: 'Outsourcing de TI',
    description: 'Locação estratégica de notebooks, desktops, impressoras e celulares corporativos.'
  },
  {
    icon: Code2,
    title: 'Desenvolvimento Web',
    description: 'Sistemas e sites sob medida para digitalizar e otimizar as regras do seu negócio.'
  },
  {
    icon: SignalHigh,
    title: 'Internet 5G Ilimitada',
    description: 'Planos 5G empresariais sem limite de dados com Wi-Fi 6 incluso, redefinindo mobilidade.'
  },
  {
    icon: Briefcase,
    title: 'Consultoria ISO 27001',
    description: 'Guiamos sua empresa para excelência com adequação aos rigorosos padrões de segurança.'
  }
];

const DIFFERENTIALS = [
  'Projetos de rede meticulosamente documentados e diagramados.',
  'Olhar implacável para cibersegurança em todas as etapas da operação.',
  'Foco direcionado às dores de Pequenas e Médias Empresas (PME).',
  'Cultura de parceria estratégica de longo prazo; o fim do "chamado avulso".',
  'Uso de arquiteturas modernas, validadas e à prova de falhas.',
  'Equipe veterana com certificações técnicas de peso no mercado.'
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

export default function App() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-300 selection:bg-blue-500/30">
      {/* --- NAVBAR --- */}
      <nav className="fixed top-0 inset-x-0 z-50 border-b border-white/5 bg-zinc-950/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-md bg-gradient-to-tr from-blue-600 to-cyan-500 flex items-center justify-center shadow-lg shadow-blue-500/20">
              <Lock className="w-4 h-4 text-white" />
            </div>
            <span className="text-xl font-bold tracking-tight text-white">
              INTEC<span className="text-blue-500">.</span>
            </span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium">
            <a href="#servicos" className="hover:text-white transition-colors">Serviços</a>
            <a href="#sobre" className="hover:text-white transition-colors">Diferenciais</a>
            <a href="#contato" className="hover:text-white transition-colors">Contato</a>
          </div>
          <a
            href="https://wa.me/5551983062449"
            target="_blank"
            rel="noreferrer"
            className="hidden md:inline-flex items-center justify-center gap-2 px-5 py-2.5 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-500 transition-all focus:ring-4 focus:ring-blue-500/20"
          >
            Falar com Especialista
          </a>
        </div>
      </nav>

      {/* --- HERO SECTION --- */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
        {/* Abstract background grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-blue-500 opacity-20 blur-[100px]"></div>

        <div className="relative max-w-7xl mx-auto px-6 flex flex-col items-center text-center">
          <motion.div initial="hidden" animate="visible" variants={fadeUp} className="flex flex-col items-center">
            <span className="inline-flex items-center gap-2 px-3 py-1 text-xs font-semibold text-blue-400 bg-blue-500/10 border border-blue-500/20 rounded-full mb-8">
              <Activity className="w-3.5 h-3.5" />
              Ambientes Estáveis e Seguros
            </span>
            <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight text-balance max-w-4xl leading-[1.1]">
              Infraestrutura, Redes e <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Segurança</span> para sua Empresa.
            </h1>
            <p className="mt-6 text-lg md:text-xl text-zinc-400 max-w-2xl text-balance">
              Projetamos, monitoramos e blindamos a TI da sua corporação. Assumimos a complexidade tecnológica para que você foque focado no que realmente importa: escalar o seu negócio.
            </p>
            
            <div className="mt-10 flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <a
                href="#contato"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white bg-white/10 hover:bg-white/15 border border-white/10 rounded-xl transition-all"
              >
                Conhecer Estrutura
              </a>
              <a
                href="https://wa.me/5551983062449"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-zinc-950 bg-white rounded-xl hover:bg-zinc-200 transition-all"
              >
                Solicitar Diagnóstico
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- SERVICES MATRIX --- */}
      <section id="servicos" className="py-24 bg-zinc-950 relative border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            className="mb-16 md:mb-24"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">Capacidade Técnica</h2>
            <p className="mt-4 text-zinc-400 max-w-2xl">
              Nossa expertise abrange ponta a ponta da infraestrutura digital da sua empresa, aplicando as melhores práticas de cibersegurança e redundância.
            </p>
          </motion.div>

          <motion.div 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {SERVICES.map((srv, idx) => (
              <motion.div 
                key={idx}
                variants={fadeUp}
                className="group relative p-8 rounded-2xl bg-zinc-900/50 border border-white/5 hover:bg-zinc-900 hover:border-blue-500/30 transition-all duration-300 flex flex-col"
              >
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <srv.icon className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{srv.title}</h3>
                <p className="text-sm text-zinc-400 leading-relaxed flex-grow">
                  {srv.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* --- DIFFERENTIALS SECTION --- */}
      <section id="sobre" className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-blue-900/5 -skew-y-3 transform origin-bottom-left -z-10" />
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial="hidden" 
              whileInView="visible" 
              viewport={{ once: true }}
              variants={fadeUp}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight leading-tight">
                Não somos apenas um suporte técnico.<br/>
                <span className="text-blue-400">Somos seus parceiros de negócio.</span>
              </h2>
              <p className="mt-6 text-lg text-zinc-400 max-w-lg">
                Atuamos unindo prática rigorosa de campo com visão estratégica. Empresas que precisam de um ambiente perfeitamente estável e seguro escolhem a Intec para eliminar os riscos de parada operacional.
              </p>
              
              <ul className="mt-10 space-y-4">
                {DIFFERENTIALS.map((diff, i) => (
                  <motion.li 
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, duration: 0.5 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle2 className="w-6 h-6 text-blue-500 shrink-0" />
                    <span className="text-zinc-300">{diff}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative rounded-2xl bg-zinc-900 border border-white/10 p-8 shadow-2xl lg:ml-auto w-full max-w-md"
            >
              <div className="absolute -top-12 -right-12 w-32 h-32 bg-blue-500/20 blur-3xl rounded-full" />
              <div className="absolute -bottom-12 -left-12 w-32 h-32 bg-cyan-500/20 blur-3xl rounded-full" />
              
              <div className="relative">
                <h3 className="text-xl font-bold text-white mb-6">Pronto para elevar sua operação?</h3>
                <div className="space-y-4">
                  <a href="mailto:plada@intec.tec.br" className="flex items-center justify-between p-4 rounded-xl bg-zinc-950 border border-white/5 hover:border-blue-500/50 transition-colors group">
                    <div className="flex flex-col">
                      <span className="text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-1">E-mail</span>
                      <span className="text-sm font-medium text-zinc-200">plada@intec.tec.br</span>
                    </div>
                    <ChevronRight className="w-5 h-5 text-zinc-600 group-hover:text-blue-400 transition-colors" />
                  </a>
                  <a href="tel:+555140638755" className="flex items-center justify-between p-4 rounded-xl bg-zinc-950 border border-white/5 hover:border-blue-500/50 transition-colors group">
                    <div className="flex flex-col">
                      <span className="text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-1">Telefone Fixo</span>
                      <span className="text-sm font-medium text-zinc-200">(51) 4063-8755</span>
                    </div>
                    <ChevronRight className="w-5 h-5 text-zinc-600 group-hover:text-blue-400 transition-colors" />
                  </a>
                  <a href="https://wa.me/5551983062449" target="_blank" rel="noreferrer" className="flex items-center justify-between p-4 rounded-xl bg-zinc-950 border border-white/5 hover:border-emerald-500/50 transition-colors group">
                    <div className="flex flex-col">
                      <span className="text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-1">WhatsApp Business</span>
                      <span className="text-sm font-medium text-zinc-200">(51) 98306-2449</span>
                    </div>
                    <ChevronRight className="w-5 h-5 text-zinc-600 group-hover:text-emerald-400 transition-colors" />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer id="contato" className="py-12 border-t border-white/5 bg-zinc-950 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2">
              <Lock className="w-5 h-5 text-zinc-500" />
              <span className="text-lg font-bold tracking-tight text-white">INTEC.</span>
            </div>
            <p className="text-sm text-zinc-500">
              © {new Date().getFullYear()} Intec Tecnologia. Redes e Segurança da Informação.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
