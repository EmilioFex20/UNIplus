"use client";
import styles from './page.module.css';
import { useRouter } from 'next/navigation';

export default function RegisterPage() {
  const router = useRouter()

  async function onSubmit(event){
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());

    const response = await fetch("/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      router.push('/inicio-sesion')    
    } else {
      alert("Error al registrar el usuario");
    }
  }

  return (
    <div className={`${styles.fondo} flex justify-center items-center h-screen`}>
    <div className="bg-white/10 backdrop-blur-md p-12 rounded-lg shadow-lg w-full max-w-lg flex flex-col items-center gap-4">
    <h1 className="text-black text-3xl">Registrate</h1>
    <div className="flex gap-1"></div>
    <form className="flex flex-col gap-4 mt-4" onSubmit={onSubmit}>
      <div className="flex gap-4">
        {" "}
          <input
            type="text"
            name="name"
            placeholder="Nombre"
            className="p-2 border border-gray-300 rounded text-black"
          />
          <input
            type="text"
            name="lastName"
            placeholder="Apellido"
            className="p-2 border border-gray-300 rounded text-black"
          />
        </div>

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
        <button type="submit" className="p-2 bg-blue-400 text-white rounded">
          Registrarse
        </button>
      </form>
    </div>
    </div>
  );
}
