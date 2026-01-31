import { motion } from "framer-motion";
import img from "../../assets/log-sin.png";
import bg from "../../assets/fondo-k.JPG"; 

export default function Inicio() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden"
    >
      {/* 1. FONDO CON EFECTO ZOOM SUAVE */}
      <motion.div 
        initial={{ scale: 1.2 }}
        animate={{ scale: 1 }}
        transition={{ duration: 10, ease: "easeOut" }}
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* 2. OVERLAY DEGRADADO PROFUNDO (Cinematic Look) */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-black via-black/40 to-black" />
      
      {/* 3. CAPA DE RUIDO/TEXTURA (Opcional, da un toque más pro) */}
      <div className="absolute inset-0 z-10 opacity-20 pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

      {/* 4. CONTENIDO CENTRAL */}
      <div className="relative z-20 flex flex-col justify-center items-center">
        
        {/* LOGO CON ANIMACIÓN DE ENTRADA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, filter: "blur(10px)" }}
          animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="relative"
        >
          {/* Brillo detrás del logo */}
          <div className="absolute inset-0 bg-red-600/20 blur-[100px] rounded-full" />
          
          <img
            src={img}
            alt="Logo Kuroobi"
            className="relative z-10 w-full max-w-md sm:max-w-lg md:max-w-2xl object-contain drop-shadow-[0_0_30px_rgba(255,255,255,0.1)]"
          />
        </motion.div>

        {/* INDICADOR DE SCROLL */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-10 flex flex-col items-center gap-2"
        >
          <span className="text-[10px] font-black uppercase tracking-[0.5em] text-gray-500">Scroll</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-red-600 to-transparent" />
        </motion.div>
      </div>

      {/* 5. DECORACIÓN LATERAL TÉCNICA */}
      <div className="absolute left-10 top-1/2 -translate-y-1/2 hidden xl:block z-20">
        <div className="[writing-mode:vertical-lr] text-[10px] font-black uppercase tracking-[1em] text-white/20">
          Kuroobi
        </div>
      </div>
    </section>
  );
}