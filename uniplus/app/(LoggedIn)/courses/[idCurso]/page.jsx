import { ModuleInfoCard } from "@/app/components/moduleInfoCard";
import { CourseInfo } from "@/app/components/courseInfo";
import { cursosData } from "@/app/data/cursosData";
import { use } from "react";

export default function CoursePage({ params }) {
  const resolvedParams = use(params);
  const idCurso = parseInt(resolvedParams.idCurso, 10);
  const curso = cursosData[idCurso];
  const nombresCursos = curso.nombre;
  const descripcionCursos = curso.descripcion;
  const modulosCurso = curso.modulos;

  const moduleKeys = [
    "desarrolloState",
    "economiaState",
    "tecnologiaState",
    "creatividadState",
    "saludState",
    "finanzasState",
  ];

  return (
    <div className="w-full h-full flex flex-col text-left px-4 overflow-hidden">
      <CourseInfo
        nombresCursos={nombresCursos}
        descripcionCursos={descripcionCursos}
      />
      <div className="flex gap-5 mx-20 py-5 overflow-x-auto">
        {modulosCurso.map((modulo, index) => (
          <ModuleInfoCard
            key={index}
            idCurso={idCurso}
            idModulo={index}
            nombreModulo={modulo.nombre}
            descripcionModulo={modulo.descripcion}
            moduleKey={moduleKeys[idCurso]}
          />
        ))}
      </div>
    </div>
  );
}
