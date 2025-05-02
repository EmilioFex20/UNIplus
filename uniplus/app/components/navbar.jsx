"use client"
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Avatar from "./Avatar";

export default function NavBar(){
    const pathName = usePathname();

    return(
        <header>
          <nav className="w-full  text-white px-16 pt-3 flex items-center justify-between">
            <div className="flex items-center">
              <div className="flex items-center">
                <Image
                  src="/logoHorizontalGrande.svg"
                  width={300}
                  height={100}
                  alt="imagen"
                  priority
                  className="filter-blue relative right-10"
                /> ``
              </div>
              <div className="text-2xl flex items-center gap-20 text-[#2f66a5]">
                <Link href="/contacto" className={`flex items-center gap-2 cursor-pointer hover:text-[#85baf7] ${pathName==="/contacto"? "text-[#092c53] font-bold":""}`}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="size-7 ">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Zm6-10.125a1.875 1.875 0 1 1-3.75 0 1.875 1.875 0 0 1 3.75 0Zm1.294 6.336a6.721 6.721 0 0 1-3.17.789 6.721 6.721 0 0 1-3.168-.789 3.376 3.376 0 0 1 6.338 0Z" />
                </svg>
                  <span>Perfil</span>
                </Link>
                <Link href="/courses" className={`flex items-center gap-2 cursor-pointer hover:text-[#85baf7] ${pathName==="/courses"? "text-[#092c53] font-bold":""}`}>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="size-7">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
                  </svg>
                  <span>Cursos</span>
                </Link>
              </div>
            </div>
            <div className="flex items-center gap-10 text-[#2f66a5]">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="size-10 cursor-pointer hover:text-[#85baf7]">
                <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="size-10 cursor-pointer hover:text-[#85baf7]">
                <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0M3.124 7.5A8.969 8.969 0 0 1 5.292 3m13.416 0a8.969 8.969 0 0 1 2.168 4.5" />
              </svg>
              <Avatar />
            </div>
          </nav>
          <div className="relative w-full ">
            <Image
              src="/nubes.png"
              alt="Descripción de la imagen"
              width={1920}             
              height={1080}             
              className="w-full h-auto object-cover inset-0 z-10"
              sizes="100vw"
              >
                
            </Image>
          </div>
        </header>
    )
}