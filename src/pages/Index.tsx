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
      
      {/* Header with Enhanced Glassmorphism */}
      <header className="bg-white/10 backdrop-blur-lg shadow-2xl px-3 md:px-4 py-2 md:py-4 border-b border-white/20 z-50 transition-all duration-500 sticky top-0">
        {/* Mobile Layout */}
        <div className="md:hidden">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-6 h-6 bg-gradient-to-br from-orange-500 to-red-600 rounded-lg flex items-center justify-center shadow-xl animate-pulse">
                <Wifi className="w-3 h-3 text-white" />
              </div>
              <div>
                <span className="text-base font-black text-white bg-gradient-to-r from-orange-200 to-yellow-200 bg-clip-text text-transparent">SaraivaNet</span>
                <div className="text-xs text-orange-100 font-medium flex items-center">
                  <MapPin className="w-2 h-2 mr-1" />
                  Eliseu Martins - PI
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-1">
              <ThemeToggle />
              <MobileNavigation />
            </div>
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden md:flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center shadow-2xl animate-pulse">
              <Wifi className="w-6 h-6 text-white" />
            </div>
            <div>
              <span className="text-2xl font-black text-white bg-gradient-to-r from-orange-200 to-yellow-200 bg-clip-text text-transparent">SaraivaNet</span>
              <div className="text-sm text-orange-100 font-semibold flex items-center">
                <MapPin className="w-3 h-3 mr-1" />
                Eliseu Martins - PI
              </div>
            </div>
          </div>
          
          <nav className="flex items-center space-x-6">
            {[
              { href: "#inicio", label: "Início" },
              { href: "#planos", label: "Planos" },
              { href: "#cobertura", label: "Cobertura" },
              { href: "#sobre", label: "Sobre" },
              { href: "#contato", label: "Contato" }
            ].map((item) => (
              <a 
                key={item.href}
                href={item.href} 
                onClick={e => handleSmoothScroll(e, item.href.slice(1))} 
                className="text-white hover:text-orange-200 transition-all duration-300 font-semibold text-base relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-orange-300 to-yellow-300 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          <div className="flex items-center space-x-4">
            <ThemeToggle />
          </div>
        </div>
      </header>

      {/* Hero Section with Enhanced Visual Appeal */}
      <section id="inicio" className="relative min-h-screen flex items-center bg-gradient-to-br from-orange-500 via-red-500 to-purple-600 dark:from-gray-900 dark:via-gray-800 dark:to-gray-700 text-white px-3 md:px-4 py-6 md:py-12 overflow-hidden">
        {/* Enhanced Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-orange-600/30 via-red-600/30 to-purple-700/30"></div>
          <div className="absolute top-10 right-10 w-32 h-32 md:w-96 md:h-96 bg-gradient-to-r from-orange-400/20 to-yellow-400/20 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-10 left-10 w-28 h-28 md:w-80 md:h-80 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-1/2 left-1/2 w-24 h-24 md:w-64 md:h-64 bg-gradient-to-r from-red-400/15 to-orange-400/15 rounded-full blur-2xl animate-float" style={{ animationDelay: '1s' }}></div>
        </div>
        
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-6 md:gap-12 items-center relative z-10">
          <AnimatedSection animation="fade-up">
            <div>
              <div className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-3 md:px-6 py-2 md:py-3 mb-4 md:mb-8 border border-white/30 hover:bg-white/30 transition-all duration-300 group">
                <Star className="w-3 h-3 md:w-5 md:h-5 mr-2 md:mr-3 text-yellow-300 animate-pulse" />
                <span className="text-xs md:text-lg font-bold bg-gradient-to-r from-white to-orange-100 bg-clip-text text-transparent">Internet + SaraivaTV Grátis</span>
              </div>
              
              <h1 className="text-2xl md:text-6xl lg:text-7xl font-black mb-3 md:mb-6 leading-tight">
                Internet<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-200 via-yellow-200 to-orange-100 animate-pulse">+ SaraivaTV</span>
              </h1>
              
              <p className="text-sm md:text-xl lg:text-2xl mb-4 md:mb-8 text-gray-100 leading-relaxed">
                Conecte-se com nossa internet de <span className="font-bold text-orange-200">fibra óptica ultrarrápida</span> e ganhe acesso completo ao app SaraivaTV.
              </p>

              <div className="grid grid-cols-2 gap-1.5 md:gap-4 mb-4 md:mb-8">
                {[
                  { icon: Wifi, text: "Internet Ultra Rápida", color: "from-blue-400 to-cyan-400" },
                  { icon: Tv, text: "Canais de TV", color: "from-purple-400 to-pink-400" },
                  { icon: Music, text: "Rádios Online", color: "from-green-400 to-emerald-400" },
                  { icon: Shield, text: "Suporte 24h", color: "from-red-400 to-orange-400" }
                ].map((feature, index) => (
                  <div key={index} className="bg-white/15 backdrop-blur-sm rounded-lg md:rounded-2xl p-2 md:p-4 flex items-center space-x-1.5 md:space-x-3 border border-white/20 hover:bg-white/25 transition-all duration-300 hover:scale-105 transform group">
                    <div className={`w-6 h-6 md:w-12 md:h-12 bg-gradient-to-br ${feature.color} rounded-lg md:rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 flex-shrink-0`}>
                      <feature.icon className="w-3 h-3 md:w-6 md:h-6 text-white" />
                    </div>
                    <span className="font-bold text-xs md:text-sm text-gray-100 leading-tight">{feature.text}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col gap-2 md:gap-6 mb-4 md:mb-10">
                <Button 
                  onClick={handleWhatsAppClick} 
                  className="w-full md:w-auto bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-4 md:px-8 py-3 md:py-4 rounded-xl md:rounded-2xl font-black text-sm md:text-xl shadow-2xl border-0 transition-all duration-300 transform hover:scale-105 hover:shadow-orange-500/50 animate-pulse"
                >
                  Contratar Agora →
                </Button>
                <Button className="w-full md:w-auto bg-white/20 backdrop-blur-sm border-2 border-white/50 text-white hover:bg-white hover:text-orange-600 px-4 md:px-8 py-3 md:py-4 rounded-xl md:rounded-2xl font-bold text-sm md:text-xl shadow-2xl transition-all duration-300 transform hover:scale-105">
                  Saiba Mais
                </Button>
              </div>

              <div className="grid grid-cols-4 gap-2 md:gap-12 text-center">
                {[
                  { value: 500, label: "Clientes", suffix: "+" },
                  { value: 99.9, label: "Uptime", suffix: "%" },
                  { value: 20, label: "Canais", suffix: "+" },
                  { value: 24, label: "Suporte", suffix: "h" }
                ].map((stat, index) => (
                  <div key={index} className="group">
                    <StatsCounter endValue={stat.value} label="" suffix={stat.suffix} />
                    <div className="text-orange-200 font-semibold text-xs md:text-sm group-hover:text-white transition-colors duration-300">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="scale-in" delay={300}>
            <div className="bg-white/15 backdrop-blur-lg rounded-2xl md:rounded-3xl p-4 md:p-8 border border-white/20 shadow-2xl hover:bg-white/20 transition-all duration-500 hover:scale-105 transform group">
              <div className="text-center mb-4 md:mb-8">
                <div className="w-12 h-12 md:w-20 md:h-20 bg-gradient-to-br from-orange-400 to-red-400 rounded-2xl md:rounded-3xl flex items-center justify-center mx-auto mb-3 md:mb-6 shadow-2xl group-hover:scale-110 transition-transform duration-300">
                  <Smartphone className="w-6 h-6 md:w-10 md:h-10 text-white" />
                </div>
                <h3 className="text-xl md:text-3xl font-black mb-2 md:mb-3">SaraivaTV</h3>
                <p className="text-orange-200 text-sm md:text-lg">Seus canais favoritos no celular</p>
              </div>
              
              <div className="grid grid-cols-2 gap-2 md:gap-4 mb-4 md:mb-8">
                {[
                  { icon: Tv, label: "Canais de TV" },
                  { icon: Music, label: "Rádios" },
                  { icon: Zap, label: "Ao Vivo" },
                  { icon: Smartphone, label: "No Celular" }
                ].map((item, index) => (
                  <div key={index} className="bg-white/10 rounded-xl md:rounded-2xl p-2 md:p-4 text-center border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 transform">
                    <item.icon className="w-4 h-4 md:w-8 md:h-8 mx-auto mb-1 md:mb-3 text-orange-300" />
                    <span className="text-xs md:text-base font-semibold leading-tight">{item.label}</span>
                  </div>
                ))}
              </div>
              
              <p className="text-center text-sm md:text-lg text-orange-200 mb-3 md:mb-6 font-semibold">
                Disponível para Android e iOS
              </p>
              
              <div className="flex justify-center space-x-2 md:space-x-4">
                <div className="bg-white/10 rounded-xl md:rounded-2xl p-2 md:p-3 border border-white/20 hover:bg-white/20 transition-all duration-300">
                  <Smartphone className="w-4 h-4 md:w-8 md:h-8 text-orange-300" />
                </div>
                <div className="bg-white/10 rounded-xl md:rounded-2xl p-2 md:p-3 border border-white/20 hover:bg-white/20 transition-all duration-300">
                  <Tv className="w-4 h-4 md:w-8 md:h-8 text-orange-300" />
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Plans Section with Enhanced Mobile Design */}
      <section id="planos" className="bg-gradient-to-br from-gray-900 via-black to-gray-900 dark:from-gray-900 dark:via-black dark:to-gray-900 text-white px-3 md:px-4 py-12 md:py-20 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-10 right-10 w-48 h-48 md:w-96 md:h-96 bg-gradient-to-r from-orange-600/20 to-red-600/20 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-10 left-10 w-32 h-32 md:w-80 md:h-80 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <AnimatedSection animation="fade-up">
            <div className="text-center mb-8 md:mb-16">
              <div className="inline-flex items-center bg-gradient-to-r from-orange-600 to-red-600 text-white px-3 md:px-6 py-2 md:py-3 rounded-full text-sm md:text-lg font-bold mb-4 md:mb-8 shadow-2xl">
                <Award className="w-3 h-3 md:w-5 md:h-5 mr-2" />
                Plano Exclusivo para Você
              </div>
              <h2 className="text-2xl md:text-6xl lg:text-7xl font-black bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent mb-4 md:mb-8">
                Internet + SaraivaTV
              </h2>
              <p className="text-sm md:text-2xl text-gray-300 mb-3 md:mb-6 max-w-4xl mx-auto leading-relaxed">
                O plano completo que vai transformar sua experiência digital
              </p>
              <div className="inline-flex items-center bg-gradient-to-r from-green-600 to-emerald-600 text-white px-3 md:px-8 py-2 md:py-3 rounded-full font-black text-sm md:text-xl shadow-2xl animate-bounce">
                🎉 Oferta especial: 3 meses com desconto!
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="scale-in" delay={200}>
            <div className="max-w-5xl mx-auto">
              <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-lg rounded-2xl md:rounded-3xl shadow-2xl overflow-hidden border border-gray-600/50 hover:scale-105 transform transition-all duration-700 hover:shadow-orange-500/30 hover:shadow-2xl group">
                <div className="bg-gradient-to-r from-orange-600 to-red-600 p-4 md:p-10 text-white text-center group-hover:from-orange-500 group-hover:to-red-500 transition-all duration-500">
                  <div className="w-12 h-12 md:w-20 md:h-20 bg-gradient-to-br from-orange-400 to-red-400 rounded-2xl md:rounded-3xl flex items-center justify-center mx-auto mb-3 md:mb-6 group-hover:scale-110 transition-transform duration-300 shadow-2xl">
                    <Wifi className="w-6 h-6 md:w-10 md:h-10 text-white" />
                  </div>
                  <h3 className="text-xl md:text-4xl font-black mb-2 md:mb-4">Plano Completo</h3>
                  <div className="text-3xl md:text-6xl font-black mb-2 md:mb-4">300MB</div>
                  <div className="text-base md:text-2xl opacity-90 font-semibold">Fibra Óptica + SaraivaTV Grátis</div>
                </div>

                <div className="p-4 md:p-10">
                  <div className="grid lg:grid-cols-2 gap-6 md:gap-12 items-center">
                    <div className="text-center lg:text-left">
                      <div className="mb-4 md:mb-8">
                        <div className="text-base md:text-2xl text-gray-400 line-through mb-1 md:mb-3">De R$ 169,90</div>
                        <div className="text-3xl md:text-7xl font-black text-orange-400 mb-1 md:mb-3 group-hover:text-orange-300 transition-colors duration-300">
                          R$ 129<span className="text-lg md:text-3xl">,90</span>
                        </div>
                        <div className="text-base md:text-2xl text-gray-300 font-semibold">por mês</div>
                      </div>

                      <div className="bg-gradient-to-r from-green-800/80 to-emerald-800/80 backdrop-blur-sm p-3 md:p-6 rounded-xl md:rounded-2xl mb-4 md:mb-8 border border-green-600/50 group-hover:from-green-700/80 group-hover:to-emerald-700/80 transition-all duration-300">
                        <div className="text-green-300 font-black text-sm md:text-xl mb-1 md:mb-2">💰 Economia de R$ 120 nos primeiros 3 meses!</div>
                        <div className="text-green-400 text-xs md:text-lg">Promoção válida para novos clientes</div>
                      </div>

                      <Button 
                        onClick={handleWhatsAppClick} 
                        className="w-full lg:w-auto bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white font-black py-3 md:py-6 px-4 md:px-10 text-base md:text-xl rounded-xl md:rounded-2xl shadow-2xl hover:scale-110 transform transition-all duration-300"
                      >
                        Contratar Agora →
                      </Button>
                    </div>

                    <div>
                      <h4 className="text-lg md:text-3xl font-black text-white mb-4 md:mb-8">
                        Tudo que você precisa:
                      </h4>
                      <div className="space-y-2 md:space-y-4">
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
                          <div key={index} className="flex items-center space-x-2 md:space-x-4 p-2 md:p-4 bg-gradient-to-r from-gray-700/50 to-gray-800/50 backdrop-blur-sm rounded-xl md:rounded-2xl border border-gray-600/50 hover:from-orange-600/30 hover:to-red-600/30 hover:border-orange-500/50 transition-all duration-300 hover:scale-105 transform group/item">
                            <div className="w-6 h-6 md:w-12 md:h-12 bg-gradient-to-br from-orange-600 to-red-600 rounded-lg md:rounded-2xl flex items-center justify-center flex-shrink-0 group-hover/item:scale-110 transition-transform duration-300">
                              <feature.icon className="w-3 h-3 md:w-7 md:h-7 text-white" />
                            </div>
                            <span className="font-bold text-gray-200 text-xs md:text-lg leading-tight">{feature.text}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>

          <div className="text-center mt-8 md:mt-16">
            <div className="bg-gradient-to-r from-orange-600 to-red-600 rounded-2xl md:rounded-3xl p-6 md:p-12 text-white shadow-2xl relative overflow-hidden">
              <div className="absolute inset-0 bg-black/10"></div>
              <div className="absolute top-10 right-10 w-20 h-20 md:w-40 md:h-40 bg-white/10 rounded-full blur-2xl"></div>
              <div className="absolute bottom-10 left-10 w-16 h-16 md:w-32 md:h-32 bg-orange-300/20 rounded-full blur-2xl"></div>
              <div className="relative z-10">
                <h3 className="text-xl md:text-5xl font-bold mb-4 md:mb-6">Não Perca Esta Oportunidade!</h3>
                <p className="text-sm md:text-2xl mb-6 md:mb-8 opacity-90 max-w-3xl mx-auto leading-relaxed">
                  Conecte-se com a melhor internet de Eliseu Martins e ganhe o SaraivaTV de presente.
                </p>
                <div className="flex flex-col gap-3 md:gap-6 justify-center items-center">
                  <Button 
                    onClick={handleWhatsAppClick} 
                    className="w-full md:w-auto bg-white text-orange-600 hover:bg-gray-100 px-6 md:px-10 py-3 md:py-5 text-base md:text-xl font-black rounded-xl md:rounded-2xl shadow-2xl hover:scale-110 transition-all duration-300"
                  >
                    💬 WhatsApp
                  </Button>
                  <Button className="w-full md:w-auto bg-white text-orange-600 hover:bg-orange-50 border-2 border-white px-6 md:px-10 py-3 md:py-5 text-base md:text-xl font-black rounded-xl md:rounded-2xl shadow-2xl hover:scale-110 transition-all duration-300">
                    📞 Ligar Agora
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Área de Cobertura */}
      <AnimatedSection className="py-12 md:py-20 bg-gradient-to-br from-blue-600 via-purple-600 to-orange-500 text-white">
        <div className="container mx-auto px-3 md:px-4">
          <div className="text-center mb-8 md:mb-16">
            <h2 className="text-xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-6">
              🗺️ Nossa Área de Cobertura
            </h2>
            <p className="text-sm md:text-xl text-blue-100 mb-4 md:mb-8 max-w-3xl mx-auto">
              Levamos internet de fibra óptica de alta qualidade para toda a região sul do Piauí
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 md:gap-12 items-center mb-6 md:mb-12">
            <div>
              <h3 className="text-lg md:text-2xl font-bold mb-3 md:mb-6">🏙️ Cidades Atendidas</h3>
              <div className="space-y-2 md:space-y-4">
                {[
                  { name: "Eliseu Martins", status: "Cobertura Completa" },
                  { name: "Colônia do Gurguéia", status: "Internet Ativa" },
                  { name: "Manoel Emídio", status: "Fibra Óptica" },
                  { name: "Jerumenha", status: "Premium TV" }
                ].map((city, index) => (
                  <div key={index} className="flex items-center space-x-2 md:space-x-4 p-2 md:p-4 bg-white/10 rounded-lg md:rounded-xl backdrop-blur-sm">
                    <div className="w-2 h-2 md:w-3 md:h-3 bg-green-400 rounded-full animate-pulse"></div>
                    <div>
                      <div className="font-semibold text-sm md:text-base">{city.name}</div>
                      <div className="text-xs md:text-sm text-blue-200">{city.status}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <RealMap />
            </div>
          </div>

          <div className="text-center">
            <a 
              href="https://wa.me/5586999999999?text=Olá! Gostaria de saber sobre a disponibilidade da internet SaraivaNet na minha região." 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center space-x-2 md:space-x-3 bg-green-500 hover:bg-green-600 text-white px-4 md:px-8 py-3 md:py-4 rounded-full font-semibold text-sm md:text-xl transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              <span>💬</span>
              <span>Verificar Disponibilidade</span>
            </a>
          </div>
        </div>
      </AnimatedSection>

      {/* SaraivaTV Features Section */}
      <section className="py-12 md:py-24 px-3 md:px-6 bg-gradient-to-b from-white to-orange-50 dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 md:mb-16">
            <div className="inline-flex items-center bg-orange-100 text-orange-600 px-3 md:px-4 py-1 md:py-2 rounded-full text-sm md:text-base font-medium mb-4 md:mb-6">
              <Tv className="w-3 h-3 md:w-5 md:h-5 mr-2" />
              App Exclusivo
            </div>
            <h2 className="text-2xl md:text-6xl font-bold mb-4 md:mb-6">
              Conheça o <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">SaraivaTV</span>
            </h2>
            <p className="text-sm md:text-xl text-gray-600 max-w-3xl mx-auto">
              App gratuito que vem junto com sua internet. Assista TV direto no celular com qualidade HD!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-8 mb-8 md:mb-16">
            <Card className="text-center p-4 md:p-8 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1 md:hover:-translate-y-4 border-0 bg-gradient-to-b from-orange-50 to-white shadow-lg">
              <div className="w-16 h-16 md:w-24 md:h-24 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl md:rounded-3xl flex items-center justify-center mx-auto mb-3 md:mb-6 shadow-2xl">
                <Tv className="w-8 h-8 md:w-12 md:h-12 text-white" />
              </div>
              <h3 className="text-base md:text-2xl font-bold text-gray-800 mb-2 md:mb-4">Canais de TV</h3>
              <p className="text-gray-600 mb-3 md:mb-6 text-sm md:text-base">
                Assista os mesmos canais da sua TV direto no celular
              </p>
              <div className="space-y-1 md:space-y-2">
                <span className="inline-block bg-gradient-to-r from-orange-100 to-red-100 text-orange-600 px-2 py-1 rounded-full text-xs font-medium">TV Aberta</span>
                <span className="inline-block bg-gradient-to-r from-orange-100 to-red-100 text-orange-600 px-2 py-1 rounded-full text-xs font-medium ml-1">Canais Locais</span>
                <div className="mt-1">
                  <span className="inline-block bg-gradient-to-r from-orange-100 to-red-100 text-orange-600 px-2 py-1 rounded-full text-xs font-medium">Notícias</span>
                  <span className="inline-block bg-gradient-to-r from-orange-100 to-red-100 text-orange-600 px-2 py-1 rounded-full text-xs font-medium ml-1">Esportes</span>
                </div>
              </div>
            </Card>

            <Card className="text-center p-4 md:p-8 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1 md:hover:-translate-y-4 border-0 bg-gradient-to-b from-orange-50 to-white shadow-lg">
              <div className="w-16 h-16 md:w-24 md:h-24 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl md:rounded-3xl flex items-center justify-center mx-auto mb-3 md:mb-6 shadow-2xl">
                <Music className="w-8 h-8 md:w-12 md:h-12 text-white" />
              </div>
              <h3 className="text-base md:text-2xl font-bold text-gray-800 mb-2 md:mb-4">Rádios Online</h3>
              <p className="text-gray-600 mb-3 md:mb-6 text-sm md:text-base">
                Escute suas rádios favoritas onde estiver
              </p>
              <div className="space-y-1 md:space-y-2">
                <span className="inline-block bg-gradient-to-r from-orange-100 to-red-100 text-orange-600 px-2 py-1 rounded-full text-xs font-medium">Rádios Locais</span>
                <span className="inline-block bg-gradient-to-r from-orange-100 to-red-100 text-orange-600 px-2 py-1 rounded-full text-xs font-medium ml-1">Música</span>
                <div className="mt-1">
                  <span className="inline-block bg-gradient-to-r from-orange-100 to-red-100 text-orange-600 px-2 py-1 rounded-full text-xs font-medium">Notícias</span>
                  <span className="inline-block bg-gradient-to-r from-orange-100 to-red-100 text-orange-600 px-2 py-1 rounded-full text-xs font-medium ml-1">Esportes</span>
                </div>
              </div>
            </Card>

            <Card className="text-center p-4 md:p-8 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1 md:hover:-translate-y-4 border-0 bg-gradient-to-b from-orange-50 to-white shadow-lg">
              <div className="w-16 h-16 md:w-24 md:h-24 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl md:rounded-3xl flex items-center justify-center mx-auto mb-3 md:mb-6 shadow-2xl">
                <Smartphone className="w-8 h-8 md:w-12 md:h-12 text-white" />
              </div>
              <h3 className="text-base md:text-2xl font-bold text-gray-800 mb-2 md:mb-4">No Seu Celular</h3>
              <p className="text-gray-600 mb-3 md:mb-6 text-sm md:text-base">
                App fácil de usar para Android e iOS
              </p>
              <div className="space-y-1 md:space-y-2">
                <span className="inline-block bg-gradient-to-r from-orange-100 to-red-100 text-orange-600 px-2 py-1 rounded-full text-xs font-medium">Android</span>
                <span className="inline-block bg-gradient-to-r from-orange-100 to-red-100 text-orange-600 px-2 py-1 rounded-full text-xs font-medium ml-1">iOS</span>
                <div className="mt-1">
                  <span className="inline-block bg-gradient-to-r from-orange-100 to-red-100 text-orange-600 px-2 py-1 rounded-full text-xs font-medium">Fácil de Usar</span>
                  <span className="inline-block bg-gradient-to-r from-orange-100 to-red-100 text-orange-600 px-2 py-1 rounded-full text-xs font-medium ml-1">Gratuito</span>
                </div>
              </div>
            </Card>

            <Card className="text-center p-4 md:p-8 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1 md:hover:-translate-y-4 border-0 bg-gradient-to-b from-orange-50 to-white shadow-lg">
              <div className="w-16 h-16 md:w-24 md:h-24 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl md:rounded-3xl flex items-center justify-center mx-auto mb-3 md:mb-6 shadow-2xl">
                <Zap className="w-8 h-8 md:w-12 md:h-12 text-white" />
              </div>
              <h3 className="text-base md:text-2xl font-bold text-gray-800 mb-2 md:mb-4">Transmissão Ao Vivo</h3>
              <p className="text-gray-600 mb-3 md:mb-6 text-sm md:text-base">
                Tudo que passa na TV, passa no app em tempo real
              </p>
              <div className="space-y-1 md:space-y-2">
                <span className="inline-block bg-gradient-to-r from-orange-100 to-red-100 text-orange-600 px-2 py-1 rounded-full text-xs font-medium">Ao Vivo</span>
                <span className="inline-block bg-gradient-to-r from-orange-100 to-red-100 text-orange-600 px-2 py-1 rounded-full text-xs font-medium ml-1">Tempo Real</span>
                <div className="mt-1">
                  <span className="inline-block bg-gradient-to-r from-orange-100 to-red-100 text-orange-600 px-2 py-1 rounded-full text-xs font-medium">Sem Atraso</span>
                  <span className="inline-block bg-gradient-to-r from-orange-100 to-red-100 text-orange-600 px-2 py-1 rounded-full text-xs font-medium ml-1">Qualidade HD</span>
                </div>
              </div>
            </Card>
          </div>

          <div className="bg-gradient-to-r from-orange-500 via-red-500 to-red-600 rounded-2xl md:rounded-3xl p-6 md:p-16 text-white relative overflow-hidden shadow-2xl">
            <div className="absolute inset-0 bg-black/10"></div>
            <div className="absolute top-10 right-10 w-16 h-16 md:w-32 md:h-32 bg-white/10 rounded-full blur-xl"></div>
            <div className="absolute bottom-10 left-10 w-12 h-12 md:w-24 md:h-24 bg-orange-300/20 rounded-full blur-xl"></div>
            <div className="relative z-10">
              <h3 className="text-xl md:text-5xl font-bold mb-4 md:mb-6">Pronto para ter Internet + SaraivaTV?</h3>
              <p className="text-sm md:text-2xl mb-6 md:mb-8 opacity-90 max-w-2xl mx-auto">
                Não perca tempo! Aproveite nossa oferta especial e ganhe o app SaraivaTV grátis.
              </p>
              <div className="flex justify-center">
                <Button 
                  onClick={handleWhatsAppClick} 
                  className="bg-white text-orange-600 hover:bg-gray-100 px-4 md:px-8 py-3 md:py-4 text-base md:text-xl font-bold rounded-xl md:rounded-2xl shadow-2xl transform hover:scale-110 transition-all duration-300"
                >
                  💬 Entrar em Contato
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 md:py-24 px-3 md:px-6 bg-gradient-to-r from-orange-500 via-red-500 to-purple-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute top-10 right-10 w-48 h-48 md:w-96 md:h-96 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 left-10 w-32 h-32 md:w-72 md:h-72 bg-orange-300/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <h2 className="text-xl md:text-5xl font-bold text-white mb-3 md:mb-6">Números Que Falam Por Si</h2>
          <p className="text-sm md:text-2xl text-white/90 mb-6 md:mb-12">
            Resultados conquistados com dedicação e compromisso com a região
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-8">
            <div className="bg-white/15 backdrop-blur-sm rounded-2xl md:rounded-3xl p-4 md:p-8 text-white shadow-2xl hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
              <div className="w-12 h-12 md:w-20 md:h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-6 shadow-lg">
                <Users className="w-6 h-6 md:w-10 md:h-10 text-white" />
              </div>
              <StatsCounter endValue={500} label="Famílias Conectadas" suffix="+" />
              <div className="text-white/80 mt-1 md:mt-2 text-xs md:text-lg">
                Lares piauenses com internet de qualidade
              </div>
            </div>

            <div className="bg-white/15 backdrop-blur-sm rounded-2xl md:rounded-3xl p-4 md:p-8 text-white shadow-2xl hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
              <div className="w-12 h-12 md:w-20 md:h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-6 shadow-lg">
                <MapPin className="w-6 h-6 md:w-10 md:h-10 text-white" />
              </div>
              <StatsCounter endValue={5} label="Cidades Atendidas" />
              <div className="text-white/80 mt-1 md:mt-2 text-xs md:text-lg">
                Cobertura no sul do Piauí
              </div>
            </div>

            <div className="bg-white/15 backdrop-blur-sm rounded-2xl md:rounded-3xl p-4 md:p-8 text-white shadow-2xl hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
              <div className="w-12 h-12 md:w-20 md:h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-6 shadow-lg">
                <Zap className="w-6 h-6 md:w-10 md:h-10 text-white" />
              </div>
              <StatsCounter endValue={99.9} label="Uptime Garantido" suffix="%" />
              <div className="text-white/80 mt-1 md:mt-2 text-xs md:text-lg">
                Conexão estável e confiável
              </div>
            </div>

            <div className="bg-white/15 backdrop-blur-sm rounded-2xl md:rounded-3xl p-4 md:p-8 text-white shadow-2xl hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
              <div className="w-12 h-12 md:w-20 md:h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-6 shadow-lg">
                <Heart className="w-6 h-6 md:w-10 md:h-10 text-white" />
              </div>
              <StatsCounter endValue={98} label="Satisfação" suffix="%" />
              <div className="text-white/80 mt-1 md:mt-2 text-xs md:text-lg">
                Clientes recomendam nossos serviços
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre" className="py-12 md:py-24 px-3 md:px-6 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 md:mb-16">
            <div className="inline-flex items-center bg-orange-100 text-orange-600 px-3 md:px-4 py-1 md:py-2 rounded-full text-sm md:text-base font-medium mb-4 md:mb-6">
              <Heart className="w-3 h-3 md:w-5 md:h-5 mr-2" />
              Nossa História
            </div>
            <h2 className="text-xl md:text-5xl font-bold text-gray-800 mb-3 md:mb-6">Sobre a SaraivaNet</h2>
            <p className="text-sm md:text-xl text-gray-600 max-w-4xl mx-auto">
              Há 22 anos conectando Eliseu Martins com o mundo digital. Somos uma empresa piauense 
              comprometida em levar internet de qualidade para todos os lares e empresas da nossa cidade.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 md:gap-16 items-center">
            <div className="animate-fade-in">
              <h3 className="text-lg md:text-3xl font-bold text-gray-800 mb-3 md:mb-6">Nossa História</h3>
              <p className="text-gray-600 mb-3 md:mb-6 text-sm md:text-lg">
                Fundada em 2003 por empreendedores locais, a SaraivaNet nasceu do sonho 
                de democratizar o acesso à internet de qualidade em Eliseu Martins.
              </p>
              <p className="text-gray-600 mb-3 md:mb-6 text-sm md:text-lg">
                Começamos atendendo apenas algumas famílias e hoje somos referência em 
                conectividade na região, sempre mantendo nosso compromisso com a 
                excelência no atendimento e tecnologia de ponta.
              </p>
              <p className="text-gray-600 mb-4 md:mb-8 text-sm md:text-lg">
                Nossa missão é simples: conectar pessoas, aproximar famílias e impulsionar o 
                desenvolvimento digital da nossa querida cidade piauense.
              </p>

              <div className="grid grid-cols-2 gap-3 md:gap-8">
                <div className="text-center p-3 md:p-6 bg-gradient-to-b from-orange-50 to-white rounded-xl md:rounded-2xl shadow-lg">
                  <div className="w-10 h-10 md:w-16 md:h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-2 md:mb-4 shadow-lg">
                    <Users className="w-5 h-5 md:w-8 md:h-8 text-white" />
                  </div>
                  <div className="text-lg md:text-3xl font-bold text-orange-500">500+</div>
                  <div className="text-xs md:text-base text-gray-600 font-medium">Clientes Ativos</div>
                </div>
                <div className="text-center p-3 md:p-6 bg-gradient-to-b from-orange-50 to-white rounded-xl md:rounded-2xl shadow-lg">
                  <div className="w-10 h-10 md:w-16 md:h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-2 md:mb-4 shadow-lg">
                    <MapPin className="w-5 h-5 md:w-8 md:h-8 text-white" />
                  </div>
                  <div className="text-lg md:text-3xl font-bold text-orange-500">100%</div>
                  <div className="text-xs md:text-base text-gray-600 font-medium">Cobertura Local</div>
                </div>
                <div className="text-center p-3 md:p-6 bg-gradient-to-b from-orange-50 to-white rounded-xl md:rounded-2xl shadow-lg">
                  <div className="w-10 h-10 md:w-16 md:h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-2 md:mb-4 shadow-lg">
                    <Award className="w-5 h-5 md:w-8 md:h-8 text-white" />
                  </div>
                  <div className="text-lg md:text-3xl font-bold text-orange-500">22</div>
                  <div className="text-xs md:text-base text-gray-600 font-medium">Anos de Experiência</div>
                </div>
                <div className="text-center p-3 md:p-6 bg-gradient-to-b from-orange-50 to-white rounded-xl md:rounded-2xl shadow-lg">
                  <div className="w-10 h-10 md:w-16 md:h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-2 md:mb-4 shadow-lg">
                    <Heart className="w-5 h-5 md:w-8 md:h-8 text-white" />
                  </div>
                  <div className="text-lg md:text-3xl font-bold text-orange-500">24h</div>
                  <div className="text-xs md:text-base text-gray-600 font-medium">Suporte Local</div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl md:rounded-3xl p-4 md:p-10 shadow-2xl animate-fade-in delay-300">
              <h3 className="text-lg md:text-3xl font-bold text-gray-800 mb-3 md:mb-6 text-center">
                Tecnologia que Conecta Corações
              </h3>
              <p className="text-gray-600 text-center mb-4 md:mb-8 text-sm md:text-lg leading-relaxed">
                Na SaraivaNet, acreditamos que internet não é apenas tecnologia, é conexão humana. É o avô vendo 
                o neto pela primeira vez por videochamada, é o estudante acessando conhecimento, e o 
                empreendedor expandindo seus negócios. Somos parte da sua história há mais de duas décadas.
              </p>
              <div className="text-center">
                <div className="inline-flex items-center text-orange-600 font-bold text-sm md:text-lg bg-white px-3 md:px-6 py-2 md:py-3 rounded-full shadow-lg">
                  <Heart className="w-4 h-4 md:w-6 md:h-6 mr-2" />
                  Feito com amor no Piauí desde 2003
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-12 md:py-24 px-3 md:px-6 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 md:mb-16">
            <div className="inline-flex items-center bg-orange-100 text-orange-600 px-3 md:px-4 py-1 md:py-2 rounded-full text-sm md:text-base font-medium mb-4 md:mb-6">
              <Star className="w-3 h-3 md:w-5 md:h-5 mr-2" />
              Depoimentos
            </div>
            <h2 className="text-xl md:text-5xl font-bold text-gray-800 mb-3 md:mb-6">O Que Nossos Clientes Dizem</h2>
            <p className="text-sm md:text-xl text-gray-600">
              Histórias reais de pessoas que confiam na SaraivaNet para se conectar com o mundo
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-4 md:gap-8">
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
      <section id="contato" className="py-12 md:py-24 px-3 md:px-6 bg-gradient-to-br from-blue-600 via-purple-700 to-indigo-800 dark:from-gray-900 dark:via-gray-800 dark:to-gray-700">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 md:mb-16">
            <div className="inline-flex items-center bg-white/20 backdrop-blur-sm text-white px-3 md:px-4 py-1 md:py-2 rounded-full text-sm md:text-base font-medium mb-4 md:mb-6 border border-white/30">
              <Phone className="w-3 h-3 md:w-5 md:h-5 mr-2" />
              Fale Conosco
            </div>
            <h2 className="text-xl md:text-5xl font-bold text-white mb-3 md:mb-6">Entre em Contato</h2>
            <p className="text-sm md:text-xl text-blue-200 max-w-3xl mx-auto">
              Estamos aqui para ajudar! Entre em contato conosco e descubra como podemos 
              conectar você ao mundo digital.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-4 md:gap-8 mb-6 md:mb-12">
            <Card className="p-4 md:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
              <div className="flex items-center space-x-2 md:space-x-3 mb-3 md:mb-6">
                <div className="w-10 h-10 md:w-16 md:h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg md:rounded-xl flex items-center justify-center shadow-lg">
                  <Phone className="w-5 h-5 md:w-8 md:h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-base md:text-2xl font-bold text-gray-800">Telefone</h3>
                  <p className="text-gray-600 text-sm md:text-lg">(89) 99439-5789</p>
                  <p className="text-xs md:text-base text-gray-500">WhatsApp disponível</p>
                </div>
              </div>
            </Card>

            <Card className="p-4 md:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
              <div className="flex items-center space-x-2 md:space-x-3 mb-3 md:mb-6">
                <div className="w-10 h-10 md:w-16 md:h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg md:rounded-xl flex items-center justify-center shadow-lg">
                  <MapPin className="w-5 h-5 md:w-8 md:h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-base md:text-2xl font-bold text-gray-800">Endereço</h3>
                  <p className="text-gray-600 text-sm md:text-lg">Rua Fernando Silva, Centro</p>
                  <p className="text-xs md:text-base text-gray-500">Eliseu Martins - PI</p>
                </div>
              </div>
            </Card>

            <Card className="p-4 md:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
              <div className="flex items-center space-x-2 md:space-x-3 mb-3 md:mb-6">
                <div className="w-10 h-10 md:w-16 md:h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg md:rounded-xl flex items-center justify-center shadow-lg">
                  <Clock className="w-5 h-5 md:w-8 md:h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-base md:text-2xl font-bold text-gray-800">Horário</h3>
                  <p className="text-gray-600 text-sm md:text-lg">Segunda a Sábado</p>
                  <p className="text-xs md:text-base text-gray-500">8h às 18h</p>
                </div>
              </div>
            </Card>
          </div>

          <div className="text-center space-y-3 md:space-y-0 md:space-x-6">
            <Button 
              onClick={handleWhatsAppClick} 
              className="w-full md:w-auto bg-green-500 hover:bg-green-600 text-white px-6 md:px-12 py-3 md:py-4 rounded-xl md:rounded-2xl text-base md:text-xl font-bold shadow-xl border-0 transition-all duration-300 transform hover:scale-105"
            >
              📱 WhatsApp
            </Button>
            <Button className="w-full md:w-auto bg-white text-blue-600 hover:bg-blue-50 px-6 md:px-12 py-3 md:py-4 rounded-xl md:rounded-2xl text-base md:text-xl font-bold shadow-xl border-0 transition-all duration-300 transform hover:scale-105">
              📞 Ligar Agora
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-b from-gray-800 to-gray-900 dark:from-gray-900 dark:to-black text-white py-8 md:py-16 px-3 md:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-4 md:gap-8">
            <div>
              <div className="flex items-center space-x-2 md:space-x-3 mb-3 md:mb-6">
                <div className="w-8 h-8 md:w-12 md:h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg md:rounded-xl flex items-center justify-center shadow-lg">
                  <Wifi className="w-4 h-4 md:w-6 md:h-6 text-white" />
                </div>
                <span className="text-xl md:text-3xl font-bold bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">SaraivaNet</span>
              </div>
              <p className="text-gray-300 mb-3 md:mb-6 leading-relaxed text-sm md:text-lg">
                Conectando Eliseu Martins com o mundo há 22 anos. Internet de qualidade, 
                suporte especializado e compromisso com nossa comunidade.
              </p>
              <div className="flex items-center text-orange-400 bg-orange-900/20 px-2 md:px-4 py-1 md:py-2 rounded-full">
                <Heart className="w-3 h-3 md:w-5 md:h-5 mr-2" />
                <span className="font-medium text-xs md:text-base">Feito com amor no Piauí desde 2003</span>
              </div>
            </div>

            <div>
              <h4 className="text-base md:text-2xl font-bold mb-3 md:mb-6 text-orange-400">Links Rápidos</h4>
              <ul className="space-y-1 md:space-y-3">
                <li><a href="#inicio" onClick={e => handleSmoothScroll(e, 'inicio')} className="text-gray-300 hover:text-orange-400 transition-colors text-sm md:text-lg">Início</a></li>
                <li><a href="#planos" onClick={e => handleSmoothScroll(e, 'planos')} className="text-gray-300 hover:text-orange-400 transition-colors text-sm md:text-lg">Planos</a></li>
                <li><a href="#cobertura" onClick={e => handleSmoothScroll(e, 'cobertura')} className="text-gray-300 hover:text-orange-400 transition-colors text-sm md:text-lg">Cobertura</a></li>
                <li><a href="#sobre" onClick={e => handleSmoothScroll(e, 'sobre')} className="text-gray-300 hover:text-orange-400 transition-colors text-sm md:text-lg">Sobre Nós</a></li>
                <li><a href="#contato" onClick={e => handleSmoothScroll(e, 'contato')} className="text-gray-300 hover:text-orange-400 transition-colors text-sm md:text-lg">Contato</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-base md:text-2xl font-bold mb-3 md:mb-6 text-orange-400">Contato</h4>
              <ul className="space-y-2 md:space-y-4">
                <li className="flex items-center space-x-2 md:space-x-3">
                  <Phone className="w-4 h-4 md:w-6 md:h-6 text-orange-400" />
                  <span className="text-sm md:text-lg">(89) 99439-5789</span>
                </li>
                <li className="flex items-center space-x-2 md:space-x-3">
                  <MapPin className="w-4 h-4 md:w-6 md:h-6 text-orange-400" />
                  <span className="text-sm md:text
