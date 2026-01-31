import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

function TituloSeccion({ texto, subtitulo = "Kuroobi Performance" }) {
  return (
    <div className="relative mb-20 flex flex-col items-center">
      {/* 1. TEXTO DE FONDO (Marca de agua sutil) */}
      <motion.span
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 0.05, x: 0 }}
        transition={{ duration: 1 }}
        className="absolute -top-10 text-7xl md:text-9xl font-black text-white pointer-events-none uppercase italic tracking-tighter"
      >
        {texto.split(" ")[0]}
      </motion.span>

      {/* 2. CONTENEDOR DEL TÍTULO PRINCIPAL */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 text-center"
      >
        {/* Etiqueta superior pequeña */}
        <div className="flex items-center justify-center gap-2 mb-4">
          <span className="w-8 h-[2px] bg-red-600" />
          <span className="text-[10px] font-black uppercase tracking-[0.5em] text-amber-400">
            {subtitulo}
          </span>
          <span className="w-8 h-[2px] bg-red-600" />
        </div>

        {/* El Título en sí */}
        <h2 className="text-5xl md:text-7xl font-black text-white italic tracking-tighter uppercase leading-none drop-shadow-2xl">
          {texto}
        </h2>

        {/* 3. ELEMENTO DECORATIVO TÉCNICO (En lugar de la línea simple) */}
        <motion.div 
          initial={{ width: 0 }}
          whileInView={{ width: "100%" }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="flex items-center gap-4 mt-6"
        >
          <div className="h-[4px] bg-red-600 flex-grow rounded-full" />
          <div className="w-3 h-3 bg-white rotate-45" />
          <div className="h-[4px] bg-gray-800 w-20 rounded-full" />
        </motion.div>
      </motion.div>
    </div>
  );
}

TituloSeccion.propTypes = {
  texto: PropTypes.string.isRequired,
  subtitulo: PropTypes.string,
};

export default TituloSeccion;