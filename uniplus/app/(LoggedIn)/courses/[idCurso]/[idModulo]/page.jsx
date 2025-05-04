import { cursosData } from "@/app/data/cursosData";
import { LessonInfoCard } from "@/app/components/lessonsInfoCard";
import { use } from "react"; 

export default function ModulePage({ params }) {
  const resolvedParams = use(params); 
  const idCurso = parseInt(resolvedParams.idCurso, 10);
  const idModulo = parseInt(resolvedParams.idModulo, 10);  
  const curso = cursosData[idCurso];
  const modulo = curso.modulos[idModulo];

  const moduleKeys = [
    "desarrolloState",
    "economiaState",
    "tecnologiaState",
    "creatividadState",
    "saludState",
    "finanzasState",
  ];

  return (
    <div className="w-full h-full bg-no-repeat bg-cover bg-center">
      <h1 className="text-black font-bold text-4xl mb-4 px-20">
        {curso.nombre} - {modulo.nombre}
      </h1>
      <p className="text-black text-base mb-4 px-20">Descripción del curso</p>
      <div className="grid grid-cols-3 sm:grid-cols-2 md:grid-cols-3 gap-5 mx-20 my-5">
        {modulo.lecciones.map((leccion, index) => (
          <LessonInfoCard
            key={index}
            idCurso={idCurso}
            idModulo={idModulo}
            idLeccion={index}
            nombreLeccion={leccion.nombre}
            moduleKey={moduleKeys[idCurso]}
          />
        ))}
        </div>
    </div>
  );
}
