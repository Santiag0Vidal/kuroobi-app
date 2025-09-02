import * as C from "../../componentes/index.js";
import CardActividades from "./Cards/index.jsx";

export default function Actividades() {
  return (
    <section
      id="actividades"
       className="bg-[var(--c-ink)] min-h-screen flex flex-col items-center py-16 px-6"
    >
      <div className="flex flex-col items-center max-w-7xl w-full">
        <C.TituloSeccion texto="ALTERNATIVAS DE ACTIVIDADES"/>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6 w-full">

            <CardActividades
              titulo="MUSCULACION"
              descripcion="Musculacion"
              imagen="/Actividades/musculacion.jpg"
            />
             <CardActividades
              titulo="KARATE"
              descripcion="Karate"
              imagen="/Actividades/karate.jpg"
            />
             <CardActividades
              titulo="INDOOR BIKE"
              descripcion="Indoor"
              imagen="/Actividades/indoor.jpg"
            />
            

        </div>
        </div>

    </section>
  );
}
