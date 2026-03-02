import { useState, useEffect } from "react";
import { useLocation, Link, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import navLinks from "./navLinks.js";
import * as C from "../index";
import ConectarButton from "../../utils/conexion_back.jsx";
import { Menu, X, Cpu } from "lucide-react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollTo = (id) => {
    const section = document.getElementById(id);
    if (!section) return;
    section.scrollIntoView({ behavior: "smooth", block: "start" });
    setIsOpen(false);
  };

  const handleNavClick = (link) => {
    if (link.type === "page") {
      navigate(link.path);
      setIsOpen(false);
    } else {
      if (location.pathname !== "/") {
        navigate("/");
        setTimeout(() => handleScrollTo(link.id), 300);
      } else {
        handleScrollTo(link.id);
      }
    }
  };

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-[120] transition-all duration-500 ${
          scrolled || isOpen
            ? "bg-black/80 backdrop-blur-xl py-3 border-b border-white/10"
            : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 lg:px-12">
          <Link to="/" onClick={() => setIsOpen(false)} className="relative z-[130] block group">
            <C.Logo className="w-12 md:w-20 transition-all duration-500 group-hover:scale-105" />
          </Link>

          <button
            className="lg:hidden relative z-[130] p-2 text-white outline-none"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Alternar menú"
          >
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
            {navLinks.map((link, index) => (
              <motion.li key={link.id} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: index * 0.1 }}>
                <button
                  onClick={() => handleNavClick(link)}
                  className="px-5 py-2 text-[10px] font-black uppercase tracking-[0.25em] text-gray-400 hover:text-white transition-all duration-300 relative group"
                >
                  <span className="w-1 h-1 bg-red-600 rounded-full absolute left-1/2 -bottom-1 scale-0 group-hover:scale-100 transition-transform -translate-x-1/2" />
                  {link.label}
                </button>
              </motion.li>
            ))}
            <div className="ml-6">
              <ConectarButton />
            </div>
          </ul>
        </div>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 200 }}
            /* CAMBIO CLAVE: Cambiamos justify-center por items-center con padding y overflow */
            className="fixed inset-0 h-screen w-full bg-black/98 backdrop-blur-3xl lg:hidden z-[110] flex flex-col overflow-y-auto"
          >
            <div className="absolute inset-0 overflow-hidden opacity-20 pointer-events-none">
                <div className="absolute top-1/4 -right-20 w-96 h-96 bg-red-600/20 rounded-full blur-[120px]" />
            </div>

            {/* Contenedor de links con padding superior para no chocar con el Logo/X */}
            <ul className="flex flex-col items-center gap-6 sm:gap-10 relative z-10 py-24 min-h-full justify-center">
              {navLinks.map((link, i) => (
                <motion.li
                  key={link.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.1 }}
                >
                  <button
                    onClick={() => handleNavClick(link)}
                    className="text-3xl sm:text-4xl font-black uppercase italic tracking-tighter text-white hover:text-red-600 transition-colors"
                  >
                    {link.label}
                  </button>
                </motion.li>
              ))}

              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="mt-4 sm:mt-6 scale-110 sm:scale-125"
                onClick={() => setIsOpen(false)}
              >
                <ConectarButton />
              </motion.div>
              
              {/* Espacio extra abajo para que el logo de KUROOBI no tape el botón en pantallas muy bajas */}
              <div className="h-20" /> 
            </ul>

            <div className="absolute bottom-6 w-full flex flex-col items-center gap-2 opacity-30 pointer-events-none">
              <Cpu size={16} className="text-red-600" />
              <span className="text-[8px] font-mono tracking-[0.5em] text-white uppercase">Kuroobi System</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Navbar;