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
      {/* Fundo Simples e Otimizado para Mobile */}
      <div className="fixed inset-0 -z-10">
        {/* Gradiente Principal Limpo */}
        <div className="absolute inset-0 bg-gradient-to-br from-orange-400 via-orange-500 to-orange-600"></div>
        
        {/* Sutil overlay radial para profundidade */}
        <div className="absolute inset-0 bg-gradient-to-r from-orange-400/10 via-transparent to-orange-600/10"></div>
      </div>

      {/* Header */}
      <header className="relative z-50 bg-black/20 backdrop-blur-sm border-b border-white/10 px-4 sm:px-6 py-4">
        {/* Mobile Layout */}
        <div className="md:hidden">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="flex items-center justify-center">
                <img src={saraivaLogo} alt="SaraivaNet Logo" className="object-contain" style={{width: '45px', height: '45px', filter: 'drop-shadow(0 0 2px rgba(255,255,255,0.9)) drop-shadow(0 0 4px rgba(255,255,255,0.5))'}} />
              </div>
              <div>
                <span style={{fontSize: '20px', fontWeight: 'bold', color: '#ffffff', textShadow: '2px 2px 4px #000000', fontFamily: 'Poppins, sans-serif'}}>SaraivaNet</span>
                <div className="text-xs text-orange-100 font-medium flex items-center">
                  <MapPin className="w-3 h-3 mr-1" />
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
        <div className="hidden md:flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="flex items-center justify-center hover:scale-105 transition-transform duration-300">
              <img src={saraivaLogo} alt="SaraivaNet Logo" className="object-contain" style={{width: '55px', height: '55px', filter: 'drop-shadow(0 0 2px rgba(255,255,255,0.9)) drop-shadow(0 0 4px rgba(255,255,255,0.5))'}} />
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

      {/* Hero Section */}
      <section id="inicio" className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 py-20">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Conteúdo do Hero */}
            <AnimatedSection animation="fade-up" className="text-center lg:text-left">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 leading-tight">
                <span className="bg-gradient-to-r from-white via-orange-100 to-white bg-clip-text text-transparent drop-shadow-lg">
                  Internet
                </span>
                <br />
                <span className="bg-gradient-to-r from-orange-200 via-white to-orange-200 bg-clip-text text-transparent drop-shadow-lg">
                  Ultra Rápida
                </span>
                <br />
                <span className="text-orange-100 drop-shadow-lg">
                  em Eliseu Martins
                </span>
              </h1>
              
              <p className="text-xl sm:text-2xl text-orange-100 mb-8 leading-relaxed font-medium drop-shadow-md">
                🚀 Velocidade que surpreende<br />
                📺 SaraivaTV incluso<br />
                💪 22 anos de experiência
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <TouchButton 
                  onClick={handleWhatsAppClick} 
                  className="bg-white text-orange-600 hover:bg-orange-50 px-8 py-4 sm:px-10 sm:py-5 text-lg sm:text-xl font-bold rounded-2xl shadow-2xl transform hover:scale-105 transition-all duration-300 inline-flex items-center justify-center"
                >
                  <Phone className="w-6 h-6 mr-3" />
                  💬 Contratar Agora
                </TouchButton>
                
                <TouchButton 
                  onClick={() => handleSmoothScroll('planos')}
                  className="bg-orange-600/20 text-white border-2 border-white/30 hover:bg-orange-600/30 px-8 py-4 sm:px-10 sm:py-5 text-lg sm:text-xl font-bold rounded-2xl backdrop-blur-sm transform hover:scale-105 transition-all duration-300 inline-flex items-center justify-center"
                >
                  <Wifi className="w-6 h-6 mr-3" />
                  Ver Planos
                </TouchButton>
              </div>
            </AnimatedSection>

            {/* Carrossel de Imagens */}
            <AnimatedSection animation="slide-right" className="relative">
              <HeroCarousel />
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Seção de Estatísticas */}
      <AnimatedSection animation="fade-up">
        <section className="py-16 sm:py-20 px-4 sm:px-6 bg-white/5 backdrop-blur-sm">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <StatsCounter endValue={22} label="Anos de experiência" />
              </div>
              <div className="text-center">
                <StatsCounter endValue={5000} label="Clientes ativos" />
              </div>
              <div className="text-center">
                <StatsCounter endValue={500} label="Mbps de velocidade" />
              </div>
              <div className="text-center">
                <StatsCounter endValue={24} label="Horas de suporte" />
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Seção de Planos Mobile */}
      <section id="planos" className="py-16 sm:py-20 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection animation="fade-up" className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              Planos Perfeitos para Você
            </h2>
            <p className="text-xl text-orange-100 max-w-3xl mx-auto">
              Internet ultra rápida com SaraivaTV incluso. Escolha o plano ideal para sua casa ou empresa.
            </p>
          </AnimatedSection>

          {/* Mobile Carousel */}
          <div className="md:hidden">
            <MobilePlansCarousel />
          </div>

          {/* Desktop Grid */}
          <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Plano Essencial */}
            <AnimatedSection animation="slide-left" className="group">
              <Card className="relative overflow-hidden bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105 h-full">
                <div className="p-8 h-full flex flex-col">
                  <div className="text-center mb-8">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl mx-auto mb-4 flex items-center justify-center shadow-lg">
                      <Wifi className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">Essencial</h3>
                    <div className="text-4xl font-bold text-white mb-2">150 <span className="text-lg">Mbps</span></div>
                    <p className="text-orange-100">Perfeito para casa</p>
                  </div>
                  
                  <div className="flex-1">
                    <ul className="space-y-3 mb-8">
                      <li className="flex items-center text-white">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        <span>150 Mbps de velocidade</span>
                      </li>
                      <li className="flex items-center text-white">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        <span>SaraivaTV incluso</span>
                      </li>
                      <li className="flex items-center text-white">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        <span>Roteador WiFi grátis</span>
                      </li>
                      <li className="flex items-center text-white">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        <span>Suporte 24h</span>
                      </li>
                    </ul>
                  </div>
                  
                  <TouchButton 
                    onClick={handleWhatsAppClick}
                    className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-bold py-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    Contratar Plano
                  </TouchButton>
                </div>
              </Card>
            </AnimatedSection>

            {/* Plano Premium */}
            <AnimatedSection animation="fade-up" className="group">
              <Card className="relative overflow-hidden bg-gradient-to-br from-orange-500/20 to-orange-600/20 backdrop-blur-md border-orange-300/30 hover:from-orange-500/25 hover:to-orange-600/25 transition-all duration-300 hover:scale-105 h-full">
                <div className="absolute top-4 right-4">
                  <span className="bg-gradient-to-r from-orange-400 to-orange-600 text-white px-3 py-1 rounded-full text-sm font-bold">
                    Mais Popular
                  </span>
                </div>
                <div className="p-8 h-full flex flex-col">
                  <div className="text-center mb-8">
                    <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl mx-auto mb-4 flex items-center justify-center shadow-lg">
                      <Zap className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">Premium</h3>
                    <div className="text-4xl font-bold text-white mb-2">300 <span className="text-lg">Mbps</span></div>
                    <p className="text-orange-100">Ideal para famílias</p>
                  </div>
                  
                  <div className="flex-1">
                    <ul className="space-y-3 mb-8">
                      <li className="flex items-center text-white">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        <span>300 Mbps ultra rápido</span>
                      </li>
                      <li className="flex items-center text-white">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        <span>SaraivaTV Premium</span>
                      </li>
                      <li className="flex items-center text-white">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        <span>WiFi 6 incluso</span>
                      </li>
                      <li className="flex items-center text-white">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        <span>Prioridade no suporte</span>
                      </li>
                    </ul>
                  </div>
                  
                  <TouchButton 
                    onClick={handleWhatsAppClick}
                    className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold py-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    Contratar Plano
                  </TouchButton>
                </div>
              </Card>
            </AnimatedSection>

            {/* Plano Ultra */}
            <AnimatedSection animation="slide-right" className="group">
              <Card className="relative overflow-hidden bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105 h-full">
                <div className="p-8 h-full flex flex-col">
                  <div className="text-center mb-8">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl mx-auto mb-4 flex items-center justify-center shadow-lg">
                      <Star className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">Ultra</h3>
                    <div className="text-4xl font-bold text-white mb-2">500 <span className="text-lg">Mbps</span></div>
                    <p className="text-orange-100">Para empresas</p>
                  </div>
                  
                  <div className="flex-1">
                    <ul className="space-y-3 mb-8">
                      <li className="flex items-center text-white">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        <span>500 Mbps gigabit</span>
                      </li>
                      <li className="flex items-center text-white">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        <span>SaraivaTV Empresarial</span>
                      </li>
                      <li className="flex items-center text-white">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        <span>IP fixo disponível</span>
                      </li>
                      <li className="flex items-center text-white">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        <span>Suporte dedicado</span>
                      </li>
                    </ul>
                  </div>
                  
                  <TouchButton 
                    onClick={handleWhatsAppClick}
                    className="w-full bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white font-bold py-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    Contratar Plano
                  </TouchButton>
                </div>
              </Card>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Seção de Cobertura */}
      <section id="cobertura" className="py-16 sm:py-20 px-4 sm:px-6 bg-white/5 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection animation="fade-up" className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              Cobertura Total em Eliseu Martins
            </h2>
            <p className="text-xl text-orange-100 max-w-3xl mx-auto">
              Nossa rede de fibra óptica cobre toda a cidade, garantindo internet rápida e estável para você.
            </p>
          </AnimatedSection>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection animation="slide-left">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold text-white mb-6">Áreas Atendidas</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    'Centro', 'Bairro São José', 'Bairro da Luz', 'Vila Nova',
                    'Bairro Alto', 'Conjunto Habitacional', 'Zona Rural', 'Distrito Industrial'
                  ].map((area, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span className="text-white">{area}</span>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="slide-right">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl overflow-hidden border border-white/20">
                <RealMap />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Seção Sobre */}
      <section id="sobre" className="py-16 sm:py-20 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection animation="slide-left">
              <div className="space-y-6">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-8">
                  22 Anos Conectando Eliseu Martins
                </h2>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Award className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">Experiência e Tradição</h3>
                      <p className="text-orange-100 leading-relaxed">
                        Desde 2003 levando internet de qualidade para todos os cantos da cidade, 
                        sempre com foco na satisfação do cliente.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Shield className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">Tecnologia de Ponta</h3>
                      <p className="text-orange-100 leading-relaxed">
                        Rede 100% fibra óptica com equipamentos modernos e constante atualização 
                        tecnológica para oferecer o melhor serviço.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Heart className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">Compromisso Local</h3>
                      <p className="text-orange-100 leading-relaxed">
                        Empresa 100% eliseuense, gerando empregos locais e investindo 
                        no desenvolvimento da nossa comunidade.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="slide-right">
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-blue-500/20 to-blue-600/20 backdrop-blur-md rounded-2xl p-6 border border-blue-300/20">
                  <Users className="w-10 h-10 text-blue-400 mb-4" />
                  <div className="text-3xl font-bold text-white mb-2">5000+</div>
                  <p className="text-blue-100">Clientes Satisfeitos</p>
                </div>
                
                <div className="bg-gradient-to-br from-green-500/20 to-green-600/20 backdrop-blur-md rounded-2xl p-6 border border-green-300/20">
                  <Zap className="w-10 h-10 text-green-400 mb-4" />
                  <div className="text-3xl font-bold text-white mb-2">99.9%</div>
                  <p className="text-green-100">Disponibilidade</p>
                </div>
                
                <div className="bg-gradient-to-br from-orange-500/20 to-orange-600/20 backdrop-blur-md rounded-2xl p-6 border border-orange-300/20">
                  <Clock className="w-10 h-10 text-orange-400 mb-4" />
                  <div className="text-3xl font-bold text-white mb-2">24/7</div>
                  <p className="text-orange-100">Suporte Técnico</p>
                </div>
                
                <div className="bg-gradient-to-br from-purple-500/20 to-purple-600/20 backdrop-blur-md rounded-2xl p-6 border border-purple-300/20">
                  <Star className="w-10 h-10 text-purple-400 mb-4" />
                  <div className="text-3xl font-bold text-white mb-2">22</div>
                  <p className="text-purple-100">Anos de Tradição</p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Seção de Depoimentos */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 bg-white/5 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection animation="fade-up" className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              O Que Nossos Clientes Dizem
            </h2>
            <p className="text-xl text-orange-100 max-w-3xl mx-auto">
              Mais de 5000 famílias e empresas confiam na SaraivaNet todos os dias.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8">
            <AnimatedSection animation="slide-left">
              <TestimonialCard 
                name="Maria Silva"
                testimonial="Internet super rápida! Minha família toda consegue usar ao mesmo tempo sem travamento. O SaraivaTV tem muitos canais bons."
                age="Empresária"
                location="Centro"
                initials="MS"
              />
            </AnimatedSection>

            <AnimatedSection animation="fade-up">
              <TestimonialCard 
                name="João Santos"
                testimonial="22 anos usando SaraivaNet e nunca me decepcionou. Suporte rápido e internet estável. Recomendo para todos!"
                age="Aposentado" 
                location="São José"
                initials="JS"
              />
            </AnimatedSection>

            <AnimatedSection animation="slide-right">
              <TestimonialCard 
                name="Ana Costa"
                testimonial="Trabalho home office e a internet nunca falha. Velocidade excelente para videoconferências e uploads de arquivos grandes."
                age="Designer"
                location="Vila Nova"
                initials="AC"
              />
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Seção de Contato */}
      <section id="contato" className="py-16 sm:py-20 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection animation="slide-left">
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
                    Fale Conosco
                  </h2>
                  <p className="text-xl text-orange-100 leading-relaxed">
                    Nossa equipe está sempre pronta para ajudar você. Entre em contato e descubra 
                    como podemos melhorar sua conexão com o mundo.
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <TouchButton 
                        onClick={handlePhoneClick}
                        className="text-xl font-semibold text-white hover:text-orange-200 transition-colors"
                      >
                        (89) 99439-5789
                      </TouchButton>
                      <p className="text-orange-100">Ligue agora mesmo</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-white">Nossa Localização</h4>
                      <p className="text-orange-100">Rua Fernando Silva, Centro</p>
                      <p className="text-orange-100">Eliseu Martins - PI</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center">
                      <Clock className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-white">Horário de Atendimento</h4>
                      <p className="text-orange-100">Segunda a Sexta: 8h às 18h</p>
                      <p className="text-orange-100">Sábado: 8h às 12h</p>
                      <p className="text-orange-100">Suporte técnico: 24h</p>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="slide-right">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold text-white mb-6 text-center">
                  Pronto para Começar?
                </h3>
                <p className="text-center text-orange-100 mb-8 text-lg">
                  Clique no botão abaixo e fale conosco no WhatsApp. 
                  Nossa equipe está pronta para ajudar você!
                </p>
                <TouchButton 
                  onClick={handleWhatsAppClick} 
                  className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-8 py-6 text-xl font-bold rounded-2xl shadow-2xl transform hover:scale-105 transition-all duration-300 inline-flex items-center justify-center"
                >
                  <Phone className="w-6 h-6 mr-3" />
                  💬 Falar no WhatsApp
                </TouchButton>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Call to Action Final */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 bg-gradient-to-r from-purple-600/20 to-orange-600/20 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto text-center">
          <AnimatedSection animation="fade-up">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              Não Perca Mais Tempo com Internet Lenta!
            </h2>
            <p className="text-xl text-orange-100 mb-10 leading-relaxed">
              Mude para a SaraivaNet hoje mesmo e descubra a diferença de ter internet ultra rápida 
              com o melhor suporte da região. Sua família merece o melhor!
            </p>
            <TouchButton 
              onClick={handleWhatsAppClick} 
              className="bg-white text-purple-600 hover:bg-gray-100 px-12 py-4 text-xl font-bold rounded-2xl shadow-2xl transform hover:scale-110 transition-all duration-300 inline-flex items-center"
            >
              <Phone className="w-6 h-6 mr-3" />
              💬 Falar no WhatsApp
            </TouchButton>
          </AnimatedSection>
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

          <div className="border-t border-gray-700 mt-12 pt-8">
            {/* Logo centralizada */}
            <div className="flex justify-center mb-6">
              <div className="flex items-center justify-center">
                <img src={saraivaLogo} alt="SaraivaNet Logo" className="object-contain" style={{width: '35px', height: '35px', filter: 'drop-shadow(0 0 1px rgba(255,255,255,0.7))'}} />
              </div>
            </div>
            <p className="text-gray-400 text-lg text-center">
              © 2025 SaraivaNet. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>

      {/* Chat Bot */}
      <ChatBot />
    </div>
  );
};

export default Index;