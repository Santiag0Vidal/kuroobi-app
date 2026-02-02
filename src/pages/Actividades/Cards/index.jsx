import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { motion, AnimatePresence } from "framer-motion";
import ModalFormulario from "../Modales/ModalFormulario";
import actividades from "../actividades";
import {
  X,
  ArrowRight,
  Zap,
  CalendarCheck,
  UserPlus,
  ShieldCheck,
} from "lucide-react";
import ConectarButton from "../../../utils/conexion_back";

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
      {/* ================= CARD ================= */}
      <motion.figure
        onClick={() => setShowDescripcion(true)}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="relative group cursor-pointer bg-[#0c0c0c] rounded-[2.5rem] overflow-hidden border border-white/5 shadow-2xl w-full h-64 sm:h-72 md:h-80"
      >
        <img
          src={imagen}
          alt={titulo}
          loading="lazy"
          className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110 grayscale-[0.5] group-hover:grayscale-0"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

        <figcaption className="absolute inset-0 flex flex-col justify-end p-6 md:p-8">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            className="space-y-2"
          >
            <div className="flex items-center gap-2">
              <span className="w-6 h-[2px] bg-red-600" />
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-amber-400">
                Disciplina
              </span>
            </div>

            <h2 className="text-3xl md:text-5xl font-black text-white italic tracking-tighter uppercase leading-none">
              {titulo}
            </h2>

            <div className="flex items-center gap-2 text-gray-400 group-hover:text-white transition-colors">
              <span className="text-[10px] font-bold uppercase tracking-widest">
                Explorar Disciplina
              </span>
              <ArrowRight
                size={14}
                className="group-hover:translate-x-2 transition-transform"
              />
            </div>
          </motion.div>
        </figcaption>
      </motion.figure>

      {/* ================= MODAL DETALLE ================= */}
      <AnimatePresence>
        {showDescripcion && (
          <motion.div
            className="fixed inset-0 bg-black/95 z-[110] flex items-center justify-center p-4 backdrop-blur-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              initial={{ scale: 0.95, y: 40, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.95, y: 40, opacity: 0 }}
              className="relative w-full max-w-5xl max-h-[90vh] bg-[#0a0a0a] border border-white/10 rounded-[2rem] overflow-hidden flex flex-col"
            >
              {/* CERRAR */}
              <button
                onClick={() => setShowDescripcion(false)}
                className="absolute top-4 right-4 z-30 bg-black/60 p-2 rounded-full text-gray-400 hover:text-white"
              >
                <X size={20} />
              </button>

              <div className="flex flex-col md:grid md:grid-cols-2 h-full overflow-hidden">
                {/* IMAGEN */}
                <div className="relative h-56 md:h-full">
                  <img
                    src={imagenModal || imagen}
                    alt={titulo}
                    className="w-full h-full object-cover opacity-60"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-[#0a0a0a] via-transparent" />

                  <div className="absolute bottom-4 left-4 md:bottom-8 md:left-8">
                    <h2 className="text-3xl md:text-5xl font-black italic uppercase tracking-tighter">
                      {titulo}
                    </h2>
                    <div className="flex items-center gap-2 mt-1">
                      <Zap size={14} className="text-red-600 fill-red-600" />
                      <span className="text-[10px] tracking-[.3em] uppercase text-red-500 font-bold">
                        Kuroobi Elite
                      </span>
                    </div>
                  </div>
                </div>

                {/* INFO */}
                <div className="flex-1 overflow-y-auto p-6 md:p-10 space-y-8">
                  <div>
                    <h3 className="text-amber-400 text-[10px] font-black uppercase tracking-[0.4em] mb-3">
                      Sobre la actividad
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {descripcionActi}
                    </p>
                  </div>

                  <div className="bg-white/5 rounded-3xl p-5 border border-white/10 space-y-4">
                    <h4 className="text-xs text-white font-bold uppercase tracking-widest flex items-center gap-2">
                      <ShieldCheck size={14} className="text-green-500" />
                      ¿Cómo empezar?
                    </h4>

                    <div className="space-y-4">
                      <div className="flex gap-3">
                        <div className="bg-red-600/20 p-2 rounded-lg text-red-500">
                          <UserPlus size={16} />
                        </div>
                        <div>
                          <p className="text-xs text-white font-bold">
                            1. Regístrate
                          </p>
                          <p className="text-[10px] text-gray-500">
                            Crea tu cuenta oficial de Kuroobi.
                          </p>
                        </div>
                      </div>

                      <div className="flex gap-3">
                        <div className="bg-amber-600/20 p-2 rounded-lg text-amber-500">
                          <CalendarCheck size={16} />
                        </div>
                        <div>
                          <p className="text-xs text-white font-bold">
                            2. Elegí tu plan
                          </p>
                          <p className="text-[10px] text-gray-500">
                            Seleccioná horarios y modalidad.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4">
                    <p className="text-[10px] text-center text-gray-500 uppercase tracking-widest mb-4 animate-pulse">
                      Registro seguro
                    </p>
                    <div className="flex justify-center">
                      <ConectarButton />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ================= MODAL FORMULARIO ================= */}
      <AnimatePresence>
        {openFormulario && (
          <motion.div
            className="fixed inset-0 bg-black/95 z-[120] flex items-center justify-center p-4 backdrop-blur-2xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
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
