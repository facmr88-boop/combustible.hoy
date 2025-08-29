
# Combustible Hoy — MVP v0.1 (mock)

Landing minimal para validar la idea:
- Mapa **placeholder**
- Lista de estaciones con precios **de ejemplo**
- Botón **Reportar precio** (enlazá a un Google Form o futura página /reportar)

## Requisitos
- Node 18+

## Pasos (local)
```bash
npm i
npm run dev
# abrir http://localhost:3000
```

## Deploy gratis (Vercel)
1. Creá una cuenta en https://vercel.com (gratis).
2. Subí este repo a GitHub.
3. En Vercel, **New Project** → Importar el repo → Framework: *Next.js* → Deploy.
4. Te queda un subdominio gratuito tipo `https://combustible-hoy.vercel.app`.

## Estructura
- `/app` → App Router (Next.js 14)
- `/components` → UI del MVP
- `/data/stations.json` → Datos de ejemplo
- `/public` → Assets públicos

## Próximos pasos (V1)
- Reemplazar `MapMock` por **MapLibre + OSM**
- Form de **Reportar precio** → Supabase o Google Forms
- Crear tablas: `stations`, `reports`, `prices`
