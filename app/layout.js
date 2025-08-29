
import "./globals.css";

export const metadata = {
  title: "Combustible Hoy — MVP",
  description: "Encontrá el mejor precio de nafta y gasoil cerca tuyo",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className="bg-gray-50">{children}</body>
    </html>
  );
}
