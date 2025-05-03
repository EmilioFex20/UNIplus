import React from "react";
import { Video } from "@/app/components/video";
import { Infografia } from "@/app/components/infografia";
import CloudsBg from "./CloudsBg";

export default function LessonRenderer({ contenido }) {
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
                  <h2 className="text-xl text-white font-semibold mb-1">
                    {item.titulo}
                  </h2>
                )}
                {item.texto && <p className="text-white mb-1">{item.texto}</p>}
              </div>
            );
          }
          if (item.tipo === "list") {
            return (
              <div
                key={index}
                className="bg-[#b2dffd] p-4 rounded-lg shadow w-3/4 text-center text-[#4a7298] text-bold"
              >
                <ul
                  key={index}
                  className="list-disc pl-6 space-y-1 w-full list-none"
                >
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
          return null;
        })}
    </div>
    </div>
  );
}
