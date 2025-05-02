import React from "react";
import { Video } from "@/app/components/video";

export default function LessonRenderer({ contenido }) {
  return (
    <div className="space-y-6">
      {contenido.map((item, index) => {
        if (item.tipo === "section") {
          return (
            <div key={index}>
              {item.titulo && (
                <h2 className="text-xl text-black font-semibold mb-1">{item.titulo}</h2>
              )}
              {item.texto && <p>{item.texto}</p>}
            </div>
          );
        }
        if (item.tipo === "list") {
          return (
            <ul key={index} className="list-disc pl-6 space-y-1">
              {item.items.map((text, i) => (
                <li key={i}>{text}</li>
              ))}
            </ul>
          );
        }
        if (item.tipo === "video") {
          <Video src={item.src} />
        }
        return null;
      })}
    </div>
  );
}
