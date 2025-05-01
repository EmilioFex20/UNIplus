import { ModuleInfoCard } from "@/app/components/moduleInfoCard";
import { CourseInfo } from "@/app/components/courseInfo";

export default async function CoursePage({ params }) {
  const idCurso = parseInt(params.idCurso, 10);

  const nombresCurso = [
    "Desarrollo Personal",
    "Finanzas Personales",
    "Tecnología Básica",
    "Creatividad y Habilidades",
    "Bienestar y Salud",
    "Emprendimiento y Negocios",
  ];

  const descripcionesCursos = [
    "Explora el crecimiento personal a través de la autoconciencia, la gestión emocional y el desarrollo de habilidades para una vida plena.",
    "Aprende a manejar tu dinero de forma inteligente, comprende conceptos económicos básicos y toma decisiones financieras acertadas.",
    "Domina las herramientas esenciales de la era digital, desde el uso de computadoras hasta la navegación segura por Internet.",
    "Desarrolla tu creatividad y fortalece habilidades blandas como el pensamiento crítico, trabajo en equipo y resolución de problemas.",
    "Mejora tu calidad de vida con hábitos saludables, manejo del estrés y cuidados físicos y mentales fundamentales.",
    "Conoce los fundamentos del emprendimiento y aprende a construir, modelar y promover un negocio propio desde cero."
  ];
  
  const nombresCursos = nombresCurso[idCurso];
  const descripcionCursos = descripcionesCursos[idCurso];

  const modulosPorCurso = [
    [
      // Desarrollo Personal
      "Autoconocimiento y autoestima",
      "Gestión del tiempo",
      "Establecimiento de metas",
    ],
    [
      // Finanzas Personales
      "¿Qué es el dinero y por qué importa?",
      "Oferta, demanda y cómo se forman los precios",
      "Introducción a la macroeconomía",
    ],
    [
      // Tecnología Básica
      "Fundamentos de computación",
      "Internet y seguridad digital",
      "Ofimática básica",
    ],
    [
      // Creatividad y Habilidades
      "Pensamiento creativo",
      "Resolución de problemas",
      "Trabajo en equipo",
    ],
    [
      // Bienestar y Salud
      "Salud física y mental",
      "Hábitos saludables",
      "Manejo del estrés",
    ],
    [
      // Emprendimiento y Negocios
      "Introducción al emprendimiento",
      "Modelo de negocio",
      "Marketing básico",
    ],
  ];

  const modulosCurso = modulosPorCurso[idCurso];

  return (
    <div className="w-full h-screen flex flex-col text-left px-4 py-6 overflow-hidden">
      <CourseInfo nombresCursos={nombresCursos} descripcionCursos={descripcionCursos}/>
      <div className="flex gap-5 px-20 py-5 overflow-x-auto ">
        {modulosCurso.map((nombreModulo, index) => (
          <ModuleInfoCard key={index} nombreModulo={nombreModulo} />
        ))}
      </div>
    </div>
  );
}
