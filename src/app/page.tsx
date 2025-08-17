import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import OurWork from "@/components/OurWork";
import Testimonials from "@/components/Testimonials";
import FAQs from "@/components/FAQs";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="w-full min-h-screen bg-background">
      {/* Sections */}
      <Hero />
      <About />
      <Services />
      <OurWork />
      <Testimonials />
      <FAQs />
      <Footer />
    </main>
  );
}
