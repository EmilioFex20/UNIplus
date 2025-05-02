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

  return (
    <div className="w-full h-screen flex flex-col text-left px-4 py-6 overflow-hidden">
      <CourseInfo
        nombresCursos={nombresCursos}
        descripcionCursos={descripcionCursos}
      />
      <div className="flex gap-5 px-20 py-5 overflow-x-auto">
        {modulosCurso.map((modulo, index) => (
          <ModuleInfoCard
            key={index}
            idCurso={idCurso}
            idModulo={index}
            nombreModulo={modulo.nombre}
            descripcionModulo={modulo.descripcion}
          />
        ))}
      </div>
    </div>
  );
}
