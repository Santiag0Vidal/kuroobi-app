import kines from "./kinesiolos";
import { motion } from "framer-motion";
import * as C from '../../componentes/index';

export default function Nosotros() {
  return (
    <section
      id="nosotros"
      className="bg-[var(--c-ink)] min-h-screen flex flex-col items-center py-16 px-6"
    >
      <div className="flex flex-col items-center max-w-7xl w-full gap-12">
        <C.TituloSeccion texto="NUESTRO STAFF"/>
        {/* Descripción */}
        <p className="text-center text-[var(--c-graylite)] max-w-3xl">
          En <strong>KINESIOLOGÍA WM</strong> nos especializamos en kinesiología
          deportiva, combinando experiencia y tecnología avanzada para optimizar
          tu recuperación y rendimiento. Nuestro equipo de profesionales está
          comprometido con tu bienestar y seguridad. 
          <br />
          📍 Neuquén Capital
        </p>

        {/* Grid de kines */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl w-full">
          {kines.map((kine, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              whileHover={{ scale: 1.05 }}
              className="bg-[var(--c-graylite)]/90 backdrop-blur-sm shadow-xl rounded-3xl p-6 flex flex-col items-center border border-[var(--c-graydark)] hover:shadow-[0_10px_40px_-10px_rgba(150,31,28,0.6)] transition"
            >
              <div className="flex flex-col items-center text-center">
                {/* Imagen dentro de círculo con borde */}
                <div className="w-36 h-36 rounded-full overflow-hidden border-4 border-[var(--c-primary)] mb-4">
                  <img
                    src={kine.image}
                    alt={kine.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Nombre y rol */}
                <h3 className="text-2xl font-semibold text-[var(--c-brown)] mb-1">
                  {kine.name}
                </h3>
                <p className="text-[var(--c-graydark)] text-sm">{kine.role}</p>

                {/* Opcional: icono o badge */}
                {kine.highlight && (
                  <span className="mt-3 px-3 py-1 bg-[var(--c-primary)] text-white text-xs rounded-full font-semibold">
                    Destacado
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
