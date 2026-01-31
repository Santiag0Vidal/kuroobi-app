import { motion } from "framer-motion";
import { Zap, HeartPulse, Crosshair } from "lucide-react";

const tecnicas = ["Osteopatía", "Taping Neuromuscular", "Kinesiología Funcional", "Hidroterapia", "R.P.G.", "Rehabilitación en Campo", "Ondas de Choque"];
const lesiones = ["Desgarros y distensiones", "Tendinopatías", "Pubalgias", "Post-quirúrgicos", "Hombro doloroso", "Esguinces"];

export default function ArsenalClinico() {
  // Variantes para las listas internas
  const listVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section className="py-24 px-6 bg-[#080808] border-t border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* TÍTULO CON ANIMACIÓN */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-black uppercase italic tracking-tighter">
            Abordaje Clínico <span className="text-red-600">&</span> Terapéutico
          </h2>
          <p className="text-gray-500 mt-4 font-bold uppercase text-xs tracking-[0.3em]">
            Herramientas y tratamiento de éxito
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          
          {/* COLUMNA IZQUIERDA: ARSENAL (Slide desde la izquierda) */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="bg-[#111] p-10 rounded-3xl border-l-4 border-amber-400 shadow-2xl hover:bg-[#141414] transition-colors"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="bg-amber-400/10 p-3 rounded-xl">
                <Zap className="text-amber-400" size={28} />
              </div>
              <h3 className="text-2xl font-black uppercase italic tracking-tighter">Arsenal Terapéutico</h3>
            </div>
            
            <motion.ul 
              variants={listVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            >
              {tecnicas.map((tech, i) => (
                <motion.li 
                  key={i} 
                  variants={itemVariants}
                  className="text-gray-400 text-sm flex items-center gap-3 group"
                >
                  <span className="w-1.5 h-1.5 bg-amber-400 rounded-full group-hover:scale-150 transition-transform" /> 
                  {tech}
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          {/* COLUMNA DERECHA: FOCO (Slide desde la derecha) */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="bg-[#111] p-10 rounded-3xl border-r-4 border-red-600 shadow-2xl hover:bg-[#141414] transition-colors text-right md:text-left"
          >
            <div className="flex items-center gap-4 mb-8 justify-end md:justify-start">
              <h3 className="text-2xl font-black uppercase italic tracking-tighter order-1 md:order-2">Foco de Acción</h3>
              <div className="bg-red-600/10 p-3 rounded-xl order-2 md:order-1">
                <HeartPulse className="text-red-600" size={28} />
              </div>
            </div>

            <motion.ul 
              variants={listVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            >
              {lesiones.map((lesion, i) => (
                <motion.li 
                  key={i} 
                  variants={itemVariants}
                  className="text-gray-400 text-sm flex items-center gap-3 justify-end md:justify-start group"
                >
                  <Crosshair 
                    size={14} 
                    className="text-red-600 group-hover:rotate-90 transition-transform duration-500 order-2 md:order-1" 
                  /> 
                  <span className="order-1 md:order-2">{lesion}</span>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

        </div>
      </div>
    </section>
  );
}