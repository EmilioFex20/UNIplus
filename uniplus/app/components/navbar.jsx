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
                <Link href="/perfil" className={`flex items-center gap-2 cursor-pointer hover:text-[#85baf7] ${pathName==="/perfil"? "text-[#092c53] font-bold":""}`}>
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