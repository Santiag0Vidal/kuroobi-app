import { useState } from "react";
import PropTypes from "prop-types";
import { X, MessageSquare } from "lucide-react";

// NOTA IMPORTANTE: La dependencia "../../utils/infoCliente" se resolvió con el archivo anterior.
import { getInfoCliente } from "../../utils/infoCliente"; 

export default function ModalGenerarMsj({ setOpen }) {
  // Obtiene los datos del cliente guardados tras el formulario
  const cliente = getInfoCliente();

  // Helper para formatear la fecha (si no se hizo en la utilidad)
  const formatDate = (dateString) => {
    if (!dateString) return "?";
    try {
      const [year, month, day] = dateString.split('-');
      return `${day}/${month}/${year}`;
    } catch (error) {
      return dateString;
    }
  };


  // Estado para el mensaje editable.
  // Se usa un template string para pre-llenar con todos los datos.
  // [MODIFICACIÓN AQUÍ] Se añade la Condición Física al mensaje.
  const [mensaje, setMensaje] = useState(`
Hola, soy ${cliente.nombre} ${cliente.apellido}.
DNI: ${cliente.dni}
Email: ${cliente.email}
Teléfono: ${cliente.telefono}
Fecha de nacimiento: ${formatDate(cliente.fechaNacimiento)}
Actividad: ${cliente.actividad}
Plan: ${cliente.plan?.nombre} - ${cliente.plan?.precio}
Condición Física: ${cliente.condicionFisica || "Ninguna"} 
Observaciones: ${cliente.observaciones || "Ninguna"}
Adjunto el comprobante de pago y espero la confirmación del equipo.
  `.trim()); // .trim() para quitar el salto de línea inicial

  const enviarWhatsApp = () => {
    // Número de WhatsApp al que enviar el mensaje (ejemplo: +54 299 605 5279)
    const numero = "542996055279";
    
    // Codifica el mensaje para la URL
    const urlMensaje = `https://wa.me/${numero}?text=${encodeURIComponent(
      mensaje
    )}`;

    setOpen(false); // Cierra el modal antes de redirigir
    window.open(urlMensaje, "_blank");
    
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 animate-fade-in">
        <div className="bg-white rounded-2xl shadow-2xl max-w-lg w-full max-h-[90vh] flex flex-col overflow-hidden relative">
            
            {/* Botón de cerrar */}
            <button
                onClick={() => setOpen(false)}
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-900 transition"
                aria-label="Cerrar modal"
            >
                <X className="w-6 h-6" />
            </button>

            <div className="p-6 overflow-y-auto flex-1">
                <h2 className="text-3xl font-extrabold text-gray-800 mb-2 text-center">
                    🚀 Confirma y Envía
                </h2>

                <p className="text-gray-600 mb-6 text-center text-sm">
                    Revisa tus datos y genera el mensaje de WhatsApp para adjuntar tu comprobante.
                </p>

                {/* Tarjeta de info del cliente para revisión rápida */}
                <div className="bg-green-50 p-5 rounded-xl shadow-inner mb-6 border-l-4 border-green-400 text-sm">
                    <p className="font-bold text-green-700 mb-2 flex items-center gap-1">Datos de Inscripción:</p>
                    <div className="grid grid-cols-2 gap-x-4 gap-y-1 text-gray-700">
                        <p>
                            <span className="font-semibold">Nombre:</span> {cliente.nombre} {cliente.apellido}
                        </p>
                        <p>
                            <span className="font-semibold">DNI:</span> {cliente.dni}
                        </p>
                        <p>
                            <span className="font-semibold">Email:</span> {cliente.email}
                        </p>
                        <p>
                            <span className="font-semibold">Teléfono:</span> {cliente.telefono}
                        </p>
                        <p>
                            <span className="font-semibold">Nacimiento:</span> {formatDate(cliente.fechaNacimiento)}
                        </p>
                        <p>
                            <span className="font-semibold">Actividad:</span> {cliente.actividad}
                        </p>
                        <p className="col-span-2">
                            <span className="font-semibold">Plan:</span> {cliente.plan?.nombre} - {cliente.plan?.precio}
                        </p>
                        <p className="col-span-2">
                            <span className="font-semibold">Condición Física:</span> {cliente.condicionFisica || "Ninguna"}
                        </p>
                        <p className="col-span-2">
                            <span className="font-semibold">Observaciones:</span> {cliente.observaciones || "Ninguna"}
                        </p>
                    </div>
                </div>

                {/* Texto guía para el usuario */}
                <p className="text-gray-700 mb-2 font-medium">
                    ✏️ Mensaje de confirmación (puedes editar):
                </p>

                {/* Textarea editable para el mensaje */}
                <textarea
                    value={mensaje}
                    onChange={(e) => setMensaje(e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-xl resize-none text-gray-800 mb-4 text-sm focus:outline-none focus:ring-2 focus:ring-green-400"
                    rows={8}
                />

                <p className="text-gray-600 mb-6 text-sm italic">
                    <MessageSquare className="w-4 h-4 inline mr-1 align-sub" /> 
                    Al hacer clic, se abrirá WhatsApp con el mensaje pre-escrito. Recuerda adjuntar la foto o captura del comprobante de pago.
                </p>

                <button
                    onClick={enviarWhatsApp}
                    className="w-full py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-xl shadow-lg transition transform hover:scale-[1.01] flex items-center justify-center gap-2 text-lg"
                >
                    <span>Abrir WhatsApp y Enviar</span>
                </button>
                
                <button
                    onClick={() => setOpen(false)}
                    className="w-full py-2 mt-2 text-gray-500 hover:text-gray-800 transition"
                >
                    Volver
                </button>
            </div>
        </div>
    </div>
  );
}

ModalGenerarMsj.propTypes = {
    setOpen: PropTypes.func.isRequired,
};