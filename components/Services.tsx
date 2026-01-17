import React from 'react';
import { motion } from 'framer-motion';
import { SERVICES_DATA } from '../constants';
import { ServiceCardProps } from '../../site/types';
import { Check } from 'lucide-react';

const ServiceCard: React.FC<ServiceCardProps & { index: number }> = ({ title, description, benefits, icon, index }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      whileHover={{ y: -10 }}
      className="p-8 rounded-2xl bg-slate-800/30 border border-slate-700 hover:border-[#1e88e5]/50 transition-all group relative overflow-hidden h-full flex flex-col"
    >
      <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
        {icon}
      </div>
      
      <div className="mb-6 relative z-10 flex-grow">
        <div className="w-14 h-14 bg-[#1565c0]/20 rounded-xl flex items-center justify-center mb-6 ring-1 ring-[#1e88e5]/30 group-hover:bg-[#1565c0] group-hover:text-white transition-colors">
          {icon}
        </div>
        <h4 className="text-2xl font-bold text-white mb-4">{title}</h4>
        <p className="text-slate-400 leading-relaxed mb-6">{description}</p>
        
        <ul className="space-y-3">
          {benefits.map((benefit, i) => (
            <li key={i} className="flex items-center gap-3 text-sm text-slate-300">
              <div className="w-5 h-5 bg-emerald-500/20 rounded-full flex items-center justify-center">
                <Check size={12} className="text-emerald-400" />
              </div>
              {benefit}
            </li>
          ))}
        </ul>
      </div>
      
      <div className="pt-6 border-t border-slate-700/50">
        <a href="#contact" className="text-[#1e88e5] font-bold text-sm uppercase tracking-widest hover:text-[#64b5f6] transition-colors flex items-center gap-2">
          Saiba Mais <span className="text-lg">→</span>
        </a>
      </div>
    </motion.div>
  );
};

export const Services: React.FC = () => {
  return (
    <div className="container mx-auto px-6">
      <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
        <h2 className="text-[#1e88e5] font-mono text-sm uppercase tracking-widest font-bold">Nossas Soluções</h2>
        <h3 className="text-4xl md:text-5xl font-bold text-white">Proteção 360º para sua Infraestrutura Digital</h3>
        <p className="text-slate-400">Oferecemos um portfólio completo de serviços técnicos e consultivos projetados para antecipar ameaças e otimizar a segurança operacional.</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {SERVICES_DATA.map((service, index) => (
          <ServiceCard key={index} {...service} index={index} />
        ))}
      </div>

    </div>
  );
};