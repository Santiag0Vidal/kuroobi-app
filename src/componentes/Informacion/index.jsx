// InfoGimnasio.jsx
import { FaClock, FaDumbbell, FaShower, FaUsers, FaChild, FaCertificate } from "react-icons/fa";
import * as C from '../../componentes/index';
import { motion } from "framer-motion"; // 🚨 Importamos motion 🚨
import { useRef } from "react";

// Datos de las tarjetas
const infoItems = [
    { icon: FaClock, title: "Horario", description: "Lunes a Viernes de 7 a 22 hs" },
    { icon: FaDumbbell, title: "Planes", description: "2 veces por semana, 3 veces por semana o todos los días" },
    { icon: FaUsers, title: "Profesores", description: "En todos los horarios para guiarte y corregirte técnicamente 🏋️‍♀️🤝" },
    { icon: FaShower, title: "Servicios", description: "Duchas, vestuarios completos y lockers 🔐 para guardar tus cosas" },
    { icon: FaCertificate, title: "Clases Grupales", description: "G.A.P, Indoor, Funcional, Yoga, Stretching y Karate" },
    { icon: FaChild, title: "Descuentos", description: "Plan familiar desde 3 personas 🧑‍🧑‍🧒 y abonos por 6 meses" },
];

// 🚨 1. Definición de Variantes para Contenedor y Tarjetas 🚨
const containerVariants = {
    // Hidden: estado inicial antes de entrar al viewport
    hidden: { opacity: 0 },
    // Visible: estado final cuando se muestra el componente
    visible: {
        opacity: 1,
        // Staggering: Retraso de 0.1s entre la aparición de cada hijo (tarjeta)
        transition: {
            staggerChildren: 0.1, 
        },
    },
};

const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            type: "spring",
            stiffness: 100,
        },
    },
};

export default function InfoGimnasio() {
  const ref = useRef(null);
  
  return (
    <section ref={ref}>
      <C.TituloSeccion texto="INFORMACION"/>
      
      {/* 🚨 2. Aplicamos motion.div al contenedor principal del grid 🚨 */}
      <motion.div
        className="grid md:grid-cols-2 gap-8 max-w-4xl w-full mt-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible" // Se activa cuando el elemento entra en la vista
        viewport={{ once: true, amount: 0.3 }} // Solo anima una vez y cuando 30% está visible
      >
        {infoItems.map((item, index) => (
            // 🚨 3. Aplicamos motion.div a cada tarjeta 🚨
            <motion.div 
                key={index} 
                variants={itemVariants} // Hereda las variantes del contenedor
                className="flex flex-col items-center bg-[var(--c-primary)] p-6 rounded-xl shadow-lg text-[var(--c-graylite)]"
            >
                <item.icon size={40} className="mb-3 text-yellow-300" />
                <h3 className="text-2xl font-semibold mb-2">{item.title}</h3>
                <p>{item.description}</p>
            </motion.div>
        ))}
      </motion.div>
    </section>
  );
}