import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import horarios from "./horarios"; 
import { ChevronDown, Clock, Calendar, Zap } from "lucide-react"; 
import * as C from "../../componentes/index";

const dias = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes"];

const obtenerDiaActual = () => {
    const d = new Date();
    const nombreDia = d.toLocaleDateString('es-AR', { weekday: 'long' }); 
    let dia = nombreDia.charAt(0).toUpperCase() + nombreDia.slice(1);
    if (dia === "Miércoles") return "Miercoles"; 
    return dias.includes(dia) ? dia : null;
};

export default function HorariosAcordeon() {
  const diaActual = useMemo(() => obtenerDiaActual(), []);
  const [openDay, setOpenDay] = useState(diaActual);

  const ordenarActividades = (a, b) => a.inicio.localeCompare(b.inicio);

  return (
    <section id="horarios" className="min-h-screen bg-black py-24 px-6 relative overflow-hidden">
      
      {/* Fondo decorativo sutil */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-red-600/5 rounded-full blur-[120px] pointer-events-none" />

      <C.TituloSeccion texto="CRONOGRAMA" subtitulo="Horarios de Entrenamiento" />

      <div className="w-full max-w-4xl mx-auto mt-12 space-y-4 relative z-10">
        {dias.map((dia, index) => {
          const actividadesDia = horarios
            .filter((h) => h.dia === dia)
            .sort(ordenarActividades);
            
          const isOpen = openDay === dia;
          const isToday = dia === diaActual;

          return (
            <div key={dia} className="border border-white/5 rounded-[2rem] overflow-hidden bg-[#0a0a0a]">
              
              {/* HEADER DEL DÍA */}
              <button
                onClick={() => setOpenDay(isOpen ? null : dia)}
                className={`w-full flex justify-between items-center px-8 py-6 transition-all duration-300 ${
                    isOpen ? "bg-white/5" : "hover:bg-white/[0.02]"
                }`}
              >
                <div className="flex items-center gap-4">
                    <div className={`p-2 rounded-xl ${isToday ? "bg-red-600 text-white" : "bg-white/5 text-gray-500"}`}>
                        <Calendar size={20} />
                    </div>
                    <span className={`text-xl font-black uppercase italic tracking-tighter ${isToday ? "text-white" : "text-gray-400"}`}>
                        {dia}
                    </span>
                    {isToday && (
                        <span className="text-[10px] font-black bg-amber-400 text-black px-3 py-1 rounded-full tracking-widest uppercase ml-2 animate-pulse">
                            Hoy
                        </span>
                    )}
                </div>
                <motion.div animate={{ rotate: isOpen ? 180 : 0 }}>
                    <ChevronDown className={isOpen ? "text-red-600" : "text-gray-600"} />
                </motion.div>
              </button>

              {/* CONTENIDO (ACTIVIDADES) */}
              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                  >
                    <div className="px-8 pb-8 space-y-3">
                      {actividadesDia.length > 0 ? (
                        actividadesDia.map((act, idx) => (
                          <motion.div
                            key={idx}
                            initial={{ x: -20, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: idx * 0.05 }}
                            className="flex flex-col md:flex-row justify-between items-center bg-white/[0.03] border border-white/5 rounded-2xl p-5 hover:border-red-600/30 transition-all group"
                          >
                            <div className="flex items-center gap-4">
                              <Zap size={16} className="text-red-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                              <span className="font-black text-white uppercase italic tracking-tight text-lg">
                                {act.actividad}
                              </span>
                            </div>
                            
                            <div className="flex items-center gap-6 mt-4 md:mt-0">
                              <div className="flex items-center gap-2 text-gray-400">
                                <Clock size={16} className="text-amber-400" />
                                <span className="font-mono font-bold tracking-widest text-sm">
                                  {act.inicio} — {act.fin}
                                </span>
                              </div>
                              
                              <a 
                                href={`#actividades`} 
                                className="bg-white text-black text-[10px] font-black uppercase tracking-widest px-6 py-2 rounded-full hover:bg-red-600 hover:text-white transition-all shadow-lg"
                              >
                                Detalles
                              </a>
                            </div>
                          </motion.div>
                        ))
                      ) : (
                        <p className="text-gray-600 text-sm font-bold uppercase tracking-widest py-10">
                          Sin actividades programadas
                        </p>
                      )}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </section>
  );
}