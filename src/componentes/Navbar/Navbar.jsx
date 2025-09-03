import { useState } from "react";
import navLinks from "./navLinks.js";
import * as C from "../index";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false); // controla menú móvil

  return (
    <nav className="bg-[var(--c-ink)] text-white fixed top-0 w-full shadow-lg z-50">
      <div className="container mx-auto flex items-center justify-between px-4 py-4">

        {/* Logo */}
        <C.Logo className="w-28 h-28 transition-transform duration-300 hover:scale-105" />

        {/* Botón hamburguesa para móvil */}
        <button
          className="sm:hidden flex items-center justify-center p-2 text-[var(--c-primary)] hover:text-[#f9a826]"
          onClick={() => setIsOpen(!isOpen)}
        >
          {/* Icono simple */}
          {isOpen ? "✖" : "☰"}
        </button>

        {/* Links para escritorio */}
        <ul className="hidden sm:flex flex-wrap justify-center gap-6 text-sm sm:text-base font-medium">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                className="text-[var(--c-primary)] transition-all duration-300 hover:text-[#f9a826] hover:drop-shadow-lg hover:scale-105"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Menú desplegable para móvil */}
      {isOpen && (
        <ul className="sm:hidden flex flex-col items-center gap-4 bg-[var(--c-ink)] py-4">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                className="text-[var(--c-primary)] text-lg transition-all duration-300 hover:text-[#f9a826] hover:scale-105"
                onClick={() => setIsOpen(false)} // cierra el menú al hacer click
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}

export default Navbar;
