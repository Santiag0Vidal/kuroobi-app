import PropTypes from 'prop-types';

function TituloSeccion({ texto }) {
  return (
    <h2 className="text-2xl sm:text-3xl font-bold text-[#dec09a] text-center mb-6">
      {texto}
    </h2>
  );
}

TituloSeccion.propTypes = {
  texto: PropTypes.string.isRequired,
};

export default TituloSeccion;
