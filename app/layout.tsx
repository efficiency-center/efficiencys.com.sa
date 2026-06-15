import type { Metadata } from "next";
import { Montserrat, Space_Grotesk } from "next/font/google";
import { withBasePath } from "@/lib/paths";
import TrackingScripts from "@/components/TrackingScripts";
import CookieConsent from "@/components/CookieConsent";
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

const siteUrl = "https://efficiencys.com.sa";
const ogImage = `${siteUrl}/assets/imgs/ec-og.png`;

export const metadata: Metadata = {
  title: "Efficiency Center | Coworking & Serviced Offices",
  description:
    "Fully-serviced workspaces in Al-Khobar and Riyadh. Coworking, private offices, meeting rooms, and complete business solutions. Where your business echoes.",
  keywords: [
    "coworking",
    "coworking space",
    "serviced offices",
    "private offices",
    "meeting rooms",
    "business center",
    "Al-Khobar",
    "Riyadh",
    "Saudi Arabia",
    "Efficiency Center",
    "workspace",
    "shared office",
    "virtual office",
    "business lounge",
    "event space",
    "training room",
    "hot desk",
    "dedicated desk",
    "flexible workspace",
    "office space for rent",
    "Eastern Province",
    "coworking Al-Khobar",
    "coworking Riyadh",
    "office space Al-Khobar",
    "office space Riyadh",
    "Naqsh Holding",
    "workspace solutions",
    "business solutions Saudi Arabia",
    "office for startups",
    "SME office space",
    "مساحات عمل مشتركة",
    "مكاتب مجهزة",
    "مركز الكفاءة",
    "الخبر",
    "الرياض",
    "مكاتب للإيجار",
    "مساحات عمل",
    "مكاتب خاصة",
    "قاعات اجتماعات",
    "مكتب افتراضي",
    "مساحة عمل مرنة",
    "مكاتب الخبر",
    "مكاتب الرياض",
  ],
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: siteUrl,
  },
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
      <head>
        <meta name="google-site-verification" content="wEcjbvecZh1S6wMPKxOL8WbQvZdgHzSurbs-K6xkwbE" />
        <meta name="google-site-verification" content="cGiWyVb162e7QzFUhrFwYqq-wx93AesxF0upuqfQkAE" />
      </head>
      <body>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-WPSRGSBK"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=24080573631527524&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
        {children}
        <TrackingScripts />
        <CookieConsent />
      </body>
    </html>
  );
}
