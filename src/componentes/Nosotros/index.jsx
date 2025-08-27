import kines from './kinesiolos'

export default function Nosotros() {
  // Lista de kinesiólogos (puedes agregar imágenes en /public/images/)


  return (
    <section
      id="nosotros"
      className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#fbf4f3] to-[#f7e9e5] px-4 py-16"
    >
      <div className="flex flex-col items-center max-w-7xl w-full gap-12">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-[#343432] text-center relative after:block after:w-20 after:h-1 after:bg-[#f9a826] after:rounded-full after:mx-auto">
          SOBRE NOSOTROS
        </h2>

        <p className="text-center text-gray-700 max-w-3xl">
          En <strong>KINESIOLOGÍA WM</strong> nos especializamos en kinesiología deportiva,
          combinando experiencia y tecnología avanzada para optimizar tu recuperación y rendimiento.
          Nuestro equipo de profesionales está comprometido con tu bienestar y seguridad.
          📍 Neuquén Capital
        </p>

      
        <div className="flex flex-col sm:flex-row gap-8 items-center justify-center w-full">
          {kines.map((kine, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center bg-white rounded-2xl shadow-lg p-4 w-60"
            >
              <img
                src={kine.image}
                alt={kine.name}
                className="w-32 h-32 object-cover rounded-full mb-4 border-4 border-[#f9a826]"
              />
              <h3 className="text-lg font-semibold text-[#343432]">{kine.name}</h3>
              <p className="text-gray-600 text-sm">{kine.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
