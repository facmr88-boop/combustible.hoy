export const dynamic = "force-dynamic";

export async function GET() {
  const query = `
  [out:json][timeout:120];
  area["ISO3166-2"="AR-R"][admin_level=4];
  (
    node["amenity"="fuel"](area);
    way["amenity"="fuel"](area);
    relation["amenity"="fuel"](area);
  );
  out center tags;
  `;

  const res = await fetch("https://overpass-api.de/api/interpreter", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8" },
    body: new URLSearchParams({ data: query })
  });

  if (!res.ok) {
    return new Response(JSON.stringify({ error: "Overpass error" }), { status: 500 });
  }

  const json = await res.json();

  const features = (json.elements || [])
    .map((el) => {
      let lon, lat;
      if (el.type === "node") { lat = el.lat; lon = el.lon; }
      else if (el.center) { lat = el.center.lat; lon = el.center.lon; }
      else { return null; }

      const tags = el.tags || {};
      const fuelTypes = Object.keys(tags)
        .filter((k) => k.startsWith("fuel:") && tags[k] === "yes")
        .map((k) => k.replace("fuel:", ""))
        .join(", ");

      return {
        type: "Feature",
        geometry: { type: "Point", coordinates: [lon, lat] },
        properties: {
          id: el.id,
          name: tags.name || "Estación",
          brand: tags.brand || tags.operator || "",
          operator: tags.operator || "",
          fuel_types: fuelTypes,
          source: "OpenStreetMap"
        }
      };
    })
    .filter(Boolean);

  return new Response(JSON.stringify({ type: "FeatureCollection", features }), {
    headers: {
      "content-type": "application/json",
      "Cache-Control": "s-maxage=86400, stale-while-revalidate=43200"
    }
  });
}
