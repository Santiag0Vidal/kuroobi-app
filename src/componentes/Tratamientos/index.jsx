import * as C from "../index";

export default function Tratamientos() {
  return (
    <section
      id="tratamientos"
       className="bg-[var(--c-ink)] min-h-screen flex flex-col items-center py-16 px-6"
    >
      <div className="flex flex-col items-center max-w-7xl w-full">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-[var(--c-primary)] text-center tracking-wide relative">
          NUESTROS TRATAMIENTOS
           <span className="block w-24 h-1 bg-[var(--c-brown)] rounded-full mx-auto mt-3" />
        </h2>

        <div className="flex flex-col md:flex-row items-center w-full max-w-5xl bg-white rounded-2xl shadow-xl mt-3">
          {/* Carrusel */}
          <div className="w-full md:w-1/2">
            <C.CarrucelReel />
          </div>

          {/* Texto informativo */}
          <C.Informacion/>
        </div>
      </div>
    </section>
  );
}
