import React from 'react';
import { PROCESS_STEPS } from '../constants';

export const Process: React.FC = () => {
  return (
    <div className="container mx-auto px-6">
      <div className="text-center mb-20 space-y-4">
        <h2 className="text-[#1e88e5] font-mono text-sm uppercase tracking-widest font-bold">Nosso Framework</h2>
        <h3 className="text-4xl font-bold text-white">Como Entregamos Resultados</h3>
      </div>

      <div className="relative">
        {/* Connection Line */}
        <div className="absolute top-1/2 left-0 w-full h-px bg-slate-800 hidden lg:block -translate-y-1/2"></div>

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 relative z-10">
          {PROCESS_STEPS.map((step, idx) => (
            <div key={idx} className="flex flex-col items-center text-center space-y-4 group">
              <div className="w-16 h-16 rounded-full bg-slate-900 border-2 border-slate-700 flex items-center justify-center text-2xl font-bold text-[#1e88e5] group-hover:bg-[#1565c0] group-hover:text-white group-hover:border-[#1e88e5] transition-all duration-300 shadow-xl">
                {step.id}
              </div>
              <h4 className="text-xl font-bold text-white">{step.title}</h4>
              <p className="text-slate-500 text-sm max-w-[200px]">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};