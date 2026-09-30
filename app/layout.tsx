import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, Instrument_Sans } from "next/font/google";
import "./globals.css";

const display = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["500", "700", "800"],
  variable: "--font-display",
  display: "swap",
});

const body = Instrument_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Manuel Muchanga | Desenvolvedor e técnico de informática",
  description:
    "Portfólio de Manuel Muchanga, desenvolvedor de software e técnico de informática em Maputo. Aplicações web e mobile com Next.js, React, Flutter e Laravel, e suporte informático.",
  openGraph: {
    title: "Manuel Muchanga | Desenvolvedor e técnico de informática",
    description:
      "Aplicações web e mobile para empresas em Moçambique, com Next.js, React, Flutter e Laravel.",
    locale: "pt_PT",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#F3F5F4",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt" className={`${display.variable} ${body.variable}`}>
      <body>{children}</body>
    </html>
  );
}
