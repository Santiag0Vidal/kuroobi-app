import { useState } from "react";
import PropTypes from "prop-types";
import { toast } from "react-toastify";
import { cargarFormulario } from "../../utils/formulario";

export default function FormularioCliente({ onClose }) {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    dni: "",
    fechaNacimiento: "",
    plan: "mensual",
    observaciones: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    cargarFormulario(formData);
    toast.success(`Cliente ${formData.nombre} registrado correctamente 💪`);
    onClose();
  };

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

        {/* Plan */}
        <div>
          <label className="block text-sm font-medium text-[var(--c-ink)] mb-1">
            Plan
          </label>
          <select
            name="plan"
            value={formData.plan}
            onChange={handleChange}
            className="w-full border border-[var(--c-graylite)] rounded-xl px-4 py-3 text-[var(--c-ink)] focus:ring-2 focus:ring-[var(--c-primary)] focus:outline-none transition"
          >
            <option value="mensual">Mensual</option>
            <option value="trimestral">Trimestral</option>
            <option value="anual">Anual</option>
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
};
