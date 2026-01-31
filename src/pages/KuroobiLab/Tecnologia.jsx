import { motion } from "framer-motion";
import { Microscope } from "lucide-react";

const imagenesGaleria = ["/lab/lab1.jpeg", "/lab/lab2.jpeg", "/lab/lab3.jpg", "/lab/lab1.jpeg"];

export default function Tecnologia() {
  // Variantes para la entrada de las fotos
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Cada foto aparece 0.2s después de la anterior
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    },
  };

  return (
    <section className="py-24 px-6 max-w-7xl mx-auto">
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="bg-[#0f0f0f] p-8 md:p-16 rounded-[2.5rem] border border-white/5 relative overflow-hidden text-center"
      >
        {/* Glow de fondo para dar profundidad */}
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-amber-400/5 rounded-full blur-[100px] pointer-events-none"></div>

        <motion.div 
          initial={{ scale: 0.5, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="inline-flex items-center justify-center p-4 bg-amber-400/10 rounded-full mb-6 relative z-10"
        >
          <Microscope className="text-amber-400 w-10 h-10" />
        </motion.div>

        <motion.h3 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-3xl md:text-5xl font-black italic uppercase tracking-tighter mb-12 relative z-10"
        >
          Tecnología de <span className="text-amber-400">Medición</span>
        </motion.h3>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 relative z-10"
        >
          {imagenesGaleria.map((img, index) => (
            <motion.div
              key={index}
              variants={imageVariants}
              whileHover={{ scale: 1.05, rotate: 1 }}
              className="group relative aspect-square rounded-2xl overflow-hidden border border-white/10 bg-black shadow-lg cursor-pointer"
            >
              <img 
                src={img} 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" 
                alt={`Equipo Lab ${index + 1}`} 
              />
              
              {/* Overlay de interacción */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <motion.span 
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="text-amber-400 font-bold border border-amber-400 px-4 py-2 text-[10px] rounded-full uppercase tracking-widest bg-black/20 backdrop-blur-sm"
                >
                  Ver Equipo
                </motion.span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}