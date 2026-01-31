import { memo, lazy, Suspense } from "react";
import { motion } from "framer-motion";
import * as C from "../../componentes";
import { Instagram, Send, MapPin, Globe, Zap } from "lucide-react";

const LazyMapa = lazy(() => import("../../componentes/Mapa"));

const SOCIAL_LINKS = [
  {
    href: "https://wa.me/542996055279",
    icon: <Send size={22} />,
    alt: "WhatsApp",
    color: "hover:text-green-500",
  },
  {
    href: "https://www.instagram.com/kinesio_nqn/",
    icon: <Instagram size={22} />,
    alt: "Instagram",
    color: "hover:text-pink-500",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "circOut" },
  },
};

const SocialLink = memo(({ href, icon, alt, color }) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={alt}
    className={`bg-white/5 border border-white/10 p-4 rounded-2xl text-gray-400 transition-all duration-300 ${color} hover:bg-white/10 hover:border-white/20 flex items-center justify-center`}
    variants={itemVariants}
    whileHover={{ y: -4, scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    {icon}
  </motion.a>
));

const BloqueContacto = memo(() => (
  <motion.div
    className="flex-1 p-8 md:p-12 lg:p-16 flex flex-col justify-center space-y-10"
    variants={itemVariants}
  >
    <div className="space-y-4">
      <div className="flex items-center gap-2">
        <Zap size={14} className="text-red-600 animate-pulse" />
        <span className="text-[9px] font-black uppercase tracking-[0.4em] text-gray-500">
          Enlace Directo
        </span>
      </div>

      <h3 className="text-4xl md:text-5xl lg:text-6xl font-black italic uppercase tracking-tighter text-white leading-none">
        ¿Hablamos <br />
        <span className="text-red-600">Ahora?</span>
      </h3>
    </div>

    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <div className="bg-white/5 p-3 rounded-xl">
          <MapPin size={20} className="text-red-600" />
        </div>
        <div>
          <p className="text-[9px] font-black uppercase tracking-widest text-gray-500">
            Ubicación
          </p>
          <p className="text-white font-bold uppercase italic text-sm md:text-base">
            Cacique Catriel 434, NQN
          </p>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <div className="bg-white/5 p-3 rounded-xl">
          <Globe size={20} className="text-amber-400" />
        </div>
        <div>
          <p className="text-[9px] font-black uppercase tracking-widest text-gray-500">
            Instagram
          </p>
          <p className="text-white font-bold uppercase italic text-sm md:text-base">
            @kinesio_nqn
          </p>
        </div>
      </div>
    </div>

    <motion.div
      className="flex gap-4 pt-4"
      variants={containerVariants}
    >
      {SOCIAL_LINKS.map((link) => (
        <SocialLink key={link.alt} {...link} />
      ))}
    </motion.div>
  </motion.div>
));

export default function Contacto() {
  return (
    <section
      id="contacto"
      className="min-h-screen bg-black flex items-center justify-center py-20 px-4 relative overflow-hidden"
    >
      {/* Glow decorativo */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-red-600/10 rounded-full blur-[120px] -translate-y-1/2 pointer-events-none" />

      <div className="max-w-7xl w-full relative z-10 flex flex-col items-center gap-16">
        <C.TituloSeccion
          texto="CONTACTO"
          subtitulo="Comunicaciones Kuroobi"
        />

        <motion.div
          className="relative w-full max-w-6xl rounded-[2rem] md:rounded-[3rem] overflow-hidden border border-white/5 bg-[#0a0a0a] shadow-2xl"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="flex flex-col lg:flex-row min-h-[500px] md:min-h-[600px]">
            <BloqueContacto />

            {/* MAPA */}
            <div
              className="
                relative w-full
                h-[300px] sm:h-[350px] md:h-[450px]
                lg:flex-1 lg:h-auto lg:min-h-full
                border-t lg:border-t-0 lg:border-l border-white/5
                overflow-hidden
              "
            >
              <Suspense
                fallback={
                  <div className="w-full h-full flex flex-col items-center justify-center bg-black">
                    <div className="w-10 h-10 border-4 border-red-600 border-t-transparent rounded-full animate-spin" />
                    <span className="mt-4 text-[9px] font-black uppercase tracking-widest text-gray-500">
                      Cargando mapa…
                    </span>
                  </div>
                }
              >
                <div className="absolute inset-0 opacity-70 hover:opacity-100 transition-opacity duration-700">
                  <LazyMapa />
                </div>
              </Suspense>

              <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_60px_rgba(0,0,0,0.9)]" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
