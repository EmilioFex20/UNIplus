import Image from "next/image";
import Menu from "./components/LandingMenu";
import LandingMenu from "./components/LandingMenu";
import FooterLandingPage from "./components/FooterLandingPage";
import LandingPageBody from "./components/LandingPageBody";

export default function Home() {
  return (
    <>
      <div className="w-full">
        <LandingMenu></LandingMenu>
        <LandingPageBody></LandingPageBody>



        <FooterLandingPage></FooterLandingPage>
      </div>
    </>
  );
}
