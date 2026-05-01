import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "InfraRed — Infraestructura Tecnológica Premium",
  description:
    "Instalación profesional de cámaras de seguridad, Starlink, redes domésticas y empresariales. Tecnología integrada sin comprometer la estética de tu hogar o negocio.",
  keywords: "cámaras de seguridad, Starlink, redes WiFi, infraestructura tecnológica, instalación profesional",
  openGraph: {
    title: "InfraRed — Infraestructura Tecnológica Premium",
    description: "Instalación profesional de tecnología para hogares y PyMEs. Sin cables a la vista.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${inter.variable} h-full`}>
      <body className="min-h-full bg-[#09090B] text-[#FAFAFA]">{children}</body>
    </html>
  );
}
