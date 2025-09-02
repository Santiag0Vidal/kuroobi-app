
import { BanknoteArrowUp, CreditCard, MessageSquare } from "lucide-react";
import PropTypes from "prop-types";

export default function ModalPagoConfirmacion({ plan, cliente, setOpen }) {


  const handlePagar = () => {

    window.open(plan?.link, "_blank");

    const mensaje = `Hola! Soy ${cliente?.nombre} ${cliente?.apellido}, ya realicé el pago del plan "${plan?.nombre}" de la actividad "${cliente.actividad}". Mi email es ${cliente.email} y mi teléfono ${cliente.telefono}.`;


    const numeroNegocio = "5492994539213";
    const urlWhatsApp = `https://wa.me/${numeroNegocio}?text=${encodeURIComponent(
      mensaje
    )}`;

    // Abrir WhatsApp en nueva pestaña
    window.open(urlWhatsApp, "_blank");

    // Cerrar modal
    setOpen(false);
  };

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-2xl font-semibold text-white transition shadow-lg bg-blue-600 hover:bg-blue-700 text-lg"
      >
        <BanknoteArrowUp className="w-5 h-5" />
        Pagar ahora
      </button>

      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4">
          <div className="bg-white rounded-3xl shadow-2xl max-w-md w-full p-8 text-center animate-fadeIn">
            <h2 className="text-3xl font-bold text-blue-600 mb-6 flex items-center justify-center gap-3">
              <CreditCard className="w-6 h-6" />
              Confirma tu pago
            </h2>

            <p className="mb-6 text-gray-800 text-base leading-relaxed flex flex-col items-center gap-3">
              <span>
                Vas a completar tu compra del plan{" "}
                <strong >{cliente?.actividad}</strong>.
                <strong >{plan?.nombre}</strong> por{" "}
                <strong className="text-green-600">{plan?.precio}</strong>
              </span>
              <span>
                Una vez realizado el pago, continua y seras redirigido a WhatsApp{" "}
                <MessageSquare className="inline-block text-green-500 w-5 h-5" />
                <br />
                Confirmar tu compra y enviarnos el comprobante.
              </span>
              <span className="text-sm text-gray-500">Si tenes alguna duda no dudes en consultar antes de efectar el pago. Gracias por confiar en nosotros!</span>


            </p>

            <div className="flex justify-center gap-4 mt-4">
              <button
                onClick={() => setOpen(false)}
                className="flex-1 py-3 px-4 rounded-2xl bg-gray-100 text-gray-700 font-semibold hover:bg-gray-200 transition text-lg"
              >
                Cancelar
              </button>
              <button
                onClick={handlePagar}
                className={`flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-2xl font-semibold text-lg transition shadow-lg ${plan?.link
                    ? "bg-blue-600 text-white hover:bg-blue-700"
                    : "bg-gray-300 text-gray-500 cursor-not-allowed"
                  }`}
              >
                <CreditCard className="w-5 h-5" />
                Pagar ahora
              </button>

            </div>
            <span>
              <strong className="text-sm text-gray-500" >Envianos el comprobante para confirmar tu compra nuestro staff se comunicara con vos de inmediato.</strong>.
            </span>
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