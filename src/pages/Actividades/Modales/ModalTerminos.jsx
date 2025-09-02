import PropTypes from "prop-types";
import { motion, AnimatePresence } from "framer-motion";
import { CircleX } from "lucide-react";

const ModalFormulario = ({ setOpen }) => {
  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          className="bg-white rounded-3xl shadow-2xl p-6 max-w-lg w-full overflow-hidden relative"
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          {/* Botón cerrar esquina */}
          <button
            onClick={() => setOpen(false)}
            className="absolute top-4 right-4 p-2 rounded-full bg-gray-100 text-gray-500 hover:bg-gray-200 hover:text-gray-700 transition shadow-sm"
          >
            <CircleX className="w-6 h-6" />
          </button>

          <h3 className="text-2xl sm:text-3xl font-bold text-[var(--c-primary)] mb-4 text-center">
            Terminos y Condiciones
          </h3>

          <div className="text-sm sm:text-base text-gray-700 space-y-3 max-h-80 overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200">
            <p> El uso de este servicio implica la aceptacion de los terminos descritos en este documento.</p>
            <p> Los pagos realizados no son reembolsables, salvo casos excepcionales.</p>
            <p> El cliente se compromete a respetar las normas del gimnasio y a utilizar las instalaciones de forma segura.</p>
            <p> Los planes tienen una duracion especifica y no se prorratean.</p>
          </div>

          <div className="flex justify-center mt-6">
            <button
              onClick={() => setOpen(false)}
              className="bg-[var(--c-primary)] text-white px-6 py-2 rounded-2xl hover:bg-[var(--c-maroon)] transition-all shadow-md"
            >
              Cerrar
            </button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

ModalFormulario.propTypes = {
  setOpen: PropTypes.func.isRequired,
};

export default ModalFormulario;
