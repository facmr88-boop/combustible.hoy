# Combustible Hoy — MVP

MVP en Next.js + Tailwind + MapLibre. Muestra estaciones de servicio de **Río Negro** (Argentina) usando datos públicos de OpenStreetMap (Overpass API).

## Scripts

- `npm run dev` - entorno local
- `npm run build` - build de producción
- `npm start` - servir build

## Estructura
- `app/` - App Router de Next.js
- `app/api/rionegro-stations/route.js` - Endpoint que trae estaciones desde Overpass
- `components/` - UI
- `data/stations.json` - Datos de muestra para la lista
- `public/` - estáticos

## Deploy
Subí todo a GitHub y conectá el repo en Vercel. No requiere claves ni servicios pagos.
