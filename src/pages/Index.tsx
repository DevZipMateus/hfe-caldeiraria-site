import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import WorkCarousel from "@/components/WorkCarousel";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <WorkCarousel />
      <Services />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </main>
  );
};

export default Index;