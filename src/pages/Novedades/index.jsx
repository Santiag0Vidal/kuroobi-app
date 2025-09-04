import img from "../../assets/kuroo-logo.png";
import { motion } from "framer-motion";

export default function Novedades() {
  return (
    <section
      id="novedades"
      className="min-h-screen flex flex-col items-center justify-center text-center bg-gradient-to-b from-[var(--c-ink)]  to-white px-4"
    >

      <motion.img
        src={img}
        alt="LogoKuroo"
        className="w-40 sm:w-56 md:w-64 mb-6 rounded-2xl shadow-lg"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      />


      <motion.h1
        className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-4"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        Muy pronto <span className="text-red-600">Kuroobi</span>
      </motion.h1>

      {/* Subtítulo */}
      <motion.p
        className="text-gray-600 text-base sm:text-lg md:text-xl max-w-xl mb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.8 }}
      >
        Centro integral deportivo de rehabilitación y readaptación de alto rendimiento - 📍Cacique Catriel 434 - Neuquén Capital
      </motion.p>

      {/* Botón CTA */}
      <motion.a
         href="https://www.instagram.com/kuroobi_nqn/"
        className="px-6 py-3 bg-red-600 text-black rounded-full shadow-md hover:bg-pink-700 transition"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9, duration: 0.8 }}
      >
        Ver un spoiler
      </motion.a>
    </section>
  );
}
