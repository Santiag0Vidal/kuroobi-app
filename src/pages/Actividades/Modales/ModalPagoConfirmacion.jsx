import { BanknoteArrowUp, CreditCard, MessageSquare } from "lucide-react";
import PropTypes from "prop-types";
import { useState } from "react";
import ModalGenerarMsj from "./ModalGeneralMsj";

export default function ModalPagoConfirmacion({ plan, cliente, setOpen }) {
  const [openModal, setOpenModal] = useState(false);

  // Nuevo estado para controlar el flujo
  const [pagoRealizado, setPagoRealizado] = useState(false);

  const handlePagar = () => {
    if (plan?.link) {
      window.open(plan.link, "_blank");
      setPagoRealizado(true); // Cambia el flujo
    }
  };

  return (
    <>
      {/* Botón principal para abrir el modal */}
      <button
        onClick={() => setOpen(true)}
        className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-2xl font-semibold text-white transition shadow-lg bg-blue-600 hover:bg-blue-700 text-lg"
      >
        <BanknoteArrowUp className="w-5 h-5" />
        Pagar ahora
      </button>

      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4">
          <div className="bg-white rounded-3xl shadow-2xl max-w-md w-full max-h-[90vh] flex flex-col overflow-hidden animate-fadeIn">

            {/* Contenido */}
            <div className="p-6 overflow-y-auto flex-1 space-y-6">
              <h2 className="text-3xl font-bold text-blue-600 flex items-center justify-center gap-3">
                <CreditCard className="w-6 h-6" />
                Confirmá tu pago
              </h2>

              {/* Info del plan */}
              <div className="bg-blue-50 p-4 rounded-xl border-l-4 border-blue-400 space-y-2">
                <p>
                  1️⃣ Vas a completar el pago del plan{" "}
                  <strong>{plan?.nombre}</strong> para{" "}
                  <strong>{cliente?.actividad}</strong>.
                </p>
                <p>
                  💰 Precio:{" "}
                  <strong className="text-green-600">{plan?.precio}</strong>
                </p>
                <p className="text-sm text-gray-500">
                  Si tenés dudas consultá antes de pagar.
                </p>
              </div>

              {/* Explicación del flujo */}
              <div className="bg-green-50 p-4 rounded-xl border-l-4 border-green-400 space-y-2">
                <p>
                  2️⃣ Cuando hagas clic en <strong>Pagar ahora</strong>,
                  se abrirá la plataforma de pago.
                </p>
                <p>
                  3️⃣ Una vez realizado el pago, se habilitará el botón verde
                  para que puedas enviar tu comprobante y tus datos.
                </p>
                <p className="text-sm text-gray-600 flex items-center gap-2">
                  <MessageSquare className="w-5 h-5 text-green-500" />
                  Nuestro equipo confirmará tu compra cuando recibamos tu mensaje.
                </p>
              </div>
            </div>

            {/* Botones inferiores */}
            <div className="p-6 flex flex-col gap-3 border-t border-gray-200">

              {/* CANCELAR */}
              <button
                onClick={() => !pagoRealizado && setOpen(false)}
                disabled={pagoRealizado}
                className={`w-full py-3 px-4 rounded-2xl font-semibold text-lg transition
                  ${
                    pagoRealizado
                      ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                      : "bg-gray-300 text-gray-700 hover:bg-gray-200"
                  }`}
              >
                Cancelar
              </button>

              {/* PAGAR */}
              <button
                onClick={handlePagar}
                disabled={pagoRealizado || !plan?.link}
                className={`w-full flex items-center justify-center gap-2 py-3 px-4 rounded-2xl font-semibold text-lg shadow-lg transition
                  ${
                    pagoRealizado
                      ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                      : plan?.link
                      ? "bg-blue-600 text-white hover:bg-blue-700"
                      : "bg-gray-300 text-gray-500 cursor-not-allowed"
                  }`}
              >
                <CreditCard className="w-5 h-5" />
                Pagar ahora
              </button>

              {/* ENVIAR MENSAJE */}
              <button
                onClick={() => pagoRealizado && setOpenModal(true)}
                disabled={!pagoRealizado}
                className={`w-full flex items-center justify-center gap-2 py-3 px-4 rounded-2xl font-semibold text-lg shadow-lg transition
                  ${
                    pagoRealizado
                      ? "bg-green-600 text-white hover:bg-green-700"
                      : "bg-green-200 text-green-400 cursor-not-allowed"
                  }`}
              >
                <MessageSquare className="w-5 h-5" />
                Enviar comprobante y datos
              </button>
            </div>

            {/* Modal WhatsApp */}
            {openModal && <ModalGenerarMsj setOpen={setOpenModal} />}
          </div>
        </div>
      )}
    </>
  );
}

ModalPagoConfirmacion.propTypes = {
  cliente: PropTypes.object.isRequired,
  plan: PropTypes.object.isRequired,
  setOpen: PropTypes.func.isRequired,
};
