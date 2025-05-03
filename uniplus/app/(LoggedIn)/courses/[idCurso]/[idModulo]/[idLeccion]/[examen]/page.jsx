"use client";

import { useState } from "react";
import { use } from "react";
import { examenData } from "@/app/data/examenData";

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
          <div className="mx-20 text-2xl justify-center items-center text-center">
            <h3 className="text-bold">Resultados</h3>
            <h3>
              Puntacion total {(resultado.puntuacion / preguntas.length) * 100}%
            </h3>
            <button className="bg-sky-500 w-full text-white text-xl font-bold py-5 px-5 rounded mt-4 cursor-pointer hover:bg-sky-600" onClick={() => window.location.reload()}>Reiniciar</button>
            <button className="bg-sky-500 w-full text-white text-xl font-bold py-5 px-5 rounded mt-4 cursor-pointer hover:bg-sky-600" onClick={() => window.location.href = `/courses/${idCurso}/${idModulo + 1}`}>Avanzar al siguiente módulo</button>
          </div>
        )}
      </div>
    </div>
  );
}
