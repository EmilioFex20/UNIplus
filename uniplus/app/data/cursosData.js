export const cursosData = [
  {
    nombre: "Desarrollo Personal",
    descripcion:
      "Explora el crecimiento personal a través de la autoconciencia, la gestión emocional y el desarrollo de habilidades para una vida plena.",
    imagen: "/logoDesarrolloPersonal.svg",
    posicion: "left-[10%] top-[25%]",
    modulos: [
      {
        nombre: "Autoconocimiento y autoestima",
        descripcion:
          "Aprende a identificar tus fortalezas, valores y emociones para desarrollar una autoestima saludable.",
      },
      {
        nombre: "Gestión del tiempo",
        descripcion:
          "Organiza tu día a día con técnicas de productividad que te ayudarán a lograr tus objetivos personales.",
      },
      {
        nombre: "Establecimiento de metas",
        descripcion:
          "Define y alcanza metas significativas con métodos prácticos y motivadores.",
      },
    ],
  },
  {
    nombre: "Finanzas Personales",
    descripcion:
      "Aprende a manejar tu dinero de forma inteligente, comprende conceptos económicos básicos y toma decisiones financieras acertadas.",
    imagen: "/logoFinanzasPersonales.svg",
    posicion: "left-[28%] top-[12%]",
    modulos: [
      {
        nombre: "¿Qué es el dinero y por qué importa?",
        descripcion:
          "Descubre el origen y la importancia del dinero en tu vida diaria.",
        lecciones: [
          {
            nombre: "Lección 1: Definición y origen del dinero",
            contenido: [
              {
                tipo: "section",
                titulo: "¿Qué es el dinero?",
                texto:
                  "El dinero es un sistema de valor aceptado por una comunidad para facilitar el intercambio de bienes y servicios, reduciendo los costos y las limitaciones del trueque (Understanding Money: Its Properties, Types, and Uses - Investopedia).",
              },
              {
                tipo: "section",
                titulo: "Breve evolución histórica",
              },
              {
                tipo: "list",
                items: [
                  "Trueque: intercambio directo de bienes.",
                  "Dinero mercancía: bienes con valor intrínseco.",
                  "Primeras monedas: acuñadas en Lidia.",
                  "Papel moneda: China, siglo XII.",
                  "Dinero moderno: fiduciario y digital.",
                ],
              },
              {
                tipo: "video",
                src: "hhttps://www.youtube.com/watch?v=nr98h2RH_8E",
              },
              {
                tipo: "infografia",
                src: "/infografias/EconomíaRecurso4Modulo1.png",
                alt: "Infografía sobre la evolución del dinero",
              },
            ],
          },
          {
            nombre: "Lección 2: Funciones del dinero",
            contenido: [
              {
                tipo: "section",
                titulo: "El dinero cumple cuatro funciones principales (Functions of Money - Overview, Medium of Exchange):",
              },
              {
                tipo: "list",
                items: [
                  "Medio de intercambio: Permite comprar y vender sin trueque.",
                  "Unidad de cuenta: Norma para medir y comparar valores.",
                  "Depósito de valor: Conserva poder adquisitivo en el tiempo.",
                  "Estándar de pago diferido: Permite acuerdos de pago futuro (préstamos, hipotecas).",
                ],
              },
              {
                tipo: "video",
                src: "https://www.youtube.com/watch?v=bIkgITyu7gk",
              },
              {
                tipo: "infografia",
                src: "/infografias/EconomíaRecurso3Modulo1.png",
                alt: "Infografía las funciones del dinero",
              },
            ],
          },
          {
            nombre: "Lección 3: Características del “buen” dinero",
            contenido: [
              {
                tipo: "section",
                titulo: "Para funcionar bien, el dinero debe tener estas seis cualidades (Functions of Money - The Economic Lowdown Podcast Series):",
              },
              {
                tipo: "list",
                items: [
                  "Durabilidad: resiste desgaste.",
                  "Portabilidad: fácil de transportar.",
                  "Divisibilidad: puede fraccionarse en unidades más pequeñas.",
                  "Uniformidad: cada unidad es idéntica a otra.",
                  "Escasez: oferta limitada para mantener valor.",
                  "Aceptabilidad: aceptado por todos en la economía.",
                ],
              },
              {
                tipo: "gif",
                src: "/gifs/EconomíaRecurso5Modulo1.gif",
                alt: "Características del “buen” dinero",
              },
              {
                tipo: "gif",
                src: "/gifs/EconomíaRecurso5Modulo1(1).gif",
                alt: "Características del “buen” dinero",
              }
            ],
          },
          {
            nombre: "Juego 1: Evolución del dinero",
            contenido: [
              {
                tipo: "section",
                titulo: "Evolución del dinero",
                texto: "En este juego, aprenderás sobre la evolución del dinero a través de diferentes eras y cómo ha cambiado su forma y función.",
              },
            ],
          },
          {
            nombre: "Ejercicio práctico",
            contenido: [
              {
                tipo: "section",
                titulo: "Ejercicio práctico",
                texto: "Reflexiona sobre cómo el dinero ha influido en tu vida y cómo lo usas en tu día a día. Y no te preocupes, ¡no es un examen!",
              },
              {
                tipo: "examen"
              }
            ],
          },
        ],
      },
      {
        nombre: "Oferta, demanda y cómo se forman los precios",
        descripcion:
          "Comprende cómo interactúan la oferta y la demanda en el mercado para formar precios.",
        lecciones: [
          {
            nombre: "Lección 1: Definición y origen del dinero",
            contenido: [
              {
                tipo: "section",
                titulo: "¿Qué es el dinero?",
                texto:
                  "El dinero es un sistema de valor aceptado por una comunidad...",
              },
              {
                tipo: "section",
                titulo: "Breve evolución histórica",
              },
              {
                tipo: "list",
                items: [
                  "Trueque: intercambio directo de bienes.",
                  "Dinero mercancía: bienes con valor intrínseco.",
                  "Primeras monedas: acuñadas en Lidia.",
                  "Papel moneda: China, siglo XII.",
                  "Dinero moderno: fiduciario y digital.",
                ],
              },
            ],
          },
          {
            nombre: "Lección 2: Funciones del dinero",
            contenido: [
              {
                tipo: "section",
                titulo: "¿Cuáles son las funciones del dinero?",
                texto: "Sirve como medio de intercambio, unidad de cuenta...",
              },
              {
                tipo: "list",
                items: [
                  "Medio de intercambio",
                  "Unidad de cuenta",
                  "Depósito de valor",
                  "Estándar de pago diferido",
                ],
              },
            ],
          },
          {
            nombre: "Lección 3: Características del “buen” dinero",
            contenido: [
              {
                tipo: "section",
                titulo: "¿Qué hace que el dinero sea confiable?",
                texto:
                  "Debe ser duradero, divisible, portátil y aceptado por todos.",
              },
            ],
          },
          {
            nombre: "Ejercicio práctico",
            contenido: [
              {
                tipo: "section",
                titulo: "Ejercicio práctico",
                texto: "Reflexiona sobre cómo el dinero ha influido en tu vida y cómo lo usas en tu día a día. Y no te preocupes, ¡no es un examen!",
              },
              {
                tipo: "examen"
              }
            ],
          },
        ],
      },
      {
        nombre: "Introducción a la macroeconomía",
        descripcion:
          "Explora los conceptos clave de la macroeconomía y su impacto en tus finanzas.",
        lecciones: [
          {
            nombre: "Lección 1: Definición y origen del dinero",
            contenido: [
              {
                tipo: "section",
                titulo: "¿Qué es el dinero?",
                texto:
                  "El dinero es un sistema de valor aceptado por una comunidad...",
              },
              {
                tipo: "section",
                titulo: "Breve evolución histórica",
              },
              {
                tipo: "list",
                items: [
                  "Trueque: intercambio directo de bienes.",
                  "Dinero mercancía: bienes con valor intrínseco.",
                  "Primeras monedas: acuñadas en Lidia.",
                  "Papel moneda: China, siglo XII.",
                  "Dinero moderno: fiduciario y digital.",
                ],
              },
            ],
          },
          {
            nombre: "Lección 2: Funciones del dinero",
            contenido: [
              {
                tipo: "section",
                titulo: "¿Cuáles son las funciones del dinero?",
                texto: "Sirve como medio de intercambio, unidad de cuenta...",
              },
              {
                tipo: "list",
                items: [
                  "Medio de intercambio",
                  "Unidad de cuenta",
                  "Depósito de valor",
                  "Estándar de pago diferido",
                ],
              },
            ],
          },
          {
            nombre: "Lección 3: Características del “buen” dinero",
            contenido: [
              {
                tipo: "section",
                titulo: "¿Qué hace que el dinero sea confiable?",
                texto:
                  "Debe ser duradero, divisible, portátil y aceptado por todos.",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    nombre: "Tecnología Básica",
    descripcion:
      "Domina las herramientas esenciales de la era digital, desde el uso de computadoras hasta la navegación segura por Internet.",
    imagen: "/logoTecnolBasica.svg",
    posicion: "left-[40%] top-[20%]",
    modulos: [
      {
        nombre: "Fundamentos de computación",
        descripcion:
          "Aprende sobre hardware, software y cómo funcionan los sistemas informáticos.",
      },
      {
        nombre: "Internet y seguridad digital",
        descripcion:
          "Navega con seguridad y aprende a proteger tu información personal en línea.",
      },
      {
        nombre: "Ofimática básica",
        descripcion:
          "Conoce herramientas como Word, Excel y PowerPoint para usarlas eficazmente.",
      },
    ],
  },
  {
    nombre: "Creatividad y Habilidades",
    descripcion:
      "Desarrolla tu creatividad y fortalece habilidades blandas como el pensamiento crítico, trabajo en equipo y resolución de problemas.",
    imagen: "/logoArte.svg",
    posicion: "left-[60%] top-[29%]",
    modulos: [
      {
        nombre: "Pensamiento creativo",
        descripcion:
          "Fomenta tu imaginación y aprende técnicas para generar ideas innovadoras.",
      },
      {
        nombre: "Resolución de problemas",
        descripcion:
          "Aprende a analizar y enfrentar desafíos con lógica y creatividad.",
      },
      {
        nombre: "Trabajo en equipo",
        descripcion:
          "Descubre cómo colaborar eficazmente con otros para alcanzar objetivos comunes.",
      },
    ],
  },
  {
    nombre: "Bienestar y Salud",
    descripcion:
      "Mejora tu calidad de vida con hábitos saludables, manejo del estrés y cuidados físicos y mentales fundamentales.",
    imagen: "/logoBienestarSalud.svg",
    posicion: "left-[75%] top-[30%]",
    modulos: [
      {
        nombre: "Salud física y mental",
        descripcion:
          "Conoce los pilares para mantener un cuerpo y mente saludables.",
      },
      {
        nombre: "Hábitos saludables",
        descripcion:
          "Establece rutinas positivas que favorezcan tu bienestar diario.",
      },
      {
        nombre: "Manejo del estrés",
        descripcion:
          "Identifica fuentes de estrés y aprende técnicas para afrontarlo de manera saludable.",
      },
    ],
  },
  {
    nombre: "Emprendimiento y Negocios",
    descripcion:
      "Conoce los fundamentos del emprendimiento y aprende a construir, modelar y promover un negocio propio desde cero.",
    imagen: "/logoEmprenNegocios.svg",
    posicion: "left-[90%] top-[28%]",
    modulos: [
      {
        nombre: "Introducción al emprendimiento",
        descripcion:
          "Descubre qué implica emprender y cómo transformar una idea en acción.",
      },
      {
        nombre: "Modelo de negocio",
        descripcion:
          "Aprende a estructurar y validar un modelo de negocio sostenible.",
      },
      {
        nombre: "Marketing básico",
        descripcion:
          "Conoce estrategias clave para dar a conocer y posicionar tu producto o servicio.",
      },
    ],
  },
];
