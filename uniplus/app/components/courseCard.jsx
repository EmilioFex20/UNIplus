"use client";

import Image from "next/image";
import { ModuleCard } from "./moduleCard";

export function CourseCard({ idCurso, idCursoActivo, setIdCursoActivo }) {
  const isOpen = idCursoActivo === idCurso;

  const showInfoHandler = () => {
    setIdCursoActivo(isOpen ? null : idCurso);
  };
  const positions = [
    "left-[10%] top-[25%]", // Desarrollo Personal
    "left-[28%] top-[12%]", // Finanzas Personales
    "left-[40%] top-[20%]", // Tecnología Básica
    "left-[60%] top-[29%]", // Creatividad y Habilidades
    "left-[75%] top-[30%]", // Bienestar y Salud
    "left-[90%] top-[28%]", // Emprendimiento y Negocios
  ];

  const positionClass = positions[idCurso];

  const imageCourse = [
    "/logoDesarrolloPersonal.svg", // Desarrollo Personal
    "/logoFinanzasPersonales.svg", // Finanzas Personales
    "/logoTecnolBasica.svg", // Tecnología Básica
    "/logoArte.svg", // Creatividad y Habilidades
    "/logoBienestarSalud.svg", // Bienestar y Salud
    "/logoEmprenNegocios.svg", // Emprendimiento y Negocios
  ];

  const imageCourseClass = imageCourse[idCurso];

  return (
    <>
      <div
        className={`absolute transform -translate-x-1/2 -translate-y-1/2 ${positionClass}`}
      >
        <div className="flex flex-col items-center">
          <button
            onClick={showInfoHandler}
            alt="Logo"
            width={70}
            height={70}
            className="w-24 h-24 rounded-full bg-sky-200 flex items-center justify-center transition-all duration-300 z-10 hover:bg-sky-300 focus:outline-none focus:ring-4 focus:ring-sky-200"
          >
            <div className="w-2/3 h-2/3 relative">
              <Image
                width={80}
                height={80}
                src={imageCourseClass || "/placeholder.svg?height=48&width=48"}
                alt="Logo"
                className="object-contain"
              />
            </div>
          </button>
          {isOpen && (
              <ModuleCard idModulo={idCurso} />
          )}
        </div>

      </div>
    </>
  );
}
