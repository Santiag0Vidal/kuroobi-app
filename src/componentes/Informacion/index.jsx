import { FaClock, FaDumbbell, FaShower, FaUsers, FaChild, FaCertificate } from "react-icons/fa";
import * as C from '../../componentes/index';

export default function InfoGimnasio() {
  return (
    <section >
      <C.TituloSeccion texto="INFORMACION"/>
      <div className="grid md:grid-cols-2 gap-8 max-w-4xl w-full">
        {/* Horario */}
        <div className="flex flex-col items-center bg-[var(--c-primary)] p-6 rounded-xl shadow-lg">
          <FaClock size={40} className="mb-3 text-yellow-300" />
          <h3 className="text-2xl font-semibold mb-2">Horario</h3>
          <p>Lunes a Viernes de 7 a 22 hs</p>
        </div>

        {/* Planes */}
        <div className="flex flex-col items-center bg-[var(--c-primary)] p-6 rounded-xl shadow-lg">
          <FaDumbbell size={40} className="mb-3 text-yellow-300" />
          <h3 className="text-2xl font-semibold mb-2">Planes</h3>
          <p>2 veces por semana, 3 veces por semana o todos los días</p>
        </div>

        {/* Profesores */}
        <div className="flex flex-col items-center bg-[var(--c-primary)] p-6 rounded-xl shadow-lg">
          <FaUsers size={40} className="mb-3 text-yellow-300" />
          <h3 className="text-2xl font-semibold mb-2">Profesores</h3>
          <p>En todos los horarios para guiarte y corregirte técnicamente 🏋️‍♀️🤝</p>
        </div>

        {/* Vestuarios y lockers */}
        <div className="flex flex-col items-center bg-[var(--c-primary)] p-6 rounded-xl shadow-lg">
          <FaShower size={40} className="mb-3 text-yellow-300" />
          <h3 className="text-2xl font-semibold mb-2">Servicios</h3>
          <p>Duchas, vestuarios completos y lockers 🔐 para guardar tus cosas</p>
        </div>

        {/* Clases grupales */}
        <div className="flex flex-col items-center bg-[var(--c-primary)] p-6 rounded-xl shadow-lg">
          <FaCertificate size={40} className="mb-3 text-yellow-300" />
          <h3 className="text-2xl font-semibold mb-2">Clases Grupales</h3>
          <p>G.A.P, Indoor, Funcional, Yoga, Stretching y Karate</p>
        </div>

        {/* Descuentos */}
        <div className="flex flex-col items-center bg-[var(--c-primary)] p-6 rounded-xl shadow-lg">
          <FaChild size={40} className="mb-3 text-yellow-300" />
          <h3 className="text-2xl font-semibold mb-2">Descuentos</h3>
          <p>Plan familiar desde 3 personas 🧑‍🧑‍🧒 y abonos por 6 meses</p>
        </div>
      </div>
    </section>
  );
}
