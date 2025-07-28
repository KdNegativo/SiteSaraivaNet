import { Phone, Mail, MapPin, Clock, Wifi, Tv, Music, Headphones, Smartphone, Zap, Users, Heart, Star, Shield, Award, CheckCircle, Moon, Sun, Rocket } from "lucide-react";
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

import ResponsiveImage from "@/components/ResponsiveImage";
import { useParallax } from "@/hooks/useParallax";
import { useReducedMotion } from "@/hooks/useReducedMotion";

const Index = () => {
  const parallaxOffset = useParallax(0.5);
  const prefersReducedMotion = useReducedMotion();
  
  const handleSmoothScroll = (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const headerHeight = 80; // Altura do header
      const elementPosition = targetElement.offsetTop - headerHeight;
      
      window.scrollTo({
        top: elementPosition,
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

  return (
    <div className="min-h-screen relative overflow-hidden" style={{background: 'linear-gradient(135deg, #fff9f5 0%, #ffeee0 25%, #ffe5d0 50%, #ffddc0 75%, #ffd5b0 100%)'}}>
      {/* Elegant Background Pattern */}
      <div className="absolute inset-0" style={{
        backgroundImage: `
          radial-gradient(circle at 20% 20%, rgba(255, 102, 0, 0.05) 0%, transparent 50%),
          radial-gradient(circle at 80% 80%, rgba(255, 165, 0, 0.03) 0%, transparent 50%),
          radial-gradient(circle at 40% 60%, rgba(255, 140, 0, 0.02) 0%, transparent 50%)
        `,
        backgroundSize: '800px 800px, 600px 600px, 400px 400px'
      }}></div>
      {/* Floating Components */}
      <ChatBot />
      
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b border-orange-400/30" style={{background: 'linear-gradient(135deg, rgba(255, 102, 0, 0.95) 0%, rgba(255, 87, 34, 0.95) 50%, rgba(230, 81, 0, 0.95) 100%)'}}>
        {/* Elegant header overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/10 via-transparent to-black/10"></div>
        
        <div className="relative px-4 py-4">
          {/* Mobile Layout */}
          <div className="md:hidden">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-white to-orange-100 rounded-2xl flex items-center justify-center shadow-2xl border-2 border-white/50">
                  <Wifi className="w-5 h-5 text-orange-600" />
                </div>
                <div>
                  <span className="text-xl font-black text-white font-playfair" style={{textShadow: '2px 2px 8px rgba(0,0,0,0.8)', letterSpacing: '0.5px'}}>SaraivaNet</span>
                  <div className="text-xs text-orange-100 font-semibold flex items-center">
                    <MapPin className="w-3 h-3 mr-1" />
                    <span className="bg-gradient-to-r from-white/90 to-white/70 bg-clip-text text-transparent font-bold">Eliseu Martins - PI</span>
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
              <div className="w-12 h-12 bg-gradient-to-br from-white to-orange-100 rounded-2xl flex items-center justify-center shadow-2xl border-2 border-white/50">
                <Wifi className="w-6 h-6 text-orange-600" />
              </div>
              <div>
                <span className="text-2xl font-black text-white font-playfair" style={{textShadow: '3px 3px 12px rgba(0,0,0,0.8)', letterSpacing: '1px'}}>SaraivaNet</span>
                <div className="text-sm text-orange-100 font-semibold flex items-center">
                  <MapPin className="w-4 h-4 mr-1" />
                  <span className="bg-gradient-to-r from-white/90 to-white/70 bg-clip-text text-transparent">Eliseu Martins - PI</span>
                </div>
              </div>
            </div>
            
            <nav className="flex items-center space-x-2">
              <button onClick={e => handleSmoothScroll(e, 'inicio')} className="relative px-6 py-3 text-white hover:text-orange-200 transition-all duration-300 font-semibold group rounded-full">
                <span className="relative z-10">Início</span>
                <div className="absolute inset-0 bg-white/10 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300"></div>
              </button>
              <button onClick={e => handleSmoothScroll(e, 'planos')} className="relative px-6 py-3 text-white hover:text-orange-200 transition-all duration-300 font-semibold group rounded-full">
                <span className="relative z-10">Planos</span>
                <div className="absolute inset-0 bg-white/10 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300"></div>
              </button>
              <button onClick={e => handleSmoothScroll(e, 'cobertura')} className="relative px-6 py-3 text-white hover:text-orange-200 transition-all duration-300 font-semibold group rounded-full">
                <span className="relative z-10">Cobertura</span>
                <div className="absolute inset-0 bg-white/10 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300"></div>
              </button>
              <button onClick={e => handleSmoothScroll(e, 'sobre')} className="relative px-6 py-3 text-white hover:text-orange-200 transition-all duration-300 font-semibold group rounded-full">
                <span className="relative z-10">Sobre</span>
                <div className="absolute inset-0 bg-white/10 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300"></div>
              </button>
              <button onClick={e => handleSmoothScroll(e, 'contato')} className="relative px-6 py-3 text-white hover:text-orange-200 transition-all duration-300 font-semibold group rounded-full">
                <span className="relative z-10">Contato</span>
                <div className="absolute inset-0 bg-white/10 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300"></div>
              </button>
            </nav>

            <div className="flex items-center space-x-4">
              {/* Espaço para futuros elementos */}
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section - Clean & Modern */}
      <section id="inicio" className="relative overflow-hidden min-h-screen flex items-center pt-20 gradient-hero">
        
        {/* Simplified Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/40"></div>
        <div className="absolute inset-0 opacity-30" style={{
          backgroundImage: `radial-gradient(circle at 30% 30%, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}></div>
        
        {/* Minimal Floating Elements */}
        {!prefersReducedMotion && (
          <div className="absolute inset-0">
            <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-white/10 rounded-full blur-3xl animate-float" style={{ animationDuration: '8s' }}></div>
            <div className="absolute bottom-1/4 left-1/4 w-48 h-48 bg-white/5 rounded-full blur-3xl animate-float" style={{ animationDuration: '12s', animationDelay: '4s' }}></div>
          </div>
        )}
        
        {/* Main Content */}
        <div className="relative z-10 w-full px-6 py-12">
          <div className="max-w-6xl mx-auto">
            
            {/* Mobile Version - Simplified */}
            <div className="md:hidden">
              <AnimatedSection animation="fade-up">
                <div className="text-center space-y-8">
                  {/* Clean Badge */}
                  <div className="inline-flex items-center bg-white/20 backdrop-blur-md text-white px-5 py-3 rounded-full font-bold text-sm border border-white/30">
                    <Star className="w-4 h-4 mr-2 fill-current" />
                    <span>Internet + TV Grátis</span>
                  </div>
                  
                  {/* Clean Title */}
                  <h1 className="text-4xl font-black leading-tight text-white font-playfair">
                    <span className="block mb-2">Internet Fibra</span>
                    <span className="block gradient-text-luxury">+ SaraivaTV</span>
                  </h1>
                  
                  {/* Simple Subtitle */}
                  <p className="text-lg text-white/90 font-medium">
                    300MB ultrarrápido + App Premium gratuito
                  </p>

                  {/* Simplified Benefits */}
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { icon: Wifi, text: "300MB Fibra" },
                      { icon: Tv, text: "TV Premium" },
                      { icon: Smartphone, text: "TV Mobile" },
                      { icon: Shield, text: "Suporte 24h" }
                    ].map((benefit, index) => (
                      <div key={index} className="glass-button-luxury rounded-2xl p-4 flex flex-col items-center space-y-2 hover:scale-105 transition-all duration-300">
                        <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center">
                          <benefit.icon className="w-5 h-5 text-white" />
                        </div>
                        <span className="font-semibold text-sm text-white text-center">{benefit.text}</span>
                      </div>
                    ))}
                  </div>

                  {/* Clean CTA Button */}
                  <TouchButton 
                    onClick={handleWhatsAppClick} 
                    className="btn-luxury w-full text-lg"
                  >
                    🚀 Contratar Agora
                  </TouchButton>

                  {/* Elegant Stats */}
                  <div className="grid grid-cols-2 gap-3 text-center">
                    {[
                      { value: 1000, label: "Clientes", suffix: "+" },
                      { value: 99, label: "Uptime", suffix: "%" },
                      { value: 20, label: "Canais", suffix: "+" },
                      { value: 24, label: "Online", suffix: "h" }
                    ].map((stat, index) => (
                      <div key={index} className="bg-white/20 backdrop-blur-lg rounded-xl p-3 border border-white/30 shadow-lg hover:bg-white/25 hover:scale-105 transition-all duration-300">
                        <StatsCounter endValue={stat.value} label={stat.label} suffix={stat.suffix} />
                      </div>
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            </div>

            {/* Desktop Version - Simplified */}
            <div className="hidden md:block">
              <AnimatedSection animation="fade-up">
                <div className="text-center space-y-10">
                  {/* Clean Badge Desktop */}
                  <div className="inline-flex items-center bg-white/20 backdrop-blur-md text-white px-8 py-4 rounded-full font-bold text-lg border border-white/30">
                    <Star className="w-5 h-5 mr-3 fill-current" />
                    <span>Internet + TV Grátis</span>
                  </div>
                  
                  {/* Clean Title */}
                  <h1 className="text-5xl lg:text-6xl font-black leading-tight text-white max-w-4xl mx-auto font-playfair">
                    <span className="block mb-2">Internet Fibra 300MB</span>
                    <span className="block gradient-text-luxury">+ SaraivaTV Premium</span>
                  </h1>
                  
                  {/* Simple Subtitle */}
                  <p className="text-xl lg:text-2xl text-white/90 font-medium max-w-3xl mx-auto">
                    A combinação perfeita para sua casa
                  </p>

                  {/* Clean Benefits Grid */}
                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
                    {[
                      { icon: Wifi, text: "300MB Fibra", subtitle: "Ultrarrápida" },
                      { icon: Tv, text: "TV Premium", subtitle: "App gratuito" },
                      { icon: Smartphone, text: "TV Mobile", subtitle: "Qualquer lugar" },
                      { icon: Shield, text: "Suporte 24h", subtitle: "Sempre disponível" }
                    ].map((benefit, index) => (
                      <div key={index} className="glass-button-luxury rounded-2xl p-6 flex flex-col items-center space-y-3 hover:scale-105 transition-all duration-300">
                        <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                          <benefit.icon className="w-6 h-6 text-white" />
                        </div>
                        <div className="text-center">
                          <div className="font-bold text-white">{benefit.text}</div>
                          <div className="text-sm text-white/70">{benefit.subtitle}</div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Clean CTA Button */}
                  <TouchButton 
                    onClick={handleWhatsAppClick} 
                    className="btn-luxury text-xl px-12 py-4"
                  >
                    🚀 Contratar Agora
                  </TouchButton>

                  {/* Clean Stats */}
                  <div className="flex justify-center gap-8 text-center max-w-2xl mx-auto">
                    {[
                      { value: 1000, label: "Clientes", suffix: "+" },
                      { value: 99, label: "Uptime", suffix: "%" },
                      { value: 24, label: "Suporte", suffix: "h" }
                    ].map((stat, index) => (
                      <div key={index} className="glass-button-luxury rounded-xl p-4 hover:scale-105 transition-all duration-300">
                        <StatsCounter endValue={stat.value} label={stat.label} suffix={stat.suffix} />
                      </div>
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* Plans Section - Redesigned for Single Plan */}
      <section id="planos" className="relative overflow-hidden py-24 px-4 gradient-secondary">
        {/* Elegant Background Pattern */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `radial-gradient(circle at 20% 50%, hsl(20, 100%, 50%, 0.3) 0%, transparent 50%),
                           radial-gradient(circle at 80% 50%, hsl(220, 70%, 50%, 0.2) 0%, transparent 50%)`
        }}></div>

        <div className="max-w-4xl mx-auto relative z-10">
          <AnimatedSection animation="fade-up">
            {/* Clean Header */}
            <div className="text-center mb-12">
              <div className="inline-flex items-center gradient-primary text-white px-6 py-3 rounded-full text-sm font-bold mb-6 shadow-lg">
                <Award className="w-4 h-4 mr-2" />
                <span>Oferta Especial</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-black text-white mb-4 tracking-tight">
                Plano Completo SaraivaNet
              </h2>
              <p className="text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
                Internet fibra óptica + SaraivaTV em um só plano
              </p>
            </div>
          </AnimatedSection>

          {/* Single Plan Card - Simplified & Elegant */}
          <AnimatedSection animation="scale-in" delay={200}>
            <div className="glass-dark-luxury rounded-3xl overflow-hidden group hover:scale-[1.02] transition-all duration-500">
              
              {/* Plan Header */}
              <div className="gradient-primary p-8 text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent"></div>
                <div className="relative z-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                      <Wifi className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl md:text-3xl font-black mb-1">Fibra 300MB + TV</h3>
                      <p className="text-white/90 font-medium">Internet ultrarrápida + App Premium</p>
                    </div>
                  </div>
                  <div className="text-center md:text-right">
                    <div className="text-sm text-white/80 line-through mb-1">De R$ 169,90</div>
                    <div className="text-4xl md:text-5xl font-black">
                      R$ 129<span className="text-2xl">,90</span>
                    </div>
                    <div className="text-white/90">por mês</div>
                  </div>
                </div>
              </div>

              {/* Plan Content */}
              <div className="p-8">
                {/* Key Benefits - Clean Grid */}
                <div className="grid md:grid-cols-2 gap-4 mb-8">
                  {[
                    { icon: Wifi, text: "300MB Fibra Óptica", subtitle: "Velocidade garantida" },
                    { icon: Tv, text: "SaraivaTV Premium", subtitle: "App gratuito incluído" },
                    { icon: Smartphone, text: "TV no Celular", subtitle: "Assista onde quiser" },
                    { icon: Shield, text: "Suporte 24h", subtitle: "Sempre disponível" }
                  ].map((benefit, index) => (
                    <div key={index} className="flex items-center space-x-4 p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-all duration-300">
                      <div className="w-12 h-12 gradient-primary rounded-xl flex items-center justify-center flex-shrink-0">
                        <benefit.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <div className="font-bold text-white">{benefit.text}</div>
                        <div className="text-sm text-slate-300">{benefit.subtitle}</div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Special Offer Banner */}
                <div className="bg-green-900/30 border border-green-500/30 rounded-xl p-6 mb-8 text-center">
                  <div className="text-green-300 font-bold text-lg mb-1">💰 Primeiros 3 meses por R$ 89,90</div>
                  <div className="text-green-400">Economia de R$ 120 para novos clientes</div>
                </div>

                {/* Installation Info */}
                <div className="flex flex-col md:flex-row gap-4 mb-8">
                  <div className="flex-1 bg-white/5 rounded-xl p-4">
                    <div className="flex items-center space-x-3 mb-2">
                      <CheckCircle className="w-5 h-5 text-emerald-400" />
                      <span className="font-semibold text-white">Instalação</span>
                    </div>
                    <p className="text-slate-300 text-sm">Taxa única R$ 149,90</p>
                  </div>
                  <div className="flex-1 bg-white/5 rounded-xl p-4">
                    <div className="flex items-center space-x-3 mb-2">
                      <Heart className="w-5 h-5 text-pink-400" />
                      <span className="font-semibold text-white">Contrato</span>
                    </div>
                    <p className="text-slate-300 text-sm">12 meses com benefícios</p>
                  </div>
                </div>

                {/* CTA Button */}
                <div className="text-center">
                  <TouchButton 
                    onClick={handleWhatsAppClick} 
                    className="btn-luxury w-full md:w-auto text-lg"
                  >
                    <span className="mr-2">🚀</span>
                    Contratar Agora pelo WhatsApp
                  </TouchButton>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Coverage Area */}
      <section id="cobertura" className="py-16 bg-gradient-to-br from-blue-600 via-purple-600 to-orange-500 text-white">
        <AnimatedSection>
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
              🗺️ Nossa Área de Cobertura
            </h2>
            <p className="text-sm sm:text-lg md:text-xl text-blue-100 mb-6 sm:mb-8 max-w-3xl mx-auto">
              Levamos internet de fibra óptica de alta qualidade para toda a região sul do Piauí
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 sm:gap-12 items-center mb-8 sm:mb-12">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">🏙️ Cidades Atendidas</h3>
              <div className="space-y-3 sm:space-y-4">
                {[{
                name: "Eliseu Martins",
                status: "Internet Ativa"
              }, {
                name: "Colônia do Gurguéia",
                status: "Internet Ativa"
              }, {
                name: "Manoel Emídio",
                status: "Internet Ativa"
              }, {
                name: "Canavieira",
                status: "Internet Ativa"
              }, {
                name: "Jerumenha",
                status: "Internet Ativa"
              }].map((city, index) => <div key={index} className="flex items-center space-x-3 sm:space-x-4 p-3 sm:p-4 bg-white/10 rounded-xl backdrop-blur-sm">
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                    <div>
                      <div className="font-semibold text-sm sm:text-base">{city.name}</div>
                      <div className="text-xs sm:text-sm text-blue-200">{city.status}</div>
                    </div>
                  </div>)}
              </div>
            </div>

            <div>
              <RealMap />
            </div>
          </div>

          <div className="text-center">
            <a href="https://wa.me/5586999999999?text=Olá! Gostaria de saber sobre a disponibilidade da internet SaraivaNet na minha região." target="_blank" rel="noopener noreferrer" className="inline-flex items-center space-x-2 sm:space-x-3 bg-green-500 hover:bg-green-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-sm sm:text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
              <span>💬</span>
              <span>Verificar Disponibilidade</span>
            </a>
          </div>
        </div>
        </AnimatedSection>
      </section>

      {/* SaraivaTV Features Section - ULTRA PREMIUM */}
      <section className="py-16 px-4 relative overflow-hidden" style={{background: 'linear-gradient(135deg, #fff5f0 0%, #ffede0 30%, #ffe5d4 70%, #ffd4c4 100%)'}}>
        {/* Animated Background */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-full h-full" style={{
            backgroundImage: `
              radial-gradient(circle at 20% 20%, rgba(255,165,0,0.4) 2px, transparent 2px),
              radial-gradient(circle at 80% 80%, rgba(255,100,0,0.3) 2px, transparent 2px),
              linear-gradient(135deg, transparent 40%, rgba(255,165,0,0.1) 50%, transparent 60%)
            `,
            backgroundSize: '100px 100px, 80px 80px, 160px 160px'
          }}></div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-br from-orange-300/40 to-red-300/30 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '6s' }}></div>
        <div className="absolute bottom-20 left-20 w-48 h-48 bg-gradient-to-tr from-purple-300/30 to-orange-300/40 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '8s', animationDelay: '2s' }}></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
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
                <Button onClick={handleWhatsAppClick} className="bg-white text-orange-600 hover:bg-gray-100 px-10 py-5 text-xl font-bold rounded-2xl shadow-2xl transform hover:scale-110 transition-all duration-300 flex items-center gap-3">
                  <span className="text-2xl">💬</span>
                  Entrar em Contato
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-orange-500 via-orange-600 to-purple-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute top-10 right-10 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-72 h-72 bg-orange-300/20 rounded-full blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <h2 className="text-5xl font-bold text-white mb-4">Números Que Falam Por Si</h2>
          <p className="text-2xl text-white/90 mb-12">
            Resultados conquistados com dedicação e compromisso com a região
          </p>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="bg-white/15 backdrop-blur-sm rounded-3xl p-8 text-white shadow-2xl hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
              <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Users className="w-10 h-10 text-white" />
              </div>
              <StatsCounter endValue={1000} label="Famílias Conectadas" suffix="+" />
              <div className="text-white/80 mt-2 text-lg">
                Lares piauenses com internet de qualidade
              </div>
            </div>

            <div className="bg-white/15 backdrop-blur-sm rounded-3xl p-8 text-white shadow-2xl hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
              <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <MapPin className="w-10 h-10 text-white" />
              </div>
              <StatsCounter endValue={5} label="Cidades Atendidas" />
              <div className="text-white/80 mt-2 text-lg">
                Cobertura no sul do Piauí
              </div>
            </div>

            <div className="bg-white/15 backdrop-blur-sm rounded-3xl p-8 text-white shadow-2xl hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
              <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Zap className="w-10 h-10 text-white" />
              </div>
              <StatsCounter endValue={99.9} label="Uptime Garantido" suffix="%" />
              <div className="text-white/80 mt-2 text-lg">
                Conexão estável e confiável
              </div>
            </div>

            <div className="bg-white/15 backdrop-blur-sm rounded-3xl p-8 text-white shadow-2xl hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
              <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Heart className="w-10 h-10 text-white" />
              </div>
              <StatsCounter endValue={98} label="Satisfação" suffix="%" />
              <div className="text-white/80 mt-2 text-lg">
                Clientes recomendam nossos serviços
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre" className="py-16 px-4 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-orange-100 text-orange-600 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Heart className="w-4 h-4 mr-2" />
              Nossa História
            </div>
            <h2 className="text-5xl font-bold text-gray-800 mb-4">Sobre a SaraivaNet</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Há 22 anos conectando Eliseu Martins com o mundo digital. Somos uma empresa piauense 
              comprometida em levar internet de qualidade para todos os lares e empresas da nossa cidade.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="animate-fade-in">
              <h3 className="text-3xl font-bold text-gray-800 mb-6">Nossa História</h3>
              <p className="text-gray-600 mb-6 text-lg">
                Fundada em 2003 por empreendedores locais, a SaraivaNet nasceu do sonho 
                de democratizar o acesso à internet de qualidade em Eliseu Martins.
              </p>
              <p className="text-gray-600 mb-6 text-lg">
                Começamos atendendo apenas algumas famílias e hoje somos referência em 
                conectividade na região, sempre mantendo nosso compromisso com a 
                excelência no atendimento e tecnologia de ponta.
              </p>
              <p className="text-gray-600 mb-8 text-lg">
                Nossa missão é simples: conectar pessoas, aproximar famílias e impulsionar o 
                desenvolvimento digital da nossa querida cidade piauense.
              </p>

              <div className="grid grid-cols-2 gap-8">
                <div className="text-center p-6 bg-gradient-to-b from-orange-50 to-white rounded-2xl shadow-lg">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-orange-500">1000+</div>
                  <div className="text-sm text-gray-600 font-medium">Clientes Ativos</div>
                </div>
                <div className="text-center p-6 bg-gradient-to-b from-orange-50 to-white rounded-2xl shadow-lg">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <MapPin className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-orange-500">100%</div>
                  <div className="text-sm text-gray-600 font-medium">Cobertura Local</div>
                </div>
                <div className="text-center p-6 bg-gradient-to-b from-orange-50 to-white rounded-2xl shadow-lg">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <Award className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-orange-500">22</div>
                  <div className="text-sm text-gray-600 font-medium">Anos de Experiência</div>
                </div>
                <div className="text-center p-6 bg-gradient-to-b from-orange-50 to-white rounded-2xl shadow-lg">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <Heart className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-orange-500">24h</div>
                  <div className="text-sm text-gray-600 font-medium">Suporte Local</div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-3xl p-10 shadow-2xl animate-fade-in delay-300">
              <h3 className="text-3xl font-bold text-gray-800 mb-6 text-center">
                Tecnologia que Conecta Corações
              </h3>
              <p className="text-gray-600 text-center mb-8 text-lg leading-relaxed">
                Na SaraivaNet, acreditamos que internet não é apenas tecnologia, é conexão humana. É o avô vendo 
                o neto pela primeira vez por videochamada, é o estudante acessando conhecimento, e o 
                empreendedor expandindo seus negócios. Somos parte da sua história há mais de duas décadas.
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
        <div className="max-w-7xl mx-auto">
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

      {/* Contact Section - Modern Design */}
      <section id="contato" className="relative py-20 px-4" style={{background: 'linear-gradient(135deg, #6B46C1 0%, #7C3AED 25%, #8B5CF6 50%, #A855F7 75%, #C084FC 100%)'}}>
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-transparent to-purple-900/30"></div>
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 20% 20%, rgba(255,255,255,0.1) 1px, transparent 1px), radial-gradient(circle at 80% 80%, rgba(255,255,255,0.05) 1px, transparent 1px)`,
            backgroundSize: '40px 40px, 60px 60px'
          }}></div>
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
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
            <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 transform hover:scale-105">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center shadow-xl">
                  <Phone className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-1">Telefone</h3>
                  <p className="text-white/90 text-lg font-semibold">(89) 99439-5789</p>
                  <p className="text-sm text-white/70">WhatsApp disponível</p>
                </div>
              </div>
            </div>

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
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
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

            <div>
              <h4 className="text-2xl font-bold mb-6 text-orange-400">Links Rápidos</h4>
              <ul className="space-y-3">
                <li><button onClick={e => handleSmoothScroll(e, 'inicio')} className="text-gray-300 hover:text-orange-400 transition-colors text-lg cursor-pointer">Início</button></li>
                <li><button onClick={e => handleSmoothScroll(e, 'planos')} className="text-gray-300 hover:text-orange-400 transition-colors text-lg cursor-pointer">Planos</button></li>
                <li><button onClick={e => handleSmoothScroll(e, 'cobertura')} className="text-gray-300 hover:text-orange-400 transition-colors text-lg cursor-pointer">Cobertura</button></li>
                <li><button onClick={e => handleSmoothScroll(e, 'sobre')} className="text-gray-300 hover:text-orange-400 transition-colors text-lg cursor-pointer">Sobre Nós</button></li>
                <li><button onClick={e => handleSmoothScroll(e, 'contato')} className="text-gray-300 hover:text-orange-400 transition-colors text-lg cursor-pointer">Contato</button></li>
              </ul>
            </div>

            <div>
              <h4 className="text-2xl font-bold mb-6 text-orange-400">Contato</h4>
              <ul className="space-y-4">
                <li className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-orange-400" />
                  <span className="text-lg">(89) 99439-5789</span>
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
