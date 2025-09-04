import * as C from "../../componentes/index";

export default function Sede() {
  return (
    <section
      id="sede"
      className="bg-[var(--c-ink)] min-h-screen flex flex-col items-center py-16 px-1"
    >
      <C.TituloSeccion texto="NUESTRO ESPACIO EN NEUQUÉN" />
      <C.Sede />

      <a
        href="#actividades"
        className="inline-block px-12 py-6 mt-20 rounded-2xl bg-[var(--c-primary)] text-[var(--c-graylite)] font-bold shadow-xl 
             hover:bg-[var(--c-hover)] hover:text-[var(--c-brown)] hover:scale-110 
             transition-all duration-300 ease-in-out animate-pulse text-center"
      >
        Conoce nuestras actividades
      </a>
    </section>
  );
}
