import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

export default function Subtitulo({ texto }) {
  return (
    <motion.h3
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="text-xl sm:text-3xl font-bold text-[var(--c-primary)] text-center mb-6"
    >
      {texto}
      <span className="block w-16 h-1 bg-[var(--c-brown)] rounded-full mx-auto mt-2" />
    </motion.h3>
  );
}

Subtitulo.propTypes = {
  texto: PropTypes.string.isRequired,
};
