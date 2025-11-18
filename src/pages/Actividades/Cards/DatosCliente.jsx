import PropTypes from "prop-types";
import { User, Calendar, IdCard, Mail, Phone, HeartPulse, FileText } from "lucide-react";

const DatosCliente = ({ cliente }) => {
  const { nombre, apellido, dni, fechaNacimiento, telefono, email, actividad, plan, condicionFisica, observaciones } = cliente;

  // Función auxiliar para formatear la fecha a DD/MM/YYYY
  const formatDate = (dateString) => {
    if (!dateString) return "?";
    try {
      const [year, month, day] = dateString.split('-');
      return `${day}/${month}/${year}`;
    } catch (error) {
      return dateString;
    }
  };

  return (
    // Estilos basados en la paleta definida en Pago.jsx (var(--c-primary))
    <div className="space-y-4 mb-6 p-6 bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-200">
        <h3 className="text-xl font-bold text-[var(--c-primary)] border-b pb-2 mb-4">
            Membresía para {actividad} (Plan {plan.nombre})
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Columna de Datos Personales y Contacto */}
            <div className="space-y-3 border-r md:pr-4">
                <p className="text-lg font-semibold text-gray-800 border-b border-gray-100 pb-1 flex items-center gap-2">
                    <User className="w-5 h-5 text-gray-500" />
                    Datos Personales
                </p>
                
                <p className="flex items-center gap-3 text-gray-700">
                    <span className="font-medium">{nombre} {apellido}</span>
                </p>

                <p className="flex items-center gap-3 text-gray-700">
                    <IdCard className="w-5 h-5 text-[var(--c-primary)]" />
                    <span>DNI: <strong>{dni}</strong></span>
                </p>

                <p className="flex items-center gap-3 text-gray-700">
                    <Calendar className="w-5 h-5 text-[var(--c-primary)]" />
                    <span>Nacimiento: <strong>{formatDate(fechaNacimiento)}</strong></span>
                </p>

                <p className="flex items-center gap-3 text-gray-700">
                    <Phone className="w-5 h-5 text-[var(--c-primary)]" />
                    <span>Teléfono: <strong>{telefono || "No especificado"}</strong></span>
                </p>

                <p className="flex items-center gap-3 text-gray-700">
                    <Mail className="w-5 h-5 text-[var(--c-primary)]" />
                    <span>Email: <strong>{email}</strong></span>
                </p>
            </div>
            
            {/* Columna de Salud y Notas */}
            <div className="space-y-6 md:pl-4">
                
                {/* Condición Física */}
                <div>
                    <p className="text-lg font-semibold text-gray-800 border-b border-gray-100 pb-1 flex items-center gap-2">
                        <HeartPulse className="w-5 h-5 text-gray-500" />
                        Condición Física
                    </p>
                    <div className="text-gray-700 bg-gray-50 p-3 rounded-lg border">
                        <span className="text-sm italic whitespace-pre-wrap">
                            {condicionFisica || "No se especificaron condiciones físicas o de salud relevantes."}
                        </span>
                    </div>
                </div>

                {/* Notas/Observaciones */}
                <div>
                    <p className="text-lg font-semibold text-gray-800 border-b border-gray-100 pb-1 flex items-center gap-2">
                         <FileText className="w-5 h-5 text-gray-500" />
                         Notas del Cliente
                    </p>
                    <div className="text-gray-700 bg-gray-50 p-3 rounded-lg border border-dashed border-gray-300">
                        <span className="text-sm italic whitespace-pre-wrap">
                            {observaciones || "El cliente no dejó ninguna nota u observación adicional."}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};

DatosCliente.propTypes = {
   cliente: PropTypes.object.isRequired,
};

export default DatosCliente;