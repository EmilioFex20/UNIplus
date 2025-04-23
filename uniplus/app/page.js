import Image from "next/image";
import Menu from "./components/LandingMenu";
import LandingMenu from "./components/LandingMenu";
import FooterLandingPage from "./components/FooterLandingPage";
import LandingPageBody from "./components/LandingPageBody";


export default function Home() {
  const nubes = Array.from({ length: 55 }, (_, i) => {
    const size = `${Math.random() * 400 + 50}px`; 
    const top = `${Math.random() * 90}vh`; 
    const delay = `-${Math.random() * 30}s`; 
    const duration = `${30 + Math.random() * 40}s`; 
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

      <div className="w-full">
        <LandingMenu></LandingMenu>
        <LandingPageBody></LandingPageBody>



        <FooterLandingPage></FooterLandingPage>
        <Menu />

      </div>
    </main>
  );
}
