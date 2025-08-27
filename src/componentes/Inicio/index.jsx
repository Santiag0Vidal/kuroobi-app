import img from "../../assets/log-sin.png";
import bg from "../../assets/fondo.jpg"; // 👉 tu imagen de fondo

export default function Inicio() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center px-4"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Degradado encima del fondo */}
      <div className="absolute inset-0 bg-gradient-to-b from-[var(--c-ink)]/80 via-[var(--c-primary)]/50 to-transparent" />

      {/* Contenido */}
      <div className="relative z-10 flex justify-center items-center">
        <img
          src={img}
          alt="Logo"
          className="w-full max-w-md sm:max-w-lg md:max-w-xl object-contain drop-shadow-xl"
        />
      </div>
    </section>
  );
}
