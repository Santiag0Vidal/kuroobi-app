import { BanknoteArrowUp, CreditCard, MessageSquare } from "lucide-react";
import PropTypes from "prop-types";
import { useState } from "react";
import ModalGenerarMsj from "./ModalGeneralMsj";

export default function ModalPagoConfirmacion({ plan, cliente, setOpen }) {
  const [openModal, setOpenModal] = useState(false);

  const handlePagar = () => {
    if (plan?.link) {
      window.open(plan.link, "_blank");
      setOpen(false);
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
            {/* Contenido scrollable */}
            <div className="p-6 overflow-y-auto flex-1 space-y-6">
              <h2 className="text-3xl font-bold text-blue-600 flex items-center justify-center gap-3">
                <CreditCard className="w-6 h-6" />
                Confirma tu pago
              </h2>

              {/* Información del plan */}
              <div className="bg-blue-50 p-4 rounded-xl border-l-4 border-blue-400 text-left space-y-2">
                <p>
                  1️⃣ Vas a completar tu compra del plan{" "}
                  <strong>{plan?.nombre}</strong> de{" "}
                  <strong>{cliente?.actividad}</strong>.
                </p>
                <p>
                  💰 Precio:{" "}
                  <strong className="text-green-600">{plan?.precio}</strong>
                </p>
                <p className="text-sm text-gray-500">
                  Si tienes dudas, consulta antes de efectuar el pago.
                </p>
              </div>

              {/* Instrucciones para WhatsApp */}
              <div className="bg-green-50 p-4 rounded-xl border-l-4 border-green-400 text-left space-y-2">
                <p>
                  2️⃣ Una vez realizado el pago, haz clic en el botón verde para
                  enviar tu comprobante y datos al equipo de recepción.
                </p>
                <p className="text-sm text-gray-600 flex items-center gap-2">
                  <MessageSquare className="w-5 h-5 text-green-500" />
                  Confirmar tu compra y enviarnos el comprobante.
                </p>
              </div>

              <p className="text-sm text-gray-500 mt-2 text-center">
                Nuestro equipo confirmará tu compra en cuanto recibamos tu
                comprobante ✅
              </p>
            </div>

            {/* Botones siempre visibles */}
            <div className="p-6 flex flex-col gap-3 border-t border-gray-200">
              <button
                onClick={() => setOpen(false)}
                className="w-full py-3 px-4 rounded-2xl bg-gray-300 text-gray-700 font-semibold hover:bg-gray-200 transition text-lg"
              >
                Cancelar
              </button>

              <button
                onClick={() => { handlePagar(); setOpen(true); }}
                className={`w-full flex items-center justify-center gap-2 py-3 px-4 rounded-2xl font-semibold text-lg transition shadow-lg ${
                  plan?.link
                    ? "bg-blue-600 text-white hover:bg-blue-700"
                    : "bg-gray-300 text-gray-500 cursor-not-allowed"
                }`}
              >
                <CreditCard className="w-5 h-5" />
                Pagar ahora
              </button>

              <button
                onClick={() => setOpenModal(true)}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-2xl font-semibold text-white transition shadow-lg bg-green-600 hover:bg-green-700 text-lg"
              >
                <MessageSquare className="w-5 h-5 text-green-500" />
                Enviar comprobante y datos
              </button>
            </div>

            {/* Modal de enviar mensaje */}
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
