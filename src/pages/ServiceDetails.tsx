import { useEffect } from 'react';
import { useParams, Link, Navigate, useLocation } from 'react-router-dom';
import { ArrowLeft, ArrowRight, CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';
import { servicesData } from '../data/services';
import { ContactForm } from '../components/ContactForm';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
};

export function ServiceDetails() {
  const { id } = useParams<{ id: string }>();
  const { pathname } = useLocation();
  const service = servicesData.find((s) => s.id === id);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname]);

  if (!service) {
    return <Navigate to="/" replace />;
  }

  return (
    <>
      {/* --- HERO SECTION --- */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-brand opacity-20 blur-[120px]"></div>

        <div className="relative max-w-4xl mx-auto px-6">
          <Link to="/#servicos" className="inline-flex items-center gap-2 text-sm font-medium text-zinc-400 hover:text-white transition-colors mb-8">
            <ArrowLeft className="w-4 h-4" />
            Voltar para Serviços
          </Link>
          
          <motion.div initial="hidden" animate="visible" variants={fadeUp}>
            <div className="w-16 h-16 rounded-2xl bg-brand/10 flex items-center justify-center mb-8 border border-brand/20">
              <service.icon className="w-8 h-8 text-brand" />
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight text-balance leading-[1.1]">
              {service.title}
            </h1>
            
            <h2 className="mt-6 text-xl md:text-2xl font-semibold text-brand-light text-balance">
              "{service.argument}"
            </h2>
            
            <p className="mt-6 text-lg text-zinc-400 text-balance leading-relaxed">
              {service.detailedDescription}
            </p>
            
            <div className="mt-10">
              <a
                href="#consultoria"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-zinc-950 bg-white rounded-xl hover:bg-zinc-200 transition-all"
              >
                Falar com Especialista
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- CONSULTING & CONTACT SECTION --- */}
      <section id="consultoria" className="py-24 relative overflow-hidden bg-zinc-950">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial="hidden" 
              whileInView="visible" 
              viewport={{ once: true }}
              variants={fadeUp}
            >
              <h3 className="text-3xl md:text-4xl font-bold text-white tracking-tight leading-tight">
                Podemos ajudar a otimizar sua <span className="text-brand">{service.title.toLowerCase()}</span>.
              </h3>
              <p className="mt-6 text-lg text-zinc-400 max-w-lg">
                Agende um diagnóstico com nossos especialistas. Entenderemos o cenário atual e como aplicar as melhores práticas tecnológicas ao seu negócio.
              </p>
              
              <div className="mt-10 space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-brand/10 flex items-center justify-center shrink-0 border border-brand/20">
                    <CheckCircle2 className="w-5 h-5 text-brand" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">Diagnóstico Preciso</h4>
                    <p className="text-sm text-zinc-400 mt-1">Análise minuciosa para identificar gargalos de performance e segurança.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-brand/10 flex items-center justify-center shrink-0 border border-brand/20">
                    <CheckCircle2 className="w-5 h-5 text-brand" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">Projeto Estruturado</h4>
                    <p className="text-sm text-zinc-400 mt-1">Desenho topológico e lógico da solução sob medida para sua arquitetura.</p>
                  </div>
                </div>
              </div>
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
