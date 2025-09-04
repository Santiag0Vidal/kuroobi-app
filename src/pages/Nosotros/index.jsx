import staff from "./kinesiolos"; // tu array con datos del staff actualizado
import { motion } from "framer-motion";
import * as C from "../../componentes/index";
import actividades from "../Actividades/actividades"

export default function Nosotros() {
  return (
    <section
      id="nosotros"
         className="min-h-screen flex flex-col items-center justify-center text-center bg-gradient-to-b from-[var(--c-ink)]  to-[var(--c-brown)] px-4"
    >
      <div className="flex flex-col items-center max-w-7xl w-full gap-12">
        <C.TituloSeccion texto="KUROOBI" />
        <C.Subtitulo texto="Centro integral deportivo de rehabilitacion y readaptacion de alto rendimiento" />
        {/* Descripción principal */}
        <p className="text-center text-[var(--c-graylite)] max-w-3xl">
          En <strong>Kuroobi</strong> reconstruimos nuestro gimnasio para crear el primer centro de rehabilitación y
          readaptación deportiva de Neuquén Capital. 
          <br />
          🔨 Cada rincón está pensado para tu bienestar, 🏋️‍♀️ tu fuerza y tu recuperación.
          <br />
          📍 Cacique Catriel 434, Neuquén Capital
        </p>

          {/* Actividades principales desde JSON */}
        <div className="flex flex-wrap justify-center gap-4 mt-6">
          {actividades.map((act, idx) => (
            <span
              key={idx}
              className="px-4 py-2 bg-yellow-300 text-black rounded-full font-semibold shadow-md hover:scale-105 transition-transform cursor-pointer"
              title={`${act.planes.length} plan(es) disponibles`}
            >
              {act.nombre}
            </span>
          ))}
        </div>

        {/* Horarios de apertura */}
        <p className="mt-6 text-[var(--c-graylite)]">
          Abierto Lunes a Viernes de 07:00 a 23:00 hs.
          <br />
          Sábados de 09:00 a 13:00 hs.
        </p>

        

        {/* Mensaje motivacional */}
        <p className="mt-6 text-[var(--c-graylite)] max-w-3xl italic">
          ✨ Nuestras puertas ya estan abiertas: sé parte de Kuroobi y viví esta
          transformación con nosotros. #readaptaciondeportiva #rehabilitación
          #fisioterapia #sportsrehab #wellness
        </p>

        {/* Grid de staff */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl w-full">
          {staff.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              whileHover={{ scale: 1.05 }}
              className="bg-[var(--c-graylite)]/90 backdrop-blur-sm shadow-xl rounded-3xl p-6 flex flex-col items-center border border-[var(--c-graydark)] hover:shadow-[0_10px_40px_-10px_rgba(150,31,28,0.6)] transition"
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-36 h-36 rounded-full overflow-hidden border-4 border-[var(--c-primary)] mb-4">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-2xl font-semibold text-[var(--c-brown)] mb-1">
                  {member.name}
                </h3>
                <p className="text-[var(--c-graydark)] text-sm">
                  {member.role}
                </p>
                {member.highlight && (
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
