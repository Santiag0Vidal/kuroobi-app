import { motion } from "framer-motion";
import PropTypes from "prop-types";
import { useMemo } from "react";

export default function SedeCarrusel({ images }) {
  // Ajustamos la duración para un movimiento suave pero dinámico
  const DURATION = 60; 
  
  const duplicatedImages = useMemo(() => [...images, ...images, ...images], [images]);

  return (
    <section className="py-16 md:py-24 bg-black overflow-hidden flex flex-col items-center w-full">
      
      {/* 1. DECORACIÓN TÉCNICA - Responsiva */}
      <div className="w-full max-w-7xl px-6 mb-12 flex justify-between items-end">
        <div className="flex items-center gap-4">
          <div className="w-8 md:w-12 h-[2px] bg-red-600" />
          <span className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.3em] md:tracking-[0.5em] text-gray-500">
            Instalaciones / Sede Central
          </span>
        </div>
        <div className="hidden lg:block text-[10px] font-mono text-white/20 tracking-widest">
          GPS: 38.9517° S, 68.0591° W
        </div>
      </div>

      {/* 2. CONTENEDOR DEL CARRUSEL - Aquí está la magia */}
      <div className="w-full relative overflow-hidden"> {/* Forzamos hidden aquí también */}
        
        {/* Degradados laterales ajustados para móvil (w-12 en móvil, w-32 en desktop) */}
        <div className="absolute inset-y-0 left-0 w-12 md:w-32 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-12 md:w-32 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />

        <motion.div
          className="flex gap-4 md:gap-6"
          animate={{
            x: ["0%", "-33.33%"],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: DURATION,
              ease: "linear",
            },
          }}
          style={{ width: "fit-content", display: "flex" }} // Aseguramos el layout flex
        >
          {duplicatedImages.map((img, idx) => (
            <motion.div
              key={`${img}-${idx}`}
              // Ajustamos el ancho en móvil a 280px para evitar desbordes
              className="relative flex-shrink-0 w-[280px] md:w-[500px] h-[300px] md:h-[450px] rounded-[1.5rem] md:rounded-[2.5rem] overflow-hidden border border-white/5 group shadow-2xl"
            >
              <img
                src={img}
                alt={`Sede Kuroobi ${idx}`}
                className="w-full h-full object-cover transition-all duration-700 grayscale-[0.3] group-hover:grayscale-0 md:group-hover:scale-110"
                loading="lazy"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />
              
              {/* Info inferior - más pequeña en móvil */}
              <div className="absolute bottom-6 left-6 flex items-center gap-2 md:opacity-0 md:group-hover:opacity-100 transition-all">
                <div className="w-1.5 h-1.5 bg-red-600 rounded-full" />
                <span className="text-[8px] md:text-[10px] font-black uppercase tracking-widest text-white">
                  Vista 0{ (idx % images.length) + 1 }
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* 3. LÍNEA DE PROGRESO - Ocultar si da problemas en móvil */}
      <div className="hidden sm:block w-full max-w-2xl h-[1px] bg-white/5 mt-16 relative overflow-hidden">
        <motion.div 
          animate={{ x: [-200, 600] }}
          transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
          className="absolute inset-0 w-20 h-full bg-red-600 blur-sm"
        />
      </div>
    </section>
  );

}

SedeCarrusel.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
};