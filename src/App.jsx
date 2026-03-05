import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react'; // Importamos useEffect
import "./App.css";
import * as C from "./componentes";
import * as P from "./pages";

const Home = () => {
  const { hash } = useLocation();

  // Esta es la "magia" que falta: 
  // Cuando la URL cambia (ej: de / a /#contacto), este efecto mueve el scroll.
  useEffect(() => {
    if (hash) {
      const id = hash.replace("#", "");
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [hash]);

  return (
    <>
      {/* Añadimos IDs manuales para que el Navbar sepa a dónde ir */}
      <div id="inicio"><P.Inicio /></div>
      <C.BannerLab />
      <div id="actividades"><P.Actividades /></div>
      <div id="horarios"><P.HorariosGym /></div>
      <div id="descuentos"><P.Descuentos /></div>
      <div id="sede"><P.Sede /></div>
      <div id="nosotros"><P.Nosotros /></div>
      <div id="contacto"><P.Contacto /></div>
    </>
  );
};

function App() {
  return (
    <div>
      <main className="bg-[var(--c-ink)]">
        <C.Navbar />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/kuroobi-lab" element={<P.KuroobiLab />} />
          {/* Añadimos una ruta comodín para evitar el warning del parent route */}
          <Route path="*" element={<Home />} /> 
        </Routes>

        <C.WhappBoot />
        <C.Fotter />
      </main>
    </div>
  );
}

export default App;