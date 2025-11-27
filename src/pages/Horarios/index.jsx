import { useState, useMemo } from "react";
// 🚨 Importación limpia: Asumimos que la ruta y la exportación funcionan 🚨
import horarios from "./horarios"; 
import { ChevronDown, ChevronUp, Clock, Calendar, CheckSquare } from "lucide-react"; 
import * as C from "../../componentes/index";

const dias = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes"];

// Mapeo de colores para mejorar la visualización y diferenciación
const TIPO_COLORES = {
    "Musculación": { bg: "bg-gray-300", text: "text-gray-800", accent: "bg-gray-400" },
    "Indoor": { bg: "bg-red-300", text: "text-red-900", accent: "bg-red-400" },
    "Yoga": { bg: "bg-purple-300", text: "text-purple-900", accent: "bg-purple-400" },
    "Karate": { bg: "bg-slate-300", text: "text-slate-900", accent: "bg-slate-400" },
    "Karate Niños": { bg: "bg-yellow-300", text: "text-yellow-900", accent: "bg-yellow-400" },
    "GAP": { bg: "bg-blue-300", text: "text-blue-900", accent: "bg-blue-400" },
    "Funcional": { bg: "bg-green-300", text: "text-green-900", accent: "bg-green-400" },
    "Stretching": { bg: "bg-pink-300", text: "text-pink-900", accent: "bg-pink-400" },
};

// Función para obtener el nombre del día actual en español (para apertura automática)
const obtenerDiaActual = () => {
    const d = new Date();
    // Nota: Usamos 'es-AR' para asegurar la localización.
    const nombreDia = d.toLocaleDateString('es-AR', { weekday: 'long' }); 
    let dia = nombreDia.charAt(0).toUpperCase() + nombreDia.slice(1);
    
    // Normalizar si el sistema operativo devuelve "Miércoles" con tilde
    if (dia === "Miércoles") return "Miercoles"; 
    if (dia === "Sábado" || dia === "Domingo") return null; // No mostrar si es fin de semana
    
    return dias.includes(dia) ? dia : null;
};

export default function HorariosAcordeon() {
  const diaActual = useMemo(() => obtenerDiaActual(), []);
  const [openDay, setOpenDay] = useState(diaActual); // Abre el día actual por defecto

  // Función para ordenar las actividades por hora de inicio (ej: "07:00")
  const ordenarActividades = (a, b) => {
      // Comparación de cadenas simple para ordenar horas: "07:00" < "08:30"
      if (a.inicio < b.inicio) return -1;
      if (a.inicio > b.inicio) return 1;
      return 0;
  };
 
  return (
    <section
      id="horarios"
      className="min-h-screen flex flex-col items-center justify-center text-center bg-gradient-to-b from-[var(--c-brown)]  to-[var(--c-ink)] px-4 py-16"
    >
      <C.TituloSeccion texto="CRONOGRAMA DE ACTIVIDADES" />

      <div className="w-full max-w-3xl mt-10 space-y-6">
        {dias.map((dia) => {
          // 🚨 CLAVE: Filtrar y ordenar los datos 🚨
          const actividadesDia = horarios
            .filter((h) => h.dia === dia)
            .sort(ordenarActividades);
            
          const isOpen = openDay === dia;
          const isToday = dia === diaActual;

          return (
            <div
              key={dia}
              className={`rounded-2xl shadow-2xl overflow-hidden transition duration-500 ${
                isToday ? "border-4 border-yellow-300" : "bg-white"
              }`}
            >
              {/* Header del día */}
              <button
                onClick={() => setOpenDay(isOpen ? null : dia)}
                className={`w-full flex justify-between items-center px-6 py-5 text-xl font-extrabold transition ${
                    isToday 
                      ? "bg-yellow-300 text-gray-900 hover:bg-yellow-400" // Estilo para HOY
                      : "bg-[var(--c-primary)] text-white hover:opacity-90" // Estilo normal
                }`}
              >
                <span className="flex items-center gap-3">
                    <Calendar className="w-6 h-6" />
                    {dia} {isToday && <span className="text-sm font-semibold">(HOY)</span>}
                </span>
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
                  <div className="p-5 space-y-3 bg-gray-100"> 
                    {actividadesDia.length > 0 ? (
                      actividadesDia.map((act, idx) => {
                          const { bg, text, accent } = TIPO_COLORES[act.actividad] || { 
                              bg: "bg-blue-100", text: "text-gray-800", accent: "bg-blue-500"
                          };
                          
                          return (
                            <div
                              key={idx}
                              className={`flex flex-wrap justify-between items-center ${bg} ${text} rounded-xl px-5 py-3 shadow-lg hover:scale-[1.01] transition-transform`}
                            >
                              <span className="font-bold text-lg flex items-center gap-2">
                                <CheckSquare className="w-5 h-5 text-yellow-300" />
                                {act.actividad}
                              </span>
                              
                              <span className={`text-sm font-medium ${accent} px-3 py-1 rounded-full shadow-md flex items-center gap-1`}>
                                <Clock className="w-4 h-4" />
                                {act.inicio} - {act.fin}
                              </span>
                              
                              <a 
                                href={`#actividades`} 
                                className="bg-[var(--c-hover)] text-[var(--c-ink)] px-3 py-1 rounded-lg shadow-xl font-semibold hover:opacity-90 transition mt-2 md:mt-0"
                              >
                                Reservar
                              </a>
                            </div>
                          );
                      })
                    ) : (
                      <p className="text-gray-500 text-center text-md italic">
                        No hay actividades programadas para este día.
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