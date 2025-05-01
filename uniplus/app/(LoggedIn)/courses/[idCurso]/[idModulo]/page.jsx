import { cursosData } from "@/app/data/cursosData";

export default function ModulePage({ params }) {
  const idCurso = parseInt(params.idCurso, 10);
  const idModulo = parseInt(params.idModulo, 10);
  const curso = cursosData[idCurso];
  const modulo = curso.modulos[idModulo];
  return (
    <div className="w-full h-screen bg-no-repeat bg-cover bg-center">
      <h1 className="text-black font-bold text-2xl mb-4 px-20">
        Bienvenido al curso de {curso.nombre} - {modulo.nombre}
      </h1>
      <p className="text-black text-base mb-4 px-20">Descripción del curso</p>
    </div>
  );
}
