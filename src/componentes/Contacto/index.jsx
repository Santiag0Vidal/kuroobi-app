import * as C from '../index'
export default function Contacto() {
  return (
    <section
      id="contacto"
      className="min-h-screen flex items-center justify-center bg-[#fbf4f3] px-4 py-16"
    >
      <div className="flex flex-col items-center max-w-7xl w-full gap-12">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-[#343432] text-center relative after:block after:w-20 after:h-1 after:bg-[#f9a826] after:rounded-full after:mx-auto">
         CONTACTANOS
        </h2>

        <div className="flex flex-col lg:flex-row items-stretch w-full max-w-6xl bg-white rounded-xl shadow-2xl overflow-hidden gap-8">
          
          {/* Bloque de contacto */}
          <div className="relative z-10 flex-1 p-8 lg:p-12 text-[#343432] text-center lg:text-left">
            <h3 className="text-3xl font-bold mb-4">¡Contáctanos!</h3>
            <p className="text-sm sm:text-base mb-6">
              Estamos para ayudarte. Podés escribirnos por nuestras redes o hacer tu consulta directamente por whatsapp directamente.
              ¡Te esperamos!
            </p>

            <div className="flex justify-center lg:justify-start gap-6">
              <a
                href="https://wa.me/5492994539213"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white rounded-full p-2 shadow-md hover:shadow-lg transition-all"
              >
                <img src="/iconos/wp.png" alt="WhatsApp" className="w-10 h-10" />
              </a>
              <a
                href="https://www.instagram.com/kinesio_nqn/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white rounded-full p-2 shadow-md hover:shadow-lg transition-all"
              >
                <img src="/iconos/ig.png" alt="Instagram" className="w-10 h-10" />
              </a>
            </div>
          </div>

          {/* Mapa */}
          <C.Mapa/>
        </div>
      </div>
    </section>
  );
}
