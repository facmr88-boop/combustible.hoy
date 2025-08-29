
export default function MapMock() {
  return (
    <div className="h-80 md:h-[28rem] w-full rounded-3xl bg-gradient-to-br from-gray-200 to-gray-300 relative overflow-hidden shadow">
      <div className="absolute top-4 left-4 bg-white/90 rounded-xl px-3 py-2 text-sm shadow">Mapa (mock)</div>
      {/* Pins falsos */}
      <div className="absolute left-1/3 top-1/3 -translate-x-1/2 -translate-y-1/2">
        <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-white rounded-xl shadow">
          <span className="h-2.5 w-2.5 rounded-full bg-green-500"/> YPF $1390
        </span>
      </div>
      <div className="absolute left-2/3 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-white rounded-xl shadow">
          <span className="h-2.5 w-2.5 rounded-full bg-blue-500"/> Shell $1540
        </span>
      </div>
      <div className="absolute left-1/4 top-2/3 -translate-x-1/2 -translate-y-1/2">
        <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-white rounded-xl shadow">
          <span className="h-2.5 w-2.5 rounded-full bg-amber-500"/> Axion $1295
        </span>
      </div>
    </div>
  );
}
