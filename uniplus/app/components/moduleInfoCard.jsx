"use client";

export function ModuleInfoCard({
  idCurso,
  idModulo,
  nombreModulo,
  descripcionModulo,
  moduleKey
}) {
  const handleClick = async () => {
    const moduleUrl = `/courses/${idCurso}/${idModulo}`;
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
    <div className="w-full h-90 flex flex-col overflow-auto p-4 bg-white rounded-xl shadow-lg">
      <div className="">
        <h1 className="text-black font-bold text-2xl mb-2">{nombreModulo}</h1>
      </div>
      <p className="text-black pb-5 text-xl break-words">
        {descripcionModulo}
      </p>
      <div className="mt-auto pt-4">
        <button
          onClick={handleClick}
          alt="Iniciar Curso"
          className="relative rounded-full bg-sky-200 p-3 text-xl text-black hover:bg-sky-600 cursor-pointer"
        >
          Iniciar Curso
        </button>
      </div>
    </div>
  );
}
