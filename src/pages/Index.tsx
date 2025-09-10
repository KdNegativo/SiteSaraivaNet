import { Phone, Mail, MapPin, Clock, Wifi, Tv, Music, Headphones, Smartphone, Zap, Users, Heart, Star, Shield, Award, CheckCircle, Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import RealMap from "@/components/RealMap";
import StatsCounter from "@/components/StatsCounter";
import TestimonialCard from "@/components/TestimonialCard";
import ThemeToggle from "@/components/ThemeToggle";
import MobileNavigation from "@/components/MobileNavigation";
import AnimatedSection from "@/components/AnimatedSection";
import ChatBot from "@/components/ChatBot";
import TouchButton from "@/components/TouchButton";
import MobilePlansCarousel from "@/components/MobilePlansCarousel";
import ResponsiveImage from "@/components/ResponsiveImage";
import HeroCarousel from "@/components/HeroCarousel";
import { useParallax } from "@/hooks/useParallax";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { Link } from "react-router-dom";
import heroYoungMan from "@/assets/hero-young-man.jpg";

const Index = () => {
  const parallaxOffset = useParallax(0.5);
  const prefersReducedMotion = useReducedMotion();
  
  const handleSmoothScroll = (targetId: string) => {
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const headerHeight = 80;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerHeight;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: prefersReducedMotion ? 'auto' : 'smooth'
      });
    }
  };

  const handleWhatsAppClick = () => {
    const phoneNumber = "5589994395789";
    const message = "Olá! Gostaria de contratar o plano de internet + SaraivaTV.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handlePhoneClick = () => {
    window.open('tel:+5589994395789', '_self');
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Modern Orange Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-400 via-orange-500 to-orange-600"></div>
      
      {/* Sophisticated Background Patterns */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            radial-gradient(circle at 25% 25%, rgba(255, 255, 255, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 75% 75%, rgba(255, 255, 255, 0.05) 0%, transparent 50%),
            linear-gradient(45deg, transparent 40%, rgba(255, 255, 255, 0.02) 50%, transparent 60%)
          `,
          backgroundSize: '800px 800px, 600px 600px, 200px 200px'
        }}></div>
      </div>

      {/* Floating Components */}
      <ChatBot />
      
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-md shadow-xl px-6 py-4 border-b border-white/20 z-50">
        {/* Mobile Layout */}
        <div className="md:hidden">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center shadow-lg">
                <Wifi className="w-5 h-5 text-white" />
              </div>
              <div>
                <span className="text-xl font-bold text-gray-900">SaraivaNet</span>
                <div className="text-xs text-gray-600 font-medium flex items-center">
                  <MapPin className="w-3 h-3 mr-1" />
                  Eliseu Martins - PI
                </div>
              </div>
            </div>
            <MobileNavigation />
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden md:flex items-center justify-between max-w-7xl mx-auto">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center shadow-lg">
              <Wifi className="w-6 h-6 text-white" />
            </div>
            <div>
              <span className="text-2xl font-bold text-gray-900">SaraivaNet</span>
              <div className="text-sm text-gray-600 font-medium flex items-center">
                <MapPin className="w-4 h-4 mr-1" />
                Eliseu Martins - PI
              </div>
            </div>
          </div>
          
          <nav className="flex items-center space-x-8">
            <button 
              onClick={() => handleSmoothScroll('planos')}
              className="text-gray-700 hover:text-orange-600 font-medium transition-colors"
            >
              Planos
            </button>
            <button 
              onClick={() => handleSmoothScroll('sobre')}
              className="text-gray-700 hover:text-orange-600 font-medium transition-colors"
            >
              Sobre
            </button>
            <button 
              onClick={() => handleSmoothScroll('cobertura')}
              className="text-gray-700 hover:text-orange-600 font-medium transition-colors"
            >
              Cobertura
            </button>
            <button 
              onClick={() => handleSmoothScroll('contato')}
              className="text-gray-700 hover:text-orange-600 font-medium transition-colors"
            >
              Contato
            </button>
            <Button 
              onClick={handleWhatsAppClick}
              className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-6 py-2 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Contratar Agora
            </Button>
          </nav>
        </div>
      </header>

      {/* Hero Section - Modern Full-Width Layout */}
      <section className="relative min-h-screen pt-20">
        {/* Mobile Version */}
        <div className="md:hidden px-6 py-12">
          <div className="text-center space-y-8">
            <AnimatedSection animation="fade-up">
              <div className="inline-flex items-center bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-full font-semibold shadow-lg mb-6">
                <Star className="w-5 h-5 mr-2" />
                Internet + TV Grátis
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6 text-shadow-elegant">
                Internet + SaraivaTV
              </h1>
              
              <p className="text-xl text-white/95 font-medium mb-8">
                🚀 Internet ultrarrápida + App gratuito
              </p>
            </AnimatedSection>

            {/* Mobile Benefits Grid */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 text-center">
                <div className="w-12 h-12 bg-white/30 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <Wifi className="w-6 h-6 text-white" />
                </div>
                <div className="text-white font-bold">Internet ULTRA</div>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 text-center">
                <div className="w-12 h-12 bg-white/30 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <Tv className="w-6 h-6 text-white" />
                </div>
                <div className="text-white font-bold">TV Premium</div>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 text-center">
                <div className="w-12 h-12 bg-white/30 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <Music className="w-6 h-6 text-white" />
                </div>
                <div className="text-white font-bold">Rádios 24h</div>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 text-center">
                <div className="w-12 h-12 bg-white/30 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <div className="text-white font-bold">Suporte VIP</div>
              </div>
            </div>

            {/* Mobile Carousel */}
            <div className="h-80 w-full rounded-3xl overflow-hidden shadow-2xl border-4 border-white/20">
              <HeroCarousel />
            </div>

            {/* Mobile CTA */}
            <TouchButton 
              onClick={handleWhatsAppClick}
              className="w-full bg-white text-orange-600 font-bold text-xl py-4 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              🚀 Contratar Agora
            </TouchButton>
          </div>
        </div>

        {/* Desktop Version - Full Width Modern Layout */}
        <div className="hidden md:block h-screen">
          <div className="h-full flex">
            {/* Left Content - 40% Width */}
            <div className="w-2/5 flex items-center justify-center px-12">
              <div className="max-w-2xl space-y-12">
                <AnimatedSection animation="fade-up">
                  {/* Premium Badge */}
                  <div className="inline-flex items-center bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-full font-bold shadow-lg text-lg">
                    <Star className="w-6 h-6 mr-3" />
                    Internet + TV Grátis
                  </div>
                  
                  {/* Main Title */}
                  <h1 className="text-6xl lg:text-7xl font-black text-white leading-tight text-shadow-elegant">
                    Internet + SaraivaTV
                  </h1>
                  
                  <p className="text-2xl text-white/95 font-medium leading-relaxed">
                    🚀 Internet ultrarrápida + App gratuito para toda família
                  </p>
                </AnimatedSection>

                {/* Benefits Cards - Modern Large Format */}
                <AnimatedSection animation="fade-up" delay={200}>
                  <div className="grid grid-cols-2 gap-6">
                    <div className="bg-white/15 backdrop-blur-sm rounded-3xl p-8 text-center hover:bg-white/20 transition-all duration-300 group">
                      <div className="w-16 h-16 bg-white/25 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                        <Wifi className="w-8 h-8 text-white" />
                      </div>
                      <div className="text-white font-bold text-xl">Internet ULTRA</div>
                      <div className="text-white/80 text-sm mt-2">Fibra ótica</div>
                    </div>
                    
                    <div className="bg-white/15 backdrop-blur-sm rounded-3xl p-8 text-center hover:bg-white/20 transition-all duration-300 group">
                      <div className="w-16 h-16 bg-white/25 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                        <Tv className="w-8 h-8 text-white" />
                      </div>
                      <div className="text-white font-bold text-xl">TV Premium</div>
                      <div className="text-white/80 text-sm mt-2">+200 canais</div>
                    </div>
                    
                    <div className="bg-white/15 backdrop-blur-sm rounded-3xl p-8 text-center hover:bg-white/20 transition-all duration-300 group">
                      <div className="w-16 h-16 bg-white/25 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                        <Music className="w-8 h-8 text-white" />
                      </div>
                      <div className="text-white font-bold text-xl">Rádios 24h</div>
                      <div className="text-white/80 text-sm mt-2">Sem limite</div>
                    </div>
                    
                    <div className="bg-white/15 backdrop-blur-sm rounded-3xl p-8 text-center hover:bg-white/20 transition-all duration-300 group">
                      <div className="w-16 h-16 bg-white/25 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                        <Shield className="w-8 h-8 text-white" />
                      </div>
                      <div className="text-white font-bold text-xl">Suporte VIP</div>
                      <div className="text-white/80 text-sm mt-2">24/7 dedicado</div>
                    </div>
                  </div>
                </AnimatedSection>

                {/* CTA Button */}
                <AnimatedSection animation="fade-up" delay={400}>
                  <TouchButton 
                    onClick={handleWhatsAppClick}
                    className="bg-white text-orange-600 font-black text-2xl px-12 py-6 rounded-2xl shadow-2xl hover:shadow-3xl hover:scale-105 transition-all duration-300 inline-flex items-center"
                  >
                    🚀 Contratar Agora
                  </TouchButton>
                </AnimatedSection>
              </div>
            </div>

            {/* Right Content - 60% Width - Full Height Carousel */}
            <div className="w-3/5 h-full">
              <AnimatedSection animation="slide-right" className="h-full">
                <div className="h-full w-full rounded-l-3xl overflow-hidden shadow-2xl">
                  <HeroCarousel />
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white/10 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection animation="fade-up">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-white mb-2">964+</div>
                <div className="text-white/80 font-medium">Clientes</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-white mb-2">95%</div>
                <div className="text-white/80 font-medium">Uptime</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-white mb-2">19+</div>
                <div className="text-white/80 font-medium">Canais</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-white mb-2">23h</div>
                <div className="text-white/80 font-medium">Online</div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Plans Section */}
      <section id="planos" className="py-24 bg-white/5 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection animation="fade-up">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Planos Perfeitos para Você
              </h2>
              <p className="text-xl text-white/90 max-w-3xl mx-auto">
                Escolha o plano ideal para sua casa ou empresa. Internet ultra-rápida com SaraivaTV incluído.
              </p>
            </div>
          </AnimatedSection>

          {/* Mobile Plans Carousel */}
          <div className="md:hidden">
            <MobilePlansCarousel />
          </div>

          {/* Desktop Plans Grid */}
          <div className="hidden md:grid md:grid-cols-3 gap-8">
            {/* Plan 1 - Basic */}
            <AnimatedSection animation="fade-up" delay={100}>
              <Card className="bg-white/15 backdrop-blur-sm border-white/20 p-8 text-center text-white hover:bg-white/20 transition-all duration-300 hover:scale-105">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold mb-2">Plano Família</h3>
                  <div className="text-4xl font-black mb-2">100MB</div>
                  <div className="text-white/80">Internet + TV</div>
                </div>
                
                <div className="space-y-3 mb-8">
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 mr-3 text-green-400" />
                    <span>100MB de velocidade</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 mr-3 text-green-400" />
                    <span>SaraivaTV incluído</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 mr-3 text-green-400" />
                    <span>Suporte 24h</span>
                  </div>
                </div>
                
                <Button 
                  onClick={handleWhatsAppClick}
                  className="w-full bg-white text-orange-600 hover:bg-gray-100 font-bold py-3"
                >
                  Contratar
                </Button>
              </Card>
            </AnimatedSection>

            {/* Plan 2 - Popular */}
            <AnimatedSection animation="fade-up" delay={200}>
              <Card className="bg-white/20 backdrop-blur-sm border-white/30 p-8 text-center text-white hover:bg-white/25 transition-all duration-300 hover:scale-105 relative">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-yellow-400 text-gray-900 px-4 py-2 rounded-full text-sm font-bold">
                    MAIS POPULAR
                  </div>
                </div>
                
                <div className="mb-6 mt-4">
                  <h3 className="text-2xl font-bold mb-2">Plano Ultra</h3>
                  <div className="text-4xl font-black mb-2">300MB</div>
                  <div className="text-white/80">Internet + TV Premium</div>
                </div>
                
                <div className="space-y-3 mb-8">
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 mr-3 text-green-400" />
                    <span>300MB de velocidade</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 mr-3 text-green-400" />
                    <span>SaraivaTV Premium</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 mr-3 text-green-400" />
                    <span>Suporte VIP</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 mr-3 text-green-400" />
                    <span>WiFi 6 grátis</span>
                  </div>
                </div>
                
                <Button 
                  onClick={handleWhatsAppClick}
                  className="w-full bg-yellow-400 text-gray-900 hover:bg-yellow-300 font-bold py-3"
                >
                  Contratar
                </Button>
              </Card>
            </AnimatedSection>

            {/* Plan 3 - Premium */}
            <AnimatedSection animation="fade-up" delay={300}>
              <Card className="bg-white/15 backdrop-blur-sm border-white/20 p-8 text-center text-white hover:bg-white/20 transition-all duration-300 hover:scale-105">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold mb-2">Plano Empresarial</h3>
                  <div className="text-4xl font-black mb-2">500MB</div>
                  <div className="text-white/80">Internet + TV + Suporte</div>
                </div>
                
                <div className="space-y-3 mb-8">
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 mr-3 text-green-400" />
                    <span>500MB de velocidade</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 mr-3 text-green-400" />
                    <span>SaraivaTV Empresarial</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 mr-3 text-green-400" />
                    <span>Suporte dedicado</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 mr-3 text-green-400" />
                    <span>IP fixo incluído</span>
                  </div>
                </div>
                
                <Button 
                  onClick={handleWhatsAppClick}
                  className="w-full bg-white text-orange-600 hover:bg-gray-100 font-bold py-3"
                >
                  Contratar
                </Button>
              </Card>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre" className="py-24 bg-white/5 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <AnimatedSection animation="slide-left">
              <div className="space-y-6">
                <h2 className="text-4xl md:text-5xl font-bold text-white">
                  Conectando Eliseu Martins ao Futuro
                </h2>
                <p className="text-xl text-white/90 leading-relaxed">
                  A SaraivaNet é mais que um provedor de internet - somos uma ponte para o futuro digital. 
                  Com tecnologia de ponta e atendimento humanizado, levamos conectividade de qualidade para cada lar.
                </p>
                <div className="grid grid-cols-2 gap-6 mt-8">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white mb-2">5+</div>
                    <div className="text-white/80">Anos de experiência</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white mb-2">100%</div>
                    <div className="text-white/80">Fibra ótica</div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
            
            <AnimatedSection animation="slide-right">
              <div className="relative">
                <ResponsiveImage
                  src={heroYoungMan}
                  alt="Jovem usando internet SaraivaNet"
                  className="rounded-3xl shadow-2xl"
                />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Coverage Section */}
      <section id="cobertura" className="py-24 bg-white/10 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection animation="fade-up">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Nossa Cobertura
              </h2>
              <p className="text-xl text-white/90 max-w-3xl mx-auto">
                Veja onde chegamos e descubra se sua região já tem acesso à melhor internet de Eliseu Martins.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="fade-up" delay={200}>
            <div className="bg-white/15 backdrop-blur-sm rounded-3xl p-8 shadow-2xl">
              <RealMap />
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contato" className="py-24 bg-white/5 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection animation="fade-up">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Fale Conosco
              </h2>
              <p className="text-xl text-white/90 max-w-3xl mx-auto">
                Estamos aqui para ajudar. Entre em contato e descubra como podemos conectar você ao futuro.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8">
            <AnimatedSection animation="fade-up" delay={100}>
              <Card className="bg-white/15 backdrop-blur-sm border-white/20 p-8 text-center text-white">
                <Phone className="w-12 h-12 mx-auto mb-4 text-yellow-400" />
                <h3 className="text-xl font-bold mb-4">Telefone</h3>
                <button 
                  onClick={handlePhoneClick}
                  className="text-white/90 hover:text-yellow-400 transition-colors"
                >
                  (89) 99439-5789
                </button>
              </Card>
            </AnimatedSection>

            <AnimatedSection animation="fade-up" delay={200}>
              <Card className="bg-white/15 backdrop-blur-sm border-white/20 p-8 text-center text-white">
                <Mail className="w-12 h-12 mx-auto mb-4 text-yellow-400" />
                <h3 className="text-xl font-bold mb-4">Email</h3>
                <a 
                  href="mailto:contato@saraivanet.com.br"
                  className="text-white/90 hover:text-yellow-400 transition-colors"
                >
                  contato@saraivanet.com.br
                </a>
              </Card>
            </AnimatedSection>

            <AnimatedSection animation="fade-up" delay={300}>
              <Card className="bg-white/15 backdrop-blur-sm border-white/20 p-8 text-center text-white">
                <MapPin className="w-12 h-12 mx-auto mb-4 text-yellow-400" />
                <h3 className="text-xl font-bold mb-4">Endereço</h3>
                <p className="text-white/90">
                  Eliseu Martins - PI<br />
                  Centro da cidade
                </p>
              </Card>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black/20 backdrop-blur-sm py-12 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center">
            <div className="flex items-center justify-center mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center shadow-lg mr-3">
                <Wifi className="w-5 h-5 text-white" />
              </div>
              <span className="text-2xl font-bold text-white">SaraivaNet</span>
            </div>
            <p className="text-white/80 mb-6">
              Conectando Eliseu Martins ao futuro digital
            </p>
            <div className="text-white/60 text-sm">
              © 2024 SaraivaNet. Todos os direitos reservados.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
