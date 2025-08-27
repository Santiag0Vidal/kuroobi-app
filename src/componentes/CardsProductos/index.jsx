// src/components/ProductoCard.jsx
import PropTypes from 'prop-types';

export default function ProductoCard({ producto, onClick }) {
  return (
    <div
      className="bg-white rounded-xl shadow hover:shadow-lg cursor-pointer transition transform hover:scale-105"
      onClick={() => onClick(producto)}
    >
      <img
        src={producto.img}
        alt={producto.nombre}
        className="w-full h-48 object-cover rounded-t-xl"
      />
      <div className="p-4 text-center">
        <h3 className="text-lg font-semibold text-gray-800">{producto.nombre}</h3>
      </div>
    </div>
  );
}

ProductoCard.propTypes = {
  producto: PropTypes.shape({
    img: PropTypes.string.isRequired,
    nombre: PropTypes.string.isRequired,
  }).isRequired,
  onClick: PropTypes.func.isRequired,
};
