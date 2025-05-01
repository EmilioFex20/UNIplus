"use client"
import { useState } from "react";
export default function contact() {
  const [activeItem, setActiveItem] = useState("cursos");
  let user="Usuario"

  return (
  <>
    <div className="flex px-50 ">
      <div className="w-3/5">
        <p className="text-4xl font-bold pb-2 ">¡Hola {user}!</p>
        <p className="text-xl pb-4">Manos a la obra</p>
        <div className="bg-blue-50 border-2 border-[#2f66a5] rounded-lg p-4 mr-15">
          <div className="flex justify-between">
            <p className="text-xl font-bold">Mi Aprendizaje</p>
            <div className="flex text-gray-700 gap-4 ">
              <button onClick={() => setActiveItem("cursos")} className={`flex py-2 px-2 cursor-pointer box-border border-b-3 border-blue-50 hover:bg-gray-200 ${activeItem === "cursos"? "border-blue-600 font-bold text-black":"" }`}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 mr-2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
                </svg>
                <p>Cursos</p>
              </button>
              <button onClick={() => setActiveItem("medallas")} className={`flex py-2 px-2 cursor-pointer box-border border-b-3 border-blue-50 hover:bg-gray-200 ${activeItem === "medallas"? "border-blue-600 font-bold text-black":"" }`}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 mr-2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 0 1 3 3h-15a3 3 0 0 1 3-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 0 1-.982-3.172M9.497 14.25a7.454 7.454 0 0 0 .981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 0 0 7.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 0 0 2.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 0 1 2.916.52 6.003 6.003 0 0 1-5.395 4.972m0 0a6.726 6.726 0 0 1-2.749 1.35m0 0a6.772 6.772 0 0 1-3.044 0" />
              </svg>
                <p>Medallas</p>
              </button>
              <p></p>
            </div>
          </div>
          {activeItem === "cursos" && (
            <div>
              <h2 className="text-xl font-semibold">Contenido de Cursos</h2>
              <p>Aquí van los módulos y lecciones del curso general.</p>
            </div>
          )}
          {activeItem === "medallas" && (
            <div>
              <h2 className="text-xl font-semibold">Contenido de Medallas</h2>
              <p>Medallas Obtenidas</p>
            </div>
          )}
          
        </div>

      </div>
      <div className="">
        sd
      </div>
    </div>
  </>
  );
}
