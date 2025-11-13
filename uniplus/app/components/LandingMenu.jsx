"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import BorderButton from "./BorderButton";
import FullButton from "./FullButton";

export default function LandingMenu() {
  const pathName = usePathname();
  console.log(pathName);

  return (
    <div className="bg-blue-100 fixed z-100 w-full">
      <header className="w-full">
        <div
          className="
            mx-auto
            flex flex-row items-center gap-4
            px-4 py-4
            sm:!flex-row
            sm:!justify-between
            sm:!px-8
            lg:!px-16
            xl:!px-24
          "
        >
          <div className="flex justify-center sm:justify-start">
            <Image
              src="/logoHorizontalGrande.svg"
              width={300}
              height={300}
              alt="imagen"
              className="filter-blue w-64 h-auto sm:w-64"
              priority
            />
          </div>

          <div
            className="
             flex
              w-full
              flex-row
              items-stretch
              gap-3
              sm:!w-auto
              sm:!flex-row
              sm:!items-center
              sm:!justify-end
            "
          >
            <BorderButton href="/registro" text="Registrarse" />
            <FullButton href="/inicio-sesion" text="Iniciar Sesión" />
          </div>
        </div>
      </header>
    </div>
  );
}
