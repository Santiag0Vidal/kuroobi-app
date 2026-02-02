import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Cpu, ChevronLeft, Zap } from "lucide-react";
import * as C from "../../componentes/index";
import jesusGif from "/iconos/jebus.gif";

export default function NotFound() {
  return (
    <div className="relative min-h-screen bg-black overflow-x-hidden flex flex-col">
      {/* NAVBAR - Siempre arriba */}
      <nav className="relative z-50 w-full">
        <C.NavComun />
      </nav>

      {/* FONDO - Con z-index bajo para no tapar nada */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-red-900/20 via-black to-black" />
        <div
          className="absolute inset-0 opacity-[0.03] md:opacity-[0.05]"
          style={{
            backgroundImage: `
              linear-gradient(#fff 1px, transparent 1px),
              linear-gradient(90deg, #fff 1px, transparent 1px)
            `,
            backgroundSize: "clamp(30px, 5vw, 50px) clamp(30px, 5vw, 50px)",
          }}
        />
      </div>

      {/* CONTENIDO PRINCIPAL */}
      <main className="relative z-10 flex-1 flex flex-col items-center justify-center px-4 py-12 md:py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center w-full max-w-4xl"
        >
          {/* GIF DE JESÚS BAILANDO - Tamaño adaptativo */}
          <div className="relative mb-6 md:mb-10">
            <motion.div
              animate={{ opacity: [0.3, 0.7, 0.3], scale: [1, 1.1, 1] }}
              transition={{ repeat: Infinity, duration: 3 }}
              className="absolute inset-0 bg-red-600/30 blur-[40px] md:blur-[60px] rounded-full"
            />
            <div className="relative bg-white border border-white/20 p-3 md:p-4 rounded-[2rem] backdrop-blur-md">
              <img
                src={jesusGif}
                alt="Jesús bailando"
                className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 object-contain rounded-2xl shadow-2xl"
              />
            </div>
          </div>

          {/* TITULO 404 - Ajuste de escala responsivo */}
          <div className="relative w-full flex items-center justify-center py-4">
            <h1 className="text-[22vw] md:text-[180px] font-black leading-none tracking-tighter text-white/5 select-none">
              404
            </h1>
            <div className="absolute inset-0 flex items-center justify-center">
              <h2 className="text-4xl sm:text-6xl md:text-8xl font-black italic uppercase text-white tracking-[0.15em] drop-shadow-2xl">
                ERROR 
              </h2>
            </div>
          </div>

          {/* TEXTO INFORMATIVO */}
          <div className="max-w-xs sm:max-w-md mt-6 space-y-4">
            <div className="flex items-center justify-center gap-2 text-red-500 font-mono text-[9px] sm:text-[11px] tracking-[0.3em] uppercase">
              <Zap size={14} fill="currentColor" className="animate-pulse" />
              <span>Acceso restringido / Link roto</span>
            </div>
            
            <p className="text-gray-400 font-medium text-xs sm:text-sm md:text-base leading-relaxed uppercase tracking-widest">
              Estamos optimizando la experiencia <span className="text-white font-bold">KUROOBI</span>. 
              <span className="block mt-1 text-red-500/80 italic">Regresa pronto para el despliegue.</span>
            </p>
          </div>

          {/* BOTÓN - Mejorado para móviles (más área de toque) */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="mt-10 md:mt-14"
          >
            <Link
              to="/"
              className="group relative flex items-center gap-3 bg-white text-black px-8 py-4 sm:px-10 sm:py-5 rounded-full font-black uppercase text-[10px] sm:text-xs tracking-[0.2em] transition-all hover:bg-red-600 hover:text-white shadow-[0_10px_30px_rgba(255,255,255,0.1)]"
            >
              <ChevronLeft
                size={18}
                className="group-hover:-translate-x-1 transition-transform"
              />
              Volver al inicio
            </Link>
          </motion.div>
        </motion.div>
      </main>

      {/* FOOTER / STATUS BAR - Se oculta en móviles muy pequeños para limpiar la UI */}
      <footer className="relative z-10 w-full p-6 md:px-12 flex flex-col sm:flex-row justify-between items-center gap-4 opacity-40">
        <div className="flex items-center gap-3">
          <Cpu size={14} className="text-red-600 animate-pulse" />
          <span className="text-[8px] sm:text-[10px] font-mono text-white tracking-[0.4em]">
            SYSTEM_STATUS: <span className="text-green-500">BLESSED</span>
          </span>
        </div>
        <div className="hidden sm:block text-[8px] sm:text-[10px] font-mono text-white tracking-[0.4em]">
          NODE_STATION: {new Date().getFullYear()} // {new Date().toLocaleTimeString()}
        </div>
      </footer>
    </div>
  );
}