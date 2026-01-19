import { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom"; // IMPORTANTE: Agregar esto
import navLinks from "./navLinks.js";
import * as C from "../index";
import ConectarButton from "../../utils/conexion_back.jsx";
import { Menu, X } from "lucide-react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  
  // Hook para saber en qué ruta estamos (ej: "/" o "/kuroobi-lab")
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Función inteligente para determinar a dónde lleva cada click
  const getLinkHref = (link) => {
    // 1. Si el link es del tipo "página" (Kuroobi Lab), usa su ruta directa
    if (link.type === 'page') {
      return link.path;
    }
    // 2. Si es un ancla (#) y NO estamos en la Home, forzamos ir a la Home primero (ej: /#horarios)
    if (!isHomePage) {
      return `/#${link.id}`;
    }
    // 3. Si estamos en Home, comportamiento normal de scroll
    return `#${link.id}`;
  };

  const mobileMenuStyles = isOpen 
    ? "transform translate-y-0 opacity-100 transition-all duration-500 ease-out" 
    : "transform -translate-y-full opacity-0 pointer-events-none";

  return (
    <nav className="bg-[var(--c-ink)] text-white fixed top-0 w-full shadow-xl z-50">
      <div className="container mx-auto flex items-center justify-between px-4 py-4">

        {/* LOGO: Ahora envuelto en Link para que siempre lleve al Inicio al hacer click */}
        <Link to="/" className={`block transition-all duration-500 ${isMounted ? 'scale-100 opacity-100' : 'scale-75 opacity-0'}`}>
           <C.Logo className="w-20 h-20" /> 
        </Link>

        {/* Botón hamburguesa */}
        <button
          className="sm:hidden flex items-center justify-center p-2 text-[var(--c-primary)] hover:text-[#f9a826] transition duration-300 rounded-lg"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        {/* Links Escritorio */}
        <ul className="hidden sm:flex flex-wrap items-center justify-center gap-4 text-base font-medium">
          {navLinks.map((link, index) => (
            <li 
              key={link.id} 
              className={`group relative transition-all duration-500 ease-out 
                           ${isMounted ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}
              style={{ transitionDelay: `${index * 80}ms` }} 
            >
              {/* Usamos lógica condicional: Link de Router para páginas, <a> normal para anclas */}
              {link.type === 'page' ? (
                 <Link
                   to={link.path}
                   className="block py-2 px-2 text-[var(--c-primary)] transition-all duration-300 font-semibold hover:text-[#f9a826] hover:scale-105"
                 >
                   {link.label}
                 </Link>
              ) : (
                 <a
                   href={getLinkHref(link)}
                   className="block py-2 px-2 text-[var(--c-primary)] transition-all duration-300 font-semibold hover:text-[#f9a826] hover:scale-105"
                 >
                   {link.label}
                 </a>
              )}
              
              <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-[#f9a826] transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
            </li>
          ))}
          
          <div 
             className={`transition-all duration-500 ease-out ${isMounted ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}
             style={{ transitionDelay: `${navLinks.length * 80}ms` }}
          >
            <ConectarButton/>
          </div>
        </ul>
      </div>

      {/* Menú Móvil */}
      <ul className={`sm:hidden flex flex-col items-center gap-3 bg-[var(--c-ink)] py-4 absolute w-full ${mobileMenuStyles}`}>
        {navLinks.map((link) => (
          <li key={link.id} className="w-full text-center">
             {link.type === 'page' ? (
                <Link
                  to={link.path}
                  className="block py-2 px-6 text-[var(--c-primary)] text-lg font-medium transition-all duration-300 hover:text-[#f9a826] hover:scale-105"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
             ) : (
                <a
                  href={getLinkHref(link)}
                  className="block py-2 px-6 text-[var(--c-primary)] text-lg font-medium transition-all duration-300 hover:text-[#f9a826] hover:scale-105"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </a>
             )}
          </li>
        ))}
        <div className="pt-4 pb-2" onClick={() => setIsOpen(false)}>
            <ConectarButton/>
        </div>
      </ul>
    </nav>
  );
}

export default Navbar;