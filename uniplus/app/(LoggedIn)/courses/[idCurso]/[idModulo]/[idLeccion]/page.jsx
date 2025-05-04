"use client";

import dynamic from "next/dynamic";
import { use } from "react";
import { cursosData } from "@/app/data/cursosData";
import LessonRenderer from "@/app/components/lessonRenderer";
import CloudsBg from "@/app/components/CloudsBg";

const Game = dynamic(() => import("@/app/juegos/evolucionDinero/Game"), {
  ssr: false,
});
const Game1 = dynamic(() => import("@/app/juegos/juego2/Game"), {
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

    const moduleKeys = [
      "desarrolloState",
      "economiaState",
      "tecnologiaState",
      "creatividadState",
      "saludState",
      "finanzasState",
    ];

  return (
    <div className="max-w-full min-h-full bg-white px-20">
      <h1 className="text-[#4a7298] font-bold text-4xl mb-4">
        {curso.nombre} - {modulo.nombre}
      </h1>
      <h1 className="text-[#4a7298] text-3xl mb-4">{leccion.nombre}</h1>
      <div className="bg-[#d3eefc] p-6 items-center justify-center rounded-4xl shadow mb-10">
        <LessonRenderer
          contenido={leccion.contenido}
          idCurso={idCurso}
          idModulo={idModulo}
          idLeccion={idLeccion}
          moduleKey={moduleKeys[idCurso]}
        />
      </div>

      {leccion.nombre.includes("Juego 1") && (
        <div className="p-6 flex flex-col bg-white items-center rounded-lg shadow-lg bg-[#d3eefc]">
          <h2 className="text-2xl font-bold text-black mb-4">
            Evolución del Dinero (Juego)
          </h2>
          <Game />
        </div>
      )}
            {leccion.nombre.includes("Juego 2") && (
        <div className="p-6 flex flex-col bg-white items-center rounded-lg shadow-lg bg-[#d3eefc]">
          <h2 className="text-2xl font-bold text-black mb-4">
            Evolución del Dinero (Juego)
          </h2>
          <Game1 />
        </div>
      )}
    </div>
  );
}
