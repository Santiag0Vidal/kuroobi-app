import { motion } from "framer-motion";
import PropTypes from "prop-types";

export default function SedeCarrusel({ images }) {
  const carouselVariants = {
    animate: {
      x: ["0%", "-100%"],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: images.length * 5,
          ease: "linear",
        },
      },
    },
  };

  return (
    <div className="overflow-hidden w-full py-4 bg-gradient-to-r from-red-800  to-black">
      <motion.div
        className="flex"
        variants={carouselVariants}
        animate="animate"
      >
        {images.concat(images).map((img, idx) => (
          <motion.div
            key={idx}
            whileHover={{ scale: 1.08 }}
            className="flex-shrink-0 w-104 h-80 shadow-xl overflow-hidden relative group"
          >
            <img
              src={img}
              alt={`Imagen ${idx + 1}`}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition duration-500"></div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

SedeCarrusel.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
};
