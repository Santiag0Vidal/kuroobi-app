import * as C from "../../componentes";
import Contenido from "./Contenido";


function App() {
  return (
    <div>
      <main className="bg-[var(--c-ink)]">
        {/* El Navbar y Footer se mantienen visibles en TODAS las páginas */}
        <C.NavComun />
       <Contenido /> 
        <C.Fotter />
      </main>
    </div>
  );
}

export default App;