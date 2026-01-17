import React from 'react';
import { DIFFERENTIALS } from '../constants';

export const Differentials: React.FC = () => {
  return (
    <div className="container mx-auto px-6">
      <div className="grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-5 space-y-6">
          <h2 className="text-[#1e88e5] font-mono text-sm uppercase tracking-widest font-bold text-glow">Por que a CyberSafeCorp?</h2>
          <h3 className="text-4xl font-bold text-white">O diferencial que separa a conformidade da segurança real.</h3>
          <p className="text-slate-400 text-lg">
            No mercado de cibersegurança, muitos focam apenas em "marcar caixas". Nós focamos em mitigar riscos reais que podem paralisar sua operação.
          </p>
          <div className="p-6 bg-slate-900/80 border-l-4 border-[#1565c0] rounded-r-xl">
            <p className="italic text-slate-300">"Segurança não é um produto, é um processo contínuo de adaptação e inteligência."</p>
          </div>
        </div>

        <div className="lg:col-span-7 grid sm:grid-cols-2 gap-4">
          {DIFFERENTIALS.map((item, index) => (
            <div key={index} className="p-6 rounded-xl bg-[#0A1A2F] border border-slate-800 hover:border-[#1e88e5]/50 transition-all flex flex-col gap-4">
              <div className="w-12 h-12 rounded-full bg-[#1e88e5]/10 flex items-center justify-center">
                {item.icon}
              </div>
              <h4 className="text-xl font-bold text-white">{item.title}</h4>
              <p className="text-sm text-slate-500 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};