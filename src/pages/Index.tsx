import { Phone, Mail, MapPin, Clock, Wifi, Tv, Music, Headphones, Smartphone, Zap, Users, Heart, Star, Shield, Award, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import RealMap from "@/components/RealMap";
import StatsCounter from "@/components/StatsCounter";
import TestimonialCard from "@/components/TestimonialCard";
import ThemeToggle from "@/components/ThemeToggle";
import MobileNavigation from "@/components/MobileNavigation";
import ChatBot from "@/components/ChatBot";
import TouchButton from "@/components/TouchButton";
import MobilePlansCarousel from "@/components/MobilePlansCarousel";
import ResponsiveImage from "@/components/ResponsiveImage";
import GlassCard from "@/components/GlassCard";
import PremiumButton from "@/components/PremiumButton";
import { useParallax } from "@/hooks/useParallax";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import AnimatedSection from "@/components/AnimatedSection";

const Index = () => {
  const parallaxOffset = useParallax(0.5);
  const prefersReducedMotion = useReducedMotion();
  
  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: prefersReducedMotion ? 'auto' : 'smooth',
        block: 'start'
      });
    }
  };

  const handleWhatsAppClick = () => {
    const phoneNumber = "5589994395789";
    const message = "Olá! Gostaria de contratar o plano de internet + SaraivaTV.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="min-h-screen gradient-hero transition-colors duration-500">
      {/* Floating Components */}
      <ChatBot />
      
      {/* Header - Mobile optimized */}
      <header className="bg-gradient-to-r from-orange-600 to-red-600 dark:from-gray-800 dark:to-gray-900 shadow-xl px-4 py-3 border-b-4 border-orange-700 dark:border-gray-700 z-50 transition-colors duration-500">
        {/* Mobile Layout */}
        <div className="md:hidden">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-white rounded-xl flex items-center justify-center shadow-lg">
                <Wifi className="w-4 h-4 text-orange-600" />
              </div>
              <div>
                <span className="text-lg font-bold text-white">SaraivaNet</span>
                <div className="text-xs text-orange-100 font-medium flex items-center">
                  <MapPin className="w-2.5 h-2.5 mr-1" />
                  Eliseu Martins - PI
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <ThemeToggle />
              <MobileNavigation />
            </div>
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden md:flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-lg">
              <Wifi className="w-5 h-5 text-orange-600" />
            </div>
            <div>
              <span className="text-2xl font-bold text-white">SaraivaNet</span>
              <div className="text-xs text-orange-100 font-medium flex items-center">
                <MapPin className="w-3 h-3 mr-1" />
                Eliseu Martins - PI
              </div>
            </div>
          </div>
          
          <nav className="flex items-center space-x-6">
            <a href="#inicio" onClick={e => handleSmoothScroll(e, 'inicio')} className="text-white hover:text-orange-200 transition-colors font-medium">Início</a>
            <a href="#planos" onClick={e => handleSmoothScroll(e, 'planos')} className="text-white hover:text-orange-200 transition-colors font-medium">Planos</a>
            <a href="#cobertura" onClick={e => handleSmoothScroll(e, 'cobertura')} className="text-white hover:text-orange-200 transition-colors font-medium">Cobertura</a>
            <a href="#sobre" onClick={e => handleSmoothScroll(e, 'sobre')} className="text-white hover:text-orange-200 transition-colors font-medium">Sobre</a>
            <a href="#contato" onClick={e => handleSmoothScroll(e, 'contato')} className="text-white hover:text-orange-200 transition-colors font-medium">Contato</a>
          </nav>

          <div className="flex items-center space-x-4">
            <ThemeToggle />
          </div>
        </div>
      </header>

      {/* Hero Section - Mobile Optimized */}
      <section id="inicio" className="gradient-hero text-white px-4 py-12 relative overflow-hidden min-h-screen flex items-center">
        {/* Lightweight Mobile Background */}
        <div className="absolute inset-0">
          {/* Simple gradient overlays for mobile */}
          <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 via-red-500/15 to-orange-600/20 animate-pulse" style={{ animationDuration: '4s' }}></div>
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-orange-400/10 to-transparent"></div>
          
          {/* Floating orbs - reduced for mobile */}
          <div className="absolute inset-0 md:block">
            <div className="absolute top-20 left-10 w-32 h-32 md:w-64 md:h-64 bg-gradient-to-br from-orange-400/30 to-red-500/20 rounded-full blur-2xl animate-pulse" style={{ animationDuration: '6s' }}></div>
            <div className="absolute bottom-20 right-10 w-24 h-24 md:w-48 md:h-48 bg-gradient-to-br from-red-400/25 to-orange-500/15 rounded-full blur-xl animate-pulse" style={{ animationDuration: '8s', animationDelay: '2s' }}></div>
          </div>
          
          {/* Simple particles for mobile */}
          <div className="absolute inset-0">
            {Array.from({ length: 5 }).map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 bg-orange-300 rounded-full animate-ping opacity-40"
                style={{
                  top: `${20 + (i * 20)}%`,
                  left: `${10 + (i * 20)}%`,
                  animationDelay: `${i * 0.5}s`,
                  animationDuration: '3s'
                }}
              />
            ))}
          </div>
          
          {/* Simple wave effect */}
          <div className="absolute bottom-0 left-0 w-full h-16 opacity-30">
            <div className="w-full h-full bg-gradient-to-r from-orange-500/40 via-red-500/30 to-orange-500/40 animate-pulse" style={{ animationDuration: '5s' }}></div>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto w-full relative z-10">
          <div className="text-center">
            {/* Enhanced Badge */}
            <div className="inline-flex items-center glass-button px-6 py-3 rounded-full mb-8 font-bold text-sm">
              <Star className="w-5 h-5 mr-2 fill-current text-yellow-300" />
              <span className="text-white">Internet + SaraivaTV Grátis</span>
            </div>
            
            {/* Enhanced Main Title */}
            <h1 className="font-extrabold mb-6 leading-tight">
              <span className="block text-white text-shadow">Internet</span>
              <span className="block text-white text-shadow font-bold bg-gradient-to-r from-yellow-300 via-orange-300 to-red-300 bg-clip-text text-transparent drop-shadow-lg">+ SaraivaTV</span>
            </h1>
            
            {/* Enhanced Subtitle */}
            <p className="text-xl mb-12 text-white/90 leading-relaxed max-w-2xl mx-auto font-medium text-shadow">
              Conecte-se com nossa internet de fibra óptica ultrarrápida e ganhe acesso completo ao app SaraivaTV.
            </p>

            {/* Enhanced Feature Grid */}
            <div className="grid grid-cols-2 gap-4 mb-12 max-w-lg mx-auto">
              <GlassCard className="flex flex-col items-center space-y-3 hover-float">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-red-400 rounded-full flex items-center justify-center hover-scale">
                  <Wifi className="w-6 h-6 text-white" />
                </div>
                <span className="text-sm font-semibold text-white">Fibra Óptica</span>
              </GlassCard>
              
              <GlassCard className="flex flex-col items-center space-y-3 hover-float">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full flex items-center justify-center hover-scale">
                  <Tv className="w-6 h-6 text-white" />
                </div>
                <span className="text-sm font-semibold text-white">SaraivaTV</span>
              </GlassCard>
            </div>

            {/* Enhanced CTA */}
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-12">
              <PremiumButton 
                size="lg" 
                glow={true} 
                shimmer={true}
                onClick={handleWhatsAppClick}
                className="w-full sm:w-auto"
              >
                <img 
                  src="/lovable-uploads/981f602c-b0d2-4161-8119-dfd91ef1c234.png" 
                  alt="WhatsApp" 
                  className="w-5 h-5 mr-2"
                />
                Contratar Agora
              </PremiumButton>
              
              <TouchButton 
                variant="outline" 
                size="lg" 
                className="w-full sm:w-auto glass-button border-white/30 text-white hover:bg-white/20"
              >
                Ver Planos
              </TouchButton>
            </div>
          </div>
        </div>

        {/* SaraivaTV Section - sem animações */}
        <div className="max-w-4xl mx-auto mt-16">
          <GlassCard className="text-center p-8">
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-500 rounded-2xl flex items-center justify-center shadow-2xl">
                <Tv className="w-8 h-8 text-white" />
              </div>
            </div>
            
            <h3 className="text-3xl font-bold text-white mb-4">
              SaraivaTV
            </h3>
            
            <p className="text-lg text-orange-200 mb-8 leading-relaxed">
              Streaming completo com filmes, séries, documentários e canais ao vivo. 
              Totalmente grátis para nossos clientes de internet!
            </p>
            
            <div className="grid grid-cols-4 gap-4 mb-8">
              <div className="bg-gradient-to-br from-white/15 to-white/5 rounded-xl p-4 text-center border border-white/20 hover:from-white/25 hover:to-white/10 transition-all duration-300">
                <Heart className="w-8 h-8 mx-auto mb-3 text-red-300" />
                <span className="text-sm font-semibold text-white">Filmes</span>
              </div>
              <div className="bg-gradient-to-br from-white/15 to-white/5 rounded-xl p-4 text-center border border-white/20 hover:from-white/25 hover:to-white/10 transition-all duration-300">
                <Star className="w-8 h-8 mx-auto mb-3 text-yellow-300" />
                <span className="text-sm font-semibold text-white">Séries</span>
              </div>
              <div className="bg-gradient-to-br from-white/15 to-white/5 rounded-xl p-4 text-center border border-white/20 hover:from-white/25 hover:to-white/10 transition-all duration-300">
                <Zap className="w-8 h-8 mx-auto mb-3 text-blue-300" />
                <span className="text-sm font-semibold text-white">Ao Vivo</span>
              </div>
              <div className="bg-gradient-to-br from-white/15 to-white/5 rounded-xl p-4 text-center border border-white/20 hover:from-white/25 hover:to-white/10 transition-all duration-300">
                <Smartphone className="w-8 h-8 mx-auto mb-3 text-purple-300" />
                <span className="text-sm font-semibold text-white">No Celular</span>
              </div>
            </div>
            
            <p className="text-center text-base text-orange-200 mb-6 font-medium">
              Disponível para Android e iOS
            </p>
            
            <div className="flex justify-center space-x-6">
              <div className="bg-gradient-to-br from-white/20 to-white/10 rounded-xl p-4 border border-white/30 shadow-lg">
                <Smartphone className="w-8 h-8 text-orange-300" />
              </div>
              <div className="bg-gradient-to-br from-white/20 to-white/10 rounded-xl p-4 border border-white/30 shadow-lg">
                <Tv className="w-8 h-8 text-blue-300" />
              </div>
            </div>
          </GlassCard>
        </div>
      </section>

      {/* Plans Section */}
      <section id="planos" className="bg-gradient-to-br from-gray-800 via-gray-900 to-black dark:from-gray-900 dark:via-black dark:to-gray-900 text-white px-4 py-12">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection animation="fade-up" className="text-center mb-6 md:mb-8 sm:mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Nossos <span className="gradient-text">Planos</span>
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Escolha o plano ideal para sua casa ou empresa. Todos incluem SaraivaTV gratuito!
            </p>
          </AnimatedSection>

          {/* Mobile Plans Carousel */}
          <AnimatedSection animation="scale-in" delay={200}>
            <MobilePlansCarousel />
          </AnimatedSection>

          {/* Desktop Plans Grid */}
          <AnimatedSection animation="fade-up" delay={300} className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Plano Básico */}
            <Card className="relative overflow-hidden group hover:shadow-xl transition-all duration-300">
              <div className="p-6">
                <div className="text-center">
                  <Zap className="w-12 h-12 text-orange-600 mx-auto mb-3" />
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Plano Básico</h4>
                  <div className="text-3xl font-bold text-orange-600 mb-3">
                    R$ 59,90
                    <span className="text-sm text-gray-500 dark:text-gray-400 font-normal">/mês</span>
                  </div>
                  <div className="text-xl font-semibold text-gray-700 dark:text-gray-300 mb-4">
                    100 Mbps
                  </div>
                  
                  <ul className="space-y-2 mb-6 text-left">
                    <li className="flex items-center text-sm">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      <span>Download: 100 Mbps</span>
                    </li>
                    <li className="flex items-center text-sm">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      <span>Upload: 50 Mbps</span>
                    </li>
                    <li className="flex items-center text-sm">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      <span>Fibra óptica</span>
                    </li>
                    <li className="flex items-center text-sm">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      <span>Suporte 24/7</span>
                    </li>
                  </ul>
                  
                  <Button className="w-full bg-orange-600 hover:bg-orange-700 text-white">
                    Contratar Agora
                  </Button>
                </div>
              </div>
            </Card>

            {/* Plano Intermediário */}
            <Card className="relative overflow-hidden group hover:shadow-xl transition-all duration-300">
              <div className="p-6">
                <div className="text-center">
                  <Wifi className="w-12 h-12 text-orange-600 mx-auto mb-3" />
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Plano Intermediário</h4>
                  <div className="text-3xl font-bold text-orange-600 mb-3">
                    R$ 89,90
                    <span className="text-sm text-gray-500 dark:text-gray-400 font-normal">/mês</span>
                  </div>
                  <div className="text-xl font-semibold text-gray-700 dark:text-gray-300 mb-4">
                    300 Mbps
                  </div>
                  
                  <ul className="space-y-2 mb-6 text-left">
                    <li className="flex items-center text-sm">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      <span>Download: 300 Mbps</span>
                    </li>
                    <li className="flex items-center text-sm">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      <span>Upload: 150 Mbps</span>
                    </li>
                    <li className="flex items-center text-sm">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      <span>Fibra óptica</span>
                    </li>
                    <li className="flex items-center text-sm">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      <span>Suporte 24/7</span>
                    </li>
                  </ul>
                  
                  <Button className="w-full bg-orange-600 hover:bg-orange-700 text-white">
                    Contratar Agora
                  </Button>
                </div>
              </div>
            </Card>

            {/* Plano Premium */}
            <Card className="relative overflow-hidden group hover:shadow-xl transition-all duration-300 border-2 border-orange-500 scale-105">
              <div className="absolute top-0 right-0 bg-orange-500 text-white px-2 py-1 text-xs font-bold rounded-bl-lg">
                POPULAR
              </div>
              <div className="p-6">
                <div className="text-center">
                  <Zap className="w-12 h-12 text-orange-600 mx-auto mb-3" />
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Plano Premium</h4>
                  <div className="text-3xl font-bold text-orange-600 mb-3">
                    R$ 129,90
                    <span className="text-sm text-gray-500 dark:text-gray-400 font-normal">/mês</span>
                  </div>
                  <div className="text-xl font-semibold text-gray-700 dark:text-gray-300 mb-4">
                    600 Mbps
                  </div>
                  
                  <ul className="space-y-2 mb-6 text-left">
                    <li className="flex items-center text-sm">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      <span>Download: 600 Mbps</span>
                    </li>
                    <li className="flex items-center text-sm">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      <span>Upload: 300 Mbps</span>
                    </li>
                    <li className="flex items-center text-sm">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                    <span>Fibra óptica</span>
                    </li>
                    <li className="flex items-center text-sm">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      <span>Suporte 24/7</span>
                    </li>
                    <li className="flex items-center text-sm">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      <span>WiFi 6 incluso</span>
                    </li>
                  </ul>
                  
                  <Button className="w-full bg-orange-600 hover:bg-orange-700 text-white">
                    Contratar Agora
                  </Button>
                </div>
              </div>
            </Card>

            {/* Plano Ultra */}
            <Card className="relative overflow-hidden group hover:shadow-xl transition-all duration-300">
              <div className="p-6">
                <div className="text-center">
                  <Zap className="w-12 h-12 text-orange-600 mx-auto mb-3" />
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Plano Ultra</h4>
                  <div className="text-3xl font-bold text-orange-600 mb-3">
                    R$ 199,90
                    <span className="text-sm text-gray-500 dark:text-gray-400 font-normal">/mês</span>
                  </div>
                  <div className="text-xl font-semibold text-gray-700 dark:text-gray-300 mb-4">
                    1000 Mbps
                  </div>
                  
                  <ul className="space-y-2 mb-6 text-left">
                    <li className="flex items-center text-sm">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      <span>Download: 1000 Mbps</span>
                    </li>
                    <li className="flex items-center text-sm">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      <span>Upload: 500 Mbps</span>
                    </li>
                    <li className="flex items-center text-sm">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      <span>Fibra óptica</span>
                    </li>
                    <li className="flex items-center text-sm">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      <span>Suporte 24/7</span>
                    </li>
                    <li className="flex items-center text-sm">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      <span>WiFi 6 incluso</span>
                    </li>
                    <li className="flex items-center text-sm">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      <span>IP fixo gratuito</span>
                    </li>
                  </ul>
                  
                  <Button className="w-full bg-orange-600 hover:bg-orange-700 text-white">
                    Contratar Agora
                  </Button>
                </div>
              </div>
            </Card>
          </AnimatedSection>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 px-4 bg-gradient-to-r from-orange-600 to-red-600 dark:from-gray-800 dark:to-gray-900">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection animation="scale-in" className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
            <div>
              <div className="text-3xl font-bold text-white mb-2">5000+</div>
              <p className="text-lg font-semibold mt-2">Clientes Ativos</p>
            </div>
            
            <div>
              <div className="text-3xl font-bold text-white mb-2">99%</div>
              <p className="text-lg font-semibold mt-2">Uptime</p>
            </div>
            
            <div>
              <div className="text-3xl font-bold text-white mb-2">24/7</div>
              <p className="text-lg font-semibold mt-2">Suporte</p>
            </div>
            
            <div>
              <div className="text-3xl font-bold text-white mb-2">15</div>
              <p className="text-lg font-semibold mt-2">Anos no Mercado</p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Coverage Section */}
      <section id="cobertura" className="py-12 px-4 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection animation="fade-up" className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Área de <span className="gradient-text">Cobertura</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Levamos internet de qualidade para toda a região de Eliseu Martins e cidades vizinhas
            </p>
          </AnimatedSection>
          
          <AnimatedSection animation="slide-left" delay={200} className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="bg-gradient-to-br from-orange-50 to-red-50 dark:from-gray-800 dark:to-gray-700 p-8 rounded-2xl">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Cidades Atendidas</h3>
                <ul className="space-y-3">
                  <li className="flex items-center text-gray-700 dark:text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    Eliseu Martins (Centro)
                  </li>
                  <li className="flex items-center text-gray-700 dark:text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    São João do Piauí
                  </li>
                  <li className="flex items-center text-gray-700 dark:text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    Wall Ferraz
                  </li>
                  <li className="flex items-center text-gray-700 dark:text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    Zona Rural de Eliseu Martins
                  </li>
                </ul>
                
                <div className="mt-8">
                  <Button onClick={handleWhatsAppClick} className="w-full bg-orange-600 hover:bg-orange-700 text-white">
                    Verificar Disponibilidade
                  </Button>
                </div>
              </div>
            </div>
            
            <div className="h-96 bg-gray-100 dark:bg-gray-800 rounded-2xl overflow-hidden">
              <RealMap />
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre" className="py-12 px-4 bg-gradient-to-br from-gray-50 to-orange-50 dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection animation="fade-up" className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Sobre a <span className="gradient-text">SaraivaNet</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Há mais de 15 anos conectando famílias e empresas com internet de qualidade e agora com nosso próprio streaming
            </p>
          </AnimatedSection>
          
          <AnimatedSection animation="scale-in" delay={300} className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Confiabilidade</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Rede estável com 99% de uptime e suporte técnico especializado 24/7
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Qualidade</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Fibra óptica de última geração para velocidades reais e estáveis
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Comunidade</h3>
              <p className="text-gray-600 dark:text-gray-300">
                 Empresa local que entende as necessidades da nossa região
               </p>
             </div>
           </AnimatedSection>
           
           <AnimatedSection animation="fade-up" delay={500} className="mt-12 bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  Nossa História
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                  Fundada em 2008, a SaraivaNet nasceu do sonho de levar internet de qualidade para Eliseu Martins e região. 
                  Começamos pequenos, mas sempre com o compromisso de oferecer o melhor serviço possível.
                </p>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  Hoje, somos a principal provedora de internet da região e lançamos o SaraivaTV, 
                  nosso próprio serviço de streaming, para oferecer ainda mais valor aos nossos clientes.
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-600 mb-2">5000+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Clientes Ativos</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-600 mb-2">15</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Anos de Experiência</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-600 mb-2">4</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Cidades Atendidas</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-600 mb-2">24/7</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Suporte Técnico</div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-12 px-4 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection animation="fade-up" className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              O que nossos <span className="gradient-text">clientes</span> dizem
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Depoimentos reais de quem confia na SaraivaNet
            </p>
          </AnimatedSection>
          
          <AnimatedSection animation="scale-in" delay={200} className="grid md:grid-cols-3 gap-8">
            <TestimonialCard 
              name="Maria Silva"
              age="35 anos"
              location="Eliseu Martins - PI"
              testimonial="A SaraivaNet transformou meu negócio! Internet rápida e confiável, e agora com o SaraivaTV, toda a família fica feliz."
              initials="MS"
            />
            
            <TestimonialCard 
              name="João Santos"
              age="22 anos"
              location="Eliseu Martins - PI"
              testimonial="Perfeita para estudos online e entretenimento. O SaraivaTV tem filmes incríveis e a internet nunca cai!"
              initials="JS"
            />
            
            <TestimonialCard 
              name="Ana Costa"
              age="28 anos"
              location="São João do Piauí"
              testimonial="Suporte excepcional e preço justo. O SaraivaTV entretém as crianças enquanto trabalho em casa."
              initials="AC"
             />
           </AnimatedSection>
         </div>
       </section>

      {/* Contact Section */}
      <section id="contato" className="py-12 px-4 bg-gradient-to-br from-orange-600 to-red-600 dark:from-gray-800 dark:to-gray-900 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Entre em <span className="text-yellow-300">Contato</span>
            </h2>
            <p className="text-lg text-orange-100">
              Estamos prontos para atender você. Fale conosco!
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Telefone</h3>
              <p className="text-orange-100">(89) 99439-5789</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">E-mail</h3>
              <p className="text-orange-100">contato@saraivanet.com.br</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Localização</h3>
              <p className="text-orange-100">Eliseu Martins - PI</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Horário</h3>
              <p className="text-orange-100">24/7 Online</p>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Button 
              onClick={handleWhatsAppClick}
              size="lg"
              className="bg-white text-orange-600 hover:bg-orange-50 font-bold px-8 py-4 text-lg"
            >
              <img 
                src="/lovable-uploads/981f602c-b0d2-4161-8119-dfd91ef1c234.png" 
                alt="WhatsApp" 
                className="w-6 h-6 mr-3"
              />
              Falar no WhatsApp
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-orange-600 rounded-lg flex items-center justify-center">
                  <Wifi className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold">SaraivaNet</span>
              </div>
              <p className="text-gray-400 text-sm">
                Conectando você ao que importa há mais de 15 anos.
              </p>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Serviços</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>Internet Fibra Óptica</li>
                <li>SaraivaTV Streaming</li>
                <li>Suporte Técnico</li>
                <li>Wi-Fi 6</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Empresa</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>Sobre Nós</li>
                <li>Nossa História</li>
                <li>Área de Cobertura</li>
                <li>Trabalhe Conosco</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Contato</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>(89) 99439-5789</li>
                <li>contato@saraivanet.com.br</li>
                <li>Eliseu Martins - PI</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400 text-sm">
              © 2024 SaraivaNet. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;