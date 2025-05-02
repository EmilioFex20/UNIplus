"use client"
import { useEffect, useState } from 'react';
import Link from 'next/link';
const temas = [
  {
    title: "Economía",
    description: "Aprende los conceptos esenciales sobre economía para comprender el mundo y mejorar tu manejo del dinero.",
    color: "#e4c126",
    iconPath: "M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z",
    href: "/courses/1/"
  },
  {
    title: "Salud y Bienestar",
    description: "Cuida tu salud física y mental con conceptos clave sobre bienestar integral.",
    color: "red",
    iconPath: "M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z",
    href: "/"
  },
  {
    title: "Tecnología",
    description: "Domina herramientas tecnológicas y prepárate para un mundo digital.",
    color: "#5dc0ee",
    iconPath: "M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 12V5.25",
    href: "/"
  },
  {
    title: "Finanzas Personales",
    description: "Aprende a manejar tu dinero, ahorrar e invertir.",
    color: "#50C878",
    iconPath: "M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 12V5.25",
    href: "/"
  },
  {
    title: "Nutrición",
    description: "Conoce los fundamentos de una alimentación saludable.",
    color: "#FFA500",
    iconPath: "M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 12V5.25",
    href: "/"
  },
  {
    title: "Productividad",
    description: "Mejora tus hábitos y administra mejor tu tiempo.",
    color: "#9370DB",
    iconPath: "M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 12V5.25",
    href: "/"
  }
];

export default function CoursesContinue({economia}) {
  const [startIndex, setStartIndex] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);
  
  if (!mounted) return null;

  const visible = temas.slice(startIndex, startIndex + 3);

  const handleUp = () => {
    if (startIndex > 0) setStartIndex(startIndex - 1);
  };

  const handleDown = () => {
    if (startIndex + 3 < temas.length) setStartIndex(startIndex + 1);
  };

  return (
    <div>
      <h2 className="text-xl font-semibold mb-2 text-black">Continuar aprendiendo</h2>
      <div className="flex flex-col text-black">
        {visible.map((tema, key) => (
            <Link href={`${tema.href}${economia}`} key={key} className="group flex py-3 my-2 shadow bg-gray-50 hover:bg-[#c9eaff]  transition duration-300">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-20"
                    style={{ color: tema.color }}
                >
                <path strokeLinecap="round" strokeLinejoin="round" d={tema.iconPath} />
                </svg>
                <div className='flex justify-between w-full'>
                    <div className="content-center pl-4">
                        <p className="text-xl font-bold">{tema.title}</p>
                        <p className="text-[#333333]">{tema.description}</p>
                    </div>
                    <div className='content-center mx-2 text-transparent'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-15 rounded-full group-hover:bg-green-500/60 group-hover:text-white transition duration-300">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                    </div>
                </div>
            </Link>
        ))}
        <div className="flex justify-center gap-4 mt-2">
            <button onClick={handleUp} disabled={startIndex === 0} className="text-[#6492C0] disabled:opacity-30"
            >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-10 text-black">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
                </svg>
            </button>
            <button onClick={handleDown} disabled={startIndex + 3 >= temas.length} className="text-[#6492C0] disabled:opacity-30"
            >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-10 text-black">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                </svg>
            </button>
        </div>
      </div>
    </div>
  );
}