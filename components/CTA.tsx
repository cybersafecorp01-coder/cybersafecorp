import React from 'react';
import { ArrowRight } from 'lucide-react';

export const CTA: React.FC = () => {
  return (
    <div className="container mx-auto px-6">
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#1565c0] to-[#0d47a1] p-12 md:p-20 text-center">
        {/* Decor */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10 cyber-grid pointer-events-none"></div>
        
        <div className="relative z-10 max-w-3xl mx-auto space-y-8">
          <h2 className="text-4xl md:text-5xl font-black text-white">Sua empresa está preparada para um ataque?</h2>
          <p className="text-xl text-[#bbdefb] leading-relaxed">
            Não espere por um incidente para descobrir as falhas na sua segurança. Solicite uma avaliação de risco inicial sem compromisso com nossos especialistas.
          </p>
          <div className="flex justify-center">
            <a 
              href="#contact" 
              className="px-10 py-5 bg-white text-[#1565c0] font-bold rounded-xl flex items-center gap-3 hover:bg-slate-100 transition-all hover:scale-105 shadow-2xl"
            >
              Solicitar Avaliação Agora
              <ArrowRight size={20} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};