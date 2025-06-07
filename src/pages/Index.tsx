
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
    <div className="min-h-screen bg-white">
      {/* Floating Components */}
      <FloatingWhatsApp />
      <ChatBot />
      
      {/* Header */}
      <header className="bg-orange-500 shadow-lg px-4 py-4 border-b">
        <div className="max-w-7xl mx-auto">
          {/* Mobile Layout */}
          <div className="md:hidden">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                  <Wifi className="w-4 h-4 text-orange-500" />
                </div>
                <div>
                  <span className="text-lg font-bold text-white">SaraivaNet</span>
                  <div className="text-xs text-orange-100 flex items-center">
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
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center">
                <Wifi className="w-6 h-6 text-orange-500" />
              </div>
              <div>
                <span className="text-3xl font-bold text-white">SaraivaNet</span>
                <div className="text-sm text-orange-100 flex items-center">
                  <MapPin className="w-4 h-4 mr-1" />
                  Eliseu Martins - PI
                </div>
              </div>
            </div>
            
            <nav className="flex items-center space-x-8">
              <a href="#inicio" onClick={(e) => handleSmoothScroll(e, 'inicio')} className="text-white hover:text-orange-200 transition-all font-semibold">Início</a>
              <a href="#planos" onClick={(e) => handleSmoothScroll(e, 'planos')} className="text-white hover:text-orange-200 transition-all font-semibold">Planos</a>
              <a href="#cobertura" onClick={(e) => handleSmoothScroll(e, 'cobertura')} className="text-white hover:text-orange-200 transition-all font-semibold">Cobertura</a>
              <a href="#sobre" onClick={(e) => handleSmoothScroll(e, 'sobre')} className="text-white hover:text-orange-200 transition-all font-semibold">Sobre</a>
              <a href="#contato" onClick={(e) => handleSmoothScroll(e, 'contato')} className="text-white hover:text-orange-200 transition-all font-semibold">Contato</a>
            </nav>

            <div className="flex items-center space-x-4">
              <ThemeToggle />
              <div className="flex items-center space-x-2 text-white bg-orange-600 px-4 py-2 rounded-full">
                <Phone className="w-4 h-4" />
                <span className="font-semibold">(89) 99439-5789</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="inicio" className="bg-orange-500 text-white px-4 py-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-orange-600/50"></div>
        <div 
          className="absolute inset-0"
          style={{ transform: `translateY(${parallaxOffset}px)` }}
        >
          <div className="absolute top-0 left-0 w-full h-full bg-orange-600/30"></div>
        </div>
        
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 items-center relative z-10">
          <AnimatedSection animation="fade-up">
            <div>
              <div className="inline-flex items-center bg-white/20 rounded-full px-4 py-2 mb-6 border border-white/30">
                <Star className="w-4 h-4 mr-2 text-yellow-300" />
                <span className="text-sm font-semibold">Internet + SaraivaTV Grátis</span>
              </div>
              
              <h1 className="text-5xl font-bold mb-4 leading-tight">
                Internet<br />
                <span className="text-yellow-300">+ SaraivaTV</span>
              </h1>
              
              <p className="text-lg mb-6 text-gray-100 leading-relaxed">
                Conecte-se com nossa internet de fibra óptica ultrarrápida e ganhe acesso completo ao app SaraivaTV.
              </p>

              <div className="grid grid-cols-2 gap-3 mb-6">
                {[
                  { icon: Wifi, text: "Internet Ultra Rápida" },
                  { icon: Tv, text: "Canais de TV" },
                  { icon: Music, text: "Rádios Online" },
                  { icon: Shield, text: "Suporte 24h" }
                ].map((feature, index) => (
                  <div key={index} className="bg-white/15 rounded-lg p-4 flex items-center space-x-3 border border-white/20">
                    <feature.icon className="w-8 h-8 text-yellow-300" />
                    <span className="font-semibold text-sm">{feature.text}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button 
                  onClick={handleWhatsAppClick}
                  className="bg-white text-orange-500 hover:bg-orange-50 px-6 py-3 rounded-lg font-bold text-base"
                >
                  Contratar Agora →
                </Button>
                <Button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-orange-500 px-8 py-3 rounded-lg font-bold text-lg">
                  Saiba Mais
                </Button>
              </div>

              <div className="grid grid-cols-4 gap-8 text-sm">
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
            <div className="bg-white/15 rounded-xl p-6 border border-white/20">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-orange-400 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Smartphone className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-2">SaraivaTV</h3>
                <p className="text-orange-200">Seus canais favoritos no celular</p>
              </div>
              
              <div className="grid grid-cols-2 gap-3 mb-6">
                {[
                  { icon: Tv, text: "Canais de TV" },
                  { icon: Music, text: "Rádios" },
                  { icon: Zap, text: "Ao Vivo" },
                  { icon: Smartphone, text: "No Celular" }
                ].map((feature, index) => (
                  <div key={index} className="bg-white/10 rounded-lg p-4 text-center border border-white/20">
                    <feature.icon className="w-6 h-6 mx-auto mb-2 text-yellow-300" />
                    <span className="text-xs font-medium">{feature.text}</span>
                  </div>
                ))}
              </div>
              
              <p className="text-center text-sm text-orange-200 mb-4">
                Disponível para Android e iOS
              </p>
              
              <div className="flex justify-center space-x-3">
                <div className="bg-white/10 rounded-lg p-2 border border-white/20">
                  <Smartphone className="w-6 h-6 text-yellow-300" />
                </div>
                <div className="bg-white/10 rounded-lg p-2 border border-white/20">
                  <Tv className="w-6 h-6 text-yellow-300" />
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Plans Section */}
      <section id="planos" className="bg-gradient-to-br from-gray-900 via-orange-900 to-red-900 dark:from-gray-900 dark:via-black dark:to-gray-900 text-white px-3 md:px-4 py-12 md:py-16 relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-r from-orange-900/30 via-red-900/30 to-orange-900/30"></div>
        <div className="absolute top-0 left-0 w-64 h-64 bg-orange-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-red-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <AnimatedSection animation="fade-up">
            <div className="text-center mb-8 md:mb-12">
              <div className="inline-flex items-center bg-gradient-to-r from-orange-600 to-red-600 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4 md:mb-6 shadow-lg">
                <Award className="w-4 h-4 mr-2" />
                Plano Exclusivo para Você
              </div>
              <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent mb-4 md:mb-6">
                Internet + SaraivaTV
              </h2>
              <p className="text-lg md:text-xl text-gray-300 mb-3 md:mb-4 max-w-3xl mx-auto">
                O plano completo que vai transformar sua experiência digital
              </p>
              <div className="inline-flex items-center bg-gradient-to-r from-green-600 to-emerald-600 text-white px-4 md:px-6 py-2 md:py-3 rounded-full font-bold shadow-xl animate-pulse">
                🎉 Oferta especial: 3 meses com desconto!
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="scale-in" delay={200}>
            <div className="max-w-4xl mx-auto">
              <div className="bg-gradient-to-br from-gray-800 to-orange-900 rounded-2xl shadow-2xl overflow-hidden border border-orange-500/30 hover:scale-105 transform transition-all duration-500 hover:shadow-orange-500/20 hover:shadow-2xl group">
                <div className="bg-gradient-to-r from-orange-600 to-red-600 p-6 md:p-8 text-white text-center group-hover:from-orange-500 group-hover:to-red-500 transition-all duration-500">
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-orange-400 to-red-400 rounded-2xl flex items-center justify-center mx-auto mb-3 md:mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <Wifi className="w-6 h-6 md:w-8 md:h-8 text-white" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-2">Plano Completo</h3>
                  <div className="text-3xl md:text-5xl font-bold mb-2">300MB</div>
                  <div className="text-sm md:text-lg opacity-90">Fibra Óptica + SaraivaTV Grátis</div>
                </div>

                <div className="p-4 md:p-8">
                  <div className="grid lg:grid-cols-2 gap-6 md:gap-8 items-center">
                    <div className="text-center lg:text-left">
                      <div className="mb-4 md:mb-6">
                        <div className="text-sm md:text-lg text-gray-400 line-through mb-2">De R$ 169,90</div>
                        <div className="text-3xl md:text-5xl font-bold text-orange-400 mb-2 group-hover:text-orange-300 transition-colors duration-300">
                          R$ 129<span className="text-lg md:text-2xl">,90</span>
                        </div>
                        <div className="text-sm md:text-lg text-gray-300">por mês</div>
                      </div>

                      <div className="bg-gradient-to-r from-green-800 to-emerald-800 p-3 md:p-4 rounded-xl mb-4 md:mb-6 border border-green-600 group-hover:from-green-700 group-hover:to-emerald-700 transition-all duration-300">
                        <div className="text-green-300 font-bold mb-1 text-sm md:text-base">💰 Economia de R$ 120 nos primeiros 3 meses!</div>
                        <div className="text-green-400 text-xs md:text-sm">Promoção válida para novos clientes</div>
                      </div>

                      <Button 
                        onClick={handleWhatsAppClick}
                        className="w-full lg:w-auto bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white font-bold py-3 md:py-4 px-6 md:px-8 text-sm md:text-lg rounded-xl shadow-xl hover:scale-110 transform transition-all duration-300 whitespace-nowrap"
                      >
                        Contratar Agora →
                      </Button>
                    </div>

                    <div>
                      <h4 className="text-xl md:text-2xl font-bold text-white mb-4 md:mb-6">
                        Tudo que você precisa:
                      </h4>
                      <div className="space-y-2 md:space-y-3">
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
                          <div key={index} className="flex items-center space-x-3 p-2 md:p-3 bg-gradient-to-r from-gray-700 to-orange-800 rounded-lg border border-orange-500/30 hover:from-orange-600/20 hover:to-red-600/20 hover:border-orange-400 transition-all duration-300 hover:scale-105 transform shadow-md">
                            <div className="w-6 h-6 md:w-8 md:h-8 bg-gradient-to-br from-orange-600 to-red-600 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg">
                              <feature.icon className="w-3 h-3 md:w-4 md:h-4 text-white" />
                            </div>
                            <span className="font-semibold text-gray-200 text-xs md:text-sm">{feature.text}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>

          <div className="text-center mt-8 md:mt-12">
            <div className="bg-gradient-to-r from-orange-600 via-red-600 to-orange-700 rounded-2xl p-6 md:p-8 text-white shadow-2xl border border-orange-400/30">
              <h3 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4">Não Perca Esta Oportunidade!</h3>
              <p className="text-sm md:text-lg mb-4 md:mb-6 opacity-90 max-w-2xl mx-auto">
                Conecte-se com a melhor internet de Eliseu Martins e ganhe o SaraivaTV de presente.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center">
                <Button 
                  onClick={handleWhatsAppClick}
                  className="bg-white text-orange-600 hover:bg-gray-100 px-4 md:px-6 py-2 md:py-3 text-sm md:text-base font-bold rounded-xl whitespace-nowrap shadow-lg hover:scale-105 transform transition-all duration-300"
                >
                  💬 WhatsApp
                </Button>
                <Button className="bg-white text-orange-600 hover:bg-orange-50 border-2 border-white px-4 md:px-6 py-2 md:py-3 text-sm md:text-base font-bold rounded-xl whitespace-nowrap shadow-lg hover:scale-105 transform transition-all duration-300">
                  📞 Ligar Agora
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Área de Cobertura - Melhorado */}
      <AnimatedSection className="py-12 md:py-20 bg-gradient-to-br from-orange-600 via-red-600 to-orange-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
        
        <div className="container mx-auto px-3 md:px-4 relative z-10">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6">
              🗺️ Nossa Área de Cobertura
            </h2>
            <p className="text-lg md:text-xl text-orange-100 mb-6 md:mb-8 max-w-3xl mx-auto">
              Levamos internet de fibra óptica de alta qualidade para toda a região sul do Piauí
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center mb-8 md:mb-12">
            <div>
              <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6">🏙️ Cidades Atendidas</h3>
              <div className="space-y-3 md:space-y-4">
                {[
                  { name: "Eliseu Martins", status: "Cobertura Completa" },
                  { name: "Colônia do Gurguéia", status: "Internet Ativa" },
                  { name: "Manoel Emídio", status: "Fibra Óptica" },
                  { name: "Canavieira", status: "Alta Velocidade" },
                  { name: "Jerumenha", status: "Premium TV" }
                ].map((city, index) => (
                  <div key={index} className="flex items-center space-x-3 md:space-x-4 p-3 md:p-4 bg-white/10 rounded-xl backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 transform shadow-lg">
                    <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                    <div>
                      <div className="font-semibold text-sm md:text-base">{city.name}</div>
                      <div className="text-xs md:text-sm text-orange-200">{city.status}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 md:p-6 border border-white/20 shadow-xl">
              <RealMap />
            </div>
          </div>

          <div className="text-center">
            <a
              href="https://wa.me/5589994395789?text=Olá! Gostaria de saber sobre a disponibilidade da internet SaraivaNet na minha região."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-3 bg-green-500 hover:bg-green-600 text-white px-6 md:px-8 py-3 md:py-4 rounded-full font-semibold text-sm md:text-lg transition-all duration-300 transform hover:scale-105 shadow-xl"
            >
              <span>💬</span>
              <span>Verificar Disponibilidade</span>
            </a>
          </div>
        </div>
      </AnimatedSection>

      {/* SaraivaTV Features Section */}
      <section className="py-16 md:py-24 px-3 md:px-6 bg-gradient-to-b from-white to-orange-50 dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <div className="inline-flex items-center bg-orange-100 text-orange-600 px-4 py-2 rounded-full text-sm font-medium mb-4 md:mb-6">
              <Tv className="w-4 h-4 mr-2" />
              App Exclusivo
            </div>
            <h2 className="text-4xl md:text-6xl font-bold mb-4 md:mb-6">
              Conheça o <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">SaraivaTV</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              App gratuito que vem junto com sua internet. Assista TV direto no celular com qualidade HD!
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 md:gap-8 mb-12 md:mb-16">
            {[
              {
                icon: Tv,
                title: "Canais de TV",
                description: "Assista os mesmos canais da sua TV direto no celular",
                tags: ["TV Aberta", "Canais Locais", "Notícias", "Esportes"]
              },
              {
                icon: Music,
                title: "Rádios Online",
                description: "Escute suas rádios favoritas onde estiver",
                tags: ["Rádios Locais", "Música", "Notícias", "Esportes"]
              },
              {
                icon: Smartphone,
                title: "No Seu Celular",
                description: "App fácil de usar para Android e iOS",
                tags: ["Android", "iOS", "Fácil de Usar", "Gratuito"]
              },
              {
                icon: Zap,
                title: "Transmissão Ao Vivo",
                description: "Tudo que passa na TV, passa no app em tempo real",
                tags: ["Ao Vivo", "Tempo Real", "Sem Atraso", "Qualidade HD"]
              }
            ].map((feature, index) => (
              <Card key={index} className="text-center p-6 md:p-8 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 border-0 bg-gradient-to-b from-orange-50 to-white shadow-lg">
                <div className="w-16 h-16 md:w-24 md:h-24 bg-gradient-to-br from-orange-500 to-red-500 rounded-3xl flex items-center justify-center mx-auto mb-4 md:mb-6 shadow-2xl">
                  <feature.icon className="w-8 h-8 md:w-12 md:h-12 text-white" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-3 md:mb-4">{feature.title}</h3>
                <p className="text-gray-600 mb-4 md:mb-6 text-sm md:text-base">
                  {feature.description}
                </p>
                <div className="flex flex-wrap gap-1 md:gap-2 justify-center">
                  {feature.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="inline-block bg-gradient-to-r from-orange-100 to-red-100 text-orange-600 px-2 md:px-3 py-1 rounded-full text-xs font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
              </Card>
            ))}
          </div>

          <div className="bg-gradient-to-r from-orange-500 via-red-500 to-orange-600 rounded-3xl p-8 md:p-16 text-white relative overflow-hidden shadow-2xl">
            <div className="absolute inset-0 bg-black/10"></div>
            <div className="absolute top-10 right-10 w-32 h-32 bg-white/10 rounded-full blur-xl"></div>
            <div className="absolute bottom-10 left-10 w-24 h-24 bg-orange-300/20 rounded-full blur-xl"></div>
            <div className="relative z-10 text-center">
              <h3 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6">Pronto para ter Internet + SaraivaTV?</h3>
              <p className="text-lg md:text-2xl mb-6 md:mb-10 opacity-90 max-w-2xl mx-auto">
                Não perca tempo! Aproveite nossa oferta especial e ganhe o app SaraivaTV grátis.
              </p>
              <div className="flex justify-center">
                <Button 
                  onClick={handleWhatsAppClick}
                  className="bg-white text-orange-600 hover:bg-gray-100 px-6 md:px-8 py-3 md:py-4 text-lg md:text-xl font-bold rounded-2xl shadow-2xl transform hover:scale-110 transition-all duration-300 whitespace-nowrap"
                >
                  💬 Entrar em Contato
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 md:py-24 px-3 md:px-6 bg-gradient-to-r from-orange-500 via-red-500 to-orange-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute top-10 right-10 w-64 md:w-96 h-64 md:h-96 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 left-10 w-48 md:w-72 h-48 md:h-72 bg-orange-300/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-3 md:mb-4">Números Que Falam Por Si</h2>
          <p className="text-lg md:text-2xl text-white/90 mb-8 md:mb-12">
            Resultados conquistados com dedicação e compromisso com a região
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            {[
              { icon: Users, value: 500, label: "Famílias Conectadas", suffix: "+", description: "Lares piauenses com internet de qualidade" },
              { icon: MapPin, value: 5, label: "Cidades Atendidas", suffix: "", description: "Cobertura no sul do Piauí" },
              { icon: Zap, value: 99.9, label: "Uptime Garantido", suffix: "%", description: "Conexão estável e confiável" },
              { icon: Heart, value: 98, label: "Satisfação", suffix: "%", description: "Clientes recomendam nossos serviços" }
            ].map((stat, index) => (
              <div key={index} className="bg-white/15 backdrop-blur-sm rounded-3xl p-4 md:p-8 text-white shadow-2xl hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
                <div className="w-12 h-12 md:w-20 md:h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-6 shadow-lg">
                  <stat.icon className="w-6 h-6 md:w-10 md:h-10 text-white" />
                </div>
                <StatsCounter endValue={stat.value} label={stat.label} suffix={stat.suffix} />
                <div className="text-white/80 mt-2 text-xs md:text-lg">
                  {stat.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre" className="py-16 md:py-24 px-3 md:px-6 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <div className="inline-flex items-center bg-orange-100 text-orange-600 px-4 py-2 rounded-full text-sm font-medium mb-4 md:mb-6">
              <Heart className="w-4 h-4 mr-2" />
              Nossa História
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-3 md:mb-4">Sobre a SaraivaNet</h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto">
              Há 22 anos conectando Eliseu Martins com o mundo digital. Somos uma empresa piauense 
              comprometida em levar internet de qualidade para todos os lares e empresas da nossa cidade.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
            <div className="animate-fade-in">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 md:mb-6">Nossa História</h3>
              <p className="text-gray-600 mb-4 md:mb-6 text-base md:text-lg">
                Fundada em 2003 por empreendedores locais, a SaraivaNet nasceu do sonho 
                de democratizar o acesso à internet de qualidade em Eliseu Martins.
              </p>
              <p className="text-gray-600 mb-4 md:mb-6 text-base md:text-lg">
                Começamos atendendo apenas algumas famílias e hoje somos referência em 
                conectividade na região, sempre mantendo nosso compromisso com a 
                excelência no atendimento e tecnologia de ponta.
              </p>
              <p className="text-gray-600 mb-6 md:mb-8 text-base md:text-lg">
                Nossa missão é simples: conectar pessoas, aproximar famílias e impulsionar o 
                desenvolvimento digital da nossa querida cidade piauense.
              </p>

              <div className="grid grid-cols-2 gap-4 md:gap-8">
                {[
                  { icon: Users, value: "500+", label: "Clientes Ativos" },
                  { icon: MapPin, value: "100%", label: "Cobertura Local" },
                  { icon: Award, value: "22", label: "Anos de Experiência" },
                  { icon: Heart, value: "24h", label: "Suporte Local" }
                ].map((item, index) => (
                  <div key={index} className="text-center p-4 md:p-6 bg-gradient-to-b from-orange-50 to-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 transform">
                    <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4 shadow-lg">
                      <item.icon className="w-6 h-6 md:w-8 md:h-8 text-white" />
                    </div>
                    <div className="text-2xl md:text-3xl font-bold text-orange-500">{item.value}</div>
                    <div className="text-xs md:text-sm text-gray-600 font-medium">{item.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-3xl p-6 md:p-10 shadow-2xl animate-fade-in delay-300">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 md:mb-6 text-center">
                Tecnologia que Conecta Corações
              </h3>
              <p className="text-gray-600 text-center mb-6 md:mb-8 text-sm md:text-lg leading-relaxed">
                Na SaraivaNet, acreditamos que internet não é apenas tecnologia, é conexão humana. É o avô vendo 
                o neto pela primeira vez por videochamada, é o estudante acessando conhecimento, e o 
                empreendedor expandindo seus negócios. Somos parte da sua história há mais de duas décadas.
              </p>
              <div className="text-center">
                <div className="inline-flex items-center text-orange-600 font-bold text-sm md:text-lg bg-white px-4 md:px-6 py-2 md:py-3 rounded-full shadow-lg">
                  <Heart className="w-5 h-5 md:w-6 md:h-6 mr-2" />
                  Feito com amor no Piauí desde 2003
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 md:py-24 px-3 md:px-6 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <div className="inline-flex items-center bg-orange-100 text-orange-600 px-4 py-2 rounded-full text-sm font-medium mb-4 md:mb-6">
              <Star className="w-4 h-4 mr-2" />
              Depoimentos
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-3 md:mb-4">O Que Nossos Clientes Dizem</h2>
            <p className="text-lg md:text-xl text-gray-600">
              Histórias reais de pessoas que confiam na SaraivaNet para se conectar com o mundo
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
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
      <section id="contato" className="py-16 md:py-24 px-3 md:px-6 bg-gradient-to-br from-orange-600 via-red-700 to-orange-800 dark:from-gray-900 dark:via-gray-800 dark:to-gray-700">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <div className="inline-flex items-center bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium mb-4 md:mb-6 border border-white/30">
              <Phone className="w-4 h-4 mr-2" />
              Fale Conosco
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-3 md:mb-4">Entre em Contato</h2>
            <p className="text-lg md:text-xl text-orange-200">
              Estamos aqui para ajudar! Entre em contato conosco e descubra como podemos 
              conectar você ao mundo digital.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8 mb-8 md:mb-12">
            {[
              { icon: Phone, title: "Telefone", value: "(89) 99439-5789", description: "WhatsApp disponível" },
              { icon: MapPin, title: "Endereço", value: "Rua Fernando Silva, Centro", description: "Eliseu Martins - PI" },
              { icon: Clock, title: "Horário", value: "Segunda a Sábado", description: "8h às 18h" }
            ].map((contact, index) => (
              <Card key={index} className="p-6 md:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center shadow-lg">
                    <contact.icon className="w-6 h-6 md:w-8 md:h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-gray-800">{contact.title}</h3>
                    <p className="text-gray-600 text-sm md:text-lg">{contact.value}</p>
                    <p className="text-xs md:text-sm text-gray-500">{contact.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center space-y-4 md:space-y-0 md:space-x-6 flex flex-col md:flex-row justify-center">
            <Button 
              onClick={handleWhatsAppClick}
              className="bg-green-500 hover:bg-green-600 text-white px-8 md:px-12 py-3 md:py-4 rounded-2xl text-sm md:text-lg font-bold shadow-xl border-0 transition-all duration-300 transform hover:scale-105"
            >
              📱 WhatsApp
            </Button>
            <Button className="bg-white text-orange-600 hover:bg-orange-50 px-8 md:px-12 py-3 md:py-4 rounded-2xl text-sm md:text-lg font-bold shadow-xl border-0 transition-all duration-300 transform hover:scale-105">
              📞 Ligar Agora
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-b from-gray-800 to-gray-900 dark:from-gray-900 dark:to-black text-white py-12 md:py-16 px-3 md:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4 md:mb-6">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center shadow-lg">
                  <Wifi className="w-5 h-5 md:w-6 md:h-6 text-white" />
                </div>
                <span className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">SaraivaNet</span>
              </div>
              <p className="text-gray-300 mb-4 md:mb-6 leading-relaxed text-sm md:text-lg">
                Conectando Eliseu Martins com o mundo há 22 anos. Internet de qualidade, 
                suporte especializado e compromisso com nossa comunidade.
              </p>
              <div className="flex items-center text-orange-400 bg-orange-900/20 px-3 md:px-4 py-2 rounded-full">
                <Heart className="w-4 h-4 md:w-5 md:h-5 mr-2" />
                <span className="font-medium text-xs md:text-sm">Feito com amor no Piauí desde 2003</span>
              </div>
            </div>

            <div>
              <h4 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-orange-400">Links Rápidos</h4>
              <ul className="space-y-2 md:space-y-3">
                {[
                  { href: "#inicio", label: "Início" },
                  { href: "#planos", label: "Planos" },
                  { href: "#cobertura", label: "Cobertura" },
                  { href: "#sobre", label: "Sobre Nós" },
                  { href: "#contato", label: "Contato" }
                ].map((link, index) => (
                  <li key={index}>
                    <a href={link.href} onClick={(e) => handleSmoothScroll(e, link.href.substring(1))} className="text-gray-300 hover:text-orange-400 transition-colors text-sm md:text-lg hover:scale-105 transform inline-block">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-orange-400">Contato</h4>
              <ul className="space-y-3 md:space-y-4">
                <li className="flex items-center space-x-3">
                  <Phone className="w-4 h-4 md:w-5 md:h-5 text-orange-400" />
                  <span className="text-sm md:text-lg">(89) 99439-5789</span>
                </li>
                <li className="flex items-center space-x-3">
                  <MapPin className="w-4 h-4 md:w-5 md:h-5 text-orange-400" />
                  <span className="text-sm md:text-lg">Rua Fernando Silva, Centro, Eliseu Martins - PI</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-8 md:mt-12 pt-6 md:pt-8 text-center">
            <p className="text-gray-400 text-sm md:text-lg">
              © 2025 SaraivaNet. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
