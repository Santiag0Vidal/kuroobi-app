import { Route, Routes } from "react-router-dom";
import * as P from "../pages";
import App from "../App";

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/pago" element={<P.Pago />} />
      <Route path="/alfajores" element={<P.Alfajores />} />
      <Route path="/budines" element={<P.Budines />} />
      <Route path="/tortas" element={<P.Tortas />} />
      <Route path="/peluditos" element={<P.Peluditos />} />
      <Route path="/cookies" element={<P.Cookies />} />
      <Route path="/especiales" element={<P.Especiales />} />
      <Route path="/carrito" element={<P.Carrito />} />
      
    </Routes>
  );
}
export default AppRouter;
