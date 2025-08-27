import img from "../../assets/logo.jpg";
export default function Inicio() {
  return (
    <section
      id="inicio"
      className="min-h-screen flex items-center justify-center bg-[#fbf4f3] px-4"
    >
      <img
        src={img}
        alt="Logo"
        className="w-full max-w-md sm:max-w-lg md:max-w-xl object-contain"
      />
        
    </section>
  )
}
