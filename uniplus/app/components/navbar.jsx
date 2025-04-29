"use client"
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function NavBar(){
    async function onClickLogout(){
        const response = await fetch("/api/auth/logout", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
        });
        if (response.ok) {
            window.location.href = "/";
        } else {
            const errorData = await response.json();
            alert(errorData.message || "Error al cerrar sesión");
        }
    }
    const pathName = usePathname();
    console.log(pathName);

    return(
        <div className="relative">
        <header className="bg-white py-4 z-10 relative">
          <div className="container mx-auto px-4 flex items-center justify-between">
            <div className="flex items-center">
              <div className="w-16 h-16 bg-sky-200 rounded-full flex items-center justify-center mr-4">
                <Image
                  src="/placeholder.svg?height=40&width=40"
                  alt="Logo"
                  width={40}
                  height={40}
                  className="opacity-70"
                />
              </div>
            </div>
            <nav>
              <ul className="flex space-x-8 md:space-x-12">
                {[
                  { href: "/perfil", label: "PERFIL" },
                  { href: "/cursos", label: "CURSOS" },
                  { href: "/ajustes", label: "AJUSTES" },
                  { href: "/contacto", label: "CONTACTO" },
                ].map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-gray-800 font-bold hover:text-sky-500 transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}

                <li>
                    <button onClick={onClickLogout} className="text-gray-800 font-bold hover:text-sky-500 transition-colors">
                      CERRAR SESIÓN
                    </button>
                </li>
              </ul>
            </nav>
          </div>
        </header>
          <div className="w-full overflow-hidden" style={{ marginTop: "-80px" }}>
          <img src="/nubes.svg" alt="Cloud divider" className="w-full" />
        </div>
      </div>
    )
}