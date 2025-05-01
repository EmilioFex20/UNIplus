"use client";

import Image from "next/image";
import { ModuleCard } from "./moduleCard";
import { cursosData } from "@/app/data/cursosData";

export function CourseCard({ idCurso, idCursoActivo, setIdCursoActivo }) {
  const isOpen = idCursoActivo === idCurso;

  const showInfoHandler = () => {
    setIdCursoActivo(isOpen ? null : idCurso);
  };
  const curso = cursosData[idCurso];
  const imagenModulo = curso.imagen;
  const posicionModuloInfo = curso.posicion;


  return (
    <>
      <div
        className={`absolute transform -translate-x-1/2 -translate-y-1/2 ${posicionModuloInfo}`}
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
                src={imagenModulo || "/placeholder.svg?height=48&width=48"}
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
