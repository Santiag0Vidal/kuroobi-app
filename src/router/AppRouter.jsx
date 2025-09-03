import { Route, Routes } from "react-router-dom";
import * as P from "../pages";
import App from "../App";

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/pago" element={<P.Pago />} />
      <Route path="/actividades" element={<P.Actividades />} />
      <Route path="/contacto" element={<P.Contacto />} />
      <Route path="/tratamientos" element={<P.Tratamientos />} />
      <Route path="/nosotros" element={<P.Nosotros />} />
      <Route path="/membresia" element={<P.Membresia />} />
      <Route path="/preguntas" element={<P.Preguntas />} />
      <Route path="*" element={<P.NotFound />} />
      
    </Routes>
  );
}
export default AppRouter;
