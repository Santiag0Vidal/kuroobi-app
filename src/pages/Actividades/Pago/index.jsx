import * as C from "../../../componentes/index";
import ModalTerminos from "../Modales/ModalTerminos";
import ModalDescripcion from "../Modales/ModalDescripcion";
import ModalPagoConfirmacion from "../Modales/ModalPagoConfirmacion";
import { BanknoteArrowUp } from "lucide-react";
import { useState } from "react";
import { borrarFormulario } from "../../../utils/formulario";
import bgPago from "../../../assets/fondo.jpg";
import DatosCliente from "../Cards/DatosCliente";

export default function Pago() {
  const [aceptaTerminos, setAceptaTerminos] = useState(false);
  const [modalTerminosOpen, setModalTerminosOpen] = useState(false);
  const [modalConfirmacionOpen, setModalConfirmacionOpen] = useState(false);
  const [modalDescripcionOpen, setModalDescripcionOpen] = useState(false);

  const data = JSON.parse(localStorage.getItem("cliente")) || [];
  const cliente = data[0] || null;

  if (!cliente) {
    return <p className="text-center text-white pt-40">Cargando...</p>;
  }



  return (
    <>
      <C.NavComun />

      <main
        className="relative min-h-screen flex justify-center items-start pt-[160px] px-6 pb-12"
        style={{
          backgroundImage: `url(${bgPago})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/30 z-0" />


        <div className="relative z-10 w-full max-w-3xl mx-auto">
          <div className="bg-white rounded-3xl shadow-2xl p-8 text-gray-800">
            <C.Subtitulo texto="CONFIRMAR PAGO" />

            <DatosCliente cliente={cliente} />

            <div className="bg-gradient-to-br from-white to-gray-100 rounded-2xl p-6 shadow-lg mb-6 text-center border border-gray-200">
              <C.Subtitulo texto={cliente.plan.nombre} />
              <p className="text-2xl sm:text-3xl font-extrabold text-[var(--c-primary)] mt-3">{cliente.plan?.precio || "—"}</p>
            </div>
            <div className="flex items-center gap-2 mb-6">
              <input
                type="checkbox"
                id="plan"
                className="w-5 h-5 accent-[var(--c-primary)]"
              />
              <label htmlFor="plan" className="text-sm">
                Estas de acuerdo con este plan {" "}
                <button
                  type="button"
                  onClick={() => setModalDescripcionOpen(true)}
                  className="text-[var(--c-primary)] underline hover:text-[var(--c-maroon)]"
                >
                  Ver los detalles
                </button>
              </label>
            </div>
            <C.Tarjetas />

            {/* Checkbox de términos */}
            <div className="flex items-center gap-2 mb-6">
              <input
                type="checkbox"
                id="terminos"
                checked={aceptaTerminos}
                onChange={(e) => setAceptaTerminos(e.target.checked)}
                className="w-5 h-5 accent-[var(--c-primary)]"
              />
              <label htmlFor="terminos" className="text-sm">
                Acepto los{" "}
                <button
                  type="button"
                  onClick={() => setModalTerminosOpen(true)}
                  className="text-[var(--c-primary)] underline hover:text-[var(--c-maroon)]"
                >
                  Términos y Condiciones
                </button>
              </label>
            </div>

            {/* Botones */}
            <div className="space-y-3">
              <button
                onClick={() => setModalConfirmacionOpen(true)}
                className={`w-full flex items-center justify-center gap-2 py-3 px-4 rounded-2xl font-semibold transition shadow-lg ${aceptaTerminos && cliente.plan?.link
                    ? "bg-[var(--c-primary)] text-white hover:bg-[var(--c-maroon)]"
                    : "bg-gray-300 text-gray-500 cursor-not-allowed"
                  }`}
                disabled={!aceptaTerminos || !cliente.plan?.link}
              >
                <BanknoteArrowUp className="w-5 h-5" />
                Pagar ahora
              </button>

              <button
                type="button"
                onClick={() => {
                  borrarFormulario();
                  window.history.back();
                }}
                className="w-full py-3 px-4 rounded-2xl bg-gray-300 text-gray-700 font-semibold hover:bg-gray-200 transition"
              >
                Cancelar
              </button>
            </div>
          </div>
        </div>
      </main>

      {/* Modales */}
      
      {modalDescripcionOpen && <ModalDescripcion setOpen={setModalDescripcionOpen} cliente={cliente}/>}
      {modalTerminosOpen && <ModalTerminos setOpen={setModalTerminosOpen} />}
      {modalConfirmacionOpen && <ModalPagoConfirmacion setOpen={setModalConfirmacionOpen} plan={cliente.plan} cliente={cliente} />}
    </>
  );
}
