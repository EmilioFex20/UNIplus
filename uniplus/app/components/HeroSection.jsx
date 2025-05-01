import Image from "next/image";
import FullButton from "./FullButton";
import CloudsBg from "./CloudsBg";

export default function HeroSection(){
    return (
        <>
        <div className="relative overflow-hidden">
            <CloudsBg/>
            <div className="py-12 relative z-10">
                <div className="flex justify-center py-2">
                    <p className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#8cbaeb] to-[#3b86d6] leading-tight text-center w-2/3">
                    Porque la vida no viene con manual, en Uni+ te damos las herramientas que necesitas para despegar.
                    </p>
                </div>
                <div className="flex justify-around">
                    <Image
                    src="/infoAboutUs.svg"
                    width={500}
                    height={500}
                    alt="imagen"
                    />
                    <Image
                    src="/logoGrandeSencillo.svg"
                    width={500}
                    height={500}
                    alt="imagen"
                    className="filter-blue"
                    />
                </div>
            </div>
        </div>
    </>
    );
}