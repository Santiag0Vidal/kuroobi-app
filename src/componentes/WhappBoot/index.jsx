import { useState, useCallback } from "react";
import { SendHorizontal, X, MessageCircleCode } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import preguntas from "./preguntas";

export default function WhatsappBot() {
  const [open, setOpen] = useState(false);
  const whatsappNumber = "542996055279";

  const toggleOpen = useCallback(() => {
    setOpen((prev) => !prev);
  }, []);

  return (
    <>
      {/* Botón flotante */}
      <div className="fixed bottom-4 right-4 md:bottom-8 md:right-8 z-[120]">
        <motion.button
          onClick={toggleOpen}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.92 }}
          aria-label="Abrir chat de WhatsApp"
          className={`relative p-4 md:p-5 rounded-full shadow-2xl transition-all duration-500 ${
            open ? "bg-red-600 rotate-90" : "bg-green-600"
          }`}
        >
          {!open && (
            <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-20" />
          )}

          <div className="relative z-10 text-white">
            {open ? (
              <X size={26} strokeWidth={3} />
            ) : (
              <img
                src="/iconos/wp.png"
                alt="WhatsApp"
                className="w-7 h-7 md:w-8 md:h-8 brightness-0 invert"
              />
            )}
          </div>
        </motion.button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.9 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            className="fixed bottom-24 right-4 md:right-8 w-[calc(100vw-2rem)] sm:w-80 bg-[#0d0d0d]/95 backdrop-blur-xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] rounded-[2rem] overflow-hidden z-[120] border border-white/10"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-red-900/40 to-black p-6 border-b border-white/5">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-green-600 flex items-center justify-center shadow-[0_0_15px_rgba(22,163,74,0.4)]">
                  <MessageCircleCode size={20} className="text-white" />
                </div>

                <div>
                  <h4 className="text-white font-black uppercase italic text-sm tracking-tight">
                    Kuroobi Administracion
                  </h4>
                  <p className="text-[10px] text-green-500 font-bold uppercase tracking-widest animate-pulse">
                    En línea ahora
                  </p>
                </div>
              </div>
            </div>

            {/* Body */}
            <div className="p-5">
              <p className="text-gray-500 text-[10px] font-black uppercase tracking-[0.2em] mb-4 text-center italic">
                Seleccioná una consulta rápida
              </p>

              <ul className="flex flex-col gap-2">
                {preguntas.map((q, i) => (
                  <motion.li
                    key={q}
                    initial={{ opacity: 0, x: 15 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.06 }}
                  >
                    <a
                      href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                        q
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between bg-white/5 text-gray-300 py-3 px-5 rounded-2xl text-[11px] font-bold uppercase tracking-wider hover:bg-white/10 hover:text-white border border-white/5 transition-all group"
                    >
                      <span className="leading-snug">{q}</span>
                      <SendHorizontal className="w-4 h-4 text-red-600 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Footer */}
            <div className="bg-white/5 p-3 text-center">
              <span className="text-[8px] font-mono text-gray-600 uppercase tracking-widest">
                Comunicacion directa con Kuroobi
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
