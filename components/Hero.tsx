import React from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { ChevronRight, ShieldCheck, Activity } from 'lucide-react';

export const Hero: React.FC = () => {
  const { scrollY } = useScroll();
  
  // Parallax transformations for background elements
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const y2 = useTransform(scrollY, [0, 500], [0, -150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  // Mouse parallax for the terminal card
  const xMouse = useSpring(0, { stiffness: 50, damping: 20 });
  const yMouse = useSpring(0, { stiffness: 50, damping: 20 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    const x = (clientX - innerWidth / 2) / 25;
    const y = (clientY - innerHeight / 2) / 25;
    xMouse.set(x);
    yMouse.set(y);
  };

  return (
    <div 
      className="relative min-h-screen flex items-center pt-20 overflow-hidden cyber-grid"
      onMouseMove={handleMouseMove}
    >
      {/* Parallax Blobs */}
      <motion.div 
        style={{ y: y1, opacity }}
        className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-[#1e88e5]/10 rounded-full blur-[120px] pointer-events-none"
      />
      <motion.div 
        style={{ y: y2, opacity }}
        className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-[#1565c0]/10 rounded-full blur-[100px] pointer-events-none"
      />

      <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-8 max-w-2xl"
        >
          
          <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-[1.1] tracking-tight">
            Protegendo negócios contra <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1e88e5] to-[#1565c0]">ameaças digitais.</span>
          </h1>
          
          <p className="text-xl text-slate-400 leading-relaxed max-w-xl">
            Cibersegurança de nível militar, automação inteligente e inteligência artificial aplicada à resiliência do seu negócio.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <motion.a 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#contact" 
              className="px-8 py-4 bg-[#1565c0] hover:bg-[#1e88e5] text-white font-bold rounded-lg flex items-center justify-center gap-2 transition-all shadow-xl shadow-[#1e88e5]/20"
            >
              Falar com Especialista
              <ChevronRight size={20} />
            </motion.a>
            <motion.a 
              whileHover={{ scale: 1.05, backgroundColor: "rgba(30, 41, 59, 0.8)" }}
              whileTap={{ scale: 0.95 }}
              href="#services" 
              className="px-8 py-4 bg-slate-800/50 hover:bg-slate-800 text-white font-bold rounded-lg border border-slate-700 transition-all flex items-center justify-center gap-2"
            >
              Nossos Serviços
              <ShieldCheck size={20} className="text-[#1e88e5]" />
            </motion.a>
          </div>

          <div className="flex items-center gap-8 pt-6">
            <div className="flex flex-col">
              <span className="text-3xl font-bold text-white">99.9%</span>
              <span className="text-xs text-slate-500 uppercase font-mono">Uptime Seguro</span>
            </div>
            <div className="w-px h-10 bg-slate-800"></div>
            <div className="flex flex-col">
              <span className="text-3xl font-bold text-white">200+</span>
              <span className="text-xs text-slate-500 uppercase font-mono">Empresas Protegidas</span>
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          style={{ rotateX: yMouse, rotateY: xMouse, perspective: 1000 }}
          className="hidden lg:block relative"
        >
          <div className="relative z-10 p-8 rounded-2xl bg-[#0A1A2F]/80 border border-[#1e88e5]/30 backdrop-blur-xl glow-[#1e88e5] shadow-2xl">
             <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-700/50">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="text-xs font-mono text-[#1e88e5]/70">SEC_SHELL_v2.0</div>
             </div>
             <motion.pre 
               className="font-mono text-sm leading-6 text-[#e3f2fd] whitespace-pre-wrap"
             >
               <code>{`$ cyber-scan --target enterprise-core
> Loading modules... [OK]
> Scanning ports... [184 detected]
> Analysing vulnerabilities...
[!!!] Warning: Unpatched API endpoint found.
[OK]  Firewall active.
[OK]  AI Sentinel monitoring traffic.
[OK]  Encryption layers: 3.
> Status: SYSTEM SECURE`}</code>
             </motion.pre>
          </div>
          {/* Decorative rotating element */}
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border border-[#1e88e5]/10 rounded-full pointer-events-none"
          />
          <motion.div 
            animate={{ rotate: -360 }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[90%] border border-[#1565c0]/10 rounded-full pointer-events-none"
          />
        </motion.div>
      </div>
    </div>
  );
};