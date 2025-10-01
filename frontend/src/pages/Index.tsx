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
import saraivaLogo from "@/assets/saraiva-logo.png";
import saraivaSymbol from "@/assets/saraiva-symbol.png";

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
    <div className="min-h-screen relative overflow-hidden" style={{background: 'linear-gradient(135deg, #FF6600 0%, #FF4500 25%, #FF3300 50%, #FF1100 75%, #CC0000 100%)'}}>
      {/* Padrões de fundo removidos para manter o gradiente limpo */}
      {/* Floating Components */}
      <ChatBot />
      
      {/* Header - Modern Glassmorphism Design */}
      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-gradient-to-r from-orange-600/95 via-red-600/95 to-orange-700/95 border-b border-white/10 shadow-2xl">
        {/* Mobile Layout */}
        <div className="md:hidden">
          <div className="flex items-center justify-between px-4 py-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center shadow-lg">
                <Wifi className="w-5 h-5 text-white" />
              </div>
              <div className="text-white">
                <h1 className="text-lg font-black tracking-tight">SaraivaNet</h1>
                <div className="text-xs text-orange-100 font-semibold flex items-center">
                  <MapPin className="w-2.5 h-2.5 mr-1" />
                  <span>Eliseu Martins - PI</span>
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <MobileNavigation />
            </div>
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden md:flex items-center justify-between px-8 py-4">
          <div className="flex items-center space-x-4">
            <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center shadow-xl hover:scale-105 transition-transform duration-300">
              <Wifi className="w-7 h-7 text-white" />
            </div>
            <div className="text-white">
              <h1 className="text-3xl font-black tracking-tight bg-gradient-to-r from-white to-orange-100 bg-clip-text text-transparent">SaraivaNet</h1>
              <div className="text-sm text-orange-100 font-semibold flex items-center">
                <MapPin className="w-3.5 h-3.5 mr-1.5" />
                Eliseu Martins - PI
              </div>
            </div>
          </div>
          
          <nav className="flex items-center space-x-2">
            <TouchButton onClick={() => handleSmoothScroll('inicio')} className="text-white hover:bg-white/10 px-4 py-2 rounded-lg transition-all duration-300 font-semibold">Início</TouchButton>
            <TouchButton onClick={() => handleSmoothScroll('planos')} className="text-white hover:bg-white/10 px-4 py-2 rounded-lg transition-all duration-300 font-semibold">Planos</TouchButton>
            <TouchButton onClick={() => handleSmoothScroll('cobertura')} className="text-white hover:bg-white/10 px-4 py-2 rounded-lg transition-all duration-300 font-semibold">Cobertura</TouchButton>
            <TouchButton onClick={() => handleSmoothScroll('sobre')} className="text-white hover:bg-white/10 px-4 py-2 rounded-lg transition-all duration-300 font-semibold">Sobre</TouchButton>
            <TouchButton onClick={() => handleSmoothScroll('contato')} className="text-white hover:bg-white/10 px-4 py-2 rounded-lg transition-all duration-300 font-semibold">Contato</TouchButton>
            <Link to="/chips"><TouchButton className="bg-white/20 hover:bg-white/30 text-white px-5 py-2 rounded-lg transition-all duration-300 font-bold backdrop-blur-sm border border-white/20">Chips</TouchButton></Link>
          </nav>

          <div className="flex items-center space-x-4">
            <ThemeToggle />
          </div>
        </div>
      </header>

      {/* Hero Section - Fundo Ultra Premium */}
      <section id="inicio" className="hero-section relative overflow-hidden min-h-screen flex items-center">
        
        {/* Padrões geométricos modernos e elegantes */}
        <div className="absolute inset-0 opacity-20">
          {/* Grid pattern */}
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '80px 80px'
          }}></div>
          
          {/* Diagonal lines */}
          <div className="absolute inset-0" style={{
            backgroundImage: `repeating-linear-gradient(
              45deg,
              transparent,
              transparent 40px,
              rgba(255, 255, 255, 0.05) 40px,
              rgba(255, 255, 255, 0.05) 80px
            )`
          }}></div>
          
          {/* Dots pattern */}
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle, rgba(255, 255, 255, 0.15) 2px, transparent 2px)`,
            backgroundSize: '50px 50px'
          }}></div>
        </div>
        
        {/* Mesh Gradient Overlay - Esferas flutuantes */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-yellow-400/30 to-orange-500/20 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-red-500/25 to-pink-500/15 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s', animationDuration: '8s' }}></div>
          <div className="absolute top-1/2 left-1/2 w-[400px] h-[400px] bg-gradient-to-bl from-purple-500/20 to-blue-500/15 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s', animationDuration: '10s' }}></div>
        </div>
        
        {/* Vignette effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/20 via-transparent to-black/30"></div>
        
        {/* Mobile Version */}
        <div className="lg:hidden w-full px-6 py-20">
          <div className="relative z-10 text-center space-y-10">
            <AnimatedSection animation="fade-up">
              {/* Title tamanho ajustado no mobile */}
              <div className="space-y-8">
                <h1 className="font-black text-white leading-tight" style={{
                  fontSize: 'clamp(40px, 11vw, 64px)',
                  lineHeight: '1.1',
                  fontWeight: '900',
                  textShadow: '4px 4px 20px rgba(0,0,0,0.7), 0 0 40px rgba(255,102,0,0.3)',
                  letterSpacing: '-0.02em'
                }}>
                  Internet +<br/>SaraivaTV
                </h1>
                
                {/* Subtitle maior */}
                <p className="text-white/95 font-semibold max-w-[56ch] mx-auto" style={{
                  fontSize: 'clamp(18px, 5vw, 24px)',
                  textShadow: '2px 2px 8px rgba(0,0,0,0.5)'
                }}>
                  🚀 Internet ultrarrápida + App gratuito
                </p>
              </div>

              {/* Carousel maior no mobile */}
              <div className="w-full max-w-lg mx-auto mt-10" style={{aspectRatio: '14/9'}}>
                <div className="w-full h-full rounded-2xl overflow-hidden shadow-xl border-2 border-white/20">
                  <HeroCarousel />
                </div>
              </div>

              {/* Benefits Cards modernos com hover effects */}
              <div className="grid grid-cols-2 gap-4 max-w-md mx-auto mt-16">
                <div className="group bg-gradient-to-br from-orange-500 to-red-500 rounded-3xl p-6 text-center shadow-2xl border-2 border-white/20 hover:scale-105 transition-all duration-300 hover:shadow-orange-500/50 backdrop-blur-sm">
                  <div className="w-12 h-12 bg-white/30 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-3 group-hover:rotate-12 transition-transform duration-300">
                    <Wifi className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-white font-black text-sm">Internet<br/>Rápida</div>
                </div>
                <div className="group bg-gradient-to-br from-blue-500 to-purple-600 rounded-3xl p-6 text-center shadow-2xl border-2 border-white/20 hover:scale-105 transition-all duration-300 hover:shadow-blue-500/50 backdrop-blur-sm">
                  <div className="w-12 h-12 bg-white/30 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-3 group-hover:rotate-12 transition-transform duration-300">
                    <Tv className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-white font-black text-sm">Aplicativo de<br/>TV</div>
                </div>
                <div className="group bg-gradient-to-br from-green-500 to-emerald-500 rounded-3xl p-6 text-center shadow-2xl border-2 border-white/20 hover:scale-105 transition-all duration-300 hover:shadow-green-500/50 backdrop-blur-sm">
                  <div className="w-12 h-12 bg-white/30 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-3 group-hover:rotate-12 transition-transform duration-300">
                    <Music className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-white font-black text-sm">Rádios<br/>24h</div>
                </div>
                <div className="group bg-gradient-to-br from-purple-500 to-pink-500 rounded-3xl p-6 text-center shadow-2xl border-2 border-white/20 hover:scale-105 transition-all duration-300 hover:shadow-purple-500/50 backdrop-blur-sm">
                  <div className="w-12 h-12 bg-white/30 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-3 group-hover:rotate-12 transition-transform duration-300">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-white font-black text-sm">Suporte<br/>VIP</div>
                </div>
              </div>

              {/* Stats Mobile - embaixo dos cards com design premium */}
              <div className="grid grid-cols-2 gap-4 max-w-md mx-auto mt-8">
                <div className="group bg-gradient-to-br from-red-900/80 to-red-800/80 backdrop-blur-xl rounded-2xl p-5 text-center shadow-2xl border border-white/10 hover:scale-105 transition-all duration-300">
                  <div className="text-white font-black text-3xl mb-2 bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">964+</div>
                  <div className="text-red-100 font-bold text-xs uppercase tracking-wider">Clientes</div>
                </div>
                <div className="group bg-gradient-to-br from-red-900/80 to-red-800/80 backdrop-blur-xl rounded-2xl p-5 text-center shadow-2xl border border-white/10 hover:scale-105 transition-all duration-300">
                  <div className="text-white font-black text-3xl mb-2 bg-gradient-to-r from-green-300 to-emerald-300 bg-clip-text text-transparent">95%</div>
                  <div className="text-red-100 font-bold text-xs uppercase tracking-wider">Uptime</div>
                </div>
                <div className="group bg-gradient-to-br from-red-900/80 to-red-800/80 backdrop-blur-xl rounded-2xl p-5 text-center shadow-2xl border border-white/10 hover:scale-105 transition-all duration-300">
                  <div className="text-white font-black text-3xl mb-2 bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text text-transparent">19+</div>
                  <div className="text-red-100 font-bold text-xs uppercase tracking-wider">Canais</div>
                </div>
                <div className="group bg-gradient-to-br from-red-900/80 to-red-800/80 backdrop-blur-xl rounded-2xl p-5 text-center shadow-2xl border border-white/10 hover:scale-105 transition-all duration-300">
                  <div className="text-white font-black text-3xl mb-2 bg-gradient-to-r from-pink-300 to-rose-300 bg-clip-text text-transparent">23h</div>
                  <div className="text-red-100 font-bold text-xs uppercase tracking-wider">Online</div>
                </div>
              </div>

              {/* CTA Button moderno com animação */}
              <div className="mt-12">
                <TouchButton 
                  onClick={handleWhatsAppClick}
                  className="group relative bg-gradient-to-r from-yellow-400 via-orange-500 to-yellow-400 hover:from-yellow-300 hover:via-orange-400 hover:to-yellow-300 text-gray-900 font-black px-12 rounded-full shadow-2xl hover:shadow-orange-500/50 hover:scale-110 transition-all duration-300 inline-flex items-center border-2 border-white/40 backdrop-blur-sm animate-pulse"
                  style={{height: '60px', fontSize: '20px'}}
                >
                  <span className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer"></span>
                  <span className="relative flex items-center">
                    🚀 Contratar Agora
                  </span>
                </TouchButton>
              </div>
            </AnimatedSection>
          </div>
        </div>

        {/* Desktop Version - Layout igual à imagem */}
        <div className="hidden lg:block w-full">
          <div className="container mx-auto px-8 py-16">
            <div className="flex items-center justify-between gap-12">
              
              {/* Left Column - Textos e CTA */}
              <div className="flex-1 max-w-xl">
                <AnimatedSection animation="fade-up">
                  {/* Título Principal MUITO maior */}
                  <h1 className="text-white font-black leading-tight mb-8" style={{
                    fontSize: 'clamp(4rem, 8vw, 8rem)',
                    lineHeight: '0.9',
                    fontWeight: '900',
                    textShadow: '5px 5px 25px rgba(0,0,0,0.8), 0 0 50px rgba(255,102,0,0.4)'
                  }}>
                    Internet +<br/>SaraivaTV
                  </h1>
                  
                  {/* Subtítulo */}
                  <p className="text-white/90 text-xl mb-8 flex items-center" style={{
                    textShadow: '2px 2px 8px rgba(0,0,0,0.5)'
                  }}>
                    🚀 Internet ultrarrápida + App gratuito
                  </p>

                  {/* Botão CTA moderno */}
                  <TouchButton 
                    onClick={handleWhatsAppClick}
                    className="group relative bg-gradient-to-r from-yellow-400 via-orange-500 to-yellow-400 hover:from-yellow-300 hover:via-orange-400 hover:to-yellow-300 text-gray-900 font-black px-10 py-5 rounded-full shadow-2xl hover:shadow-orange-500/50 hover:scale-110 transition-all duration-300 text-xl border-2 border-white/40 backdrop-blur-sm"
                  >
                    <span className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer"></span>
                    <span className="relative">🚀 Contratar Agora</span>
                  </TouchButton>
                </AnimatedSection>
              </div>

              {/* Right Column - Carrossel */}
              <div className="flex-1 max-w-2xl">
                <AnimatedSection animation="slide-right">
                  <div 
                    className="w-full rounded-2xl overflow-hidden shadow-2xl" 
                    style={{
                      aspectRatio: '16/10'
                    }}
                  >
                    <HeroCarousel />
                  </div>
                </AnimatedSection>
              </div>
            </div>

            {/* Benefits Cards - Design Premium */}
            <div className="mt-16">
              <AnimatedSection animation="fade-up">
                <div className="grid grid-cols-4 gap-6 max-w-5xl mx-auto">
                  <div className="group bg-gradient-to-br from-orange-500 to-red-500 rounded-3xl p-8 text-center shadow-2xl border-2 border-white/20 hover:scale-105 transition-all duration-300 hover:shadow-orange-500/50 backdrop-blur-sm">
                    <div className="w-16 h-16 bg-white/30 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:rotate-12 transition-transform duration-300 shadow-lg">
                      <Wifi className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-white font-black text-base">Internet<br/>Rápida</div>
                  </div>
                  <div className="group bg-gradient-to-br from-blue-500 to-purple-600 rounded-3xl p-8 text-center shadow-2xl border-2 border-white/20 hover:scale-105 transition-all duration-300 hover:shadow-blue-500/50 backdrop-blur-sm">
                    <div className="w-16 h-16 bg-white/30 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:rotate-12 transition-transform duration-300 shadow-lg">
                      <Tv className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-white font-black text-base">Aplicativo de<br/>TV</div>
                  </div>
                  <div className="group bg-gradient-to-br from-green-500 to-emerald-500 rounded-3xl p-8 text-center shadow-2xl border-2 border-white/20 hover:scale-105 transition-all duration-300 hover:shadow-green-500/50 backdrop-blur-sm">
                    <div className="w-16 h-16 bg-white/30 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:rotate-12 transition-transform duration-300 shadow-lg">
                      <Music className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-white font-black text-base">Rádios<br/>24h</div>
                  </div>
                  <div className="group bg-gradient-to-br from-purple-500 to-pink-500 rounded-3xl p-8 text-center shadow-2xl border-2 border-white/20 hover:scale-105 transition-all duration-300 hover:shadow-purple-500/50 backdrop-blur-sm">
                    <div className="w-16 h-16 bg-white/30 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:rotate-12 transition-transform duration-300 shadow-lg">
                      <Shield className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-white font-black text-base">Suporte<br/>VIP</div>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>

        {/* Stats Bar - Design Premium */}
        <div className="absolute bottom-0 left-0 right-0 pb-8 hidden lg:block">
          <div className="container mx-auto px-8">
            <div className="grid grid-cols-4 gap-6 max-w-5xl mx-auto">
              <div className="group bg-gradient-to-br from-red-900/80 to-red-800/80 backdrop-blur-xl rounded-3xl p-8 text-center shadow-2xl border border-white/20 hover:scale-105 transition-all duration-300">
                <div className="text-white font-black text-4xl mb-2 bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">964+</div>
                <div className="text-red-100 font-bold text-sm uppercase tracking-wider">Clientes</div>
              </div>
              <div className="group bg-gradient-to-br from-red-900/80 to-red-800/80 backdrop-blur-xl rounded-3xl p-8 text-center shadow-2xl border border-white/20 hover:scale-105 transition-all duration-300">
                <div className="text-white font-black text-4xl mb-2 bg-gradient-to-r from-green-300 to-emerald-300 bg-clip-text text-transparent">95%</div>
                <div className="text-red-100 font-bold text-sm uppercase tracking-wider">Uptime</div>
              </div>
              <div className="group bg-gradient-to-br from-red-900/80 to-red-800/80 backdrop-blur-xl rounded-3xl p-8 text-center shadow-2xl border border-white/20 hover:scale-105 transition-all duration-300">
                <div className="text-white font-black text-4xl mb-2 bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text text-transparent">19+</div>
                <div className="text-red-100 font-bold text-sm uppercase tracking-wider">Canais</div>
              </div>
              <div className="group bg-gradient-to-br from-red-900/80 to-red-800/80 backdrop-blur-xl rounded-3xl p-8 text-center shadow-2xl border border-white/20 hover:scale-105 transition-all duration-300">
                <div className="text-white font-black text-4xl mb-2 bg-gradient-to-r from-pink-300 to-rose-300 bg-clip-text text-transparent">23h</div>
                <div className="text-red-100 font-bold text-sm uppercase tracking-wider">Online</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Plans Section - Mobile Design com fundo melhorado */}
      <section id="planos" className="relative overflow-hidden lg:hidden" style={{background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 25%, #0f3460 50%, #0e4b82 75%, #0d5aa7 100%)'}}>
        {/* Padrões de fundo elegantes */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              radial-gradient(circle at 20% 30%, rgba(255, 255, 255, 0.15) 1px, transparent 1px),
              radial-gradient(circle at 80% 70%, rgba(255, 255, 255, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px, 80px 80px'
          }}></div>
        </div>
        
        {/* Gradiente suave overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-900/10 to-transparent"></div>
        
        <div className="px-4 py-8 relative z-10">
          {/* Mobile Title Section */}
          <div className="text-center mb-8">
            <h2 className="text-white text-3xl font-bold mb-4" style={{textShadow: '2px 2px 8px rgba(0,0,0,0.8)'}}>
              Tudo que você precisa:
            </h2>
          </div>

          {/* Mobile Features Cards - Layout igual à primeira imagem */}
          <div className="space-y-4 mb-8">
            <div className="bg-slate-700/80 backdrop-blur-sm rounded-2xl p-6 border border-slate-600/50">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <Wifi className="w-6 h-6 text-white" />
                </div>
                <div className="text-white">
                  <div className="text-xl font-bold">Internet 300MB</div>
                  <div className="text-lg">fibra óptica ultrarrápida</div>
                </div>
              </div>
            </div>

            <div className="bg-slate-700/80 backdrop-blur-sm rounded-2xl p-6 border border-slate-600/50">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <Tv className="w-6 h-6 text-white" />
                </div>
                <div className="text-white">
                  <div className="text-xl font-bold">App SaraivaTV Premium</div>
                  <div className="text-lg">totalmente grátis</div>
                </div>
              </div>
            </div>

            <div className="bg-slate-700/80 backdrop-blur-sm rounded-2xl p-6 border border-slate-600/50">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <Smartphone className="w-6 h-6 text-white" />
                </div>
                <div className="text-white">
                  <div className="text-xl font-bold">Assista TV</div>
                  <div className="text-lg">direto no seu celular</div>
                </div>
              </div>
            </div>

            <div className="bg-slate-700/80 backdrop-blur-sm rounded-2xl p-6 border border-slate-600/50">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <Music className="w-6 h-6 text-white" />
                </div>
                <div className="text-white">
                  <div className="text-xl font-bold">Rádios</div>
                  <div className="text-lg">nacionais e locais incluídas</div>
                </div>
              </div>
            </div>

            <div className="bg-slate-700/80 backdrop-blur-sm rounded-2xl p-6 border border-slate-600/50">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <div className="text-white">
                  <div className="text-xl font-bold">Suporte técnico</div>
                  <div className="text-lg">24h todos os dias</div>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Plan Header - igual à segunda imagem */}
          <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-t-2xl p-6 text-white text-center">
            <h3 className="text-2xl font-black mb-2" style={{textShadow: '2px 2px 8px rgba(0,0,0,0.5)'}}>
              Plano Completo
            </h3>
            <div className="text-4xl font-black mb-2" style={{textShadow: '2px 2px 8px rgba(0,0,0,0.5)'}}>
              300MB
            </div>
            <div className="text-lg font-medium">
              Fibra Óptica + SaraivaTV Grátis
            </div>
          </div>

          {/* Mobile Pricing Card - igual à segunda imagem */}
          <div className="bg-slate-700/90 backdrop-blur-sm rounded-b-2xl p-6 border-x border-b border-slate-600/50 mb-4">
            <div className="text-center">
              <div className="text-slate-400 line-through text-lg mb-2">De R$ 169,90</div>
              <div className="text-orange-400 font-black text-5xl mb-1">
                R$ 129<span className="text-3xl">,90</span>
              </div>
              <div className="text-slate-300 text-lg">por mês</div>
            </div>
          </div>

          {/* Mobile Economy Card - igual à segunda imagem */}
          <div className="bg-green-600/90 backdrop-blur-sm rounded-2xl p-6 mb-6">
            <div className="text-center text-white">
              <div className="text-lg font-bold mb-2">💰 Economia de R$ 120 nos primeiros 3 meses!</div>
              <div className="text-base opacity-90">Promoção exclusiva para novos clientes</div>
            </div>
          </div>

          {/* Mobile CTA Button */}
          <div className="text-center">
            <TouchButton 
              onClick={handleWhatsAppClick}
              className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-400 hover:to-red-400 text-white font-black py-4 px-8 rounded-2xl shadow-lg text-lg"
            >
              🚀 Contratar Agora
            </TouchButton>
          </div>
        </div>
      </section>

      {/* Plans Section - Desktop Version com fundo premium */}
      <section id="planos-desktop" className="relative overflow-hidden pt-5 pb-20 px-4 hidden lg:block" style={{background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 25%, #0f3460 50%, #0e4b82 75%, #0d5aa7 100%)'}}>
        
        {/* Padrões geométricos elegantes */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(rgba(255, 255, 255, 0.08) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255, 255, 255, 0.08) 1px, transparent 1px)
            `,
            backgroundSize: '100px 100px'
          }}></div>
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle, rgba(255, 255, 255, 0.12) 2px, transparent 2px)`,
            backgroundSize: '70px 70px'
          }}></div>
        </div>
        
        {/* Sophisticated Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/8 via-transparent to-blue-500/8"></div>
        
        {/* Elegant Floating Elements */}
        {!prefersReducedMotion && (
          <div className="absolute inset-0">
            <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-orange-400/20 to-yellow-400/15 rounded-full blur-3xl animate-float" style={{ animationDuration: '10s' }}></div>
            <div className="absolute bottom-20 left-20 w-[500px] h-[500px] bg-gradient-to-tr from-blue-400/18 to-cyan-400/12 rounded-full blur-3xl animate-float" style={{ animationDuration: '12s', animationDelay: '3s' }}></div>
            <div className="absolute top-1/3 right-1/3 w-64 h-64 bg-gradient-to-bl from-purple-400/15 to-pink-400/10 rounded-full blur-3xl animate-float" style={{ animationDuration: '8s', animationDelay: '6s' }}></div>
          </div>
        )}
        
        <div className="w-full px-6 relative z-10">
          <AnimatedSection animation="fade-up">
            <div className="text-center mb-16">
              {/* Simple Badge */}
              <div className="inline-flex items-center bg-orange-500/90 text-white px-6 py-3 rounded-full text-lg font-bold mb-8 border border-orange-400">
                <Award className="w-5 h-5 mr-3" />
                <span>Plano Exclusivo</span>
              </div>
              
              {/* Beautiful Title */}
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6" style={{textShadow: '3px 3px 12px rgba(0,0,0,0.8)'}}>
                Internet + SaraivaTV
              </h2>
              <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-3xl mx-auto leading-relaxed font-medium">
                O plano completo que vai transformar sua experiência digital
              </p>
              
              {/* Special Offer */}
              <div className="inline-flex items-center bg-green-500/90 text-white px-6 py-3 rounded-full font-bold text-lg">
                🎉 Oferta especial: 3 meses com desconto!
              </div>
            </div>
          </AnimatedSection>

          {/* Beautiful Plan Card */}
          <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl shadow-2xl overflow-hidden border border-orange-500/30 hover:border-orange-500/50 hover:scale-102 transform transition-all duration-500 group">
            
            {/* Plan Header */}
            <div className="bg-gradient-to-r from-orange-500 to-red-500 p-8 text-white text-center group-hover:from-orange-400 group-hover:to-red-400 transition-all duration-500">
              <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Wifi className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-3xl font-black mb-3" style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.5)' }}>Plano Completo</h3>
              <div className="text-5xl font-black mb-3" style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.5)' }}>300MB</div>
              <div className="text-xl opacity-95 font-medium">Fibra Óptica + SaraivaTV Grátis</div>
            </div>

            {/* Plan Content */}
            <div className="p-8 lg:p-10">
              <div className="grid lg:grid-cols-2 gap-10 items-center">
                
                {/* Pricing Section */}
                <div className="text-center lg:text-left space-y-6">
                  <div className="bg-slate-700/50 rounded-2xl p-6 border border-slate-600">
                    <div className="text-lg text-slate-400 line-through mb-2">De R$ 169,90</div>
                    <div className="text-5xl font-black text-orange-400 mb-2 group-hover:text-orange-300 transition-colors duration-300">
                      R$ 129<span className="text-3xl">,90</span>
                    </div>
                    <div className="text-lg text-slate-300">por mês</div>
                  </div>

                  <div className="bg-green-900/50 p-6 rounded-2xl border border-green-700">
                    <div className="text-green-300 font-bold mb-2 text-lg">💰 Economia de R$ 120 nos primeiros 3 meses!</div>
                    <div className="text-green-400 text-base">Promoção exclusiva para novos clientes</div>
                  </div>

                  <TouchButton 
                    onClick={handleWhatsAppClick} 
                    className="w-full lg:w-auto bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-400 hover:to-red-400 text-white font-black py-4 px-8 rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 text-lg"
                  >
                    🚀 Contratar Agora
                  </TouchButton>
                </div>

                {/* Features Section */}
                <div className="space-y-6">
                  <h4 className="text-2xl font-black text-white mb-6" style={{textShadow: '2px 2px 8px rgba(0,0,0,0.8)'}}>
                    Tudo que você precisa:
                  </h4>
                  
                  <div className="space-y-4">
                    {[
                      { icon: Wifi, text: "Internet 300MB fibra óptica ultrarrápida", color: "from-orange-500 to-red-500" },
                      { icon: Tv, text: "App SaraivaTV Premium totalmente grátis", color: "from-blue-500 to-purple-500" },
                      { icon: Smartphone, text: "Assista TV direto no seu celular", color: "from-green-500 to-emerald-500" },
                      { icon: Music, text: "Rádios nacionais e locais incluídas", color: "from-purple-500 to-pink-500" },
                      { icon: Shield, text: "Suporte técnico 24h todos os dias", color: "from-yellow-500 to-orange-500" },
                      { icon: Zap, text: "Velocidade garantida por contrato", color: "from-cyan-500 to-blue-500" },
                      { icon: CheckCircle, text: "Instalação profissional (taxa única R$ 149,90)", color: "from-emerald-500 to-green-500" },
                      { icon: Heart, text: "Contrato de 12 meses", color: "from-pink-500 to-red-500" }
                    ].map((feature, index) => (
                      <div key={index} className="flex items-center space-x-4 p-4 bg-slate-700/30 rounded-xl border border-slate-600/50 hover:border-orange-400/50 hover:bg-slate-600/30 transition-all duration-300 hover:scale-105 transform">
                        <div className={`w-12 h-12 bg-gradient-to-br ${feature.color} rounded-full flex items-center justify-center flex-shrink-0 shadow-lg`}>
                          <feature.icon className="w-6 h-6 text-white" />
                        </div>
                        <span className="font-bold text-slate-100 text-lg">{feature.text}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <div className="bg-slate-800/80 backdrop-blur-sm rounded-3xl p-10 text-white shadow-xl border border-slate-700 hover:border-orange-500/30 transition-all duration-500 hover:scale-102">
              <h3 className="text-3xl font-black mb-6" style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.8)' }}>
                🔥 Não Perca Esta Oportunidade!
              </h3>
              <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto leading-relaxed">
                Conecte-se com a melhor internet de Eliseu Martins e ganhe o SaraivaTV de presente.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <TouchButton 
                onClick={handleWhatsAppClick} 
                className="bg-white text-orange-600 hover:bg-orange-50 px-8 py-4 font-black rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 text-lg"
              >
                💬 WhatsApp
              </TouchButton>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Coverage Area - Simplified */}
      <section id="cobertura" className="py-16 bg-gradient-to-br from-blue-600 via-purple-600 to-orange-500 text-white">
        <div className="w-full px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              🗺️ Nossa Área de Cobertura
            </h2>
            <p className="text-lg md:text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Levamos internet de fibra óptica de alta qualidade para toda a região sul do Piauí
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
            <div>
              <h3 className="text-2xl font-bold mb-6">🏙️ Cidades Atendidas</h3>
              <div className="space-y-4">
                {["Eliseu Martins", "Colônia do Gurguéia", "Manoel Emídio", "Canavieira", "Jerumenha"].map((city, index) => (
                  <div key={index} className="flex items-center space-x-4 p-4 bg-white/10 rounded-xl backdrop-blur-sm">
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                    <div className="font-semibold text-lg">{city}</div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <RealMap />
            </div>
          </div>

          <div className="text-center">
            <TouchButton 
              onClick={handleWhatsAppClick}
              className="inline-flex items-center space-x-3 bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              <span>💬</span>
              <span>Verificar Disponibilidade</span>
            </TouchButton>
          </div>
        </div>
      </section>

      {/* SaraivaTV Features Section - ULTRA PREMIUM */}
      <section className="py-16 px-4 relative overflow-hidden" style={{background: 'linear-gradient(135deg, #fff5f0 0%, #ffede0 30%, #ffe5d4 70%, #ffd4c4 100%)'}}>
        {/* Padrões sofisticados */}
        <div className="absolute inset-0 opacity-15">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(rgba(255, 140, 0, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255, 140, 0, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px'
          }}></div>
          <div className="absolute inset-0" style={{
            backgroundImage: `
              radial-gradient(circle at 20% 20%, rgba(255,165,0,0.3) 3px, transparent 3px),
              radial-gradient(circle at 80% 80%, rgba(255,100,0,0.25) 2px, transparent 2px)
            `,
            backgroundSize: '120px 120px, 90px 90px'
          }}></div>
          <div className="absolute inset-0" style={{
            backgroundImage: `repeating-linear-gradient(
              45deg,
              transparent,
              transparent 80px,
              rgba(255,140,0,0.08) 80px,
              rgba(255,140,0,0.08) 160px
            )`
          }}></div>
        </div>
        
        {/* Floating Elements suaves */}
        <div className="absolute top-20 right-20 w-80 h-80 bg-gradient-to-br from-orange-300/40 to-red-300/30 rounded-full blur-3xl animate-float" style={{ animationDuration: '12s' }}></div>
        <div className="absolute bottom-20 left-20 w-64 h-64 bg-gradient-to-tr from-purple-300/30 to-orange-300/35 rounded-full blur-3xl animate-float" style={{ animationDuration: '15s', animationDelay: '3s' }}></div>
        <div className="absolute top-1/2 right-1/3 w-56 h-56 bg-gradient-to-bl from-yellow-300/25 to-pink-300/20 rounded-full blur-3xl animate-float" style={{ animationDuration: '18s', animationDelay: '6s' }}></div>
        
        <div className="w-full px-6 max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center text-orange-600 text-sm font-bold mb-6">
              <Tv className="w-4 h-4 mr-2" />
              <span>App Exclusivo</span>
            </div>
            <h2 className="text-5xl font-black mb-6">
              <span className="text-gray-800">Conheça o </span>
              <span className="text-red-600">SaraivaTV</span>
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed font-medium">
              App gratuito que vem junto com sua internet. Assista TV direto no celular com qualidade HD!
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 mb-16">
            <Card className="text-center p-8 relative overflow-hidden touch-manipulation">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-orange-200/20 to-transparent animate-shimmer"></div>
              <div className="w-24 h-24 flex items-center justify-center mx-auto mb-6 relative z-10">
                <Tv className="w-12 h-12 text-orange-500" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4 relative z-10">Canais de TV</h3>
              <p className="text-gray-600 mb-6 relative z-10 font-medium">
                Assista os mesmos canais da sua TV direto no celular
              </p>
              <div className="space-y-2 relative z-10">
                <span className="text-orange-600 text-sm font-bold">TV Aberta</span>
                <span className="text-orange-600 text-sm font-bold ml-2">Canais Locais</span>
                <div className="mt-2">
                  <span className="text-orange-600 text-sm font-bold">Notícias</span>
                  <span className="text-orange-600 text-sm font-bold ml-2">Esportes</span>
                </div>
              </div>
            </Card>

            <Card className="text-center p-8 relative overflow-hidden touch-manipulation">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-green-200/20 to-transparent animate-shimmer"></div>
              <div className="w-24 h-24 flex items-center justify-center mx-auto mb-6 relative z-10">
                <Music className="w-12 h-12 text-green-500" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4 relative z-10">Rádios Online</h3>
              <p className="text-gray-600 mb-6 relative z-10 font-medium">
                Escute suas rádios favoritas onde estiver
              </p>
              <div className="space-y-2 relative z-10">
                <span className="text-green-600 text-sm font-bold">Rádios Locais</span>
                <span className="text-green-600 text-sm font-bold ml-2">Música</span>
                <div className="mt-2">
                  <span className="text-green-600 text-sm font-bold">Notícias</span>
                  <span className="text-green-600 text-sm font-bold ml-2">Esportes</span>
                </div>
              </div>
            </Card>

            <Card className="text-center p-8 relative overflow-hidden touch-manipulation">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-200/20 to-transparent animate-shimmer"></div>
              <div className="w-24 h-24 flex items-center justify-center mx-auto mb-6 relative z-10">
                <Smartphone className="w-12 h-12 text-blue-500" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4 relative z-10">No Seu Celular</h3>
              <p className="text-gray-600 mb-6 relative z-10 font-medium">
                App fácil de usar para Android e iOS
              </p>
              <div className="space-y-2 relative z-10">
                <span className="text-blue-600 text-sm font-bold">Android</span>
                <span className="text-blue-600 text-sm font-bold ml-2">iOS</span>
                <div className="mt-2">
                  <span className="text-blue-600 text-sm font-bold">Fácil de Usar</span>
                  <span className="text-blue-600 text-sm font-bold ml-2">Gratuito</span>
                </div>
              </div>
            </Card>

            <Card className="text-center p-8 relative overflow-hidden touch-manipulation">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-200/20 to-transparent animate-shimmer"></div>
              <div className="w-24 h-24 flex items-center justify-center mx-auto mb-6 relative z-10">
                <Zap className="w-12 h-12 text-purple-500" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4 relative z-10">Transmissão Ao Vivo</h3>
              <p className="text-gray-600 mb-6 relative z-10 font-medium">
                Tudo que passa na TV, passa no app em tempo real
              </p>
              <div className="space-y-2 relative z-10">
                <span className="text-purple-600 text-sm font-bold">Ao Vivo</span>
                <span className="text-purple-600 text-sm font-bold ml-2">Tempo Real</span>
                <div className="mt-2">
                  <span className="text-purple-600 text-sm font-bold">Sem Atraso</span>
                  <span className="text-purple-600 text-sm font-bold ml-2">Qualidade HD</span>
                </div>
              </div>
            </Card>
          </div>

          <div className="glass-premium rounded-3xl p-16 text-white relative overflow-hidden shadow-2xl" style={{background: 'linear-gradient(135deg, #ff6600 0%, #ff4400 50%, #cc3300 100%)'}}>
            <div className="absolute inset-0"></div>
            <div className="relative z-10 text-center">
              <h3 className="text-4xl font-bold mb-6 leading-tight" style={{
                textShadow: '3px 3px 12px rgba(0,0,0,0.8)'
              }}>
                Pronto para ter Internet + SaraivaTV?
              </h3>
              <p className="text-xl mb-10 opacity-95 max-w-3xl mx-auto leading-relaxed font-medium">
                Não perca tempo! Aproveite nossa oferta especial e ganhe o app SaraivaTV grátis.
              </p>
              <div className="flex justify-center">
              <TouchButton onClick={handleWhatsAppClick} className="bg-white text-orange-600 hover:bg-gray-100 px-10 py-5 text-xl font-bold rounded-2xl shadow-2xl transform hover:scale-110 transition-all duration-300 flex items-center gap-3">
                <span className="text-2xl">💬</span>
                Entrar em Contato
              </TouchButton>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section - Simplified */}
      <section className="py-16 px-4 bg-gradient-to-r from-orange-500 via-orange-600 to-purple-600">
        <div className="w-full px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Números Que Falam Por Si</h2>
          <p className="text-xl text-white/90 mb-12">
            Resultados conquistados com dedicação e compromisso
          </p>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="bg-white/15 backdrop-blur-sm rounded-3xl p-8 text-white shadow-xl">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <StatsCounter endValue={1000} label="Famílias Conectadas" suffix="+" />
            </div>

            <div className="bg-white/15 backdrop-blur-sm rounded-3xl p-8 text-white shadow-xl">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <StatsCounter endValue={5} label="Cidades Atendidas" />
            </div>

            <div className="bg-white/15 backdrop-blur-sm rounded-3xl p-8 text-white shadow-xl">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <StatsCounter endValue={99.9} label="Uptime Garantido" suffix="%" />
            </div>

            <div className="bg-white/15 backdrop-blur-sm rounded-3xl p-8 text-white shadow-xl">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <StatsCounter endValue={98} label="Satisfação" suffix="%" />
            </div>
          </div>
        </div>
      </section>

      {/* About Section - Fundo melhorado */}
      <section id="sobre" className="py-16 px-4 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
        {/* Padrões sutis de fundo */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              radial-gradient(circle at 25% 25%, rgba(0, 0, 0, 0.1) 2px, transparent 2px),
              radial-gradient(circle at 75% 75%, rgba(0, 0, 0, 0.08) 1px, transparent 1px)
            `,
            backgroundSize: '100px 100px, 70px 70px'
          }}></div>
        </div>
        
        {/* Elementos flutuantes suaves */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-10 left-10 w-72 h-72 bg-orange-200/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-64 h-64 bg-blue-200/15 rounded-full blur-3xl"></div>
        </div>
        
        <div className="w-full px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Sobre a SaraivaNet</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Há 22 anos conectando Eliseu Martins com o mundo digital
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-800 mb-6">Nossa História</h3>
              <p className="text-gray-600 mb-6 text-lg">
                Fundada em 2003, a SaraivaNet nasceu do sonho de democratizar o acesso à internet de qualidade em Eliseu Martins.
              </p>
              <p className="text-gray-600 mb-8 text-lg">
                Hoje somos referência em conectividade na região, sempre mantendo nosso compromisso com a excelência no atendimento.
              </p>

              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-6 bg-gradient-to-b from-orange-50 to-white rounded-2xl shadow-lg">
                  <div className="text-3xl font-bold text-orange-500">1000+</div>
                  <div className="text-sm text-gray-600 font-medium">Clientes Ativos</div>
                </div>
                <div className="text-center p-6 bg-gradient-to-b from-orange-50 to-white rounded-2xl shadow-lg">
                  <div className="text-3xl font-bold text-orange-500">22</div>
                  <div className="text-sm text-gray-600 font-medium">Anos de Experiência</div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-3xl p-10 shadow-xl">
              <h3 className="text-3xl font-bold text-gray-800 mb-6 text-center">
                Tecnologia que Conecta Corações
              </h3>
              <p className="text-gray-600 text-center mb-8 text-lg leading-relaxed">
                Na SaraivaNet, acreditamos que internet é conexão humana. É o avô vendo o neto pela primeira vez por videochamada, é o estudante acessando conhecimento.
              </p>
              <div className="text-center">
                <div className="inline-flex items-center text-orange-600 font-bold text-lg bg-white px-6 py-3 rounded-full shadow-lg">
                  <Heart className="w-6 h-6 mr-2" />
                  Feito com amor no Piauí desde 2003
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-4 bg-gray-50 dark:bg-gray-800">
        <div className="w-full px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-orange-100 text-orange-600 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Star className="w-4 h-4 mr-2" />
              Depoimentos
            </div>
            <h2 className="text-5xl font-bold text-gray-800 mb-4">O Que Nossos Clientes Dizem</h2>
            <p className="text-xl text-gray-600">
              Histórias reais de pessoas que confiam na SaraivaNet para se conectar com o mundo
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <TestimonialCard 
              name="Maria Santos" 
              age="68 anos" 
              location="Centro de Eliseu Martins" 
              initials="MS" 
              testimonial="Aqui em casa a internet funciona super bem, nunca tive problema de velocidade ou queda. Cumpre o que promete." 
            />
            
            <TestimonialCard 
              name="João Silva" 
              age="45 anos" 
              location="Bairro São José" 
              initials="JS" 
              testimonial="O atendimento foi rápido e eficiente, e a instalação foi no prazo. A conexão tá ótima até agora." 
            />
            
            <TestimonialCard 
              name="Ana Oliveira" 
              age="72 anos" 
              location="Vila Nova" 
              initials="AO" 
              testimonial="Trabalho com internet o dia todo e essa foi a melhor que já tive. Estável, rápida e sem surpresas na conta." 
            />
          </div>
        </div>
      </section>

      {/* Contact Section - Fundo Premium */}
      <section id="contato" className="relative py-20 px-4" style={{background: 'linear-gradient(135deg, #6B46C1 0%, #7C3AED 25%, #8B5CF6 50%, #A855F7 75%, #C084FC 100%)'}}>
        <div className="absolute inset-0">
          {/* Padrões geométricos elegantes */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute inset-0" style={{
              backgroundImage: `
                linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)
              `,
              backgroundSize: '80px 80px'
            }}></div>
            <div className="absolute inset-0" style={{
              backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.15) 2px, transparent 2px)`,
              backgroundSize: '60px 60px'
            }}></div>
          </div>
          
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-transparent to-purple-900/30"></div>
          
          {/* Esferas flutuantes */}
          <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-br from-pink-500/25 to-purple-600/20 rounded-full blur-3xl animate-float" style={{ animationDuration: '15s' }}></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-tr from-indigo-500/20 to-blue-500/15 rounded-full blur-3xl animate-float" style={{ animationDuration: '18s', animationDelay: '3s' }}></div>
        </div>

        <div className="w-full px-6 relative z-10">
          <AnimatedSection animation="fade-up">
            <div className="text-center mb-16">
              <div className="inline-flex items-center bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-full text-lg font-bold mb-8 border border-white/30">
                <Phone className="w-5 h-5 mr-3" />
                <span>Fale Conosco</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6" style={{textShadow: '3px 3px 12px rgba(0,0,0,0.8)'}}>
                Entre em Contato
              </h2>
              <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed font-medium">
                Estamos aqui para ajudar! Entre em contato conosco e descubra como podemos conectar você ao mundo digital.
              </p>
            </div>
          </AnimatedSection>

          {/* Contact Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {/* Telefone */}
            <TouchButton 
              onClick={handlePhoneClick}
              className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 transform hover:scale-105 cursor-pointer text-left"
            >
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center shadow-xl">
                  <Phone className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-1">Telefone</h3>
                  <p className="text-white/90 text-lg font-semibold">(89) 99439-5789</p>
                  <p className="text-sm text-white/70">Toque para ligar</p>
                </div>
              </div>
            </TouchButton>

            {/* Endereço */}
            <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 transform hover:scale-105">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center shadow-xl">
                  <MapPin className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-1">Endereço</h3>
                  <p className="text-white/90 text-lg font-semibold">Rua Fernando Silva, Centro</p>
                  <p className="text-sm text-white/70">Eliseu Martins - PI</p>
                </div>
              </div>
            </div>

            {/* Horário */}
            <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 transform hover:scale-105">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center shadow-xl">
                  <Clock className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-1">Horário</h3>
                  <p className="text-white/90 text-lg font-semibold">Segunda a Sábado</p>
                  <p className="text-sm text-white/70">8h às 18h</p>
                </div>
              </div>
            </div>
          </div>

          {/* WhatsApp CTA Card */}
          <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-12 border border-white/20 text-center">
            <div className="mb-6">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-orange-400 to-pink-500 rounded-2xl shadow-xl mb-4">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-white mb-4" style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.8)' }}>
                🚀 Pronto para se conectar?
              </h3>
              <p className="text-white/90 mb-8 text-xl max-w-2xl mx-auto">
                Entre em contato agora e ganhe o SaraivaTV grátis!
              </p>
            </div>
            <TouchButton 
              onClick={handleWhatsAppClick} 
              className="bg-white text-purple-600 hover:bg-gray-100 px-12 py-4 text-xl font-bold rounded-2xl shadow-2xl transform hover:scale-110 transition-all duration-300 inline-flex items-center"
            >
              <Phone className="w-6 h-6 mr-3" />
              💬 Falar no WhatsApp
            </TouchButton>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-b from-gray-800 to-gray-900 dark:from-gray-900 dark:to-black text-white py-12 sm:py-16 px-4 sm:px-6">
        <div className="w-full px-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-8 md:space-y-0">
            <div className="flex-1 max-w-2xl">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center shadow-lg">
                  <Wifi className="w-6 h-6 text-white" />
                </div>
                <span className="text-3xl font-bold bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">SaraivaNet</span>
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed text-lg">
                Conectando Eliseu Martins com o mundo há 22 anos. Internet de qualidade, 
                suporte especializado e compromisso com nossa comunidade.
              </p>
              <div className="flex items-center text-orange-400 bg-orange-900/20 px-4 py-2 rounded-full">
                <Heart className="w-5 h-5 mr-2" />
                <span className="font-medium">Feito com amor no Piauí desde 2003</span>
              </div>
            </div>

            <div className="flex-shrink-0">
              <h4 className="text-2xl font-bold mb-6 text-orange-400">Contato</h4>
              <ul className="space-y-4">
                <li className="flex items-center space-x-3">
                  <TouchButton 
                    onClick={handlePhoneClick}
                    className="flex items-center space-x-3 text-lg hover:text-orange-400 transition-colors text-left"
                  >
                    <Phone className="w-5 h-5 text-orange-400" />
                    <span>(89) 99439-5789</span>
                  </TouchButton>
                </li>
                <li className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-orange-400" />
                  <span className="text-lg">Rua Fernando Silva, Centro, Eliseu Martins - PI</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-12 pt-8 text-center">
            <p className="text-gray-400 text-lg">
              © 2025 SaraivaNet. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
