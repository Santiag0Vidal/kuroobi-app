import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { toast } from "react-toastify";
import { cargarFormulario } from "../../../utils/formulario";
import { useNavigate } from "react-router-dom";
import { User, Mail, Phone, Calendar, CreditCard, FileText, Send } from "lucide-react";

export default function FormularioCliente({ nomActividad, planes, onClose }) {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("personal");
  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    email: "",
    telefono: "",
    dni: "",
    fechaNacimiento: "",
    actividad: nomActividad,
    plan: planes[0] || {},
    observaciones: "Podes escribir aca algo que quieras contarnos...",
  });

  const [isTabValid, setIsTabValid] = useState(false);

  const inputClass =
    "w-full border rounded-xl px-4 py-3 focus:ring-2 focus:ring-[var(--c-primary)] transition";

  const tabs = [
    { id: "personal", label: "Personal", fields: ["nombre", "apellido", "dni", "fechaNacimiento"], icon: <User className="w-5 h-5 mr-2" /> },
    { id: "contacto", label: "Contacto", fields: ["email", "telefono"], icon: <Phone className="w-5 h-5 mr-2" /> },
    { id: "plan", label: "Plan", fields: ["plan"], icon: <CreditCard className="w-5 h-5 mr-2" /> },
    { id: "observaciones", label: "Notas", fields: ["observaciones"], icon: <FileText className="w-5 h-5 mr-2" /> },
      { id: "enviar", label: "Confirmar", fields: ["enviar"], icon: <Send  className="w-5 h-5 mr-2" /> },
  ];

  useEffect(() => {
    // Validar campos obligatorios del tab actual
    const tab = tabs.find((t) => t.id === activeTab);
    const valid = tab.fields.every((field) => {
      const value = formData[field];
      return value !== "" && value !== null && value !== undefined;
    });
    setIsTabValid(valid);
  }, [activeTab, formData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "plan") {
      setFormData((prev) => ({ ...prev, plan: JSON.parse(value) }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    cargarFormulario(formData);
    toast.success(`${formData.nombre}, debes realizar el pago para registrarte 💪`, { position: "top-center", autoClose: 2000 });
    navigate(`/pago`);
    onClose();
  };

  const nextTab = () => {
    const currentIndex = tabs.findIndex((t) => t.id === activeTab);
    if (currentIndex < tabs.length - 1) setActiveTab(tabs[currentIndex + 1].id);
  };

  return (
    <div className="max-w-lg mx-auto bg-white rounded-3xl shadow-2xl p-8 border border-[var(--c-graylite)]">
      <h2 className="text-3xl font-bold text-[var(--c-primary)] mb-6 text-center">REGISTRO</h2>

      {/* Barra de tabs */}
      <div className="flex overflow-x-auto whitespace-nowrap mb-6 border-b border-gray-200">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`inline-flex items-center h-12 px-4 text-sm sm:text-base border-b-2 ${
              activeTab === tab.id
                ? "border-[var(--c-primary)] text-[var(--c-primary)] font-semibold"
                : "border-transparent text-gray-600 hover:text-[var(--c-primary)]"
            }`}
          >
            {tab.icon}
            {tab.label}
          </button>
        ))}
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Contenido del tab */}
        {activeTab === "personal" && (
          <>
            <div><label>Nombre</label><input type="text" name="nombre" value={formData.nombre} onChange={handleChange} required className={inputClass} /></div>
            <div><label>Apellido</label><input type="text" name="apellido" value={formData.apellido} onChange={handleChange} required className={inputClass} /></div>
            <div><label>DNI</label><input type="text" name="dni" value={formData.dni} onChange={handleChange} className={inputClass} /></div>
            <div><label>Fecha de Nacimiento</label><input type="date" name="fechaNacimiento" value={formData.fechaNacimiento} onChange={handleChange} className={inputClass} /></div>
          </>
        )}

        {activeTab === "contacto" && (
          <>
            <div><label>Email</label><input type="email" name="email" value={formData.email} onChange={handleChange} required className={inputClass} /></div>
            <div><label>Teléfono</label><input type="tel" name="telefono" value={formData.telefono} onChange={handleChange} className={inputClass} /></div>
          </>
        )}

        {activeTab === "plan" && (
          <div>
            <label>Elegí el plan de {nomActividad}</label>
            <select name="plan" value={JSON.stringify(formData.plan)} onChange={handleChange} className={inputClass}>
              {planes.map((p) => (
                <option key={p.nombre} value={JSON.stringify(p)}>{p.nombre} — {p.precio}</option>
              ))}
            </select>
          </div>
        )}

        {activeTab === "observaciones" && (
          <div>
            <label>Observaciones</label>
            <textarea name="observaciones" value={formData.observaciones} onChange={handleChange} rows="3" className={inputClass} />
          </div>
        )}
        {activeTab === "enviar" && (
          <div>
            <p className="text-center text-gray-600">Completa el formulario y hace clic en Continuar para proceder al pago.</p>
            
          </div>
        )}

        {/* Botones */}
        <div className="flex justify-between pt-6">
          <button type="button" onClick={onClose} className="bg-[var(--c-slate)] text-white px-6 py-3 rounded-xl hover:bg-[var(--c-graydark)] transition">
            Cancelar
          </button>

          {activeTab === "enviar" ? (
            <button type="submit" className={`px-6 py-3 rounded-xl transition ${isTabValid ? "bg-[var(--c-primary)] text-white hover:bg-[var(--c-maroon)]" : "bg-gray-300 text-gray-500 cursor-not-allowed"}`} disabled={!isTabValid}>
              Continuar
            </button>
          ) : (
            <button type="button" onClick={nextTab} className={`px-6 py-3 rounded-xl transition ${isTabValid ? "bg-[var(--c-primary)] text-white hover:bg-[var(--c-maroon)]" : "bg-gray-300 text-gray-500 cursor-not-allowed"}`} disabled={!isTabValid}>
              Siguiente
            </button>
          )}
        </div>
      </form>
    </div>
  );
}

FormularioCliente.propTypes = {
  onClose: PropTypes.func.isRequired,
  nomActividad: PropTypes.string.isRequired,
  planes: PropTypes.arrayOf(
    PropTypes.shape({
      nombre: PropTypes.string.isRequired,
      precio: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
    })
  ).isRequired,
};

