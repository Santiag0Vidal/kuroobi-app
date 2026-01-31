import { motion } from "framer-motion";
import { ClipboardList, BrainCircuit, TrendingUp } from "lucide-react";

const steps = [
  {
    id: "01",
    title: "PLANIFICAR",
    subtitle: "Diseñar antes de ejecutar",
    desc: "Evaluamos a la persona. Analizamos biomecánica, historial y objetivos. Nada se deja al azar.",
    icon: <ClipboardList className="w-8 h-8 text-amber-400" />,
  },
  {
    id: "02",
    title: "PREPARAR",
    subtitle: "Estrategia personalizada",
    desc: "Marcamos puntos débiles y riesgos de lesión. Armamos una rutina 100% adaptada a tus necesidades.",
    icon: <BrainCircuit className="w-8 h-8 text-red-500" />,
  },
  {
    id: "03",
    title: "EJECUTAR",
    subtitle: "Acompañamiento Integral",
    desc: "Avanzamos paso a paso. Monitoreo constante con datos científicos para ajustar la carga en tiempo real.",
    icon: <TrendingUp className="w-8 h-8 text-white" />,
  },
];

export default function Proceso() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    },
  };

  return (
    <section className="bg-[#0a0a0a] py-24 px-6 border-y border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* CABECERA */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl md:text-5xl font-black italic uppercase tracking-tighter mb-4">
            La Profesionalización del Deportista
          </h2>
          <p className="text-gray-500 uppercase text-[10px] tracking-[0.4em] font-bold">
            Un proceso metódico diseñado para resultados tangibles
          </p>
        </motion.div>

        {/* GRID DE PASOS */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-3 gap-8 relative"
        >
          {/* Línea decorativa */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-y-1/2 z-0" />

          {steps.map((step, index) => (
            <motion.div 
              key={index}
              variants={cardVariants}
              whileHover={{ y: -10 }}
              className="relative z-10 bg-[#111] border border-white/10 p-10 rounded-[2.5rem] group transition-all hover:border-amber-400/50 shadow-2xl"
            >
              <div className="flex justify-between items-start mb-8">
                <div className="bg-white/5 p-4 rounded-2xl group-hover:bg-amber-400/10 transition-colors">
                  {step.icon}
                </div>
                <span className="text-5xl font-black text-white/[0.03] group-hover:text-amber-400/10 transition-colors select-none">
                  {step.id}
                </span>
              </div>
              
              <h3 className="text-2xl font-black text-white mb-2 uppercase italic tracking-tight">
                {step.title}
              </h3>
              <h4 className="text-[10px] text-amber-400 font-black uppercase tracking-[0.2em] mb-6">
                {step.subtitle}
              </h4>
              <p className="text-gray-400 leading-relaxed text-sm font-medium">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}