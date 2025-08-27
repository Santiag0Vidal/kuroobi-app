import * as C from "../index";

export default function Preguntas() {
  return (
    <section
      id="preguntas"
      className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#fbf4f3] to-[#f7e9e5]"
    >
      <div className="flex flex-col items-center max-w-7xl w-full">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-[#343432] text-center relative after:block after:w-20 after:h-1 after:bg-[#f9a826] after:rounded-full after:mx-auto">
          PREGUNTAS FRECUENTES
        </h2>

        <div className="flex flex-col md:flex-row items-center w-full max-w-5xl bg-white rounded-2xl shadow-xl">
         <C.Preguntas/>
        </div>
      </div>
    </section>
  );
}
