import { CircleX } from "lucide-react";
import PropTypes from "prop-types";
import { motion, AnimatePresence } from "framer-motion";

const ModalDescripcion = ({setOpen, cliente }) => {
  return (
    <AnimatePresence>
      {open && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 30 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="rounded-2xl shadow-2xl w-full max-w-3xl relative overflow-y-auto max-h-[90vh] bg-white p-6"
          >
            {/* Botón de cerrar */}
            <button
              onClick={() => setOpen(false)}
              className="absolute top-4 right-4 p-2 rounded-full bg-gray-100 text-gray-500 hover:bg-gray-200 hover:text-gray-700 transition shadow-sm"
            >
              <CircleX className="w-6 h-6" />
            </button>

            {/* Contenido */}
            <div className="space-y-4">
              {/* Subtítulo */}
              <h2 className="text-2xl sm:text-3xl font-bold text-[var(--c-primary)] text-center">
                {cliente?.plan?.nombre || "Plan"}
              </h2>

              {/* Descripción */}
              <div className="bg-gray-50 p-4 rounded-xl shadow-inner text-gray-700">
                <p className="text-sm sm:text-base">
                  {cliente?.plan?.descripcion || "Sin descripcion disponible."}
                </p>
              </div>

              {/* Precio */}
              {cliente?.plan?.precio && (
                <p className="text-2xl sm:text-3xl font-extrabold text-[var(--c-primary)] text-center">
                  {cliente.plan.precio}
                </p>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

ModalDescripcion.propTypes = {
  open: PropTypes.bool.isRequired,
  setOpen: PropTypes.func.isRequired,
  cliente: PropTypes.object,
};

export default ModalDescripcion;
