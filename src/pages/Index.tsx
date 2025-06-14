import { useState, useEffect } from 'react';
import { Wifi, Smartphone, Clock, MapPin, Star, Zap, Shield, Users, Play, Youtube, Radio, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import ChatBot from '@/components/ChatBot';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import StatsCounter from '@/components/StatsCounter';
import TestimonialCard from '@/components/TestimonialCard';
import TouchButton from '@/components/TouchButton';
import ParallaxSection from '@/components/ParallaxSection';
import AnimatedSection from '@/components/AnimatedSection';
import LoadingSpinner from '@/components/LoadingSpinner';
import MobilePlansCarousel from '@/components/MobilePlansCarousel';
import RealMap from '@/components/RealMap';

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const handleWhatsAppClick = () => {
    const phoneNumber = "5589994395789";
    const message = "Olá! Gostaria de contratar o plano de internet + SaraivaTV.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-orange-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Hero Section with Parallax */}
      <ParallaxSection>
        <div className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-purple-600 to-orange-500 min-h-screen flex items-center">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] bg-repeat"></div>
          </div>
          
          <div className="container mx-auto px-4 py-20 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Content */}
              <AnimatedSection className="text-white space-y-8" delay={200}>
                <div className="space-y-6">
                  <h1 className="text-4xl md:text-6xl font-bold leading-tight font-heading">
                    Internet de 
                    <span className="block bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                      Alta Velocidade
                    </span>
                  </h1>
                  
                  <p className="text-xl md:text-2xl font-light opacity-90 leading-relaxed">
                    Conecte-se com o melhor da internet fibra óptica + nosso app gratuito <strong>SaraivaTV</strong>
                  </p>
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-lg p-3">
                    <Zap className="w-5 h-5 text-yellow-300" />
                    <span>Ultra Rápida</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-lg p-3">
                    <Shield className="w-5 h-5 text-green-300" />
                    <span>100% Fibra</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-lg p-3">
                    <Smartphone className="w-5 h-5 text-blue-300" />
                    <span>SaraivaTV Grátis</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-lg p-3">
                    <Users className="w-5 h-5 text-purple-300" />
                    <span>Suporte 24h</span>
                  </div>
                </div>
              </AnimatedSection>

              {/* Visual */}
              <AnimatedSection className="relative" delay={400}>
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-3xl blur-3xl opacity-30 animate-pulse"></div>
                  <div className="relative bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20">
                    <div className="text-center space-y-4">
                      <div className="flex justify-center">
                        <div className="bg-gradient-to-br from-orange-400 to-red-500 p-6 rounded-full shadow-2xl">
                          <Wifi className="w-12 h-12 text-white" />
                        </div>
                      </div>
                      <h3 className="text-2xl font-bold text-white">Velocidades de até</h3>
                      <div className="text-6xl font-bold bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                        1GB
                      </div>
                      <p className="text-white/80 text-lg">Upload e Download</p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </ParallaxSection>

      
      
      {/* Stats Section */}
      <AnimatedSection className="py-20 bg-gradient-to-r from-gray-50 to-blue-50 dark:from-gray-800 dark:to-gray-700">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Números que Impressionam
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              A confiança dos nossos clientes em números
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="text-4xl font-bold text-blue-600 mb-2">
                <StatsCounter end={500} duration={2000} />+
              </div>
              <p className="text-gray-600 dark:text-gray-300 font-medium">Clientes Ativos</p>
            </div>
            
            <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="text-4xl font-bold text-green-600 mb-2">
                <StatsCounter end={99} duration={2000} />%
              </div>
              <p className="text-gray-600 dark:text-gray-300 font-medium">Disponibilidade</p>
            </div>
            
            <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="text-4xl font-bold text-purple-600 mb-2">
                <StatsCounter end={4} duration={2000} />
              </div>
              <p className="text-gray-600 dark:text-gray-300 font-medium">Cidades</p>
            </div>
            
            <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="text-4xl font-bold text-orange-600 mb-2">
                <StatsCounter end={24} duration={2000} />/7
              </div>
              <p className="text-gray-600 dark:text-gray-300 font-medium">Suporte</p>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* SaraivaTV Section */}
      <AnimatedSection className="py-20 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.05"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] bg-repeat"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-4xl md:text-5xl font-bold font-heading">
                  <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
                    SaraivaTV
                  </span>{" "}
                  Gratuito
                </h2>
                <p className="text-xl text-gray-200 leading-relaxed">
                  Nosso aplicativo exclusivo com canais de TV e rádios. 
                  Assista onde quiser, quando quiser!
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center gap-3 p-4 bg-white/10 backdrop-blur-sm rounded-xl">
                  <Play className="w-6 h-6 text-green-400" />
                  <span className="font-medium">Canais de TV ao vivo</span>
                </div>
                <div className="flex items-center gap-3 p-4 bg-white/10 backdrop-blur-sm rounded-xl">
                  <Radio className="w-6 h-6 text-blue-400" />
                  <span className="font-medium">Rádios online</span>
                </div>
                <div className="flex items-center gap-3 p-4 bg-white/10 backdrop-blur-sm rounded-xl">
                  <Smartphone className="w-6 h-6 text-purple-400" />
                  <span className="font-medium">Multiplataforma</span>
                </div>
                <div className="flex items-center gap-3 p-4 bg-white/10 backdrop-blur-sm rounded-xl">
                  <Heart className="w-6 h-6 text-red-400" />
                  <span className="font-medium">100% Gratuito</span>
                </div>
              </div>

              <TouchButton 
                onClick={handleWhatsAppClick}
                className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
              >
                Quero o SaraivaTV →
              </TouchButton>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-red-500 rounded-3xl blur-3xl opacity-20 animate-pulse"></div>
              <div className="relative bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20">
                <div className="grid grid-cols-3 gap-4 mb-6">
                  {[...Array(9)].map((_, i) => (
                    <div key={i} className="aspect-video bg-gradient-to-br from-gray-700 to-gray-800 rounded-lg flex items-center justify-center">
                      <Youtube className="w-6 h-6 text-red-400" />
                    </div>
                  ))}
                </div>
                <div className="text-center">
                  <h3 className="text-xl font-bold mb-2">Diversos Canais</h3>
                  <p className="text-gray-300">Entretenimento, notícias, esportes e muito mais!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Plans Section */}
      <section id="planos" className="py-20 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 font-heading">
              Escolha Seu <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Plano Ideal</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Todos os planos incluem fibra óptica de alta qualidade + SaraivaTV gratuito
            </p>
          </AnimatedSection>

          {/* Mobile Carousel */}
          <div className="lg:hidden">
            <MobilePlansCarousel />
          </div>

          {/* Desktop Grid */}
          <div className="hidden lg:grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Plano Básico */}
            <AnimatedSection delay={200}>
              <Card className="relative overflow-hidden hover:shadow-2xl transition-all duration-300 hover:scale-105 bg-white dark:bg-gray-800 border-2 hover:border-blue-200 dark:hover:border-blue-700">
                <CardContent className="p-8">
                  <div className="text-center space-y-6">
                    <div className="space-y-2">
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Plano Básico</h3>
                      <div className="text-4xl font-bold text-blue-600">100MB</div>
                      <p className="text-gray-600 dark:text-gray-300">Ideal para uso básico</p>
                    </div>

                    <div className="space-y-3 text-left">
                      <div className="flex items-center gap-2">
                        <Wifi className="w-5 h-5 text-green-500" />
                        <span className="text-sm">100MB de velocidade</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Smartphone className="w-5 h-5 text-blue-500" />
                        <span className="text-sm">SaraivaTV incluído</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Shield className="w-5 h-5 text-purple-500" />
                        <span className="text-sm">Fibra óptica</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="w-5 h-5 text-orange-500" />
                        <span className="text-sm">Suporte técnico</span>
                      </div>
                    </div>

                    <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                      <div className="text-3xl font-bold text-gray-900 dark:text-white mb-1">
                        R$ 79<span className="text-lg font-normal text-gray-500">/mês</span>
                      </div>
                      <TouchButton 
                        onClick={handleWhatsAppClick}
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition-colors duration-200"
                      >
                        Contratar
                      </TouchButton>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>

            {/* Plano Popular */}
            <AnimatedSection delay={400}>
              <Card className="relative overflow-hidden hover:shadow-2xl transition-all duration-300 hover:scale-105 bg-gradient-to-br from-purple-600 to-blue-600 text-white transform scale-110 border-4 border-purple-400">
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 bg-yellow-400 text-purple-900 px-4 py-1 rounded-b-lg font-bold text-sm">
                  MAIS POPULAR
                </div>
                <CardContent className="p-8 pt-12">
                  <div className="text-center space-y-6">
                    <div className="space-y-2">
                      <h3 className="text-2xl font-bold">Plano Família</h3>
                      <div className="text-4xl font-bold text-yellow-300">300MB</div>
                      <p className="text-purple-100">Perfeito para famílias</p>
                    </div>

                    <div className="space-y-3 text-left">
                      <div className="flex items-center gap-2">
                        <Wifi className="w-5 h-5 text-green-300" />
                        <span className="text-sm">300MB de velocidade</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Smartphone className="w-5 h-5 text-blue-300" />
                        <span className="text-sm">SaraivaTV incluído</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Shield className="w-5 h-5 text-purple-300" />
                        <span className="text-sm">Fibra óptica premium</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="w-5 h-5 text-orange-300" />
                        <span className="text-sm">Suporte prioritário</span>
                      </div>
                    </div>

                    <div className="pt-4 border-t border-purple-400">
                      <div className="text-3xl font-bold mb-1">
                        R$ 109<span className="text-lg font-normal text-purple-200">/mês</span>
                      </div>
                      <TouchButton 
                        onClick={handleWhatsAppClick}
                        className="w-full bg-yellow-400 hover:bg-yellow-500 text-purple-900 py-3 rounded-lg font-semibold transition-colors duration-200"
                      >
                        Contratar Agora
                      </TouchButton>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>

            {/* Plano Premium */}
            <AnimatedSection delay={600}>
              <Card className="relative overflow-hidden hover:shadow-2xl transition-all duration-300 hover:scale-105 bg-white dark:bg-gray-800 border-2 hover:border-orange-200 dark:hover:border-orange-700">
                <CardContent className="p-8">
                  <div className="text-center space-y-6">
                    <div className="space-y-2">
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Plano Ultra</h3>
                      <div className="text-4xl font-bold text-orange-600">1GB</div>
                      <p className="text-gray-600 dark:text-gray-300">Máxima velocidade</p>
                    </div>

                    <div className="space-y-3 text-left">
                      <div className="flex items-center gap-2">
                        <Zap className="w-5 h-5 text-green-500" />
                        <span className="text-sm">1GB ultra-rápido</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Smartphone className="w-5 h-5 text-blue-500" />
                        <span className="text-sm">SaraivaTV Premium</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Shield className="w-5 h-5 text-purple-500" />
                        <span className="text-sm">Fibra óptica dedicada</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Star className="w-5 h-5 text-orange-500" />
                        <span className="text-sm">Suporte VIP 24h</span>
                      </div>
                    </div>

                    <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                      <div className="text-3xl font-bold text-gray-900 dark:text-white mb-1">
                        R$ 149<span className="text-lg font-normal text-gray-500">/mês</span>
                      </div>
                      <TouchButton 
                        onClick={handleWhatsAppClick}
                        className="w-full bg-orange-600 hover:bg-orange-700 text-white py-3 rounded-lg font-semibold transition-colors duration-200"
                      >
                        Contratar
                      </TouchButton>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Coverage Area */}
      <AnimatedSection className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-800 dark:to-indigo-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 font-heading">
              Área de <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Cobertura</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Levamos internet de qualidade para toda região
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Cidades Atendidas:</h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { name: "Eliseu Martins", status: "100% Cobertura" },
                  { name: "Colônia do Gurguéia", status: "100% Cobertura" },
                  { name: "Manoel Emídio", status: "100% Cobertura" },
                  { name: "Jerumenha", status: "100% Cobertura" }
                ].map((city, index) => (
                  <div key={index} className="flex items-center gap-3 p-4 bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                    <MapPin className="w-5 h-5 text-blue-600" />
                    <div>
                      <div className="font-semibold text-gray-900 dark:text-white">{city.name}</div>
                      <div className="text-sm text-green-600 font-medium">{city.status}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="p-6 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl text-white">
                <h4 className="font-bold text-lg mb-2">Expansão Contínua</h4>
                <p className="text-blue-100">
                  Estamos sempre expandindo nossa rede para atender mais cidades da região. 
                  Entre em contato para saber se já chegamos na sua localidade!
                </p>
              </div>
            </div>

            <div className="relative">
              <RealMap />
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Testimonials */}
      <AnimatedSection className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 font-heading">
              O Que Nossos <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-600">Clientes Dizem</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Depoimentos reais de quem já usa SaraivaNet
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <TestimonialCard
              name="Maria Silva"
              role="Empresária - Eliseu Martins"
              content="A internet da SaraivaNet é excepcional! Nunca mais tive problemas de lentidão. O SaraivaTV é um bônus incrível!"
              rating={5}
              delay={200}
            />
            
            <TestimonialCard
              name="João Santos"
              role="Professor - Colônia do Gurguéia"
              content="Trabalho home office e a velocidade é perfeita. O suporte técnico é muito atencioso e rápido para resolver qualquer questão."
              rating={5}
              delay={400}
            />
            
            <TestimonialCard
              name="Ana Costa"
              role="Estudante - Manoel Emídio"
              content="Finalmente uma internet que não trava nas aulas online! O preço é justo e a qualidade é superior. Recomendo muito!"
              rating={5}
              delay={600}
            />
          </div>
        </div>
      </AnimatedSection>

      {/* CTA Section */}
      <AnimatedSection className="py-20 bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold font-heading">
              Pronto para ter Internet + SaraivaTV?
            </h2>
            <p className="text-xl md:text-2xl font-light opacity-90">
              Não perca mais tempo com internet lenta. Faça parte da família SaraivaNet hoje mesmo!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <TouchButton 
                onClick={handleWhatsAppClick}
                className="bg-white text-orange-600 hover:bg-gray-100 px-8 py-4 rounded-xl font-bold text-lg shadow-xl transition-all duration-300 hover:scale-105 flex items-center gap-2"
              >
                <Heart className="w-5 h-5" />
                Contratar Agora →
              </TouchButton>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 text-center">
              <div className="flex flex-col items-center gap-2">
                <Clock className="w-8 h-8 text-yellow-300" />
                <span className="font-semibold">Instalação Rápida</span>
                <span className="text-sm opacity-80">Em até 48h</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Shield className="w-8 h-8 text-green-300" />
                <span className="font-semibold">Garantia Total</span>
                <span className="text-sm opacity-80">Satisfação garantida</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Users className="w-8 h-8 text-blue-300" />
                <span className="font-semibold">Suporte 24/7</span>
                <span className="text-sm opacity-80">Sempre disponível</span>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Floating Components */}
      <FloatingWhatsApp />
      <ChatBot />
    </div>
  );
};

export default Index;
