import FullButton from "./FullButton";

export default function LandingPageEnd(){
    return (
        <>
            <div className="flex flex-col bg-gradient-to-r from-[#113e6e] to-[#001b38] p-10 border-b-2 border-[#38597c] h-70 list-none items-center justify-center">
                <p className="text-4xl text-white mb-6">
                    ¿Listo para empezar a aprender?
                </p>
                <FullButton href="/inicio-sesion" text="Iniciar Sesión"/>
            </div>
        </>
    );
}