import { Phone, Mail, MapPin, Clock, Wifi, Tv, Music, Headphones, Smartphone, Zap, Users, Heart, Star, Shield, Award, CheckCircle, Moon, Sun, Sparkles, Rocket, Globe } from "lucide-react";
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
import ModernCard from "@/components/ModernCard";
import ModernButton from "@/components/ModernButton";
import AnimatedIcon from "@/components/AnimatedIcon";
import ParallaxBackground from "@/components/ParallaxBackground";
import ModernTestimonial from "@/components/ModernTestimonial";
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
    <div className="min-h-screen">
      <ParallaxBackground variant="mesh" className="fixed inset-0 -z-10" />
      <div className="min-h-screen bg-gradient-to-br from-orange-400/90 via-red-500/90 to-purple-600/90 dark:from-gray-900/90 dark:via-gray-800/90 dark:to-gray-900/90 transition-colors duration-500">
        
        {/* Floating Components */}
        <ChatBot />
        
        {/* Enhanced Header */}
        <header className="glass-nav shadow-2xl px-4 py-3 border-b border-white/20 dark:border-gray-700/20 z-50 transition-colors duration-500 sticky top-0">
          {/* Mobile Layout */}
          <div className="md:hidden">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center shadow-lg hover-lift">
                  <AnimatedIcon animation="float" size="sm" className="text-white">
                    <Wifi className="w-4 h-4" />
                  </AnimatedIcon>
                </div>
                <div>
                  <span className="text-lg font-bold gradient-text-hero">SaraivaNet</span>
                  <div className="text-xs text-gray-600 dark:text-gray-400 font-medium flex items-center">
                    <AnimatedIcon animation="pulse" size="sm" className="text-orange-500 mr-1">
                      <MapPin className="w-2.5 h-2.5" />
                    </AnimatedIcon>
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
              <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center shadow-lg hover-lift">
                <AnimatedIcon animation="float" size="md" className="text-white">
                  <Wifi className="w-5 h-5" />
                </AnimatedIcon>
              </div>
              <div>
                <span className="text-2xl font-bold gradient-text-hero text-shadow">SaraivaNet</span>
                <div className="text-xs text-gray-600 dark:text-gray-400 font-medium flex items-center">
                  <AnimatedIcon animation="pulse" size="sm" className="text-orange-500 mr-1">
                    <MapPin className="w-3 h-3" />
                  </AnimatedIcon>
                  Eliseu Martins - PI
                </div>
              </div>
            </div>
            
            <nav className="flex items-center space-x-6">
              <a href="#inicio" onClick={e => handleSmoothScroll(e, 'inicio')} className="text-gray-700 dark:text-gray-300 hover:text-orange-500 transition-all duration-300 font-medium hover-float relative group">
                Início
                <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-orange-400 to-red-500 group-hover:w-full transition-all duration-300"></div>
              </a>
              <a href="#planos" onClick={e => handleSmoothScroll(e, 'planos')} className="text-gray-700 dark:text-gray-300 hover:text-orange-500 transition-all duration-300 font-medium hover-float relative group">
                Planos
                <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-orange-400 to-red-500 group-hover:w-full transition-all duration-300"></div>
              </a>
              <a href="#cobertura" onClick={e => handleSmoothScroll(e, 'cobertura')} className="text-gray-700 dark:text-gray-300 hover:text-orange-500 transition-all duration-300 font-medium hover-float relative group">
                Cobertura
                <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-orange-400 to-red-500 group-hover:w-full transition-all duration-300"></div>
              </a>
              <a href="#sobre" onClick={e => handleSmoothScroll(e, 'sobre')} className="text-gray-700 dark:text-gray-300 hover:text-orange-500 transition-all duration-300 font-medium hover-float relative group">
                Sobre
                <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-orange-400 to-red-500 group-hover:w-full transition-all duration-300"></div>
              </a>
              <a href="#contato" onClick={e => handleSmoothScroll(e, 'contato')} className="text-gray-700 dark:text-gray-300 hover:text-orange-500 transition-all duration-300 font-medium hover-float relative group">
                Contato
                <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-orange-400 to-red-500 group-hover:w-full transition-all duration-300"></div>
              </a>
            </nav>

            <div className="flex items-center space-x-4">
              <ThemeToggle />
            </div>
          </div>
        </header>

        {/* Enhanced Hero Section */}
        <section id="inicio" className="relative overflow-hidden min-h-screen flex items-center">
          <ParallaxBackground variant="geometric" className="absolute inset-0" />
          <div className="absolute inset-0 bg-gradient-to-br from-orange-500/90 via-red-500/90 to-purple-600/90 dark:from-gray-900/90 dark:via-gray-800/90 dark:to-gray-700/90"></div>
          <div className="absolute inset-0 pattern-dots opacity-10"></div>
          <div className="px-4 py-12 text-white w-full relative z-10">
            
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

                  {/* Enhanced CTA Button */}
                  <div className="mb-12">
                    <ModernButton 
                      onClick={handleWhatsAppClick} 
                      variant="gradient"
                      size="xl"
                      glow
                      shine
                      className="w-full max-w-sm mx-auto shadow-2xl hover:shadow-orange-500/40"
                    >
                      <span className="flex items-center justify-center gap-3">
                        <AnimatedIcon animation="bounce" size="md" className="text-white">
                          <Rocket className="w-6 h-6" />
                        </AnimatedIcon>
                        Contratar Agora 
                        <AnimatedIcon animation="float" size="sm" className="text-white">
                          <Sparkles className="w-5 h-5" />
                        </AnimatedIcon>
                      </span>
                    </ModernButton>
                  </div>

                  {/* Enhanced Stats */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center max-w-2xl mx-auto">
                    <ModernCard variant="glass" hover glow className="p-4 animate-fade-in delay-100">
                      <StatsCounter endValue={1000} label="Clientes" suffix="+" />
                    </ModernCard>
                    <ModernCard variant="glass" hover glow className="p-4 animate-fade-in delay-200">
                      <StatsCounter endValue={99} label="Uptime" suffix="%" />
                    </ModernCard>
                    <ModernCard variant="glass" hover glow className="p-4 animate-fade-in delay-300">
                      <StatsCounter endValue={20} label="Canais" suffix="+" />
                    </ModernCard>
                    <ModernCard variant="glass" hover glow className="p-4 animate-fade-in delay-500">
                      <StatsCounter endValue={24} label="Online" suffix="h" />
                    </ModernCard>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Plans Section */}
        <section id="planos" className="bg-gradient-to-br from-gray-800 via-gray-900 to-black dark:from-gray-900 dark:via-black dark:to-gray-900 text-white px-4 py-12">
          <div className="max-w-7xl mx-auto">
            <AnimatedSection animation="fade-up">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent mb-4">
                  Internet + SaraivaTV
                </h2>
                <p className="text-lg text-gray-300 mb-6 max-w-3xl mx-auto leading-relaxed">
                  O plano completo que vai transformar sua experiência digital
                </p>
              </div>
            </AnimatedSection>

            {/* Single Plan Card */}
            <ModernCard variant="floating" hover glow className="max-w-4xl mx-auto">
              <div className="bg-gradient-to-r from-orange-600 to-red-600 p-8 text-white text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-red-400 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Wifi className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-2">Plano Completo</h3>
                <div className="text-4xl font-bold mb-2">300MB</div>
                <div className="text-lg opacity-90">Fibra Óptica + SaraivaTV Grátis</div>
              </div>

              <div className="p-8">
                <div className="text-center mb-6">
                  <div className="text-5xl font-bold text-orange-400 mb-2">
                    R$ 129<span className="text-2xl">,90</span>
                  </div>
                  <div className="text-lg text-gray-300">por mês</div>
                </div>

                <TouchButton 
                  onClick={handleWhatsAppClick}
                  className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white py-4 rounded-xl font-bold text-lg shadow-xl hover:scale-105 transition-all duration-300"
                >
                  Contratar Agora
                </TouchButton>
              </div>
            </ModernCard>
          </div>
        </section>

        {/* Coverage Area */}
        <AnimatedSection className="py-16 bg-gradient-to-br from-blue-600 via-purple-600 to-orange-500 text-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold mb-4">Área de Cobertura</h2>
              <p className="text-xl">
                Levamos internet de qualidade para toda a região
              </p>
            </div>
            <RealMap />
          </div>
        </AnimatedSection>

        {/* About Section */}
        <section id="sobre" className="py-16 px-4 bg-white dark:bg-gray-900">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold text-gray-800 dark:text-white mb-4">Sobre a SaraivaNet</h2>
              <p className="text-xl text-gray-600 dark:text-gray-300">
                Conectando pessoas e transformando vidas através da tecnologia
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h3 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">Nossa Missão</h3>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                  Somos uma empresa comprometida em levar internet de qualidade para Eliseu Martins e região. 
                  Acreditamos que todos merecem acesso à informação e entretenimento de qualidade.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Shield className="w-6 h-6 text-orange-500" />
                    <span className="text-gray-700 dark:text-gray-300">Suporte técnico especializado</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Award className="w-6 h-6 text-orange-500" />
                    <span className="text-gray-700 dark:text-gray-300">Qualidade garantida</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Heart className="w-6 h-6 text-orange-500" />
                    <span className="text-gray-700 dark:text-gray-300">Atendimento humanizado</span>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="bg-gradient-to-br from-orange-500 to-red-500 rounded-3xl p-8 text-white">
                  <h4 className="text-2xl font-bold mb-4">Por que escolher a SaraivaNet?</h4>
                  <ul className="space-y-3">
                    <li className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-300" />
                      <span>Internet estável e de alta velocidade</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-300" />
                      <span>SaraivaTV com canais e rádios grátis</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-300" />
                      <span>Suporte técnico 24 horas</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-300" />
                      <span>Preços justos e acessíveis</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 px-4 bg-gray-50 dark:bg-gray-800">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold text-gray-800 dark:text-white mb-4">O Que Nossos Clientes Dizem</h2>
              <p className="text-xl text-gray-600 dark:text-gray-300">
                Histórias reais de pessoas que confiam na SaraivaNet
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <ModernTestimonial 
                name="Maria Santos" 
                location="Centro de Eliseu Martins" 
                text="A internet da SaraivaNet mudou minha vida! Agora consigo falar com meus netos que moram longe todos os dias." 
                rating={5}
                delay={100}
              />
              
              <ModernTestimonial 
                name="João Silva" 
                location="Bairro São José" 
                text="Trabalho com vendas online e a internet nunca me deixou na mão. Rápida e estável!" 
                rating={5}
                delay={200}
              />
              
              <ModernTestimonial 
                name="Ana Oliveira" 
                location="Vila Nova" 
                text="Os técnicos são muito educados e me ensinaram a usar o Wi-Fi. Agora assisto meus programas sem travar." 
                rating={5}
                delay={300}
              />
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contato" className="py-16 px-4 bg-gradient-to-br from-blue-600 via-purple-700 to-indigo-800 dark:from-gray-900 dark:via-gray-800 dark:to-gray-700">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold text-white mb-4">Entre em Contato</h2>
              <p className="text-xl text-blue-200">
                Estamos aqui para ajudar! Entre em contato conosco.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="text-white">
                <h3 className="text-3xl font-bold mb-8">Fale Conosco</h3>
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <Phone className="w-6 h-6 text-blue-300" />
                    <span className="text-lg">(89) 99439-5789</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <MapPin className="w-6 h-6 text-blue-300" />
                    <span className="text-lg">Eliseu Martins - PI</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Clock className="w-6 h-6 text-blue-300" />
                    <span className="text-lg">Atendimento 24 horas</span>
                  </div>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8">
                <h4 className="text-2xl font-bold text-white mb-6">Solicite um Orçamento</h4>
                <TouchButton
                  onClick={handleWhatsAppClick}
                  className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white py-4 rounded-xl font-bold text-lg shadow-xl hover:scale-105 transition-all duration-300"
                >
                  <span className="flex items-center justify-center gap-3">
                    <Phone className="w-5 h-5" />
                    Chamar no WhatsApp
                  </span>
                </TouchButton>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gradient-to-br from-gray-900 to-black text-white py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-3 gap-12">
              <div>
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center">
                    <Wifi className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-2xl font-bold">SaraivaNet</span>
                </div>
                <p className="text-gray-400 leading-relaxed">
                  Conectando Eliseu Martins ao mundo digital com internet de qualidade e o melhor entretenimento.
                </p>
              </div>

              <div>
                <h5 className="text-xl font-bold mb-6">Nossos Serviços</h5>
                <ul className="space-y-3">
                  <li className="text-gray-400 hover:text-white transition-colors">Internet Fibra Óptica</li>
                  <li className="text-gray-400 hover:text-white transition-colors">SaraivaTV</li>
                  <li className="text-gray-400 hover:text-white transition-colors">Suporte Técnico</li>
                  <li className="text-gray-400 hover:text-white transition-colors">Instalação Profissional</li>
                </ul>
              </div>

              <div>
                <h5 className="text-xl font-bold mb-6">Contato</h5>
                <ul className="space-y-3">
                  <li className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-orange-400" />
                    <span className="text-gray-400">(89) 99439-5789</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <MapPin className="w-5 h-5 text-orange-400" />
                    <span className="text-gray-400">Eliseu Martins - PI</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="border-t border-gray-700 mt-12 pt-8 text-center">
              <p className="text-gray-400">
                © 2025 SaraivaNet. Todos os direitos reservados.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Index;