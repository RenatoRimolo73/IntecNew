import { Logo } from './Logo';

export function Footer() {
  return (
    <footer id="contato" className="py-12 border-t border-white/5 bg-zinc-950 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="opacity-80 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300">
            <Logo />
          </div>
          <p className="text-sm text-zinc-500 text-center md:text-left">
            © {new Date().getFullYear()} Intec Tecnologia. Redes e Segurança da Informação.
          </p>
        </div>
      </div>
    </footer>
  );
}
