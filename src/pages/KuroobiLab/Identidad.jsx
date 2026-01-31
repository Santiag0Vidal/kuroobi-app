import { motion } from "framer-motion";

export default function Identidad() {
  return (
    <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center overflow-hidden">
      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="space-y-6"
      >
        <div className="inline-block border-l-4 border-red-600 pl-4">
          <h3 className="text-amber-400 font-bold tracking-widest text-sm uppercase mb-2">Identidad</h3>
          <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight uppercase tracking-tighter italic">
            Plataforma de <br /> Inteligencia Integral
          </h2>
        </div>
        <p className="text-gray-400 text-lg leading-relaxed font-light">
          En <strong>Kuro Obi Lab</strong> fusionamos datos científicos con la práctica deportiva real.
        </p>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.9, x: 50 }}
        whileInView={{ opacity: 1, scale: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative"
      >
        <img
          src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1000&auto=format&fit=crop"
          className="relative z-10 w-full grayscale hover:grayscale-0 transition-all duration-700 shadow-2xl rounded-sm"
        />
      </motion.div>
    </section>
  );
}