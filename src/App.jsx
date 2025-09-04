import "./App.css";
import * as C from "./componentes";
import * as P from "./pages";

function App() {
  return (
    <div>
      <main className="pt-20 bg-[var(--c-ink)]">
        <C.Navbar />
        <P.Inicio />
        <P.Sede />
        <C.WhappBoot />
        <P.Actividades />
        <P.HorariosGym />
        {/*
       <P.Preguntas />
         <P.Tratamientos />
       */}
        <P.Nosotros />
        <P.Contacto />
        <P.Novedades />
        <C.Fotter />
      </main>
    </div>
  );
}

export default App;
