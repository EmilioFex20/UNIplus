"use client";

import { useState } from "react";
import { use } from "react";
import { examenData } from "@/app/data/examenData";
import { cursosData } from "@/app/data/cursosData";

export default function ExamenPage({ params }) {
  const resolvedParams = use(params);
  const idCurso = parseInt(resolvedParams.idCurso, 10);
  const idModulo = parseInt(resolvedParams.idModulo, 10);

  const curso = examenData[idCurso];
  if (!curso) {
    return (
      <div className="text-black font-bold text-2xl mb-4 px-20">
        Error: Curso no encontrado
      </div>
    );
  }

  const modulo = curso.modulos?.[idModulo];
  if (!modulo) {
    return (
      <div className="text-black font-bold text-2xl mb-4 px-20">
        Error: Módulo no encontrado
      </div>
    );
  }

  const examen = modulo.examen?.[0];
  if (!examen) {
    return (
      <div className="text-black font-bold text-2xl mb-4 px-20">
        Error: Examen no encontrado
      </div>
    );
  }

  const [preguntaActiva, setPreguntaActiva] = useState(0);
  const [respuestaSeleccionada, setRespuestaSeleccionada] = useState("");
  const [seleccionado, setSeleccionado] = useState(false);
  const [indiceRespuestaSeleccionada, setIndiceRespuestaSeleccionada] =
    useState(null);
  const [mostrarResultado, setMostrarResultado] = useState(false);
  const [resultado, setResultado] = useState({
    puntuacion: 0,
    respuestasCorrectas: 0,
    respuestasIncorrectas: 0,
  });

  const { preguntas } = examen;
  const { pregunta, respuestas, respuestaCorrecta } = preguntas[preguntaActiva];

  const onRespuestaSeleccionada = (respuesta, index) => {
    setSeleccionado(true);
    setIndiceRespuestaSeleccionada(index);
    if (respuesta === respuestaCorrecta) {
      setRespuestaSeleccionada(true);
      console.log("Respuesta correcta");
    } else {
      setRespuestaSeleccionada(false);
      console.log("Respuesta incorrecta");
    }
  };

  const siguientePregunta = () => {
    setIndiceRespuestaSeleccionada(null);
    setResultado((prev) =>
      respuestaSeleccionada
        ? {
            ...prev,
            puntuacion: prev.puntuacion + 1,
            respuestasCorrectas: prev.respuestasCorrectas + 1,
          }
        : {
            ...prev,
            respuestasIncorrectas: prev.respuestasIncorrectas + 1,
          }
    );
    if (preguntaActiva !== preguntas.length - 1) {
      setPreguntaActiva((prev) => prev + 1);
      setSeleccionado(false);
    } else {
      setPreguntaActiva(0);
      setMostrarResultado(true);
    }
    setSeleccionado(false);
  };

  const totalModulos = cursosData[idCurso].modulos.length;
  const esUltimoModulo = idModulo === totalModulos - 1;

  const moduleKeys = [
    "desarrolloState",
    "economiaState",
    "tecnologiaState",
    "creatividadState",
    "saludState",
    "finanzasState",
  ];
  const moduleKey = moduleKeys[idCurso];

  const handleClick = async () => {
    const moduleUrl = `/courses/${idCurso}/${idModulo + 1}`;
    try {
      const response = await fetch("/api/updateProgress", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ moduleKey, moduleUrl }),
      });

      if (!response.ok) {
        throw new Error("Error al registrar el progreso del módulo");
      }

      window.location.href = moduleUrl;
    } catch (error) {
      console.error("Error al registrar el progreso del módulo:", error);
    }
  };
  const handleFinish = async () => {
    const moduleUrl = `/courses`;
    try {
      const response = await fetch("/api/updateProgress", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ moduleKey, moduleUrl }),
      });

      if (!response.ok) {
        throw new Error("Error al registrar el progreso del módulo");
      }

      window.location.href = moduleUrl;
    } catch (error) {
      console.error("Error al registrar el progreso del módulo:", error);
    }
  };

  return (
    <div className="w-full h-full items-center justify-center">
      <h1 className="text-black font-bold text-2xl mb-4 px-20">
        Bienvenido a la Autoevaluacion de {curso.nombre} - {modulo.nombre}
      </h1>
      <div>
        <h2 className="text-black font-bold text-2xl mb-4 px-20">
          Pregunta: {preguntaActiva + 1} de {preguntas.length}
        </h2>
      </div>
      <div className="bg-[#0c386b] mx-30 py-6 items-center justify-center rounded-2xl shadow-2xl mb-10">
        {!mostrarResultado ? (
          <div className="mx-20">
            <h3 className="text-white font-bold text-2xl mb-4 ">
              {preguntas[preguntaActiva].pregunta}
            </h3>
            {respuestas.map((respuesta, index) => (
              <li
                key={index}
                onClick={() => onRespuestaSeleccionada(respuesta, index)}
                className={`
                cursor-pointer
                bg-sky-500
                font-bold
                text-white
                text-xl
                mb-4
                px-5
                py-5
                list-none
                rounded-lg
                ${
                  indiceRespuestaSeleccionada === index
                    ? "bg-sky-700 text-white"
                    : "hover:bg-sky-600"
                }`}
              >
                <span>{respuesta}</span>
              </li>
            ))}
            {seleccionado ? (
              <button
                onClick={siguientePregunta}
                className="bg-sky-500 w-full text-white text-xl font-bold py-5 px-5 rounded mt-4 cursor-pointer hover:bg-sky-600"
              >
                {preguntaActiva === preguntas.length - 1
                  ? "Finalizar"
                  : "Siguiente"}
              </button>
            ) : (
              <button
                onClick={siguientePregunta}
                disabled
                className="bg-sky-700 w-full text-white text-xl font-bold py-5 px-5 rounded mt-4"
              >
                {""}
                {preguntaActiva === preguntas.length - 1
                  ? "Finalizar"
                  : "Siguiente"}{" "}
              </button>
            )}
          </div>
        ) : (
          <div className="mx-20 justify-center text-start">
            <h3 className="font-bold text-4xl">Resultados</h3>
            <h3 className="text-2xl mt-5">
              Puntacion total {(resultado.puntuacion / preguntas.length) * 100}%
            </h3>
            <div className="text-start text-xl mt-5">
              <p>
                Preguntas totales: <span>{preguntas.length}</span>
              </p>
              <p>
                Puntuación Total: <span>{resultado.puntuacion}</span>
              </p>
              <p>
                Respuestas Correctas: <span>{resultado.respuestasCorrectas}</span>
              </p>
              <p>
                Respuestas Incorrectas: <span>{resultado.respuestasIncorrectas}</span>
              </p>
            </div>

            <button
              className="bg-sky-500 w-full text-white text-xl font-bold py-5 px-5 rounded mt-4 cursor-pointer hover:bg-sky-600"
              onClick={() => window.location.reload()}
            >
              Reiniciar
            </button>
            {!esUltimoModulo ? (
              <button
                className="bg-sky-500 w-full text-white text-xl font-bold py-5 px-5 rounded mt-4 cursor-pointer hover:bg-sky-600"
                onClick={handleClick}
              >
                Avanzar al siguiente módulo
              </button>
            ) : (
              <div className="mt-10">
                <h1 className="text-4xl font-bold text-white">
                  ¡Felicidades! Terminaste el Curso de {curso.nombre}{" "}
                </h1>
                <button
                className="bg-sky-500 w-full text-white text-xl font-bold py-5 px-5 rounded mt-10 cursor-pointer hover:bg-sky-600"
                onClick={handleFinish}
              >
                Explorar más Cursos
              </button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
