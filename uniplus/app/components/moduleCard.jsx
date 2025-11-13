import Link from "next/link";
import { useRouter } from "next/navigation";

export function ModuleCard({ idModulo, moduleKey }) {
  const router = useRouter();

  const nombres = [
    "Desarrollo Personal", // Desarrollo Personal
    "Economía", // Economia
    "Tecnología Básica", // Tecnología Básica
    "Creatividad y Habilidades", // Creatividad y Habilidades
    "Bienestar y Salud", // Bienestar y Salud
    "Finanzas Personales", // Finanzas Personales
  ];
  const nombresModulos = nombres[idModulo];

  const descripciones = [
    "Cursos para mejorar tus habilidades personales, comunicación y liderazgo.", // Desarrollo Personal
    "Comprende conceptos económicos básicos y toma decisiones financieras acertadas.", // Economía
    "Fundamentos de computación, internet y herramientas digitales.", // Tecnología Básica
    "Desarrolla tu lado creativo con cursos de arte, música y diseño.", // Creatividad y Habilidades
    "Cursos sobre nutrición, ejercicio y bienestar mental", // Bienestar y Salud
    "Aprende a manejar tu dinero, invertir y planificar tu futuro financiero.", // Finanzas Personales
  ];
  const descripcionesModulos = descripciones[idModulo];

  const modulo = {
    id: idModulo,
    nombre: "Modulo " + (idModulo + 1),
    descripcion: "Descripcion del modulo " + (idModulo + 1),
  };

  async function handleStartCourse(e) {
    e.preventDefault();
    const moduleUrl = `/courses/${modulo.id}`;
    try {
      const response = await fetch("/api/updateProgress", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ moduleKey, moduleUrl }),
      });

      if (!response.ok) {
        throw new Error("Error al registrar el progreso del módulo");
      }
      router.push(moduleUrl);
    } catch (error) {
      console.error("Error al registrar el progreso del módulo:", error);
    }
  }

  return (
    <div className="absolute top-20 sm:!top-30 w-3xs bg-white z-100 flex rounded-xl shadow-lg">
      <div className="relative top-0 left-0 w-full h-full flex flex-col items-left px-4 py-4">
        <h1 className="text-black text-lg font-bold pb-2">{nombresModulos}</h1>
        <p className="text-black text-base pb-2">{descripcionesModulos}</p>
        <a
          href={`/courses/${modulo.id}`}
          onClick={handleStartCourse}
          className="text-sky-500 text-base font-bold hover:text-sky-700 transition-colors"
        >
          Ver Curso
        </a>
      </div>
    </div>
  );
}
