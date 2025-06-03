import { Phone, Mail, MapPin, Clock, Wifi, Tv, Music, Headphones, Smartphone, Zap, Users, Heart, Star, Shield, Award, CheckCircle, Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import RealMap from "@/components/RealMap";
import StatsCounter from "@/components/StatsCounter";
import TestimonialCard from "@/components/TestimonialCard";
import ThemeToggle from "@/components/ThemeToggle";
import MobileNavigation from "@/components/MobileNavigation";
import AnimatedSection from "@/components/AnimatedSection";
import ChatBot from "@/components/ChatBot";
import { useParallax } from "@/hooks/useParallax";

const Index = () => {
  const parallaxOffset = useParallax(0.5);

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
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
      <FloatingWhatsApp />
      <ChatBot />
      
      {/* Header */}
      <header className="bg-gradient-to-r from-orange-600 to-red-600 dark:from-gray-800 dark:to-gray-900 shadow-xl px-4 py-4 border-b-4 border-orange-700 dark:border-gray-700 z-50 transition-colors duration-500">
        <div className="max-w-7xl mx-auto">
          {/* Mobile Layout */}
          <div className="md:hidden">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-lg">
                  <Wifi className="w-5 h-5 text-orange-600" />
                </div>
                <div>
                  <span className="text-xl font-bold text-white">SaraivaNet</span>
                  <div className="text-xs text-orange-100 font-medium flex items-center">
                    <MapPin className="w-3 h-3 mr-1" />
                    Eliseu Martins - PI
                  </div>
                </div>
              </div>
              <div className="flex items-center space-x-2">
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
              <a href="#inicio" onClick={(e) => handleSmoothScroll(e, 'inicio')} className="text-white hover:text-orange-200 transition-colors font-medium">Início</a>
              <a href="#planos" onClick={(e) => handleSmoothScroll(e, 'planos')} className="text-white hover:text-orange-200 transition-colors font-medium">Planos</a>
              <a href="#cobertura" onClick={(e) => handleSmoothScroll(e, 'cobertura')} className="text-white hover:text-orange-200 transition-colors font-medium">Cobertura</a>
              <a href="#sobre" onClick={(e) => handleSmoothScroll(e, 'sobre')} className="text-white hover:text-orange-200 transition-colors font-medium">Sobre</a>
              <a href="#contato" onClick={(e) => handleSmoothScroll(e, 'contato')} className="text-white hover:text-orange-200 transition-colors font-medium">Contato</a>
            </nav>

            <div className="flex items-center space-x-4">
              <ThemeToggle />
              <div className="flex items-center space-x-2 text-white bg-orange-700 dark:bg-gray-700 px-4 py-2 rounded-full hover:bg-orange-800 dark:hover:bg-gray-600 transition-all duration-300 cursor-pointer shadow-lg hover:scale-105 transform">
                <Phone className="w-4 h-4" />
                <span className="font-semibold">(89) 99439-5789</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section with Parallax */}
      <section id="inicio" className="bg-gradient-to-br from-orange-500 via-red-500 to-purple-600 dark:from-gray-900 dark:via-gray-800 dark:to-gray-700 text-white px-4 py-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/30 dark:bg-black/50"></div>
        <div 
          className="absolute inset-0"
          style={{ transform: `translateY(${parallaxOffset}px)` }}
        >
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-orange-600/50 via-red-600/50 to-purple-700/50"></div>
          <div className="absolute top-10 right-10 w-64 h-64 bg-white/10 rounded-full blur-2xl animate-float"></div>
          <div className="absolute bottom-10 left-10 w-48 h-48 bg-orange-300/20 rounded-full blur-2xl animate-float" style={{ animationDelay: '1s' }}></div>
        </div>
        
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 items-center relative z-10">
          <AnimatedSection animation="fade-up">
            <div>
              <div className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6 border border-white/30">
                <Star className="w-4 h-4 mr-2 text-yellow-300" />
                <span className="text-sm font-semibold">Internet + SaraivaTV Grátis</span>
              </div>
              
              <h1 className="text-5xl font-bold mb-4 leading-tight">
                Internet<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-200 to-yellow-200">+ SaraivaTV</span>
              </h1>
              
              <p className="text-lg mb-6 text-gray-100">
                Conecte-se com nossa internet de fibra óptica ultrarrápida e ganhe acesso completo ao app SaraivaTV.
              </p>

              <div className="grid grid-cols-2 gap-3 mb-6">
                <div className="bg-white/15 backdrop-blur-sm rounded-xl p-4 flex items-center space-x-3 border border-white/20 hover:bg-white/25 transition-all duration-300 hover:scale-105 transform">
                  <Wifi className="w-8 h-8 text-orange-300" />
                  <span className="font-semibold text-sm">Internet Ultra Rápida</span>
                </div>
                <div className="bg-white/15 backdrop-blur-sm rounded-xl p-4 flex items-center space-x-3 border border-white/20 hover:bg-white/25 transition-all duration-300 hover:scale-105 transform">
                  <Tv className="w-8 h-8 text-orange-300" />
                  <span className="font-semibold text-sm">Canais de TV</span>
                </div>
                <div className="bg-white/15 backdrop-blur-sm rounded-xl p-4 flex items-center space-x-3 border border-white/20 hover:bg-white/25 transition-all duration-300 hover:scale-105 transform">
                  <Music className="w-8 h-8 text-orange-300" />
                  <span className="font-semibold text-sm">Rádios Online</span>
                </div>
                <div className="bg-white/15 backdrop-blur-sm rounded-xl p-4 flex items-center space-x-3 border border-white/20 hover:bg-white/25 transition-all duration-300 hover:scale-105 transform">
                  <Shield className="w-8 h-8 text-orange-300" />
                  <span className="font-semibold text-sm">Suporte 24h</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button 
                  onClick={handleWhatsAppClick}
                  className="bg-white text-orange-600 hover:bg-orange-50 hover:text-orange-700 px-8 py-3 rounded-xl font-bold text-lg shadow-xl border-0 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
                >
                  Contratar Agora →
                </Button>
                <Button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-orange-600 px-8 py-3 rounded-xl font-bold text-lg shadow-xl transition-all duration-300 transform hover:scale-105">
                  Saiba Mais
                </Button>
              </div>

              <div className="flex space-x-8 text-sm">
                <div className="text-center">
                  <StatsCounter endValue={500} label="Clientes" suffix="+" />
                </div>
                <div className="text-center">
                  <StatsCounter endValue={99.9} label="Uptime" suffix="%" />
                </div>
                <div className="text-center">
                  <StatsCounter endValue={20} label="Canais" suffix="+" />
                </div>
                <div className="text-center">
                  <StatsCounter endValue={24} label="Online" suffix="h" />
                </div>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="scale-in" delay={300}>
            <div className="bg-white/15 backdrop-blur-md rounded-2xl p-6 border border-white/20 shadow-2xl hover:bg-white/20 transition-all duration-500 hover:scale-105 transform">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-red-400 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Smartphone className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-2">SaraivaTV</h3>
                <p className="text-orange-200">Seus canais favoritos no celular</p>
              </div>
              
              <div className="grid grid-cols-2 gap-3 mb-6">
                <div className="bg-white/10 rounded-lg p-4 text-center border border-white/20">
                  <Tv className="w-6 h-6 mx-auto mb-2 text-orange-300" />
                  <span className="text-xs font-medium">Canais de TV</span>
                </div>
                <div className="bg-white/10 rounded-lg p-4 text-center border border-white/20">
                  <Music className="w-6 h-6 mx-auto mb-2 text-orange-300" />
                  <span className="text-xs font-medium">Rádios</span>
                </div>
                <div className="bg-white/10 rounded-lg p-4 text-center border border-white/20">
                  <Zap className="w-6 h-6 mx-auto mb-2 text-orange-300" />
                  <span className="text-xs font-medium">Ao Vivo</span>
                </div>
                <div className="bg-white/10 rounded-lg p-4 text-center border border-white/20">
                  <Smartphone className="w-6 h-6 mx-auto mb-2 text-orange-300" />
                  <span className="text-xs font-medium">No Celular</span>
                </div>
              </div>
              
              <p className="text-center text-sm text-orange-200 mb-4">
                Disponível para Android e iOS
              </p>
              
              <div className="flex justify-center space-x-3">
                <div className="bg-white/10 rounded-lg p-2 border border-white/20">
                  <Smartphone className="w-6 h-6 text-orange-300" />
                </div>
                <div className="bg-white/10 rounded-lg p-2 border border-white/20">
                  <Tv className="w-6 h-6 text-orange-300" />
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Plans Section with Enhanced Hover Effects */}
      <section id="planos" className="bg-gradient-to-br from-gray-800 via-gray-900 to-black dark:from-gray-900 dark:via-black dark:to-gray-900 text-white px-4 py-16">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection animation="fade-up">
            <div className="text-center mb-12">
              <div className="inline-flex items-center bg-gradient-to-r from-orange-600 to-red-600 text-white px-4 py-2 rounded-full text-sm font-semibold mb-6">
                <Award className="w-4 h-4 mr-2" />
                Plano Exclusivo para Você
              </div>
              <h2 className="text-5xl font-bold bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent mb-6">
                Internet + SaraivaTV
              </h2>
              <p className="text-xl text-gray-300 mb-4 max-w-3xl mx-auto">
                O plano completo que vai transformar sua experiência digital
              </p>
              <div className="inline-flex items-center bg-gradient-to-r from-green-600 to-emerald-600 text-white px-6 py-3 rounded-full font-bold shadow-xl animate-pulse">
                🎉 Oferta especial: 3 meses com desconto!
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="scale-in" delay={200}>
            <div className="max-w-4xl mx-auto">
              <div className="bg-gradient-to-br from-gray-700 to-gray-800 dark:from-gray-800 dark:to-gray-900 rounded-2xl shadow-2xl overflow-hidden border border-gray-600 dark:border-gray-700 hover:scale-105 transform transition-all duration-500 hover:shadow-orange-500/20 hover:shadow-2xl group">
                <div className="bg-gradient-to-r from-orange-600 to-red-600 p-8 text-white text-center group-hover:from-orange-500 group-hover:to-red-500 transition-all duration-500">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-red-400 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Wifi className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold mb-2">Plano Completo</h3>
                  <div className="text-5xl font-bold mb-2">300MB</div>
                  <div className="text-lg opacity-90">Fibra Óptica + SaraivaTV Grátis</div>
                </div>

                <div className="p-8">
                  <div className="grid lg:grid-cols-2 gap-8 items-center">
                    <div className="text-center lg:text-left">
                      <div className="mb-6">
                        <div className="text-lg text-gray-400 line-through mb-2">De R$ 169,90</div>
                        <div className="text-5xl font-bold text-orange-400 mb-2 group-hover:text-orange-300 transition-colors duration-300">
                          R$ 129<span className="text-2xl">,90</span>
                        </div>
                        <div className="text-lg text-gray-300">por mês</div>
                      </div>

                      <div className="bg-gradient-to-r from-green-800 to-emerald-800 p-4 rounded-xl mb-6 border border-green-600 group-hover:from-green-700 group-hover:to-emerald-700 transition-all duration-300">
                        <div className="text-green-300 font-bold mb-1">💰 Economia de R$ 120 nos primeiros 3 meses!</div>
                        <div className="text-green-400 text-sm">Promoção válida para novos clientes</div>
                      </div>

                      <Button 
                        onClick={handleWhatsAppClick}
                        className="w-full lg:w-auto bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white font-bold py-4 px-12 text-xl rounded-xl shadow-xl hover:scale-110 transform transition-all duration-300"
                      >
                        Contratar Agora →
                      </Button>
                    </div>

                    <div>
                      <h4 className="text-2xl font-bold text-white mb-6">
                        Tudo que você precisa:
                      </h4>
                      <div className="space-y-3">
                        {[
                          { icon: Wifi, text: "Internet 300MB fibra óptica ultrarrápida" },
                          { icon: Tv, text: "App SaraivaTV Premium totalmente grátis" },
                          { icon: Smartphone, text: "Assista TV direto no seu celular" },
                          { icon: Music, text: "Rádios nacionais e locais incluídas" },
                          { icon: Shield, text: "Suporte técnico 24h todos os dias" },
                          { icon: Zap, text: "Velocidade garantida por contrato" },
                          { icon: CheckCircle, text: "Instalação gratuita e Wi-Fi potente" },
                          { icon: Heart, text: "Sem fidelidade, cancele quando quiser" }
                        ].map((feature, index) => (
                          <div key={index} className="flex items-center space-x-3 p-3 bg-gradient-to-r from-gray-600 to-gray-700 dark:from-gray-700 dark:to-gray-800 rounded-lg border border-gray-500 dark:border-gray-600 hover:from-orange-600/20 hover:to-red-600/20 hover:border-orange-500 transition-all duration-300 hover:scale-105 transform">
                            <div className="w-8 h-8 bg-gradient-to-br from-orange-600 to-red-600 rounded-full flex items-center justify-center flex-shrink-0">
                              <feature.icon className="w-4 h-4 text-white" />
                            </div>
                            <span className="font-semibold text-gray-200">{feature.text}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>

          <div className="text-center mt-12">
            <div className="bg-gradient-to-r from-orange-600 to-red-600 rounded-2xl p-8 text-white shadow-2xl">
              <h3 className="text-3xl font-bold mb-4">Não Perca Esta Oportunidade!</h3>
              <p className="text-lg mb-6 opacity-90 max-w-2xl mx-auto">
                Conecte-se com a melhor internet de Eliseu Martins e ganhe o SaraivaTV de presente.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button 
                  onClick={handleWhatsAppClick}
                  className="bg-white text-orange-600 hover:bg-gray-100 px-8 py-3 text-lg font-bold rounded-xl"
                >
                  💬 WhatsApp
                </Button>
                <Button className="bg-white text-orange-600 hover:bg-orange-50 border-2 border-white px-8 py-3 text-lg font-bold rounded-xl">
                  📞 Ligar Agora
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Coverage Map Section */}
      <section id="cobertura" className="bg-gradient-to-br from-blue-800 via-blue-900 to-indigo-900 dark:from-gray-900 dark:via-gray-800 dark:to-gray-700 text-white px-4 py-16">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection animation="fade-up">
            <div className="text-center mb-12">
              <div className="inline-flex items-center bg-blue-700 text-white px-4 py-2 rounded-full text-sm font-medium mb-4">
                <MapPin className="w-4 h-4 mr-2" />
                Cidades Atendidas
              </div>
              <h2 className="text-5xl font-bold mb-4">
                Nossa <span className="bg-gradient-to-r from-blue-300 to-cyan-300 bg-clip-text text-transparent">Cobertura</span>
              </h2>
              <p className="text-xl text-blue-200 max-w-3xl mx-auto">
                Levamos internet de fibra óptica para cidades da região sul do Piauí, conectando mais famílias a cada dia.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid lg:grid-cols-2 gap-8 items-start">
            <AnimatedSection animation="slide-left">
              <RealMap />
            </AnimatedSection>

            <AnimatedSection animation="slide-right">
              <div>
                <h3 className="text-3xl font-bold text-white mb-4">Expandindo Nossa Rede</h3>
                <p className="text-blue-200 mb-6">
                  A SaraivaNet está em constante crescimento! Nossa missão é conectar todas as cidades 
                  da região sul do Piauí com internet de fibra óptica de qualidade.
                </p>

                <div className="space-y-4 mb-6">
                  <div className="flex items-center space-x-3 p-4 bg-gradient-to-r from-blue-700 to-blue-800 rounded-xl border border-blue-600">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center">
                      <CheckCircle className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-white">4 Cidades Conectadas</h4>
                      <p className="text-blue-200 text-sm">Eliseu Martins, Colônia do Gurguéia, Manoel Emídio e Jerumenha</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3 p-4 bg-gradient-to-r from-blue-700 to-blue-800 rounded-xl border border-blue-600">
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center">
                      <Wifi className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-white">Canto do Buriti em Breve</h4>
                      <p className="text-blue-200 text-sm">Expansão prevista para 2025</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3 p-4 bg-gradient-to-r from-blue-700 to-blue-800 rounded-xl border border-blue-600">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center">
                      <Zap className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-white">Mesma Qualidade</h4>
                      <p className="text-blue-200 text-sm">Internet fibra óptica em todas as cidades</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-orange-600 to-red-600 rounded-2xl p-6 text-white">
                  <h4 className="text-xl font-bold mb-3">Sua Cidade Não Está na Lista?</h4>
                  <p className="mb-4 opacity-90">
                    Demonstre interesse! Quanto mais pessoas de uma cidade demonstrarem interesse, mais rápido chegamos lá.
                  </p>
                  <Button 
                    onClick={handleWhatsAppClick}
                    className="bg-white text-orange-500 hover:bg-gray-100 font-bold px-6 py-2 rounded-lg"
                  >
                    💬 Demonstrar Interesse
                  </Button>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* SaraivaTV Features Section */}
      <section className="py-24 px-6 bg-gradient-to-b from-white to-orange-50 dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-orange-100 text-orange-600 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Tv className="w-4 h-4 mr-2" />
              App Exclusivo
            </div>
            <h2 className="text-6xl font-bold mb-6">
              Conheça o <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">SaraivaTV</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
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

          <div className="bg-gradient-to-r from-orange-500 via-red-500 to-red-600 rounded-3xl p-16 text-white relative overflow-hidden shadow-2xl">
            <div className="absolute inset-0 bg-black/10"></div>
            <div className="absolute top-10 right-10 w-32 h-32 bg-white/10 rounded-full blur-xl"></div>
            <div className="absolute bottom-10 left-10 w-24 h-24 bg-orange-300/20 rounded-full blur-xl"></div>
            <div className="relative z-10">
              <h3 className="text-5xl font-bold mb-6">Pronto para ter Internet + SaraivaTV?</h3>
              <p className="text-2xl mb-10 opacity-90 max-w-2xl mx-auto">
                Não perca tempo! Aproveite nossa oferta especial e ganhe o app SaraivaTV grátis.
              </p>
              <Button 
                onClick={handleWhatsAppClick}
                className="bg-white text-orange-600 hover:bg-gray-100 px-16 py-6 text-2xl font-bold rounded-2xl shadow-2xl transform hover:scale-110 transition-all duration-300"
              >
                Quero Contratar Agora →
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 px-6 bg-gradient-to-r from-orange-500 via-red-500 to-purple-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute top-10 right-10 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 left-10 w-72 h-72 bg-orange-300/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <h2 className="text-5xl font-bold text-white mb-4">Números Que Falam Por Si</h2>
          <p className="text-2xl text-white/90 mb-12">
            Resultados conquistados com dedicação e compromisso com Eliseu Martins
          </p>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="bg-white/15 backdrop-blur-sm rounded-3xl p-8 text-white shadow-2xl hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
              <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Users className="w-10 h-10 text-white" />
              </div>
              <StatsCounter endValue={500} label="Famílias Conectadas" suffix="+" />
              <div className="text-white/80 mt-2 text-lg">
                Lares piauenses com internet de qualidade
              </div>
            </div>

            <div className="bg-white/15 backdrop-blur-sm rounded-3xl p-8 text-white shadow-2xl hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
              <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <MapPin className="w-10 h-10 text-white" />
              </div>
              <StatsCounter endValue={15} label="Bairros Atendidos" />
              <div className="text-white/80 mt-2 text-lg">
                Cobertura em toda Eliseu Martins
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
      <section id="sobre" className="py-24 px-6 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
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
                  <div className="text-3xl font-bold text-orange-500">500+</div>
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
      <section className="py-24 px-6 bg-gray-50 dark:bg-gray-800">
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
              testimonial="A internet da SaraivaNet mudou minha vida! Agora consigo falar com meus netos 
                que moram longe todos os dias. O atendimento é muito carinhoso."
            />
            
            <TestimonialCard
              name="João Silva"
              age="45 anos"
              location="Bairro São José"
              initials="JS"
              testimonial="Trabalho com vendas online e a internet nunca me deixou na mão. Rápida e estável, 
                exatamente o que precisava para meu negócio crescer."
            />
            
            <TestimonialCard
              name="Ana Oliveira"
              age="72 anos"
              location="Vila Nova"
              initials="AO"
              testimonial="Os técnicos são muito educados e me ensinaram a usar o Wi-Fi. Agora assisto 
                meus programas favoritos no tablet sem travar."
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contato" className="py-24 px-6 bg-gradient-to-br from-blue-600 via-purple-700 to-indigo-800 dark:from-gray-900 dark:via-gray-800 dark:to-gray-700">
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
            <Button 
              onClick={handleWhatsAppClick}
              className="bg-green-500 hover:bg-green-600 text-white px-12 py-4 rounded-2xl text-lg font-bold shadow-xl border-0 transition-all duration-300 transform hover:scale-105"
            >
              📱 WhatsApp
            </Button>
            <Button className="bg-white text-blue-600 hover:bg-blue-50 px-12 py-4 rounded-2xl text-lg font-bold shadow-xl border-0 transition-all duration-300 transform hover:scale-105">
              📞 Ligar Agora
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-b from-gray-800 to-gray-900 dark:from-gray-900 dark:to-black text-white py-16 px-6">
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
                <li><a href="#inicio" onClick={(e) => handleSmoothScroll(e, 'inicio')} className="text-gray-300 hover:text-orange-400 transition-colors text-lg">Início</a></li>
                <li><a href="#planos" onClick={(e) => handleSmoothScroll(e, 'planos')} className="text-gray-300 hover:text-orange-400 transition-colors text-lg">Planos</a></li>
                <li><a href="#cobertura" onClick={(e) => handleSmoothScroll(e, 'cobertura')} className="text-gray-300 hover:text-orange-400 transition-colors text-lg">Cobertura</a></li>
                <li><a href="#sobre" onClick={(e) => handleSmoothScroll(e, 'sobre')} className="text-gray-300 hover:text-orange-400 transition-colors text-lg">Sobre Nós</a></li>
                <li><a href="#contato" onClick={(e) => handleSmoothScroll(e, 'contato')} className="text-gray-300 hover:text-orange-400 transition-colors text-lg">Contato</a></li>
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
