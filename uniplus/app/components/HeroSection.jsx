import Image from "next/image";
import FullButton from "./FullButton";

export default function HeroSection(){
    return (
        <>
        <div className="relative ">
            <div className="absolute inset-0 -z-10">
                <div> 
                <Image
                    src="/esquinaSupIzq.svg"
                    width={300}
                    height={300}
                    alt="imagen"
                    />
                </div>
                <div className="flex justify-end absolute bottom-0 w-full">
                    <Image
                    src="/esquinaInfDer.svg"
                    width={300}
                    height={300}
                    alt="imagen"
                    />
                </div>
            </div>

            <div className="py-12">
                <div className="flex justify-center py-2">
                    <p className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#8cbaeb] to-[#3b86d6] font-serif leading-tight text-center w-2/3" style={{ fontFamily: '"Source Sans Pro", sans-serif' }}>
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