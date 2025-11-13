"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Avatar from "./Avatar";

export default function NavBar() {
  const pathName = usePathname();
  const [open, setOpen] = useState(false);

  const linkBase =
    "flex items-center gap-2 cursor-pointer hover:text-[#85baf7] transition-colors";
  const activeLink = "text-[#092c53] font-bold";

  return (
    <header className="relative">
      {/* TOP NAV */}
      <nav
        className="
          w-full
          px-4 pt-3
          flex items-center justify-between gap-4
          sm:px-6
          lg:!px-16
        "
      >
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Image
            src="/logoHorizontalGrande.svg"
            width={300}
            height={100}
            alt="imagen"
            priority
            className="filter-blue w-40 h-auto sm:w-56 lg:w-64"
          />
        </div>

        {/* Desktop links */}
        <div
          className="
            hidden
            md:!flex
            items-center
            gap-10
            text-[#2f66a5]
            text-base
            lg:text-lg
          "
        >
          <div className="flex items-center gap-10">
            <Link
              href="/perfil"
              className={`${linkBase} ${
                pathName === "/perfil" ? activeLink : ""
              }`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Zm6-10.125a1.875 1.875 0 1 1-3.75 0 1.875 1.875 0 0 1 3.75 0Zm1.294 6.336a6.721 6.721 0 0 1-3.17.789 6.721 6.721 0 0 1-3.168-.789 3.376 3.376 0 0 1 6.338 0Z"
                />
              </svg>
              <span>Perfil</span>
            </Link>

            <Link
              href="/courses"
              className={`${linkBase} ${
                pathName === "/courses" ? activeLink : ""
              }`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25"
                />
              </svg>
              <span>Cursos</span>
            </Link>
          </div>

          <Avatar />
        </div>

        {/* Mobile: Avatar + burger */}
        <div className="flex items-center gap-4 md:!hidden text-[#2f66a5]">
          <Avatar />
        </div>
      </nav>

      {/* Nubes image */}
      <div className="relative w-full">
        <Image
          src="/nubes.png"
          alt="Descripción de la imagen"
          width={1920}
          height={1080}
          className="w-full h-auto object-cover inset-0 z-10"
          sizes="100vw"
        />
      </div>
    </header>
  );
}
