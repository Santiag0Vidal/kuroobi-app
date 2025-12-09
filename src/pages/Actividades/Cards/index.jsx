import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import ModalFormulario from "../Modales/ModalFormulario";
import actividades from "../actividades"; // Asegúrate que esta ruta sea correcta

const CardActividades = ({ titulo, descripcion, imagen }) => {
  const [showDescripcion, setShowDescripcion] = useState(false);
  const [openFormulario, setOpenFormulario] = useState(false);
  const [planes, setPlanes] = useState([]);
  const [descripcionActi, setDescripcionActi] = useState("");
  const [imagenModal, setImagenModal] = useState(""); // <-- NUEVO ESTADO

  // Buscar planes, descripción e imagen del modal de la actividad
  useEffect(() => {
    const act = actividades.find(
      (a) => a.nombre.toLowerCase() === descripcion.toLowerCase()
    );

    if (act) {
      setPlanes(act.planes);
      setDescripcionActi(act.descripcionActi);
      setImagenModal(act.imagenModal);
    }
  }, [descripcion]);

  // Cerrar con Escape
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") {
        setShowDescripcion(false);
        setOpenFormulario(false);
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  return (
    <>
      <motion.figure
        onClick={() => setShowDescripcion(true)}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="relative cursor-pointer bg-[var(--c-graylite)] rounded-2xl overflow-hidden shadow-lg w-full max-w-6xl mx-auto"
      >
        <div className="relative w-full h-64">
          <img
            src={imagen}
            alt={titulo}
            loading="lazy"
            className="object-cover w-full h-full"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[var(--c-ink)]/80 via-[var(--c-primary)]/50 to-transparent" />
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

      {/* Modal de descripción */}
      {showDescripcion && (
        <motion.div
          className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4 backdrop-blur-sm"
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="bg-white/35 backdrop-blur-md text-white rounded-2xl p-6 max-w-md text-center shadow-2xl"
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 30 }}
          >
            {/* <-- INSERCIÓN DE LA IMAGEN DEL MODAL --> */}
            {imagenModal && (
              <img
                src={imagenModal}
                alt={titulo}
                className="w-full h-40 object-contain rounded-xl mb-4" />
            )}
            {/* <------------------------------------> */}

            <h2 className="text-2xl font-bold mb-4">{titulo}</h2>
            <p className="mb-6 texto-multilinea alineado-izquierda">
              {descripcionActi}
            </p>

            <button
              className="bg-yellow-400 text-black px-6 py-2 rounded-lg font-semibold hover:bg-yellow-500 transition"
           //   onClick={() => {
             //   setShowDescripcion(false);
               // setOpenFormulario(true);
            //  }}
            >
              Ver planes
            </button>
            <button
              className="ml-4 bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition"
              onClick={() => setShowDescripcion(false)}
            >
              Cancelar
            </button>
          </motion.div>
        </motion.div>
      )}

      {/* Modal con formulario */}
      {openFormulario && (
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
              setOpen={setOpenFormulario}
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


