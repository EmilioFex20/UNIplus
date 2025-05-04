"use client";

export function LessonInfoCard({
  idCurso,
  idModulo,
  idLeccion,
  nombreLeccion,
  moduleKey
}) {
  const handleClick = async () => {
    const moduleUrl = `/courses/${idCurso}/${idModulo}/${idLeccion}`;
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
    <div className="w-full h-35 flex flex-col overflow-auto p-4 bg-white rounded-xl shadow-lg">
      <div className="">
        <h1 className="text-black font-bold text-xl mb-2">{nombreLeccion}</h1>
      </div>
      <div className="mt-auto pt-4">
        <button
          onClick={handleClick}
          alt="Iniciar Curso"
          className="relative rounded-full bg-sky-200 p-3 text-base text-black hover:bg-sky-600 cursor-pointer"
        >
          Iniciar Lección
        </button>
      </div>
    </div>
  );
}
