export default function MapSimple() {
  return (
    <div className="flex-1 w-full min-h-[300px] lg:min-h-auto">
      <iframe
        title="Ubicación Kinesiología Deportiva"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24822.953404554293!2d-68.1050261256836!3d-38.949816999999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x960a339f2f714873%3A0x1d03972d4897412c!2sKinesiolog%C3%ADa%20neuquen!5e0!3m2!1ses-419!2sar!4v1756304413929!5m2!1ses-419!2sar"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="rounded-r-xl"
      ></iframe>
    </div>
  );
}
