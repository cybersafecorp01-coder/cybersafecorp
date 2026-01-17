import React, { useState, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // ADICIONE ESTA LINHA

// Components
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { Differentials } from './components/Differentials';
import { Process } from './components/Process';
import { Segments } from './components/Segments';
import { CTA } from './components/CTA';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { AIAssistant } from './components/AIAssistant';

// Pages
import { TermosPage } from './pages/termos';

// Fix: Defining an interface for SectionWrapper props and using React.FC to resolve children typing errors.
interface SectionWrapperProps {
  children: React.ReactNode;
  id: string;
  className?: string;
}

const SectionWrapper: React.FC<SectionWrapperProps> = ({ children, id, className = "" }) => (
  <motion.section
    id={id}
    className={className}
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.8, ease: "easeOut" }}
  >
    {children}
  </motion.section>
);

// ============================================================
// ATENÇÃO: ESTE É O COMPONENTE DA PÁGINA PRINCIPAL (HOME)
// NÃO MEXER AQUI QUANDO FOR ADICIONAR NOVAS ROTAS
// ============================================================
const HomePage: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col selection:bg-[#1e88e5]/30 selection:text-[#bbdefb]">
      {/* BARRA DE PROGRESSO DE ROLAGEM - CORRIGIDA PARA AZUL */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#1e88e5] to-[#1565c0] origin-left z-[100] shadow-lg shadow-[#1e88e5]/30"
        style={{ scaleX }}
      />
      
      <Header scrolled={scrolled} />
      
      <main className="flex-grow">
        <section id="home"><Hero /></section>
        
        <SectionWrapper id="about" className="py-20 bg-[#0A1A2F]/30">
          <About />
        </SectionWrapper>
        
        <SectionWrapper id="services" className="py-20 relative">
          <Services />
        </SectionWrapper>
        
        <SectionWrapper id="differentials" className="py-20 bg-[#0A1A2F]/50">
          <Differentials />
        </SectionWrapper>
        
        <SectionWrapper id="process" className="py-20">
          <Process />
        </SectionWrapper>
        
        <SectionWrapper id="segments" className="py-20 bg-[#0A1A2F]/30">
          <Segments />
        </SectionWrapper>
        
        <SectionWrapper id="cta" className="py-20">
          <CTA />
        </SectionWrapper>
        
        <SectionWrapper id="contact" className="py-20">
          <Contact />
        </SectionWrapper>
      </main>
      
      <Footer />
      <AIAssistant />
    </div>
  );
};

// ============================================================
// AQUI É ONDE VOCÊ DEVE ADICIONAR NOVAS ROTAS NO FUTURO
// SEGUINDO O PADRÃO ABAIXO
// ============================================================
const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        {/* PÁGINA PRINCIPAL */}
        <Route path="/" element={<HomePage />} />
        
        {/* ================================================= */}
        {/* ADICIONE NOVAS PÁGINAS AQUI ABAIXO DESSA PORRA */}
        {/* ================================================= */}
        
        {/* Exemplo: Página de Termos (já implementada) */}
        <Route path="/termos" element={<TermosPage />} />
        
        {/* ================================================= */}
        {/* EXEMPLOS DE COMO ADICIONAR FUTURAS PÁGINAS: */}
        {/* ================================================= */}
        {/* 
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/servicos/:id" element={<ServicoDetalhadoPage />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/contato" element={<ContatoPage />} />
        <Route path="/orcamento" element={<OrcamentoPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/politica-cookies" element={<CookiesPage />} />
        <Route path="*" element={<NotFoundPage />} /> {/* 404 Page */}
        {/* ================================================= */}
        {/* FIM DA SEÇÃO DE ADIÇÃO DE ROTAS */}
        {/* ================================================= */}
      </Routes>
    </Router>
  );
};

export default App;

// NADA FUNCIONA NESSA PORRA 