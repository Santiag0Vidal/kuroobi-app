import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import ModalFormulario from "../Modales/ModalFormulario";
import actividades from "../actividades";

const CardActividades = ({ titulo, descripcion, imagen }) => {
  const [open, setOpen] = useState(false);
  const [planes, setPlanes] = useState([]);

  // Buscar planes de la actividad
  useEffect(() => {
    const act = actividades.find(
      (a) => a.nombre.toLowerCase() === descripcion.toLowerCase()
    );

    if (act) {
      setPlanes(act.planes);
    }
  }, [descripcion]);

  // Cerrar con tecla Escape
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  return (
    <>
      <motion.figure
      
        onClick={() => setOpen(true)}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="relative cursor-pointer bg-[var(--c-graylite)] rounded-2xl overflow-hidden shadow-lg w-full max-w-6xl mx-auto"
      >
        {/* Imagen */}
        <div className="relative w-full h-64">
          <img
            src={imagen}
            alt={titulo}
            loading="lazy"
            className="object-cover w-full h-full"
          />

          {/* Degradado */}
          <div className="absolute inset-0 bg-gradient-to-b from-[var(--c-ink)]/80 via-[var(--c-primary)]/50 to-transparent" />

          {/* Texto encima */}
          <figcaption className="absolute inset-0 flex flex-col justify-center items-center text-white text-center px-4">
            <h2 className="text-4xl sm:text-5xl font-extrabold text-[var(--c-graylite)] tracking-wide mb-6 drop-shadow-lg">
              {titulo}
            </h2>
            <p className="text-sm text-gray-200 italic">
              Haz clic para ver planes disponibles
            </p>
          </figcaption>
        </div>
      </motion.figure>

      {/* Modal con formulario */}
      {open && (
        <motion.div
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 30 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <ModalFormulario
              setOpen={setOpen}
              actividad={descripcion}
              planes={planes}
            />
          </motion.div>
        </motion.div>
      )}
    </>
  );
};

CardActividades.propTypes = {
  titulo: PropTypes.string.isRequired,
  descripcion: PropTypes.string.isRequired,
  imagen: PropTypes.string.isRequired,
};

export default CardActividades;
