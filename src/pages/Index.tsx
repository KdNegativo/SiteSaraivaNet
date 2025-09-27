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
import saraivaLogo from "@/assets/saraiva-logo-official.png";

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
    <div className="min-h-screen relative overflow-hidden" style={{
      background: 'linear-gradient(135deg, #FF8C00 0%, #FF7F50 25%, #FF6B35 50%, #F7931E 75%, #FFA500 100%)',
    }}>
      
      {/* Overlay simples para profundidade */}
      <div className="absolute inset-0" style={{
        background: 'radial-gradient(ellipse at top left, rgba(255, 255, 255, 0.1) 0%, transparent 50%)',
      }}></div>
      
      {/* Floating Components */}
      <ChatBot />
      
      {/* Header */}
      <header style={{background: 'linear-gradient(135deg, #FF6600 0%, #FF2E00 100%)', borderBottomColor: '#ff2200'}} className="fixed top-0 left-0 right-0 shadow-xl px-4 py-2 border-b-4 z-50">
        {/* Mobile Layout */}
        <div className="md:hidden">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="flex items-center justify-center">
                <img src={saraivaLogo} alt="SaraivaNet Logo" className="object-contain" style={{width: '55px', height: '55px', filter: 'drop-shadow(0 0 2px rgba(255,255,255,0.9)) drop-shadow(0 0 4px rgba(255,255,255,0.5))'}} />
              </div>
              <div>
                <span style={{fontSize: '18px', fontWeight: 'bold', color: '#ffffff', textShadow: '2px 2px 8px rgba(0,0,0,0.8)', fontFamily: 'Poppins, sans-serif', letterSpacing: '0.5px'}}>SaraivaNet</span>
                <div className="text-xs text-orange-100 font-medium flex items-center">
                  <MapPin className="w-2.5 h-2.5 mr-1" />
                  <span className="bg-gradient-to-r from-white/80 to-white/60 bg-clip-text text-transparent font-bold">Eliseu Martins - PI</span>
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <MobileNavigation />
            </div>
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden md:flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="flex items-center justify-center hover:scale-105 transition-transform duration-300">
              <img src={saraivaLogo} alt="SaraivaNet Logo" className="object-contain" style={{width: '55px', height: '55px', filter: 'drop-shadow(0 0 2px rgba(255,255,255,0.9)) drop-shadow(0 0 4px rgba(255,255,255,0.5))'}} />
            </div>
            <div>
              <span style={{fontSize: '24px', fontWeight: 'bold', color: '#ffffff', textShadow: '2px 2px 4px #000000', fontFamily: 'Poppins, sans-serif'}}>SaraivaNet</span>
              <div className="text-xs text-orange-100 font-medium flex items-center">
                <MapPin className="w-3 h-3 mr-1" />
                Eliseu Martins - PI
              </div>
            </div>
          </div>
          
          <nav className="flex items-center space-x-6">
            <TouchButton onClick={() => handleSmoothScroll('inicio')} className="text-white hover:text-orange-200 transition-colors font-medium">Início</TouchButton>
            <TouchButton onClick={() => handleSmoothScroll('planos')} className="text-white hover:text-orange-200 transition-colors font-medium">Planos</TouchButton>
            <TouchButton onClick={() => handleSmoothScroll('cobertura')} className="text-white hover:text-orange-200 transition-colors font-medium">Cobertura</TouchButton>
            <TouchButton onClick={() => handleSmoothScroll('sobre')} className="text-white hover:text-orange-200 transition-colors font-medium">Sobre</TouchButton>
            <TouchButton onClick={() => handleSmoothScroll('contato')} className="text-white hover:text-orange-200 transition-colors font-medium">Contato</TouchButton>
            <Link to="/chips"><TouchButton className="text-white hover:text-orange-200 transition-colors font-semibold">Chips</TouchButton></Link>
          </nav>

          <div className="flex items-center space-x-4">
            {/* ThemeToggle removido */}
          </div>
        </div>
      </header>

      {/* Hero Section - Fundo Premium Ultra Moderno */}
      <section id="inicio" className="relative overflow-hidden min-h-screen flex items-center" style={{
        background: `
          linear-gradient(135deg, 
            #FF8C00 0%,
            #FF7F50 8%,
            #FF6B35 16%,
            #F7931E 24%,
            #FF8C00 32%,
            #FFA500 40%,
            #FF7F00 48%,
            #FF6347 56%,
            #FF5722 64%,
            #FF6B35 72%,
            #F7931E 80%,
            #FF8C00 88%,
            #FFA500 96%,
            #FFB84D 100%
          ),
          radial-gradient(ellipse 70% 40% at 30% 20%, rgba(255, 215, 0, 0.3) 0%, transparent 70%),
          radial-gradient(ellipse 80% 60% at 80% 70%, rgba(255, 140, 0, 0.25) 0%, transparent 60%),
          radial-gradient(ellipse 60% 50% at 10% 80%, rgba(247, 147, 30, 0.2) 0%, transparent 50%),
          linear-gradient(45deg, rgba(255, 165, 0, 0.1) 0%, rgba(255, 140, 0, 0.05) 50%, rgba(255, 107, 53, 0.1) 100%)
        `,
        backgroundSize: '300% 300%, 600px 400px, 800px 600px, 500px 300px, 100% 100%',
        backgroundPosition: '0% 50%, 30% 20%, 80% 70%, 10% 80%, 0% 0%',
        animation: 'premium-bg-flow 20s ease-in-out infinite'
      }}>
        
        {/* Mobile Version */}
        <div className="md:hidden w-full px-4 py-16">
          <div className="relative z-10 text-center space-y-8">
            <AnimatedSection animation="fade-up">
              {/* Badge maior */}
              <div className="inline-flex items-center bg-gradient-to-r from-yellow-400 to-orange-400 text-gray-900 px-4 py-2 rounded-full font-bold text-sm mb-4">
                <Star className="w-4 h-4 mr-2" />
                Internet + TV Grátis
              </div>

              {/* Title maior no mobile */}
              <div className="space-y-4">
                <h1 className="font-black text-white leading-none" style={{
                  fontSize: 'clamp(32px, 9vw, 48px)',
                  lineHeight: '0.95',
                  fontWeight: '800',
                  textShadow: '2px 2px 8px rgba(0,0,0,0.5)'
                }}>
                  Internet + SaraivaTV
                </h1>
                
                {/* Subtitle maior */}
                <p className="text-white/95 font-semibold max-w-[56ch] mx-auto" style={{
                  fontSize: 'clamp(16px, 4.5vw, 20px)',
                  textShadow: '1px 1px 6px rgba(0,0,0,0.5)'
                }}>
                  🚀 Internet ultrarrápida + App gratuito
                </p>
              </div>

              {/* Carousel maior no mobile */}
              <div className="w-full max-w-lg mx-auto mt-6" style={{aspectRatio: '14/9'}}>
                <div className="w-full h-full rounded-2xl overflow-hidden border-2 border-white/20">
                  <HeroCarousel />
                </div>
              </div>

              {/* Benefits Cards maiores */}
              <div className="grid grid-cols-2 gap-3 max-w-sm mx-auto mt-12">
                <div className="bg-gradient-to-br from-orange-500 to-red-500 rounded-xl p-4 text-center border border-white/20 relative overflow-hidden">
                  <div className="w-7 h-7 bg-white/20 rounded-lg flex items-center justify-center mx-auto mb-2">
                    <Wifi className="w-4 h-4 text-white" />
                  </div>
                  <div className="text-white font-bold text-xs">Internet<br/>Rápida</div>
                </div>
                <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl p-4 text-center border border-white/20 relative overflow-hidden">
                  <div className="w-7 h-7 bg-white/20 rounded-lg flex items-center justify-center mx-auto mb-2">
                    <Tv className="w-4 h-4 text-white" />
                  </div>
                  <div className="text-white font-bold text-xs">Aplicativo de<br/>TV</div>
                </div>
                <div className="bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl p-4 text-center border border-white/20 relative overflow-hidden">
                  <div className="w-7 h-7 bg-white/20 rounded-lg flex items-center justify-center mx-auto mb-2">
                    <Music className="w-4 h-4 text-white" />
                  </div>
                  <div className="text-white font-bold text-xs">Rádios<br/>24h</div>
                </div>
                <div className="bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl p-4 text-center border border-white/20 relative overflow-hidden">
                  <div className="w-7 h-7 bg-white/20 rounded-lg flex items-center justify-center mx-auto mb-2">
                    <Shield className="w-4 h-4 text-white" />
                  </div>
                  <div className="text-white font-bold text-xs">Suporte<br/>VIP</div>
                </div>
              </div>

              {/* CTA Button maior no mobile */}
              <div className="mt-8">
                <TouchButton 
                  onClick={handleWhatsAppClick}
                  className="group relative bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg transition-all duration-300 transform hover:scale-105 w-full max-w-sm mx-auto flex items-center justify-center gap-3 animate-pulse"
                  style={{
                    boxShadow: '0 10px 30px rgba(34, 197, 94, 0.4)',
                    textShadow: '1px 1px 3px rgba(0,0,0,0.5)'
                  }}
                >
                  <span className="text-xl">📱</span>
                  Contratar Agora
                  <Zap className="w-6 h-6 text-yellow-300 animate-bounce" />
                </TouchButton>
              </div>
            </AnimatedSection>
          </div>
        </div>

        {/* Desktop Version */}
        <div className="hidden md:flex items-center w-full px-8 pt-20 pb-12">
          <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Content */}
            <AnimatedSection animation="slide-left">
              <div className="space-y-8">
                {/* Badge */}
                <div className="inline-flex items-center bg-gradient-to-r from-yellow-400 to-orange-400 text-gray-900 px-6 py-3 rounded-full font-bold text-base shadow-lg">
                  <Star className="w-5 h-5 mr-2" />
                  Internet + TV Grátis
                </div>

                {/* Main Title */}
                <div className="space-y-4">
                  <h1 className="text-6xl xl:text-7xl font-black text-white leading-tight" style={{
                    textShadow: '3px 3px 12px rgba(0,0,0,0.8)',
                    fontFamily: 'Poppins, sans-serif'
                  }}>
                    Internet +<br />
                    <span className="bg-gradient-to-r from-yellow-300 via-white to-yellow-300 bg-clip-text text-transparent">
                      SaraivaTV
                    </span>
                  </h1>
                  <p className="text-xl text-white/95 font-semibold max-w-lg" style={{
                    textShadow: '2px 2px 8px rgba(0,0,0,0.7)'
                  }}>
                    🚀 Internet ultrarrápida com aplicativo de TV gratuito para toda família!
                  </p>
                </div>

                {/* Desktop CTA */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <TouchButton 
                    onClick={handleWhatsAppClick}
                    className="group relative bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg transition-all duration-300 transform hover:scale-105 flex items-center gap-3"
                    style={{
                      boxShadow: '0 10px 30px rgba(34, 197, 94, 0.4)',
                      textShadow: '1px 1px 3px rgba(0,0,0,0.5)'
                    }}
                  >
                    <span className="text-xl">📱</span>
                    Contratar via WhatsApp
                    <Zap className="w-5 h-5 text-yellow-300 group-hover:animate-bounce" />
                  </TouchButton>
                  
                  <TouchButton 
                    onClick={handlePhoneClick}
                    className="bg-white/20 hover:bg-white/30 text-white border-2 border-white/40 hover:border-white/60 px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 flex items-center gap-3 backdrop-blur-md"
                    style={{textShadow: '1px 1px 3px rgba(0,0,0,0.5)'}}
                  >
                    <Phone className="w-5 h-5" />
                    (89) 99439-5789
                  </TouchButton>
                </div>
              </div>
            </AnimatedSection>

            {/* Right Content */}
            <AnimatedSection animation="slide-right">
              <div className="relative">
                {/* Hero Image/Carousel */}
                <div className="relative bg-white/10 backdrop-blur-xl rounded-3xl p-6 border border-white/20 shadow-2xl" style={{aspectRatio: '16/10'}}>
                  <HeroCarousel />
                </div>

                {/* Floating Features */}
                <div className="grid grid-cols-2 gap-4 mt-8">
                  <div className="bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl p-6 text-center border border-white/20 hover:scale-105 transition-transform duration-300">
                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-3">
                      <Wifi className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-white font-bold text-lg mb-1">Internet</h3>
                    <p className="text-white/80 text-sm">Ultra Rápida</p>
                  </div>
                  
                  <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl p-6 text-center border border-white/20 hover:scale-105 transition-transform duration-300">
                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-3">
                      <Tv className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-white font-bold text-lg mb-1">SaraivaTV</h3>
                    <p className="text-white/80 text-sm">App Gratuito</p>
                  </div>
                  
                  <div className="bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl p-6 text-center border border-white/20 hover:scale-105 transition-transform duration-300">
                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-3">
                      <Music className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-white font-bold text-lg mb-1">Rádios</h3>
                    <p className="text-white/80 text-sm">24h Online</p>
                  </div>
                  
                  <div className="bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl p-6 text-center border border-white/20 hover:scale-105 transition-transform duration-300">
                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-3">
                      <Shield className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-white font-bold text-lg mb-1">Suporte</h3>
                    <p className="text-white/80 text-sm">VIP 24/7</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <AnimatedSection animation="fade-up">
        <section className="py-16 bg-white/95 backdrop-blur-xl">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <StatsCounter endValue={500} label="Clientes Ativos" />
              </div>
              <div className="text-center">
                <StatsCounter endValue={99} label="Uptime" suffix="%" />
              </div>
              <div className="text-center">
                <StatsCounter endValue={24} label="Suporte" suffix="h" />
              </div>
              <div className="text-center">
                <StatsCounter endValue={5} label="Anos no Mercado" />
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Plans Section Mobile */}
      <section id="planos" className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="fade-up">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Planos de Internet + SaraivaTV
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Escolha o plano perfeito para sua família. Todos os planos incluem o aplicativo SaraivaTV gratuito!
              </p>
            </div>
          </AnimatedSection>

          {/* Mobile Plans Carousel */}
          <div className="md:hidden">
            <MobilePlansCarousel />
          </div>

          {/* Desktop Plans Grid */}
          <div className="hidden md:grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {/* Plan 1 - Basic */}
            <AnimatedSection animation="fade-up" delay={0}>
              <Card className="relative overflow-hidden border-2 border-gray-200 hover:border-orange-400 transition-all duration-300 hover:shadow-xl group">
                <div className="p-8">
                  <div className="text-center mb-6">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mb-4">
                      <Wifi className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Básico</h3>
                    <div className="text-4xl font-black text-orange-600 mb-2">R$ 49</div>
                    <p className="text-gray-500">por mês</p>
                  </div>
                  
                  <div className="space-y-4 mb-8">
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700">Internet 50MB</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700">SaraivaTV Grátis</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700">Suporte 24h</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700">Instalação Grátis</span>
                    </div>
                  </div>
                  
                  <TouchButton 
                    onClick={handleWhatsAppClick}
                    className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold py-3 rounded-lg transition-all duration-300 group-hover:scale-105"
                  >
                    Contratar Agora
                  </TouchButton>
                </div>
              </Card>
            </AnimatedSection>

            {/* Plan 2 - Popular */}
            <AnimatedSection animation="fade-up" delay={200}>
              <Card className="relative overflow-hidden border-2 border-orange-400 shadow-xl scale-105 bg-gradient-to-b from-orange-50 to-white">
                <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-orange-500 to-orange-600 text-white text-center py-2 font-bold text-sm">
                  MAIS POPULAR
                </div>
                <div className="p-8 pt-12">
                  <div className="text-center mb-6">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full mb-4">
                      <Zap className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Turbo</h3>
                    <div className="text-4xl font-black text-orange-600 mb-2">R$ 79</div>
                    <p className="text-gray-500">por mês</p>
                  </div>
                  
                  <div className="space-y-4 mb-8">
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700">Internet 100MB</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700">SaraivaTV Premium</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700">Suporte Prioritário</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700">Instalação + Wi-Fi Grátis</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700">Técnico 24h</span>
                    </div>
                  </div>
                  
                  <TouchButton 
                    onClick={handleWhatsAppClick}
                    className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold py-3 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    Contratar Agora
                  </TouchButton>
                </div>
              </Card>
            </AnimatedSection>

            {/* Plan 3 - Premium */}
            <AnimatedSection animation="fade-up" delay={400}>
              <Card className="relative overflow-hidden border-2 border-gray-200 hover:border-orange-400 transition-all duration-300 hover:shadow-xl group">
                <div className="p-8">
                  <div className="text-center mb-6">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mb-4">
                      <Award className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Premium</h3>
                    <div className="text-4xl font-black text-orange-600 mb-2">R$ 129</div>
                    <p className="text-gray-500">por mês</p>
                  </div>
                  
                  <div className="space-y-4 mb-8">
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700">Internet 200MB</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700">SaraivaTV Premium+</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700">Suporte VIP</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700">Instalação Premium</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700">Wi-Fi Mesh Grátis</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700">IP Fixo Grátis</span>
                    </div>
                  </div>
                  
                  <TouchButton 
                    onClick={handleWhatsAppClick}
                    className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold py-3 rounded-lg transition-all duration-300 group-hover:scale-105"
                  >
                    Contratar Agora
                  </TouchButton>
                </div>
              </Card>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Coverage Section */}
      <section id="cobertura" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="fade-up">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Área de Cobertura
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Verificamos nossa cobertura em Eliseu Martins - PI e região. Nossa rede fibra óptica garante a melhor conexão para você!
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="scale-in">
            <div className="bg-gray-50 rounded-3xl p-8 max-w-4xl mx-auto">
              <RealMap />
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre" className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <AnimatedSection animation="fade-up">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Sobre a SaraivaNet
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Há 5 anos conectando famílias em Eliseu Martins com a melhor internet e entretenimento da região.
                </p>
              </div>
            </AnimatedSection>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <AnimatedSection animation="slide-left">
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center">
                      <Users className="w-6 h-6 text-orange-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        Foco no Cliente
                      </h3>
                      <p className="text-gray-600">
                        Mais de 500 famílias confiam na SaraivaNet para sua conexão diária. Nossa prioridade é sua satisfação.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center">
                      <Shield className="w-6 h-6 text-orange-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        Tecnologia Confiável
                      </h3>
                      <p className="text-gray-600">
                        Rede 100% fibra óptica com 99% de uptime. Tecnologia de ponta para garantir sua conexão sempre estável.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center">
                      <Heart className="w-6 h-6 text-orange-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        Compromisso Local
                      </h3>
                      <p className="text-gray-600">
                        Empresa familiar nascida em Eliseu Martins. Conhecemos as necessidades da nossa comunidade.
                      </p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>

              <AnimatedSection animation="slide-right">
                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 text-center">
                    <div className="text-3xl font-bold text-orange-600 mb-2">500+</div>
                    <div className="text-gray-600 font-medium">Clientes Ativos</div>
                  </div>
                  <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 text-center">
                    <div className="text-3xl font-bold text-orange-600 mb-2">99%</div>
                    <div className="text-gray-600 font-medium">Uptime</div>
                  </div>
                  <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 text-center">
                    <div className="text-3xl font-bold text-orange-600 mb-2">24h</div>
                    <div className="text-gray-600 font-medium">Suporte</div>
                  </div>
                  <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 text-center">
                    <div className="text-3xl font-bold text-orange-600 mb-2">5</div>
                    <div className="text-gray-600 font-medium">Anos</div>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="fade-up">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                O que nossos clientes dizem
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Depoimentos reais de quem confia na SaraivaNet para se manter conectado.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <AnimatedSection animation="fade-up" delay={0}>
              <TestimonialCard
                name="Maria Santos"
                testimonial="A internet da SaraivaNet é excelente! Nunca fica fora do ar e o suporte é muito rápido. O app da TV é uma maravilha para as crianças."
                age="32 anos"
                location="São Paulo, SP"
                initials="MS"
              />
            </AnimatedSection>

            <AnimatedSection animation="fade-up" delay={200}>
              <TestimonialCard
                name="João Silva"
                testimonial="Melhor custo-benefício da região! Internet rápida, TV grátis e atendimento nota 10. Super recomendo a SaraivaNet!"
                age="28 anos"
                location="Rio de Janeiro, RJ"
                initials="JS"
              />
            </AnimatedSection>

            <AnimatedSection animation="fade-up" delay={400}>
              <TestimonialCard
                name="Ana Oliveira"
                testimonial="Desde que contratei nunca mais tive problemas. A fibra óptica faz toda diferença! E o SaraivaTV tem muito conteúdo bom."
                age="45 anos"
                location="Belo Horizonte, MG"
                initials="AO"
              />
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contato" className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="fade-up">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Entre em Contato
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Estamos prontos para levar a melhor internet para sua casa. Fale conosco agora!
              </p>
            </div>
          </AnimatedSection>

          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            <AnimatedSection animation="slide-left">
              <div className="space-y-6">
                <div className="flex items-center gap-4 p-6 bg-white rounded-2xl shadow-lg border border-gray-100">
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                    <Phone className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">Telefone / WhatsApp</h3>
                    <p className="text-gray-600">(89) 99439-5789</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-6 bg-white rounded-2xl shadow-lg border border-gray-100">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                    <Mail className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">E-mail</h3>
                    <p className="text-gray-600">contato@saraivanet.com.br</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-6 bg-white rounded-2xl shadow-lg border border-gray-100">
                  <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">Localização</h3>
                    <p className="text-gray-600">Eliseu Martins - PI</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-6 bg-white rounded-2xl shadow-lg border border-gray-100">
                  <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                    <Clock className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">Atendimento</h3>
                    <p className="text-gray-600">24 horas por dia</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="slide-right">
              <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-3xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-6">Pronto para se conectar?</h3>
                <p className="mb-8">
                  Entre em contato agora e descubra como a SaraivaNet pode transformar sua experiência online!
                </p>
                
                <div className="space-y-4">
                  <TouchButton 
                    onClick={handleWhatsAppClick}
                    className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-4 rounded-xl transition-all duration-300 flex items-center justify-center gap-3"
                  >
                    <span className="text-xl">📱</span>
                    WhatsApp: (89) 99439-5789
                  </TouchButton>
                  
                  <TouchButton 
                    onClick={handlePhoneClick}
                    className="w-full bg-white/20 hover:bg-white/30 backdrop-blur-md text-white font-bold py-4 rounded-xl transition-all duration-300 flex items-center justify-center gap-3"
                  >
                    <Phone className="w-5 h-5" />
                    Ligar Agora
                  </TouchButton>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <img src={saraivaLogo} alt="SaraivaNet Logo" className="w-12 h-12" />
                <span className="text-2xl font-bold">SaraivaNet</span>
              </div>
              <p className="text-gray-400 mb-6 max-w-md">
                Conectando famílias em Eliseu Martins com internet de qualidade e entretenimento gratuito há mais de 5 anos.
              </p>
              <div className="flex gap-4">
                <TouchButton 
                  onClick={handleWhatsAppClick}
                  className="bg-green-600 hover:bg-green-700 p-3 rounded-lg transition-colors"
                >
                  📱
                </TouchButton>
                <TouchButton 
                  onClick={handlePhoneClick}
                  className="bg-blue-600 hover:bg-blue-700 p-3 rounded-lg transition-colors"
                >
                  <Phone className="w-5 h-5" />
                </TouchButton>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-bold mb-4">Serviços</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Internet Fibra Óptica</li>
                <li>SaraivaTV</li>
                <li>Suporte 24h</li>
                <li>Instalação Gratuita</li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-bold mb-4">Contato</h4>
              <ul className="space-y-2 text-gray-400">
                <li>(89) 99439-5789</li>
                <li>contato@saraivanet.com.br</li>
                <li>Eliseu Martins - PI</li>
                <li>Atendimento 24h</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 mt-8 text-center">
            <p className="text-gray-400">
              &copy; 2024 SaraivaNet. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;