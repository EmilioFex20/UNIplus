import Link from "next/link";
import Image from "next/image";

export default function FooterLandingPage() {
  return (
    <footer className="bg-[#0d2e4e] text-white">
      {/* Top section */}
      <div className="px-4 py-6 sm:!px-6 lg:!px-16 xl:!px-24">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 md:!flex-row md:!justify-between">
          <p className="text-[0.9rem] text-justify text-[#bed4ee] md:!max-w-md">
            Somos una plataforma de formación interactiva y gamificada sobre
            habilidades clave para la vida que no se enseñan en la universidad,
            accesible desde tu navegador.
          </p>

          <Image
            src="/logoGrandeSencillo.svg"
            width={180}
            height={180}
            alt="imagen"
            className="h-auto w-24 sm:w-32 md:w-40"
          />
        </div>
      </div>

      {/* Bottom section */}
      <div className="px-4 pb-6 sm:!px-6 lg:!px-16 xl:!px-24">
        <div className="mx-auto max-w-6xl">
          <div className="mb-4 border-t-2 border-[#38597c]" />

          <div className="flex flex-col gap-4 text-[0.95rem] text-[#38597c] md:!flex-row md:!items-center md:!justify-between">
            {/* Left links */}
            <div className="flex flex-col gap-2 sm:!flex-row sm:flex-wrap sm:items-center sm:gap-x-6">
              <p>Copyright UniPlus 2025</p>
              <Link href="" className="hover:text-[#bed4ee]">
                Política de privacidad
              </Link>
              <Link href="" className="hover:text-[#bed4ee]">
                Términos de uso
              </Link>
              <Link href="" className="hover:text-[#bed4ee]">
                Política de cookies
              </Link>
            </div>

            {/* Right social links */}
            <div className="flex gap-4">
              <Link href="" className="hover:text-[#bed4ee]">
                Red social
              </Link>
              <Link href="" className="hover:text-[#bed4ee]">
                Red social
              </Link>
              <Link href="" className="hover:text-[#bed4ee]">
                Red social
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
