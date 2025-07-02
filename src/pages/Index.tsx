import Hero from "@/components/Hero";
import SectionTitle from "@/components/SectionTitle";
import Features from "@/components/Features";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import ChatBot from "@/components/ChatBot";
import UnifiedFloatingButton from "@/components/UnifiedFloatingButton";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-purple-50 dark:from-gray-900 dark:via-blue-950 dark:to-purple-950">
      <Hero />
      <SectionTitle
        title="Por que escolher a SaraivaNet?"
        description="A SaraivaNet oferece a melhor experiência de internet para você e sua família."
      />
      <Features />
      <SectionTitle
        title="Nossos planos"
        description="Escolha o plano que melhor se adapta às suas necessidades."
      />
      <Pricing />
      <SectionTitle
        title="O que nossos clientes dizem"
        description="Veja o que nossos clientes estão falando sobre a SaraivaNet."
      />
      <Testimonials />
      <SectionTitle
        title="Perguntas frequentes"
        description="Tire suas dúvidas sobre nossos serviços."
      />
      <FAQ />
      <SectionTitle
        title="Entre em contato"
        description="Estamos prontos para atender você."
      />
      <Contact />
      <Footer />
      
      {/* Replace the separate ChatBot and FloatingWhatsApp with unified button */}
      <UnifiedFloatingButton />
    </div>
  );
};

export default Index;
