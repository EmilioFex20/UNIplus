"use client"
import Link from "next/link"
import { usePathname } from "next/navigation";

export default function NavBar(){
    const pathName = usePathname();
    console.log(pathName);

    return(
        <header role="banner" className="flex p-4 justify-between items-center bg-blue-400">
            <h1 className="text-2xl font-bold">UNI+</h1>
            <ul className="flex gap-4">
                <Link href="/about">
                    <li className={pathName == "/about" ? "font-bold" : ""}>Iniciar Sesión</li>
                </Link>
                
                <Link href="/">
                    <li className={pathName == "/" ? "font-bold" : ""}>Registrarse</li>
                </Link>
            </ul>
        </header>
    )
}