import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import navLinks from "./navLinks.js";
import * as C from "../index";
import ConectarButton from "../../utils/conexion_back.jsx";
import { Menu, X, Cpu } from "lucide-react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();

  // Bloqueo de scroll al abrir menú
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "unset";
  }, [isOpen]);

  // Efecto de fondo en scroll
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (link) => {
    setIsOpen(false);
    if (link.type === "page") {
      navigate(link.path);
    } else {
      // Navegamos a la home + el hash (ancla)
      navigate(`/#${link.id}`);
    }
  };

  return (
    <>
      <nav className={`fixed top-0 w-full z-[120] transition-all duration-500 ${
        scrolled || isOpen ? "bg-black/80 backdrop-blur-xl py-3 border-b border-white/10" : "bg-transparent py-6"
      }`}>
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 lg:px-12">
          
          {/* Logo con navegación manual para evitar error de anidamiento <a> */}
          <div 
            onClick={() => { navigate("/"); window.scrollTo({ top: 0, behavior: "smooth" }); setIsOpen(false); }} 
            className="relative z-[130] cursor-pointer group"
          >
            <C.Logo className="w-12 md:w-20 transition-all duration-500 group-hover:scale-105" />
          </div>

          <button className="lg:hidden relative z-[130] p-2 text-white outline-none" onClick={() => setIsOpen(!isOpen)}>
            <AnimatePresence mode="wait">
              {isOpen ? (
                <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }}>
                  <X size={32} className="text-red-600" />
                </motion.div>
              ) : (
                <motion.div key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }}>
                  <Menu size={32} />
                </motion.div>
              )}
            </AnimatePresence>
          </button>

          <ul className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <li key={link.id}>
                <button
                  onClick={() => handleNavClick(link)}
                  className="px-5 py-2 text-[10px] font-black uppercase tracking-[0.25em] text-gray-400 hover:text-white transition-all duration-300 relative group"
                >
                  <span className="w-1 h-1 bg-red-600 rounded-full absolute left-1/2 -bottom-1 scale-0 group-hover:scale-100 transition-transform -translate-x-1/2" />
                  {link.label}
                </button>
              </li>
            ))}
            <div className="ml-6"><ConectarButton /></div>
          </ul>
        </div>
      </nav>

      {/* Menú Móvil */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 200 }}
            className="fixed inset-0 h-screen w-full bg-black/98 backdrop-blur-3xl lg:hidden z-[110] flex flex-col overflow-y-auto"
          >
            <ul className="flex flex-col items-center gap-8 relative z-10 py-32 min-h-max">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <button onClick={() => handleNavClick(link)} className="text-3xl font-black uppercase italic tracking-tighter text-white hover:text-red-600 transition-colors">
                    {link.label}
                  </button>
                </li>
              ))}
              <div className="mt-4 scale-110"><ConectarButton /></div>
            </ul>
            <div className="mt-auto pb-10 flex flex-col items-center gap-2 opacity-30">
              <Cpu size={16} className="text-red-600" />
              <span className="text-[8px] font-mono tracking-[0.5em] text-white">KUROOBI SYSTEM</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Navbar;