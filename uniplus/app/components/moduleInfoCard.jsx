export function ModuleInfoCard({ nombreModulo }) {
  return (
    <div className="max-w-xl h-90 flex flex-col overflow-auto p-4 bg-white rounded-xl shadow-lg">
      <h1 className="text-black font-bold text-lg mb-2">{nombreModulo}</h1>
      <p className="text-black pb-5 text-base break-words">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo eaque nemo
        facere placeat laudantium tenetur aliquid nulla incidunt, maiores vel
        quia ex nobis ipsa veritatis reprehenderit architecto veniam blanditiis
        et. Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni,
        dolores. Rerum dolorum modi cumque tempore libero voluptate, fuga
        minima.
      </p>
      <div className="mt-auto pt-4">
        <button
          alt="Iniciar Curso"
          className="relative rounded-full bg-sky-200 p-3 text-sm text-black hover:bg-sky-600 cursor-pointer"
        >
          Iniciar Curso
        </button>
      </div>
    </div>
  );
}
