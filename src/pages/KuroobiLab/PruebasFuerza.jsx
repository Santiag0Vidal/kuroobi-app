import { motion } from "framer-motion";
import { Zap, Activity, Target, TrendingUp, Dumbbell } from "lucide-react";

const metricas = [
  { title: "Fuerza Balística", icon: <Zap /> },
  { title: "Ciclo Estiramiento Acortamiento", icon: <Activity /> },
  { title: "Fuerza Isométrica Máxima", icon: <Target /> },
  { title: "Fuerza Reactiva", icon: <TrendingUp /> },
  { title: "Potencia", icon: <Dumbbell /> },
];

export default function PruebasFuerza() {
  return (
    <section className="py-24 px-6 bg-[#080808] border-y border-white/5">
      <motion.div 
        className="max-w-7xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
        }}
      >
        <motion.h2 
          variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
          className="text-4xl md:text-6xl font-black uppercase italic mb-16 text-center tracking-tighter"
        >
          Pruebas de <span className="text-red-600">Fuerza Avanzada</span>
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
          {metricas.map((m, i) => (
            <motion.div 
              key={i}
              variants={{ hidden: { opacity: 0, scale: 0.8 }, visible: { opacity: 1, scale: 1 } }}
              whileHover={{ y: -10, borderColor: "rgba(220, 38, 38, 0.5)" }}
              className="bg-[#0c0c0c] p-10 rounded-[2.5rem] flex flex-col items-center border border-white/5 shadow-2xl transition-colors"
            >
              <div className="text-red-600 mb-6 bg-red-600/5 p-5 rounded-2xl">{m.icon}</div>
              <h4 className="text-[10px] font-black uppercase tracking-widest text-center text-gray-200">{m.title}</h4>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}