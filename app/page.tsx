import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import Spaces from "@/components/Spaces";
import Events from "@/components/Events";
import Partners from "@/components/Partners";
import Location from "@/components/Location";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

const siteUrl = "https://www.efficiencys.com.sa";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Efficiency Center",
  description:
    "Fully-serviced workspaces in Al-Khobar and Riyadh. Coworking, private offices, meeting rooms, and complete business solutions.",
  url: siteUrl,
  logo: `${siteUrl}/assets/imgs/logo.png`,
  image: `${siteUrl}/assets/imgs/ec-og.png`,
  telephone: "+966581115550",
  email: "contact@efficiencys.com.sa",
  address: [
    {
      "@type": "PostalAddress",
      streetAddress: "6919 Prince Turki ST, Cornich Park",
      addressLocality: "Al-Khobar",
      addressCountry: "SA",
    },
    {
      "@type": "PostalAddress",
      streetAddress: "6651 Abi Bakr As Siddiq Rd, Al Mursalat",
      addressLocality: "Riyadh",
      addressCountry: "SA",
    },
  ],
  geo: {
    "@type": "GeoCoordinates",
    latitude: 26.3076202,
    longitude: 50.2242877,
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"],
    opens: "08:00",
    closes: "22:00",
  },
  sameAs: [
    "https://www.instagram.com/efficiencycenter",
    "https://www.linkedin.com/company/efficiencycenter",
    "https://www.tiktok.com/@efficiencycenter",
  ],
  parentOrganization: {
    "@type": "Organization",
    name: "Naqsh Holding",
  },
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main>
        <Navbar />
        <Hero />
        <About />
        <Services />
        <Testimonials />
        <Spaces />
        <Events />
        <Partners />
        <Location />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
