import Image from "next/image";
import Menu from "./components/menu";

export default function Home() {
  return (
    <>
      <div className="flex justify-between">
        <div className="h-26">
            <Image src="/Inicio.png" width={500} height={500} alt="imagen"/>
        </div>
        <Menu></Menu>
      </div>
    </>
  );
}
