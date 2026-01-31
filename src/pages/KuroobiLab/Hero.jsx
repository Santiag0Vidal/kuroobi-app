import { motion } from "framer-motion";

export default function Hero() {
  const deportes = ["Fútbol", "Running", "Rugby", "Vóley", "Handball", "Artes Marciales", "Mountain Bike", "Ciclismo", "Tenis", "Básquet", "Golf", "Deportes en General"];

  return (
    <section className="relative h-screen w-full flex flex-col justify-center items-center overflow-hidden">
      {/* ... Video y Overlays se mantienen igual ... */}
      
      <div className="relative z-20 text-center px-6 max-w-5xl space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-xl md:text-3xl font-light tracking-[0.3em] uppercase text-amber-400 mb-6 italic">
            Todo lo que se puede medir <span className="font-bold text-white tracking-normal">se puede mejorar</span>
          </h2>
          <h1 className="text-6xl md:text-9xl font-black tracking-tighter text-white leading-none uppercase">
            KURO<span className="text-red-600">OBI</span> <span className="text-amber-400">LAB</span>
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="flex flex-wrap justify-center gap-x-8 gap-y-3 text-[10px] md:text-xs font-black tracking-[0.3em] text-gray-400 uppercase mt-12 border-y border-white/5 py-6 max-w-5xl mx-auto"
        >
          {deportes.map((d, i) => (
            <span key={i} className="hover:text-amber-400 transition-colors">{d}</span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}