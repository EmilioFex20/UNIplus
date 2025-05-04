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
      router.push('/contacto')
    } else {
      const errorData = await response.json();
      alert(errorData.message || "Error al iniciar sesión");
      }
  }

  return (
    <div className={`${styles.fondo} flex justify-center items-center h-screen`}>
      <div className="bg-white/20 backdrop-blur-xl p-10 rounded-2xl shadow-2xl w-full max-w-md flex flex-col items-center gap-6 transition-all">
        <h1 className="text-white text-4xl">Iniciar Sesión</h1>
        <div className="flex gap-2 text-sm text-white">
          <span>¿Es tu primera vez?</span>
          <Link href="/registro" className="text-blue-500 hover:text-blue-100 transition-colors underline">
            Regístrate
          </Link>
        </div>
        <form className="flex flex-col gap-4 w-full" onSubmit={onSubmit}>
          <input
            type="text"
            name="email"
            placeholder="Correo electrónico"
            className="p-3 border border-gray-300 rounded-lg bg-white/80 placeholder-gray-600 text-black focus:outline-none focus:ring-2 focus:ring-blue-300"
          />
          <input
            type="password"
            name="password"
            placeholder="Contraseña"
            className="p-3 border border-gray-300 rounded-lg bg-white/80 placeholder-gray-600 text-black focus:outline-none focus:ring-2 focus:ring-blue-300"
          />
          <button type="submit" className="p-3 bg-blue-300 text-blue-900 font-medium rounded-lg hover:bg-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-100 transition duration-200">
            Iniciar sesión
          </button>
        </form>
      </div>
    </div>
  );  
}