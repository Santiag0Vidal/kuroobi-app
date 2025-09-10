import { FaPhoneAlt, FaMapMarkerAlt, FaClock, FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#fbf4f3] text-gray-700 py-8 mt-10 border-t">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Datos Kine */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Koorobi</h3>
          <p className="flex items-center text-sm mb-1">
            <FaPhoneAlt className="mr-2 text-gray-500" /> +54 299 6055279
          </p>
          <p className="flex items-center text-sm">
            <FaMapMarkerAlt className="mr-2 text-gray-500" /> Cacique Catriel
            434
          </p>
        </div>

        {/* Horarios */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Horarios</h3>
          <p className="flex items-center text-sm mb-1">
            <FaClock className="mr-2 text-gray-500" /> Lunes a Viernes: 07:00 -
            22:00
          </p>
        </div>

        {/* Desarrolladores */}
      </div>

      <div className="text-center text-xs text-gray-500 mt-8 border-t pt-4 space-y-1">
        <p>© {new Date().getFullYear()} Todos los derechos reservados.</p>

        <p className="font-semibold">Desarrollado por:</p>

        <a
          href="https://github.com/abigailCo"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center hover:text-gray-700"
        >
          <FaGithub className="mr-1" /> Abigail Corrales
        </a>

        <a
          href="https://github.com/santiag0vidal"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center hover:text-gray-700"
        >
          <FaGithub className="mr-1" /> Santiago Vidal
        </a>
      </div>
    </footer>
  );
}
