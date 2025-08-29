export default function ReportCard() {
  const reportUrl = "#";
  return (
    <div className="p-4 bg-white rounded-3xl shadow border border-dashed">
      <h3 className="font-semibold">¿El precio cambió?</h3>
      <p className="text-sm text-gray-600 mt-1">Ayudá a la comunidad reportando el precio que viste en tu estación.</p>
      <a href={reportUrl} className="mt-3 w-full inline-block text-center px-4 py-2 rounded-2xl bg-black text-white">Reportar precio</a>
      <p className="text-xs text-gray-500 mt-2">Ganá puntos por cada reporte verificado.</p>
    </div>
  )
}
