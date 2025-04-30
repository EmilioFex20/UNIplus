export function ModuleCard({ idModulo }) {
    const modulo = {
        id: idModulo,
        nombre: "Modulo " + (idModulo + 1),
        descripcion: "Descripcion del modulo " + (idModulo + 1),
        imagen: "/modulo" + (idModulo + 1) + ".png",
    };
    
    return (
        <div className="relative w-full bg-no-repeat bg-contain ">
        <img
            src={modulo.imagen}
            alt={modulo.nombre}
            className="absolute top-0 left-0 w-full h-full object-cover"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
            <h1 className="text-white text-xs font-bold">{modulo.nombre}</h1>
            <p className="text-white text-xs">{modulo.descripcion}</p>
        </div>
        </div>
    );
}