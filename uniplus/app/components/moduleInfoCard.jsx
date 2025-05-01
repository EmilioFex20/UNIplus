"use client";

export function ModuleInfoCard({
  idCurso,
  idModulo,
  nombreModulo,
  descripcionModulo,
}) {
  const handleClick = () => {
    window.location.href = `/courses/${idCurso}/${idModulo}`;
  };
  return (
    <div className="w-full h-90 flex flex-col overflow-auto p-4 bg-white rounded-xl shadow-lg">
      <div className="">
        <h1 className="text-black font-bold text-lg mb-2">{nombreModulo}</h1>
      </div>
      <p className="text-black pb-5 text-base break-words">
        {descripcionModulo}
      </p>
      <div className="mt-auto pt-4">
        <button
          onClick={handleClick}
          alt="Iniciar Curso"
          className="relative rounded-full bg-sky-200 p-3 text-sm text-black hover:bg-sky-600 cursor-pointer"
        >
          Iniciar Curso
        </button>
      </div>
    </div>
  );
}
