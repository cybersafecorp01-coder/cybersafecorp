import React from 'react';
import { ShieldCheck, Eye, HeartHandshake } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <div className="container mx-auto px-6">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div className="relative order-2 lg:order-1">
          <img 
            src="https://picsum.photos/id/180/800/600" 
            alt="Security Operations Center" 
            className="rounded-2xl shadow-2xl grayscale hover:grayscale-0 transition-all duration-700 border-2 border-slate-800"
          />
          <div className="absolute -bottom-8 -right-8 bg-[#1565c0] p-8 rounded-2xl hidden md:block shadow-2xl">
             <p className="text-white font-bold text-2xl">2+ Anos</p>
             <p className="text-[#bbdefb] text-sm">De excelência técnica</p>
          </div>
        </div>
        
        <div className="space-y-8 order-1 lg:order-2">
          <div className="space-y-4">
            <h2 className="text-[#1e88e5] font-mono text-sm uppercase tracking-widest font-bold">Sobre a CyberSafeCorp</h2>
            <h3 className="text-4xl font-bold text-white">Autoridade em Segurança da Informação.</h3>
            <p className="text-slate-400 text-lg leading-relaxed">
              Nascemos com o propósito de transformar o cenário de vulnerabilidade digital em um ambiente de confiança absoluta. A CyberSafeCorp combina expertise humana com as tecnologias mais avançadas de automação para proteger o que há de mais valioso: os dados.
            </p>
          </div>

          <div className="grid sm:grid-cols-1 gap-6">
            <div className="flex gap-4 group">
              <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-slate-800 flex items-center justify-center group-hover:bg-[#1565c0] transition-colors">
                <ShieldCheck className="text-[#1e88e5] group-hover:text-white" />
              </div>
              <div>
                <h4 className="text-white font-bold mb-1">Missão</h4>
                <p className="text-slate-500 text-sm">Fortalecer as defesas digitais de nossos clientes através de inovação contínua e ética inabalável.</p>
              </div>
            </div>
            
            <div className="flex gap-4 group">
              <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-slate-800 flex items-center justify-center group-hover:bg-[#1565c0] transition-colors">
                <Eye className="text-[#1e88e5] group-hover:text-white" />
              </div>
              <div>
                <h4 className="text-white font-bold mb-1">Visão</h4>
                <p className="text-slate-500 text-sm">Ser a referência global em cibersegurança proativa e automação de resposta a incidentes.</p>
              </div>
            </div>

            <div className="flex gap-4 group">
              <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-slate-800 flex items-center justify-center group-hover:bg-[#1565c0] transition-colors">
                <HeartHandshake className="text-[#1e88e5] group-hover:text-white" />
              </div>
              <div>
                <h4 className="text-white font-bold mb-1">Valores</h4>
                <p className="text-slate-500 text-sm">Confidencialidade absoluta, integridade técnica, transparência radical e foco no cliente.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};