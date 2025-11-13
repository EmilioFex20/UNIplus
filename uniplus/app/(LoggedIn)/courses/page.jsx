"use client";

import { useState, useEffect } from "react";
import { CourseCard } from "@/app/components/courseCard";
import Image from "next/image";

export default function Roadmap() {
  const [isMobile, setIsMobile] = useState(false);

  // Detect screen size and set image conditionally
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // mobile if width < 768px
    };

    handleResize(); // Set initial size
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

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
      <div className="relative w-full min-h-screen overflow-hidden">
        {/* Conditional Image based on screen size */}
        <div className="relative w-full h-screen -top-35 sm:!-top-35">
          <Image
            src={isMobile ? "/caminoRoadmapMobile.png" : "/caminoRoadmap.png"}
            alt="Camino roadmap"
            fill
            priority
            className="
              object-contain
              w-full
              h-full
            "
          />
        </div>
        {[0, 1, 2, 3, 4, 5].map((id) => (
          <div key={id}>
            <CourseCard
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
