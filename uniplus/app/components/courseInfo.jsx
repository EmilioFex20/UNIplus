export function CourseInfo({ nombresCursos, descripcionCursos }) {
  return (
    <div>
      <h1 className="text-black font-bold text-2xl mb-4 px-20">
        Bienvenido al curso de {nombresCursos}
      </h1>
      <p className="text-black text-base mb-4 px-20">{descripcionCursos}</p>
    </div>
  );
}
