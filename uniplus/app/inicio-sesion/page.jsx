"use client";
import styles from './page.module.css';
import { useRouter } from 'next/navigation';
import Link from "next/link";

export default function LoginPage() {
  const router = useRouter()

  async function onSubmit(event){
    event.preventDefault();
    const formData = new FormData(event.target);
    const email = formData.get('email');
    const password = formData.get('password');

    const response = await fetch("/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({email, password}),
    });

    if (response.ok) {
      router.push('/perfil')
    } else {
      const errorData = await response.json();
      alert(errorData.message || "Error al iniciar sesión");
      }
  }

  return (
    <div className={`${styles.fondo} flex justify-center items-center h-screen`}>
      <div className="bg-white/10 backdrop-blur-md p-8 rounded-lg shadow-lg w-full max-w-md flex flex-col items-center gap-4">
        <h1 className="text-black text-3xl">Iniciar Sesión</h1>
        <div className="flex gap-1">
          <h2 className="text-black text-sm">¿Es tu primera vez?</h2>
          <Link href="/registro" className="text-blue-500 text-sm underline">
            Regístrate
          </Link>
        </div>
        <form className="flex flex-col gap-4 w-full" onSubmit={onSubmit}>
          <input
            type="text"
            name="email"
            placeholder="Correo electrónico"
            className="p-2 border border-gray-300 rounded text-black"
          />
          <input
            type="password"
            name="password"
            placeholder="Contraseña"
            className="p-2 border border-gray-300 rounded text-black"
          />
          <button type="submit" className="p-2 bg-blue-400 text-white rounded hover:bg-blue-500 active:bg-blue-600 transition-colors duration-200">
            Iniciar sesión
          </button>
        </form>
      </div>
    </div>
  );  
}