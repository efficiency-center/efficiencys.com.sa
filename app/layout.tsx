import type { Metadata } from "next";
import { Montserrat, Space_Grotesk } from "next/font/google";
import { withBasePath } from "@/lib/paths";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const siteUrl = "https://6degrees.github.io/Efficiency-Center-Website";
const ogImage = `${siteUrl}/assets/imgs/ec-og.png`;

export const metadata: Metadata = {
  title: "Efficiency Center | Coworking & Serviced Offices",
  description:
    "Fully-serviced workspaces in Al-Khobar and Riyadh. Coworking, private offices, meeting rooms, and complete business solutions. Where your business echoes.",
  metadataBase: new URL(siteUrl),
  icons: {
    icon: withBasePath("/assets/imgs/logo.png"),
    apple: withBasePath("/assets/imgs/logo.png"),
  },
  openGraph: {
    title: "Efficiency Center | Where Your Business Echoes",
    description:
      "Fully-serviced workspaces in Al-Khobar and Riyadh. Coworking, private offices, meeting rooms, and complete business solutions.",
    url: siteUrl,
    siteName: "Efficiency Center",
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: "Efficiency Center — Where Your Business Echoes",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Efficiency Center | Where Your Business Echoes",
    description:
      "Fully-serviced workspaces in Al-Khobar and Riyadh. Coworking, private offices, and complete business solutions.",
    images: [ogImage],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${montserrat.variable} ${spaceGrotesk.variable}`}>
      <body>{children}</body>
    </html>
  );
}
