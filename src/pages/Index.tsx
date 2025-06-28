
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Plans from "@/components/Plans";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import MobileNavigation from "@/components/MobileNavigation";
import FloatingActionButton from "@/components/FloatingActionButton";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <MobileNavigation />
      <Hero />
      <Services />
      <Plans />
      <About />
      <Testimonials />
      <Contact />
      <Footer />
      <FloatingActionButton />
    </div>
  );
};

export default Index;
