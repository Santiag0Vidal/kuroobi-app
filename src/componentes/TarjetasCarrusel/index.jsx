
import PropTypes from "prop-types";
import TarjetasCarrusel from "./TarjetasCarrusel";

export default function Tarjetas() {
  return (
    <TarjetasCarrusel
      images={[
        "/Tarjetas/1.png",
        "/Tarjetas/2.png",
        "/Tarjetas/3.jpg",
        "/Tarjetas/5.png",
        "/Tarjetas/8.png",
        "/Tarjetas/11.jpg",
        "/Tarjetas/6.jpg",
        "/Tarjetas/9.png",
        "/Tarjetas/10.png",
         "/Tarjetas/12.jpg",
      ]}
    />
  );
}

Tarjetas.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
};
