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
        lecciones: [
          {
            nombre: "Lecciones Por definir",
            contenido: [
              {
                tipo: "section",
                titulo: "Contenido por definir",
              },
            ],
          },
        ],
      },
      {
        nombre: "Gestión del tiempo",
        descripcion:
          "Organiza tu día a día con técnicas de productividad que te ayudarán a lograr tus objetivos personales.",
          lecciones: [
            {
              nombre: "Lecciones Por definir",
              contenido: [
                {
                  tipo: "section",
                  titulo: "Contenido por definir",
                },
              ],
            },
          ],
      },
      {
        nombre: "Establecimiento de metas",
        descripcion:
          "Define y alcanza metas significativas con métodos prácticos y motivadores.",
          lecciones: [
            {
              nombre: "Lecciones Por definir",
              contenido: [
                {
                  tipo: "section",
                  titulo: "Contenido por definir",
                },
              ],
            },
          ],
      },
    ],
  },
  {
    nombre: "Economía",
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
                titulo:
                  "El dinero cumple cuatro funciones principales (Functions of Money - Overview, Medium of Exchange):",
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
                titulo:
                  "Para funcionar bien, el dinero debe tener estas seis cualidades (Functions of Money - The Economic Lowdown Podcast Series):",
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
              },
            ],
          },
          {
            nombre: "Juego 1: Evolución del dinero",
            contenido: [
              {
                tipo: "section",
                titulo: "Evolución del dinero",
                texto:
                  "En este juego, aprenderás sobre la evolución del dinero a través de diferentes eras y cómo ha cambiado su forma y función.",
              },
            ],
          },
          {
            nombre: "Ejercicio práctico",
            contenido: [
              {
                tipo: "section",
                titulo: "Ejercicio práctico",
                texto:
                  "Reflexiona sobre cómo el dinero ha influido en tu vida y cómo lo usas en tu día a día. Y no te preocupes, ¡no es un examen!",
              },
              {
                tipo: "examen",
              },
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
            nombre: "Lección 1: ¿Qué es la demanda?",
            contenido: [
              {
                tipo: "section",
                titulo: "¿Qué es la demanda?",
                texto:
                  "La demanda es la cantidad de un bien o servicio que los consumidores están dispuestos y pueden comprar a distintos precios, en un período determinado. A precios más bajos, la demanda tiende a aumentar; a precios más altos, a disminuir (How It Works Plus Economic Determinants and the Demand Curve, What Is the Law of Demand in Economics, and How Does It Work?).",
              },
              {
                tipo: "section",
                titulo: "Ley de la demanda",
                text: '“A mayor precio, menor cantidad demandada; a menor precio, mayor cantidad demandada."Se basa en la utilidad marginal decreciente: cada unidad adicional aporta menos satisfacción, por lo que los consumidores compran menos si el precio sube (What Is the Law of Demand in Economics, and How Does It Work?).',
              },
              {
                tipo: "section",
                titulo: "Determinantes de la demanda (aparte del precio)",
              },
              {
                tipo: "list",
                items: [
                  "Ingreso del consumidor",
                  "Gustos y preferencias",
                  "Precios de bienes sustitutivos y complementarios",
                  "Expectativas de precios futuros",
                  "Tamaño y composición de la población",
                ],
              },
              {
                tipo: "video",
                src: "https://www.youtube.com/watch?v=biAStThvUQE",
              },
            ],
          },
          {
            nombre: "Lección 2: ¿Qué es la oferta?",
            contenido: [
              {
                tipo: "section",
                titulo: "Definición",
                texto:
                  "La oferta es la cantidad de un bien o servicio que los productores están dispuestos y pueden vender a distintos precios, en un período determinado. A precios más altos, la oferta tiende a aumentar; a precios más bajos, a disminuir (Law of Supply and Demand in Economics: How It Works).",
              },
              {
                tipo: "section",
                titulo: "Ley de la oferta",
                texto:
                  "“A mayor precio, mayor cantidad ofrecida; a menor precio, menor cantidad ofrecida.”Los productores maximizan beneficios, por eso ofrecen más cuando el precio sube (Law of Supply Explained, With the Curve, Types, and Examples).",
              },
              {
                tipo: "list",
                items: [
                  "Costos de producción (materias primas, salarios)",
                  "Tecnología y productividad",
                  "Impuestos y subsidios",
                  "Expectativas de precio futuro",
                  "Número de vendedores en el mercado",
                ],
              },
              {
                tipo: "video",
                src: "https://www.youtube.com/watch?v=Mk82L7sU7eg",
              },
            ],
          },
          {
            nombre: "Lección 3: Equilibrio de mercado",
            contenido: [
              {
                tipo: "section",
                titulo: "Precio de equilibrio",
                texto:
                  "Punto en que cantidad demandada = cantidad ofrecida. No hay escasez ni excedente (Introduction to Supply and Demand).",
              },
              {
                tipo: "list",
                items: [
                  "Exceso de demanda (escasez): precio por debajo del equilibrio → Qd > Qs → presión al alza.",
                  "Exceso de oferta (superávit): precio por encima del equilibrio → Qs > Qd → presión a la baja.",
                ],
              },
              {
                tipo: "video",
                src: "https://www.youtube.com/watch?v=gw-4_WWyUkA",
              },
              {
                tipo: "infografia",
                src: "/infografias/EconomíaRecurso4Modulo2.png",
                alt: "Gráficas sobre oferta y demanda",
              },
            ],
          },
          {
            nombre: "Lección 4: Desplazamientos de las curvas",
            contenido: [
              {
                tipo: "section",
                titulo: "Desplazamientos de la demanda",
              },
              {
                tipo: "list",
                items: [
                  "Derecha (aumenta): sube precio y cantidad (e.g., mayor ingreso para bienes normales) (Change In Demand: Definition, Causes, Example, and Graph).",
                  "Izquierda (disminuye): baja precio y cantidad.",
                ],
              },
              {
                tipo: "section",
                titulo: "Desplazamientos de la oferta",
              },
              {
                tipo: "list",
                items: [
                  "Derecha (aumenta): baja precio y sube cantidad (e.g., avance tecnológico) (Change in Supply: What Causes a Shift in the Supply Curve?).",
                  "Izquierda (disminuye): sube precio y baja cantidad.",
                ],
              },
            ],
          },
          {
            nombre: "Juego 2: Oferta y demanda",
            contenido: [
              {
                tipo: "section",
                titulo: "Oferta y Demanda (...y mucho cafe)",
                texto:
                  "En este juego, aprenderás sobre la oferta y demanda",
              },
            ],
          },
          {
            nombre: "Ejercicio práctico",
            contenido: [
              {
                tipo: "section",
                titulo: "Ejercicio práctico",
                texto:
                  "Reflexiona sobre cómo el dinero ha influido en tu vida y cómo lo usas en tu día a día. Y no te preocupes, ¡no es un examen!",
              },
              {
                tipo: "examen",
              },
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
            nombre: "Lección 1: ¿Qué estudia la macroeconomía?",
            contenido: [
              {
                tipo: "section",
                titulo: "Definición:",
                texto:
                  "La macroeconomía analiza la economía en su conjunto: producción total, precios agregados e indicadores laborales. Se centra en variables como el PIB, la inflación y el desempleo para entender y guiar la política pública (Introduction to Macroeconomics - Investopedia, Macroeconomics Definition, History, and Schools of Thought).",
              },
              {
                tipo: "video",
                src: "https://www.youtube.com/watch?v=gLIdMnMMxNg",
              },
              {
                tipo: "section",
                titulo: "Diferencia con microeconomía:",
              },
              {
                tipo: "list",
                items: [
                  "Microeconomía: decisiones de individuos y empresas.",
                  "Macroeconomía: decisiones de gobiernos y resultados agregados (Microeconomics vs. Macroeconomics: What's the Difference?).",
                ],
              },
              {
                tipo: "video",
                src: "https://www.youtube.com/watch?v=a_uo9UEguTY",
              },
            ],
          },
          {
            nombre: "Lección 2: Producto Interno Bruto (PIB)",
            contenido: [
              {
                tipo: "section",
                titulo: "¿Qué es el PIB?",
                texto:
                  "Es el valor monetario de todos los bienes y servicios finales producidos dentro de un país en un período determinado; sirve como “termómetro” de la salud económica (Gross Domestic Product (GDP) Formula and How to Use It, What Is GDP and Why Is It So Important to Economists and Investors?).",
              },
              {
                tipo: "section",
                titulo: "Métodos de cálculo:",
              },
              {
                tipo: "list",
                items: [
                  "Enfoque por gasto: suma de consumo (C), inversión (I), gasto público (G) y exportaciones netas (X-M) (Calculating GDP With the Expenditure Approach - Investopedia).",
                  "Enfoque por ingreso: salarios, rentas, intereses y beneficios totales (Calculating GDP With the Income Approach - Investopedia).",
                  "Enfoque por producción (valor agregado): valor añadido en cada etapa productiva.",
                ],
              },
              {
                tipo: "section",
                titulo: "PIB nominal vs. real:",
              },
              {
                tipo: "list",
                items: [
                  "Nominal: valor a precios corrientes (Nominal Gross Domestic Product: Definition and Formula).",
                  "Real: ajustado por inflación, refleja cambio en cantidades (Real Gross Domestic Product (Real GDP): How to Calculate It, vs ...).",
                ],
              },
            ],
          },
          {
            nombre: "Lección 3: Inflación y deflación",
            contenido: [
              {
                tipo: "section",
                titulo: "Inflación:",
                texto:
                  "Aumento sostenido del nivel general de precios que reduce el poder adquisitivo del dinero (What It Is and How to Control Inflation Rates - Investopedia, When Is Inflation Good for the Economy? - Investopedia).",
              },
              {
                tipo: "section",
                titulo: "Causas principales:",
              },
              {
                tipo: "list",
                items: [
                  "Demanda excesiva (demanda-pull).",
                  "Aumento de costos (cost-push).",
                  "Incremento de la masa monetaria.",
                ],
              },
              {
                tipo: "section",
                titulo: "Medición:",
              },
              {
                tipo: "list",
                items: [
                  "IPC (Índice de Precios al Consumidor): canasta de bienes y servicios (What Is the Consumer Price Index (CPI)? - Investopedia).",
                  "IPyV (Deflactor del PIB).",
                ],
              },
              {
                tipo: "section",
                titulo: "Deflación:",
                texto:
                  "Descenso generalizado de precios, suele asociarse a contracción de la oferta monetaria y puede provocar recesión (Inflation vs. Deflation: What's the Difference?, Deflation: Definition, Causes, and Changing Views on Its Impact).",
              },
              {
                tipo: "video",
                src: "https://www.youtube.com/watch?v=Pg8-2VZNdCk",
              },
            ],
          },
          {
            nombre: "Lección 4: Desempleo",
            contenido: [
              {
                tipo: "section",
                titulo: "Definición:",
                texto:
                  "Porcentaje de la población activa que busca empleo sin éxito (What Is Unemployment? Causes, Types, and Measurement, How the Unemployment Rate Affects Everybody - Investopedia).",
              },
              {
                tipo: "section",
                titulo: "Cálculo (tasa oficial U-3):",
              },
              {
                tipo: "list",
                items: [
                  "Tasa de desempleo = (Número de desempleados / Fuerza laboral) × 100",
                ],
              },
              {
                tipo: "section",
                titulo: "Tipos de desempleo:",
              },
              {
                tipo: "list",
                items: [
                  "Friccional: transición entre empleos.",
                  "Estructural: desajuste de habilidades vs. demanda laboral.",
                  "Cíclico: ligado al ciclo económico.",
                  "Natural: nivel mínimo asociado a fricción y estructura del mercado (What Is the Natural Unemployment Rate? - Investopedia).",
                ],
              },
              {
                tipo: "infografia",
                src: "/infografias/EconomíaRecurso4Modulo3.png",
                alt: "Grafico sobre el desempleo",
              },
            ],
          },
          {
            nombre: "Lección 5: Política fiscal y monetaria",
            contenido: [
              {
                tipo: "section",
                titulo: "Política fiscal:",
                texto:
                  "Uso de gasto público e impuestos para influir en la demanda agregada y estabilizar la economía.",
              },
              {
                tipo: "list",
                items: [
                  "Expansiva: aumenta gasto o reduce impuestos para estimular (All About Fiscal Policy: What It Is, Why It Matters, and Examples, What Are Some Examples of Expansionary Fiscal Policy?).",
                  "Contractiva: reduce gasto o sube impuestos para frenar inflación.",
                ],
              },
              {
                tipo: "section",
                titulo: "Política monetaria:",
                texto:
                  "Manejo de la oferta de dinero y tasas de interés por el banco central.",
              },
              {
                tipo: "list",
                items: [
                  "Expansiva: baja tasas, inyecta liquidez para estimular (Monetary Policy and Inflation).",
                  "Contractiva: sube tasas, retira liquidez para controlar precios.",
                ],
              },
              {
                tipo: "section",
                titulo: "Diferencias clave:",
              },
              {
                tipo: "list",
                items: [
                  "Responsable: gobierno (fiscal) vs. banco central (monetaria).",
                  "Herramientas: impuestos y gasto (fiscal) vs. tasas, operaciones de mercado abierto, coeficientes de reservas (monetaria) (Monetary Policy vs. Fiscal Policy: What's the Difference?).",
                ],
              },
              {
                tipo: "video",
                src: "https://www.youtube.com/watch?v=78q-M59onow",
              },
            ],
          },
          {
            nombre: "Ejercicio práctico",
            contenido: [
              {
                tipo: "section",
                titulo: "Ejercicio práctico",
                texto:
                  "Reflexiona sobre cómo el dinero ha influido en tu vida y cómo lo usas en tu día a día. Y no te preocupes, ¡no es un examen!",
              },
              {
                tipo: "examen",
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
          lecciones: [
            {
              nombre: "Lecciones Por definir",
              contenido: [
                {
                  tipo: "section",
                  titulo: "Contenido por definir",
                },
              ],
            },
          ],
      },
      {
        nombre: "Internet y seguridad digital",
        descripcion:
          "Navega con seguridad y aprende a proteger tu información personal en línea.",
          lecciones: [
            {
              nombre: "Lecciones Por definir",
              contenido: [
                {
                  tipo: "section",
                  titulo: "Contenido por definir",
                },
              ],
            },
          ],
      },
      {
        nombre: "Ofimática básica",
        descripcion:
          "Conoce herramientas como Word, Excel y PowerPoint para usarlas eficazmente.",
          lecciones: [
            {
              nombre: "Lecciones Por definir",
              contenido: [
                {
                  tipo: "section",
                  titulo: "Contenido por definir",
                },
              ],
            },
          ],
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
          lecciones: [
            {
              nombre: "Lecciones Por definir",
              contenido: [
                {
                  tipo: "section",
                  titulo: "Contenido por definir",
                },
              ],
            },
          ],
      },
      {
        nombre: "Resolución de problemas",
        descripcion:
          "Aprende a analizar y enfrentar desafíos con lógica y creatividad.",
          lecciones: [
            {
              nombre: "Lecciones Por definir",
              contenido: [
                {
                  tipo: "section",
                  titulo: "Contenido por definir",
                },
              ],
            },
          ],
      },
      {
        nombre: "Trabajo en equipo",
        descripcion:
          "Descubre cómo colaborar eficazmente con otros para alcanzar objetivos comunes.",
          lecciones: [
            {
              nombre: "Lecciones Por definir",
              contenido: [
                {
                  tipo: "section",
                  titulo: "Contenido por definir",
                },
              ],
            },
          ],
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
          lecciones: [
            {
              nombre: "Lecciones Por definir",
              contenido: [
                {
                  tipo: "section",
                  titulo: "Contenido por definir",
                },
              ],
            },
          ],
      },
      {
        nombre: "Hábitos saludables",
        descripcion:
          "Establece rutinas positivas que favorezcan tu bienestar diario.",
          lecciones: [
            {
              nombre: "Lecciones Por definir",
              contenido: [
                {
                  tipo: "section",
                  titulo: "Contenido por definir",
                },
              ],
            },
          ],
      },
      {
        nombre: "Manejo del estrés",
        descripcion:
          "Identifica fuentes de estrés y aprende técnicas para afrontarlo de manera saludable.",
          lecciones: [
            {
              nombre: "Lecciones Por definir",
              contenido: [
                {
                  tipo: "section",
                  titulo: "Contenido por definir",
                },
              ],
            },
          ],
      },
    ],
  },
  {
    nombre: "Finanzas Personales",
    descripcion:
      "Conoce los fundamentos para manejar tu dinero, invertir y planificar tu futuro financiero.",
    imagen: "/logoEmprenNegocios.svg",
    posicion: "left-[90%] top-[28%]",
    modulos: [
      {
        nombre: "Introducción al emprendimiento",
        descripcion:
          "Descubre qué implica emprender y cómo transformar una idea en acción.",
          lecciones: [
            {
              nombre: "Lecciones Por definir",
              contenido: [
                {
                  tipo: "section",
                  titulo: "Contenido por definir",
                },
              ],
            },
          ],
      },
      {
        nombre: "Modelo de negocio",
        descripcion:
          "Aprende a estructurar y validar un modelo de negocio sostenible.",
          lecciones: [
            {
              nombre: "Lecciones Por definir",
              contenido: [
                {
                  tipo: "section",
                  titulo: "Contenido por definir",
                },
              ],
            },
          ],
      },
      {
        nombre: "Marketing básico",
        descripcion:
          "Conoce estrategias clave para dar a conocer y posicionar tu producto o servicio.",
          lecciones: [
            {
              nombre: "Lecciones Por definir",
              contenido: [
                {
                  tipo: "section",
                  titulo: "Contenido por definir",
                },
              ],
            },
          ],
      },
    ],
  },
];
