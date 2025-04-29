import Image from "next/image";

export function CourseCard({idCurso}) {
  const positions = [
    "left-[5%] top-[65%]", // Desarrollo Personal
    "left-[25%] top-[50%]", // Finanzas Personales
    "left-[40%] top-[75%]", // Tecnología Básica
    "left-[60%] top-[65%]", // Creatividad y Habilidades
    "left-[75%] top-[50%]", // Bienestar y Salud
    "left-[90%] top-[75%]", // Emprendimiento y Negocios
  ]

  const positionClass = positions[idCurso];

  const imageCourse =[
    "/logoDesarrolloPersonal.svg", // Desarrollo Personal
    "/logoFinanzasPersonales.svg", // Finanzas Personales
    "/logoTecnolBasica.svg", // Tecnología Básica
    "/logoArte.svg", // Creatividad y Habilidades
    "/logoBienestarSalud.svg", // Bienestar y Salud
    "/logoEmprenNegocios.svg", // Emprendimiento y Negocios
  ]

  const imageCourseClass = imageCourse[idCurso];

  return (
    <>
      <div className={`absolute transform -translate-x-1/2 -translate-y-1/2 ${positionClass}`}>
        <div className="flex flex-col items-center">
          <button
            alt="Logo"
            width={70}
            height={70}
            className="w-24 h-24 rounded-full bg-sky-200 flex items-center justify-center transition-all duration-300 z-10 hover:bg-sky-300 focus:outline-none focus:ring-4 focus:ring-sky-200"
          >
            <div className="w-12 h-12 relative">
              <Image
                width={80} 
                height={80}
                src={imageCourseClass || "/placeholder.svg?height=48&width=48"}
                alt="Logo"
                className="object-contain"
              />
            </div>
          </button>
        </div>
      </div>
    </>
  );
}
