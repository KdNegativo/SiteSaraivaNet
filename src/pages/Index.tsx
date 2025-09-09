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
import { Link } from "react-router-dom";

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
      <header style={{background: '#ff6600', borderBottomColor: '#ff4400'}} className="fixed top-0 left-0 right-0 shadow-xl px-4 py-3 border-b-4 z-50">
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

      {/* Hero Section - Ultra Refined & Luxurious */}
      <section id="inicio" className="relative overflow-hidden min-h-screen flex items-center" style={{
        background: `
          linear-gradient(135deg, 
            hsl(18 100% 52%) 0%, 
            hsl(15 95% 48%) 15%, 
            hsl(12 90% 45%) 35%, 
            hsl(8 85% 40%) 55%, 
            hsl(5 80% 35%) 75%, 
            hsl(2 75% 30%) 100%
          )
        `
      }}>
        
        {/* Ultra Sophisticated Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/20 via-transparent to-black/40"></div>
        <div className="absolute inset-0" style={{
          backgroundImage: `
            radial-gradient(circle at 20% 30%, rgba(255,255,255,0.12) 2px, transparent 2px),
            radial-gradient(circle at 80% 70%, rgba(255,255,255,0.08) 1px, transparent 1px),
            radial-gradient(circle at 60% 20%, rgba(255,165,0,0.06) 3px, transparent 3px),
            linear-gradient(45deg, transparent 25%, rgba(255,255,255,0.03) 50%, transparent 75%),
            conic-gradient(from 45deg at 50% 50%, transparent 0deg, rgba(255,140,0,0.04) 90deg, transparent 180deg)
          `,
          backgroundSize: '120px 120px, 80px 80px, 200px 200px, 150px 150px, 300px 300px'
        }}></div>
        
        {/* Luxury Mesh Gradient Overlay */}
        <div className="absolute inset-0" style={{
          background: `
            radial-gradient(ellipse 800px 600px at 50% 20%, rgba(255, 180, 0, 0.08) 0%, transparent 50%),
            radial-gradient(ellipse 600px 800px at 20% 80%, rgba(255, 100, 0, 0.06) 0%, transparent 50%),
            radial-gradient(ellipse 400px 400px at 80% 40%, rgba(255, 200, 100, 0.05) 0%, transparent 50%)
          `
        }}></div>
        
        {/* Ultra Luxury Floating Elements */}
        {!prefersReducedMotion && (
          <div className="absolute inset-0">
            <div className="absolute top-16 right-16 w-[500px] h-[500px] opacity-60" style={{
              background: 'radial-gradient(circle, rgba(255, 180, 0, 0.15) 0%, rgba(255, 140, 0, 0.1) 40%, transparent 70%)',
              filter: 'blur(60px)',
              animation: 'float 12s ease-in-out infinite'
            }}></div>
            <div className="absolute bottom-16 left-16 w-[400px] h-[400px] opacity-50" style={{
              background: 'radial-gradient(circle, rgba(255, 100, 0, 0.12) 0%, rgba(255, 69, 0, 0.08) 40%, transparent 70%)',
              filter: 'blur(50px)',
              animation: 'float 15s ease-in-out infinite',
              animationDelay: '4s'
            }}></div>
            <div className="absolute top-1/3 left-1/2 w-[300px] h-[300px] opacity-40" style={{
              background: 'radial-gradient(circle, rgba(255, 215, 0, 0.1) 0%, rgba(255, 165, 0, 0.06) 40%, transparent 70%)',
              filter: 'blur(40px)',
              animation: 'float 18s ease-in-out infinite',
              animationDelay: '7s'
            }}></div>
            <div className="absolute top-3/4 right-1/3 w-[350px] h-[350px] opacity-35" style={{
              background: 'radial-gradient(circle, rgba(255, 140, 0, 0.08) 0%, rgba(255, 99, 71, 0.05) 40%, transparent 70%)',
              filter: 'blur(45px)',
              animation: 'float 20s ease-in-out infinite',
              animationDelay: '10s'
            }}></div>
          </div>
        )}
        
        {/* Main Content */}
        <div className="relative z-10 w-full px-6 py-12">
          <div className="max-w-6xl mx-auto">
            
            {/* Mobile Version */}
            <div className="md:hidden">
              <AnimatedSection animation="fade-up">
                <div className="text-center space-y-10">
                  {/* Ultra Elegant Badge */}
                  <div className="inline-flex items-center px-6 py-4 rounded-full font-bold text-base shadow-2xl border-2 border-yellow-200/60" style={{
                    background: 'linear-gradient(135deg, #ffd700 0%, #ffb347 20%, #ff8c42 40%, #ff6600 60%, #ff4500 100%)',
                    boxShadow: '0 20px 40px -8px rgba(255, 102, 0, 0.4), 0 0 0 1px rgba(255, 255, 255, 0.2), inset 0 2px 4px rgba(255, 255, 255, 0.3)'
                  }}>
                    <Star className="w-5 h-5 mr-3 fill-current text-white animate-pulse drop-shadow-xl" />
                    <span className="text-white font-black tracking-wide drop-shadow-lg">🔥 Internet + TV Grátis</span>
                  </div>
                  
                  {/* Ultra Luxurious Title */}
                  <h1 className="text-5xl font-black leading-tight text-white max-w-2xl mx-auto font-playfair">
                    <span className="block mb-3" style={{
                      textShadow: '6px 6px 20px rgba(0,0,0,0.9), 0 0 60px rgba(255,255,255,0.6), 0 0 100px rgba(255,165,0,0.5)',
                      background: 'linear-gradient(135deg, #ffffff 0%, #fff8f0 50%, #ffffff 100%)',
                      WebkitBackgroundClip: 'text',
                      backgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      filter: 'drop-shadow(2px 2px 8px rgba(0,0,0,0.8))'
                    }}>Internet</span>
                    <span className="block" style={{
                      textShadow: '6px 6px 20px rgba(0,0,0,0.9), 0 0 60px rgba(255,255,255,0.6), 0 0 100px rgba(255,165,0,0.5)',
                      background: 'linear-gradient(135deg, #ffffff 0%, #fff8f0 50%, #ffffff 100%)',
                      WebkitBackgroundClip: 'text',
                      backgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      filter: 'drop-shadow(2px 2px 8px rgba(0,0,0,0.8))'
                    }}>+ SaraivaTV</span>
                  </h1>
                  
                  {/* Ultra Elegant Subtitle */}
                  <p className="text-xl text-white/95 font-semibold max-w-xl mx-auto" style={{
                    textShadow: '3px 3px 12px rgba(0,0,0,0.7)',
                    filter: 'drop-shadow(0 0 20px rgba(255,255,255,0.3))'
                  }}>
                    🚀 Internet ultrarrápida + App gratuito
                  </p>

                  {/* Ultra Beautiful Cards */}
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { icon: Wifi, text: "Internet ULTRA", gradient: "from-orange-500/90 to-red-500/80", shadow: "rgba(255, 102, 0, 0.4)" },
                      { icon: Tv, text: "TV Premium", gradient: "from-blue-500/90 to-purple-500/80", shadow: "rgba(59, 130, 246, 0.4)" },
                      { icon: Music, text: "Rádios 24h", gradient: "from-green-500/90 to-emerald-500/80", shadow: "rgba(34, 197, 94, 0.4)" },
                      { icon: Shield, text: "Suporte VIP", gradient: "from-purple-500/90 to-pink-500/80", shadow: "rgba(147, 51, 234, 0.4)" }
                    ].map((card, index) => (
                      <div key={index} 
                        className={`bg-gradient-to-br ${card.gradient} backdrop-blur-2xl rounded-3xl p-6 flex flex-col items-center space-y-4 border-2 border-white/50 shadow-2xl hover:scale-110 hover:-translate-y-3 transition-all duration-700 hover:rotate-1`}
                        style={{
                          boxShadow: `0 25px 50px -12px ${card.shadow}, 0 0 0 1px rgba(255, 255, 255, 0.1), inset 0 2px 4px rgba(255, 255, 255, 0.2)`
                        }}
                      >
                        <div 
                          className="w-14 h-14 bg-white/40 backdrop-blur-sm rounded-2xl flex items-center justify-center shadow-2xl hover:rotate-12 hover:scale-110 transition-all duration-500"
                          style={{
                            boxShadow: '0 10px 25px -5px rgba(255, 255, 255, 0.3), inset 0 2px 4px rgba(255, 255, 255, 0.4)'
                          }}
                        >
                          <card.icon className="w-7 h-7 text-white drop-shadow-lg" />
                        </div>
                        <span className="font-black text-sm text-white text-center drop-shadow-2xl tracking-wide">{card.text}</span>
                      </div>
                    ))}
                  </div>

                  {/* Ultra Beautiful Button */}
                  <TouchButton 
                    onClick={handleWhatsAppClick} 
                    className="w-full px-8 py-5 rounded-2xl font-black text-lg shadow-2xl border-3 hover:scale-110 hover:-translate-y-3 transition-all duration-700 relative overflow-hidden"
                    style={{
                      background: 'linear-gradient(135deg, #ffd700 0%, #ffb347 15%, #ff8c42 30%, #ff6600 50%, #ff4500 70%, #ff2500 100%)',
                      boxShadow: '0 25px 50px -12px rgba(255, 102, 0, 0.6), 0 0 0 2px rgba(255, 255, 255, 0.3), inset 0 2px 4px rgba(255, 255, 255, 0.4)',
                      color: '#1a1a1a'
                    }}
                  >
                    <span className="relative z-10 font-black tracking-wider drop-shadow-lg">🚀 Contratar Agora</span>
                    <div 
                      className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-500"
                      style={{
                        background: 'linear-gradient(135deg, #fff 0%, #ffeb3b 25%, #ffc107 50%, #ff9800 75%, #ff5722 100%)',
                      }}
                    />
                  </TouchButton>

                  {/* Ultra Elegant Stats */}
                  <div className="grid grid-cols-2 gap-4 text-center">
                    {[
                      { value: 1000, label: "Clientes", suffix: "+" },
                      { value: 99, label: "Uptime", suffix: "%" },
                      { value: 20, label: "Canais", suffix: "+" },
                      { value: 24, label: "Online", suffix: "h" }
                    ].map((stat, index) => (
                      <div key={index} 
                        className="backdrop-blur-2xl rounded-2xl p-4 border-2 border-white/40 shadow-2xl hover:scale-105 hover:-translate-y-1 transition-all duration-500"
                        style={{
                          background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.25), rgba(255, 255, 255, 0.15))',
                          boxShadow: '0 20px 40px -8px rgba(255, 255, 255, 0.1), 0 0 0 1px rgba(255, 255, 255, 0.2), inset 0 2px 4px rgba(255, 255, 255, 0.3)'
                        }}
                      >
                        <StatsCounter endValue={stat.value} label={stat.label} suffix={stat.suffix} />
                      </div>
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            </div>

            {/* Desktop Version - Ultra Luxury */}
            <div className="hidden md:block">
              <AnimatedSection animation="fade-up">
                <div className="text-center space-y-16">
                  {/* Ultra Elegant Badge Desktop */}
                  <div className="inline-flex items-center px-10 py-5 rounded-full font-bold text-xl shadow-2xl border-3 border-yellow-200/70" style={{
                    background: 'linear-gradient(135deg, #ffd700 0%, #ffb347 15%, #ff8c42 30%, #ff6600 50%, #ff4500 70%, #ff2500 100%)',
                    boxShadow: '0 25px 50px -12px rgba(255, 102, 0, 0.5), 0 0 0 2px rgba(255, 255, 255, 0.3), inset 0 2px 4px rgba(255, 255, 255, 0.4)'
                  }}>
                    <Star className="w-6 h-6 mr-4 fill-current text-white animate-pulse drop-shadow-xl" />
                    <span className="text-white font-black tracking-wide drop-shadow-lg">🔥 Internet + TV Grátis</span>
                  </div>
                  
                  {/* Ultra Sophisticated Title */}
                  <h1 className="text-7xl lg:text-8xl font-black leading-tight text-white max-w-5xl mx-auto font-playfair">
                    <span className="block mb-6" style={{
                      textShadow: '8px 8px 30px rgba(0,0,0,0.9), 0 0 80px rgba(255,255,255,0.7), 0 0 120px rgba(255,165,0,0.6)',
                      background: 'linear-gradient(135deg, #ffffff 0%, #fff8f0 25%, #fff0e0 50%, #fff8f0 75%, #ffffff 100%)',
                      WebkitBackgroundClip: 'text',
                      backgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      filter: 'drop-shadow(4px 4px 16px rgba(0,0,0,0.8))'
                    }}>Internet + SaraivaTV</span>
                  </h1>
                  
                  {/* Ultra Beautiful Subtitle */}
                  <p className="text-3xl lg:text-4xl text-white/95 font-semibold max-w-4xl mx-auto" style={{
                    textShadow: '4px 4px 16px rgba(0,0,0,0.7)',
                    filter: 'drop-shadow(0 0 30px rgba(255,255,255,0.4))'
                  }}>
                    🚀 Internet ultrarrápida + App gratuito
                  </p>

                  {/* Ultra Stunning Desktop Cards */}
                  <div className="grid grid-cols-4 gap-10 max-w-6xl mx-auto">
                    {[
                      { icon: Wifi, text: "Internet ULTRA", gradient: "from-orange-500/90 to-red-500/80", shadow: "rgba(255, 102, 0, 0.4)" },
                      { icon: Tv, text: "TV Premium", gradient: "from-blue-500/90 to-purple-500/80", shadow: "rgba(59, 130, 246, 0.4)" },
                      { icon: Music, text: "Rádios 24h", gradient: "from-green-500/90 to-emerald-500/80", shadow: "rgba(34, 197, 94, 0.4)" },
                      { icon: Shield, text: "Suporte VIP", gradient: "from-purple-500/90 to-pink-500/80", shadow: "rgba(147, 51, 234, 0.4)" }
                    ].map((card, index) => (
                      <div key={index} 
                        className={`bg-gradient-to-br ${card.gradient} backdrop-blur-2xl rounded-4xl p-12 flex flex-col items-center space-y-6 border-2 border-white/60 shadow-2xl hover:scale-115 hover:-translate-y-4 transition-all duration-700 hover:rotate-2`}
                        style={{
                          boxShadow: `0 30px 60px -15px ${card.shadow}, 0 0 0 1px rgba(255, 255, 255, 0.15), inset 0 2px 4px rgba(255, 255, 255, 0.25)`
                        }}
                      >
                        <div 
                          className="w-24 h-24 bg-white/45 backdrop-blur-sm rounded-4xl flex items-center justify-center shadow-2xl hover:rotate-12 hover:scale-110 transition-all duration-500"
                          style={{
                            boxShadow: '0 15px 35px -8px rgba(255, 255, 255, 0.4), inset 0 2px 4px rgba(255, 255, 255, 0.5)'
                          }}
                        >
                          <card.icon className="w-10 h-10 text-white drop-shadow-xl" />
                        </div>
                        <span className="font-black text-2xl text-white text-center drop-shadow-2xl tracking-wide">{card.text}</span>
                      </div>
                    ))}
                  </div>

                  {/* Ultra Stunning Desktop Button */}
                  <TouchButton 
                    onClick={handleWhatsAppClick} 
                    className="px-20 py-8 rounded-3xl font-black text-3xl shadow-2xl border-3 hover:scale-115 hover:-translate-y-4 transition-all duration-700 relative overflow-hidden"
                    style={{
                      background: 'linear-gradient(135deg, #ffd700 0%, #ffb347 10%, #ff8c42 25%, #ff6600 45%, #ff4500 65%, #ff2500 85%, #e91e63 100%)',
                      boxShadow: '0 30px 60px -15px rgba(255, 102, 0, 0.7), 0 0 0 3px rgba(255, 255, 255, 0.4), inset 0 3px 6px rgba(255, 255, 255, 0.5)',
                      color: '#1a1a1a'
                    }}
                  >
                    <span className="relative z-10 font-black tracking-wider drop-shadow-xl">🚀 Contratar Agora</span>
                    <div 
                      className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-700"
                      style={{
                        background: 'linear-gradient(135deg, #fff 0%, #ffeb3b 15%, #ffc107 35%, #ff9800 55%, #ff5722 75%, #e91e63 100%)',
                      }}
                    />
                  </TouchButton>

                  {/* Ultra Beautiful Desktop Stats */}
                  <div className="flex justify-center gap-16 text-center max-w-4xl mx-auto">
                    {[
                      { value: 1000, label: "Clientes", suffix: "+" },
                      { value: 99, label: "Uptime", suffix: "%" },
                      { value: 20, label: "Canais", suffix: "+" },
                      { value: 24, label: "Online", suffix: "h" }
                    ].map((stat, index) => (
                      <div key={index} 
                        className="backdrop-blur-2xl rounded-3xl p-8 border-2 border-white/40 shadow-2xl hover:scale-110 hover:-translate-y-2 transition-all duration-700"
                        style={{
                          background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.25), rgba(255, 255, 255, 0.15))',
                          boxShadow: '0 25px 50px -12px rgba(255, 255, 255, 0.15), 0 0 0 1px rgba(255, 255, 255, 0.2), inset 0 2px 4px rgba(255, 255, 255, 0.3)'
                        }}
                      >
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

      {/* Plans Section - Clean & Beautiful */}
      <section id="planos" className="relative overflow-hidden py-20 px-4" style={{background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 25%, #0f3460 50%, #0e4b82 75%, #0d5aa7 100%)'}}>
        
        {/* Sophisticated Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/8 via-transparent to-blue-500/8"></div>
        
        {/* Elegant Floating Elements */}
        {!prefersReducedMotion && (
          <div className="absolute inset-0">
            <div className="absolute top-20 right-20 w-64 h-64 bg-orange-400/15 rounded-full blur-3xl animate-float" style={{ animationDuration: '10s' }}></div>
            <div className="absolute bottom-20 left-20 w-80 h-80 bg-blue-400/12 rounded-full blur-3xl animate-float" style={{ animationDuration: '12s', animationDelay: '3s' }}></div>
            <div className="absolute top-1/3 right-1/3 w-48 h-48 bg-purple-400/10 rounded-full blur-3xl animate-float" style={{ animationDuration: '8s', animationDelay: '6s' }}></div>
          </div>
        )}
        
        <div className="max-w-6xl mx-auto relative z-10">
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
        <div className="container mx-auto px-4">
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
        <div className="max-w-7xl mx-auto text-center">
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

      {/* About Section - Simplified */}
      <section id="sobre" className="py-16 px-4 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-6xl mx-auto">
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
        <div className="max-w-6xl mx-auto">
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
