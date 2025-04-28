"use client"
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
        <header role="banner" className="flex p-4 justify-between items-center bg-blue-400">
            <h1 className="text-2xl font-bold">UNI+</h1>
            <ul className="flex gap-4">
                <button onClick={onClickLogout} className="p-2 bg-blue-500 text-white rounded">
                    Cerrar Sesión
                </button>
            </ul>
        </header>
    )
}