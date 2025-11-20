const actividades = [
  {
    nombre: "Musculacion",
    descripcionActi: "Entrena fuerza y resistencia muscular con rutinas guiadas por nuestros profesores especializados, previene lesiones con ejercicios adaptados a ti. Ideal para tonificar y aumentar masa muscular.",
    imagenModal: "/Siluetas/musculacion.png",
    planes: [
      {
        nombre: "2 días/semana",
        precio: "$70.000",
        link: "https://mpago.li/29puvRJ",
        descripcion:
          "Incluye 2 sesiones de musculación semanales con entrenamiento personalizado y uso de vestuarios y lockers.",
      },
      {
        nombre: "3 días/semana",
        precio: "$80.000",
        link: "https://mpago.li/29puvRJ",
        descripcion:
          "Incluye 3 sesiones de musculación semanales, con seguimiento de progreso y acceso a todas las máquinas.",
      },
      {
        nombre: "Todos los días",
        precio: "$90.000",
        link: "https://mpago.li/29puvRJ",
        descripcion:
          "Acceso ilimitado al gimnasio y todas las clases grupales de musculación para maximizar resultados.",
      },
    ],
  },
  {
    nombre: "Karate",
    descripcionActi: "Desarrolla disciplina, autocontrol y fortaleza en nuestras clases de karate de adolescentes y adultos. Aprende técnicas de Karate para defensa personal, encuentra tu mayor rendimiento personal tanto en lo físico como mental. \nCambia tu forma de pensar y actuar en la vida.",
    imagenModal: "/Siluetas/karate.png", 
    planes: [
      {
        nombre: "2 días/semana",
        precio: "$55.000",
        link: "https://mpago.li/29puvRJ",
        descripcion:
          "Incluye 2 clases semanales de Karate, perfeccionando golpes, bloqueos y movimientos básicos.",
      },
      {
        nombre: "3 días/semana",
        precio: "$60.000",
        link: "https://mpago.li/29puvRJ",
        descripcion:
          "Incluye 3 clases semanales, entrenamientos avanzados y práctica de katas y técnicas de defensa.",
      },
    ],
  },
  {
    nombre: "Karate Niños",
    descripcionActi: "Descubrí la disciplina, la confianza y la diversión, en nuestras clases de karate para los más chicos, fomentando valores y habilidades motrices como coordinación y destreza.",
    imagenModal: "/Siluetas/karateninios.png",
    planes: [
      {
        nombre: "2 días/semana",
        precio: "$55.000",
        link: "https://mpago.li/29puvRJ",
        descripcion:
          "2 clases semanales enfocadas en habilidades básicas de Karate, juego y desarrollo físico.",
      },
      {
        nombre: "3 días/semana",
        precio: "$60.000",
        link: "https://mpago.li/29puvRJ",
        descripcion:
          "3 clases semanales con técnicas adaptadas a niños y actividades lúdicas de aprendizaje.",
      },
    ],
  },
  {
    nombre: "GAP",
    descripcionActi: "(Glúteos, abdomen y piernas) \nTonifica y fortalece glúteos, abdomen y piernas con nuestras clases guiadas y específicas, con resultados visibles.",
    imagenModal: "/Siluetas/GAP.png",
    planes: [
      {
        nombre: "2 días/semana",
        precio: "$55.000",
        link: "https://mpago.li/29puvRJ",
        descripcion:
          "2 clases semanales de GAP, enfocadas en tonificación de glúteos, abdomen y piernas.",
      },
      {
        nombre: "3 días/semana",
        precio: "$60.000",
        link: "https://mpago.li/29puvRJ",
        descripcion:
          "3 clases semanales, combinando ejercicios de fuerza y resistencia para tonificar el cuerpo inferior.",
      },
    ],
  },
  {
    nombre: "Funcional",
    descripcionActi: "Entrenamiento integral con ejercicios que te preparan para la vida diaria, mejorando la fuerza, resistencia y coordinación.",
    imagenModal: "/Siluetas/funcional.png", 
    planes: [
      {
        nombre: "2 días/semana",
        precio: "$55.000",
        link: "https://mpago.li/29puvRJ",
        descripcion:
          "2 clases semanales de entrenamiento funcional, incluyendo ejercicios de peso corporal y accesorios.",
      },
      {
        nombre: "3 días/semana",
        precio: "$60.000",
        link: "https://mpago.li/29puvRJ",
        descripcion:
          "3 sesiones semanales de alta intensidad, con circuitos para fuerza, agilidad y resistencia.",
      },
    ],
  },
  {
    nombre: "Stretching",
    descripcionActi: "Aliviana tensiones, y mejora tu movilidad con nuestras clases de streching con  Rutinas de estiramiento para mejorar flexibilidad, postura y recuperación muscular, perfectas para complementar cualquier actividad.",
    imagenModal: "/Siluetas/STRETCHING.png",
    planes: [
      {
        nombre: "2 días/semana",
        precio: "$55.000",
        link: "https://mpago.li/29puvRJ",
        descripcion:
          "2 clases semanales de estiramiento guiado, enfocadas en mejorar la flexibilidad y relajación muscular.",
      },
      {
        nombre: "3 días/semana",
        precio: "$60.000",
        link: "https://mpago.li/29puvRJ",
        descripcion:
          "3 clases semanales combinando técnicas de estiramiento y respiración para bienestar general.",
      },
    ],
  },
  {
    nombre: "Yoga",
    descripcionActi: "Equilibrio, cuerpo y mente con nuestras clases de Yoga, ideales para reducir el estrés, mejorar flexibilidad, fuerza y respiración. ",
    imagenModal: "/Siluetas/yoga.png", 
    planes: [
      {
        nombre: "2 días/semana",
        precio: "$55.000",
        link: "Siluetas/yoga.png",
        descripcion:
          "2 clases semanales de Yoga, enfocadas en posturas básicas, respiración y relajación.",
      },
      {
        nombre: "3 días/semana",
        precio: "$60.000",
        link: "https://mpago.li/29puvRJ",
        descripcion:
          "3 clases semanales con posturas intermedias y técnicas de meditación guiada.",
      },
    ],
  },
  {
    nombre: "Indoor",
    descripcionActi: "Activa tu energía, con nuestras clases de indoor Cycling, un entrenamiento dinámico y divertido para mejorar resistencia cardiovascular y quema de calorías.",
    imagenModal: "/Siluetas/indoor.png", 
    planes: [
      {
        nombre: "2 días/semana",
        precio: "$55.000",
        link: "https://mpago.li/29puvRJ",
        descripcion:
          "2 clases semanales de Indoor Cycling, combinando ritmo y resistencia en bicicleta estática.",
      },
      {
        nombre: "3 días/semana",
        precio: "$60.000",
        link: "https://mpago.li/29puvRJ",
        descripcion:
          "3 clases semanales de intensidad moderada a alta, con entrenamiento cardiovascular completo.",
      },
    ],
  },
  {
    nombre: "Full",
    descripcionActi: "Disfruta de acceso ilimitado a todas nuestras actividades, incluyendo musculación todos los días, para lograr una experiencia integral y completa.",
      imagenModal: "/Siluetas/fullpass.png", 
    planes: [
      {
        nombre: "Full pass",
        precio: "$140.000",
        link: "https://mpago.li/29puvRJ",
        descripcion:
          "Acceso a todas las disciplicas que brinda el gym",
      },
    ],
  },
];

export default actividades;