import * as C from "../../componentes/index";
import IntemPreguntas from './items'

export default function Preguntas() {
  return (
    <section
      id="preguntas"
              className="bg-[var(--c-ink)] min-h-screen flex flex-col items-center py-16 px-6"

    >
      <div className="flex flex-col items-center max-w-7xl w-full">
        <C.TituloSeccion texto="PREGUNTAS FRECUENTES"/>

        <div className="flex flex-col md:flex-row items-center w-full max-w-5xl rounded-2xl shadow-xl mt-3 ">
         <IntemPreguntas/>
        </div>
      </div>
    </section>
  );
}
