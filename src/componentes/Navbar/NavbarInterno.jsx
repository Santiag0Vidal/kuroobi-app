import * as C from "../index";
import { Link } from "react-router-dom";

function NavbarInterno() {
  return (
    <nav className="bg-[#fbf4f3] text-[#343432] fixed top-0 w-full shadow z-50">
      <div className="container mx-auto flex flex-col items-center justify-center px-4 py-4">
        <div className="mb-4">
          <C.Logo className="w-32 h-32" />
        </div>

        <ul className="flex flex-wrap justify-center space-x-6 text-sm sm:text-base font-medium">
          <Link to="/">
            <p className="text-[#343432] hover:underline hover:text-yellow-300 transition-colors">
              Inicio
            </p>
          </Link>
          <Link to="/alfajores">
            <p className="text-[#343432] hover:underline hover:text-yellow-300 transition-colors">
              Alfajores
            </p>
          </Link>
          <Link to="/budines">
            <p className="text-[#343432] hover:underline hover:text-yellow-300 transition-colors">
              Budines
            </p>
          </Link>
          <Link to="/tortas">
            <p className="text-[#343432] hover:underline hover:text-yellow-300 transition-colors">
              Tortas
            </p>
          </Link>
          <Link to="/peluditos">
            <p className="text-[#343432] hover:underline hover:text-yellow-300 transition-colors">
              Peluditos
            </p>
          </Link>
          <Link to="/especiales">
            <p className="text-[#343432] hover:underline hover:text-yellow-300 transition-colors">
              Especiales
            </p>
          </Link>
          <C.BotonCarrito />
        </ul>
      </div>
    </nav>
  );
}

export default NavbarInterno;
