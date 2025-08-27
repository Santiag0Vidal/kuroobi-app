import PropTypes from 'prop-types';

const CardProducto = ({ titulo, descripcion, imagen }) => {
  return (
    <div className="bg-[#fbe9db] rounded-2xl overflow-hidden shadow-md flex flex-col sm:flex-row max-w-2xl w-full">
      {/* Imagen con degradado */}
      <div className="relative sm:w-1/2 w-full h-48 sm:h-auto">
        <img
          src={imagen}
          alt={titulo}
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 bg-gradient-to-l from-[#fbe9db] via-[#fbe9db]/80 to-transparent sm:rounded-l-2xl" />
      </div>

      {/* Contenido */}
      <div className="sm:w-1/2 w-full p-6 flex flex-col justify-center text-start z-10">
        <h3 className="text-2xl font-bold text-[#3d2c2e]">{titulo}</h3>
        <p className="text-sm mt-2 text-[#6f4d4d]">{descripcion}</p>
      </div>
    </div>
  );
};

CardProducto.propTypes = {
  titulo: PropTypes.string.isRequired,
  descripcion: PropTypes.string.isRequired,
  imagen: PropTypes.string.isRequired,
};

export default CardProducto;
