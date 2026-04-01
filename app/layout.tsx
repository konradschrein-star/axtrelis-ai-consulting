import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Axtrelis | KI-Consulting für den Mittelstand",
  description: "Wir entwickeln maßgeschneiderte KI-Agenten und Automatisierungslösungen für mittelständische Unternehmen — pragmatisch, umsetzungsstark, messbar.",
  keywords: ["KI Consulting", "AI Agents", "Prozessautomatisierung", "Mittelstand", "Dresden", "KI-Beratung"],
  authors: [{ name: "Axtrelis Consulting" }],
  openGraph: {
    title: "Axtrelis | KI-Consulting für den Mittelstand",
    description: "KI, die Ihren Betrieb wirklich entlastet.",
    type: "website",
    locale: "de_DE",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body className="antialiased text-white bg-black">
        {/* Content */}
        {children}
      </body>
    </html>
  );
}
