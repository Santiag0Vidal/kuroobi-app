import * as C from "../../componentes/index";


export default function Contacto() {
  return (
    <section
      id="contacto"
      className="min-h-screen flex flex-col items-center justify-center text-center bg-gradient-to-b from-[var(--c-brown)]  to-[var(--c-ink)] px-4"
    >
      <div className="flex flex-col items-center max-w-7xl w-full gap-12">
        <C.TituloSeccion texto="CONTACTANOS" />

        <div className="flex flex-col lg:flex-row items-stretch w-full max-w-6xl bg-[var(--c-graylite)]/90 backdrop-blur-sm rounded-3xl shadow-xl border border-[var(--c-graydark)] overflow-hidden gap-8">
          
          {/* Bloque de contacto */}
          <div className="relative z-10 flex-1 p-8 lg:p-12 text-[var(--c-brown)] text-center lg:text-left space-y-6">
            <h3 className="text-3xl font-bold mb-4">¡Contáctanos!</h3>


            {/* Redes sociales */}
            <div className="flex justify-center lg:justify-start gap-6 mt-4">
              <a
                href="https://wa.me/542996055279"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[var(--c-primary)] hover:bg-[var(--c-maroon)] transition-all rounded-full p-3 shadow-lg hover:shadow-[0_6px_20px_-4px_rgba(150,31,28,0.7)]"
              >
                <img
                  src="/iconos/wp.png"
                  alt="Instagram"
                  className="w-10 h-10"
                />
              </a>
              <a
                href="https://www.instagram.com/kinesio_nqn/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[var(--c-primary)] hover:bg-[var(--c-maroon)] transition-all rounded-full p-3 shadow-lg hover:shadow-[0_6px_20px_-4px_rgba(150,31,28,0.7)]"
              >
              <img
                  src="/iconos/ig.png"
                  alt="Instagram"
                  className="w-10 h-10"
                />
              </a>
            </div>
          </div>

          {/* Mapa */}
          <div className="flex-1 p-6 lg:p-12">
            <C.Mapa />
          </div>

        </div>
      </div>
    </section>
  );
}
