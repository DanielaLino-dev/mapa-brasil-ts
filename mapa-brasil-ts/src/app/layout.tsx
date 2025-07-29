import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mapa de Estados",
  description: "Página para listagem de cidades, região e capital de cada estado.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className="bg-amber-100">
        {children}
      </body>
    </html>
  );
}