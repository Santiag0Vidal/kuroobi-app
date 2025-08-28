import * as C from "../index";

export default function Tratamientos() {
  return (
    <section
      id="tratamientos"
       className="bg-[var(--c-ink)] min-h-screen flex flex-col items-center py-16 px-6"
    >
      <div className="flex flex-col items-center max-w-7xl w-full">
        <C.TituloSeccion texto="ALTERNATIVAS DE TRATAMIENTOS"/>

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
