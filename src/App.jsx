import { Routes, Route } from 'react-router-dom'; // Importante
import "./App.css";
import * as C from "./componentes";
import * as P from "./pages";

// Creamos un componente interno para la "Home" que agrupa lo que ya tenías
const Home = () => (
  <>
    <P.Inicio />
    <C.BannerLab />
    <P.Actividades />
    <P.HorariosGym />
    <P.Descuentos />
    <P.Sede />
    <P.Nosotros />
    <P.Contacto />
  </>
);

function App() {
  return (
    <div>
      <main className="bg-[var(--c-ink)]">
        {/* El Navbar y Footer se mantienen visibles en TODAS las páginas */}
        <C.Navbar />
        
        {/* Gestor de Rutas */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/kuroobi-lab" element={<P.KuroobiLab />} />
        </Routes>

        <C.WhappBoot />
        <C.Fotter />
      </main>
    </div>
  );
}

export default App;