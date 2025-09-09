import { Phone, Mail, MapPin, Clock, Wifi, Tv, Music, Headphones, Smartphone, Zap, Users, Heart, Star, Shield, Award, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import RealMap from "@/components/RealMap";
import StatsCounter from "@/components/StatsCounter";
import TestimonialCard from "@/components/TestimonialCard";
import MobileNavigation from "@/components/MobileNavigation";
import AnimatedSection from "@/components/AnimatedSection";
import ChatBot from "@/components/ChatBot";
import TouchButton from "@/components/TouchButton";
import MobilePlansCarousel from "@/components/MobilePlansCarousel";
import ResponsiveImage from "@/components/ResponsiveImage";
import { useParallax } from "@/hooks/useParallax";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

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
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-orange-50/30">
      <Helmet>
        <title>SaraivaNet - Internet Ultra Rápida + TV Premium | Eliseu Martins - PI</title>
        <meta name="description" content="Internet de alta velocidade com TV premium gratuita em Eliseu Martins - PI. Planos a partir de R$ 60/mês com SaraivaTV incluído. Cobertura total da cidade." />
        <meta name="keywords" content="internet, fibra óptica, tv, Eliseu Martins, Piauí, banda larga, streaming" />
        <link rel="canonical" href="https://saraivanet.com" />
      </Helmet>

      {/* Modern Background Pattern */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            radial-gradient(circle at 20% 30%, rgba(255, 165, 0, 0.1) 0%, transparent 60%),
            radial-gradient(circle at 80% 20%, rgba(99, 102, 241, 0.08) 0%, transparent 60%),
            radial-gradient(circle at 40% 70%, rgba(236, 72, 153, 0.06) 0%, transparent 60%),
            linear-gradient(135deg, transparent 0%, rgba(255, 165, 0, 0.02) 50%, transparent 100%)
          `,
          backgroundSize: '1200px 1200px, 800px 800px, 600px 600px, 100% 100%'
        }}></div>
        
        {/* Floating Geometric Shapes */}
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-br from-orange-200/20 to-pink-200/20 rounded-3xl rotate-12 blur-xl"></div>
        <div className="absolute top-3/4 right-1/4 w-24 h-24 bg-gradient-to-br from-blue-200/20 to-purple-200/20 rounded-full blur-lg"></div>
        <div className="absolute top-1/2 right-1/3 w-16 h-16 bg-gradient-to-br from-emerald-200/20 to-teal-200/20 rounded-2xl rotate-45 blur-md"></div>
      </div>

      {/* Floating Components */}
      <ChatBot />
      
      {/* Modern Header */}
      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-white/80 border-b border-white/20 shadow-2xl">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 via-transparent to-blue-500/10"></div>
        
        <div className="relative">
          {/* Mobile Layout */}
          <div className="md:hidden">
            <div className="flex items-center justify-between py-4 px-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center shadow-lg border border-orange-400/50">
                  <Wifi className="w-5 h-5 text-white" />
                </div>
                <div>
                  <span className="text-xl font-black text-gray-800 tracking-tight">SaraivaNet</span>
                  <div className="text-xs text-gray-600 font-medium flex items-center">
                    <MapPin className="w-2.5 h-2.5 mr-1" />
                    Eliseu Martins - PI
                  </div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <MobileNavigation />
              </div>
            </div>
          </div>

          {/* Desktop Layout */}
          <div className="hidden md:flex items-center justify-between py-6 px-8">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center shadow-xl border border-orange-400/50">
                <Wifi className="w-6 h-6 text-white" />
              </div>
              <div>
                <span className="text-2xl font-black text-gray-800 tracking-tight">SaraivaNet</span>
                <div className="text-sm text-gray-600 font-medium flex items-center">
                  <MapPin className="w-3 h-3 mr-1" />
                  Eliseu Martins - PI
                </div>
              </div>
            </div>
            
            <nav className="flex items-center space-x-8">
              <TouchButton onClick={() => handleSmoothScroll('inicio')} className="text-gray-700 hover:text-orange-600 transition-all font-semibold hover:scale-105">Início</TouchButton>
              <TouchButton onClick={() => handleSmoothScroll('planos')} className="text-gray-700 hover:text-orange-600 transition-all font-semibold hover:scale-105">Planos</TouchButton>
              <TouchButton onClick={() => handleSmoothScroll('cobertura')} className="text-gray-700 hover:text-orange-600 transition-all font-semibold hover:scale-105">Cobertura</TouchButton>
              <TouchButton onClick={() => handleSmoothScroll('sobre')} className="text-gray-700 hover:text-orange-600 transition-all font-semibold hover:scale-105">Sobre</TouchButton>
              <TouchButton onClick={() => handleSmoothScroll('contato')} className="text-gray-700 hover:text-orange-600 transition-all font-semibold hover:scale-105">Contato</TouchButton>
              <Link to="/chips">
                <TouchButton className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-2 rounded-xl font-bold hover:from-orange-600 hover:to-orange-700 transition-all hover:scale-105 shadow-lg">
                  Chips
                </TouchButton>
              </Link>
            </nav>

            <div className="flex items-center space-x-4">
              {/* Space for future controls */}
            </div>
          </div>
        </div>
      </header>

      {/* Modern Hero Section */}
      <section id="inicio" className="relative overflow-hidden min-h-screen flex items-center pt-24">
        {/* Dynamic Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-orange-50/50"></div>
        
        {/* Animated Background Elements */}
        {!prefersReducedMotion && (
          <div className="absolute inset-0">
            <div className="absolute top-1/4 right-1/6 w-96 h-96 bg-gradient-to-br from-orange-200/30 to-pink-200/20 rounded-full blur-3xl animate-float" style={{ animationDuration: '12s' }}></div>
            <div className="absolute bottom-1/4 left-1/6 w-80 h-80 bg-gradient-to-br from-blue-200/25 to-purple-200/15 rounded-full blur-3xl animate-float" style={{ animationDuration: '15s', animationDelay: '4s' }}></div>
            <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-br from-emerald-200/20 to-teal-200/10 rounded-full blur-3xl animate-float" style={{ animationDuration: '10s', animationDelay: '8s' }}></div>
          </div>
        )}
        
        {/* Elegant Grid Pattern */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(90deg, rgba(0,0,0,0.02) 1px, transparent 1px),
              linear-gradient(rgba(0,0,0,0.02) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px'
          }}></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 w-full px-6 py-12">
          <div className="max-w-7xl mx-auto">
            
            {/* Mobile Version */}
            <div className="md:hidden">
              <AnimatedSection animation="fade-up">
                <div className="text-center space-y-10">
                  {/* Modern Badge */}
                  <div className="inline-flex items-center bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-3 rounded-2xl font-bold text-sm shadow-xl backdrop-blur-sm border border-orange-400/50">
                    <Zap className="w-4 h-4 mr-2" />
                    <span>Internet + TV Premium</span>
                  </div>
                  
                  {/* Modern Title */}
                  <h1 className="text-5xl md:text-6xl font-black leading-tight text-gray-900 tracking-tight">
                    <span className="block mb-2">Internet</span>
                    <span className="block bg-gradient-to-r from-orange-600 to-orange-500 bg-clip-text text-transparent">
                      Ultra Rápida
                    </span>
                  </h1>
                  
                  {/* Elegant Subtitle */}
                  <p className="text-xl text-gray-600 font-medium max-w-2xl mx-auto leading-relaxed">
                    Conectividade premium com TV gratuita e suporte 24/7
                  </p>

                  {/* Modern Feature Cards */}
                  <div className="grid grid-cols-2 gap-6">
                    {[
                      { icon: Wifi, text: "Internet Ultra", color: "orange" },
                      { icon: Tv, text: "TV Premium", color: "blue" },
                      { icon: Music, text: "Rádios 24h", color: "emerald" },
                      { icon: Shield, text: "Suporte 24/7", color: "purple" }
                    ].map((card, index) => (
                      <div key={index} className="bg-white/70 backdrop-blur-xl rounded-3xl p-6 flex flex-col items-center space-y-4 border border-white/50 shadow-xl hover:shadow-2xl hover:scale-105 hover:-translate-y-1 transition-all duration-500">
                        <div className={`w-14 h-14 bg-gradient-to-br from-${card.color}-500 to-${card.color}-600 rounded-2xl flex items-center justify-center shadow-lg`}>
                          <card.icon className="w-7 h-7 text-white" />
                        </div>
                        <span className="font-bold text-sm text-gray-800 text-center">{card.text}</span>
                      </div>
                    ))}
                  </div>

                  {/* Modern CTA Button */}
                  <TouchButton 
                    onClick={handleWhatsAppClick} 
                    className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-4 rounded-2xl font-bold text-lg shadow-xl hover:shadow-2xl hover:scale-105 hover:-translate-y-1 transition-all duration-300"
                  >
                    <span className="flex items-center justify-center gap-2">
                      <Zap className="w-5 h-5" />
                      Contratar Agora
                    </span>
                  </TouchButton>

                  {/* Modern Stats */}
                  <div className="grid grid-cols-2 gap-4 text-center">
                    {[
                      { value: 1000, label: "Clientes", suffix: "+" },
                      { value: 99, label: "Uptime", suffix: "%" },
                      { value: 20, label: "Canais", suffix: "+" },
                      { value: 24, label: "Online", suffix: "h" }
                    ].map((stat, index) => (
                      <div key={index} className="bg-white/60 backdrop-blur-lg rounded-2xl p-4 border border-white/40 shadow-lg hover:bg-white/70 hover:scale-105 transition-all duration-300">
                        <StatsCounter endValue={stat.value} label={stat.label} suffix={stat.suffix} />
                      </div>
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            </div>

            {/* Desktop Version */}
            <div className="hidden md:block">
              <AnimatedSection animation="fade-up">
                <div className="text-center space-y-16">
                  {/* Modern Badge Desktop */}
                  <div className="inline-flex items-center bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-2xl font-bold text-lg shadow-xl backdrop-blur-sm border border-orange-400/50">
                    <Zap className="w-5 h-5 mr-3" />
                    <span>Internet + TV Premium</span>
                  </div>
                  
                  {/* Modern Title Desktop */}
                  <h1 className="text-7xl lg:text-8xl font-black leading-tight text-gray-900 max-w-5xl mx-auto tracking-tight">
                    <span className="block mb-4">Internet</span>
                    <span className="block bg-gradient-to-r from-orange-600 to-orange-500 bg-clip-text text-transparent">
                      Ultra Rápida
                    </span>
                  </h1>
                  
                  {/* Modern Subtitle Desktop */}
                  <p className="text-2xl lg:text-3xl text-gray-600 font-medium max-w-3xl mx-auto leading-relaxed">
                    Conectividade premium com TV gratuita e suporte 24/7
                  </p>

                  {/* Modern Feature Cards Desktop */}
                  <div className="grid grid-cols-4 gap-8 max-w-6xl mx-auto">
                    {[
                      { icon: Wifi, text: "Internet Ultra", color: "orange" },
                      { icon: Tv, text: "TV Premium", color: "blue" },
                      { icon: Music, text: "Rádios 24h", color: "emerald" },
                      { icon: Shield, text: "Suporte 24/7", color: "purple" }
                    ].map((card, index) => (
                      <div key={index} className="bg-white/70 backdrop-blur-xl rounded-3xl p-8 flex flex-col items-center space-y-6 border border-white/50 shadow-xl hover:shadow-2xl hover:scale-105 hover:-translate-y-2 transition-all duration-500">
                        <div className={`w-20 h-20 bg-gradient-to-br from-${card.color}-500 to-${card.color}-600 rounded-3xl flex items-center justify-center shadow-lg hover:rotate-6 transition-transform duration-300`}>
                          <card.icon className="w-10 h-10 text-white" />
                        </div>
                        <span className="font-bold text-xl text-gray-800 text-center">{card.text}</span>
                      </div>
                    ))}
                  </div>

                  {/* Modern CTA Button Desktop */}
                  <TouchButton 
                    onClick={handleWhatsAppClick} 
                    className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-16 py-6 rounded-2xl font-bold text-2xl shadow-xl hover:shadow-2xl hover:scale-105 hover:-translate-y-2 transition-all duration-500"
                  >
                    <span className="flex items-center justify-center gap-3">
                      <Zap className="w-6 h-6" />
                      Contratar Agora
                    </span>
                  </TouchButton>

                  {/* Modern Stats Desktop */}
                  <div className="flex justify-center gap-12 text-center max-w-4xl mx-auto">
                    {[
                      { value: 1000, label: "Clientes", suffix: "+" },
                      { value: 99, label: "Uptime", suffix: "%" },
                      { value: 20, label: "Canais", suffix: "+" },
                      { value: 24, label: "Online", suffix: "h" }
                    ].map((stat, index) => (
                      <div key={index} className="bg-white/60 backdrop-blur-lg rounded-2xl p-8 border border-white/40 shadow-xl hover:bg-white/70 hover:scale-105 hover:-translate-y-1 transition-all duration-500">
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

      {/* Modern Plans Section */}
      <section id="planos" className="relative overflow-hidden py-24 px-4">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-orange-50/30"></div>
        
        {/* Subtle Background Pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              radial-gradient(circle at 30% 40%, rgba(255, 165, 0, 0.1) 0%, transparent 50%),
              radial-gradient(circle at 70% 60%, rgba(99, 102, 241, 0.08) 0%, transparent 50%),
              linear-gradient(135deg, transparent 0%, rgba(255, 165, 0, 0.03) 50%, transparent 100%)
            `,
            backgroundSize: '800px 800px, 600px 600px, 100% 100%'
          }}></div>
        </div>
        
        <div className="max-w-6xl mx-auto relative z-10">
          <AnimatedSection animation="fade-up">
            <div className="text-center mb-20">
              {/* Modern Badge */}
              <div className="inline-flex items-center bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-3 rounded-2xl text-lg font-bold mb-8 shadow-lg">
                <Award className="w-5 h-5 mr-3" />
                <span>Plano Exclusivo</span>
              </div>
              
              {/* Modern Title */}
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-gray-900 mb-6 tracking-tight">
                Internet + SaraivaTV
              </h2>
              <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed font-medium">
                O plano completo que vai transformar sua experiência digital
              </p>
              
              {/* Special Offer */}
              <div className="inline-flex items-center bg-gradient-to-r from-emerald-500 to-emerald-600 text-white px-6 py-3 rounded-2xl font-bold text-lg shadow-lg">
                <CheckCircle className="w-5 h-5 mr-2" />
                <span>SaraivaTV Gratuito</span>
              </div>
            </div>
          </AnimatedSection>

          {/* Modern Plans Display */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {/* Plan 1 */}
            <AnimatedSection animation="fade-up" delay={100}>
              <div className="card-luxury group">
                <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-4 py-2 rounded-xl text-sm font-bold inline-flex items-center mb-6">
                  <Wifi className="w-4 h-4 mr-2" />
                  Mais Popular
                </div>
                
                <h3 className="text-2xl font-black text-gray-900 mb-2">Internet 50MB</h3>
                <p className="text-gray-600 mb-6">Ideal para navegação e streaming</p>
                
                <div className="mb-6">
                  <span className="text-4xl font-black text-gray-900">R$ 60</span>
                  <span className="text-gray-500">/mês</span>
                </div>

                <ul className="space-y-3 mb-8">
                  <li className="flex items-center text-gray-700">
                    <CheckCircle className="w-4 h-4 text-emerald-500 mr-3" />
                    50MB Download
                  </li>
                  <li className="flex items-center text-gray-700">
                    <CheckCircle className="w-4 h-4 text-emerald-500 mr-3" />
                    SaraivaTV Gratuito
                  </li>
                  <li className="flex items-center text-gray-700">
                    <CheckCircle className="w-4 h-4 text-emerald-500 mr-3" />
                    Suporte 24/7
                  </li>
                </ul>

                <TouchButton 
                  onClick={handleWhatsAppClick}
                  className="w-full btn-premium py-4"
                >
                  Contratar Agora
                </TouchButton>
              </div>
            </AnimatedSection>

            {/* Plan 2 */}
            <AnimatedSection animation="fade-up" delay={200}>
              <div className="card-luxury group border-2 border-orange-500/50">
                <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-4 py-2 rounded-xl text-sm font-bold inline-flex items-center mb-6">
                  <Star className="w-4 h-4 mr-2" />
                  Recomendado
                </div>
                
                <h3 className="text-2xl font-black text-gray-900 mb-2">Internet 100MB</h3>
                <p className="text-gray-600 mb-6">Perfeito para família</p>
                
                <div className="mb-6">
                  <span className="text-4xl font-black text-gray-900">R$ 80</span>
                  <span className="text-gray-500">/mês</span>
                </div>

                <ul className="space-y-3 mb-8">
                  <li className="flex items-center text-gray-700">
                    <CheckCircle className="w-4 h-4 text-emerald-500 mr-3" />
                    100MB Download
                  </li>
                  <li className="flex items-center text-gray-700">
                    <CheckCircle className="w-4 h-4 text-emerald-500 mr-3" />
                    SaraivaTV Premium
                  </li>
                  <li className="flex items-center text-gray-700">
                    <CheckCircle className="w-4 h-4 text-emerald-500 mr-3" />
                    Suporte Prioritário
                  </li>
                </ul>

                <TouchButton 
                  onClick={handleWhatsAppClick}
                  className="w-full btn-luxury py-4"
                >
                  Contratar Agora
                </TouchButton>
              </div>
            </AnimatedSection>

            {/* Plan 3 */}
            <AnimatedSection animation="fade-up" delay={300}>
              <div className="card-luxury group">
                <div className="bg-gradient-to-r from-purple-500 to-purple-600 text-white px-4 py-2 rounded-xl text-sm font-bold inline-flex items-center mb-6">
                  <Zap className="w-4 h-4 mr-2" />
                  Ultra
                </div>
                
                <h3 className="text-2xl font-black text-gray-900 mb-2">Internet 200MB</h3>
                <p className="text-gray-600 mb-6">Máxima velocidade</p>
                
                <div className="mb-6">
                  <span className="text-4xl font-black text-gray-900">R$ 120</span>
                  <span className="text-gray-500">/mês</span>
                </div>

                <ul className="space-y-3 mb-8">
                  <li className="flex items-center text-gray-700">
                    <CheckCircle className="w-4 h-4 text-emerald-500 mr-3" />
                    200MB Download
                  </li>
                  <li className="flex items-center text-gray-700">
                    <CheckCircle className="w-4 h-4 text-emerald-500 mr-3" />
                    SaraivaTV Ultra
                  </li>
                  <li className="flex items-center text-gray-700">
                    <CheckCircle className="w-4 h-4 text-emerald-500 mr-3" />
                    Suporte VIP
                  </li>
                </ul>

                <TouchButton 
                  onClick={handleWhatsAppClick}
                  className="w-full btn-premium py-4"
                >
                  Contratar Agora
                </TouchButton>
              </div>
            </AnimatedSection>
          </div>

          {/* Mobile Plans Carousel */}
          <div className="md:hidden">
            <MobilePlansCarousel />
          </div>
        </div>
      </section>

      {/* Modern Coverage Section */}
      <section id="cobertura" className="relative overflow-hidden py-24 px-4 bg-gradient-to-br from-slate-100 via-white to-orange-50/50">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection animation="fade-up">
            <div className="text-center mb-16">
              <div className="inline-flex items-center bg-gradient-to-r from-emerald-500 to-emerald-600 text-white px-6 py-3 rounded-2xl font-bold text-lg mb-8 shadow-lg">
                <MapPin className="w-5 h-5 mr-3" />
                <span>Cobertura Total</span>
              </div>
              
              <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-6 tracking-tight">
                Eliseu Martins - PI
              </h2>
              <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Cobertura completa em toda a cidade com fibra óptica
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="fade-up" delay={200}>
            <div className="card-luxury">
              <RealMap />
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Modern About Section */}
      <section id="sobre" className="relative overflow-hidden py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection animation="slide-left">
              <div>
                <div className="inline-flex items-center bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 py-3 rounded-2xl font-bold text-lg mb-8 shadow-lg">
                  <Users className="w-5 h-5 mr-3" />
                  <span>Sobre Nós</span>
                </div>
                
                <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-8 tracking-tight">
                  Conectando Eliseu Martins
                </h2>
                
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  A SaraivaNet é a provedora de internet líder em Eliseu Martins - PI, oferecendo conexões de alta velocidade e TV premium para toda a família.
                </p>
                
                <div className="grid grid-cols-2 gap-6 mb-8">
                  {[
                    { icon: Award, title: "5+ Anos", subtitle: "de Experiência" },
                    { icon: Users, title: "1000+", subtitle: "Clientes Satisfeitos" },
                    { icon: Shield, title: "99%", subtitle: "de Uptime" },
                    { icon: Heart, title: "24/7", subtitle: "Suporte" }
                  ].map((item, index) => (
                    <div key={index} className="bg-white/70 backdrop-blur-lg rounded-2xl p-6 border border-white/50 shadow-lg">
                      <item.icon className="w-8 h-8 text-orange-600 mb-3" />
                      <h3 className="font-black text-xl text-gray-900">{item.title}</h3>
                      <p className="text-gray-600 text-sm">{item.subtitle}</p>
                    </div>
                  ))}
                </div>

                <TouchButton 
                  onClick={handleWhatsAppClick}
                  className="btn-premium px-8 py-4 text-lg"
                >
                  Falar Conosco
                </TouchButton>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="slide-right" delay={200}>
              <div className="relative">
                <div className="card-luxury">
                  <ResponsiveImage 
                    src="/lovable-uploads/01df9255-1f15-4131-86c5-638e9796ee23.png"
                    alt="Equipe SaraivaNet"
                    className="w-full h-auto rounded-2xl"
                  />
                </div>
                
                {/* Floating Stats */}
                <div className="absolute -bottom-6 -left-6 bg-white/80 backdrop-blur-xl rounded-2xl p-6 shadow-2xl border border-white/50">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center">
                      <CheckCircle className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="font-black text-2xl text-gray-900">100%</div>
                      <div className="text-gray-600 text-sm">Satisfação</div>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Modern Testimonials Section */}
      <section className="relative overflow-hidden py-24 px-4 bg-gradient-to-br from-slate-50 via-white to-orange-50/30">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection animation="fade-up">
            <div className="text-center mb-16">
              <div className="inline-flex items-center bg-gradient-to-r from-purple-500 to-purple-600 text-white px-6 py-3 rounded-2xl font-bold text-lg mb-8 shadow-lg">
                <Star className="w-5 h-5 mr-3" />
                <span>Depoimentos</span>
              </div>
              
              <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-6 tracking-tight">
                O que nossos clientes dizem
              </h2>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Maria Silva",
                age: "35 anos",
                location: "Centro",
                testimonial: "A internet da SaraivaNet é incrível! Nunca fica lenta e o SaraivaTV tem uma variedade enorme de canais. Recomendo!",
                initials: "MS"
              },
              {
                name: "João Santos",
                age: "42 anos", 
                location: "Bairro Novo",
                testimonial: "Excelente atendimento e qualidade. Mudei para SaraivaNet e não me arrependo. Internet rápida e estável.",
                initials: "JS"
              },
              {
                name: "Ana Costa",
                age: "28 anos",
                location: "Vila Rica", 
                testimonial: "O suporte é fantástico, sempre disponível quando preciso. A qualidade da conexão é excepcional!",
                initials: "AC"
              }
            ].map((testimonial, index) => (
              <AnimatedSection key={index} animation="fade-up" delay={index * 100}>
                <TestimonialCard {...testimonial} />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Modern Contact Section */}
      <section id="contato" className="relative overflow-hidden py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection animation="fade-up">
            <div className="text-center mb-16">
              <div className="inline-flex items-center bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-3 rounded-2xl font-bold text-lg mb-8 shadow-lg">
                <Phone className="w-5 h-5 mr-3" />
                <span>Contato</span>
              </div>
              
              <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-6 tracking-tight">
                Vamos Conversar
              </h2>
              <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Entre em contato conosco e descubra o melhor plano para você
              </p>
            </div>
          </AnimatedSection>

          <div className="grid lg:grid-cols-2 gap-16">
            <AnimatedSection animation="slide-left">
              <div className="space-y-8">
                <div className="card-luxury">
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center shadow-lg">
                      <Phone className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="font-black text-xl text-gray-900">Telefone</h3>
                      <TouchButton 
                        onClick={handlePhoneClick}
                        className="text-orange-600 hover:text-orange-700 font-bold text-lg"
                      >
                        (89) 99439-5789
                      </TouchButton>
                    </div>
                  </div>
                </div>

                <div className="card-luxury">
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl flex items-center justify-center shadow-lg">
                      <Smartphone className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="font-black text-xl text-gray-900">WhatsApp</h3>
                      <TouchButton 
                        onClick={handleWhatsAppClick}
                        className="text-emerald-600 hover:text-emerald-700 font-bold text-lg"
                      >
                        (89) 99439-5789
                      </TouchButton>
                    </div>
                  </div>
                </div>

                <div className="card-luxury">
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg">
                      <MapPin className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="font-black text-xl text-gray-900">Localização</h3>
                      <p className="text-gray-600 font-medium">Eliseu Martins - PI</p>
                    </div>
                  </div>
                </div>

                <div className="card-luxury">
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg">
                      <Clock className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="font-black text-xl text-gray-900">Horário</h3>
                      <p className="text-gray-600 font-medium">24 horas por dia</p>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="slide-right" delay={200}>
              <div className="card-luxury h-full flex flex-col justify-center">
                <div className="text-center">
                  <div className="w-24 h-24 bg-gradient-to-br from-orange-500 to-orange-600 rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-2xl">
                    <Zap className="w-12 h-12 text-white" />
                  </div>
                  
                  <h3 className="text-3xl font-black text-gray-900 mb-6">
                    Pronto para começar?
                  </h3>
                  
                  <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                    Clique no botão abaixo e fale conosco pelo WhatsApp. Nossa equipe está pronta para ajudar!
                  </p>
                  
                  <TouchButton 
                    onClick={handleWhatsAppClick}
                    className="btn-luxury px-12 py-6 text-xl"
                  >
                    <span className="flex items-center gap-3">
                      <Smartphone className="w-6 h-6" />
                      Falar no WhatsApp
                    </span>
                  </TouchButton>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Modern Footer */}
      <footer className="relative overflow-hidden py-16 px-4 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        <div className="max-w-6xl mx-auto">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-4 mb-8">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center shadow-lg">
                <Wifi className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-black text-white tracking-tight">SaraivaNet</span>
            </div>
            
            <p className="text-gray-400 mb-8 text-lg">
              Conectando Eliseu Martins com o futuro digital
            </p>
            
            <div className="flex justify-center space-x-8 mb-8">
              <TouchButton 
                onClick={handlePhoneClick}
                className="text-gray-400 hover:text-orange-500 transition-colors"
              >
                <Phone className="w-6 h-6" />
              </TouchButton>
              <TouchButton 
                onClick={handleWhatsAppClick}
                className="text-gray-400 hover:text-emerald-500 transition-colors"
              >
                <Smartphone className="w-6 h-6" />
              </TouchButton>
            </div>
            
            <div className="border-t border-gray-700 pt-8">
              <p className="text-gray-500 text-sm">
                © 2024 SaraivaNet. Todos os direitos reservados.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;