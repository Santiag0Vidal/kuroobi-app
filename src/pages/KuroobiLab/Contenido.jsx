import { useEffect } from "react";
import { motion } from "framer-motion";
import { Microscope, Activity, Zap, ShieldCheck, HeartPulse, Crosshair } from "lucide-react";

// IMÁGENES
const imgHero = "https://images.unsplash.com/photo-1574680096145-d05b474e2155?q=80&w=1920&auto=format&fit=crop"; 
const imgFuerza = "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=800&auto=format&fit=crop"; 

// Galería de Equipos (Tus imágenes en public/lab)
const equipo1 = "/lab/lab1.jpeg";
const equipo2 = "/lab/lab2.jpeg";
const equipo3 = "/lab/lab3.jpg";  // Nota: Fíjate que esta es .jpg
const equipo4 = "/lab/lab1.jpeg";

const imagenesGaleria = [equipo1, equipo2, equipo3, equipo4];

// --- DATOS TÉCNICOS ---
const tecnicas = [
  "Osteopatía", "Taping Neuromuscular", "Kinesiología Funcional", 
  "Hidroterapia", "R.P.G.", "Rehabilitación en Campo", "Ondas de Choque"
];

const lesiones = [
  "Desgarros y distensiones", "Tendinopatías", "Pubalgias", 
  "Post-quirúrgicos", "Hombro doloroso", "Esguinces"
];

// --- VARIANTES DE ANIMACIÓN ---
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 100 } },
};

