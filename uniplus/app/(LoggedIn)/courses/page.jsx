'use client';

import { CourseCard } from "@/app/components/courseCard";
import { useState } from "react";

export default function Roadmap() {
  const [idCursoActivo, setIdCursoActivo] = useState(null);

  const moduleKeys = [
    "desarrolloState",
    "economiaState",
    "tecnologiaState",
    "creatividadState",
    "saludState",
    "finanzasState",
  ];

  return (
    <>
      <div
        className="relative w-full h-screen bg-no-repeat bg-contain"
        style={{ backgroundImage: "url('/caminoRoadmap.svg')" }}
      >
      {[0, 1, 2, 3, 4, 5].map((id) => (
        <div key={id}>
          <CourseCard
            key={id}
            idCurso={id}
            idCursoActivo={idCursoActivo}
            setIdCursoActivo={setIdCursoActivo}
            moduleKey={moduleKeys[id]} 
          />
        </div>
      ))}

      </div>
    </>
  );
}
