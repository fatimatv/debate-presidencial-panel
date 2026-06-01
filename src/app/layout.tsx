import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mapa interactivo del debate presidencial",
  description:
    "Panel interactivo de IALAW para comparar propuestas, riesgos y vacíos tecnológicos del debate presidencial."
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
