import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { LogIn } from "lucide-react";

export default function ConectarButton() {
  const nav = useNavigate();

  return (
    <motion.button
      onClick={() => nav("/kuroo-app")}
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.96 }}
      className="
        relative flex items-center gap-2
        px-5 py-2
        rounded-xl
        bg-gradient-to-r from-red-600 to-red-700
        text-white font-bold text-sm uppercase tracking-wider
        shadow-lg shadow-red-600/30
        border border-red-500/40
        transition-all duration-300
        hover:shadow-red-600/50
      "
    >
      <LogIn size={16} />
      Ingresar
    </motion.button>
  );
}
