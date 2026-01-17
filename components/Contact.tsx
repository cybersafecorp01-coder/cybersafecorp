import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageCircle } from 'lucide-react';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Sending message:', formData);
    alert('Obrigado pelo contato! Nossa equipe retornará em breve.');
    setFormData({ name: '', company: '', email: '', message: '' });
  };

  return (
    <div className="container mx-auto px-6">
      <div className="grid lg:grid-cols-2 gap-16">
        <div className="space-y-12">
          <div className="space-y-4">
            <h2 className="text-[#1e88e5] font-mono text-sm uppercase tracking-widest font-bold">Contato</h2>
            <h3 className="text-4xl font-bold text-white">Vamos blindar seu negócio?</h3>
            <p className="text-slate-400 text-lg">
              Preencha o formulário ao lado ou utilize nossos canais diretos. Atendimento B2B prioritário.
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex items-center gap-6 group">
              <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center group-hover:bg-[#1565c0] transition-colors">
                <Mail className="text-[#1e88e5] group-hover:text-white" />
              </div>
              <div>
                <p className="text-xs text-slate-500 uppercase font-mono">E-mail Corporativo</p>
                <p className="text-white font-bold">contato@cybersafecorp.com.br</p>
              </div>
            </div>
            
            <div className="flex items-center gap-6 group">
              <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center group-hover:bg-[#1565c0] transition-colors">
                <Phone className="text-[#1e88e5] group-hover:text-white" />
              </div>
              <div>
                <p className="text-xs text-slate-500 uppercase font-mono">Telefone / WhatsApp</p>
                <p className="text-white font-bold">+55 (92) 98421-5343</p>
              </div>
            </div>

          </div>

          <a 
            href="https://wa.me/5511999999999" 
            className="inline-flex items-center gap-3 px-6 py-4 bg-[#4caf50] hover:bg-[#388e3c] text-white font-bold rounded-lg transition-all"
          >
            <MessageCircle />
            Conversar via WhatsApp
          </a>
        </div>

        <div className="bg-[#0A1A2F]/50 border border-slate-800 p-8 md:p-12 rounded-3xl shadow-2xl backdrop-blur-sm">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs text-slate-400 uppercase font-mono tracking-widest">Nome Completo</label>
                <input 
                  type="text" 
                  required
                  value={formData.name}
                  onChange={e => setFormData({...formData, name: e.target.value})}
                  className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#1e88e5] transition-colors"
                  placeholder="João Silva"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs text-slate-400 uppercase font-mono tracking-widest">Empresa</label>
                <input 
                  type="text" 
                  required
                  value={formData.company}
                  onChange={e => setFormData({...formData, company: e.target.value})}
                  className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#1e88e5] transition-colors"
                  placeholder="Minha Empresa S.A."
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <label className="text-xs text-slate-400 uppercase font-mono tracking-widest">E-mail Corporativo</label>
              <input 
                type="email" 
                required
                value={formData.email}
                onChange={e => setFormData({...formData, email: e.target.value})}
                className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#1e88e5] transition-colors"
                placeholder="joao@empresa.com.br"
              />
            </div>

            <div className="space-y-2">
              <label className="text-xs text-slate-400 uppercase font-mono tracking-widest">Mensagem / Desafio Técnico</label>
              <textarea 
                rows={4}
                required
                value={formData.message}
                onChange={e => setFormData({...formData, message: e.target.value})}
                className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#1e88e5] transition-colors"
                placeholder="Como podemos ajudar sua empresa hoje?"
              ></textarea>
            </div>

            <button 
              type="submit"
              className="w-full py-4 bg-[#1565c0] hover:bg-[#1e88e5] text-white font-bold rounded-lg flex items-center justify-center gap-3 transition-all active:scale-95 shadow-lg shadow-[#1e88e5]/20"
            >
              Enviar Mensagem
              <Send size={18} />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};