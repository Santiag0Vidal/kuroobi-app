import { useEffect } from "react";
import { motion } from "framer-motion";
import { 
  Activity, 
  BrainCircuit, 
  ClipboardList, 
  Dumbbell, 
  TrendingUp, 
  Target, 
  CheckCircle2,
  Microscope,
  Zap,
  HeartPulse,
  Crosshair
} from "lucide-react";

// TU NÚMERO DE WHATSAPP
const whatsappNumber = "542996055279";

// IMÁGENES
const imgIdentity = "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1000&auto=format&fit=crop"; 

// Imágenes de Galería (Tus rutas locales)
const equipo1 = "/lab/lab1.jpeg";
const equipo2 = "/lab/lab2.jpeg";
const equipo3 = "/lab/lab3.jpg";
const equipo4 = "/lab/lab1.jpeg";
const imagenesGaleria = [equipo1, equipo2, equipo3, equipo4];

// --- DATOS ---

// 1. EL PROCESO
const steps = [
  {
    id: "01",
    title: "PLANIFICAR",
    subtitle: "Diseñar antes de ejecutar",
    desc: "Evaluamos a la persona. Analizamos biomecánica, historial y objetivos. Nada se deja al azar.",
    icon: <ClipboardList className="w-8 h-8 text-amber-400" />
  },
  {
    id: "02",
    title: "PREPARAR",
    subtitle: "Estrategia personalizada",
    desc: "Marcamos puntos débiles y riesgos de lesión. Armamos una rutina 100% adaptada a tus necesidades.",
    icon: <BrainCircuit className="w-8 h-8 text-red-500" />
  },
  {
    id: "03",
    title: "EJECUTAR",
    subtitle: "Acompañamiento Integral",
    desc: "Avanzamos paso a paso. Monitoreo constante con datos científicos para ajustar la carga en tiempo real.",
    icon: <TrendingUp className="w-8 h-8 text-white" />
  }
];

// 2. APLICACIONES GENERALES
const applications = [
  "Detección de asimetrías musculares",
  "Prevención de lesiones (ACL, Desgarros)",
  "Rehabilitación post-quirúrgica (RTP)",
  "Optimización de la pisada (Running/Fútbol)",
  "Análisis de fuerza y potencia",
  "Mejora del gesto técnico (Golf/Tenis)"
];

// 3. ARSENAL (TÉCNICAS)
const tecnicas = [
  "Osteopatía", "Taping Neuromuscular", "Kinesiología Funcional", 
  "Hidroterapia", "R.P.G.", "Rehabilitación en Campo", "Ondas de Choque"
];

// 4. FOCO (LESIONES ESPECÍFICAS)
const lesiones = [
  "Desgarros y distensiones", "Tendinopatías", "Pubalgias", 
  "Post-quirúrgicos", "Hombro doloroso", "Esguinces"
];

// ANIMACIONES
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};
const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

