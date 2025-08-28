import { motion } from "framer-motion";
import { Dumbbell, Clock, Star, BanknoteArrowUp } from "lucide-react"; // iconos más “gym”
import planes from "./planes";

export default function Membresias() {
  return (
    <section
      id="membresia"
      className="bg-[var(--c-ink)] min-h-screen flex flex-col items-center py-16 px-6"
    >
      {/* Título */}
      <h2 className="text-4xl sm:text-5xl font-extrabold text-[var(--c-primary)] text-center tracking-wide relative">
        MEMBRESÍAS
        <span className="block w-24 h-1 bg-[var(--c-brown)] rounded-full mx-auto mt-3" />
      </h2>

      {/* Grid de planes */}
      <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl w-full">
        {planes.map((plan, i) => {
          // Elegir icono según el plan
          let Icono;
          if (plan.nombre.toLowerCase().includes("básico")) Icono = Clock;
          else if (plan.nombre.toLowerCase().includes("premium"))
            Icono = Dumbbell;
          else Icono = Star;

          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2, duration: 0.6 }}
              whileHover={{ scale: 1.05 }}
              className="bg-[var(--c-graylite)]/90 backdrop-blur-sm shadow-xl rounded-3xl p-8 flex flex-col items-center border border-[var(--c-graydark)] hover:shadow-[0_10px_40px_-10px_rgba(150,31,28,0.6)] transition"
            >
              {/* Icono */}
              <div className="bg-[var(--c-primary)]/10 p-5 rounded-full mb-5 flex items-center justify-center">
                <Icono className="text-[var(--c-primary)] w-12 h-12" />
              </div>

              {/* Nombre */}
              <h3 className="text-2xl font-bold text-[var(--c-brown)] mb-2">
                {plan.nombre}
              </h3>

              {/* Descripción */}
              <p className="text-[var(--c-graydark)] text-center mb-4">
                {plan.descripcion ||
                  "Acceso completo al gimnasio y clases grupales."}
              </p>

              {/* Precio */}
              <p className="text-4xl font-extrabold text-[var(--c-primary)] mb-6">
                {plan.precio}
              </p>

              {/* Botón */}
              <a
                href={plan.link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 bg-[var(--c-primary)] text-white py-3 px-4 rounded-2xl text-center font-semibold hover:bg-[var(--c-maroon)] transition shadow-lg hover:shadow-[0_8px_30px_-6px_rgba(150,31,28,0.8)]"
              >
                <BanknoteArrowUp className="w-5 h-5" />
                Elegir esta plan
              </a>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
