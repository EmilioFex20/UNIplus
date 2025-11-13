"use client";

import { useRouter } from "next/navigation";

export default function RegisterPage() {
  const router = useRouter();

  async function onSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());

    const email = data.email;
    if (!email.includes("@")) {
      alert("Por favor, ingresa un correo electrónico válido");
      return;
    }

    const response = await fetch("/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      router.push("/inicio-sesion");
    } else {
      alert("Error al registrar el usuario");
    }
  }

  return (
    <div
      className="
        min-h-screen
        flex items-center justify-center
        px-4
        bg-[url('/fondo.svg')]
        bg-cover bg-no-repeat bg-center
      "
    >
      <div
        className="
          w-full max-w-md sm:max-w-lg
          bg-white/20 backdrop-blur-xl
          p-8 sm:p-10 md:p-12
          rounded-2xl shadow-2xl
          flex flex-col items-center gap-6
        "
      >
        <h1 className="text-3xl sm:text-4xl font-bold text-white text-center">
          Regístrate
        </h1>

        <form className="flex flex-col gap-4 w-full" onSubmit={onSubmit}>
          {/* Nombre + Apellido */}
          <div className="flex flex-col gap-4 sm:!flex-row">
            <input
              type="text"
              name="name"
              placeholder="Nombre"
              className="
                w-full
                p-3
                border border-gray-300 rounded-lg
                bg-white/80
                placeholder-gray-600 text-black
                focus:outline-none focus:ring-2 focus:ring-blue-300
              "
            />
            <input
              type="text"
              name="lastName"
              placeholder="Apellido"
              className="
                w-full
                p-3
                border border-gray-300 rounded-lg
                bg-white/80
                placeholder-gray-600 text-black
                focus:outline-none focus:ring-2 focus:ring-blue-300
              "
            />
          </div>

          <input
            type="text"
            name="email"
            placeholder="Correo electrónico"
            className="
              p-3
              border border-gray-300 rounded-lg
              bg-white/80
              placeholder-gray-600 text-black
              focus:outline-none focus:ring-2 focus:ring-blue-300
            "
          />

          <input
            type="password"
            name="password"
            placeholder="Contraseña"
            className="
              p-3
              border border-gray-300 rounded-lg
              bg-white/80
              placeholder-gray-600 text-black
              focus:outline-none focus:ring-2 focus:ring-blue-300
            "
          />

          <button
            type="submit"
            className="
              p-3
              bg-blue-300 text-blue-900 font-medium
              rounded-lg
              hover:bg-blue-400
              focus:outline-none focus:ring-2 focus:ring-blue-100
              transition duration-200
            "
          >
            Registrarse
          </button>
        </form>
      </div>
    </div>
  );
}
