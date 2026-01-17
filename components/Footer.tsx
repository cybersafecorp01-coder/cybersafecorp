import React from 'react';
import { Linkedin, Twitter, Github, Globe, Instagram } from 'lucide-react';
import { Link } from 'react-router-dom'; // Importe o Link do React Router

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#050B14] border-t border-slate-800 pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2 space-y-6">
            <img
              src="../assets/img/cybersafe-Logo.png"
              alt="CyberSafe Corp Logo"
              width="200"
              height="30"
            />
            <p className="text-slate-500 max-w-sm leading-relaxed">
              Soluções integradas de cibersegurança e automação para o mercado corporativo. Proteção de ativos críticos e conformidade total com LGPD.
            </p>
            <div className="flex gap-4">
              <a href="https://www.instagram.com/cybersafecorp/" className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center text-slate-400 hover:text-[#1e88e5] transition-colors"><Instagram size={20} /></a>
              <a href="https://github.com/cybersafecorp01-coder" className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center text-slate-400 hover:text-[#1e88e5] transition-colors"><Github size={20} /></a>
            </div>
          </div>

          <div>
            <h5 className="text-white font-bold mb-6">Links Rápidos</h5>
            <ul className="space-y-4">
              <li><a href="#about" className="text-slate-500 hover:text-[#1e88e5] transition-colors text-sm">Sobre Nós</a></li>
              <li><a href="#services" className="text-slate-500 hover:text-[#1e88e5] transition-colors text-sm">Nossos Serviços</a></li>
              <li><a href="#process" className="text-slate-500 hover:text-[#1e88e5] transition-colors text-sm">Metodologia</a></li>
              <li><a href="#contact" className="text-slate-500 hover:text-[#1e88e5] transition-colors text-sm">Contate um Especialista</a></li>
            </ul>
          </div>

          <div>
            <h5 className="text-white font-bold mb-6">Legal & Compliance</h5>
            <ul className="space-y-4">
              {/* Links corrigidos para usar React Router com hash/anchor */}
              <li>
                <Link 
                  to="/termos#privacidade" 
                  className="text-slate-500 hover:text-[#1e88e5] transition-colors text-sm"
                >
                  Política de Privacidade
                </Link>
              </li>
              <li>
                <Link 
                  to="/termos#termos" 
                  className="text-slate-500 hover:text-[#1e88e5] transition-colors text-sm"
                >
                  Termos de Uso
                </Link>
              </li>
              <li>
                <Link 
                  to="/termos#lgpd" 
                  className="text-slate-500 hover:text-[#1e88e5] transition-colors text-sm"
                >
                  LGPD Compliance
                </Link>
              </li>
              <li>
                <Link 
                  to="/termos#certificacoes" 
                  className="text-slate-500 hover:text-[#1e88e5] transition-colors text-sm"
                >
                  Certificações Técnicas
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-600 text-xs">
            © {currentYear} CyberSafeCorp Soluções Tecnológicas. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-2 text-slate-600 text-xs">
            <Globe size={14} />
            Português (Brasil)
          </div>
        </div>
      </div>
    </footer>
  );
};