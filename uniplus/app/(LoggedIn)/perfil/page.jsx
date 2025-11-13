"use client";
import { useState, useEffect } from "react";
import useUser from "@/pages/api/hookUser";
import CoursesContinue from "@/app/components/CoursesContinue";
import Image from "next/image";
import { questionsData } from "@/app/data/questionsData";

export default function contact() {
  const [activeItem, setActiveItem] = useState("cursos");
  const { user, isLoading } = useUser();
  const [pregunta, setPregunta] = useState(null);
  const [racha, setAciertos] = useState(0);

  const obtenerPregunta = () => {
    const preguntaAleatoria =
      questionsData[Math.floor(Math.random() * questionsData.length)];
    setPregunta(preguntaAleatoria);
  };

  useEffect(() => {
    obtenerPregunta();
  }, []);

  const handleAnswer = (respuesta) => {
    if (respuesta === pregunta.correct_answer) {
      alert("¡Correcto!");
      setAciertos(racha + 1);
    } else {
      alert("Incorrecto");
      setAciertos(0);
    }
    obtenerPregunta();
  };

  return (
    <div
      className="
        flex flex-col sm:!flex-row gap-6
        px-4 py-6
        md:px-8
        lg:!px-16
        xl:!px-24
      "
    >
      {/* Columna izquierda */}
      <div className="w-full lg:!w-3/5">
        <p className="text-2xl md:text-3xl lg:text-4xl font-bold pb-2 text-black">
          {isLoading ? (
            <span className="bg-gray-300 animate-pulse px-4 py-2 rounded w-24 inline-block" />
          ) : (
            `¡Hola ${user.name}!`
          )}
        </p>
        <p className="text-lg md:text-xl pb-4 text-black">Manos a la obra</p>

        <div className="bg-blue-50 border-2 border-[#2f66a5] rounded-lg p-4 md:p-5">
          {/* Título + tabs */}
          <div className="flex flex-col gap-3 sm:!flex-row sm:!items-center sm:!justify-between">
            <p className="text-lg md:text-xl font-bold text-black">
              Mi Aprendizaje
            </p>

            <div className="flex flex-wrap text-gray-700 gap-2 sm:gap-4">
              <button
                onClick={() => setActiveItem("cursos")}
                className={`
                  flex items-center py-2 px-3 cursor-pointer box-border
                  border-b-[3px] border-blue-50 hover:bg-gray-200 rounded-md
                  ${
                    activeItem === "cursos"
                      ? "border-blue-600 font-bold text-black"
                      : ""
                  }
                `}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-5 mr-2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5"
                  />
                </svg>
                <p>Cursos</p>
              </button>

              <button
                onClick={() => setActiveItem("medallas")}
                className={`
                  flex items-center py-2 px-3 cursor-pointer box-border
                  border-b-[3px] border-blue-50 hover:bg-gray-200 rounded-md
                  ${
                    activeItem === "medallas"
                      ? "border-blue-600 font-bold text-black"
                      : ""
                  }
                `}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-5 mr-2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16.5 18.75h-9m9 0a3 3 0 0 1 3 3h-15a3 3 0 0 1 3-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 0 1-.982-3.172M9.497 14.25a7.454 7.454 0 0 0 .981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 0 0 7.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 0 0 2.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 0 1 2.916.52 6.003 6.003 0 0 1-5.395 4.972m0 0a6.726 6.726 0 0 1-2.749 1.35m0 0a6.772 6.772 0 0 1-3.044 0"
                  />
                </svg>
                <p>Medallas</p>
              </button>
            </div>
          </div>

          {/* Contenido tabs */}
          <div className="mt-4">
            {activeItem === "cursos" && !isLoading && user && (
              <CoursesContinue
                states={{
                  saludState: user.saludState,
                  economiaState: user.economiaState,
                  tecnologiaState: user.tecnologiaState,
                  finanzasState: user.finanzasState,
                  creatividadState: user.creatividadState,
                  desarrolloState: user.desarrolloState,
                }}
              />
            )}

            {activeItem === "medallas" && (
              <div className="text-black">
                <h2 className="text-xl font-semibold">Tus Medallas</h2>
                <p>Todavía no tienes ninguna medalla</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Columna derecha */}
      <div className="w-full lg:!w-2/5 bg-[#0c386b] rounded p-6 self-stretch lg:!self-start">
        <div className="flex flex-col gap-3 sm:!flex-row sm:!justify-between pb-2">
          <p className="text-white text-2xl sm:text-3xl">Bienvenido a Uni+</p>
          <Image
            src="/logoChicoSencillo.svg"
            width={120}
            height={120}
            alt="imagen"
            className="self-center sm:self-start"
          />
        </div>

        <hr className="text-white border-b-2 rounded mb-6" />

        <div className="text-white text-base md:text-lg">
          {/* Stats */}
          <div className="flex flex-col gap-3 md:!flex-row md:!items-center bg-[#1d4e85] rounded px-4 sm:px-6 lg:px-10 py-3 m-4 justify-between">
            <p>
              Cursos Realizados{" "}
              <b className="text-green-400">
                {isLoading ? "" : user.coursesCompleted}/6
              </b>
            </p>
            <p>
              Módulos Terminados{" "}
              <b className="text-green-400">
                {isLoading ? "" : user.modulesCompleted}/30
              </b>
            </p>
          </div>

          {/* Racha */}
          <div className="flex flex-col gap-3 md:!flex-row bg-[#1d4e85] rounded px-4 sm:px-6 lg:px-10 py-3 m-4">
            <div className="flex items-center gap-3">
              <p className="self-center">Racha diaria</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-8 md:size-10 text-red-400"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.362 5.214A8.252 8.252 0 0 1 12 21 8.25 8.25 0 0 1 6.038 7.047 8.287 8.287 0 0 0 9 9.601a8.983 8.983 0 0 1 3.361-6.867 8.21 8.21 0 0 0 3 2.48Z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 18a3.75 3.75 0 0 0 .495-7.468 5.99 5.99 0 0 0-1.925 3.547 5.975 5.975 0 0 1-2.133-1.001A3.75 3.75 0 0 0 12 18Z"
                />
              </svg>
              <p className="text-red-300 text-2xl">0</p>
            </div>
            <p className="self-center text-sm md:text-[1rem] text-gray-300 md:ml-4">
              Completa un módulo diariamente para continuar tu racha.
            </p>
          </div>

          {/* Pregunta de cultura general */}
          <div className="bg-[#1d4e85] rounded px-4 sm:px-6 lg:px-10 py-3 m-4">
            {pregunta ? (
              <>
                <p className="text-center pb-4">Preguntas de Cultura General</p>
                <p className="text-[0.9em] text-gray-300 mb-4 text-center">
                  {pregunta.question}
                </p>
                <div className="flex flex-col sm:!flex-row justify-center gap-3 sm:gap-4 mb-4">
                  <button
                    onClick={() => handleAnswer("True")}
                    className="bg-green-500 text-white px-4 py-2 rounded border-2 border-green-500 hover:bg-green-800 hover:border-white"
                  >
                    Verdadero
                  </button>
                  <button
                    onClick={() => handleAnswer("False")}
                    className="bg-red-500 text-white px-4 py-2 rounded border-2 border-red-500 hover:bg-red-800 hover:border-white"
                  >
                    Falso
                  </button>
                </div>
                <p className="text-white text-center">Racha: {racha}</p>
              </>
            ) : (
              <div className="h-48" />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
