import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react"; // ← iconos modernos
import horarios from "./horarios";
import * as C from "../../componentes/index";

const dias = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes"];

export default function HorariosAcordeon() {
  const [openDay, setOpenDay] = useState(null);

 


  return (
    <section
      id="horarios"
       className="min-h-screen flex flex-col items-center justify-center text-center bg-gradient-to-b from-[var(--c-brown)]  to-[var(--c-ink)] px-4"
    
    >
      <C.TituloSeccion texto="CRONOGRAMA DE ACTIVIDADES" />

      <div className="w-full max-w-3xl mt-8 space-y-4">
        {dias.map((dia) => {
          const actividadesDia = horarios.filter((h) => h.dia === dia);
          const isOpen = openDay === dia;

          return (
            <div
              key={dia}
              className="bg-white rounded-2xl shadow-lg overflow-hidden transition"
            >
              {/* Header del día */}
              <button
                onClick={() => setOpenDay(isOpen ? null : dia)}
                className="w-full flex justify-between items-center px-6 py-5 text-lg font-bold bg-[var(--c-primary)] text-white hover:opacity-90 transition"
              >
                <span>{dia}</span>
                {isOpen ? (
                  <ChevronUp className="w-6 h-6" />
                ) : (
                  <ChevronDown className="w-6 h-6" />
                )}
              </button>

              {/* Contenido colapsable */}
              <div
                className={`grid transition-all duration-500 ease-in-out ${
                  isOpen
                    ? "grid-rows-[1fr] opacity-100"
                    : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden">
                  <div className="p-5 space-y-3">
                    {actividadesDia.length > 0 ? (
                      actividadesDia.map((act, idx) => (
                        <div
                          key={idx}
                          className="flex justify-between items-center bg-gradient-to-r from-yellow-100 to-yellow-200 rounded-xl px-5 py-3 shadow-md hover:scale-[1.02] transition-transform"
                        >
                          <span className="font-semibold text-gray-800">
                            {act.actividad}
                          </span>
                          <span className="text-sm font-medium text-gray-700 bg-white px-3 py-1 rounded-lg shadow-sm">
                            {act.inicio} - {act.fin}
                          </span>
                          
                          <a  href={`#actividades`} className="bg-[var(--c-primary)] text-white px-3 py-1 rounded-lg shadow hover:bg-[var(--c-hover)] transition">
                            Reservar
                          </a>
                        </div>
                      ))
                    ) : (
                      <p className="text-gray-400 text-sm italic">
                        No hay actividades
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