export default function KuroobiLab() {
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-red-600 selection:text-white">
      
      {/* =========================================
          1. HERO SECTION (VIDEO)
      ========================================= */}
      <section className="relative h-screen w-full flex flex-col justify-center items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/60 z-10"></div>
          <video 
            autoPlay loop muted playsInline
            className="w-full h-full object-cover"
            src="https://cdn.pixabay.com/video/2020/05/25/40103-426961131_large.mp4" 
          ></video>
        </div>

        <div className="relative z-20 text-center px-6 max-w-5xl space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-xl md:text-3xl font-light tracking-[0.3em] uppercase text-amber-400 mb-6">
              Todo lo que se puede medir
              <br className="md:hidden"/> <span className="font-bold text-white">se puede mejorar</span>
            </h2>
            <h1 className="text-6xl md:text-9xl font-black tracking-tighter text-white leading-none">
              KURO<span className="text-red-600">OBI</span> <span className="text-amber-400">LAB</span>
            </h1>
          </motion.div>

          <motion.div
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             transition={{ delay: 0.5, duration: 0.8 }}
             className="flex flex-wrap justify-center gap-4 text-xs md:text-sm font-bold tracking-widest text-gray-400 uppercase mt-8"
          >
             <span>Fútbol</span> • <span>Running</span> • <span>Ciclismo</span> • <span>Tenis</span> • <span>Básquet</span> • <span>Golf</span>
          </motion.div>
        </div>

        <motion.div 
          animate={{ y: [0, 10, 0] }} 
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 text-white/50"
        >
          <div className="w-[1px] h-16 bg-gradient-to-b from-transparent via-amber-400 to-transparent"></div>
        </motion.div>
      </section>

      {/* =========================================
          2. IDENTIDAD
      ========================================= */}
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <div className="space-y-6">
          <div className="inline-block border-l-4 border-red-600 pl-4">
             <h3 className="text-amber-400 font-bold tracking-widest text-sm uppercase mb-2">Identidad</h3>
             <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
               Plataforma de <br/>Inteligencia Integral
             </h2>
          </div>
          <p className="text-gray-400 text-lg leading-relaxed font-light">
            En <strong>Kuro Obi Lab</strong> fusionamos datos científicos con la práctica deportiva real. 
            Nacimos para acompañar al <span className="text-white font-medium">deportista neuquino</span> en su camino hacia la excelencia.
          </p>
          <p className="text-gray-400 text-lg leading-relaxed font-light">
            No somos solo un gimnasio, somos un centro de bio-ingeniería donde decodificamos tu movimiento
            para potenciar tu rendimiento y blindar tu cuerpo contra lesiones.
          </p>
        </div>
        
        <div className="relative">
           <div className="absolute -top-4 -left-4 w-full h-full border border-amber-400/20 rounded-sm"></div>
           <div className="absolute -bottom-4 -right-4 w-full h-full border border-red-600/20 rounded-sm"></div>
           <img 
             src={imgIdentity} 
             alt="Deportista Kuroobi" 
             className="relative z-10 w-full h-auto object-cover grayscale hover:grayscale-0 transition-all duration-700 shadow-2xl"
           />
        </div>
      </section>

      {/* =========================================
          3. EL PROCESO
      ========================================= */}
      <section className="bg-[#0a0a0a] py-24 px-6 border-y border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">La Profesionalización del Deportista</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">Un proceso metódico diseñado para transformar datos en resultados tangibles.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 relative">
            <div className="hidden md:block absolute top-12 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent z-0"></div>

            {steps.map((step, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="relative z-10 bg-[#111] border border-white/10 p-8 rounded-2xl hover:border-amber-400/50 transition-colors group"
              >
                <div className="flex justify-between items-start mb-6">
                   <div className="bg-white/5 p-4 rounded-full group-hover:bg-amber-400/10 transition-colors">
                     {step.icon}
                   </div>
                   <span className="text-4xl font-black text-white/10 select-none">{step.id}</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">{step.title}</h3>
                <h4 className="text-sm text-amber-400 font-bold uppercase tracking-wider mb-4">{step.subtitle}</h4>
                <p className="text-gray-400 leading-relaxed text-sm">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================
          4. APLICACIONES GENERALES
      ========================================= */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Visual abstracta */}
          <div className="relative order-2 lg:order-1 h-full min-h-[400px] bg-gradient-to-br from-gray-900 to-black rounded-3xl p-8 border border-white/10 flex items-center justify-center overflow-hidden">
             <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-red-600 via-transparent to-transparent"></div>
             <Activity className="w-64 h-64 text-white/5 animate-pulse" />
             <div className="absolute z-10 text-center">
                <Dumbbell className="w-16 h-16 text-amber-400 mx-auto mb-4" />
                <h4 className="text-2xl font-bold text-white">High Performance</h4>
                <p className="text-xs text-gray-500 mt-2 uppercase tracking-wider">Metrics & Analytics</p>
             </div>
          </div>

          {/* Lista de Aplicaciones */}
          <div className="order-1 lg:order-2 space-y-8">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold mb-4">
                Aplicaciones de la <span className="text-red-600">Plataforma</span>
              </h2>
              <p className="text-gray-400 text-lg">
                Tecnología aplicada para resolver problemas reales del deporte. 
                No importa si eres amateur o profesional, los datos no mienten.
              </p>
            </div>

            <ul className="grid gap-3 mt-6">
              {applications.map((app, i) => (
                <motion.li 
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors"
                >
                  <CheckCircle2 className="w-5 h-5 text-amber-400 flex-shrink-0" />
                  <span className="text-gray-200 font-medium">{app}</span>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* =========================================
          5. ARSENAL Y FOCO CLÍNICO
          (Diferenciamos visualmente esta sección con un fondo ligeramente distinto)
      ========================================= */}
      <section className="py-24 px-6 bg-[#080808] border-t border-white/5">
        <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-white">Abordaje Clínico y Terapéutico</h2>
                <p className="text-gray-500 mt-4">Nuestras herramientas y los casos que tratamos con éxito.</p>
            </div>

            <motion.div 
              initial="hidden" 
              whileInView="visible" 
              viewport={{ once: true }} 
              variants={containerVariants}
              className="grid md:grid-cols-2 gap-8"
            >
              {/* Columna Izquierda: Arsenal */}
              <motion.div variants={itemVariants} className="bg-[#111] p-8 md:p-10 rounded-3xl border-l-4 border-amber-400 shadow-2xl group hover:bg-[#161616] transition-colors">
                <div className="flex items-center gap-4 mb-8">
                  <div className="bg-amber-400/10 p-3 rounded-xl text-amber-400">
                      <Zap className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Arsenal Terapéutico</h3>
                </div>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-6">
                  {tecnicas.map((tech, i) => (
                    <li key={i} className="flex items-center gap-3 text-gray-300 text-sm">
                      <span className="w-1.5 h-1.5 bg-amber-400 rounded-full"></span>
                      {tech}
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Columna Derecha: Foco de Acción */}
              <motion.div variants={itemVariants} className="bg-[#111] p-8 md:p-10 rounded-3xl border-r-4 border-red-600 shadow-2xl group hover:bg-[#161616] transition-colors text-right md:text-left">
                <div className="flex items-center gap-4 mb-8 justify-end md:justify-start">
                  <h3 className="text-2xl font-bold text-white">Foco de Acción</h3>
                  <div className="bg-red-900/20 p-3 rounded-xl text-red-600">
                      <HeartPulse className="w-8 h-8" />
                  </div>
                </div>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-6">
                  {lesiones.map((lesion, i) => (
                    <li key={i} className="flex items-center gap-3 text-gray-300 text-sm justify-end md:justify-start">
                      <Crosshair className="w-1.5 h-1.5 text-red-600 flex-shrink-0 order-2 md:order-1" /> {/* Icono cambia de lado en móvil según alineación */}
                      <span className="order-1 md:order-2">{lesion}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>
        </div>
      </section>

      {/* =========================================
          6. TECNOLOGÍA DE MEDICIÓN
      ========================================= */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="bg-[#0f0f0f] p-8 md:p-16 rounded-[2.5rem] border border-white/5 relative overflow-hidden">
          
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-amber-400/5 rounded-full blur-[100px] pointer-events-none"></div>
          
          <div className="text-center mb-16 relative z-10">
            <div className="inline-flex items-center justify-center p-4 bg-amber-400/10 rounded-full mb-6">
                <Microscope className="text-amber-400 w-10 h-10"/> 
            </div>
            <h3 className="text-3xl md:text-5xl font-bold text-white mb-4">Tecnología de Medición</h3>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg font-light">
              Dispositivos de alta precisión para cuantificar tu progreso.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 relative z-10">
            {imagenesGaleria.map((img, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative aspect-square rounded-2xl overflow-hidden border border-white/10 cursor-pointer shadow-lg bg-black"
              >
                <img 
                  src={img} 
                  alt={`Equipo ${index + 1}`} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-amber-400 font-bold border border-amber-400 px-4 py-2 text-sm rounded-full tracking-widest uppercase hover:bg-amber-400 hover:text-black transition-colors">
                    Ver Equipo
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================
          7. CONTACTO (VERDE WHATSAPP)
      ========================================= */}
      <section className="py-20 px-6 bg-gradient-to-t from-green-900/10 to-transparent border-t border-white/5 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          <Target className="w-16 h-16 text-red-600 mx-auto" />
          
          <h2 className="text-4xl md:text-6xl font-bold text-white">
            ¿Listo para medir tu potencial?
          </h2>
          
          <p className="text-xl text-gray-300 font-light max-w-2xl mx-auto">
            Agenda tu evaluación hoy. Descubre tus métricas, corrige asimetrías y lleva tu rendimiento al siguiente nivel.
          </p>

          <div className="pt-8">
            <a 
              href={`https://wa.me/${whatsappNumber}`} 
              target="_blank" 
              rel="noreferrer"
              className="inline-flex items-center gap-3 bg-green-500 text-white text-lg font-bold py-5 px-10 rounded-full hover:bg-green-400 transition-all duration-300 shadow-[0_0_30px_rgba(34,197,94,0.3)] hover:shadow-[0_0_50px_rgba(34,197,94,0.5)] hover:scale-105"
            >
              {/* ICONO SVG DE WHATSAPP */}
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.008-.57-.008-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              SOLICITAR MÁS INFORMACIÓN
            </a>
            <p className="mt-4 text-sm text-gray-500 uppercase tracking-widest">
              Neuquén Capital
            </p>
          </div>
        </div>
      </section>

    </div>
  );
}