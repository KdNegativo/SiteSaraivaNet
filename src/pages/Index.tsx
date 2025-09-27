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
    <div className="min-h-screen relative overflow-hidden">
      {/* Fundo Dinâmico Colorido - Bem Visível */}
      <div className="fixed inset-0 -z-10">
        {/* Gradiente base usando design system */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-accent to-secondary opacity-95 animate-gradient-x"></div>
        
        {/* Camada adicional para mais profundidade */}
        <div className="absolute inset-0 bg-gradient-to-tr from-orange-400/60 via-red-400/40 to-yellow-400/50 animate-pulse"></div>
        
        {/* Efeitos visuais animados */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-32 h-32 bg-orange-300/30 rounded-full animate-float"></div>
          <div className="absolute top-60 right-40 w-24 h-24 bg-red-300/30 rounded-full animate-bounce delay-500"></div>
          <div className="absolute bottom-40 left-60 w-20 h-20 bg-yellow-300/30 rounded-full animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 right-20 w-16 h-16 bg-orange-400/25 rounded-full animate-float delay-300"></div>
        </div>
      </div>

      {/* Header */}
      <header className="relative z-50 bg-white/10 backdrop-blur-md shadow-lg border-b border-white/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <img src={saraivaLogo} alt="Saraiva Internet" className="h-12 w-auto" />
            </div>
            
            <nav className="hidden md:flex space-x-8">
              <button onClick={() => handleSmoothScroll('hero')} className="text-white font-semibold hover:text-orange-200 transition-colors">
                Início
              </button>
              <button onClick={() => handleSmoothScroll('plans')} className="text-white font-semibold hover:text-orange-200 transition-colors">
                Planos
              </button>
              <button onClick={() => handleSmoothScroll('coverage')} className="text-white font-semibold hover:text-orange-200 transition-colors">
                Cobertura
              </button>
              <button onClick={() => handleSmoothScroll('contact')} className="text-white font-semibold hover:text-orange-200 transition-colors">
                Contato
              </button>
            </nav>

            <div className="hidden md:flex items-center space-x-4">
              <Button 
                onClick={handlePhoneClick}
                className="bg-white text-primary hover:bg-gray-100 font-bold px-6 py-2 transition-all duration-300 hover:scale-105"
              >
                <Phone className="w-4 h-4 mr-2" />
                Ligar Agora
              </Button>
            </div>

            <MobileNavigation />
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <AnimatedSection animation="fade-in" delay={0.2}>
            <div className="inline-flex items-center bg-white/20 backdrop-blur-md text-white px-6 py-3 rounded-full text-sm font-bold mb-8 border border-white/30">
              <Wifi className="w-4 h-4 mr-2" />
              <span>Internet de Alta Velocidade</span>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="fade-in" delay={0.4}>
            <h1 className="text-4xl md:text-7xl font-black mb-8 leading-tight">
              <span className="text-white text-shadow-lg">Internet </span>
              <span className="text-yellow-300 text-shadow-lg">Ultra Rápida</span>
              <br />
              <span className="text-white text-shadow-lg">Para Sua </span>
              <span className="text-orange-200 text-shadow-lg">Casa</span>
            </h1>
          </AnimatedSection>

          <AnimatedSection animation="fade-in" delay={0.6}>
            <p className="text-xl md:text-2xl text-white mb-12 max-w-4xl mx-auto leading-relaxed font-medium text-shadow-lg">
              Planos de internet fibra óptica com velocidade real garantida. 
              <strong className="text-yellow-300"> SaraivaTV grátis</strong> em todos os planos!
            </p>
          </AnimatedSection>

          <AnimatedSection animation="scale-in" delay={0.8}>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
              <TouchButton
                onClick={handleWhatsAppClick}
                className="bg-green-600 hover:bg-green-700 text-white font-bold text-lg px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 shadow-2xl btn-3d glow"
              >
                <span className="inline-flex items-center">
                  <svg className="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                  </svg>
                  Contratar via WhatsApp
                </span>
              </TouchButton>
              
              <TouchButton
                onClick={handlePhoneClick}
                className="bg-white/20 backdrop-blur-md hover:bg-white/30 text-white font-bold text-lg px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 border-2 border-white/30 shadow-2xl"
              >
                <Phone className="w-6 h-6 mr-3 inline" />
                (89) 99439-5789
              </TouchButton>
            </div>
          </AnimatedSection>

          <HeroCarousel />
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white/10 backdrop-blur-md border-t border-white/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <StatsCounter endValue={5000} suffix="+" label="Clientes Conectados" />
            <StatsCounter endValue={99} suffix="%" label="Cobertura na Região" />
            <StatsCounter endValue={24} suffix="h" label="Suporte Técnico" />
            <StatsCounter endValue={1000} suffix="MB" label="Velocidade Máxima" />
          </div>
        </div>
      </section>

      {/* Plans Section */}
      <section id="plans" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection animation="fade-in">
            <div className="text-center mb-16">
              <div className="inline-flex items-center text-yellow-300 text-sm font-bold mb-6">
                <Wifi className="w-4 h-4 mr-2" />
                <span>Planos Disponíveis</span>
              </div>
              <h2 className="text-5xl font-black mb-6 text-white text-shadow-lg">
                Escolha Seu Plano Ideal
              </h2>
              <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed font-medium text-shadow-lg">
                Todos os planos incluem SaraivaTV grátis, instalação gratuita e Wi-Fi de alta performance!
              </p>
            </div>
          </AnimatedSection>

          <MobilePlansCarousel />
        </div>
      </section>

      {/* SaraivaTV Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-red-500/20"></div>
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
                Baixe o App SaraivaTV
              </h3>
              <p className="text-xl mb-8 opacity-95 font-medium leading-relaxed" style={{
                textShadow: '2px 2px 8px rgba(0,0,0,0.6)'
              }}>
                Disponível gratuitamente para todos os clientes Saraiva Internet. 
                <br />Transforme seu celular na sua segunda TV!
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <Button 
                  onClick={handleWhatsAppClick}
                  className="bg-white text-orange-600 hover:bg-gray-100 font-bold text-lg px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 shadow-xl"
                >
                  <Smartphone className="w-6 h-6 mr-3" />
                  Baixar App Grátis
                </Button>
                
                <Button 
                  onClick={handleWhatsAppClick}
                  className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-orange-600 font-bold text-lg px-8 py-4 rounded-full transition-all duration-300 hover:scale-105"
                >
                  <Tv className="w-6 h-6 mr-3" />
                  Contratar Internet
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      
      <ChatBot />
    </div>
  );
};

export default Index;
