import { useState } from "react";
import PropTypes from "prop-types";
import * as C from '../../index';

const CardActividades = ({ titulo, descripcion, imagen }) => {
  const [open, setOpen] = useState(false);
  console.log('des',descripcion)
  return (
    <>
      {/* Card */}
      <div
        onClick={() => setOpen(true)}
        className="relative cursor-pointer bg-[var(--c-graylite)] rounded-2xl overflow-hidden shadow-lg w-full max-w-6xl mx-auto hover:scale-[1.02] transition-transform duration-300"
      >
        {/* Imagen */}
        <div className="relative w-full h-64">
          <img
            src={imagen}
            alt={titulo}
            className="object-cover w-full h-full"
          />

          {/* Degradado */}
          <div className="absolute inset-0 bg-gradient-to-b from-[var(--c-ink)]/80 via-[var(--c-primary)]/50 to-transparent" />

          {/* Texto encima */}
          <div className="absolute inset-0 flex flex-col justify-center items-center  text-white text-center">
            <h2 className="text-4xl sm:text-5xl font-extrabold text-[var(--c-graylite)] text-center tracking-wide relative mb-12 drop-shadow-lg">{titulo}</h2>
            <p className="text-sm mt-3 text-gray-200 italic">
              Haz clic para registrarte con la membresia
            </p>
          </div>

        </div>
      </div>
      {/* Modal */}
      {open && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md relative overflow-y-auto max-h-[90vh]">
            {/* Botón cerrar */}
            <button
              onClick={() => setOpen(false)}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 text-xl"
            >
              ✕
            </button>

            {/* Formulario */}
            <div className="p-6">
              <C.FormularioCliente actividad={descripcion} onClose={() => setOpen(false)} />
            </div>
          </div>
        </div>
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
