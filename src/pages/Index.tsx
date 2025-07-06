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
    <div className="min-h-screen bg-gradient-to-br from-orange-400 via-red-500 to-purple-600 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-500">
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

      {/* Hero Section - Enhanced Mobile Design */}
      <section id="inicio" className="bg-gradient-to-br from-orange-500 via-red-500 to-purple-600 dark:from-gray-900 dark:via-gray-800 dark:to-gray-700 text-white px-4 py-12 relative overflow-hidden min-h-screen flex items-center">
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/20"></div>
        {!prefersReducedMotion && (
          <div className="absolute inset-0" style={{ transform: `translateY(${parallaxOffset}px)` }}>
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-orange-600/20 via-red-600/20 to-purple-700/20"></div>
            <div className="absolute top-20 right-10 w-72 h-72 bg-white/5 rounded-full blur-3xl animate-float"></div>
            <div className="absolute bottom-20 left-10 w-56 h-56 bg-orange-300/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
          </div>
        )}
        
        <div className="max-w-7xl mx-auto w-full relative z-10">
          <AnimatedSection animation="fade-up">
            <div className="text-center">
              {/* Enhanced Badge */}
              <div className="inline-flex items-center bg-gradient-to-r from-yellow-400 to-orange-400 text-gray-900 px-6 py-3 rounded-full mb-8 shadow-2xl font-bold text-sm border-2 border-yellow-300/50">
                <Star className="w-5 h-5 mr-2 fill-current" />
                <span>Internet + SaraivaTV Grátis</span>
              </div>
              
              {/* Enhanced Main Title */}
              <h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
                <span className="block text-white drop-shadow-lg">Internet</span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-orange-300 to-red-300 drop-shadow-lg">+ SaraivaTV</span>
              </h1>
              
              {/* Enhanced Subtitle */}
              <p className="text-xl mb-12 text-white/90 leading-relaxed max-w-2xl mx-auto font-medium">
                Conecte-se com nossa internet de fibra óptica ultrarrápida e ganhe acesso completo ao app SaraivaTV.
              </p>

              {/* Enhanced Feature Grid */}
              <div className="grid grid-cols-2 gap-4 mb-12 max-w-lg mx-auto">
                <div className="bg-gradient-to-br from-white/20 to-white/10 backdrop-blur-md rounded-2xl p-6 flex flex-col items-center space-y-3 border border-white/30 hover:from-white/30 hover:to-white/20 transition-all duration-300 shadow-xl">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-red-400 rounded-full flex items-center justify-center">
                    <Wifi className="w-6 h-6 text-white" />
                  </div>
                  <span className="font-bold text-base text-center text-white">Internet Ultra Rápida</span>
                </div>
                <div className="bg-gradient-to-br from-white/20 to-white/10 backdrop-blur-md rounded-2xl p-6 flex flex-col items-center space-y-3 border border-white/30 hover:from-white/30 hover:to-white/20 transition-all duration-300 shadow-xl">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full flex items-center justify-center">
                    <Tv className="w-6 h-6 text-white" />
                  </div>
                  <span className="font-bold text-base text-center text-white">Canais de TV</span>
                </div>
                <div className="bg-gradient-to-br from-white/20 to-white/10 backdrop-blur-md rounded-2xl p-6 flex flex-col items-center space-y-3 border border-white/30 hover:from-white/30 hover:to-white/20 transition-all duration-300 shadow-xl">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-emerald-400 rounded-full flex items-center justify-center">
                    <Music className="w-6 h-6 text-white" />
                  </div>
                  <span className="font-bold text-base text-center text-white">Rádios Online</span>
                </div>
                <div className="bg-gradient-to-br from-white/20 to-white/10 backdrop-blur-md rounded-2xl p-6 flex flex-col items-center space-y-3 border border-white/30 hover:from-white/30 hover:to-white/20 transition-all duration-300 shadow-xl">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full flex items-center justify-center">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <span className="font-bold text-base text-center text-white">Suporte 24h</span>
                </div>
              </div>

              {/* Enhanced CTA Button */}
              <div className="mb-12">
                <TouchButton 
                  onClick={handleWhatsAppClick} 
                  className="w-full max-w-sm mx-auto bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-10 py-5 rounded-2xl font-bold text-xl shadow-2xl border-0 transform hover:scale-105 transition-all duration-300"
                >
                  <span className="flex items-center justify-center gap-3">
                    Contratar Agora 
                    <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
                      →
                    </div>
                  </span>
                </TouchButton>
              </div>

              {/* Enhanced Stats */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center max-w-2xl mx-auto">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                  <StatsCounter endValue={1000} label="Clientes" suffix="+" />
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                  <StatsCounter endValue={99} label="Uptime" suffix="%" />
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                  <StatsCounter endValue={20} label="Canais" suffix="+" />
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                  <StatsCounter endValue={24} label="Online" suffix="h" />
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Enhanced SaraivaTV Preview Card */}
          <AnimatedSection animation="scale-in" delay={300}>
            <div className="mt-16 bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/20 shadow-2xl hover:from-white/20 hover:to-white/10 transition-all duration-500 max-w-md mx-auto">
              <div className="text-center mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-orange-400 via-red-400 to-purple-400 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-2xl">
                  <Smartphone className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-white">SaraivaTV</h3>
                <p className="text-orange-200 text-base font-medium">Seus canais favoritos no celular</p>
              </div>
              
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-gradient-to-br from-white/15 to-white/5 rounded-xl p-4 text-center border border-white/20 hover:from-white/25 hover:to-white/10 transition-all duration-300">
                  <Tv className="w-8 h-8 mx-auto mb-3 text-orange-300" />
                  <span className="text-sm font-semibold text-white">Canais de TV</span>
                </div>
                <div className="bg-gradient-to-br from-white/15 to-white/5 rounded-xl p-4 text-center border border-white/20 hover:from-white/25 hover:to-white/10 transition-all duration-300">
                  <Music className="w-8 h-8 mx-auto mb-3 text-green-300" />
                  <span className="text-sm font-semibold text-white">Rádios</span>
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
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Plans Section */}
      <section id="planos" className="bg-gradient-to-br from-gray-800 via-gray-900 to-black dark:from-gray-900 dark:via-black dark:to-gray-900 text-white px-4 py-12">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection animation="fade-up">
            <div className="text-center mb-6 md:mb-8 sm:mb-12">
              <div className="inline-flex items-center bg-gradient-to-r from-orange-600 to-red-600 text-white px-3 py-1 rounded-full text-xs font-semibold mb-3 md:mb-4">
                <Award className="w-3 h-3 mr-2" />
                Plano Exclusivo para Você
              </div>
              <h2 className="text-xl md:text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent mb-3 md:mb-4">
                Internet + SaraivaTV
              </h2>
              <p className="text-sm md:text-base sm:text-lg md:text-xl text-gray-300 mb-2 md:mb-3 max-w-3xl mx-auto leading-relaxed">
                O plano completo que vai transformar sua experiência digital
              </p>
              <div className="inline-flex items-center bg-gradient-to-r from-green-600 to-emerald-600 text-white px-3 py-2 rounded-full font-bold shadow-xl animate-pulse text-xs">
                🎉 Oferta especial: 3 meses com desconto!
              </div>
            </div>
          </AnimatedSection>

          {/* Single Plan Card */}
          <div className="bg-gradient-to-br from-gray-700 to-gray-800 dark:from-gray-800 dark:to-gray-900 rounded-2xl shadow-2xl overflow-hidden border border-gray-600 dark:border-gray-700 hover:scale-105 transform transition-all duration-500 hover:shadow-orange-500/20 hover:shadow-2xl group">
            <div className="bg-gradient-to-r from-orange-600 to-red-600 p-4 sm:p-6 md:p-8 text-white text-center group-hover:from-orange-500 group-hover:to-red-500 transition-all duration-500">
              <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 bg-gradient-to-br from-orange-400 to-red-400 rounded-2xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                <Wifi className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-white" />
              </div>
              <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-2">Plano Completo</h3>
              <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2">300MB</div>
              <div className="text-sm sm:text-base md:text-lg opacity-90">Fibra Óptica + SaraivaTV Grátis</div>
            </div>

            <div className="p-3 sm:p-4 md:p-8">
              <div className="grid lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8 items-center">
                <div className="text-center lg:text-left">
                  <div className="mb-3 sm:mb-4 md:mb-6">
                    <div className="text-sm sm:text-base md:text-lg text-gray-400 line-through mb-1 sm:mb-2">De R$ 169,90</div>
                    <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-orange-400 mb-1 sm:mb-2 group-hover:text-orange-300 transition-colors duration-300">
                      R$ 129<span className="text-lg sm:text-xl md:text-2xl">,90</span>
                    </div>
                    <div className="text-sm sm:text-base md:text-lg text-gray-300">por mês</div>
                  </div>

                  <div className="bg-gradient-to-r from-green-800 to-emerald-800 p-2 sm:p-3 md:p-4 rounded-xl mb-3 sm:mb-4 md:mb-6 border border-green-600 group-hover:from-green-700 group-hover:to-emerald-700 transition-all duration-300">
                    <div className="text-green-300 font-bold mb-1 text-xs sm:text-sm">💰 Economia de R$ 120 nos primeiros 3 meses!</div>
                    <div className="text-green-400 text-xs">Promoção válida para novos clientes</div>
                  </div>

                  <TouchButton onClick={handleWhatsAppClick} className="w-full lg:w-auto bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white font-bold py-3 px-6 text-sm sm:text-base rounded-xl shadow-xl">
                    Contratar Agora →
                  </TouchButton>
                </div>

                <div>
                  <h4 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-white mb-3 sm:mb-4 md:mb-6">
                    Tudo que você precisa:
                  </h4>
                  <div className="space-y-2 sm:space-y-3">
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
                    text: "Instalação profissional e Wi-Fi potente"
                  }, {
                    icon: Heart,
                    text: "Sem fidelidade, cancele quando quiser"
                  }].map((feature, index) => <div key={index} className="flex items-center space-x-2 sm:space-x-3 p-2 sm:p-3 bg-gradient-to-r from-gray-600 to-gray-700 dark:from-gray-700 dark:to-gray-800 rounded-lg border border-gray-500 dark:border-gray-600 hover:from-orange-600/20 hover:to-red-600/20 hover:border-orange-500 transition-all duration-300 hover:scale-105 transform">
                        <div className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 bg-gradient-to-br from-orange-600 to-red-600 rounded-full flex items-center justify-center flex-shrink-0">
                          <feature.icon className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                        </div>
                        <span className="font-semibold text-gray-200 text-xs sm:text-sm">{feature.text}</span>
                      </div>)}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-6 sm:mt-8 md:mt-12">
            <div className="bg-gradient-to-r from-orange-600 to-red-600 rounded-2xl p-4 sm:p-6 md:p-8 text-white shadow-2xl">
              <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-3 sm:mb-4">Não Perca Esta Oportunidade!</h3>
              <p className="text-sm sm:text-base md:text-lg mb-4 sm:mb-6 opacity-90 max-w-2xl mx-auto">
                Conecte-se com a melhor internet de Eliseu Martins e ganhe o SaraivaTV de presente.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
                <TouchButton onClick={handleWhatsAppClick} className="bg-white text-orange-600 hover:bg-gray-100 px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base font-bold rounded-xl">
                  💬 WhatsApp
                </TouchButton>
                <TouchButton className="bg-white text-orange-600 hover:bg-orange-50 border-2 border-white px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base font-bold rounded-xl">
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
                    <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
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

      {/* SaraivaTV Features Section */}
      <section className="py-16 px-4 bg-gradient-to-b from-white to-orange-50 dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center bg-orange-100 text-orange-600 px-4 py-2 rounded-full text-sm font-medium mb-4 sm:mb-6">
              <Tv className="w-3 h-3 mr-2" />
              App Exclusivo
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 sm:mb-6">
              Conheça o <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">SaraivaTV</span>
            </h2>
            <p className="text-sm sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              App gratuito que vem junto com sua internet. Assista TV direto no celular com qualidade HD!
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 mb-16">
            <Card className="text-center p-8 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 border-0 bg-gradient-to-b from-orange-50 to-white shadow-lg">
              <div className="w-24 h-24 bg-gradient-to-br from-orange-500 to-red-500 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-2xl">
                <Tv className="w-12 h-12 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Canais de TV</h3>
              <p className="text-gray-600 mb-6">
                Assista os mesmos canais da sua TV direto no celular
              </p>
              <div className="space-y-2">
                <span className="inline-block bg-gradient-to-r from-orange-100 to-red-100 text-orange-600 px-3 py-1 rounded-full text-sm font-medium">TV Aberta</span>
                <span className="inline-block bg-gradient-to-r from-orange-100 to-red-100 text-orange-600 px-3 py-1 rounded-full text-sm font-medium ml-2">Canais Locais</span>
                <div className="mt-2">
                  <span className="inline-block bg-gradient-to-r from-orange-100 to-red-100 text-orange-600 px-3 py-1 rounded-full text-sm font-medium">Notícias</span>
                  <span className="inline-block bg-gradient-to-r from-orange-100 to-red-100 text-orange-600 px-3 py-1 rounded-full text-sm font-medium ml-2">Esportes</span>
                </div>
              </div>
            </Card>

            <Card className="text-center p-8 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 border-0 bg-gradient-to-b from-orange-50 to-white shadow-lg">
              <div className="w-24 h-24 bg-gradient-to-br from-orange-500 to-red-500 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-2xl">
                <Music className="w-12 h-12 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Rádios Online</h3>
              <p className="text-gray-600 mb-6">
                Escute suas rádios favoritas onde estiver
              </p>
              <div className="space-y-2">
                <span className="inline-block bg-gradient-to-r from-orange-100 to-red-100 text-orange-600 px-3 py-1 rounded-full text-sm font-medium">Rádios Locais</span>
                <span className="inline-block bg-gradient-to-r from-orange-100 to-red-100 text-orange-600 px-3 py-1 rounded-full text-sm font-medium ml-2">Música</span>
                <div className="mt-2">
                  <span className="inline-block bg-gradient-to-r from-orange-100 to-red-100 text-orange-600 px-3 py-1 rounded-full text-sm font-medium">Notícias</span>
                  <span className="inline-block bg-gradient-to-r from-orange-100 to-red-100 text-orange-600 px-3 py-1 rounded-full text-sm font-medium ml-2">Esportes</span>
                </div>
              </div>
            </Card>

            <Card className="text-center p-8 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 border-0 bg-gradient-to-b from-orange-50 to-white shadow-lg">
              <div className="w-24 h-24 bg-gradient-to-br from-orange-500 to-red-500 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-2xl">
                <Smartphone className="w-12 h-12 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">No Seu Celular</h3>
              <p className="text-gray-600 mb-6">
                App fácil de usar para Android e iOS
              </p>
              <div className="space-y-2">
                <span className="inline-block bg-gradient-to-r from-orange-100 to-red-100 text-orange-600 px-3 py-1 rounded-full text-sm font-medium">Android</span>
                <span className="inline-block bg-gradient-to-r from-orange-100 to-red-100 text-orange-600 px-3 py-1 rounded-full text-sm font-medium ml-2">iOS</span>
                <div className="mt-2">
                  <span className="inline-block bg-gradient-to-r from-orange-100 to-red-100 text-orange-600 px-3 py-1 rounded-full text-sm font-medium">Fácil de Usar</span>
                  <span className="inline-block bg-gradient-to-r from-orange-100 to-red-100 text-orange-600 px-3 py-1 rounded-full text-sm font-medium ml-2">Gratuito</span>
                </div>
              </div>
            </Card>

            <Card className="text-center p-8 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 border-0 bg-gradient-to-b from-orange-50 to-white shadow-lg">
              <div className="w-24 h-24 bg-gradient-to-br from-orange-500 to-red-500 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-2xl">
                <Zap className="w-12 h-12 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Transmissão Ao Vivo</h3>
              <p className="text-gray-600 mb-6">
                Tudo que passa na TV, passa no app em tempo real
              </p>
              <div className="space-y-2">
                <span className="inline-block bg-gradient-to-r from-orange-100 to-red-100 text-orange-600 px-3 py-1 rounded-full text-sm font-medium">Ao Vivo</span>
                <span className="inline-block bg-gradient-to-r from-orange-100 to-red-100 text-orange-600 px-3 py-1 rounded-full text-sm font-medium ml-2">Tempo Real</span>
                <div className="mt-2">
                  <span className="inline-block bg-gradient-to-r from-orange-100 to-red-100 text-orange-600 px-3 py-1 rounded-full text-sm font-medium">Sem Atraso</span>
                  <span className="inline-block bg-gradient-to-r from-orange-100 to-red-100 text-orange-600 px-3 py-1 rounded-full text-sm font-medium ml-2">Qualidade HD</span>
                </div>
              </div>
            </Card>
          </div>

          <div className="bg-gradient-to-r from-orange-500 via-red-500 to-red-600 rounded-3xl p-8 sm:p-16 text-white relative overflow-hidden shadow-2xl">
            <div className="absolute inset-0 bg-black/10"></div>
            <div className="absolute top-10 right-10 w-32 h-32 bg-white/10 rounded-full blur-xl"></div>
            <div className="absolute bottom-10 left-10 w-24 h-24 bg-orange-300/20 rounded-full blur-xl"></div>
            <div className="relative z-10 text-center">
              <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 leading-tight">
                Pronto para ter Internet + SaraivaTV?
              </h3>
              <p className="text-lg sm:text-xl md:text-2xl mb-6 sm:mb-10 opacity-90 max-w-3xl mx-auto leading-relaxed">
                Não perca tempo! Aproveite nossa oferta especial e ganhe o app SaraivaTV grátis.
              </p>
              <div className="flex justify-center">
                <Button onClick={handleWhatsAppClick} className="bg-white text-orange-600 hover:bg-gray-100 px-8 sm:px-10 py-4 sm:py-5 text-lg sm:text-xl font-bold rounded-2xl shadow-2xl transform hover:scale-110 transition-all duration-300 flex items-center gap-3">
                  <span className="text-2xl">💬</span>
                  Entrar em Contato
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-orange-500 via-red-500 to-purple-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute top-10 right-10 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 left-10 w-72 h-72 bg-orange-300/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        
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
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-orange-500">1000+</div>
                  <div className="text-sm text-gray-600 font-medium">Clientes Ativos</div>
                </div>
                <div className="text-center p-6 bg-gradient-to-b from-orange-50 to-white rounded-2xl shadow-lg">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <MapPin className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-orange-500">100%</div>
                  <div className="text-sm text-gray-600 font-medium">Cobertura Local</div>
                </div>
                <div className="text-center p-6 bg-gradient-to-b from-orange-50 to-white rounded-2xl shadow-lg">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <Award className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-orange-500">22</div>
                  <div className="text-sm text-gray-600 font-medium">Anos de Experiência</div>
                </div>
                <div className="text-center p-6 bg-gradient-to-b from-orange-50 to-white rounded-2xl shadow-lg">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <Heart className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-orange-500">24h</div>
                  <div className="text-sm text-gray-600 font-medium">Suporte Local</div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-3xl p-10 shadow-2xl animate-fade-in delay-300">
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
            <TestimonialCard name="Maria Santos" age="68 anos" location="Centro de Eliseu Martins" initials="MS" testimonial="A internet da SaraivaNet mudou minha vida! Agora consigo falar com meus netos 
                que moram longe todos os dias. O atendimento é muito carinhoso." />
            
            <TestimonialCard name="João Silva" age="45 anos" location="Bairro São José" initials="JS" testimonial="Trabalho com vendas online e a internet nunca me deixou na mão. Rápida e estável, 
                exatamente o que precisava para meu negócio crescer." />
            
            <TestimonialCard name="Ana Oliveira" age="72 anos" location="Vila Nova" initials="AO" testimonial="Os técnicos são muito educados e me ensinaram a usar o Wi-Fi. Agora assisto 
                meus programas favoritos no tablet sem travar." />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contato" className="py-16 px-4 bg-gradient-to-br from-blue-600 via-purple-700 to-indigo-800 dark:from-gray-900 dark:via-gray-800 dark:to-gray-700">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium mb-6 border border-white/30">
              <Phone className="w-4 h-4 mr-2" />
              Fale Conosco
            </div>
            <h2 className="text-5xl font-bold text-white mb-4">Entre em Contato</h2>
            <p className="text-xl text-blue-200">
              Estamos aqui para ajudar! Entre em contato conosco e descubra como podemos 
              conectar você ao mundo digital.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center shadow-lg">
                  <Phone className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-800">Telefone</h3>
                  <p className="text-gray-600 text-lg">(89) 99439-5789</p>
                  <p className="text-sm text-gray-500">WhatsApp disponível</p>
                </div>
              </div>
            </Card>

            <Card className="p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center shadow-lg">
                  <MapPin className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-800">Endereço</h3>
                  <p className="text-gray-600 text-lg">Rua Fernando Silva, Centro</p>
                  <p className="text-sm text-gray-500">Eliseu Martins - PI</p>
                </div>
              </div>
            </Card>

            <Card className="p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center shadow-lg">
                  <Clock className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-800">Horário</h3>
                  <p className="text-gray-600 text-lg">Segunda a Sábado</p>
                  <p className="text-sm text-gray-500">8h às 18h</p>
                </div>
              </div>
            </Card>
          </div>

          <div className="text-center space-x-6">
            <Button onClick={handleWhatsAppClick} className="bg-green-500 hover:bg-green-600 text-white px-12 sm:px-16 py-4 sm:py-5 rounded-2xl text-lg font-bold shadow-xl border-0 transition-all duration-300 transform hover:scale-105">
              📱 WhatsApp
            </Button>
            <Button className="bg-white text-blue-600 hover:bg-blue-50 px-12 sm:px-16 py-4 sm:py-5 rounded-2xl text-lg font-bold shadow-xl border-0 transition-all duration-300 transform hover:scale-105">
              📞 Ligar Agora
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-b from-gray-800 to-gray-900 dark:from-gray-900 dark:to-black text-white py-12 sm:py-16 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center shadow-lg">
                  <Wifi className="w-6 h-6 text-white" />
                </div>
                <span className="text-3xl font-bold bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">SaraivaNet</span>
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
