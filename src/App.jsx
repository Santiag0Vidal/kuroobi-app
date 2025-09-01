
import './App.css'
import * as C from './componentes'


function App() {
  return (
    <div>


      <main className="pt-20">
        <C.Navbar />
        <C.Inicio />
        <C.WhappBoot/>
        <C.Actividades/>
       {/*<C.Membresia/>*/}
        <C.Tratamientos />
        <C.PreFrecuentes/>
        <C.Nosotros />
        <C.Contacto />
         <C.Kuroobi/>
        <C.Fotter/>
      </main>
    </div>
  )
}


export default App
