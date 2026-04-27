import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Activity, ArrowRight, CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';
import { ContactForm } from '../components/ContactForm';
import { servicesData } from '../data/services';

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

export function Home() {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      setTimeout(() => {
        const element = document.getElementById(hash.replace('#', ''));
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [hash]);
  return (
    <>
      {/* --- HERO SECTION --- */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
        {/* Abstract background grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-brand opacity-20 blur-[100px]"></div>

        <div className="relative max-w-7xl mx-auto px-6 flex flex-col items-center text-center">
          <motion.div initial="hidden" animate="visible" variants={fadeUp} className="flex flex-col items-center">
            <span className="inline-flex items-center gap-2 px-3 py-1 text-xs font-semibold text-brand bg-brand/10 border border-brand/20 rounded-full mb-8">
              <Activity className="w-3.5 h-3.5" />
              Ambientes Estáveis e Seguros
            </span>
            <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight text-balance max-w-4xl leading-[1.1]">
              Infraestrutura, Redes e <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand to-brand-light">Segurança</span> para sua Empresa.
            </h1>
            <p className="mt-6 text-lg md:text-xl text-zinc-400 max-w-2xl text-balance">
              Projetamos, monitoramos e blindamos a TI da sua corporação. Assumimos a complexidade tecnológica para que você foque focado no que realmente importa: escalar o seu negócio.
            </p>
            
            <div className="mt-10 flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <a
                href="#servicos"
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
            {servicesData.map((srv) => (
              <motion.div key={srv.id} variants={fadeUp}>
                <Link
                  to={`/servico/${srv.id}`}
                  className="group relative p-8 rounded-2xl bg-zinc-900/50 border border-white/5 hover:bg-zinc-900 hover:border-brand/30 transition-all duration-300 flex flex-col h-full"
                >
                  <div className="w-12 h-12 rounded-xl bg-brand/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <srv.icon className="w-6 h-6 text-brand" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{srv.title}</h3>
                  <p className="text-sm text-zinc-400 leading-relaxed flex-grow">
                    {srv.description}
                  </p>
                  
                  <div className="mt-6 flex items-center gap-2 text-sm font-medium text-brand group-hover:text-brand-light transition-colors">
                    Saber mais <ArrowRight className="w-4 h-4" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* --- DIFFERENTIALS SECTION --- */}
      <section id="sobre" className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-brand-dark/5 -skew-y-3 transform origin-bottom-left -z-10" />
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
                <span className="text-brand">Somos seus parceiros de negócio.</span>
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
                    <CheckCircle2 className="w-6 h-6 text-brand shrink-0" />
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
              className="lg:ml-auto w-full max-w-lg"
            >
              <ContactForm />
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
