
import './App.css'
import * as C from './componentes'
import * as P from './pages'


function App() {
  return (
    <div>


      <main className="pt-20">
        <C.Navbar />
        <P.Inicio />
        <C.WhappBoot />
        <P.Actividades />
       {/*  <P.Membresia /> */}
        <P.Tratamientos />
        <P.Preguntas />
        <P.Nosotros />
        <P.Contacto />
        <C.Kuroobi />
        <C.Fotter />
      </main>
    </div>
  )
}


export default App
