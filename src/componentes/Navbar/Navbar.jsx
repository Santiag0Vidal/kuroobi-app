import { useState, useEffect } from "react"; // Importar useEffect
import navLinks from "./navLinks.js";
import * as C from "../index";
import ConectarButton from "../../utils/conexion_back.jsx";
import { Menu, X } from "lucide-react"; // Importar iconos de Lucide-React para una mejor estética

function Navbar() {
  const [isOpen, setIsOpen] = useState(false); // controla menú móvil
  const [isMounted, setIsMounted] = useState(false); // Nuevo estado para controlar la animación de entrada

  // Ejecuta la animación de entrada después de que el componente se monta
  useEffect(() => {
    // Esto asegura que la clase de "montado" se aplica después del renderizado inicial,
    // activando las transiciones CSS.
    setIsMounted(true); 
  }, []);

  // Estilos de animación para el menú móvil (Slide Down y Fade)
  const mobileMenuStyles = isOpen 
    ? "transform translate-y-0 opacity-100 transition-all duration-500 ease-out" 
    : "transform -translate-y-full opacity-0 pointer-events-none"; // -translate-full lo oculta y la opacidad lo desvanece suavemente

  return (
    // Se mantiene la paleta de colores y el estilo fijo
    <nav className="bg-[var(--c-ink)] text-white fixed top-0 w-full shadow-xl z-50">
      <div className="container mx-auto flex items-center justify-between px-4 py-4">

        {/* Logo */}
        {/* Se usa el w-20 h-20 del último código para un mejor balance visual */}
        {/* Aplica una animación de escala y opacidad al cargar */}
        <C.Logo className={`w-20 h-20 transition-all duration-500 ${isMounted ? 'scale-100 opacity-100' : 'scale-75 opacity-0'}`} /> 

        {/* Botón hamburguesa para móvil, ahora con iconos Lucide */}
        <button
          className="sm:hidden flex items-center justify-center p-2 text-[var(--c-primary)] hover:text-[#f9a826] transition duration-300 rounded-lg"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
        >
          {/* Se usan los íconos importados para mejor diseño */}
          {isOpen 
            ? <X className="w-6 h-6" /> 
            : <Menu className="w-6 h-6" />
          }
        </button>

        {/* Links para escritorio (Con animación de entrada escalonada) */}
        <ul className="hidden sm:flex flex-wrap items-center justify-center gap-4 text-base font-medium">
          {navLinks.map((link, index) => (
            // Se añaden clases de animación a cada <li>
            <li 
              key={link.id} 
              className={`group relative transition-all duration-500 ease-out 
                           ${isMounted ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}
              // El retraso se calcula usando el índice para crear el efecto escalonado (stagger)
              style={{ transitionDelay: `${index * 80}ms` }} 
            >
              <a
                href={`#${link.id}`}
                className="block py-2 px-2 text-[var(--c-primary)] transition-all duration-300 font-semibold
                           hover:text-[#f9a826] hover:scale-105"
              >
                {link.label}
              </a>
              {/* Línea de acento al pasar el mouse (para mayor fluidez visual) */}
              <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-[#f9a826] transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
            </li>
          ))}
          {/* Botón de conexión para escritorio (También se anima al cargar) */}
          <div 
             className={`transition-all duration-500 ease-out ${isMounted ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}
             style={{ transitionDelay: `${navLinks.length * 80}ms` }} // Aplica el retraso final
          >
            <ConectarButton/>
          </div>
        </ul>
      </div>

      {/* Menú desplegable para móvil (con animación de despliegue) */}
      <ul className={`sm:hidden flex flex-col items-center gap-3 bg-[var(--c-ink)] py-4 absolute w-full 
                      ${mobileMenuStyles}`} // Aplica la animación aquí
      >
        {navLinks.map((link) => (
          <li key={link.id} className="w-full text-center">
            <a
              href={`#${link.id}`}
              className="block py-2 px-6 text-[var(--c-primary)] text-lg font-medium transition-all duration-300 hover:text-[#f9a826] hover:scale-105"
              onClick={() => setIsOpen(false)} // cierra el menú al hacer click
            >
              {link.label}
            </a>
          </li>
        ))}
        {/* Botón de conexión para móvil, envuelto para asegurar el cierre al hacer click */}
        <div className="pt-4 pb-2" onClick={() => setIsOpen(false)}>
            <ConectarButton/>
        </div>
      </ul>
    </nav>
  );
}

export default Navbar;