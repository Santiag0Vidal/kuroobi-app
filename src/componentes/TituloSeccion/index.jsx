import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

function TituloSeccion({ texto }) {
  return (
    <motion.h2
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="text-4xl sm:text-5xl font-extrabold text-[var(--c-primary)] text-center tracking-wide relative mb-12 drop-shadow-lg"
    >
      {texto}
      {/* Línea decorativa debajo */}
      <span className="block w-28 h-1 bg-[var(--c-brown)] rounded-full mx-auto mt-4 shadow-md" />
    </motion.h2>
  );
}

TituloSeccion.propTypes = {
  texto: PropTypes.string.isRequired,
};

export default TituloSeccion;
