
"use client";
import { useMemo, useState } from "react";
import Header from "@/components/Header";
import MapMock from "@/components/MapMock";
import StationList from "@/components/StationList";
import ReportCard from "@/components/ReportCard";
import stationsData from "@/data/stations.json";

export default function HomePage() {
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return stationsData;
    return stationsData.filter(s => 
      s.name.toLowerCase().includes(q) ||
      s.brand.toLowerCase().includes(q) ||
      s.fuel.toLowerCase().includes(q) ||
      s.city.toLowerCase().includes(q)
    );
  }, [query]);

  return (
    <div className="min-h-screen">
      <Header />
      <main className="max-w-6xl mx-auto p-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
        <section className="lg:col-span-2">
          <div className="flex items-center gap-3 mb-3">
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Buscar estación, marca o barrio"
              className="w-full px-4 py-3 rounded-2xl border bg-white shadow-sm focus:outline-none"
            />
            <button onClick={() => {}} className="px-4 py-3 rounded-2xl bg-black text-white">Buscar</button>
          </div>
          <MapMock />
        </section>

        <aside className="space-y-4">
          <StationList stations={filtered} />
          <ReportCard />
          <div className="p-4 bg-white rounded-3xl shadow">
            <h3 className="font-semibold">Alertas inteligentes</h3>
            <p className="text-sm text-gray-600 mt-1">Recibí una notificación cuando la nafta cerca tuyo baje más de 3%.</p>
            <button className="mt-3 w-full px-4 py-2 rounded-2xl border">Activar alertas</button>
          </div>
        </aside>
      </main>
      <footer className="max-w-6xl mx-auto mt-12 text-center text-sm text-gray-500 p-6">
        Hecho con ♥ en Argentina · MVP v0.1 (mock)
      </footer>
    </div>
  );
}
