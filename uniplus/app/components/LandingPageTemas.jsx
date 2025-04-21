import Image from "next/image";

export default function LandingPageTemas(){
    return (
        <>
          <div className="justify-center relative bottom-1 ">
            <div className=" bg-gradient-to-b from-[#bfe4f9] to-[#ffffff] py-16">
                <p className="text-3xl text-[#0e2d4e] font-bold bg-clip-text font-serif leading-tight text-center pb-4" style={{ fontFamily: '"Source Sans Pro", sans-serif' }}>
                    Aprende sobre temas importantes en la vida, de forma práctica y divertida
                </p>
                <div className="w-30 mx-auto bg-[#1b5997] h-1 rounded mb-6"/>
                <p className="w-1/2 mx-auto pt-2 text-[#304861] py-10 text-center text-[1.1rem]">
                Con Uni+ accedes a cursos interactivos, gamificados y diseñados para ayudarte a crecer en áreas esenciales de la vida. Aprende a tu ritmo, con contenido accesible y significativo.
                </p>    
                <div className="flex gap-6 justify-center pb-16">
                    <div>
                    <Image
                        src="/logoDesarrolloPersonal.svg"
                        width={200}
                        height={200}
                        alt="imagen"
                    />
                    <p className="text-center py-4 text-[#304861] font-bold text-xl">Desarrollo Personal</p>
                    </div>
                    <div>
                    <Image
                        src="/logoEmprenNegocios.svg"
                        width={200}
                        height={200}
                        alt="imagen"
                    />
                    <p className="text-center py-4 text-[#304861] font-bold text-xl">Emprendimiento</p>
                    </div>
                    <div>
                    <Image
                        src="/logoFinanzasPersonales.svg"
                        width={200}
                        height={200}
                        alt="imagen"
                    />
                    <p className="text-center py-4 text-[#304861] font-bold text-xl">Finanzas Personales</p>
                    </div>
                    <div>
                    <Image
                        src="/logoTecnolBasica.svg"
                        width={200}
                        height={200}
                        alt="imagen"
                    />
                    <p className="text-center py-4 text-[#304861] font-bold text-xl">Tecnología Básica</p>
                    </div>
                    <div>
                    <Image
                        src="/logoBienestarSalud.svg"
                        width={200}
                        height={200}
                        alt="imagen"
                    />
                    <p className="text-center py-4 text-[#304861] font-bold text-xl">Salúd y Bienestar</p>
                    </div>
                    <div>
                    <Image
                        src="/logoArte.svg"
                        width={200}
                        height={200}
                        alt="imagen"
                    />
                    <p className="text-center py-4 text-[#304861] font-bold text-xl">Arte</p>
                    </div>
                </div>
            </div>  
        </div>
        </>
    );
}