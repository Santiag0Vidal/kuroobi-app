import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Activity } from "lucide-react";

const logoLab = "/lab/lab_rojo.png"; 

const BannerLab = () => {
  return (
    <section className="w-full bg-[var(--c-ink)] py-16 px-4 flex justify-center border-t border-white/5 relative overflow-hidden">
      
      <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-5 pointer-events-none"></div>

      <Link to="/kuroobi-lab" className="w-full max-w-6xl group relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#0f0f0f] via-[#1a1a1a] to-[#0a0a0a] border border-white/10 p-8 md:p-12 flex flex-col md:flex-row items-center gap-10 shadow-2xl group-hover:border-amber-400/30 group-hover:shadow-[0_0_40px_rgba(251,191,36,0.15)] transition-all duration-500"
        >
          
          <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500 rounded-full blur-[120px] opacity-5 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none"></div>

          <div className="relative z-10 flex-shrink-0 p-6 rounded-full bg-white/5 border border-white/10 group-hover:scale-105 transition-transform duration-500">
            <img 
              src={logoLab} 
              alt="Logo Kuroobi Lab" 
              className="w-28 h-28 md:w-40 md:h-40 object-contain drop-shadow-xl"
            />
          </div>

          <div className="flex-1 text-center md:text-left z-10 space-y-4">
            
            {/* CORRECCIÓN AQUÍ: Usamos &quot; en lugar de comillas normales */}
            <h2 className="text-xl md:text-2xl font-light tracking-[0.2em] text-gray-300 uppercase border-b border-white/10 pb-4 mb-4 inline-block md:block">
              &quot;Todo lo que se puede medir, <span className="text-white font-bold">se puede mejorar</span>&quot;
            </h2>

            <h3 className="text-4xl md:text-6xl font-black text-white tracking-tighter">
              KURO<span className="text-red-600">OBI</span> <span className="text-amber-400">LAB</span>
            </h3>
            
            <p className="text-gray-400 font-light max-w-xl mx-auto md:mx-0 leading-relaxed">
              Plataforma de inteligencia integral. 
              Bio-Ingeniería aplicada al deportista neuquino.
            </p>
            
            <div className="pt-4 flex justify-center md:justify-start">
                <span className="inline-flex items-center gap-3 text-amber-400 text-sm font-bold uppercase tracking-widest bg-amber-400/10 px-6 py-3 rounded-full border border-amber-400/20 group-hover:bg-amber-400 group-hover:text-black transition-all duration-300">
                  Ingresar al Lab <ArrowRight className="w-4 h-4" />
                </span>
            </div>
          </div>

          <Activity className="absolute -bottom-8 -right-8 text-white/5 w-64 h-64 -rotate-12 pointer-events-none" />

        </motion.div>
      </Link>
    </section>
  );
};

export default BannerLab;