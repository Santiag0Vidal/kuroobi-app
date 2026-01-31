import * as C from "../../componentes/index";
import actividades from "../Actividades/actividades";
import { motion } from "framer-motion";
import { ShieldCheck, MapPin, Clock, Quote } from "lucide-react";

const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0, opacity: 1,
        transition: { type: "spring", stiffness: 100 }
    },
};

const textVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: { 
    y: 0, opacity: 1, 
    transition: { duration: 0.8, ease: "easeOut" } 
  },
};

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.15 },
    },
};

export default function Nosotros() {
  return (
    <section id="nosotros" className="min-h-screen bg-black flex flex-col items-center justify-center py-20 md:py-32 px-4 md:px-6 relative overflow-hidden">
      
      {/* DECORACIÓN DE FONDO - Reducida en móvil para no tapar texto */}
      <div className="absolute top-0 right-0 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-red-600/5 rounded-full blur-[80px] md:blur-[150px] pointer-events-none" />

      <motion.div 
        className="max-w-6xl w-full relative z-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        
        {/* Título Principal - Padding ajustado */}
        <motion.div variants={textVariants} className="mb-10 md:mb-16">
            <C.TituloSeccion texto="NOSOTROS" subtitulo="Filosofía Kuroobi" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 md:gap-12 items-start">
          
          {/* LADO IZQUIERDO: EL MANIFIESTO */}
          <div className="lg:col-span-3 space-y-8 md:space-y-10 text-left">
            <motion.div variants={textVariants} className="space-y-4 md:space-y-6">
              {/* Título responsivo: text-3xl en móvil, text-5xl en desktop */}
              <h3 className="text-3xl md:text-5xl font-black italic uppercase tracking-tighter text-white leading-[1.1] md:leading-none">
                Primer centro de <br className="hidden md:block" />
                <span className="text-red-600">Readaptación</span> deportiva de Neuquén
              </h3>
              <p className="text-gray-400 text-base md:text-lg font-light leading-relaxed">
                En <strong>Kuroobi</strong> no solo entrenamos cuerpos; decodificamos el movimiento. Reconstruimos nuestro espacio para crear una infraestructura de elite dedicada a la <strong>fisioterapia, la rehabilitación y el alto rendimiento</strong>.
              </p>
            </motion.div>

            {/* Bloque de Datos Técnicos: 1 col en móvil, 2 en sm+ */}
            <motion.div variants={textVariants} className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 pt-4">
              <div className="flex items-center gap-4 bg-white/5 p-5 md:p-6 rounded-2xl border border-white/5 hover:border-red-600/30 transition-all group">
                <MapPin className="text-red-600 group-hover:scale-110 transition-transform flex-shrink-0" size={24} />
                <div>
                  <p className="text-[9px] md:text-[10px] font-black uppercase tracking-widest text-gray-500">Ubicación</p>
                  <p className="text-xs md:text-sm font-bold text-white uppercase italic">Cacique Catriel 434, NQN</p>
                </div>
              </div>
              <div className="flex items-center gap-4 bg-white/5 p-5 md:p-6 rounded-2xl border border-white/5 hover:border-amber-400/30 transition-all group">
                <Clock className="text-amber-400 group-hover:scale-110 transition-transform flex-shrink-0" size={24} />
                <div>
                  <p className="text-[9px] md:text-[10px] font-black uppercase tracking-widest text-gray-500">Operatividad</p>
                  <p className="text-xs md:text-sm font-bold text-white uppercase italic">07:00 — 22:00 HS</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* LADO DERECHO: ACTIVIDADES - Padding reducido en móvil */}
          <div className="lg:col-span-2 space-y-6 md:space-y-8 bg-white/[0.02] border border-white/5 p-6 md:p-10 rounded-[2rem] md:rounded-[2.5rem] backdrop-blur-sm">
            <div className="flex items-center gap-3 mb-2">
              <ShieldCheck className="text-red-600 flex-shrink-0" size={20} />
              <h4 className="text-[11px] md:text-sm font-black uppercase tracking-[0.2em] md:tracking-[0.3em] text-white italic">Disciplinas Activas</h4>
            </div>
            
            <ul className="flex flex-wrap gap-2">
              {actividades.map((act, idx) => (
                <motion.li 
                  key={idx}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }}
                  className="px-3 py-1.5 md:px-4 md:py-2 border border-white/10 text-gray-300 rounded-full text-[8px] md:text-[10px] font-black uppercase tracking-widest transition-all cursor-default"
                >
                  {act.nombre}
                </motion.li>
              ))}
            </ul>

            <div className="pt-6 border-t border-white/5">
               <p className="text-[8px] md:text-[9px] font-bold text-gray-500 uppercase tracking-widest leading-relaxed">
                  Cada rincón está diseñado bajo estándares de biomecánica aplicada para asegurar tu bienestar.
               </p>
            </div>
          </div>
        </div>

        {/* Cita de Cierre - Ajustada para no perderse en pantallas pequeñas */}
        <motion.div variants={textVariants} className="mt-16 md:mt-24 relative max-w-4xl mx-auto px-4">
          <Quote className="absolute -top-6 -left-2 md:-top-10 md:-left-10 text-red-600/10 w-16 h-16 md:w-24 md:h-24" />
          <blockquote className="text-lg md:text-3xl font-black italic uppercase tracking-tighter text-white/80 leading-tight text-center md:text-left">
            "Sé parte de Kuroobi y viví la transformación tecnológica del entrenamiento."
          </blockquote>
          <div className="mt-8 flex flex-wrap justify-center gap-3 md:gap-4">
            {['#READAPTACION', '#FISIOTERAPIA', '#SPORTSREHAB', '#WELLNESS'].map(tag => (
              <span key={tag} className="text-[8px] md:text-[9px] font-black text-red-600 tracking-[0.15em] md:tracking-[0.2em]">{tag}</span>
            ))}
          </div>
        </motion.div>

        {/* Componente Información extra */}
        <div className="mt-12">
          <C.Informacion/> 
        </div>
        
      </motion.div>
    </section>
  );
}