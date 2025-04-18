import Image from "next/image";
import Menu from "./components/menu";

export default function Home() {
  const nubes = Array.from({ length: 55 }, (_, i) => {
    const size = `${Math.random() * 400 + 50}px`; // entre 50px y 150px
    const top = `${Math.random() * 90}vh`; // entre 0 y 90% del alto
    const delay = `-${Math.random() * 30}s`; // negativo para que ya estén moviéndose
    const duration = `${30 + Math.random() * 40}s`; // 30s a 70s
    const opacity = `${0.3 + Math.random() * 0.5}`;

    return {
      id: i,
      size,
      top,
      delay,
      duration,
      opacity,
    };
  });

  return (
    <main className="relative w-full h-screen overflow-hidden bg-[#b8d1e7]">
      {/* Nubes como fondo */}
      {nubes.map((nube) => (
        <img
          key={nube.id}
          src="/nubeazuul.png"
          alt="nube"
          className="animate-cloud"
          style={{
            top: nube.top,
            width: nube.size,
            opacity: nube.opacity,
            animationDelay: nube.delay,
            animationDuration: nube.duration,
          }}
        />
      ))}

      {/* Contenedor para el Logo, Menú y el Inicio de sesión */}
      <div className="absolute top-0 left-0 right-0 p-4 flex justify-between items-center z-10">
        <div className="h-26">
          <Image
            src="/logoChicoSencillo.svg"
            width={500}
            height={500}
            alt="imagen"
            className="filter-blue"
          />
        </div>
        <Menu />
        {/* Aquí podrías agregar un componente de inicio de sesión */}
      </div>
    </main>
  );
}
