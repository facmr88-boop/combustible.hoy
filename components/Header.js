
export default function Header() {
  return (
    <header className="max-w-6xl mx-auto p-6 pb-0">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight">Combustible Hoy</h1>
          <p className="text-gray-600 mt-1">
            Encontrá el mejor precio de <span className="font-semibold">nafta</span> y{" "}
            <span className="font-semibold">gasoil</span> cerca tuyo.
          </p>
        </div>
        <div className="flex gap-2">
          <button className="px-4 py-2 bg-black text-white rounded-2xl shadow">Iniciar sesión</button>
          <button className="px-4 py-2 bg-white text-black rounded-2xl shadow border">Crear cuenta</button>
        </div>
      </div>
    </header>
  );
}
