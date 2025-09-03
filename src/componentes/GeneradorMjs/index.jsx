import { useState } from "react";
import { getInfoCliente } from "../../utils/infoCliente";
import PropTypes from "prop-types";

export default function GeneradorMsj({ setOpen }) {
  const cliente = getInfoCliente();

  // Estado para el mensaje editable
  const [mensaje, setMensaje] = useState(`
Hola, soy ${cliente.nombre} ${cliente.apellido}.
DNI: ${cliente.dni}
Email: ${cliente.email}
Teléfono: ${cliente.telefono}
Fecha de nacimiento: ${cliente.fechaNacimiento}
Actividad: ${cliente.actividad}
Plan: ${cliente.plan?.nombre} - ${cliente.plan?.precio}
Observaciones: ${cliente.observaciones}
Adjunto el comprobante de pago y espero la confirmación del equipo.
  `);

  const enviarWhatsApp = () => {
    const numero = "5492994539213";
    const urlMensaje = `https://wa.me/${numero}?text=${encodeURIComponent(
      mensaje
    )}`;
    setOpen(false);
    window.open(urlMensaje, "_blank");
    
  };

  return (
    <div className="max-w-lg mx-auto mt-10 p-6 bg-white rounded-2xl shadow-xl border border-gray-200">
      <h2 className="text-2xl font-extrabold text-gray-800 mb-4 text-center">
        🚀 Verifica tus datos antes de enviar
      </h2>

      <p className="text-gray-600 mb-6 text-center">
        Estos datos se usarán para tu registro. Puedes revisarlos y editar el mensaje si lo deseas.
      </p>

      {/* Tarjeta de info del cliente */}
      <div className="bg-green-50 p-5 rounded-xl shadow-inner mb-6 border-l-4 border-green-400">
        <p className="mb-2">
          <span className="font-semibold text-green-700">Nombre:</span>{" "}
          {cliente.nombre} {cliente.apellido}
        </p>
        <p className="mb-2">
          <span className="font-semibold text-green-700">DNI:</span> {cliente.dni}
        </p>
        <p className="mb-2">
          <span className="font-semibold text-green-700">Email:</span> {cliente.email}
        </p>
        <p className="mb-2">
          <span className="font-semibold text-green-700">Teléfono:</span> {cliente.telefono}
        </p>
        <p className="mb-2">
          <span className="font-semibold text-green-700">Fecha de nacimiento:</span>{" "}
          {cliente.fechaNacimiento}
        </p>
        <p className="mb-2">
          <span className="font-semibold text-green-700">Actividad:</span> {cliente.actividad}
        </p>
        <p className="mb-2">
          <span className="font-semibold text-green-700">Plan:</span>{" "}
          {cliente.plan?.nombre} - {cliente.plan?.precio}
        </p>
        <p className="mb-2">
          <span className="font-semibold text-green-700">Observaciones:</span>{" "}
          {cliente.observaciones || "Ninguna"}
        </p>
      </div>

      {/* Texto guía para el usuario */}
      <p className="text-gray-700 mb-2 font-medium">
        ✏️ Puedes editar el mensaje a continuación si quieres agregar o corregir información:
      </p>

      {/* Textarea editable para el mensaje */}
      <textarea
        value={mensaje}
        onChange={(e) => setMensaje(e.target.value)}
        className="w-full p-3 border border-gray-300 rounded-xl resize-none text-gray-800 mb-4 focus:outline-none focus:ring-2 focus:ring-green-400"
        rows={10}
      />

      <p className="text-gray-600 mb-4 text-sm">
        📱 Al hacer clic en &quot;Abrir WhatsApp&quot; te redirigiremos para que compartas tu comprobante de pago y podamos confirmar tu registro.
      </p>

      <button
        onClick={enviarWhatsApp}
        className="w-full py-3 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-xl shadow-md transition transform hover:scale-105 flex items-center justify-center gap-2"
      >
        <span>💬 Abrir WhatsApp</span>
      </button>
    </div>
  );
}

GeneradorMsj.propTypes = {
    setOpen: PropTypes.func.isRequired,
};
