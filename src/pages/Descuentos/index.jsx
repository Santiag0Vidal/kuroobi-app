import { motion } from "framer-motion";
import { Users, CalendarDays, Award, Info } from "lucide-react";
import img from "../../assets/log-sin.png";
import * as C from "../../componentes/index";

export default function Descuentos() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section id="descuentos" className="min-h-screen bg-black py-24 px-6 relative overflow-hidden">
      
      {/* Elementos decorativos de fondo */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-red-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-amber-400/10 rounded-full blur-[120px] pointer-events-none" />

      <C.TituloSeccion texto="PLANES Y BENEFICIOS" subtitulo="Promociones Exclusivas" />

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10"
      >
        
        {/* CARD: PLAN FAMILIAR */}
        <motion.div variants={cardVariants} className="group relative bg-[#0a0a0a] border border-white/5 p-8 rounded-[2.5rem] hover:border-red-600/50 transition-all duration-500 shadow-2xl">
          <div className="bg-red-600/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
            <Users className="text-red-600" size={32} />
          </div>
          <h2 className="text-3xl font-black italic uppercase tracking-tighter text-white mb-6">Plan <br/><span className="text-red-600">Familiar</span></h2>
          <p className="text-[10px] font-black uppercase tracking-widest text-gray-500 mb-6 italic">3 o más personas</p>
          
          <ul className="space-y-4">
            {[
              { label: "2 veces x semana", desc: "15% OFF" },
              { label: "3 veces x semana", desc: "20% OFF" },
              { label: "Todos los días", desc: "20% OFF" },
            ].map((item, i) => (
              <li key={i} className="flex justify-between items-center border-b border-white/5 pb-2">
                <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">{item.label}</span>
                <span className="text-amber-400 font-black italic">{item.desc}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* CARD: ABONO SEMESTRAL */}
        <motion.div variants={cardVariants} className="group relative bg-[#0a0a0a] border border-white/5 p-8 rounded-[2.5rem] hover:border-amber-400/50 transition-all duration-500 shadow-2xl md:scale-105 z-20">
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-amber-400 text-black text-[10px] font-black uppercase tracking-[0.3em] px-6 py-2 rounded-full shadow-xl">
            Popular
          </div>
          <div className="bg-amber-400/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
            <CalendarDays className="text-amber-400" size={32} />
          </div>
          <h2 className="text-3xl font-black italic uppercase tracking-tighter text-white mb-6">Abono <br/><span className="text-amber-400">Semestral</span></h2>
          <p className="text-gray-400 text-sm font-medium mb-8 leading-relaxed">
            Asegurá tu entrenamiento por 6 meses y obtené un beneficio directo en el total.
          </p>
          <div className="bg-white/5 rounded-2xl p-6 text-center border border-white/5">
            <span className="block text-5xl font-black italic text-white mb-2">20%<span className="text-amber-400 font-black">OFF</span></span>
            <span className="text-[10px] font-black uppercase tracking-widest text-gray-500 italic text-center">Descuento Total</span>
          </div>
        </motion.div>

        {/* CARD: JUBILADOS */}
        <motion.div variants={cardVariants} className="group relative bg-[#0a0a0a] border border-white/5 p-8 rounded-[2.5rem] hover:border-red-600/50 transition-all duration-500 shadow-2xl">
          <div className="bg-red-600/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
            <Award className="text-red-600" size={32} />
          </div>
          <h2 className="text-3xl font-black italic uppercase tracking-tighter text-white mb-6">Adultos <br/><span className="text-red-600">Mayores</span></h2>
          <p className="text-gray-400 text-sm font-medium leading-relaxed mb-6">
            Valoramos la constancia. Descuentos especiales para jubilados gestionados de forma personalizada.
          </p>
          <div className="flex items-start gap-3 bg-white/5 p-4 rounded-xl border border-white/5">
            <Info size={16} className="text-amber-400 shrink-0" />
            <p className="text-[10px] text-gray-400 font-bold uppercase leading-relaxed">
              Presentar carnet de jubilación en recepción para aplicar el beneficio.
            </p>
          </div>
        </motion.div>

      </motion.div>

      {/* NOTAS TÉCNICAS INFERIORES */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="max-w-4xl mx-auto mt-20 p-8 bg-white/[0.02] border border-white/5 rounded-[2rem] flex flex-col md:flex-row items-center gap-8"
      >
        <img src={img} alt="Logo" className="w-24 opacity-30 grayscale" />
        <div className="space-y-4 text-center md:text-left">
          <h4 className="text-amber-400 text-[10px] font-black uppercase tracking-[0.4em]">Información Importante</h4>
          <p className="text-xs text-gray-500 font-bold leading-relaxed uppercase tracking-wider">
            Para planes familiares, el registro es individual vía web, pero el alta definitiva y el pago se procesan exclusivamente en recepción para configurar el sistema de acceso por llaveros.
          </p>
        </div>
      </motion.div>
    </section>
  );
}