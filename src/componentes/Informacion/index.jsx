import * as C from '../../componentes/index';
import { motion } from "framer-motion";
import { 
  Clock, 
  Dumbbell, 
  Users, 
  ShowerHead, 
  Award, 
  Percent, 
  Zap,
  Cpu
} from "lucide-react";

const infoItems = [
    { id: "SYS-01", icon: Clock, title: "Horario", description: "Lunes a Viernes de 07:00 a 22:00 hs", accent: "from-red-600 to-transparent" },
    { id: "SYS-02", icon: Dumbbell, title: "Planes", description: "Flexibilidad total: 2x, 3x o entrenamiento diario", accent: "from-gray-700 to-transparent" },
    { id: "SYS-03", icon: Users, title: "Staff Técnico", description: "Profesionales dedicados a la corrección biomecánica", accent: "from-gray-700 to-transparent" },
    { id: "SYS-04", icon: ShowerHead, title: "Infraestructura", description: "Vestuarios completos, duchas y lockers de seguridad", accent: "from-gray-700 to-transparent" },
    { id: "SYS-05", icon: Award, title: "Clases Élite", description: "G.A.P, Indoor, Funcional, Yoga y Karate Tradicional", accent: "from-gray-700 to-transparent" },
    { id: "SYS-06", icon: Percent, title: "Beneficios", description: "Planes familiares y abonos semestrales bonificados", accent: "from-red-600 to-transparent" },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.1 },
    },
};

const itemVariants = {
    hidden: { y: 20, opacity: 0, scale: 0.95 },
    visible: {
        y: 0,
        opacity: 1,
        scale: 1,
        transition: { duration: 0.5, ease: "circOut" },
    },
};

export default function InfoGimnasio() {
  return (
    <section className="py-20 md:py-32 flex flex-col items-center relative overflow-hidden bg-black">
      
      {/* Background Decor - Oculto en móviles muy pequeños para evitar ruido visual */}
      <div className="hidden sm:block absolute top-0 left-1/4 w-[1px] h-full bg-gradient-to-b from-transparent via-red-600/20 to-transparent opacity-50" />
      <div className="hidden sm:block absolute top-0 right-1/4 w-[1px] h-full bg-gradient-to-b from-transparent via-red-600/20 to-transparent opacity-50" />

      <div className="px-6 w-full flex flex-col items-center">
        <C.TituloSeccion texto="Mas informacion" subtitulo="En nuestra sede encontraras" />
      </div>
      
      <motion.div
        // Grid: 1 columna en móvil, 2 en tablet (md), 3 en escritorio (lg)
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl w-full mt-12 md:mt-16 px-6 relative z-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        {infoItems.map((item, index) => (
            <motion.div 
                key={index} 
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                className="relative group p-[1px] rounded-[1.5rem] md:rounded-[2rem] overflow-hidden h-full"
            >
                {/* Border Gradient Effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${item.accent} opacity-10 group-hover:opacity-100 transition-opacity duration-500`} />
                
                {/* Card Interior: p-8 en móvil para ganar espacio */}
                <div className="relative bg-[#080808] p-8 md:p-10 rounded-[1.5rem] md:rounded-[2rem] h-full flex flex-col items-start border border-white/5">
                    
                    {/* Top Technical Bar */}
                    <div className="w-full flex justify-between items-center mb-6 md:mb-8">
                        <span className="text-[9px] md:text-[10px] font-mono text-gray-600 tracking-[0.3em]">{item.id}</span>
                        <Cpu size={12} className="text-gray-800" />
                    </div>

                    {/* Icon with Scanner Effect */}
                    <div className="relative mb-6 md:mb-8">
                        <div className="bg-red-600/10 p-4 md:p-5 rounded-2xl relative z-10">
                            {/* Icono responsivo: un poco más chico en móvil */}
                            <item.icon size={28} className="text-red-600" />
                        </div>
                        {/* Shimmer animation */}
                        <motion.div 
                          animate={{ y: [-15, 30], opacity: [0, 1, 0] }}
                          transition={{ repeat: Infinity, duration: 2.5, ease: "linear" }}
                          className="absolute inset-0 w-full h-[2px] bg-red-600 blur-sm z-20"
                        />
                    </div>
                    
                    {/* Título: text-xl en móvil, text-2xl en desktop */}
                    <h3 className="text-xl md:text-2xl font-black uppercase italic tracking-tighter text-white mb-3 md:mb-4 flex items-center gap-3">
                        {item.title}
                        <div className="w-1.5 h-1.5 rounded-full bg-red-600 animate-pulse shadow-[0_0_10px_rgba(220,38,38,0.8)]" />
                    </h3>
                    
                    <p className="text-gray-500 text-xs md:text-sm font-bold leading-relaxed uppercase tracking-[0.05em] md:tracking-[0.1em] group-hover:text-gray-300 transition-colors">
                      {item.description}
                    </p>

                    {/* Bottom Aesthetic Detail */}
                    <div className="mt-auto pt-6 md:pt-8 flex gap-1">
                        <div className="w-8 h-[2px] bg-red-600" />
                        <div className="w-2 h-[2px] bg-gray-800" />
                        <div className="w-2 h-[2px] bg-gray-800" />
                    </div>
                </div>
            </motion.div>
        ))}
      </motion.div>
    </section>
  );
}