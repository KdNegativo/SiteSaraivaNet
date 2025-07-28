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
import { useParallax } from "@/hooks/useParallax";
import { useReducedMotion } from "@/hooks/useReducedMotion";

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
    <div className="min-h-screen relative" style={{background: 'linear-gradient(135deg, #fff5f0 0%, #ffede0 50%, #ffe5d4 100%)'}}>
      {/* Floating Components */}
      <ChatBot />
      
      {/* Header */}
      <header style={{background: '#ff6600', borderBottomColor: '#ff4400'}} className="shadow-xl px-4 py-3 border-b-4 z-50">
        {/* Mobile Layout */}
        <div className="md:hidden">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-white to-orange-100 rounded-xl flex items-center justify-center shadow-lg border border-white/30">
                <Wifi className="w-4 h-4 text-orange-600" />
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
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-lg">
              <Wifi className="w-5 h-5 text-orange-600" />
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
            <a href="#inicio" onClick={e => handleSmoothScroll(e, 'inicio')} className="text-white hover:text-orange-200 transition-colors font-medium">Início</a>
            <a href="#planos" onClick={e => handleSmoothScroll(e, 'planos')} className="text-white hover:text-orange-200 transition-colors font-medium">Planos</a>
            <a href="#cobertura" onClick={e => handleSmoothScroll(e, 'cobertura')} className="text-white hover:text-orange-200 transition-colors font-medium">Cobertura</a>
            <a href="#sobre" onClick={e => handleSmoothScroll(e, 'sobre')} className="text-white hover:text-orange-200 transition-colors font-medium">Sobre</a>
            <a href="#contato" onClick={e => handleSmoothScroll(e, 'contato')} className="text-white hover:text-orange-200 transition-colors font-medium">Contato</a>
          </nav>

          <div className="flex items-center space-x-4">
            {/* ThemeToggle removido */}
          </div>
        </div>
      </header>

      {/* Hero Section - ULTRA PREMIUM */}
      <section id="inicio" className="relative overflow-hidden min-h-screen flex items-center" style={{background: 'linear-gradient(135deg, #ff6600 0%, #ff4400 30%, #cc3300 70%, #990000 100%)', color: 'white'}}>
        
        {/* Background Pattern Complex */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-full h-full" style={{
            backgroundImage: `
              radial-gradient(circle at 20% 80%, rgba(255,255,255,0.3) 2px, transparent 2px),
              radial-gradient(circle at 80% 20%, rgba(255,255,255,0.2) 3px, transparent 3px),
              radial-gradient(circle at 40% 40%, rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(45deg, transparent 48%, rgba(255,255,255,0.05) 49%, rgba(255,255,255,0.05) 51%, transparent 52%),
              linear-gradient(-45deg, transparent 48%, rgba(255,255,255,0.03) 49%, rgba(255,255,255,0.03) 51%, transparent 52%)
            `,
            backgroundSize: '80px 80px, 120px 120px, 40px 40px, 60px 60px, 80px 80px'
          }}></div>
        </div>

        {/* Multiple Overlay Gradients */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/50"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-black/10 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 via-transparent to-red-500/20"></div>
        
        {/* Advanced Floating Elements */}
        {!prefersReducedMotion && (
          <>
            <div className="absolute inset-0" style={{ transform: `translateY(${parallaxOffset}px)` }}>
              {/* Large Background Orbs */}
              <div className="absolute top-10 right-10 w-96 h-96 bg-gradient-to-br from-orange-300/30 to-yellow-300/20 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '8s' }}></div>
              <div className="absolute bottom-10 left-10 w-80 h-80 bg-gradient-to-br from-purple-300/25 to-pink-300/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s', animationDuration: '12s' }}></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-br from-blue-300/20 to-cyan-300/15 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '2s', animationDuration: '10s' }}></div>
            </div>
            
            {/* Floating Particles */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute top-20 left-1/4 w-3 h-3 bg-white/40 rounded-full animate-bounce" style={{ animationDelay: '1s', animationDuration: '3s' }}></div>
              <div className="absolute top-40 right-1/4 w-2 h-2 bg-yellow-300/50 rounded-full animate-bounce" style={{ animationDelay: '2s', animationDuration: '4s' }}></div>
              <div className="absolute bottom-32 left-1/3 w-4 h-4 bg-orange-300/30 rounded-full animate-bounce" style={{ animationDelay: '0.5s', animationDuration: '3.5s' }}></div>
              <div className="absolute top-60 right-1/3 w-2.5 h-2.5 bg-white/30 rounded-full animate-bounce" style={{ animationDelay: '3s', animationDuration: '2.5s' }}></div>
              <div className="absolute bottom-40 right-1/5 w-3.5 h-3.5 bg-pink-300/40 rounded-full animate-bounce" style={{ animationDelay: '1.5s', animationDuration: '4.5s' }}></div>
            </div>
          </>
        )}
        
        {/* Main Content */}
        <div className="relative z-10 w-full px-6 py-12">
          <div className="max-w-7xl mx-auto">
            
            {/* Mobile Version Enhanced */}
            <div className="md:hidden">
              <AnimatedSection animation="fade-up">
                <div className="text-center space-y-8 max-w-sm mx-auto">
                  {/* Premium Badge with Glow */}
                  <div className="relative inline-flex items-center">
                    <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 rounded-full blur-lg opacity-75 animate-pulse"></div>
                    <div className="relative bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 text-gray-900 px-4 py-3 rounded-full shadow-2xl font-black text-xs border-2 border-yellow-200">
                      <div className="flex items-center">
                        <Star className="w-4 h-4 mr-2 fill-current animate-spin" style={{ animationDuration: '3s' }} />
                        <span className="bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">🔥 INTERNET + TV GRÁTIS 🔥</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Enhanced Title with Multiple Effects */}
                  <div className="relative">
                    <h1 className="text-4xl font-black leading-tight text-white relative z-10">
                      <span className="block mb-2 animate-fade-in" style={{
                        textShadow: '4px 4px 16px rgba(0,0,0,0.9), 0 0 40px rgba(255,255,255,0.3), 0 0 80px rgba(255,165,0,0.5)',
                        letterSpacing: '1px'
                      }}>Internet</span>
                      <span className="block animate-fade-in" style={{
                        animationDelay: '0.3s',
                        textShadow: '4px 4px 16px rgba(0,0,0,0.9), 0 0 40px rgba(255,255,255,0.3), 0 0 80px rgba(255,165,0,0.5)',
                        letterSpacing: '1px'
                      }}>+ SaraivaTV</span>
                    </h1>
                    
                    {/* Title Background Glow */}
                    <div className="absolute inset-0 text-4xl font-black leading-tight pointer-events-none">
                      <span className="block text-transparent bg-gradient-to-r from-orange-300/40 to-yellow-300/40 bg-clip-text mb-2 blur-sm">Internet</span>
                      <span className="block text-transparent bg-gradient-to-r from-orange-300/40 to-yellow-300/40 bg-clip-text blur-sm">+ SaraivaTV</span>
                    </div>
                  </div>
                  
                  {/* Enhanced Subtitle */}
                  <div className="relative">
                    <p className="text-lg text-white/95 font-bold relative z-10 animate-fade-in" style={{
                      animationDelay: '0.6s',
                      textShadow: '2px 2px 8px rgba(0,0,0,0.8), 0 0 20px rgba(255,255,255,0.2)',
                      letterSpacing: '0.5px'
                    }}>
                      🚀 Internet mais rápida + App GRATUITO!
                    </p>
                    <div className="absolute inset-0 text-lg font-bold text-transparent bg-gradient-to-r from-white/20 to-orange-200/20 bg-clip-text blur-sm pointer-events-none">
                      🚀 Internet mais rápida + App GRATUITO!
                    </div>
                  </div>

                  {/* Premium Cards with Advanced Effects */}
                  <div className="grid grid-cols-2 gap-4 animate-scale-in" style={{ animationDelay: '0.9s' }}>
                    {[
                      { icon: Wifi, text: "Internet ULTRA", colors: "from-orange-500/90 to-red-500/80", borderColor: "border-orange-300/60", iconBg: "from-orange-100 to-orange-200", iconColor: "text-orange-600" },
                      { icon: Tv, text: "TV Premium", colors: "from-blue-500/90 to-purple-500/80", borderColor: "border-blue-300/60", iconBg: "from-blue-100 to-blue-200", iconColor: "text-blue-600" },
                      { icon: Music, text: "Rádios 24h", colors: "from-green-500/90 to-emerald-500/80", borderColor: "border-green-300/60", iconBg: "from-green-100 to-green-200", iconColor: "text-green-600" },
                      { icon: Shield, text: "Suporte VIP", colors: "from-purple-500/90 to-pink-500/80", borderColor: "border-purple-300/60", iconBg: "from-purple-100 to-purple-200", iconColor: "text-purple-600" }
                    ].map((card, index) => (
                      <div key={index} className={`group relative bg-gradient-to-br ${card.colors} backdrop-blur-xl rounded-2xl p-4 flex flex-col items-center space-y-3 border-2 ${card.borderColor} shadow-2xl hover:shadow-3xl transform hover:scale-110 hover:-translate-y-2 transition-all duration-500 hover:rotate-2 animate-slide-in-left overflow-hidden`} style={{ animationDelay: `${1.2 + index * 0.1}s` }}>
                        {/* Card Glow Effect */}
                        <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        
                        {/* Floating Sparkles */}
                        <div className="absolute top-2 right-2 w-1 h-1 bg-white/60 rounded-full opacity-0 group-hover:opacity-100 animate-ping" style={{ animationDelay: '0.5s' }}></div>
                        <div className="absolute bottom-3 left-3 w-0.5 h-0.5 bg-white/40 rounded-full opacity-0 group-hover:opacity-100 animate-ping" style={{ animationDelay: '1s' }}></div>
                        
                        <div className={`w-12 h-12 bg-gradient-to-br ${card.iconBg} rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-2xl group-hover:scale-125 transition-all duration-500 group-hover:rotate-12 border border-white/30 relative z-10`}>
                          <card.icon className={`w-6 h-6 ${card.iconColor} group-hover:scale-110 transition-transform duration-300`} />
                        </div>
                        <span className="font-black text-xs text-white text-center drop-shadow-lg relative z-10 group-hover:scale-105 transition-transform duration-300">{card.text}</span>
                      </div>
                    ))}
                  </div>

                  {/* Ultra Premium Button */}
                  <div className="relative animate-scale-in" style={{ animationDelay: '1.6s' }}>
                    <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 rounded-2xl blur-xl opacity-75 animate-pulse"></div>
                    <TouchButton 
                      onClick={handleWhatsAppClick} 
                      className="relative w-full bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 hover:from-yellow-300 hover:via-orange-400 hover:to-red-400 text-gray-900 px-8 py-5 rounded-2xl font-black text-lg shadow-2xl border-2 border-yellow-200 transform hover:scale-110 hover:-translate-y-1 transition-all duration-300 overflow-hidden group"
                    >
                      {/* Button Shine Effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>
                      
                      <span className="relative flex items-center justify-center gap-3 drop-shadow-md z-10">
                        <span className="animate-bounce" style={{ animationDelay: '0.1s' }}>🚀</span>
                        CONTRATAR AGORA
                        <div className="w-7 h-7 bg-white/80 rounded-full flex items-center justify-center text-base font-black animate-pulse">
                          →
                        </div>
                      </span>
                    </TouchButton>
                  </div>

                  {/* Enhanced Stats */}
                  <div className="grid grid-cols-2 gap-3 text-center animate-fade-in" style={{ animationDelay: '1.9s' }}>
                    {[
                      { value: 1000, label: "Clientes", suffix: "+" },
                      { value: 99, label: "Uptime", suffix: "%" },
                      { value: 20, label: "Canais", suffix: "+" },
                      { value: 24, label: "Online", suffix: "h" }
                    ].map((stat, index) => (
                      <div key={index} className="group relative bg-white/20 backdrop-blur-lg rounded-xl p-3 border border-white/40 shadow-xl hover:bg-white/30 hover:scale-110 transition-all duration-500 hover:-translate-y-1 overflow-hidden">
                        {/* Stat Glow */}
                        <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        
                        <div className="relative z-10">
                          <StatsCounter endValue={stat.value} label={stat.label} suffix={stat.suffix} />
                        </div>
                        
                        {/* Floating Sparkle */}
                        <div className="absolute top-1 right-1 w-1 h-1 bg-white/60 rounded-full opacity-0 group-hover:opacity-100 animate-ping"></div>
                      </div>
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            </div>

            {/* Desktop Version - Ultra Enhanced */}
            <div className="hidden md:block">
              <AnimatedSection animation="fade-up">
                <div className="text-center space-y-12">
                  {/* Premium Badge Desktop with Multi-layer Glow */}
                  <div className="relative inline-flex items-center animate-scale-in">
                    <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 rounded-full blur-2xl opacity-60 animate-pulse" style={{ animationDuration: '3s' }}></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-yellow-300 via-orange-300 to-red-300 rounded-full blur-xl opacity-40 animate-pulse" style={{ animationDuration: '2s', animationDelay: '1s' }}></div>
                    <div className="relative bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 text-gray-900 px-8 py-4 rounded-full shadow-2xl font-black text-base border-3 border-yellow-100">
                      <div className="flex items-center">
                        <Star className="w-5 h-5 mr-3 fill-current animate-spin" style={{ animationDuration: '4s' }} />
                        <span className="bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent tracking-wide">🔥 INTERNET + TV GRÁTIS 🔥</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Mega Enhanced Title */}
                  <div className="relative animate-fade-in" style={{ animationDelay: '0.3s' }}>
                    <h1 className="text-6xl lg:text-7xl xl:text-8xl font-black leading-tight text-white max-w-5xl mx-auto relative z-10">
                      <span className="block mb-4" style={{
                        textShadow: '6px 6px 20px rgba(0,0,0,0.9), 0 0 60px rgba(255,255,255,0.4), 0 0 120px rgba(255,165,0,0.6)',
                        letterSpacing: '2px'
                      }}>Internet + SaraivaTV</span>
                    </h1>
                    
                    {/* Multiple Title Glow Layers */}
                    <div className="absolute inset-0 text-6xl lg:text-7xl xl:text-8xl font-black leading-tight pointer-events-none">
                      <span className="block text-transparent bg-gradient-to-r from-orange-300/50 to-yellow-300/50 bg-clip-text mb-4 blur-md">Internet + SaraivaTV</span>
                    </div>
                    <div className="absolute inset-0 text-6xl lg:text-7xl xl:text-8xl font-black leading-tight pointer-events-none">
                      <span className="block text-transparent bg-gradient-to-r from-white/30 to-orange-200/30 bg-clip-text mb-4 blur-sm">Internet + SaraivaTV</span>
                    </div>
                  </div>
                  
                  {/* Enhanced Subtitle Desktop */}
                  <div className="relative animate-fade-in" style={{ animationDelay: '0.6s' }}>
                    <p className="text-2xl lg:text-3xl text-white/95 font-bold max-w-3xl mx-auto relative z-10" style={{
                      textShadow: '3px 3px 12px rgba(0,0,0,0.8), 0 0 30px rgba(255,255,255,0.3)',
                      letterSpacing: '1px'
                    }}>
                      🚀 Internet mais rápida + App GRATUITO!
                    </p>
                    <div className="absolute inset-0 text-2xl lg:text-3xl font-bold text-transparent bg-gradient-to-r from-white/25 to-orange-200/25 bg-clip-text blur-sm pointer-events-none">
                      🚀 Internet mais rápida + App GRATUITO!
                    </div>
                  </div>

                  {/* Ultra Premium Cards Desktop */}
                  <div className="grid grid-cols-4 gap-8 max-w-5xl mx-auto animate-scale-in" style={{ animationDelay: '0.9s' }}>
                    {[
                      { icon: Wifi, text: "Internet ULTRA", colors: "from-orange-500/80 to-red-500/70", borderColor: "border-orange-300/50", iconBg: "from-orange-100 to-orange-200", iconColor: "text-orange-600" },
                      { icon: Tv, text: "TV Premium", colors: "from-blue-500/80 to-purple-500/70", borderColor: "border-blue-300/50", iconBg: "from-blue-100 to-blue-200", iconColor: "text-blue-600" },
                      { icon: Music, text: "Rádios 24h", colors: "from-green-500/80 to-emerald-500/70", borderColor: "border-green-300/50", iconBg: "from-green-100 to-green-200", iconColor: "text-green-600" },
                      { icon: Shield, text: "Suporte VIP", colors: "from-purple-500/80 to-pink-500/70", borderColor: "border-purple-300/50", iconBg: "from-purple-100 to-purple-200", iconColor: "text-purple-600" }
                    ].map((card, index) => (
                      <div key={index} className={`group relative bg-gradient-to-br ${card.colors} backdrop-blur-2xl rounded-3xl p-8 flex flex-col items-center space-y-4 border-2 ${card.borderColor} shadow-2xl hover:shadow-3xl transform hover:scale-125 hover:-translate-y-4 transition-all duration-700 hover:rotate-3 animate-slide-in-left overflow-hidden`} style={{ animationDelay: `${1.2 + index * 0.15}s` }}>
                        {/* Card Background Glow */}
                        <div className="absolute inset-0 bg-gradient-to-br from-white/25 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                        
                        {/* Multiple Floating Sparkles */}
                        <div className="absolute top-3 right-3 w-2 h-2 bg-white/70 rounded-full opacity-0 group-hover:opacity-100 animate-ping" style={{ animationDelay: '0.3s' }}></div>
                        <div className="absolute bottom-4 left-4 w-1.5 h-1.5 bg-white/50 rounded-full opacity-0 group-hover:opacity-100 animate-ping" style={{ animationDelay: '0.8s' }}></div>
                        <div className="absolute top-1/2 right-2 w-1 h-1 bg-white/60 rounded-full opacity-0 group-hover:opacity-100 animate-ping" style={{ animationDelay: '1.2s' }}></div>
                        
                        <div className={`w-16 h-16 bg-gradient-to-br ${card.iconBg} rounded-2xl flex items-center justify-center shadow-2xl group-hover:shadow-3xl group-hover:scale-130 transition-all duration-700 group-hover:rotate-12 border-2 border-white/40 relative z-10`}>
                          <card.icon className={`w-8 h-8 ${card.iconColor} group-hover:scale-125 transition-transform duration-500`} />
                        </div>
                        <span className="font-black text-base text-white text-center drop-shadow-xl relative z-10 group-hover:scale-110 transition-transform duration-500">{card.text}</span>
                      </div>
                    ))}
                  </div>

                  {/* Mega Premium Button Desktop */}
                  <div className="relative animate-scale-in" style={{ animationDelay: '1.6s' }}>
                    <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 rounded-3xl blur-2xl opacity-60 animate-pulse" style={{ animationDuration: '3s' }}></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-yellow-300 via-orange-400 to-red-400 rounded-3xl blur-xl opacity-40 animate-pulse" style={{ animationDuration: '2s', animationDelay: '1s' }}></div>
                    <TouchButton 
                      onClick={handleWhatsAppClick} 
                      className="relative bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 hover:from-yellow-300 hover:via-orange-400 hover:to-red-400 text-gray-900 px-16 py-6 rounded-3xl font-black text-2xl shadow-2xl border-3 border-yellow-100 transform hover:scale-125 hover:-translate-y-2 transition-all duration-500 overflow-hidden group"
                    >
                      {/* Multiple Shine Effects */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/60 to-transparent translate-x-[-300%] group-hover:translate-x-[300%] transition-transform duration-1200"></div>
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent translate-x-[-300%] group-hover:translate-x-[300%] transition-transform duration-1000" style={{ animationDelay: '0.2s' }}></div>
                      
                      <span className="relative flex items-center justify-center gap-4 drop-shadow-xl z-10">
                        <span className="animate-bounce text-3xl" style={{ animationDelay: '0.1s' }}>🚀</span>
                        CONTRATAR AGORA
                        <div className="w-10 h-10 bg-white/90 rounded-full flex items-center justify-center text-xl font-black animate-pulse shadow-lg">
                          →
                        </div>
                      </span>
                    </TouchButton>
                  </div>

                  {/* Ultra Enhanced Stats Desktop */}
                  <div className="flex justify-center gap-12 text-center max-w-4xl mx-auto animate-fade-in" style={{ animationDelay: '1.9s' }}>
                    {[
                      { value: 1000, label: "Clientes", suffix: "+" },
                      { value: 99, label: "Uptime", suffix: "%" },
                      { value: 20, label: "Canais", suffix: "+" },
                      { value: 24, label: "Online", suffix: "h" }
                    ].map((stat, index) => (
                      <div key={index} className="group relative bg-white/20 backdrop-blur-xl rounded-2xl p-6 border-2 border-white/40 shadow-2xl hover:bg-white/30 hover:scale-125 transition-all duration-700 hover:-translate-y-2 overflow-hidden">
                        {/* Stat Background Glow */}
                        <div className="absolute inset-0 bg-gradient-to-br from-white/15 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                        
                        <div className="relative z-10">
                          <StatsCounter endValue={stat.value} label={stat.label} suffix={stat.suffix} />
                        </div>
                        
                        {/* Multiple Floating Sparkles */}
                        <div className="absolute top-2 right-2 w-2 h-2 bg-white/70 rounded-full opacity-0 group-hover:opacity-100 animate-ping"></div>
                        <div className="absolute bottom-2 left-2 w-1.5 h-1.5 bg-white/50 rounded-full opacity-0 group-hover:opacity-100 animate-ping" style={{ animationDelay: '0.5s' }}></div>
                      </div>
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* Plans Section - CLEAN PREMIUM */}
      <section id="planos" className="relative overflow-hidden py-16 px-4" style={{background: 'linear-gradient(135deg, #1f2937 0%, #374151 30%, #4b5563 70%, #6b7280 100%)'}}>
        {/* Background Effects */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-full h-full" style={{
            backgroundImage: `
              radial-gradient(circle at 30% 30%, rgba(255,165,0,0.3) 2px, transparent 2px),
              radial-gradient(circle at 70% 70%, rgba(255,100,0,0.2) 2px, transparent 2px)
            `,
            backgroundSize: '80px 80px, 60px 60px'
          }}></div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-10 right-10 w-64 h-64 bg-gradient-to-br from-orange-500/30 to-red-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '8s' }}></div>
        <div className="absolute bottom-10 left-10 w-48 h-48 bg-gradient-to-tr from-orange-500/20 to-yellow-500/30 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '10s', animationDelay: '2s' }}></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <AnimatedSection animation="fade-up">
            <div className="text-center mb-16">
              <div className="inline-flex items-center bg-orange-500/90 text-white px-6 py-3 rounded-full text-base font-bold mb-8 border border-orange-400 shadow-lg">
                <Award className="w-5 h-5 mr-3" />
                <span>Plano Exclusivo para Você</span>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6" style={{textShadow: '2px 2px 8px rgba(0,0,0,0.8)'}}>
                Internet + SaraivaTV
              </h2>
              <p className="text-lg md:text-xl lg:text-2xl text-orange-100 mb-8 max-w-4xl mx-auto leading-relaxed font-medium">
                O plano completo que vai transformar sua experiência digital
              </p>
              <div className="inline-flex items-center bg-green-500/90 text-white px-6 py-3 rounded-full font-bold text-base shadow-lg">
                🎉 Oferta especial: 3 meses com desconto!
              </div>
            </div>
          </AnimatedSection>

          {/* Plan Card Premium Dark */}
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl shadow-2xl overflow-hidden border-2 border-orange-500/50 hover:scale-105 transform transition-all duration-500 hover:shadow-orange-500/25 group relative">
            <div className="bg-gradient-to-r from-orange-500 via-orange-600 to-red-500 p-6 text-white text-center group-hover:from-orange-400 group-hover:via-orange-500 group-hover:to-red-400 transition-all duration-500 relative z-10">
              <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 border border-white/30">
                <Wifi className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-2" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}>Plano Completo</h3>
              <div className="text-4xl font-bold mb-2" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}>300MB</div>
              <div className="text-base opacity-95 font-medium">Fibra Óptica + SaraivaTV Grátis</div>
            </div>

            <div className="p-6 relative z-10">
              <div className="grid lg:grid-cols-2 gap-6 items-center">
                <div className="text-center lg:text-left">
                  <div className="mb-6">
                    <div className="text-base text-gray-400 line-through mb-2">De R$ 169,90</div>
                    <div className="text-4xl font-bold text-orange-400 mb-2 group-hover:text-orange-300 transition-colors duration-300">
                      R$ 129<span className="text-2xl">,90</span>
                    </div>
                    <div className="text-base text-gray-300">por mês</div>
                  </div>

                  <div className="bg-green-900/50 p-4 rounded-xl mb-6 border border-green-700 shadow-sm">
                    <div className="text-green-300 font-bold mb-1 text-sm">💰 Economia de R$ 120 nos primeiros 3 meses!</div>
                    <div className="text-green-400 text-xs">Promoção válida para novos clientes</div>
                  </div>

                  <TouchButton onClick={handleWhatsAppClick} className="w-full lg:w-auto bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-400 hover:to-red-400 text-white font-bold py-3 px-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
                    🚀 Contratar Agora →
                  </TouchButton>
                </div>

                <div>
                  <h4 className="text-xl font-bold text-white mb-6" style={{textShadow: '2px 2px 4px rgba(0,0,0,0.8)'}}>
                    Tudo que você precisa:
                  </h4>
                  <div className="space-y-3">
                    {[{
                    icon: Wifi,
                    text: "Internet 300MB fibra óptica ultrarrápida"
                  }, {
                    icon: Tv,
                    text: "App SaraivaTV Premium totalmente grátis"
                  }, {
                    icon: Smartphone,
                    text: "Assista TV direto no seu celular"
                  }, {
                    icon: Music,
                    text: "Rádios nacionais e locais incluídas"
                  }, {
                    icon: Shield,
                    text: "Suporte técnico 24h todos os dias"
                  }, {
                    icon: Zap,
                    text: "Velocidade garantida por contrato"
                  }, {
                    icon: CheckCircle,
                    text: "Instalação profissional (taxa única R$ 149,90)"
                  }, {
                    icon: Heart,
                    text: "Contrato de 12 meses"
                  }].map((feature, index) => <div key={index} className="flex items-center space-x-3 p-3 bg-gray-700/50 rounded-lg border border-gray-600 hover:border-orange-400 hover:bg-gray-600/50 transition-all duration-300 hover:scale-105 transform touch-manipulation">
                        <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg">
                          <feature.icon className="w-4 h-4 text-white" />
                        </div>
                        <span className="font-semibold text-gray-100 text-sm">{feature.text}</span>
                      </div>)}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <div className="glass-premium rounded-3xl p-8 text-white shadow-2xl glow relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 via-red-500/30 to-orange-500/20 animate-pulse"></div>
              <h3 className="text-2xl font-bold mb-4 relative z-10" style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.8)' }}>Não Perca Esta Oportunidade!</h3>
              <p className="text-base mb-6 opacity-90 max-w-2xl mx-auto relative z-10">
                Conecte-se com a melhor internet de Eliseu Martins e ganhe o SaraivaTV de presente.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center relative z-10">
                <TouchButton onClick={handleWhatsAppClick} className="bg-white text-orange-600 hover:bg-gray-100 px-6 py-3 font-bold rounded-xl btn-3d glow transition-all duration-300">
                  💬 WhatsApp
                </TouchButton>
                <TouchButton className="bg-white text-orange-600 hover:bg-orange-50 border-2 border-white px-6 py-3 font-bold rounded-xl btn-3d glow transition-all duration-300">
                  📞 Ligar Agora
                </TouchButton>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Coverage Area */}
      <AnimatedSection className="py-16 bg-gradient-to-br from-blue-600 via-purple-600 to-orange-500 text-white">
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

      {/* Contact Section - ULTRA PREMIUM */}
      <section id="contato" className="py-16 px-4 relative overflow-hidden" style={{background: 'linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)'}}>
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/60"></div>
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-full h-full" style={{
            backgroundImage: `
              radial-gradient(circle at 25% 25%, rgba(255,255,255,0.4) 2px, transparent 2px),
              radial-gradient(circle at 75% 75%, rgba(255,255,255,0.3) 2px, transparent 2px),
              linear-gradient(45deg, transparent 45%, rgba(255,255,255,0.1) 50%, transparent 55%)
            `,
            backgroundSize: '70px 70px, 50px 50px, 120px 120px'
          }}></div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 right-20 w-72 h-72 bg-gradient-to-br from-blue-300/40 to-purple-300/30 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '7s' }}></div>
        <div className="absolute bottom-20 left-20 w-56 h-56 bg-gradient-to-tr from-pink-300/30 to-blue-300/40 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '9s', animationDelay: '2s' }}></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center glass-premium text-white px-4 py-2.5 rounded-full text-sm font-bold mb-6 border border-white/50 glow relative overflow-hidden">
              <Phone className="w-4 h-4 mr-2" />
              <span>Fale Conosco</span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer"></div>
            </div>
            <h2 className="text-5xl font-bold text-white mb-4 relative" style={{
              textShadow: '3px 3px 12px rgba(0,0,0,0.9), 0 0 30px rgba(255,255,255,0.3)',
              letterSpacing: '1px'
            }}>
              Entre em Contato
              <div className="absolute inset-0 text-5xl font-bold text-transparent bg-gradient-to-r from-white/30 to-blue-200/30 bg-clip-text blur-sm pointer-events-none">
                Entre em Contato
              </div>
            </h2>
            <p className="text-xl text-white/90 font-medium leading-relaxed">
              Estamos aqui para ajudar! Entre em contato conosco e descubra como podemos 
              conectar você ao mundo digital.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="p-8 glass-premium hover:bg-white/25 transition-all duration-300 transform hover:scale-105 glow border border-white/20 relative overflow-hidden touch-manipulation">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer"></div>
              <div className="flex items-center space-x-4 mb-4 relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center shadow-lg glow">
                  <Phone className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white glow">Telefone</h3>
                  <p className="text-white/90 text-lg font-medium">(89) 99439-5789</p>
                  <p className="text-sm text-white/70">WhatsApp disponível</p>
                </div>
              </div>
            </Card>

            <Card className="p-8 glass-premium hover:bg-white/25 transition-all duration-300 transform hover:scale-105 glow border border-white/20 relative overflow-hidden touch-manipulation">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer"></div>
              <div className="flex items-center space-x-4 mb-4 relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center shadow-lg glow">
                  <MapPin className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white glow">Endereço</h3>
                  <p className="text-white/90 text-lg font-medium">Rua Fernando Silva, Centro</p>
                  <p className="text-sm text-white/70">Eliseu Martins - PI</p>
                </div>
              </div>
            </Card>

            <Card className="p-8 glass-premium hover:bg-white/25 transition-all duration-300 transform hover:scale-105 glow border border-white/20 relative overflow-hidden touch-manipulation">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer"></div>
              <div className="flex items-center space-x-4 mb-4 relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center shadow-lg glow">
                  <Clock className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white glow">Horário</h3>
                  <p className="text-white/90 text-lg font-medium">Segunda a Sábado</p>
                  <p className="text-sm text-white/70">8h às 18h</p>
                </div>
              </div>
            </Card>
          </div>

          <div className="text-center">
            <div className="glass-premium rounded-3xl p-8 glow relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer"></div>
              <h3 className="text-2xl font-bold text-white mb-4 relative z-10" style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.8)' }}>
                🚀 Pronto para se conectar?
              </h3>
              <p className="text-white/90 mb-6 text-lg relative z-10">
                Entre em contato agora e ganhe o SaraivaTV grátis!
              </p>
              <TouchButton onClick={handleWhatsAppClick} className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-4 text-lg font-bold rounded-2xl shadow-2xl transform hover:scale-110 transition-all duration-300 btn-3d glow relative z-10">
                💬 Falar no WhatsApp
              </TouchButton>
            </div>
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
                <li><a href="#inicio" onClick={e => handleSmoothScroll(e, 'inicio')} className="text-gray-300 hover:text-orange-400 transition-colors text-lg">Início</a></li>
                <li><a href="#planos" onClick={e => handleSmoothScroll(e, 'planos')} className="text-gray-300 hover:text-orange-400 transition-colors text-lg">Planos</a></li>
                <li><a href="#cobertura" onClick={e => handleSmoothScroll(e, 'cobertura')} className="text-gray-300 hover:text-orange-400 transition-colors text-lg">Cobertura</a></li>
                <li><a href="#sobre" onClick={e => handleSmoothScroll(e, 'sobre')} className="text-gray-300 hover:text-orange-400 transition-colors text-lg">Sobre Nós</a></li>
                <li><a href="#contato" onClick={e => handleSmoothScroll(e, 'contato')} className="text-gray-300 hover:text-orange-400 transition-colors text-lg">Contato</a></li>
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
