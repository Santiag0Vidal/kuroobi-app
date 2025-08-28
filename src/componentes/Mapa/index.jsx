export default function MapSimple() {
  return (
    <div className="flex-1 w-full min-h-[300px] lg:min-h-auto">
      <iframe
        title="Ubicación Kuroobi"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3102.8526151909346!2d-68.08450309999999!3d-38.9501953!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x960a33a4c5b7c873%3A0x274a1593595e3a35!2sCacique%20Catriel%20434%2C%20Q8300%20Neuqu%C3%A9n!5e0!3m2!1ses-419!2sar!4v1756384628927!5m2!1ses-419!2sar"
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
