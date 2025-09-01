import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { toast } from "react-toastify";
import { cargarFormulario } from "../../utils/formulario";
import actividadesJson from "../../componentes/Actividades/actividades";

export default function FormularioCliente({ actividad, onClose }) {
  const [actividades, setActividades] = useState([]);
  const [actividadSeleccionada, setActividadSeleccionada] = useState(null);
  const actividadCompleta = actividades.find((a) => a.nombre === actividad);
  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    email: "",
    telefono: "",
    dni: "",
    fechaNacimiento: "",
    actividad: actividad,
    plan: actividadCompleta?.planes[0] || {},
    observaciones: "",
  });

  // Cargar actividades desde el JSON al montar el componente
  useEffect(() => {
    setActividades(actividadesJson);
    // Seleccionar la primera actividad y su primer plan por defecto
    if (actividadesJson.length > 0) {
      const primera = actividadesJson[0];
      setActividadSeleccionada(primera);
      setFormData((prev) => ({
        ...prev,
        actividad: primera.nombre,
        plan: primera.planes[0].nombre,
      }));
    }
  }, []);

  // Maneja cambios en inputs y selects
  const handleChange = (e) => {
    const { name, value } = e.target;

    // Si cambian la actividad, actualizar también el plan por defecto
    if (name === "actividad") {
      const act = actividades.find((a) => a.nombre === value);
      setActividadSeleccionada(act);
      setFormData({
        ...formData,
        actividad: act.nombre,
        plan: act.planes[0].nombre,
      });
      return;
    }

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  cargarFormulario(formData);
    toast.success(`Cliente ${formData.nombre} registrado correctamente 💪`);
   window.location.href = `/pago?actividad=${encodeURIComponent(formData.actividad)}&plan=${encodeURIComponent(formData.plan.nombre)}`;
    onClose();
  };
  console.log("comooooo", formData);
  return (
    <div className="max-w-lg mx-auto bg-white rounded-3xl shadow-2xl p-8 border border-[var(--c-graylite)]">
      <h2 className="text-3xl font-bold text-[var(--c-primary)] mb-6 text-center">
        Registro de Cliente
      </h2>

      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Nombre */}
        <div>
          <label className="block text-sm font-medium text-[var(--c-ink)] mb-1">
            Nombre Completo
          </label>
          <input
            type="text"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
            required
            className="w-full border border-[var(--c-graylite)] rounded-xl px-4 py-3 text-[var(--c-ink)] focus:ring-2 focus:ring-[var(--c-primary)] focus:outline-none transition"
          />
        </div>
        {/* Apellido */}
        <div>
          <label className="block text-sm font-medium text-[var(--c-ink)] mb-1">
            Apellido
          </label>
          <input
            type="text"
            name="apellido"
            value={formData.apellido}
            onChange={handleChange}
            required
            className="w-full border border-[var(--c-graylite)] rounded-xl px-4 py-3 text-[var(--c-ink)] focus:ring-2 focus:ring-[var(--c-primary)] focus:outline-none transition"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm font-medium text-[var(--c-ink)] mb-1">
            Email
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full border border-[var(--c-graylite)] rounded-xl px-4 py-3 text-[var(--c-ink)] focus:ring-2 focus:ring-[var(--c-primary)] focus:outline-none transition"
          />
        </div>

        {/* Teléfono */}
        <div>
          <label className="block text-sm font-medium text-[var(--c-ink)] mb-1">
            Teléfono
          </label>
          <input
            type="tel"
            name="telefono"
            value={formData.telefono}
            onChange={handleChange}
            className="w-full border border-[var(--c-graylite)] rounded-xl px-4 py-3 text-[var(--c-ink)] focus:ring-2 focus:ring-[var(--c-primary)] focus:outline-none transition"
          />
        </div>

        {/* DNI */}
        <div>
          <label className="block text-sm font-medium text-[var(--c-ink)] mb-1">
            DNI
          </label>
          <input
            type="text"
            name="dni"
            value={formData.dni}
            onChange={handleChange}
            className="w-full border border-[var(--c-graylite)] rounded-xl px-4 py-3 text-[var(--c-ink)] focus:ring-2 focus:ring-[var(--c-primary)] focus:outline-none transition"
          />
        </div>

        {/* Fecha de nacimiento */}
        <div>
          <label className="block text-sm font-medium text-[var(--c-ink)] mb-1">
            Fecha de Nacimiento
          </label>
          <input
            type="date"
            name="fechaNacimiento"
            value={formData.fechaNacimiento}
            onChange={handleChange}
            className="w-full border border-[var(--c-graylite)] rounded-xl px-4 py-3 text-[var(--c-ink)] focus:ring-2 focus:ring-[var(--c-primary)] focus:outline-none transition"
          />
        </div>

        {/* Actividad */}
        <div>
          <label className="block text-sm font-medium text-[var(--c-ink)] mb-1">
            Eleji el plan de {actividad} que quieras
          </label>
          {/*<select
            name="actividad"
            value={formData.actividad}
            onChange={handleChange}
            className="w-full border border-[var(--c-graylite)] rounded-xl px-4 py-3 focus:ring-2 focus:ring-[var(--c-primary)] focus:outline-none transition"
          >
            {actividades.map((a) => (
              <option key={a.nombre} value={a.nombre}>
                {a.nombre}
              </option>
            ))}
          </select>*/}
        </div>

        {/* Plan */}
        <div>
          <select
            name="plan"
            value={formData.plan.nombre || ""} // mostrar el nombre del plan
            onChange={(e) => {
              const planObj = actividadSeleccionada.planes.find(
                (p) => p.nombre === e.target.value
              );
              setFormData({ ...formData, plan: planObj });
            }}
            className="w-full border border-[var(--c-graylite)] rounded-xl px-4 py-3 focus:ring-2 focus:ring-[var(--c-primary)] focus:outline-none transition"
          >
            {actividadSeleccionada?.planes.map((p) => (
              <option key={p.nombre} value={p.nombre}>
                {p.nombre} — {p.precio}
              </option>
            ))}
          </select>
        </div>

        {/* Observaciones */}
        <div>
          <label className="block text-sm font-medium text-[var(--c-ink)] mb-1">
            Observaciones
          </label>
          <textarea
            name="observaciones"
            value={formData.observaciones}
            onChange={handleChange}
            rows="3"
            className="w-full border border-[var(--c-graylite)] rounded-xl px-4 py-3 text-[var(--c-ink)] focus:ring-2 focus:ring-[var(--c-primary)] focus:outline-none transition resize-none"
          />
        </div>

        {/* Botones */}
        <div className="flex justify-between pt-6">
          <button
            type="button"
            onClick={onClose}
            className="bg-[var(--c-slate)] text-white px-6 py-3 rounded-xl hover:bg-[var(--c-graydark)] transition"
          >
            Cancelar
          </button>
          <button
            type="submit"
            className="bg-[var(--c-primary)] text-white px-6 py-3 rounded-xl hover:bg-[var(--c-maroon)] transition"
          >
            Guardar
          </button>
        </div>
      </form>
    </div>
  );
}

FormularioCliente.propTypes = {
  onClose: PropTypes.func.isRequired,
  actividad: PropTypes.any.isRequired,
};
