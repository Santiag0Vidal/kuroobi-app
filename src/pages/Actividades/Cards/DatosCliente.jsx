import PropTypes from "prop-types";
import { User, Calendar, IdCard, Mail, Phone } from "lucide-react";

const DatosCliente = ({ cliente }) => {
  const { nombre, apellido, dni, fechaNacimiento, telefono, email, actividad, plan} = cliente;
    return (
        <>


            {/* Modal con formulario */}

          <div className="space-y-4 mb-6 p-6 bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-200">
                    <h3 className="text-xl font-bold text-[var(--c-primary)] border-b pb-2 mb-4">Membresia para {actividad} plan {plan.nombre}</h3>

                    <div className="flex flex-col gap-3">
                        <p className="flex items-center gap-3 text-gray-700 hover:text-[var(--c-primary)] transition-colors">
                            <User className="w-5 h-5 text-[var(--c-primary)]" />
                            <span className="font-medium">{nombre} {apellido}</span>
                        </p>

                        <p className="flex items-center gap-3 text-gray-700 hover:text-[var(--c-primary)] transition-colors">
                            <IdCard className="w-5 h-5 text-[var(--c-primary)]" />
                            <span>DNI: <strong>{dni}</strong></span>
                        </p>

                        <p className="flex items-center gap-3 text-gray-700 hover:text-[var(--c-primary)] transition-colors">
                            <Calendar className="w-5 h-5 text-[var(--c-primary)]" />
                            <span>Nac.: <strong>{fechaNacimiento}</strong></span>
                        </p>

                        <p className="flex items-center gap-3 text-gray-700 hover:text-[var(--c-primary)] transition-colors">
                            <Phone className="w-5 h-5 text-[var(--c-primary)]" />
                            <span>Tel.: <strong>{telefono || "?"}</strong></span>
                        </p>

                        <p className="flex items-center gap-3 text-gray-700 hover:text-[var(--c-primary)] transition-colors">
                            <Mail className="w-5 h-5 text-[var(--c-primary)]" />
                            <span>Email: <strong>{email}</strong></span>
                        </p>
                    </div>
                </div>

        </>
    );
};

DatosCliente.propTypes = {
   cliente: PropTypes.object.isRequired,
};

export default DatosCliente;
