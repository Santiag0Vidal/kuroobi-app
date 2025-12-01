import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { toast } from "react-toastify";
import { useNavigate } from 'react-router-dom';
import { cargarFormulario } from "../../../utils/formulario"; // <--- ¡Asegúrate de que esta ruta y función sean correctas!
import { User, Phone, CreditCard, FileText, Send, HeartPulse } from "lucide-react";

// Helper para calcular la edad exacta a partir de una fecha de nacimiento (YYYY-MM-DD)
const calculateAge = (dateString) => {
    if (!dateString) return null;
    const today = new Date();
    const birthDate = new Date(dateString);
    let age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();
    // Ajuste si aún no ha cumplido años este mes
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
};


export default function FormularioCliente({ nomActividad, planes, onClose }) {
  const navigate = useNavigate();

  // 🔹 Limpia el localStorage cada vez que entrás a un formulario de actividad
  useEffect(() => {
    localStorage.clear();
  }, []);

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
    condicionFisica: "",
    observaciones: "",
  });

    // Estado para errores por campo
    const [errors, setErrors] = useState({});
    const [isTabValid, setIsTabValid] = useState(false);
    const [isMinor, setIsMinor] = useState(false); // Nuevo estado para edad

    // Clase base de Input (no la toqué, la uso como base)
    const inputBaseClass =
        "w-full border bg-white rounded-lg px-4 py-3 focus:outline-none focus:ring-3 focus:ring-[var(--c-primary)] transition duration-300 shadow-sm";

    // Clase que aplico cuando hay error
    const errorClass = "border-red-500 ring-2 ring-red-100";

    const inputClassFor = (field) => {
        return `${inputBaseClass} ${errors[field] ? errorClass : "border-gray-300"}`;
    };

    const tabs = [
        { id: "personal", label: "Personal", fields: ["nombre", "apellido", "dni", "fechaNacimiento"], icon: <User className="w-5 h-5" /> },
        { id: "contacto", label: "Contacto", fields: ["email", "telefono"], icon: <Phone className="w-5 h-5" /> },
        { id: "plan", label: "Plan", fields: ["plan"], icon: <CreditCard className="w-5 h-5" /> },
        { id: "condicion", label: "Salud Física", fields: ["condicionFisica"], icon: <HeartPulse className="w-5 h-5" /> },
        { id: "observaciones", label: "Notas", fields: ["observaciones"], icon: <FileText className="w-5 h-5" /> },
        { id: "enviar", label: "Confirmar", fields: ["enviar"], icon: <Send className="w-5 h-5" /> },
    ];

    const totalSteps = tabs.length;
    const currentIndex = tabs.findIndex((t) => t.id === activeTab);
    const currentStep = currentIndex + 1;
    const progress = (currentStep / totalSteps) * 100;

    // Obtener el objeto del tab activo para extraer el label y el icono
    const activeTabObj = tabs.find(t => t.id === activeTab);
    const currentLabel = activeTabObj?.label;
    const currentIcon = activeTabObj?.icon;

    // Validador por campo (devuelve mensaje de error o "" si ok)
    const validateFieldMessage = (name, value) => {
        if (name === "nombre" || name === "apellido") {
            if (!value || value.trim() === "") return "Este campo es obligatorio.";
            if (!/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/.test(value)) return "Solo se permiten letras y espacios.";
            return "";
        }

        if (name === "email") {
            if (!value || value.trim() === "") return "El email es obligatorio.";
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(value)) return "Ingresa un email válido.";
            return "";
        }

        if (name === "dni") {
            if (!value || value.trim() === "") return "El DNI es obligatorio.";
            if (!/^\d+$/.test(value)) return "El DNI debe contener solo números.";
            if (value.length < 7 || value.length > 8) return "El DNI debe tener 7 u 8 dígitos.";
            return "";
        }

        if (name === "telefono") {
            // teléfono opcional en tu componente; validar solo si hay algo
            if (!value) return "";
            if (!/^\d+$/.test(value)) return "El teléfono debe contener solo números.";
            if (value.length < 8 || value.length > 15) return "Número inválido. Mínimo 8 y máximo 15 dígitos.";
            return "";
        }

        // para otros campos opcionales
        return "";
    };

    // useEffect que valida el tab completo (habilita/deshabilita Siguiente/Enviar)
    useEffect(() => {
        const tab = tabs.find((t) => t.id === activeTab);

        // Campos obligatorios (excluyendo 'observaciones' y 'condicionFisica' que son opcionales)
        const requiredFields = tab.fields.filter(field => field !== "observaciones" && field !== "condicionFisica");

        // 1. Validar campos obligatorios básicos y errores por campo
        let localErrors = { ...errors };
        let allFilledAndValid = requiredFields.every((field) => {
            const value = formData[field];

            // Check para el objeto 'plan'
            if (field === 'plan') {
                if (!value || Object.keys(value).length === 0) {
                    localErrors.plan = "Seleccioná un plan.";
                    return false;
                } else {
                    delete localErrors.plan;
                    return true;
                }
            }

            // Validación específica por campo
            const msg = validateFieldMessage(field, value);
            if (msg) {
                localErrors[field] = msg;
                return false;
            } else {
                delete localErrors[field];
                return true;
            }
        });

        setErrors(localErrors);

        // 2. Validar restricción de edad para la pestaña "personal"
        let isAgeValid = true;
        if (activeTab === "personal" && formData.fechaNacimiento) {
            const age = calculateAge(formData.fechaNacimiento);

            if (age !== null && age < 18) {
                isAgeValid = false;
                setIsMinor(true); // Bloquear y mostrar mensaje
            } else {
                setIsMinor(false);
            }
        } else {
            // Limpiar el estado de menor de edad al salir de la pestaña "personal"
            if (isMinor) setIsMinor(false);
        }

        // El tab es válido si todos los campos requeridos son llenados Y no es menor de edad
        setIsTabValid(allFilledAndValid && isAgeValid);

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [activeTab, formData]); // errors se maneja dentro

    // handleChange: setea valor y valida campo en vivo
    const handleChange = (e) => {
        const { name, value } = e.target;

        // reglas para bloqueo de entrada (prevención)
        if ((name === "nombre" || name === "apellido")) {
            // permitir borrar también
            if (value && !/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]*$/.test(value)) return;
        }

        if (name === "dni") {
            // aceptar solo dígitos, prevenir pegados con letras
            if (value && !/^\d*$/.test(value)) return;
            // limitar a 8
            if (value.length > 8) return;
        }

        if (name === "telefono") {
            if (value && !/^\d*$/.test(value)) return;
            // limitar a 15 (permite celulares internacionales si se desea), UI tiene max 10 si lo prefieres
            if (value.length > 15) return;
        }

        // Plan como objeto parseado
        if (name === "plan") {
            try {
                const parsed = JSON.parse(value);
                setFormData(prev => ({ ...prev, plan: parsed }));
            } catch (err) {
                // no actualizar si llega mal
            }
            return;
        }

        // Actualizo formData
        setFormData(prev => ({ ...prev, [name]: value }));

        // Validación en vivo: actualizar errors para ese campo
        const msg = validateFieldMessage(name, value);
        setErrors(prev => {
            const copy = { ...prev };
            if (msg) copy[name] = msg;
            else delete copy[name];
            return copy;
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Se valida isTabValid, que incluye la validación de edad
        if (!isTabValid && activeTab === 'enviar') {
             toast.error("Por favor, revisa los pasos anteriores y completa los campos obligatorios.", { position: "top-center", autoClose: 3000 });
             return;
        }

        cargarFormulario(formData); // <--- Llamada a tu lógica de negocio
        toast.success(`${formData.nombre}, debes realizar el pago para registrarte 💪`, { position: "top-center", autoClose: 2000 });

        navigate(`/pago`); // <--- Navegación limpia

        onClose();
    };

    const nextTab = () => {
        const currentIndex = tabs.findIndex((t) => t.id === activeTab);
        if (isTabValid) {
            if (currentIndex < tabs.length - 1) setActiveTab(tabs[currentIndex + 1].id);
        } else {
             toast.warn("Completa los campos obligatorios antes de continuar.", { position: "top-center", autoClose: 2000 });
        }
    };

    const prevTab = () => {
        const currentIndex = tabs.findIndex((t) => t.id === activeTab);
        if (currentIndex > 0) {
            setActiveTab(tabs[currentIndex - 1].id);
        }
    };

    return (
        <>
           
            {/* Contenedor principal con estilo moderno: esquinas redondeadas, sombra pronunciada y borde suave */}
            <div className="max-w-lg mx-auto bg-white rounded-2xl shadow-xl border border-gray-100 p-8 transform transition duration-500 hover:shadow-2xl">
                <h2 className="text-4xl font-extrabold text-[var(--c-primary)] mb-4 text-center tracking-tight">
                    Inscripción: {nomActividad}
                </h2>
                
                {/* Indicador de Progreso */}
                <div className="mb-8">
                    <p className="text-sm font-semibold text-gray-600 mb-2 text-center flex justify-center items-center space-x-2">
                        {currentIcon} {/* Ícono del paso actual */}
                        <span>Paso {currentStep} de {totalSteps}: {currentLabel}</span>
                    </p>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div 
                            className="h-2.5 rounded-full transition-all duration-500 ease-in-out bg-[var(--c-primary)]" 
                            style={{ width: `${progress}%` }}
                        ></div>
                    </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Contenido del tab: Personal */}
                    {activeTab === "personal" && (
                        <>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-gray-700 font-semibold mb-1">Nombre *</label>
                                    <input 
                                        type="text" 
                                        name="nombre" 
                                        value={formData.nombre} 
                                        onChange={handleChange} 
                                        required 
                                        className={inputClassFor("nombre")} 
                                        autoComplete="off"
                                    />
                                    {errors.nombre && (
                                        <div className="bg-red-50 border border-red-200 text-red-700 px-3 py-2 rounded-lg mt-2 text-sm shadow-sm">
                                            {errors.nombre}
                                        </div>
                                    )}
                                </div>
                                <div>
                                    <label className="block text-gray-700 font-semibold mb-1">Apellido *</label>
                                    <input 
                                        type="text" 
                                        name="apellido" 
                                        value={formData.apellido} 
                                        onChange={handleChange} 
                                        required 
                                        className={inputClassFor("apellido")} 
                                        autoComplete="off"
                                    />
                                    {errors.apellido && (
                                        <div className="bg-red-50 border border-red-200 text-red-700 px-3 py-2 rounded-lg mt-2 text-sm shadow-sm">
                                            {errors.apellido}
                                        </div>
                                    )}
                                </div>
                                <div>
                                    <label className="block text-gray-700 font-semibold mb-1">DNI *</label>
                                    <input 
                                        type="text" 
                                        name="dni" 
                                        value={formData.dni} 
                                        onChange={handleChange} 
                                        required 
                                        className={inputClassFor("dni")} 
                                        maxLength={8}
                                        inputMode="numeric"
                                        autoComplete="off"
                                    />
                                    {errors.dni && (
                                        <div className="bg-red-50 border border-red-200 text-red-700 px-3 py-2 rounded-lg mt-2 text-sm shadow-sm">
                                            {errors.dni}
                                        </div>
                                    )}
                                </div>
                                <div>
                                    <label className="block text-gray-700 font-semibold mb-1">Fecha de Nacimiento *</label>
                                    <input 
                                        type="date" 
                                        name="fechaNacimiento" 
                                        value={formData.fechaNacimiento} 
                                        onChange={handleChange} 
                                        required 
                                        className={inputClassFor("fechaNacimiento")} 
                                    />
                                </div>
                            </div>
                            
                            {/* Mensaje de error para menores de edad */}
                            {isMinor && (
                                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg relative mt-4 shadow-md">
                                    <p className="font-bold">⚠️ Inscripción Denegada</p>
                                    <p className="text-sm mt-1">Las inscripciones web son solo para mayores de 18 años. Por favor, contacta a la administración para inscripciones de menores.</p>
                                </div>
                            )}
                        </>
                    )}

                    {/* Contenido del tab: Contacto */}
                    {activeTab === "contacto" && (
                        <div className="space-y-4">
                            <div>
                                <label className="block text-gray-700 font-semibold mb-1">Email *</label>
                                <input 
                                    type="email" 
                                    name="email" 
                                    value={formData.email} 
                                    onChange={handleChange} 
                                    required 
                                    className={inputClassFor("email")} 
                                    autoComplete="off"
                                />
                                {errors.email && (
                                    <div className="bg-red-50 border border-red-200 text-red-700 px-3 py-2 rounded-lg mt-2 text-sm shadow-sm">
                                        {errors.email}
                                    </div>
                                )}
                            </div>
                            <div>
                                <label className="block text-gray-700 font-semibold mb-1">Teléfono</label>
                                <input 
                                    type="tel" 
                                    name="telefono" 
                                    value={formData.telefono} 
                                    onChange={handleChange} 
                                    className={inputClassFor("telefono")} 
                                    maxLength={15}
                                    inputMode="numeric"
                                    autoComplete="off"
                                />
                                {errors.telefono && (
                                    <div className="bg-red-50 border border-red-200 text-red-700 px-3 py-2 rounded-lg mt-2 text-sm shadow-sm">
                                        {errors.telefono}
                                    </div>
                                )}
                            </div>
                        </div>
                    )}

                    {/* Contenido del tab: Plan */}
                    {activeTab === "plan" && (
                        <div>
                            <label className="block text-gray-700 font-semibold mb-1">Elegí el plan de {nomActividad} *</label>
                            {/* Estilo del select con appearance-none para customización */}
                            <select name="plan" value={JSON.stringify(formData.plan)} onChange={handleChange} className={inputClassFor("plan") + " appearance-none cursor-pointer"} required>
                                {planes.map((p) => (
                                    <option key={p.nombre} value={JSON.stringify(p)} className="p-3">{p.nombre} — {p.precio}</option>
                                ))}
                            </select>
                            {errors.plan && (
                                <div className="bg-red-50 border border-red-200 text-red-700 px-3 py-2 rounded-lg mt-2 text-sm shadow-sm">
                                    {errors.plan}
                                </div>
                            )}
                        </div>
                    )}

                    {/* Contenido del tab: Condición Física */}
                    {activeTab === "condicion" && (
                        <div>
                            <label className="block text-gray-700 font-semibold mb-1">Condición Física (Opcional)</label>
                            <p className="text-sm text-gray-500 mb-2">Por favor, indícanos si tienes alguna condición médica preexistente, discapacidad, lesión o alergia relevante para tu actividad.</p>
                            <textarea 
                                name="condicionFisica" 
                                value={formData.condicionFisica} 
                                onChange={handleChange} 
                                rows="4" 
                                className={inputClassFor("condicionFisica") + " resize-none"} 
                                placeholder="Ej: 'Lesión crónica en rodilla izquierda', 'Asma', 'Diabetes', etc."
                            />
                        </div>
                    )}

                    {/* Contenido del tab: Observaciones */}
                    {activeTab === "observaciones" && (
                        <div>
                            <label className="block text-gray-700 font-semibold mb-1">Notas (Opcional)</label>
                            <textarea 
                                name="observaciones" 
                                value={formData.observaciones} 
                                onChange={handleChange} 
                                rows="4" 
                                className={inputClassFor("observaciones") + " resize-none"} 
                                placeholder="Escribe aquí si deseas contarnos algo sobre tu inscripción o salud..."
                            />
                        </div>
                    )}

                    {/* Contenido del tab: Enviar/Confirmar */}
                    {activeTab === "enviar" && (
                        <div className="text-center p-6 bg-[var(--c-secondary)] border border-[var(--c-primary)]/30 rounded-xl shadow-inner">
                            <h3 className="text-2xl font-bold mb-2 text-[var(--c-primary)]">¡Todo Listo! 🚀</h3>
                            <p className="text-gray-700">Revisa la información y haz clic en "Continuar" para ser redirigido a la página de pago seguro. Una vez completado, tu cupo estará reservado.</p>
                            <div className="mt-4 p-3 bg-white rounded-lg border border-gray-200 shadow-sm">
                                <p className="text-sm text-gray-600 font-medium">Actividad: <span className="text-[var(--c-primary)] font-bold">{formData.actividad}</span></p>
                                <p className="text-sm text-gray-600 font-medium">Plan Seleccionado: <span className="text-[var(--c-primary)] font-bold">{formData.plan.nombre}</span> | Precio: <span className="text-[var(--c-accent)] font-bold">{formData.plan.precio}</span></p>
                            </div>
                        </div>
                    )}

                    {/* Botones de Navegación y Envío */}
                    <div className="flex justify-between items-center pt-6 border-t border-gray-100">
                        {/* Grupo Izquierdo: Cancelar o Anterior */}
                        <div className="flex space-x-4">
                            {activeTab === "personal" ? (
                                <button type="button" onClick={onClose} className="bg-[var(--c-slate)] text-white px-6 py-3 rounded-full shadow-md hover:bg-[var(--c-graydark)] transition duration-300 ease-in-out font-semibold">
                                    Cancelar
                                </button>
                            ) : (
                                <button type="button" onClick={prevTab} className="bg-gray-200 text-gray-700 px-6 py-3 rounded-full shadow-md hover:bg-gray-300 transition duration-300 ease-in-out font-semibold">
                                    Anterior
                                </button>
                            )}
                        </div>
                        
                        {/* Grupo Derecho: Siguiente / Continuar */}
                        <div>
                            {activeTab === "enviar" ? (
                                <button type="submit" className={`px-8 py-3 rounded-full transition duration-300 ease-in-out font-bold shadow-lg 
                                    ${isTabValid && !isMinor 
                                        ? "bg-[var(--c-primary)] text-white hover:bg-[var(--c-maroon)] hover:shadow-xl transform hover:scale-[1.02]" 
                                        : "bg-gray-300 text-gray-500 cursor-not-allowed shadow-inner"
                                    }`} disabled={!isTabValid || isMinor}>
                                    Continuar
                                </button>
                            ) : (
                                <button type="button" onClick={nextTab} className={`px-8 py-3 rounded-full transition duration-300 ease-in-out font-bold shadow-lg 
                                    ${isTabValid && !isMinor 
                                        ? "bg-[var(--c-primary)] text-white hover:bg-[var(--c-maroon)] hover:shadow-xl transform hover:scale-[1.02]" 
                                        : "bg-gray-300 text-gray-500 cursor-not-allowed shadow-inner"
                                    }`} disabled={!isTabValid || isMinor}>
                                    Siguiente
                                </button>
                            )}
                        </div>
                    </div>
                </form>
            </div>
        </>
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
