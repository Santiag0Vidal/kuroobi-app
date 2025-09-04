import "./App.css";
import * as C from "./componentes";
import * as P from "./pages";

function App() {
  return (
    <div>
      <main className="pt-20">
        <C.Navbar />
        <P.Inicio />
        <P.Sede />
        <C.WhappBoot />
        <P.Actividades />

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
