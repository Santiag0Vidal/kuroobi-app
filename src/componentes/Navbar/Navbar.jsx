import navLinks from "./navLinks.js";
import * as C from "../index";

function Navbar() {
  return (
    <nav className="bg-[var(--c-ink)] text-white fixed top-0 w-full shadow-lg z-50">
      <div className="container mx-auto flex flex-col items-center justify-center px-4 py-4">
        
        {/* Logo */}
        <div className="mb-4">
          <C.Logo className="w-28 h-28 transition-transform duration-300 hover:scale-105" />
        </div>

        {/* Links dinámicos */}
        <ul className="flex flex-wrap justify-center gap-6 text-sm sm:text-base font-medium">
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
          {/* Carrito si lo necesitas */}
          {/* <C.BotonCarrito /> */}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
