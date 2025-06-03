
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import PlansSection from "@/components/PlansSection";
import AboutSection from "@/components/AboutSection";
import MapSection from "@/components/MapSection";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

const Index = () => {
  return (
    <div className="min-h-screen w-full">
      <Header />
      <Hero />
      <PlansSection />
      <AboutSection />
      <MapSection />
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default Index;
