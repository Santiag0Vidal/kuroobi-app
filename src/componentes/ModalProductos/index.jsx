import PropTypes from "prop-types";
import * as C from "../index.js";


export default function ModalProducto({ producto, onClose }) {
  if (!producto) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white max-w-md w-full rounded-xl shadow-lg p-6 relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-4 text-xl text-gray-500 hover:text-red-600"
        >
          ×
        </button>
        <img
          src={producto.img}
          alt={producto.nombre}
          className="w-full h-64 object-cover rounded-md mb-4"
        />
        <h2 className="text-2xl font-bold text-gray-800">{producto.nombre}</h2>
        <p className="mt-2 text-gray-700">{producto.descripcion}</p>

        <div  className="flex flex-col items-center gap-2 mt-4">
          <C.BotonAgregar producto={producto} onClose={onClose}/>
       
        </div>
      </div>
    </div>
  );
}

ModalProducto.propTypes = {
  producto: PropTypes.shape({
    img: PropTypes.string.isRequired,
    nombre: PropTypes.string.isRequired,
    descripcion: PropTypes.string.isRequired,
  }).isRequired,
  onClose: PropTypes.func.isRequired,
};
