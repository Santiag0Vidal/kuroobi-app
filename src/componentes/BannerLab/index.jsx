import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Activity, Cpu, Zap } from "lucide-react";

const logoLab = "/lab/lab_rojo.png"; 

const BannerLab = () => {
  return (
    <section className="w-full bg-black py-12 md:py-20 px-4 flex justify-center border-t border-white/5 relative overflow-hidden">
      
      {/* 1. FONDO TECNOLÓGICO: Cuadrícula sutil en lugar de patrón de carbono */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: `radial-gradient(circle, #fff 1px, transparent 1px)`, backgroundSize: '30px 30px' }}>
      </div>

      <Link to="/kuroobi-lab" className="w-full max-w-6xl group relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative overflow-hidden rounded-[2.5rem] bg-[#080808] border border-white/5 p-8 md:p-14 flex flex-col md:flex-row items-center gap-10 shadow-2xl transition-all duration-500"
        >
          
          {/* 2. EFECTOS DE LUZ (Glows) */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-red-600/10 rounded-full blur-[120px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-amber-400/5 rounded-full blur-[80px] pointer-events-none"></div>

          {/* 3. CONTENEDOR LOGO: Estilo "Core de IA" */}
          <div className="relative z-10 flex-shrink-0">
            <div className="relative p-8 rounded-full bg-black border border-white/10 group-hover:border-red-600/50 transition-all duration-700 shadow-[inset_0_0_20px_rgba(255,255,255,0.02)]">
                {/* Scanner animation circular */}
                <motion.div 
                  animate={{ rotate: 360 }}
                  transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
                  className="absolute inset-2 border-t-2 border-red-600/40 rounded-full"
                />
                <img 
                  src={logoLab} 
                  alt="Logo Kuroobi Lab" 
                  className="w-24 h-24 md:w-44 md:h-44 object-contain relative z-10 group-hover:scale-110 transition-transform duration-700"
                />
            </div>
          </div>

          {/* 4. CONTENIDO TEXTUAL */}
          <div className="flex-1 text-center md:text-left z-10">
            
            <div className="flex items-center justify-center md:justify-start gap-3 mb-6">
               <Cpu size={14} className="text-amber-400" />
               <span className="text-[10px] font-mono font-black uppercase tracking-[0.4em] text-amber-400/80">
                  Biological Intelligence System
               </span>
            </div>

            <h2 className="text-lg md:text-xl font-mono tracking-tight text-gray-400 mb-4 italic">
              &quot;Todo lo que se puede medir, <span className="text-white font-bold underline decoration-red-600 underline-offset-4">se puede mejorar</span>&quot;
            </h2>

            <h3 className="text-5xl md:text-7xl font-black text-white tracking-tighter mb-6 leading-none">
              KURO<span className="text-red-600">OBI</span><br className="md:hidden" />
              <span className="text-amber-400"> LAB</span>
            </h3>
            
            <p className="text-gray-500 text-sm md:text-base font-medium max-w-xl mx-auto md:mx-0 leading-relaxed uppercase tracking-wide">
              Bio-Ingeniería aplicada al deportista. <br />
              Análisis biomecánico y fisiológico de alta precisión.
            </p>
            
            <div className="pt-8 flex justify-center md:justify-start">
                <button className="relative overflow-hidden group/btn px-10 py-4 rounded-full bg-white text-black font-black uppercase text-xs tracking-[0.2em] transition-all hover:pr-14">
                  <span className="relative z-10 flex items-center gap-2">
                    Conoce mas de KUROOBI LAB <ArrowRight className="w-4 h-4" />
                  </span>
                  <div className="absolute inset-0 bg-amber-400 translate-x-[-100%] group-hover/btn:translate-x-0 transition-transform duration-500"></div>
                </button>
            </div>
          </div>

          {/* 5. ELEMENTO DECORATIVO: ECG Line */}
          <Activity className="absolute -bottom-10 -right-10 text-red-600/10 w-80 h-80 -rotate-12 pointer-events-none group-hover:text-red-600/20 transition-colors" />

        </motion.div>
      </Link>
    </section>
  );
};

export default BannerLab;