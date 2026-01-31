import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { motion, AnimatePresence } from "framer-motion";
import ModalFormulario from "../Modales/ModalFormulario";
import actividades from "../actividades"; 
import { X, ArrowRight, Zap } from "lucide-react";

const CardActividades = ({ titulo, descripcion, imagen }) => {
  const [showDescripcion, setShowDescripcion] = useState(false);
  const [openFormulario, setOpenFormulario] = useState(false);
  const [planes, setPlanes] = useState([]);
  const [descripcionActi, setDescripcionActi] = useState("");
  const [imagenModal, setImagenModal] = useState("");

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
      {/* --- VISTA DE LA CARD --- */}
      <motion.figure
        onClick={() => setShowDescripcion(true)}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="relative group cursor-pointer bg-[#0c0c0c] rounded-[2.5rem] overflow-hidden border border-white/5 shadow-2xl w-full h-80"
      >
        <img
          src={imagen}
          alt={titulo}
          loading="lazy"
          className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110 grayscale-[0.5] group-hover:grayscale-0"
        />
        
        {/* Overlay Cinematic */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
        
        {/* Contenido de la Card */}
        <figcaption className="absolute inset-0 flex flex-col justify-end p-8">
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            className="space-y-2"
          >
            <div className="flex items-center gap-2">
              <span className="w-6 h-[2px] bg-red-600" />
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-amber-400">Disciplina</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-white italic tracking-tighter uppercase leading-none">
              {titulo}
            </h2>
            <div className="flex items-center gap-2 text-gray-400 group-hover:text-white transition-colors">
              <span className="text-[10px] font-bold uppercase tracking-widest">Ver Detalles</span>
              <ArrowRight size={14} className="group-hover:translate-x-2 transition-transform" />
            </div>
          </motion.div>
        </figcaption>
      </motion.figure>

      {/* --- MODAL DE DETALLES (REDISEÑADO) --- */}
      <AnimatePresence>
        {showDescripcion && (
          <motion.div
            className="fixed inset-0 bg-black/90 flex items-center justify-center z-[110] p-4 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              initial={{ scale: 0.9, y: 50, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.9, y: 50, opacity: 0 }}
              className="bg-[#111] border border-white/10 text-white rounded-[3rem] p-8 md:p-12 max-w-2xl w-full relative shadow-[0_0_50px_rgba(0,0,0,0.5)]"
            >
              {/* Botón Cerrar */}
              <button 
                onClick={() => setShowDescripcion(false)}
                className="absolute top-8 right-8 text-gray-500 hover:text-white transition-colors"
              >
                <X size={32} />
              </button>

              <div className="grid md:grid-cols-2 gap-10 items-center">
                {/* Imagen del Modal */}
                <div className="relative rounded-2xl overflow-hidden aspect-square bg-black border border-white/5">
                  {imagenModal ? (
                    <img src={imagenModal} alt={titulo} className="w-full h-full object-cover" />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center"><Zap className="text-red-600 w-12 h-12" /></div>
                  )}
                </div>

                {/* Texto y Acción */}
                <div className="space-y-6">
                  <div>
                    <h2 className="text-4xl font-black italic uppercase tracking-tighter text-red-600 mb-2">{titulo}</h2>
                    <div className="w-12 h-1 bg-amber-400" />
                  </div>
                  <p className="text-gray-400 text-sm leading-relaxed font-medium">
                    {descripcionActi}
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-4 pt-4">
                   {/* 
                   
                    <button
                      onClick={() => {
                        setShowDescripcion(false);
                        setOpenFormulario(true);
                      }}
                      className="flex-1 bg-white text-black px-8 py-4 rounded-full font-black uppercase text-xs tracking-widest hover:bg-red-600 hover:text-white transition-all active:scale-95"
                    >
                      Ver Planes
                    </button>*/}
                    <button
                      onClick={() => setShowDescripcion(false)}
                      className="px-8 py-4 rounded-full font-black uppercase text-[10px] tracking-widest border border-white/10 hover:bg-white/5 transition-all"
                    >
                      Cerrar
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* --- MODAL CON FORMULARIO (REDISEÑADO) --- */}
      <AnimatePresence>
        {openFormulario && (
          <motion.div
            className="fixed inset-0 bg-black/95 flex items-center justify-center z-[120] p-4 backdrop-blur-2xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              exit={{ opacity: 0, scale: 0.9, rotate: 2 }}
              className="w-full max-w-4xl"
            >
              <ModalFormulario
                setOpen={setOpenFormulario}
                actividad={descripcion}
                planes={planes}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

CardActividades.propTypes = {
  titulo: PropTypes.string.isRequired,
  descripcion: PropTypes.string.isRequired,
  imagen: PropTypes.string.isRequired,
};

export default CardActividades;