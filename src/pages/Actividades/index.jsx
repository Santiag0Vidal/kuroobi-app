import * as C from "../../componentes/index.js";
import CardActividades from "./Cards/index.jsx";

export default function Actividades() {
  return (
    <section
      id="actividades"
      className="min-h-screen flex flex-col items-center justify-center text-center bg-gradient-to-b from-[var(--c-ink)]  to-[var(--c-brown)] px-4"
    >
      <div className="flex flex-col items-center max-w-7xl w-full">
        <C.TituloSeccion texto="ALTERNATIVAS DE ACTIVIDADES"/>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6 w-full">

            <CardActividades
              titulo="MUSCULACION"
              descripcion="Musculacion"
              imagen="/Actividades/musculacion.JPG"
            />
             <CardActividades
              titulo="KARATE"
              descripcion="Karate"
              imagen="/Actividades/karate.jpg"
            />
             <CardActividades
              titulo="INDOOR BIKE"
              descripcion="Indoor"
              imagen="/Actividades/indoor.JPG"
            />
            

        </div>
        </div>

    </section>
  );
}
