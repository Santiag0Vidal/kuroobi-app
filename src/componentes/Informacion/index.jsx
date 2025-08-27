import { FaDumbbell, FaRunning, FaHeartbeat, FaHandsHelping, FaMapMarkerAlt } from 'react-icons/fa';
import { GiMuscleUp} from 'react-icons/gi';
import { MdHealthAndSafety } from 'react-icons/md';

export default function InfoKinesiologia() {
  return (
    <div className="w-full md:w-1/2 flex flex-col justify-center gap-6 text-center md:text-left px-4">
      <h3 className="text-2xl font-bold text-[#343432]">Cuidados y tratamientos en Kinesiología</h3>
      <p className="text-gray-700">
        En <strong>Kinesiología Martínez Walter</strong> entendemos que la recuperación y el rendimiento deportivo requieren más que una simple consulta. 
        Utilizamos equipamiento especializado de última generación: polea cónica, accesorios de pilates y magneto terapéutico, optimizando tu rehabilitación y previniendo lesiones.
      </p>

      {/* Equipo */}
      <div className="flex flex-col gap-4">
        <div className="flex items-start gap-3">
          <FaDumbbell className="text-[#f9a826] w-6 h-6 mt-1" />
          <p className="text-gray-700">
            <strong>Polea cónica:</strong> trabaja la fuerza excéntrica, fortaleciendo músculos sin sobrecargar las articulaciones.
          </p>
        </div>
        <div className="flex items-start gap-3">
        
          <p className="text-gray-700">
            <strong>Accesorios de Pilates:</strong> mejoran flexibilidad, estabilidad y postura, logrando un cuerpo más equilibrado.
          </p>
        </div>
        <div className="flex items-start gap-3">
          <MdHealthAndSafety className="text-[#f9a826] w-6 h-6 mt-1" />
          <p className="text-gray-700">
            <strong>Magneto terapéutico:</strong> acelera la recuperación muscular y mejora la circulación.
          </p>
        </div>
      </div>

      {/* Beneficios */}
      <div className="mt-4">
        <h4 className="text-xl font-semibold text-[#343432] mb-2">Beneficios de la Kinesiología Deportiva</h4>
        <ul className="flex flex-col gap-2 text-gray-700">
          <li className="flex items-center gap-2"><FaRunning className="text-[#f9a826] w-5 h-5" /> Prevención y recuperación de lesiones</li>
          <li className="flex items-center gap-2"><GiMuscleUp className="text-[#f9a826] w-5 h-5" /> Mejora del rendimiento físico</li>
          <li className="flex items-center gap-2"><FaHeartbeat className="text-[#f9a826] w-5 h-5" /> Fortalecimiento muscular específico para deportistas</li>
        </ul>
      </div>

      {/* Lesiones tratadas */}
      <div className="mt-4">
        <h4 className="text-xl font-semibold text-[#343432] mb-2">Lesiones tratadas</h4>
        <ul className="flex flex-col gap-2 text-gray-700">
          <li className="flex items-center gap-2"><FaHandsHelping className="text-[#f9a826] w-5 h-5" /> Desgarros musculares</li>
          <li className="flex items-center gap-2"><FaHandsHelping className="text-[#f9a826] w-5 h-5" /> Esguinces y distensiones</li>
          <li className="flex items-center gap-2"><FaHandsHelping className="text-[#f9a826] w-5 h-5" /> Tendinitis y fascitis plantar</li>
          <li className="flex items-center gap-2"><FaHandsHelping className="text-[#f9a826] w-5 h-5" /> Lesiones de rodilla y hombro</li>
          <li className="flex items-center gap-2"><FaHandsHelping className="text-[#f9a826] w-5 h-5" /> Dolor lumbar y cervical</li>
        </ul>
      </div>

      {/* Dirección */}
      <div className="mt-4 flex items-center gap-2 text-gray-700">
        <FaMapMarkerAlt className="text-[#f9a826] w-5 h-5" />
        <span>Elordi 548, Neuquén Capital</span>
      </div>

      <p className="mt-4 text-gray-700 font-semibold">
        ¡Transforma tu bienestar con Kinesiología Deportiva y Pilates! 🧘‍♂️
      </p>
    </div>
  );
}
