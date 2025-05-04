import Link from "next/link";
import Image from "next/image";

export default function FooterLandingPage() {
    return (
      <>
        <div className="bg-[#0d2e4e] text-white py-4 px-60 flex justify-between"> 
            <div className="flex">
                <p className="w-70 text-[.9rem] self-center text-justify text-[#bed4ee]">
                    Somos una plataforma de formación interactiva y gamificada sobre habilidades clave para la vida que no se enseñan en la universidad, accesible desde tu navegador.
                </p>
                <Image 
                  src="/logoGrandeSencillo.svg"
                  width={180}
                  height={180}
                  alt="imagen"
                />
            </div>
        </div>
        <div className="bg-[#0d2e4e] text-white px-60 pb-4">
            <div className="border-t-2 border-[#38597c] pb-4"/>
            <div className="flex text-[#38597c] text-[1.2rem] justify-between">
                <div className="flex gap-6">
                    <p>
                        Copyright UniPlus 2025
                    </p>
                    <Link href="">
                    Política de privacidad
                    </Link>
                    <Link href="">
                    Términos de uso
                    </Link>
                    <Link href="">
                    Política de cookies
                    </Link>
                </div>
                <div className="flex">
                    <Link href="">
                        Red social
                    </Link>
                    <Link href="">
                        Red social
                    </Link>
                    <Link href="">
                        Red social
                    </Link>
                </div>
            </div>
        </div>
      </>
    );
}