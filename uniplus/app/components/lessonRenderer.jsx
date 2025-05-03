import React from "react";
import { Video } from "@/app/components/video";
import { Infografia } from "@/app/components/infografia";
import CloudsBg from "./CloudsBg";
import Image from "next/image";
import Link from "next/link";
import { cursosData } from "@/app/data/cursosData";

export default function LessonRenderer({
  contenido,
  idCurso,
  idModulo,
  idLeccion,
}) {
  const totalLecciones = cursosData[idCurso].modulos[idModulo].lecciones.length;
  console.log("Lecciones totales:", totalLecciones);
  const esUltimaLeccion = idLeccion === totalLecciones - 1;
  return (
    <div className="relative w-full flex justify-center items-center z-0">
      <CloudsBg />
      <div className="flex flex-col space-y-6 items-center justify-center z-20">
        {contenido.map((item, index) => {
          if (item.tipo === "section") {
            return (
              <div
                key={index}
                className="bg-[#4a7298] p-4 rounded-lg shadow w-3/4 text-center"
              >
                {item.titulo && (
                  <h2 className="text-2xl text-white font-semibold mb-1">
                    {item.titulo}
                  </h2>
                )}
                {item.texto && (
                  <p className="text-white mb-1 text-xl">{item.texto}</p>
                )}
              </div>
            );
          }
          if (item.tipo === "list") {
            return (
              <div
                key={index}
                className="bg-[#b2dffd] p-4 flex rounded-lg shadow w-3/4 text-center text-xl text-[#4a7298]"
              >
                <ul key={index} className="space-y-1 w-full list-none">
                  {item.items.map((text, i) => (
                    <li key={i}>{text}</li>
                  ))}
                </ul>
              </div>
            );
          }
          if (item.tipo === "video") {
            return (
              <div
                key={index}
                className="w-full max-w-4xl mx-auto my-8 rounded-xl overflow-hidden shadow-lg"
              >
                <Video url={item.src} />
              </div>
            );
          }
          if (item.tipo === "infografia") {
            return (
              <div
                key={index}
                className="relative w-full flex justify-center items-center"
              >
                <Infografia src={item.src} alt={item.alt} />
              </div>
            );
          }
          if (item.tipo === "gif") {
            return (
              <div
                key={index}
                className="relative w-full flex justify-center items-center"
              >
                <Image
                  unoptimized={true}
                  src={item.src}
                  alt={item.alt}
                  width={500}
                  height={500}
                  className="w-full max-w-2xl h-auto rounded-lg shadow-lg"
                />
              </div>
            );
          }
          if (item.tipo === "examen") {
            return (
              <div key={index}>
                <Link
                  className="bg-[#4a7298] text-white text-2xl px-6 py-3 rounded-lg mt-6 font-bold hover:bg-[#3a5a78]"
                  href={`/courses/${idCurso}/${idModulo}/${idLeccion}/${idModulo}`}
                >
                  Iniciar Autoevaluacion
                </Link>
              </div>
            );
          }
          return null;
        })}
        {!esUltimaLeccion && (
          <Link
            href={`/courses/${idCurso}/${idModulo}/${idLeccion + 1}`}
            className="bg-[#4a7298] text-white text-2xl px-6 py-3 rounded-lg mt-6 font-bold hover:bg-[#3a5a78]"
          >
            Ir a la siguiente Lección
          </Link>
        )}
      </div>
    </div>
  );
}
