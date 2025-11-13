import FullButton from "./FullButton";

export default function LandingPageEnd() {
  return (
    <section className="bg-gradient-to-r from-[#113e6e] to-[#001b38] border-b-2 border-[#38597c]">
      <div className="mx-auto flex max-w-4xl flex-col items-center justify-center px-4 py-10 sm:!py-14 lg:!py-16 text-center">
        <p className="mb-6 text-2xl font-semibold text-white sm:!text-3xl lg:!text-4xl">
          ¿Listo para empezar a aprender?
        </p>
        <FullButton href="/inicio-sesion" text="Iniciar Sesión" />
      </div>
    </section>
  );
}
