import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Mail, Phone, Linkedin, Twitter, Github } from 'lucide-react';

interface HeaderProps {
  scrolled: boolean;
}

export const Header: React.FC<HeaderProps> = ({ scrolled }) => {
  const [isOpen, setIsOpen] = useState(false);

  // Bloqueia o scroll do body quando o menu está aberto
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const navLinks = [
    { name: 'Início', href: '#home' },
    { name: 'Sobre', href: '#about' },
    { name: 'Serviços', href: '#services' },
    { name: 'Processo', href: '#process' },
    { name: 'Blog', href: 'https://blog.cybersafecorp.com.br', external: true },
    { name: 'Contato', href: '#contact' }
  ];

  const menuVariants = {
    closed: { x: '100%', transition: { type: 'spring', stiffness: 400, damping: 40 } },
    opened: { x: 0, transition: { type: 'spring', stiffness: 400, damping: 40, staggerChildren: 0.08, delayChildren: 0.1 } }
  };

  const itemVariants = {
    closed: { opacity: 0, x: 30 },
    opened: { opacity: 1, x: 0 }
  };

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-[#050B14]/95 backdrop-blur-md py-4 border-b border-[#1e88e5]/20 shadow-lg shadow-[#1e88e5]/5' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#home" className="hover:opacity-80 transition-opacity">
          <img
            src="../assets/img/cybersafe-Logo.png"
            alt="CyberSafe Corp Logo"
            width="200"
            height="40"
          />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-slate-300 hover:text-[#1e88e5] transition-colors uppercase tracking-wider relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#1e88e5] transition-all group-hover:w-full"></span>
            </a>
          ))}
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#contact"
            className="px-6 py-2.5 bg-[#1565c0] hover:bg-[#1e88e5] text-white rounded-md text-sm font-bold transition-all shadow-lg shadow-[#1e88e5]/20"
          >
            Falar com Especialista
          </motion.a>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden p-2 text-white hover:text-[#1e88e5] transition-colors"
          onClick={() => setIsOpen(true)}
          aria-label="Abrir menu"
        >
          <Menu size={28} />
        </button>
      </div>

      {/* Mobile Professional Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop mais escuro para focar no menu */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[60]"
            />

            {/* Drawer */}
            <motion.div
              variants={menuVariants}
              initial="closed"
              animate="opened"
              exit="closed"
              className="fixed top-0 right-0 h-[100dvh] w-full max-w-[320px] bg-[#050B14] z-[70] shadow-2xl border-l border-[#1e88e5]/20 flex flex-col p-8 overflow-y-auto"
            >
              <div className="flex justify-between items-center mb-10">
                <div className="text-xl font-bold tracking-tight text-white uppercase font-mono">
                  Cyber<span className="text-[#1e88e5]">Safe</span>Corp
                </div>
                <button onClick={() => setIsOpen(false)} className="p-2 text-slate-400 hover:text-white transition-colors" aria-label="Fechar menu">
                  <X size={32} />
                </button>
              </div>

              <nav className="flex flex-col gap-6 mb-10">
                {navLinks.map((link) => (
                  <motion.a
                    key={link.name}
                    variants={itemVariants}
                    href={link.href}
                    className="text-xl font-bold text-white hover:text-[#1e88e5] transition-colors flex items-center justify-between group py-2"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                    <span className="text-[#1e88e5] opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                  </motion.a>
                ))}
              </nav>

              <motion.div variants={itemVariants} className="mt-auto space-y-8 pt-8 border-t border-slate-800">
                <div className="space-y-4">
                  <p className="text-[10px] font-mono uppercase text-[#1e88e5] tracking-[0.2em] font-bold">Contato Direto</p>
                  <div className="flex flex-col gap-4">
                    <a href="mailto:contato@cybersafecorp.com.br" className="flex items-center gap-3 text-slate-400 hover:text-white transition-colors text-xs truncate">
                      <Mail size={14} className="flex-shrink-0" /> contato@cybersafecorp.com.br
                    </a>
                    <a href="tel:+5511999999999" className="flex items-center gap-3 text-slate-400 hover:text-white transition-colors text-xs">
                      <Phone size={14} className="flex-shrink-0" /> +55 (11) 99999-9999
                    </a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <a href="#" className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center text-slate-400 hover:text-[#1e88e5] transition-all border border-transparent hover:border-[#1e88e5]/30"><Linkedin size={18} /></a>
                  <a href="#" className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center text-slate-400 hover:text-[#1e88e5] transition-all border border-transparent hover:border-[#1e88e5]/30"><Twitter size={18} /></a>
                  <a href="#" className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center text-slate-400 hover:text-[#1e88e5] transition-all border border-transparent hover:border-[#1e88e5]/30"><Github size={18} /></a>
                </div>

                <a
                  href="#contact"
                  onClick={() => setIsOpen(false)}
                  className="block text-center py-4 bg-[#1565c0] hover:bg-[#1e88e5] text-white rounded-xl font-bold text-sm transition-all shadow-xl shadow-[#1e88e5]/20 active:scale-95"
                >
                  Solicitar Auditoria
                </a>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};