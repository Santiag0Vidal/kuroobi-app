import * as C from "./../index";
import { Link } from "react-router-dom";

export default function Productos() {
  return (
    <section
      id="tratamientos"
      className="min-h-screen flex items-center justify-center bg-[#fbf4f3] px-4"
    >
      <div className="flex flex-col items-center max-w-7xl w-full gap-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-[#dec09a] text-center">
          NUESTROS TRATAMIENTOS
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          <Link to="/alfajores" className="block h-full w-full">
            <C.CardProducto
              titulo="Alfajores"
              descripcion="Encontrá aquí todos los alfajores de nuestro catálogo"
              imagen="/Productos/alfa1.png"
            />
          </Link>

          <Link to="/budines" className="block h-full w-full">
            <C.CardProducto
              titulo="Budines"
              descripcion="Encontrá aquí todos los budines de nuestro catálogo"
              imagen="/Productos/budi1.png"
            />
          </Link>
          <Link to="/tortas" className="block h-full w-full">
            <C.CardProducto
              titulo="Tortas y Tartas"
              descripcion="Encontrá aquí todas las variedades de tortas y tartas de nuestro catálogo"
              imagen="/Productos/tor1.png"
            />
          </Link>

          <Link to="/peluditos" className="block h-full w-full">
            <C.CardProducto
              titulo="Peluditos"
              descripcion="Galletas para nuestros peluditos"
              imagen="/Productos/pelu1.png"
            />
          </Link>

          <Link to="/cookies" className="block h-full w-full">
            <C.CardProducto
              titulo="Cookies"
              descripcion="Las cookies más deliciosas podras encontrarlas aquí"
              imagen="/Productos/coki1.png"
            />
          </Link>
          <Link to="/especiales" className="block h-full w-full">
            <C.CardProducto
              titulo="Especiales"
              descripcion="Algunos de nuestros productos especiales"
              imagen="/Productos/espe1.png"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
