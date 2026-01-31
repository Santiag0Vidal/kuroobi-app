import { motion } from "framer-motion";
import { CheckCircle2, BarChart3, Microscope } from "lucide-react";

export default function AnalisisFuncional() {
  const funcionalidad = [
    "Análisis muscular profundo",
    "Informes personalizados de rendimiento",
    "Test complementarios de funcionalidad corporal (FMS)",
    "Detección de asimetrías y puntos de fuga",
    "Prevención de lesiones específicas",
    "Optimización de la pisada y gesto técnico",
  ];

  const imgIdentity = "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1000&auto=format&fit=crop";

  return (
    <section className="py-32 px-6 max-w-7xl mx-auto border-t border-white/5">
      <div className="grid lg:grid-cols-2 gap-20 items-center">
        
        {/* LADO IZQUIERDO: TEXTO Y LISTA TÉCNICA */}
        <div className="space-y-10 order-2 lg:order-1">
          <div>
            <h2 className="text-4xl md:text-6xl font-black text-white leading-none uppercase tracking-tighter italic mb-6">
              Análisis Muscular <br />
              & <span className="text-red-600 text-7xl md:text-8xl">FMS</span>
            </h2>
            <p className="text-gray-400 text-xl font-light leading-relaxed">
              Implementamos testeos complementarios de funcionalidad corporal para generar 
              <strong> informes personalizados</strong> que dictan el rumbo de tu evolución.
            </p>
          </div>

          <ul className="grid gap-4">
            {funcionalidad.map((item, i) => (
              <motion.li 
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center gap-5 p-5 rounded-2xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.05] hover:border-amber-400/30 transition-all group"
              >
                <CheckCircle2 className="w-6 h-6 text-amber-400 group-hover:scale-110 transition-transform" />
                <span className="text-gray-200 font-black uppercase text-xs tracking-[0.1em]">
                  {item}
                </span>
              </motion.li>
            ))}
          </ul>
        </div>

        {/* LADO DERECHO: IMAGEN CONCEPTUAL */}
        <div className="relative group order-1 lg:order-2">
          {/* Brillo de fondo */}
          <div className="absolute -inset-4 bg-gradient-to-tr from-red-600/20 to-amber-400/20 rounded-[3.5rem] blur-2xl opacity-50 group-hover:opacity-100 transition-opacity"></div>
          
          <div className="relative rounded-[3rem] overflow-hidden border border-white/10 aspect-[4/5] shadow-2xl">
            <img 
              src={imgIdentity} 
              alt="Bio-Análisis Kuroobi" 
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100" 
            />
            
            {/* Overlay Gradiente */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
            
            {/* Info Flotante */}
            <div className="absolute bottom-10 left-10 right-10 p-8 bg-black/40 backdrop-blur-md border border-white/10 rounded-3xl">
              <div className="flex items-center gap-4 mb-2">
                <BarChart3 className="text-amber-400 w-8 h-8" />
                <h4 className="text-xl font-black uppercase italic tracking-tighter text-white">Metrics & Reports</h4>
              </div>
              <p className="text-[10px] text-gray-400 font-bold uppercase tracking-[0.2em]">
                Data-Driven High Performance
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}