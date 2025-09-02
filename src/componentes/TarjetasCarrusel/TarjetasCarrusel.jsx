import { motion } from "framer-motion";
import PropTypes from "prop-types";
import Subtitulo from "../Subtitulo";


export default function TarjetasCarrusel({ images }) {
  const carouselVariants = {
    animate: {
      x: ["0%", "-100%"],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: images.length * 2, // ajusta velocidad
          ease: "linear",
        },
      },
    },
  };

  return (
    <div className="overflow-hidden w-full py-4">
      <h3 className="text-xl font-bold text-[var(--c-primary)] border-b pb-2 mb-4">MEDIOS DE PAGO QUE PODES ELEGIR</h3>
      <motion.div
        className="flex gap-4"
        variants={carouselVariants}
        animate="animate"
      >
        {images.concat(images).map((img, idx) => (
          <motion.div
            key={idx}
            whileHover={{ y: -5, scale: 1.05 }}
            className="flex-shrink-0 w-46 h-20 rounded-2xl shadow-lg  bg-gray-100"
          >
            <img
              src={img}
              alt={`Imagen ${idx + 1}`}
              className="w-full h-full "
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

TarjetasCarrusel.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
};
