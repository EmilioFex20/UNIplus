"use client";

import dynamic from "next/dynamic";
import { use } from "react";
import { cursosData } from "@/app/data/cursosData";
import LessonRenderer from "@/app/components/lessonRenderer";
import CloudsBg from "@/app/components/CloudsBg";

const Game = dynamic(() => import("@/app/juegos/evolucionDinero/Game"), {
  ssr: false,
});

export default function LessonPage({ params }) {
  const resolvedParams = use(params);
  const idCurso = parseInt(resolvedParams.idCurso, 10);
  const idModulo = parseInt(resolvedParams.idModulo, 10);
  const idLeccion = parseInt(resolvedParams.idLeccion, 10);

  const curso = cursosData[idCurso];
  const modulo = curso.modulos[idModulo];
  const leccion = modulo.lecciones[idLeccion];

  return (
    <div className="w-full min-h-screen bg-white px-20 py-10">
      <h1 className="text-[#4a7298] font-bold text-2xl mb-4">
        {curso.nombre} - {modulo.nombre} - {leccion.nombre}
      </h1>
      <p className="text-[#4a7298] text-base mb-4">Contenido de la lección:</p>

      <div className="bg-[#d3eefc] text-black p-6 items-center justify-center rounded-lg shadow mb-10">
        <LessonRenderer contenido={leccion.contenido} />
      </div>

      {leccion.nombre.includes("origen") && (
        <div className="p-6 flex flex-col bg-white items-center rounded-lg shadow-lg bg-[#d3eefc]">
          <h2 className="text-2xl font-bold text-black mb-4">
            Evolución del Dinero (Juego)
          </h2>
          <Game />
        </div>
      )}
    </div>
  );
}
