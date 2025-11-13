import Link from "next/link";

export default function BorderButton({ href, text }) {
  return (
    <>
      <Link href={href}>
        <button className="text-[#6492C0] border-2 border-[#6492C0] text-sm sm:text-xl py-1 px-2 rounded hover:cursor-pointer transition hover:text-[#FFFFFF] hover:bg-[#6492C0]">
          {text}
        </button>
      </Link>
    </>
  );
}
