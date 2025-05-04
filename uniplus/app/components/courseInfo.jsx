export function CourseInfo({ nombresCursos, descripcionCursos }) {
  return (
    <div>
      <h1 className="text-black font-bold text-4xl mb-4 px-20">
        Bienvenido al curso de {nombresCursos}
      </h1>
      <p className="text-black text-xl mb-4 px-20">{descripcionCursos}</p>
    </div>
  );
}
