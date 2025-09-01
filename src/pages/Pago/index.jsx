import { useEffect, useState } from "react";
import * as C from "../../componentes/index";
import {
  BanknoteArrowUp,
  User,
  Calendar,
  IdCard,
  Mail,
  Phone,
} from "lucide-react";
import { borrarFormulario } from "../../utils/formulario";
import bgPago from "../../assets/fondo.jpg";

export default function Pago() {
  const [cliente, setCliente] = useState(null);
  const [planSeleccionado, setPlanSeleccionado] = useState(null);
  const [actividadSeleccionada, setActividadSeleccionada] = useState(null);
  const [aceptaTerminos, setAceptaTerminos] = useState(false);
  const [mostrarModal, setMostrarModal] = useState(false);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("cliente"));
    setCliente(data);
    console.log(data);
    const planName = data[0].plan;
    console.log("--", planName);
    const actividad = data[0].actividad;
    console.log(actividad);
    setActividadSeleccionada(actividad);
    setPlanSeleccionado(planName);
  }, []);
  if (!cliente || !planSeleccionado)
    return <p className="text-center text-white pt-40">Cargando...</p>;

  return (
    <>
      <C.NavComun />
      <main
        className="relative min-h-screen flex justify-center items-start pt-[160px] px-6"
        style={{
          backgroundImage: `url(${bgPago})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay degradado oscuro para resaltar el card */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/30 z-0" />

        <div className="relative z-10 w-full max-w-lg">
          <div className="bg-white rounded-3xl shadow-2xl p-8 text-gray-800">
            <h2 className="text-3xl font-bold text-[var(--c-primary)] mb-6 text-center">
              Confirmar pago
            </h2>

            <div className="space-y-3 mb-6">
              <h3>Actividad: {actividadSeleccionada}</h3>
              <p className="flex items-center gap-2">
                <User className="w-5 h-5 text-[var(--c-primary)]" />
                <span>
                  <strong>
                    {cliente[0].nombre} {cliente[0].apellido}
                  </strong>{" "}
                </span>
              </p>
              <p className="flex items-center gap-2">
                <IdCard className="w-5 h-5 text-[var(--c-primary)]" />
                <span>
                  DNI: <strong>{cliente[0].dni}</strong>
                </span>
              </p>
              <p className="flex items-center gap-2">
                <Calendar className="w-5 h-5 text-[var(--c-primary)]" />
                <span>
                  Nac.: <strong>{cliente[0].fechaNacimiento}</strong>
                </span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-5 h-5 text-[var(--c-primary)]" />
                <span>
                  Tel.: <strong>{cliente[0].telefono || "—"}</strong>
                </span>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-5 h-5 text-[var(--c-primary)]" />
                <span>
                  Email: <strong>{cliente[0].email}</strong>
                </span>
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-4 shadow-inner mb-6">
              <p className="text-lg font-semibold text-[var(--c-primary)] text-center">
                {planSeleccionado.nombre}
              </p>
              <p className="text-2xl font-bold text-center text-[var(--c-primary)] mt-2">
                {planSeleccionado.precio}
              </p>
            </div>

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
                  onClick={() => setMostrarModal(true)}
                  className="text-[var(--c-primary)] underline hover:text-[var(--c-maroon)]"
                >
                  Términos y Condiciones
                </button>
              </label>
            </div>

            <div className="space-y-3">
              <a
                href={aceptaTerminos ? planSeleccionado.link : "#"}
                target={aceptaTerminos ? "_blank" : "_self"}
                rel="noopener noreferrer"
                className={`w-full flex items-center justify-center gap-2 py-3 px-4 rounded-2xl font-semibold transition shadow-lg ${
                  aceptaTerminos
                    ? "bg-[var(--c-primary)] text-white hover:bg-[var(--c-maroon)]"
                    : "bg-gray-300 text-gray-500 cursor-not-allowed"
                }`}
              >
                <BanknoteArrowUp className="w-5 h-5" />
                Pagar ahora
              </a>
              <button
                type="button"
                onClick={() => {
                  borrarFormulario();
                  window.history.back();
                }}
                className="w-full py-3 px-4 rounded-2xl bg-gray-100 text-gray-700 font-semibold hover:bg-gray-200 transition"
              >
                Cancelar
              </button>
            </div>
          </div>
        </div>
      </main>

      {mostrarModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 px-4">
          <div className="bg-white rounded-2xl shadow-2xl p-6 max-w-lg w-full animate-fadeIn">
            <h3 className="text-2xl font-bold text-[var(--c-primary)] mb-4 text-center">
              Términos y Condiciones
            </h3>
            <div className="text-sm text-gray-700 space-y-3 max-h-80 overflow-y-auto pr-2">
              <p>
                ✅ El uso de este servicio implica la aceptación de los términos
                descritos en este documento.
              </p>
              <p>
                ✅ Los pagos realizados no son reembolsables, salvo casos
                excepcionales.
              </p>
              <p>
                ✅ El cliente se compromete a respetar las normas del gimnasio y
                a utilizar las instalaciones de forma segura.
              </p>
              <p>
                ✅ Los planes tienen una duración específica y no se prorratean.
              </p>
            </div>
            <div className="flex justify-center mt-6">
              <button
                onClick={() => setMostrarModal(false)}
                className="bg-[var(--c-primary)] text-white px-6 py-2 rounded-lg hover:bg-[var(--c-maroon)] transition"
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
