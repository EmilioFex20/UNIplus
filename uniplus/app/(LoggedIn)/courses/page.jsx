import { CourseCard } from "@/app/components/courseCard";

export default function Roadmap() {
  return (
    <>
      <div
        className="relative w-full h-screen bg-no-repeat bg-contain "
        style={{ backgroundImage: "url('/caminoRoadmap.svg')" }}
      >
        <CourseCard idCurso={0} />
        <CourseCard idCurso={1} />
        <CourseCard idCurso={2} />
        <CourseCard idCurso={3} />
        <CourseCard idCurso={4} />
        <CourseCard idCurso={5} />
      </div>
    </>
  );
}
