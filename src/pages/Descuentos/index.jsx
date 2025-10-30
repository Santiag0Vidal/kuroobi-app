import img from "../../assets/log-sin.png";

export default function Descuentos() {
  return (
    <section
      id="descuentos"
      className="min-h-screen flex flex-col items-center justify-center text-center bg-gradient-to-b from-[var(--c-ink)] to-[var(--c-ink)]  px-4"
    >
      {/* Degradado encima del fondo */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-transparent" />

      {/* Contenido */}
      <div className="relative z-10 max-w-lg w-full bg-white/10 backdrop-blur-md rounded-2xl shadow-2xl p-8 text-white text-center">
        {/* Logo */}
        <img
          src={img}
          alt="Logo"
          className="w-32 mx-auto mb-6 object-contain"
        />

        {/* Plan Familiar */}
        <div className="mb-6">
          <h2 className="text-2xl font-extrabold mb-3 border-b border-white/30 pb-2">
            Plan Familiar
          </h2>
          <ul className="space-y-2">
            <li>3 o más personas:</li>
            <li>2 veces por semana - <span className="font-semibold text-yellow-400">15%</span> del total</li>
            <li>3 veces por semana - <span className="font-semibold text-yellow-400">20%</span> del total</li>
            <li>Todos los días - <span className="font-semibold text-yellow-400">20%</span> del total</li>
          </ul>
        </div>

        {/* Abonos por 6 meses */}
        <div className="mb-6">
          <h2 className="text-2xl font-extrabold mb-2 border-b border-white/30 pb-2">
            Abonos por 6 meses
          </h2>
          <p className="text-yellow-400 font-semibold">20% de descuento</p>
        </div>

        {/* Jubilados */}
        <div className="mb-6">
          <h2 className="text-2xl font-extrabold mb-2 border-b border-white/30 pb-2">
            Jubilados
          </h2>
          <p>
            Los descuentos a jubilados se realizan de forma presencial,
            presentando el carnet de jubilación correspondiente.
          </p>
        </div>

        {/* Notas importantes */}
        <div className="text-sm text-gray-300 mt-4 bg-white/10 p-3 rounded-lg">
          <p>
            Si son plan familiar, podrán crear el usuario cada uno, pero el alta de cada uno y el pago se harán de forma presencial.
          </p>
          <p className="mt-2">
            Recordar crear cada usuario, para que la recepcionista encuentre sus datos y pueda cargarlos al sistema de llaveros.
          </p>
        </div>
      </div>
    </section>
  );
}
