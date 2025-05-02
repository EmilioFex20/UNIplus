"use client";

import dynamic from "next/dynamic";

const Game = dynamic(() => import("@/app/juegos/evolucionDinero/Game"), {
  ssr: false,
});
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
      <div className="p-6 items-center justify-center flex flex-col bg-white rounded-lg shadow-lg mx-20 my-10">
        <h1 className="text-2xl text-black font-bold mb-4">
          Evolución del Dinero
        </h1>
        <Game />
      </div>
    </div>
  );
}
