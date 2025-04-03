"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

export default function Menu() {
  const pathName = usePathname();
  console.log(pathName);

  return (
    <>
      <header role="banner" className="flex p-4 pr-12 pt-10 justify-end">
        <ul className="flex gap-6">
          <Link href="/login">
            <li className="text-xl py-2 px-4">Iniciar Sesión</li>
          </Link>
          <Link href="/register">
            <button className="text-xl py-2 px-4 rounded hover:cursor-pointer bg-[#6492C0] text-white hover:bg-blue-400">
              <li className="">Registrarse</li>
            </button>
          </Link>
        </ul>
      </header>
    </>
  );
}
