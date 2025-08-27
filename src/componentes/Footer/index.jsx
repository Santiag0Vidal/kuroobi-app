import { FaPhoneAlt, FaMapMarkerAlt, FaClock, FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#fbf4f3] text-gray-700 py-8 mt-10 border-t">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Datos Kine */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Kinesiología WM</h3>
          <p className="flex items-center text-sm mb-1">
            <FaPhoneAlt className="mr-2 text-gray-500" /> +54 299 453-9213
          </p>
          <p className="flex items-center text-sm">
            <FaMapMarkerAlt className="mr-2 text-gray-500" /> Elordi 548
          </p>
        </div>

        {/* Horarios */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Horarios</h3>
          <p className="flex items-center text-sm mb-1">
            <FaClock className="mr-2 text-gray-500" /> Lunes a Viernes: 08:00 - 20:00
          </p>
          <p className="flex items-center text-sm">
            <FaClock className="mr-2 text-gray-500" /> Sábados: 09:00 - 13:00
          </p>
        </div>

        {/* Desarrolladores */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Desarrollado por</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a
                href="https://github.com/abigailCo"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center hover:text-gray-500"
              >
                <FaGithub className="mr-2" /> Abigail Corrales
              </a>
            </li>
            <li>
              <a
                href="https://github.com/santiag0vidal"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center hover:text-gray-500"
              >
                <FaGithub className="mr-2" /> Santiago Vidal
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Línea inferior */}
      <div className="text-center text-xs text-gray-500 mt-8 border-t pt-4">
        © {new Date().getFullYear()} Todos los derechos reservados.
      </div>
    </footer>
  );
}
