import * as C from "../../componentes";
import Hero from "./Hero";
import Identidad from "./Identidad";
import PruebasFuerza from "./PruebasFuerza";
import Proceso from "./Proceso";
import AnalisisFuncional from "./AnalisisFuncional";
import ArsenalClinico from "./ArsenalClinico";
import Tecnologia from "./Tecnologia";
import Contacto from "./Contacto";

function App() {
  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-red-600 selection:text-white">
      <main>
        <C.NavComun />
        
        {/* Secciones del Laboratorio Modularizadas */}
        <Hero />
        <Identidad />
        <PruebasFuerza />
        <Proceso />
        <AnalisisFuncional />
        <ArsenalClinico />
        <Tecnologia />
        <Contacto />

        <C.Fotter />
      </main>
    </div>
  );
}

export default App;