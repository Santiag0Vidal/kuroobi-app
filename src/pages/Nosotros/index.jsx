// Nosotros.jsx
import * as C from "../../componentes/index";
import actividades from "../Actividades/actividades";
import { motion } from "framer-motion";

// 🚨 Definición de VARIANTE FALTANTE para los ítems de la lista 🚨
const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            type: "spring",
            stiffness: 100,
        },
    },
};
// ---------------------------------------------------------------

const textVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: { 
    y: 0, 
    opacity: 1, 
    transition: { type: "spring", stiffness: 50, duration: 0.8 } 
  },
};

const containerVariants = {
    hidden: { opacity: 0 }, // Añadido estado 'hidden' para el contenedor principal
    visible: {
        opacity: 1,
        transition: {
            delayChildren: 0.1, 
            staggerChildren: 0.15, 
        },
    },
};


export default function Nosotros() {
  return (
    <section
      id="nosotros"
      className="min-h-screen flex flex-col items-center justify-center text-center bg-gradient-to-b from-[var(--c-ink)] to-[var(--c-brown)] px-4 py-16"
    >
      <motion.div 
        className="flex flex-col items-center max-w-7xl w-full gap-12"
        variants={containerVariants}
        initial="hidden" // Usamos el estado 'hidden' del contenedor
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        
        {/* Título de la Sección */}
        <motion.div variants={textVariants}>
            <C.TituloSeccion texto="KUROOBI" />
        </motion.div>

        {/* Subtítulo */}
        <motion.div variants={textVariants}>
            <C.Subtitulo texto="Centro integral deportivo de rehabilitación y readaptación de alto rendimiento" />
        </motion.div>
        
        {/* Descripción principal */}
        <motion.div variants={textVariants} className="text-center text-[var(--c-graylite)] max-w-3xl flex flex-col items-center gap-4">
            <p>
              En <strong>Kuroobi</strong> reconstruimos nuestro gimnasio para crear el primer centro de rehabilitación y
              readaptación deportiva de Neuquén Capital.
            </p>
            <h4 className="text-xl font-bold text-yellow-300">
                🔨 Cada rincón está pensado para tu bienestar, 🏋️‍♀️ tu fuerza y tu recuperación.
            </h4>
            <p className="font-medium">
                📍 Cacique Catriel 434, Neuquén Capital
            </p>
        </motion.div>

        <h3 className="text-2xl font-semibold text-[var(--c-graylite)] mt-6">Nuestras Actividades</h3>
        
        {/* Lista de Actividades */}
        <ul className="flex flex-wrap justify-center gap-4">
          {actividades.map((act, idx) => (
            <motion.li 
              key={idx}
              variants={itemVariants} // Ahora existe y la animación funcionará
              className="px-4 py-2 bg-yellow-300 text-black rounded-full font-semibold shadow-md hover:scale-105 transition-transform cursor-pointer list-none"
              title={`${act.planes.length} plan(es) disponibles`}
            >
              {act.nombre}
            </motion.li>
          ))}
        </ul>

        {/* Horarios de apertura */}
        <motion.p variants={textVariants} className="mt-6 text-[var(--c-graylite)] text-lg">
          <strong className="text-yellow-300">Horario:</strong> Lunes a Viernes de 07:00 a 22:00 hs.
        </motion.p>

        {/* Mensaje motivacional con estilo de cita */}
        <motion.blockquote variants={textVariants} className="mt-6 text-[var(--c-graylite)] max-w-3xl italic p-4 border-l-4 border-yellow-300 bg-[var(--c-primary)]/20 rounded-md">
          <p className="text-lg">
            "✨ Nuestras puertas ya estan abiertas: sé parte de Kuroobi y viví esta
            transformación con nosotros."
          </p>
          <footer className="mt-2 text-sm text-gray-400">#readaptaciondeportiva #rehabilitación #fisioterapia #sportsrehab #wellness</footer>
        </motion.blockquote>
         
        {/* Componente Información */}
        <C.Informacion/> 
        
      </motion.div>
    </section>
  );
}