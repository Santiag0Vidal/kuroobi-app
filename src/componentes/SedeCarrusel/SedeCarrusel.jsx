import { motion } from "framer-motion";
import PropTypes from "prop-types";
import { useMemo } from "react";

/**
 * Carrusel de imágenes con bucle infinito, velocidad rápida y ancho calculado.
 */
export default function SedeCarrusel({ images }) {
  
  // 1. FACTOR DE VELOCIDAD: Mantenido en 2.5 para un movimiento rápido.
  const DURATION_FACTOR = 2.5; 
  
  const totalItems = images.length;
  const totalRenderedItems = totalItems * 2; 
  
  const animationDuration = totalItems * DURATION_FACTOR; 
  
  const animationWidth = useMemo(() => {
    // Desplazamiento del 50% para el bucle.
    return "-50%"; 
  }, []); 

  const carouselVariants = {
    animate: {
      x: [
        "0%",
        animationWidth, 
      ],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop", 
          duration: animationDuration, 
          ease: "linear",
        },
      },
    },
  };

  const duplicatedImages = useMemo(() => images.concat(images), [images]);

  // 🚨 1. NUEVO ANCHO DEL ITEM: Ajustado a 400px (debe coincidir con la clase min-w-[400px]) 🚨
  const itemWidth = 500; 
  
  // Cálculo del ancho total del contenedor (Crítico para que quepan todas las imágenes)
  // itemWidth + margen lateral (mx-2 = 16px) * totalRenderedItems
  const totalWidthStyle = useMemo(() => {
    return `${(itemWidth + 16) * totalRenderedItems}px`;
  }, [totalRenderedItems]);


  return (
    <div
      className="overflow-hidden w-full max-w-7xl py-12"
      role="region"
      aria-label="Galería de imágenes con movimiento automático"
    >
      <motion.div
        className="flex"
        style={{ width: totalWidthStyle }}
        variants={carouselVariants}
        animate="animate" 
      >
        {duplicatedImages.map((img, idx) => (
          <motion.div
            key={`${img}-${idx}`} 
            whileHover={{ scale: 1.05 }}
            // 🚨 2. CLASES ACTUALIZADAS: h-96 y min-w-[400px] 🚨
            className="flex-shrink-0 min-w-[400px] md:min-w-[450px] h-96 shadow-2xl overflow-hidden relative group rounded-xl mx-2"
            aria-label={`Imagen ${(idx % images.length) + 1} de ${images.length}`} 
          >
            <img
              src={img}
              alt={`Imagen de la sede ${(idx % images.length) + 1}`}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              loading="lazy"
            />
            
            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition duration-500 pointer-events-none"></div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

SedeCarrusel.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
};