import "./App.css";
import * as C from "./componentes";
import * as P from "./pages";

function App() {
  return (
    <div>
      <main className="pt-20 bg-[var(--c-ink)]">
        <C.Navbar />
        <P.Inicio />
        
        <C.WhappBoot />
        <P.Actividades />
        <P.HorariosGym />
        <P.Descuentos />
       
        {/*
       <P.Preguntas />
         <P.Tratamientos />
        <P.Novedades />
       */}
        <P.Nosotros />
        <P.Sede />
        <P.Contacto />
        <C.Fotter />
      </main>
    </div>
  );
}

export default App;