export default function KuroobiLab() {
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="min-h-screen bg-[var(--c-ink)] text-white pt-20">
      
      {/* 1. HERO SECTION */}
      <div className="relative h-[50vh] flex items-center justify-center overflow-hidden mb-16">
         {/* Fondo oscuro */}
         <div className="absolute inset-0 bg-gradient-to-b from-black/80 to-[var(--c-ink)] z-10"></div>
         <img src={imgHero} alt="Fondo Lab" className="absolute inset-0 w-full h-full object-cover opacity-40 blur-[2px]" />
         
         <div className="relative z-20 text-center px-4 max-w-5xl">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              {/* 👇 CAMBIO APLICADO: 'KURO' (blanco), 'OBI' (rojo), 'LAB' (amarillo) */}
              <h1 className="text-6xl md:text-8xl font-bold tracking-tighter mb-4 text-white">
                KURO<span className="text-red-600">OBI</span> <span className="text-yellow-300">LAB</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 font-light tracking-wide">
                Bio-Ingeniería del Movimiento y Rehabilitación Funcional
              </p>
            </motion.div>
         </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 pb-20 space-y-24">
        
        {/* 2. INTRODUCCIÓN Y CARACTERÍSTICAS */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true }} 
            variants={containerVariants}
            className="space-y-6"
          >
             <h2 className="text-3xl font-bold border-l-4 border-yellow-300 pl-4">
               Fusión: Ciencia Médica + <span className="text-red-600">Disciplina Marcial</span>
             </h2>
             <p className="text-gray-300 text-lg leading-relaxed">
               En el Lab dejamos atrás la rehabilitación tradicional basada solo en sensaciones. 
               Utilizamos <strong>datos objetivos</strong> para detectar asimetrías y déficits neuromusculares.
               Nuestro enfoque no es solo eliminar el dolor, sino descifrar la biomecánica de tu movimiento.
             </p>
             
             {/* Lista de características */}
             <div className="grid gap-4 mt-6">
                {[
                  { icon: <Microscope className="text-yellow-300 w-6 h-6"/>, t: "Análisis Biomecánico", d: "Evaluamos causas para evitar recidivas." },
                  { icon: <Zap className="text-yellow-300 w-6 h-6"/>, t: "Rehabilitación Deportiva", d: "Vuelta segura a la competencia (RTP)." },
                  { icon: <ShieldCheck className="text-yellow-300 w-6 h-6"/>, t: "Prevención de Lesiones", d: "Blindaje musculoesquelético." }
                ].map((item, i) => (
                  <motion.div key={i} variants={itemVariants} className="flex gap-4 p-4 bg-white/5 rounded-xl border border-white/5 hover:border-red-600/30 transition-colors shadow-lg">
                    <div className="mt-1">{item.icon}</div>
                    <div>
                      <h4 className="font-bold text-white text-lg">{item.t}</h4>
                      <p className="text-sm text-gray-400">{item.d}</p>
                    </div>
                  </motion.div>
                ))}
             </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            transition={{ duration: 0.8 }}
            className="relative"
          >
             <div className="absolute inset-0 bg-red-600 blur-[100px] opacity-10"></div>
             <img src={imgFuerza} alt="Medición de fuerza" className="relative rounded-2xl w-full object-cover shadow-2xl border border-white/10 rotate-2 hover:rotate-0 transition-all duration-500" />
          </motion.div>
        </div>

        {/* 3. ARSENAL TERAPÉUTICO vs FOCO */}
        <motion.div 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true }} 
          variants={containerVariants}
          className="grid md:grid-cols-2 gap-8"
        >
          {/* Columna Izquierda: Arsenal */}
          <motion.div variants={itemVariants} className="bg-[var(--c-primary)]/10 p-8 rounded-2xl border-l-4 border-yellow-300 shadow-lg">
            <div className="flex items-center gap-3 mb-6">
              <Activity className="text-yellow-300 w-8 h-8" />
              <h3 className="text-2xl font-bold text-white">Arsenal Terapéutico</h3>
            </div>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-4">
              {tecnicas.map((tech, i) => (
                <li key={i} className="flex items-center gap-2 text-gray-300">
                  <span className="w-2 h-2 bg-yellow-300 rounded-full shadow-[0_0_8px_rgba(253,224,71,0.8)]"></span>
                  {tech}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Columna Derecha: Lesiones */}
          <motion.div variants={itemVariants} className="bg-[var(--c-primary)]/10 p-8 rounded-2xl border-r-4 border-red-600 shadow-lg text-right md:text-left">
            <div className="flex items-center gap-3 mb-6 justify-end md:justify-start">
              <HeartPulse className="text-red-500 w-8 h-8" />
              <h3 className="text-2xl font-bold text-white">Foco de Acción</h3>
            </div>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-4">
              {lesiones.map((lesion, i) => (
                <li key={i} className="flex items-center gap-2 text-gray-300 justify-end md:justify-start">
                  <Crosshair className="w-4 h-4 text-red-500 flex-shrink-0" />
                  {lesion}
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>

        {/* 4. GALERÍA DE EQUIPAMIENTO */}
        <div className="bg-white/5 p-8 md:p-12 rounded-3xl border border-white/10 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-32 bg-yellow-300 rounded-full blur-[150px] opacity-5 pointer-events-none"></div>
          
          <div className="text-center mb-12 relative z-10">
            <h3 className="text-3xl font-bold mb-4 flex justify-center items-center gap-3">
              <Microscope className="text-yellow-300 w-8 h-8"/> Tecnología de Medición
            </h3>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Dispositivos de alta precisión para cuantificar tu progreso.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 relative z-10">
            {imagenesGaleria.map((img, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative aspect-square rounded-xl overflow-hidden border border-white/10 cursor-pointer"
              >
                <img 
                  src={img} 
                  alt={`Equipo ${index + 1}`} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-yellow-300 font-bold border border-yellow-300 px-3 py-1 text-sm rounded-full">
                    Ver
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* 5. CTA */}
        <div className="text-center py-8">
           <p className="text-gray-400 text-lg italic mb-8 max-w-2xl mx-auto">
              "Trabajamos interdisciplinariamente junto al <span className="text-yellow-300">Servicio de Traumatología</span>."
            </p>
           <a 
             href="https://wa.me/549XXXXXXXXXX" 
             target="_blank" 
             rel="noreferrer"
             className="inline-flex items-center gap-2 bg-yellow-300 text-black text-xl font-bold py-4 px-10 rounded-full hover:scale-105 hover:shadow-[0_0_20px_rgba(253,224,71,0.5)] transition-all"
           >
             <Zap className="fill-black w-5 h-5"/> RESERVAR EVALUACIÓN
           </a>
        </div>

      </div>
    </section>
  );
}