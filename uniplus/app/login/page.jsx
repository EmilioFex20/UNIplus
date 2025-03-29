import Link from "next/link";

export default function LoginPage() {
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gray-100 gap-4 ">
      <h1 className="text-black text-3xl">Inicar Sesión</h1>
      <div className="flex gap-1">
        <h2 className="text-black text-sm">¿Es tu primera vez?</h2>
        <Link href="/register" className="text-black text-sm">
          Registrate
        </Link>
      </div>
      <form className="flex flex-col gap-4 mt-4">
        <input
          type="text"
          placeholder="Correo electrónico"
          className="p-2 border border-gray-300 rounded text-black"
        />
        <input
          type="password"
          placeholder="Contraseña"
          className="p-2 border border-gray-300 rounded text-black"
        />
        <button type="submit" className="p-2 bg-blue-400 text-white rounded">
          Iniciar sesión
        </button>
      </form>
    </div>
  );
}
