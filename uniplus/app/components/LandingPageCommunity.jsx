import Image from "next/image";

export default function LandingPageCommunity(){
    return (
        <>
          <div className="w-4/5  mx-auto  mb-10">
            <div>
                <h1 className="text-3xl ">
                    Comunidad
                </h1>
                <div className="w-30 bg-[#1b5997] h-1 rounded mb-6 my-4"/>
                <p>
                    Conecta con nuestra comunidad que cada día aprende más ...
                </p>
            </div>
            <div className="grid grid-cols-3 gap-6 justify-items-center my-10">
                <Image
                    src="/coment.png"
                    width={500}
                    height={500}
                    alt="imagen"
                />
                <Image
                    src="/coment.png"
                    width={500}
                    height={500}
                    alt="imagen"
                />
                <Image
                    src="/coment.png"
                    width={500}
                    height={500}
                    alt="imagen"
                />
                <Image
                    src="/coment.png"
                    width={500}
                    height={500}
                    alt="imagen"
                />
                <Image
                    src="/coment.png"
                    width={500}
                    height={500}
                    alt="imagen"
                />
                <Image
                    src="/coment.png"
                    width={500}
                    height={500}
                    alt="imagen"
                />
            </div>
          </div>
        </>
    );
}