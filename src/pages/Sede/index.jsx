import * as C from "../../componentes/index";

export default function Sede() {
  return (
    <section
      id="sede"
            className="min-h-screen flex flex-col items-center justify-center text-center bg-gradient-to-b from-[var(--c-ink)] to-[var(--c-ink)]  px-4"
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
