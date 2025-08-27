import { useState } from "react";
import productos from "./budines";
import * as C from "../../componentes";

export default function Budines() {
  const [productoSeleccionado, setProductoSeleccionado] = useState(null);

  return (
    <>
      <C.NavbarInterno />
      <main className=" px-6 bg-[#2e3458] min-h-screen text-white p-6 pt-[160px]">
        <h1 className="text-3xl font-bold text-[#dec09a] text-center mb-6">
          Nuestros Budines
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {productos.map((producto) => (
            <C.ProductoCard
              key={producto.id}
              producto={producto}
              onClick={setProductoSeleccionado}
            />
          ))}
        </div>

        {productoSeleccionado && (
          <C.ModalProducto
            producto={productoSeleccionado}
            onClose={() => setProductoSeleccionado(null)}
          />
        )}
      </main>
    </>
  );
}
