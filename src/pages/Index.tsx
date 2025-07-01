import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Plans from "@/components/Plans";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import UnifiedFloatingButton from "@/components/UnifiedFloatingButton";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <Hero />
      <Features />
      <Plans />
      <Testimonials />
      <Contact />
      <Footer />
      
      {/* Unified Floating Button */}
      <UnifiedFloatingButton />
    </div>
  );
};

export default Index;
