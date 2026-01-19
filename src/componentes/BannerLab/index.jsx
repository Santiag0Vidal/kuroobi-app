import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Activity } from "lucide-react";

// 👇 CAMBIA ESTO: Pon el nombre exacto de tu logo que esté en la carpeta public
// Ejemplo: "/logo.png" o "/lab/logo-lab.png"
const logoLab = "/lab/lab_rojo.png"; 

const BannerLab = () => {
  return (
    <section className="w-full bg-[var(--c-ink)] py-12 px-4 flex justify-center border-t border-white/5">
      <Link to="/kuroobi-lab" className="w-full max-w-5xl group">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          // Estilos: Fondo oscuro con gradiente, borde sutil, brillo al pasar el mouse
          className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-[#0a0a0a] to-[#1a1a1a] border border-white/10 p-6 md:p-10 flex flex-col md:flex-row items-center gap-8 shadow-2xl transition-all duration-500 group-hover:border-yellow-300/40 group-hover:shadow-[0_0_25px_rgba(253,224,71,0.1)]"
        >
          
          {/* Fondo decorativo (Luz amarilla suave) */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-300 rounded-full blur-[100px] opacity-5 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none"></div>

          {/* 1. LOGO (Izquierda) */}
          <div className="relative z-10 flex-shrink-0 bg-white/5 p-4 rounded-full border border-white/5 group-hover:scale-110 transition-transform duration-500">
            <img 
              src={logoLab} 
              alt="Logo Kuroobi Lab" 
              className="w-24 h-24 md:w-32 md:h-32 object-contain"
            />
          </div>

          {/* 2. TEXTO (Centro/Derecha) */}
          <div className="flex-1 text-center md:text-left z-10 space-y-3">
            <h3 className="text-3xl md:text-5xl font-bold text-white tracking-tighter">
              KURO<span className="text-red-600">OBI</span> <span className="text-yellow-300">LAB</span>
            </h3>
            <p className="text-gray-400 text-sm md:text-lg font-light max-w-xl mx-auto md:mx-0">
              Centro de <strong>Bio-Ingeniería y Rehabilitación Deportiva</strong>. 
              Diagnóstico preciso y tecnología de alto rendimiento.
            </p>
            
            {/* Botón visual */}
            <div className="pt-2 flex justify-center md:justify-start">
                <span className="inline-flex items-center gap-2 text-yellow-300 text-sm font-bold uppercase tracking-widest group-hover:gap-4 transition-all duration-300">
                  Ingresar al Lab <ArrowRight className="w-4 h-4" />
                </span>
            </div>
          </div>

          {/* Icono de fondo decorativo */}
          <Activity className="absolute -bottom-6 -right-6 text-white/5 w-48 h-48 -rotate-12 pointer-events-none" />

        </motion.div>
      </Link>
    </section>
  );
};

export default BannerLab;