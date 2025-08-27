import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export default function BotonCarrito() {
  const [hayProductos, setHayProductos] = useState(false);

  useEffect(() => {
    const carrito = JSON.parse(localStorage.getItem("carrito")) || [];
    setHayProductos(carrito.length > 0);
  }, []);

  return (
    <Link to="/carrito" className="relative inline-block">
      <div className="bg-[#dec09a] p-2 rounded-full shadow hover:shadow-md transition-all">
        <img src="/iconos/carrito.png" alt="Carrito" className="w-6 h-6" />
      </div>
      {hayProductos && (
        <span className="absolute top-0 right-0 w-3 h-3 bg-red-600 rounded-full border-2 border-white"></span>
      )}
    </Link>
  );
}
