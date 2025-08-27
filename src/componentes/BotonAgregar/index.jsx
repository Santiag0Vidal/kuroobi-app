import { useState } from "react";
import PropTypes from "prop-types";
import { agregarAlCarrito } from "../../utils/carrito.js";
import { toast } from "react-toastify";

export default function BotonAgregar({ producto, onClose }) {
  const [cantidad, setCantidad] = useState(1);

  const incrementar = () => {
    if (cantidad < 100) setCantidad((prev) => prev + 1);
  };

  const decrementar = () => {
    if (cantidad > 1) setCantidad((prev) => prev - 1);
  };

  const handleAgregar = () => {
    agregarAlCarrito({ ...producto, cantidad });
    toast.success(`${cantidad} x ${producto.nombre} agregado al pedido`);
    onClose();
  };

  return (
    <div className="flex flex-col items-center gap-2 mt-4">
      <div className="flex items-center gap-2">
        <button
          onClick={decrementar}
          className="bg-[#dec09a] text-[#2e3458] w-8 h-8 rounded font-bold hover:bg-yellow-300 transition"
        >
          −
        </button>
        <span className="text-lg font-semibold w-6 text-center text-[#2e3458]">
          {cantidad}
        </span>
        <button
          onClick={incrementar}
          className="bg-[#dec09a] text-[#2e3458] w-8 h-8 rounded font-bold hover:bg-yellow-300 transition"
        >
          +
        </button>
      </div>

      <button
        onClick={handleAgregar}
        className="bg-[#dec09a] text-[#2e3458] px-4 py-2 rounded hover:bg-yellow-300 transition mt-2"
      >
        Agregar al pedido
      </button>
         <button
            onClick={onClose}
            className=" bg-pink-600 text-white px-4 py-2 rounded-md hover:bg-pink-700"
          >
            Cerrar
          </button>
    </div>
  );
}

BotonAgregar.propTypes = {
  producto: PropTypes.object.isRequired,
  onClose: PropTypes.func.isRequired,
};
