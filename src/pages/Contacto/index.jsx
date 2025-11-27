import { memo, lazy, Suspense } from "react";
import { motion } from "framer-motion";
import * as C from "../../componentes";

// Lazy load del mapa (solo se carga cuando se ve)
const LazyMapa = lazy(() => import("../../componentes/Mapa"));

// Redes sociales estáticas (rendimiento)
const SOCIAL_LINKS = Object.freeze([
  {
    href: "https://wa.me/542996055279",
    icon: "/iconos/wp.png",
    alt: "WhatsApp",
  },
  {
    href: "https://www.instagram.com/kinesio_nqn/",
    icon: "/iconos/ig.png",
    alt: "Instagram",
  },
]);

// Variants globales para animaciones con stagger
const containerVariants = {
  hidden: { opacity: 0, scale: 0.94 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      ease: "easeOut",
      duration: 0.5,
      when: "beforeChildren",
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45 } },
};

// Icono social optimizado
const SocialLink = memo(function SocialLink({ href, icon, alt }) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="bg-[var(--c-primary)] hover:bg-[var(--c-maroon)] rounded-full p-3 shadow-lg"
      variants={itemVariants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.92 }}
    >
      <img src={icon} alt={alt} className="w-10 h-10" loading="lazy" />
    </motion.a>
  );
});

// Bloque contacto con stagger
const BloqueContacto = memo(function BloqueContacto() {
  return (
    <motion.div
      className="flex-1 p-8 lg:p-12 text-[var(--c-brown)] text-center lg:text-left space-y-6 relative z-10"
      variants={itemVariants}
    >
      <motion.h3 className="text-3xl font-bold mb-4" variants={itemVariants}>
        ¡Contáctanos!
      </motion.h3>

      <motion.div
        className="flex justify-center lg:justify-start gap-6 mt-4"
        variants={containerVariants}
      >
        {SOCIAL_LINKS.map((item) => (
          <SocialLink key={item.alt} {...item} />
        ))}
      </motion.div>
    </motion.div>
  );
});

export default function Contacto() {
  return (
    <section
      id="contacto"
      className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-[var(--c-brown)] to-[var(--c-ink)] px-4"
    >
      <div className="flex flex-col items-center max-w-7xl w-full gap-12">
        <C.TituloSeccion texto="CONTACTANOS" />

        {/* CONTENEDOR CON VARIANTS + ANIMACIÓN DE SCROLL */}
        <motion.div
          className="
            relative flex flex-col lg:flex-row items-stretch w-full max-w-6xl rounded-3xl 
            overflow-hidden p-[2px] bg-gradient-to-r from-[var(--c-primary)]/50 
            via-transparent to-[var(--c-maroon)]/50 animate-border-move
          "
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.35 }}
          whileHover={{ rotateX: 2, rotateY: -2, scale: 1.015 }}
          transition={{ duration: 0.35 }}
        >
          <div
            className="
              flex flex-col lg:flex-row w-full rounded-3xl
              bg-[var(--c-graylite)]/80 backdrop-blur-xl shadow-2xl border border-[var(--c-graydark)]
              gap-8
            "
          >
            <BloqueContacto />

            {/* MAPA LAZY-LOAD + motion */}
            <motion.div
              className="flex-1 p-6 lg:p-12"
              variants={itemVariants}
            >
              <Suspense
                fallback={
                  <div className="w-full h-64 flex items-center justify-center text-[var(--c-brown)]">
                    Cargando mapa...
                  </div>
                }
              >
                <LazyMapa />
              </Suspense>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Animación del borde */}
      <style>
        {`
          @keyframes border-move {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
          .animate-border-move {
            background-size: 280% 280%;
            animation: border-move 8s ease infinite;
          }
        `}
      </style>
    </section>
  );
}
