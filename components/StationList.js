export default function StationList({ stations }) {
  return (
    <div className="p-4 bg-white rounded-3xl shadow">
      <h2 className="text-lg font-semibold">Cerca tuyo</h2>
      <div className="mt-3 space-y-3">
        {stations.map((s) => (
          <div key={s.id} className="p-3 border rounded-2xl flex items-center justify-between">
            <div>
              <div className="font-medium">{s.brand} · {s.fuel}</div>
              <div className="text-sm text-gray-600">{s.name}</div>
              <div className="text-xs text-gray-500">Actualizado {s.updated} · {s.distance}</div>
            </div>
            <div className="text-right">
              <div className="text-xl font-bold">${s.price}</div>
              <button className="mt-2 text-xs px-3 py-1 rounded-full border">Ver ruta</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
