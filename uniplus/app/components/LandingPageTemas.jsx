import Image from "next/image";

export default function LandingPageTemas() {
  return (
    <section className="relative bg-gradient-to-b from-[#bfe4f9] to-[#ffffff] py-12 sm:py-16">
      <div className="mx-auto max-w-6xl px-4">
        {/* Título */}
        <p className="text-center text-2xl sm:!text-3xl text-[#0e2d4e] font-bold leading-tight pb-4">
          Aprende sobre temas importantes en la vida, de forma práctica y
          divertida
        </p>

        {/* Línea separadora */}
        <div className="mx-auto mb-6 h-1 w-24 rounded bg-[#1b5997]" />

        {/* Descripción */}
        <p className="mx-auto max-w-3xl pt-2 pb-10 text-center text-[1rem] sm:!text-[1.1rem] text-[#304861]">
          Con Uni+ accedes a cursos interactivos, gamificados y diseñados para
          ayudarte a crecer en áreas esenciales de la vida. Aprende a tu ritmo,
          con contenido accesible y significativo.
        </p>

        {/* Grid de temas */}
        <div className="grid grid-cols-2 sm:!grid-cols-3 xl:!grid-cols-6 gap-x-8 gap-y-10 justify-items-center pb-4">
          <div className="flex flex-col items-center text-center">
            <Image
              src="/logoDesarrolloPersonal.svg"
              width={200}
              height={200}
              alt="Desarrollo personal"
              className="h-24 w-24 sm:h-32 sm:w-32"
            />
            <p className="pt-4 text-xl font-bold text-[#304861]">
              Desarrollo Personal
            </p>
          </div>

          <div className="flex flex-col items-center text-center">
            <Image
              src="/logoEmprenNegocios.svg"
              width={200}
              height={200}
              alt="Emprendimiento"
              className="h-24 w-24 sm:h-32 sm:w-32"
            />
            <p className="pt-4 text-xl font-bold text-[#304861]">
              Emprendimiento
            </p>
          </div>

          <div className="flex flex-col items-center text-center">
            <Image
              src="/logoFinanzasPersonales.svg"
              width={200}
              height={200}
              alt="Economía"
              className="h-24 w-24 sm:h-32 sm:w-32"
            />
            <p className="pt-4 text-xl font-bold text-[#304861]">Economía</p>
          </div>

          <div className="flex flex-col items-center text-center">
            <Image
              src="/logoTecnolBasica.svg"
              width={200}
              height={200}
              alt="Tecnología"
              className="h-24 w-24 sm:h-32 sm:w-32"
            />
            <p className="pt-4 text-xl font-bold text-[#304861]">Tecnología</p>
          </div>

          <div className="flex flex-col items-center text-center">
            <Image
              src="/logoBienestarSalud.svg"
              width={200}
              height={200}
              alt="Salud y bienestar"
              className="h-24 w-24 sm:h-32 sm:w-32"
            />
            <p className="pt-4 text-xl font-bold text-[#304861]">
              Salud y Bienestar
            </p>
          </div>

          <div className="flex flex-col items-center text-center">
            <Image
              src="/logoArte.svg"
              width={200}
              height={200}
              alt="Arte"
              className="h-24 w-24 sm:h-32 sm:w-32"
            />
            <p className="pt-4 text-xl font-bold text-[#304861]">Arte</p>
          </div>
        </div>
      </div>
    </section>
  );
}
