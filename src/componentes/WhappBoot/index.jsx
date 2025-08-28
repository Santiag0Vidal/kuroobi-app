import { useState } from "react";
import { SendHorizontal, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import preguntas from "./preguntas";

export default function WhatsappBot() {
  const [open, setOpen] = useState(false);
  const whatsappNumber = "5493772449944";

  return (
    <>
      {/* Botón flotante */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 bg-[var(--c-primary)] text-white p-4 rounded-full shadow-xl hover:bg-[var(--c-maroon)] transition-all z-50"
        title="Comunicate con nosotros"
      >
        {open ? <X className="w-6 h-6" /> : <img src="/iconos/wp.png" alt="WhatsApp" className="w-10 h-10" />}
      </button>

      {/* Panel de preguntas con animación */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-20 right-6 w-72 bg-[var(--c-graylite)]/90 backdrop-blur-sm shadow-2xl rounded-3xl p-4 z-50 border border-[var(--c-graydark)]"
          >
            <h4 className="text-[var(--c-brown)] font-bold mb-3 text-center">Comunicate con nosotros</h4>
            <ul className="flex flex-col gap-3">
              {preguntas.map((q, i) => (
                <a
                  key={i}
                  href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(q)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between bg-[var(--c-primary)] text-white py-2 px-4 rounded-xl text-sm font-medium hover:bg-[var(--c-maroon)] transition-shadow shadow hover:shadow-lg"
                >
                  {q}
                  <SendHorizontal className="w-4 h-4 ml-2" />
                </a>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
