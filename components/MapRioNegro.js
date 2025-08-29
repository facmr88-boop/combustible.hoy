"use client";
import { useEffect, useRef } from "react";
import maplibregl from "maplibre-gl";

export default function MapRioNegro({ geojson }) {
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current) return;

    const map = new maplibregl.Map({
      container: ref.current,
      style: "https://demotiles.maplibre.org/style.json", // gratis
      center: [-67.8, -40.8], // Río Negro
      zoom: 5.5
    });

    map.addControl(new maplibregl.NavigationControl(), "top-right");

    map.on("load", () => {
      map.addSource("stations", { type: "geojson", data: geojson });

      map.addLayer({
        id: "stations",
        type: "circle",
        source: "stations",
        paint: {
          "circle-radius": 4,
          "circle-color": "#1e90ff",
          "circle-stroke-color": "#fff",
          "circle-stroke-width": 1
        }
      });

      const coords = geojson.features?.map(f => f.geometry.coordinates) || [];
      if (coords.length) {
        let [minX, minY] = coords[0], [maxX, maxY] = coords[0];
        for (const [x, y] of coords) {
          if (x < minX) minX = x;
          if (y < minY) minY = y;
          if (x > maxX) maxX = x;
          if (y > maxY) maxY = y;
        }
        map.fitBounds([[minX, minY],[maxX, maxY]], { padding: 40, duration: 800 });
      }

      map.on("click", "stations", e => {
        const p = e.features[0].properties;
        new maplibregl.Popup()
          .setLngLat(e.lngLat)
          .setHTML(`<strong>${p.brand || p.name || "Estación"}</strong><br>${p.name || ""}`)
          .addTo(map);
      });

      map.on("mouseenter", "stations", () => (map.getCanvas().style.cursor = "pointer"));
      map.on("mouseleave", "stations", () => (map.getCanvas().style.cursor = ""));
    });

    return () => map.remove();
  }, [geojson]);

  return <div ref={ref} className="h-96 w-full rounded-3xl overflow-hidden shadow" />;
}
