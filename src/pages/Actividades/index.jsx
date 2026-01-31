import * as C from "../../componentes/index.js";
import CardActividades from "./Cards/index.jsx";
import { motion } from "framer-motion";

const listaActividades = [
  { titulo: "MUSCULACION", img: "/Actividades/musculacion.JPG" },
  { titulo: "KARATE", img: "/Actividades/karate.jpg" },
  { titulo: "KARATE NIÑOS", img: "/Actividades/karate-ni.jpg" },
  { titulo: "INDOOR", img: "/Actividades/indoor.JPG" },
  { titulo: "FUNCIONAL", img: "/Actividades/funcional.jpg" },
  { titulo: "YOGA", img: "/Actividades/yoga.jpg" },
  { titulo: "STRETCHING", img: "/Actividades/stretching.png" },
  { titulo: "GAP", img: "/Actividades/gap.jpg" },
  { titulo: "FULL", img: "/Actividades/full.png" },
];

export default function Actividades() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
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
    <section
      id="actividades"
      className="min-h-screen bg-black py-24 px-6 relative overflow-hidden"
    >
      {/* Título de Sección */}
      <C.TituloSeccion texto="ALTERNATIVAS DE ACTIVIDADES" subtitulo="Entrenamiento Pro" />

      {/* Grilla de Actividades */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center"
      >
        {listaActividades.map((act, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            className="w-full flex justify-center"
          >
            <CardActividades
              titulo={act.titulo}
              descripcion={act.titulo}
              imagen={act.img}
            />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}