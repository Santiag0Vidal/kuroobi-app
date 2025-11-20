import { Link } from "react-router-dom";
import { AlertTriangle } from "lucide-react";
import * as C from "../../componentes/index";

export default function NotFound() {
  return (
    <>
      <C.NavComun />

      {/* Fondo con gradiente */}
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--c-brown)] via-[var(--c-maroon)] to-[var(--c-primary)] z-0" />

      {/* Contenido principal */}
      <div className="relative flex flex-col items-center justify-center min-h-screen text-center px-4 sm:px-6 z-10">

        {/* Icono */}
        <div className="bg-white/10 backdrop-blur-lg p-4 sm:p-6 rounded-full shadow-lg animate-bounce mb-6">
          <AlertTriangle className="w-14 h-14 sm:w-20 sm:h-20 text-[var(--c-primary)]" />
        </div>

        {/* Título */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-white drop-shadow-lg mb-2">
          404
        </h1>

        <p className="text-base sm:text-lg text-[var(--c-graylite)] mb-8 max-w-sm sm:max-w-md md:max-w-lg">
          Oops... La página que buscas no existe o fue movida.
        </p>

        {/* Botón */}
        <Link
          to="/"
          className="bg-[var(--c-primary)] text-white px-6 sm:px-8 py-3 rounded-2xl shadow-xl hover:bg-[var(--c-maroon)] transition font-semibold text-base sm:text-lg"
        >
          Volver a KUROOBI
        </Link>
      </div>
    </>
  );
}
