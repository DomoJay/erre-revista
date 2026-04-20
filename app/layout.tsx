import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageTransition from "@/components/layout/PageTransition";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "ErrE (r) — Revista para Artistas Emergentes",
  description: "Música, producción, distribución y crecimiento artístico.",
  openGraph: {
    title: "ErrE (r) — Revista para Artistas Emergentes",
    description: "Música, producción, distribución y crecimiento artístico.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={`${playfair.variable} ${inter.variable} bg-[#0a0a0a] text-white antialiased`}>
        <Header />
        <PageTransition>
          <main className="min-h-screen">{children}</main>
        </PageTransition>
        <Footer />
      </body>
    </html>
  );
}