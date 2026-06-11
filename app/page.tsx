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

export default function Home() {
  return (
    <>
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
