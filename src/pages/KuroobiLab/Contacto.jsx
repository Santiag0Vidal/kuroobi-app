import { motion } from "framer-motion";
import { Target } from "lucide-react";

const whatsappNumber = "542996055279";
const whatsappMessage = "Hola, vengo de la web. Me gustaría reservar una evaluación en Kuroobi Lab o recibir más información sobre las pruebas de fuerza y FMS.";

export default function Contacto() {
  return (
    <section className="py-40 px-6 text-center bg-gradient-to-t from-red-950/10 to-transparent relative overflow-hidden">
      {/* Fondo decorativo */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-600/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-4xl mx-auto space-y-12 relative z-10">
        
        {/* ICONO */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          whileInView={{ scale: 1, rotate: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 100, damping: 15 }}
        >
          <Target className="w-20 h-20 text-red-600 mx-auto" />
        </motion.div>

        {/* TÍTULO - Corregido aquí */}
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-5xl md:text-8xl font-black italic uppercase tracking-tighter leading-none"
        >
          ¿LISTO PARA <br />
          <span className="text-red-600 inline-block">
            <motion.span
              animate={{ opacity: [1, 0.5, 1] }}
              transition={{ repeat: Infinity, duration: 2 }}
            >
              MEDIR
            </motion.span>
          </span> TU POTENCIAL?
        </motion.h2>

        {/* BOTÓN Y TEXTO FINAL */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="pt-8"
        >
          <motion.a
            href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`}
            target="_blank" 
            rel="noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group relative bg-green-600 text-white font-black py-8 px-16 rounded-full transition-all shadow-[0_0_40px_rgba(22,163,74,0.2)] hover:shadow-[0_0_60px_rgba(22,163,74,0.4)] inline-block text-xl tracking-widest uppercase overflow-hidden"
          >
            {/* Efecto Shimmer */}
            <motion.div 
              animate={{ x: ['-150%', '150%'] }}
              transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12"
            />
            
            <span className="relative z-10 flex items-center gap-3">
              Agendar Evaluación Lab
            </span>
          </motion.a>

          <p className="mt-10 text-gray-500 font-bold uppercase tracking-[0.4em] text-[10px]">
            Neuquén Capital • Alto Rendimiento
          </p>
        </motion.div>
      </div>
    </section>
  );
}