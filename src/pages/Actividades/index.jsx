import * as C from "../../componentes/index.js";
import CardActividades from "./Cards/index.jsx";
import { motion } from "framer-motion";

export default function Actividades() {

  // Animación suave de aparición
  const item = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 }
  };

  // Configuración de tiempos
  const baseDuration = 0.8; // animación más lenta
  const baseDelay = 0.25;   // se demora más en iniciar cada card

  return (
    <section
      id="actividades"
      className="
        min-h-screen flex flex-col items-center justify-center text-center 
        bg-gradient-to-b from-[var(--c-ink)]/90 via-[var(--c-ink)]/70 to-[var(--c-brown)]
        px-4 py-16
      "
    >
      <div className="flex flex-col items-center max-w-7xl w-full">

        <C.TituloSeccion texto="ALTERNATIVAS DE ACTIVIDADES" />

        <div className="grid grid-cols-1 gap-6 w-full mt-10">

          {/* 1 - MUSCULACION */}
          <motion.div
            variants={item}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: baseDuration, delay: baseDelay * 1 }}
          >
            <CardActividades
              titulo="MUSCULACION"
              descripcion="Musculacion"
              imagen="/Actividades/musculacion.JPG"
            />
          </motion.div>

          {/* 2 - KARATE */}
          <motion.div
            variants={item}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: baseDuration, delay: baseDelay * 1.5 }}
          >
            <CardActividades
              titulo="KARATE"
              descripcion="Karate"
              imagen="/Actividades/karate.jpg"
            />
          </motion.div>

          {/* 3 - KARATE NIÑOS */}
          <motion.div
            variants={item}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: baseDuration, delay: baseDelay * 2 }}
          >
            <CardActividades
              titulo="KARATE NIÑOS"
              descripcion="Karate Niños"
              imagen="/Actividades/karate-ni.jpg"
            />
          </motion.div>

          {/* 4 - INDOOR CYCLING */}
          <motion.div
            variants={item}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: baseDuration, delay: baseDelay * 2.5 }}
          >
            <CardActividades
              titulo="INDOOR CYCLING"
              descripcion="Indoor"
              imagen="/Actividades/indoor.JPG"
            />
          </motion.div>

          {/* 5 - FUNCIONAL */}
          <motion.div
            variants={item}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: baseDuration, delay: baseDelay * 3 }}
          >
            <CardActividades
              titulo="FUNCIONAL"
              descripcion="Funcional"
              imagen="/Actividades/funcional.jpg"
            />
          </motion.div>

          {/* 6 - YOGA */}
          <motion.div
            variants={item}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: baseDuration, delay: baseDelay * 3.5 }}
          >
            <CardActividades
              titulo="YOGA"
              descripcion="Yoga"
              imagen="/Actividades/yoga.jpg"
            />
          </motion.div>

          {/* 7 - STRETCHING */}
          <motion.div
            variants={item}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: baseDuration, delay: baseDelay * 4 }}
          >
            <CardActividades
              titulo="STRETCHING"
              descripcion="Stretching"
              imagen="/Actividades/stretching.png"
            />
          </motion.div>

          {/* 8 - GAP */}
          <motion.div
            variants={item}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: baseDuration, delay: baseDelay * 4.5 }}
          >
            <CardActividades
              titulo="GAP"
              descripcion="GAP"
              imagen="/Actividades/gap.jpg"
            />
          </motion.div>

          {/* 9 - PASE FULL */}
          <motion.div
            variants={item}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: baseDuration, delay: baseDelay * 5 }}
          >
            <CardActividades
              titulo="PASE FULL"
              descripcion="Full"
              imagen="/Actividades/full.png"
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
