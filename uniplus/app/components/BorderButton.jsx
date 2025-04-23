import Link from "next/link";

export default function BorderButton({href, text}) {
    return (
      <>
        <Link href={href}>
              <button className="text-[#6492C0] border-2 border-[#6492C0] text-xl py-1 px-2 rounded hover:cursor-pointer transition hover:text-white hover:border-2 hover:bg-[#6492C0]">
                <li className="">{text}</li>
              </button>
        </Link>
      </>
    );
}