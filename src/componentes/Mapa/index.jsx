import React from "react";

const Mapa = () => {
  const mapUrl =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3103.116667520473!2d-68.0829871!3d-38.9442004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x960a33cd426027c3%3A0xc38ba79948067b5e!2sCacique%20Catriel%20434%2C%20Q8300%20Neuqu%C3%A9n!5e0!3m2!1ses-419!2sar!4v1700000000000!5m2!1ses-419!2sar";

  return (
    <div className="relative w-full h-full bg-[#0a0a0a]">
      {/* MAPA */}
      <iframe
        src={mapUrl}
        className="
          w-full h-full border-0
          grayscale invert contrast-125
          pointer-events-none md:pointer-events-auto
        "
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Ubicación Kuroobi"
      />

      {/* BOTÓN ABRIR GPS */}
      <div className="absolute bottom-4 right-4 z-20">
        <a
          href="https://maps.app.goo.gl/uXpM9kSAtn7tP2sU7"
          target="_blank"
          rel="noopener noreferrer"
          className="
            bg-red-600 hover:bg-red-700 text-white
            px-4 py-2 rounded-full
            text-[10px] font-black uppercase tracking-widest
            shadow-xl flex items-center gap-2
            transition-transform active:scale-95
          "
        >
          Abrir GPS
        </a>
      </div>
    </div>
  );
};

export default Mapa;
