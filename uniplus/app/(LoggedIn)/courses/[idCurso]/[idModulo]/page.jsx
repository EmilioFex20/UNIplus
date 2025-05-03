import { cursosData } from "@/app/data/cursosData";
import { LessonInfoCard } from "@/app/components/lessonsInfoCard";
import { use } from "react"; 

export default function ModulePage({ params }) {
  const resolvedParams = use(params); 
  const idCurso = parseInt(resolvedParams.idCurso, 10);
  const idModulo = parseInt(resolvedParams.idModulo, 10);  
  const curso = cursosData[idCurso];
  const modulo = curso.modulos[idModulo];
  return (
    <div className="w-full h-screen bg-no-repeat bg-cover bg-center">
      <h1 className="text-black font-bold text-2xl mb-4 px-20">
        Bienvenido al curso de {curso.nombre} - {modulo.nombre}
      </h1>
      <p className="text-black text-base mb-4 px-20">Descripción del curso</p>
      <div className="grid grid-cols-3 sm:grid-cols-2 md:grid-cols-3 gap-5 px-20 py-5">
        {modulo.lecciones.map((leccion, index) => (
          <LessonInfoCard
            key={index}
            idCurso={idCurso}
            idModulo={idModulo}
            idLeccion={index}
            nombreLeccion={leccion.nombre}
          />
        ))}
        </div>
    </div>
  );
}
