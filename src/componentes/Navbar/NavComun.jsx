
import * as C from "../index";

function NavComun() {
  return (
    <nav className="bg-[var(--c-ink)] text-white fixed top-0 w-full shadow-lg z-50">
      <div className="container mx-auto flex flex-col items-center justify-center px-4 py-4">

        <div className="mb-4">
          <C.Logo className="w-28 h-28 transition-transform duration-300 hover:scale-105" />
        </div>

      </div>
    </nav>
  );
}

export default NavComun;
