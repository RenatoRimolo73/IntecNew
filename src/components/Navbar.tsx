import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, Menu, X } from 'lucide-react';
import { Logo } from './Logo';
import { servicesData } from '../data/services';

export function Navbar() {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 inset-x-0 z-50 border-b border-white/5 bg-zinc-950/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between relative">
        <div className="flex items-center gap-2">
          <Link to="/" className="hover:opacity-80 transition-opacity">
            <Logo />
          </Link>
        </div>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium h-full">
          {/* Services Dropdown */}
          <div 
            className="relative h-full flex items-center"
            onMouseEnter={() => setIsServicesOpen(true)}
            onMouseLeave={() => setIsServicesOpen(false)}
          >
            <button className="flex items-center gap-1.5 hover:text-white transition-colors h-full text-zinc-300">
              Serviços <ChevronDown className={`w-4 h-4 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
            </button>
            
            {/* Dropdown Content */}
            {isServicesOpen && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 w-[600px] bg-zinc-900 border border-white/10 rounded-xl shadow-2xl p-6 grid grid-cols-2 gap-4">
                {servicesData.map((service) => (
                  <Link 
                    key={service.id}
                    to={`/servico/${service.id}`}
                    className="flex items-start gap-3 p-3 rounded-lg hover:bg-zinc-800 transition-colors group"
                    onClick={() => setIsServicesOpen(false)}
                  >
                    <div className="p-2 rounded-md bg-brand/10 text-brand mt-0.5">
                      <service.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-zinc-200 font-semibold group-hover:text-brand transition-colors text-sm">{service.title}</h4>
                      <p className="text-zinc-500 text-xs mt-1 line-clamp-1">{service.description}</p>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
          
          <Link to="/#sobre" className="hover:text-white transition-colors text-zinc-300">Diferenciais</Link>
          <Link to="/#contato" className="hover:text-white transition-colors text-zinc-300">Contato</Link>
        </div>

        <div className="hidden md:flex items-center">
          <a
            href="https://wa.me/5551983062449"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-sm font-medium text-white bg-brand-dark rounded-lg hover:bg-brand transition-all focus:ring-4 focus:ring-brand/20"
          >
            Falar com Especialista
          </a>
        </div>

        {/* Mobile menu button */}
        <button 
          className="md:hidden text-zinc-400 hover:text-white p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-zinc-900 border-t border-white/5 max-h-[80vh] overflow-y-auto">
          <div className="p-4 space-y-4">
            <div className="font-semibold text-white px-2">Serviços</div>
            <div className="grid grid-cols-1 gap-2 pl-4">
              {servicesData.map((service) => (
                <Link 
                  key={service.id}
                  to={`/servico/${service.id}`}
                  className="flex items-center gap-3 p-2 rounded-lg hover:bg-zinc-800 text-zinc-300"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <service.icon className="w-5 h-5 text-brand" />
                  <span className="text-sm">{service.title}</span>
                </Link>
              ))}
            </div>
            <div className="border-t border-white/5 pt-4 space-y-2">
              <Link to="/#sobre" onClick={() => setIsMobileMenuOpen(false)} className="block px-2 text-zinc-300 hover:text-white">Diferenciais</Link>
              <Link to="/#contato" onClick={() => setIsMobileMenuOpen(false)} className="block px-2 text-zinc-300 hover:text-white">Contato</Link>
              <a
                href="https://wa.me/5551983062449"
                target="_blank"
                rel="noreferrer"
                className="mt-4 flex items-center justify-center gap-2 px-5 py-3 text-sm font-medium text-white bg-brand rounded-lg"
              >
                Falar com Especialista
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
