import type { Metadata } from "next";
import { Inter, Libre_Baskerville, Space_Grotesk } from "next/font/google";
import { withBasePath } from "@/lib/paths";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const libreBaskerville = Libre_Baskerville({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-serif",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Efficiency Center | Coworking & Serviced Offices — Al-Khobar",
  description:
    "Modern fully-serviced office spaces in Al-Khobar, Saudi Arabia. Coworking, private offices, and meeting rooms at Corniche Park.",
  icons: {
    icon: withBasePath("/assets/imgs/logo.png"),
    apple: withBasePath("/assets/imgs/logo.png"),
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable} ${libreBaskerville.variable}`}>
      <body>{children}</body>
    </html>
  );
}
