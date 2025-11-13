import Image from "next/image";
import FullButton from "./FullButton";
import CloudsBg from "./CloudsBg";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      <CloudsBg />

      <div className="relative z-10 px-4 py-10 sm:py-14 lg:py-20">
        <div className="mx-auto max-w-6xl">
          {/* Texto principal */}
          <div className="flex justify-center">
            <p
              className="
                max-w-3xl
                text-center
                text-2xl
                sm:text-3xl
                lg:text-4xl
                font-bold
                leading-tight
                text-transparent
                bg-clip-text
                bg-gradient-to-r
                from-[#8cbaeb]
                to-[#3b86d6]
              "
            >
              Porque la vida no viene con manual, en Uni+ te damos las
              herramientas que necesitas para despegar.
            </p>
          </div>

          {/* Imágenes */}
          <div
            className="
              mt-10
              flex
              flex-col
              items-center
              gap-6
              md:flex-row
              md:justify-center
              lg:justify-between
            "
          >
            <Image
              src="/logoGrandeSencillo.svg"
              width={500}
              height={500}
              alt="imagen"
              className="w-64 h-auto filter-blue sm:w-80 lg:w-[420px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
