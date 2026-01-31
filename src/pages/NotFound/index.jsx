import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Cpu, ChevronLeft, Zap } from "lucide-react";
import * as C from "../../componentes/index";
import jesusGif from "/iconos/jebus.gif";

export default function NotFound() {
  return (
    <div className="relative min-h-screen bg-black overflow-hidden flex flex-col items-center justify-center">
      <C.Navbar />

      {/* FONDO */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-red-900/20 via-black to-black" />
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage: `
              linear-gradient(#fff 1px, transparent 1px),
              linear-gradient(90deg, #fff 1px, transparent 1px)
            `,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      {/* CONTENIDO */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="relative z-10 flex flex-col items-center text-center px-6"
      >
        {/* GIF DE JESÚS BAILANDO */}
        <div className="relative mb-10">
          <motion.div
            animate={{ opacity: [0.4, 1, 0.4], scale: [1, 1.08, 1] }}
            transition={{ repeat: Infinity, duration: 2.5 }}
            className="absolute inset-0 bg-red-600/20 blur-3xl rounded-full"
          />

          <div className="relative bg-white border border-red-600/50 p-4 rounded-3xl backdrop-blur-xl">
            <img
              src={jesusGif}
              alt="Jesús bailando"
              className="w-28 h-28 md:w-36 md:h-36 object-contain rounded-xl"
            />
          </div>
        </div>

        {/* 404 */}
        <div className="relative">
          <h1 className="text-[120px] md:text-[180px] font-black leading-none tracking-tighter text-white opacity-10">
            404
          </h1>
          <div className="absolute inset-0 flex items-center justify-center">
            <h2 className="text-5xl md:text-7xl font-black italic uppercase text-white tracking-widest drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">
              ERROR 
            </h2>
          </div>
        </div>

        {/* MENSAJE */}
        <div className="max-w-md mt-4 space-y-4">
          <div className="flex items-center justify-center gap-2 text-red-500/80 font-mono text-[10px] tracking-[0.3em] uppercase">
            <Zap size={12} />
            <span>Pagina no encontrada</span>
          </div>
          <p className="text-gray-400 font-medium text-sm md:text-base leading-relaxed uppercase tracking-wide">
            Estamos trabajando en la app KUROOBI<br className="hidden md:block" />
            <span className="text-white font-bold italic">pronto tendras novedades.</span>
          </p>
        </div>

        {/* BOTÓN */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-12"
        >
          <Link
            to="/"
            className="group relative flex items-center gap-3 bg-white text-black px-8 py-4 rounded-full font-black uppercase text-xs tracking-[0.2em] overflow-hidden transition-all hover:bg-red-600 hover:text-white"
          >
            <ChevronLeft
              size={16}
              className="group-hover:-translate-x-1 transition-transform"
            />
            Volver a Kuroobi
            <div className="absolute bottom-0 left-0 h-[2px] bg-black group-hover:bg-white w-full animate-progress" />
          </Link>
        </motion.div>
      </motion.div>

      {/* STATUS BAR */}
      <div className="absolute bottom-10 w-full px-10 flex justify-between items-center opacity-20 hidden md:flex">
        <div className="flex items-center gap-4">
          <Cpu size={14} className="text-white" />
          <span className="text-[8px] font-mono text-white tracking-[0.5em]">
            STATUS: BLESSED
          </span>
        </div>
        <div className="text-[8px] font-mono text-white tracking-[0.5em]">
          LOCAL_TIME: {new Date().toLocaleTimeString()}
        </div>
      </div>
    </div>
  );
}
