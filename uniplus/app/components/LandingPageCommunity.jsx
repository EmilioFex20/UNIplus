import Image from "next/image";

export default function LandingPageCommunity() {
  return (
    <section className="mb-12 px-4">
      <div className="mx-auto max-w-6xl">
        {/* Título + texto */}
        <div>
          <h2 className="text-2xl sm:!text-3xl font-bold text-black">
            Comunidad
          </h2>
          <div className="mt-3 mb-5 h-1 w-20 rounded bg-[#1b5997]" />
          <p className="text-[1rem] sm:!text-[1.05rem] text-black max-w-2xl">
            Conecta con nuestra comunidad que cada día aprende más, comparte
            progreso, retos y logros mientras desarrollas habilidades clave para
            tu vida.
          </p>
        </div>

        {/* Grid de comunidad (cards) */}
        <div className="mt-10 grid grid-cols-1 sm:!grid-cols-2 lg:!grid-cols-3 gap-6 justify-items-center">
          {/* Card 1 */}
          <div className="w-full max-w-sm rounded-2xl bg-white shadow-md p-5 border border-[#e0e7f1]">
            <p className="mb-2 text-sm font-semibold text-[#1b4b7b]">
              Retos semanales
            </p>
            <p className="text-sm text-[#304861]">
              Súmate a desafíos diseñados para que pongas en práctica lo que
              aprendes y mantengas tu motivación al máximo.
            </p>
          </div>

          {/* Card 2 */}
          <div className="w-full max-w-sm rounded-2xl bg-white shadow-md p-5 border border-[#e0e7f1]">
            <p className="mb-2 text-sm font-semibold text-[#1b4b7b]">
              Progreso en comunidad
            </p>
            <p className="text-sm text-[#304861]">
              Ve cómo otras personas avanzan, comparte tus logros y aprende de
              sus experiencias y estrategias.
            </p>
          </div>

          {/* Card 3 */}
          <div className="w-full max-w-sm rounded-2xl bg-white shadow-md p-5 border border-[#e0e7f1]">
            <p className="mb-2 text-sm font-semibold text-[#1b4b7b]">
              Espacios seguros
            </p>
            <p className="text-sm text-[#304861]">
              Un entorno pensado para que puedas aprender, preguntar y crecer
              sin juicios, a tu propio ritmo.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
