import React from "react";
import { Link } from "react-router-dom"; // Asumiendo que usas react-router
import { FaPhoneAlt, FaMapMarkerAlt, FaClock, FaGithub, FaInstagram, FaFacebookF } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    // Fondo oscuro que combina con el Lab + Borde superior sutil
    <footer className="bg-[#111] text-gray-300 border-t border-white/10 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
        
        {/* COLUMNA 1: MARCA Y REDES */}
        <div className="space-y-4">
          <h2 className="text-3xl font-bold text-white tracking-tighter">
            KURO<span className="text-red-600">OBI</span>
          </h2>
          <p className="text-sm text-gray-400 max-w-xs">
            Centro integral de entrenamiento y rehabilitación. 
            Fusionamos la disciplina marcial con la ciencia del movimiento.
          </p>
          <div className="flex gap-4 pt-2">
            {/* Redes Sociales con efecto hover */}
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-yellow-300 hover:text-black transition-all duration-300">
              <FaInstagram size={18} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all duration-300">
              <FaFacebookF size={18} />
            </a>
          </div>
        </div>

        {/* COLUMNA 2: ENLACES RÁPIDOS */}
        <div>
          <h3 className="text-white font-bold text-lg mb-4 border-l-4 border-yellow-300 pl-3">
            Explorar
          </h3>
          <ul className="space-y-3 text-sm">
            <li>
              <a href="#inicio" className="hover:text-yellow-300 transition-colors flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-yellow-300 rounded-full"></span> Inicio
              </a>
            </li>
            <li>
              <a href="#actividades" className="hover:text-yellow-300 transition-colors flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-gray-600 rounded-full hover:bg-yellow-300"></span> Actividades
              </a>
            </li>
            <li>
              <Link to="/kuroobi-lab" className="hover:text-yellow-300 transition-colors flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-red-600 rounded-full"></span> Kuroobi Lab
              </Link>
            </li>
            <li>
              <a href="#contacto" className="hover:text-yellow-300 transition-colors flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-gray-600 rounded-full hover:bg-yellow-300"></span> Contacto
              </a>
            </li>
          </ul>
        </div>

        {/* COLUMNA 3: CONTACTO Y HORARIOS */}
        <div>
           <h3 className="text-white font-bold text-lg mb-4 border-l-4 border-red-600 pl-3">
            Visítanos
          </h3>
          <div className="space-y-4 text-sm">
            
            {/* Dirección clickeable a Google Maps */}
            <a 
              href="https://maps.google.com/?q=Cacique+Catriel+434" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-start gap-3 hover:text-white group"
            >
              <FaMapMarkerAlt className="mt-1 text-red-500 group-hover:scale-110 transition-transform" />
              <span>Cacique Catriel 434<br/><span className="text-xs text-gray-500">Neuquén, Argentina</span></span>
            </a>

            {/* Teléfono clickeable */}
            <a 
              href="tel:+542996055279" 
              className="flex items-center gap-3 hover:text-white group"
            >
              <FaPhoneAlt className="text-yellow-300 group-hover:rotate-12 transition-transform" />
              <span>+54 299 6055279</span>
            </a>

            {/* Horarios */}
            <div className="flex items-start gap-3 pt-2 border-t border-white/5 mt-4">
              <FaClock className="mt-1 text-gray-500" />
              <div>
                <p className="text-white font-medium">Horarios de Atención</p>
                <p className="text-xs text-gray-400">Lun - Vie: 07:00 - 22:00</p>
                <p className="text-xs text-gray-400">Sab: 09:00 - 13:00</p>
              </div>
            </div>

          </div>
        </div>

      </div>

      {/* --- BARRA INFERIOR (COPYRIGHT & DEVS) --- */}
      <div className="border-t border-white/10 pt-8 mt-8">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
          
          <p>© {currentYear} Kuroobi Center. Todos los derechos reservados.</p>

          <div className="flex items-center gap-6">
            <span className="uppercase tracking-widest text-[10px] opacity-50">Desarrollado por</span>
            
            <div className="flex gap-4">
              <a
                href="https://github.com/abigailCo"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-yellow-300 transition-colors"
              >
                <FaGithub size={14} /> Abigail Corrales
              </a>

              <span className="text-gray-700">|</span>

              <a
                href="https://github.com/santiag0vidal"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-yellow-300 transition-colors"
              >
                <FaGithub size={14} /> Santiago Vidal
              </a>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
}