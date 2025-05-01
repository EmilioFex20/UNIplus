import Link from "next/link";

export function ModuleCard({ idModulo }) {
  const nombres = [
    "Desarrollo Personal", // Desarrollo Personal
    "Finanzas Personales", // Finanzas Personales
    "Tecnología Básica", // Tecnología Básica
    "Creatividad y Habilidades", // Creatividad y Habilidades
    "Bienestar y Salud", // Bienestar y Salud
    "Emprendimiento y Negocios", // Emprendimiento y Negocios
  ];
  const nombresModulos = nombres[idModulo];

  const descripciones = [
    "Cursos para mejorar tus habilidades personales, comunicación y liderazgo.", // Desarrollo Personal
    "Aprende a mansejar tu dinero, invertir y planificar tu futuro financiero.", // Finanzas Personales
    "Fundamentos de computación, internet y herramientas digitales.", // Tecnología Básica
    "Desarrolla tu lado creativo con cursos de arte, música y diseño.", // Creatividad y Habilidades
    "Cursos sobre nutrición, ejercicio y bienestar mental", // Bienestar y Salud
    "Aprende a crear y gestionar tu propio negocio", // Emprendimiento y Negocios
  ];
  const descripcionesModulos = descripciones[idModulo];

  const modulo = {
    id: idModulo,
    nombre: "Modulo " + (idModulo + 1),
    descripcion: "Descripcion del modulo " + (idModulo + 1),
  };

  return (
    <div
      className="absolute top-30 w-3xs bg-white z-30 flex rounded-xl shadow-lg"
    >
      <div className="relative top-0 left-0 w-full h-full flex flex-col items-left px-4 py-4">
        <h1 className="text-black text-base font-bold pb-2">{nombresModulos}</h1>
        <p className="text-black text-sm pb-2">{descripcionesModulos}</p>
        <Link
          href={`/courses/${modulo.id}`}
          className="text-sky-500 text-sm font-bold hover:text-sky-700 transition-colors"
          >Ver Curso</Link>
      </div>
    </div>
  );
}
