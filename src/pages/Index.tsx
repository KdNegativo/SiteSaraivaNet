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
import teamPhoto from "@/assets/team-photo.jpg";
import facilityPhoto from "@/assets/facility-photo.jpg";
import happyClients from "@/assets/happy-clients.jpg";
import devicesMockup from "@/assets/devices-mockup.jpg";

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
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Suave Background Pattern */}
      <div className="absolute inset-0" style={{
        backgroundImage: `
          radial-gradient(circle at 20% 20%, rgba(255, 102, 0, 0.02) 0%, transparent 50%),
          radial-gradient(circle at 80% 80%, rgba(59, 130, 246, 0.02) 0%, transparent 50%),
          linear-gradient(135deg, transparent 40%, rgba(156, 163, 175, 0.01) 50%, transparent 60%)
        `,
        backgroundSize: '600px 600px, 800px 800px, 400px 400px'
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

      {/* Hero Section - MODERNA, LIMPA E IMPACTANTE */}
      <section id="inicio" className="relative overflow-hidden min-h-screen flex items-center bg-gradient-to-br from-orange-500 via-orange-600 to-red-500">
        
        {/* Background Limpo - Apenas Gradiente */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent"></div>
        </div>
        
        {/* Elementos Flutuantes Minimalistas */}
        {!prefersReducedMotion && (
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-float" style={{ animationDuration: '20s' }}></div>
            <div className="absolute bottom-1/3 left-1/5 w-80 h-80 bg-red-300/10 rounded-full blur-3xl animate-float" style={{ animationDuration: '25s', animationDelay: '5s' }}></div>
          </div>
        )}
        
        {/* Container Principal */}
        <div className="relative z-10 w-full px-6 py-20">
          <div className="max-w-7xl mx-auto text-center">
            
            {/* Título Principal com Sombra Sutil */}
            <AnimatedSection animation="fade-up" delay={200}>
              <div className="space-y-8 mb-16">
                <h1 className="text-6xl md:text-8xl lg:text-9xl font-black text-white font-poppins leading-tight">
                  <span className="block drop-shadow-lg" style={{ textShadow: '0 4px 20px rgba(0,0,0,0.3)' }}>Internet</span>
                  <span className="block text-yellow-100 text-4xl md:text-6xl my-6 font-bold">+</span>
                  <span className="block drop-shadow-lg" style={{ textShadow: '0 4px 20px rgba(0,0,0,0.3)' }}>SaraivaTV</span>
                </h1>
                
                {/* Subtítulo em Bege Claro */}
                <p className="text-2xl md:text-3xl text-orange-100 font-bold font-poppins max-w-4xl mx-auto leading-relaxed">
                  Internet ultrarrápida + App de TV gratuito
                </p>
                <p className="text-lg md:text-xl text-orange-50 font-medium font-inter max-w-3xl mx-auto">
                  A melhor conexão de fibra óptica de Eliseu Martins com entretenimento incluído
                </p>
              </div>
            </AnimatedSection>

            {/* Cards com Fundo Branco */}
            <AnimatedSection animation="fade-up" delay={400}>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 max-w-6xl mx-auto mb-16">
                {[
                  { 
                    icon: Wifi, 
                    text: "Internet ULTRA", 
                    desc: "300MB Fibra Óptica", 
                    color: "orange-500",
                    highlight: true
                  },
                  { 
                    icon: Tv, 
                    text: "SaraivaTV", 
                    desc: "App Premium Grátis", 
                    color: "blue-500"
                  },
                  { 
                    icon: Music, 
                    text: "Rádios 24h", 
                    desc: "Locais e Nacionais", 
                    color: "green-500"
                  },
                  { 
                    icon: Shield, 
                    text: "Suporte VIP", 
                    desc: "Atendimento 24h", 
                    color: "purple-500"
                  }
                ].map((card, index) => (
                  <div key={index} className={`${card.highlight ? 'lg:scale-110 lg:row-span-2 lg:col-span-2 lg:order-first' : ''} bg-white rounded-3xl p-6 lg:p-8 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105 hover:-translate-y-2 group cursor-pointer`}>
                    
                    {/* Ícone Grande com Cor Sólida */}
                    <div className={`w-16 h-16 lg:w-20 lg:h-20 bg-${card.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-all duration-300 shadow-md`}>
                      <card.icon className="w-8 h-8 lg:w-10 lg:h-10 text-white" />
                    </div>
                    
                    {/* Conteúdo */}
                    <div className="text-center space-y-3">
                      <h3 className={`font-black text-lg lg:text-xl text-gray-800 font-poppins ${card.highlight ? 'lg:text-2xl' : ''}`}>
                        {card.text}
                      </h3>
                      <p className={`text-sm lg:text-base text-gray-600 font-inter font-medium ${card.highlight ? 'lg:text-lg' : ''}`}>
                        {card.desc}
                      </p>
                    </div>
                    
                    {/* Badge Principal */}
                    {card.highlight && (
                      <div className="mt-4 inline-flex items-center bg-orange-100 text-orange-800 text-sm font-black px-3 py-1 rounded-full">
                        ⭐ PRINCIPAL
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </AnimatedSection>

            {/* Botão Principal Centralizado */}
            <AnimatedSection animation="bounce-in" delay={600}>
              <div className="mb-16">
                <TouchButton 
                  onClick={handleWhatsAppClick} 
                  className="bg-orange-500 hover:bg-orange-600 text-white px-12 lg:px-16 py-6 lg:py-8 rounded-2xl font-black text-xl lg:text-3xl shadow-2xl hover:scale-110 hover:shadow-3xl transition-all duration-500 relative overflow-hidden group font-poppins"
                >
                  <span className="relative z-10 flex items-center gap-4">
                    <span className="text-2xl lg:text-4xl animate-bounce">🚀</span>
                    <span>Contratar Agora</span>
                  </span>
                  {/* Efeito de Brilho no Hover */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                  {/* Glow Effect */}
                  <div className="absolute inset-0 bg-orange-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-2xl"></div>
                </TouchButton>
              </div>
            </AnimatedSection>

            {/* Stats Minimalistas Horizontais */}
            <AnimatedSection animation="fade-up" delay={800}>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 max-w-5xl mx-auto">
                {[
                  { icon: Users, value: 1000, label: "Clientes", suffix: "+", color: "text-orange-600" },
                  { icon: Zap, value: 99, label: "Uptime", suffix: "%", color: "text-green-600" },
                  { icon: Tv, value: 20, label: "Canais", suffix: "+", color: "text-blue-600" },
                  { icon: Clock, value: 24, label: "Suporte", suffix: "h", color: "text-purple-600" }
                ].map((stat, index) => (
                  <div key={index} className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 lg:p-8 border border-white/30 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-400 group text-center">
                    
                    {/* Ícone Simples */}
                    <div className="w-12 h-12 lg:w-14 lg:h-14 bg-white/30 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <stat.icon className="w-6 h-6 lg:w-7 lg:h-7 text-white" />
                    </div>
                    
                    {/* Stats em Branco */}
                    <div className="space-y-2">
                      <div className="text-3xl lg:text-4xl font-black text-white font-poppins">
                        <StatsCounter endValue={stat.value} label="" suffix={stat.suffix} />
                      </div>
                      <div className="text-sm lg:text-base text-white/90 font-bold font-inter">
                        {stat.label}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </AnimatedSection>

            {/* Call to Action Final Sutil */}
            <AnimatedSection animation="fade-up" delay={1000}>
              <div className="mt-16 bg-white/10 backdrop-blur-sm rounded-3xl p-8 lg:p-12 border border-white/20 shadow-lg max-w-4xl mx-auto">
                <p className="text-xl lg:text-2xl font-bold text-white font-inter leading-relaxed">
                  <span className="text-yellow-200">✨</span> <span className="font-black">Transforme sua conexão hoje!</span>
                </p>
                <p className="text-lg lg:text-xl text-white/90 font-medium font-inter mt-4">
                  Junte-se a mais de 1000 famílias conectadas com a SaraivaNet
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Plans Section - Clean & Beautiful */}
      <section id="planos" className="relative overflow-hidden py-20 px-4 bg-gradient-to-br from-gray-50 via-white to-blue-50">
        
        {/* Sophisticated Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/3 via-transparent to-blue-500/3"></div>
        
        {/* Elegant Floating Elements */}
        {!prefersReducedMotion && (
          <div className="absolute inset-0">
            <div className="absolute top-20 right-20 w-64 h-64 bg-orange-400/8 rounded-full blur-3xl animate-float" style={{ animationDuration: '10s' }}></div>
            <div className="absolute bottom-20 left-20 w-80 h-80 bg-blue-400/6 rounded-full blur-3xl animate-float" style={{ animationDuration: '12s', animationDelay: '3s' }}></div>
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
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-800 mb-6 font-poppins">
                Internet + SaraivaTV
              </h2>
              <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed font-inter">
                O plano completo que vai transformar sua experiência digital
              </p>
              
              {/* Special Offer */}
              <div className="inline-flex items-center bg-green-500/90 text-white px-6 py-3 rounded-full font-bold text-lg">
                🎉 Oferta especial: 3 meses com desconto!
              </div>
            </div>
          </AnimatedSection>

          {/* Beautiful Plan Card - DESTACADO */}
          <div className="card-ultra overflow-hidden group">
            
            {/* Plan Header */}
            <div className="bg-gradient-to-r from-orange-500 to-red-500 p-10 text-white text-center group-hover:from-orange-400 group-hover:to-red-400 transition-all duration-500">
              <div className="w-24 h-24 bg-white/30 backdrop-blur-sm rounded-3xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-300 shadow-2xl">
                <Wifi className="w-12 h-12 text-white" />
              </div>
              <h3 className="text-4xl font-black mb-4 font-poppins" style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.5)' }}>Internet ULTRA</h3>
              <div className="text-6xl font-black mb-4 font-poppins" style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.5)' }}>300MB</div>
              <div className="text-2xl opacity-95 font-medium font-inter">Fibra Óptica + SaraivaTV Grátis</div>
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
                    className="w-full lg:w-auto btn-contratar"
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
                className="w-full lg:w-auto btn-contratar"
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
              className="btn-contratar inline-flex items-center space-x-3"
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
              <TouchButton onClick={handleWhatsAppClick} className="bg-white/20 backdrop-blur-lg text-white border border-white/30 hover:bg-white/30 px-10 py-5 text-xl font-black rounded-2xl shadow-2xl transform hover:scale-110 transition-all duration-300 flex items-center gap-3 btn-contratar">
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

      {/* About Section - Com Fotos Reais */}
      <section id="sobre" className="py-20 px-4 bg-gradient-to-br from-white via-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-black text-gray-800 mb-6 font-poppins">Sobre a SaraivaNet</h2>
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto font-inter">
              Há <span className="font-black text-orange-500">22 anos</span> conectando Eliseu Martins com o mundo digital
            </p>
          </div>

          {/* Seção com Fotos da Equipe */}
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <div className="order-2 lg:order-1">
              <h3 className="text-4xl font-black text-gray-800 mb-8 font-poppins">Nossa Equipe</h3>
              <p className="text-gray-600 mb-6 text-xl font-inter leading-relaxed">
                Fundada em 2003, a SaraivaNet nasceu do sonho de democratizar o acesso à internet de qualidade em Eliseu Martins.
              </p>
              <p className="text-gray-600 mb-10 text-xl font-inter leading-relaxed">
                Nossa equipe técnica especializada trabalha 24h para garantir que você tenha sempre a melhor conexão.
              </p>

              <div className="grid grid-cols-2 gap-8">
                <div className="text-center p-8 card-premium">
                  <div className="text-5xl font-black text-orange-500 mb-3 font-poppins">1000+</div>
                  <div className="text-lg text-gray-600 font-bold font-inter">Clientes Conectados</div>
                </div>
                <div className="text-center p-8 card-premium">
                  <div className="text-5xl font-black text-orange-500 mb-3 font-poppins">22</div>
                  <div className="text-lg text-gray-600 font-bold font-inter">Anos de Tradição</div>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500">
                <img 
                  src={teamPhoto} 
                  alt="Equipe técnica da SaraivaNet em ação" 
                  className="w-full h-80 lg:h-96 object-cover hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-orange-600/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <h4 className="text-2xl font-black mb-2 font-poppins">Equipe Especializada</h4>
                  <p className="text-lg opacity-90 font-inter">Técnicos certificados prontos para te atender</p>
                </div>
              </div>
            </div>
          </div>

          {/* Seção das Instalações */}
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <div className="relative rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500">
                <img 
                  src={facilityPhoto} 
                  alt="Infraestrutura moderna da SaraivaNet" 
                  className="w-full h-80 lg:h-96 object-cover hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-600/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <h4 className="text-2xl font-black mb-2 font-poppins">Infraestrutura Premium</h4>
                  <p className="text-lg opacity-90 font-inter">Equipamentos de última geração</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-4xl font-black text-gray-800 mb-8 font-poppins">Tecnologia de Ponta</h3>
              <p className="text-gray-600 mb-6 text-xl font-inter leading-relaxed">
                Investimos constantemente em infraestrutura para oferecer a você internet fibra óptica com velocidade real garantida.
              </p>
              <p className="text-gray-600 mb-10 text-xl font-inter leading-relaxed">
                Nossa central técnica conta com equipamentos de última geração e monitoramento 24h para garantir estabilidade total.
              </p>

              <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-3xl p-10 shadow-xl">
                <h4 className="text-3xl font-black text-gray-800 mb-6 text-center font-poppins">
                  Tecnologia que Conecta Corações
                </h4>
                <p className="text-gray-600 text-center mb-8 text-lg leading-relaxed font-inter">
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

          {/* Seção Clientes Satisfeitos */}
          <div className="text-center">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 max-w-4xl mx-auto">
              <img 
                src={happyClients} 
                alt="Família feliz usando internet SaraivaNet" 
                className="w-full h-80 object-cover hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-purple-600/80 via-transparent to-transparent"></div>
              <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white text-center">
                <h4 className="text-3xl font-black mb-3 font-poppins">Famílias Conectadas</h4>
                <p className="text-xl opacity-90 font-inter max-w-2xl">Mais de 1000 famílias confiam na SaraivaNet para se conectar com o que mais importa</p>
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
              className="btn-contratar inline-flex items-center"
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
