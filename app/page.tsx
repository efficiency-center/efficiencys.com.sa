import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Spaces from "@/components/Spaces";
import Partners from "@/components/Partners";
import Location from "@/components/Location";
import FAQ from "@/components/FAQ";
import ContactCta from "@/components/ContactCta";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Spaces />
        <Partners />
        <Location />
        <FAQ />
        <ContactCta />
      </main>
      <Footer />
    </>
  );
}
