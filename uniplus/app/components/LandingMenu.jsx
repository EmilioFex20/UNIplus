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
    <>
    <div className="px-60 bg-blue-100">
      <header role="banner" className="w-full ">
        <ul className="flex justify-between">
          <Image
          src="/logoHorizontalGrande.svg"
          width={300}
          height={300}
          alt="imagen"
          className="filter-blue relative right-15"
          />
          <div className="flex gap-6 self-center">
          <BorderButton href="/register" text="Registrarse" />
          <FullButton href="/login" text="Iniciar Sesión"/>
          </div>
        </ul>
      </header>
    </div>
    </>
  );
}
