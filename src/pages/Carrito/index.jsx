import * as C from "../../componentes";
import { useEffect, useState } from "react";

export default function Carrito() {
  const [carrito, setCarrito] = useState([]);

  useEffect(() => {
    const guardado = JSON.parse(localStorage.getItem("carrito")) || [];
    setCarrito(guardado);
  }, []);

  const generarMensaje = () => {
    if (carrito.length === 0) return "";

    let mensaje = "Hola! Quiero hacer un pedido:\n";
    carrito.forEach((item) => {
      mensaje += `• ${item.nombre} x${item.cantidad || 1}\n`;
    });
    return encodeURIComponent(mensaje);
  };
  const eliminarDelCarrito = (index) => {
    const nuevoCarrito = [...carrito];
    nuevoCarrito.splice(index, 1);
    setCarrito(nuevoCarrito);
    localStorage.setItem("carrito", JSON.stringify(nuevoCarrito));
  };

  return (
    <>
      <C.NavbarInterno />
      <main className=" px-6 bg-[#2e3458] min-h-screen text-white p-6 pt-[160px]">
        <div className="flex flex-col items-center max-w-7xl w-full gap-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#dec09a] text-center">
            Tu Carrito de Compras
          </h2>
          <div className="relative flex flex-col lg:flex-row items-center max-w-7xl w-full bg-[#f9e8d9] rounded-xl shadow-lg overflow-hidden p-6 lg:p-12 gap-8">
            <div className="absolute left-4 top-4 text-[#173052] text-5xl lg:text-7xl font-extrabold opacity-10 leading-none z-0">
              <p>Pedilos</p>
              <p className="italic">Pedilos</p>
              <p>Pedilos</p>
            </div>

            <div className="relative z-10 text-[#2e3458] text-center lg:text-left">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Evianos un mensaje por WhatsApp
              </h2>
              <p className="text-sm sm:text-base">
                Envía tu pedido por WhatsApp para que podamos procesarlo.
                Asegúrate de verificar la cantidad de cada producto.
                <br />
                Te responderemos lo antes posible para confirmar tu pedido y
                coordinar la entrega. ¡Gracias por elegirnos!
              </p>
            </div>
            <div className="relative z-10 w-full lg:w-auto">
              {carrito.map((item, i) => (
                <div
                  key={i}
                  className="flex justify-between items-center mb-2 text-sm sm:text-base text-[#2e3458] bg-white p-2 rounded shadow"
                >
                  <span>
                    {item.nombre} x{item.cantidad || 1}
                  </span>
                  <button
                    onClick={() => eliminarDelCarrito(i)}
                    className="ml-4 text-red-600 hover:text-red-800 text-xs sm:text-sm"
                  >
                    Eliminar
                  </button>
                </div>
              ))}
            </div>
            {carrito.length > 0 && (
              <a
                href={`https://wa.me/5493772449944?text=${generarMensaje()}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
              >
                Enviar por WhatsApp
              </a>
            )}
          </div>
        </div>
      </main>
    </>
  );
}
