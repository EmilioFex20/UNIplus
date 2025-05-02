import Link from "next/link";

export default function FullButton({href,text}) {
    return (
      <>
        <Link href={href}>
              <button className="text-xl py-1 px-2 rounded text-white border-2 border-[#6492C0] bg-[#6492C0] transition hover:cursor-pointer hover:bg-[#c0dbf7] hover:text-[#3c5b7a]">
                {text}
              </button>
        </Link>
      </>
    );
  }