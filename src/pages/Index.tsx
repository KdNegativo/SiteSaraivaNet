import { useState } from "react";
import { MapPin, Phone, Mail, Clock, Wifi, Star, Users, Shield, Zap, CheckCircle, ArrowRight, Signal, Router, HeartHandshake, Copy, Tv, Music, Heart, Award, Smartphone } from "lucide-react";
import InteractiveMap from "../components/InteractiveMap";
import StatsCounter from "../components/StatsCounter";
import TestimonialCard from "../components/TestimonialCard";
import FloatingWhatsApp from "../components/FloatingWhatsApp";
import ThemeToggle from "../components/ThemeToggle";
import MobileMenu from "../components/MobileMenu";
import AnimatedSection from "../components/AnimatedSection";
import LoadingSpinner from "../components/LoadingSpinner";
import ChatBot from "../components/ChatBot";
import { useParallax } from "../hooks/useParallax";
import { Button } from "../components/ui/button";
import { Card } from "../components/ui/card";
import { useToast } from "../hooks/use-toast";

const Index = () => {
  const [loadingPlan, setLoadingPlan] = useState<string | null>(null);
  const parallaxOffset = useParallax(0.5);
  const { toast } = useToast();

  const handlePlanClick = async (planName: string) => {
    setLoadingPlan(planName);
    
    // Simular carregamento
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    toast({
      title: "Plano Selecionado!",
      description: `Você será redirecionado para contratar o plano ${planName}. Nossa equipe entrará em contato em breve.`,
    });
    
    setLoadingPlan(null);
    
    // Simular redirecionamento para WhatsApp
    const phoneNumber = "5589994395789";
    const message = `Olá! Gostaria de contratar o plano ${planName} da SaraivaNet.`;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handlePhoneClick = () => {
    navigator.clipboard.writeText("(89) 99439-5789");
    toast({
      title: "Número copiado!",
      description: "O número de telefone foi copiado para a área de transferência.",
    });
  };

  const testimonials = [
    {
      name: "Maria Silva",
      age: 34,
      testimonial: "Internet super rápida e estável! Trabalho home office e nunca tive problemas.",
      initials: "MS"
    },
    {
      name: "João Santos", 
      age: 28,
      testimonial: "Melhor custo-benefício da cidade. Recomendo para todos!",
      initials: "JS"
    },
    {
      name: "Ana Costa",
      age: 41,
      testimonial: "Atendimento excelente e internet de qualidade. Muito satisfeita!",
      initials: "AC"
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      {/* Header */}
      <header className="relative bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 dark:from-blue-950 dark:via-blue-900 dark:to-blue-950 text-white shadow-2xl overflow-hidden">
        <div 
          className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%23ffffff%22 fill-opacity=%220.05%22%3E%3Ccircle cx=%2230%22 cy=%2230%22 r=%224%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"
          style={{ transform: `translateY(${parallaxOffset}px)` }}
        />
        
        <div className="container mx-auto px-4 py-4 relative z-10">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-orange-500 rounded-lg shadow-lg">
                <Wifi className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-white to-orange-200 bg-clip-text text-transparent">
                  SaraivaNet
                </h1>
                <p className="text-sm text-blue-200">Internet de Qualidade</p>
              </div>
            </div>

            <nav className="hidden md:flex items-center space-x-8">
              <a href="#inicio" className="text-white hover:text-orange-300 font-medium transition-colors duration-200 story-link">
                Início
              </a>
              <a href="#planos" className="text-white hover:text-orange-300 font-medium transition-colors duration-200 story-link">
                Planos
              </a>
              <a href="#sobre" className="text-white hover:text-orange-300 font-medium transition-colors duration-200 story-link">
                Sobre
              </a>
              <a href="#cobertura" className="text-white hover:text-orange-300 font-medium transition-colors duration-200 story-link">
                Cobertura
              </a>
              <a href="#contato" className="text-white hover:text-orange-300 font-medium transition-colors duration-200 story-link">
                Contato
              </a>
            </nav>

            <div className="flex items-center space-x-4">
              <ThemeToggle />
              <div 
                className="hidden md:flex items-center space-x-2 text-white bg-orange-700 px-4 py-2 rounded-full hover:bg-orange-800 transition-colors cursor-pointer shadow-lg hover:scale-105 transform"
                onClick={handlePhoneClick}
              >
                <Phone className="w-4 h-4" />
                <span className="font-semibold">(89) 99439-5789</span>
                <Copy className="w-3 h-3 opacity-70" />
              </div>
              <MobileMenu />
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="inicio" className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900 dark:from-blue-950 dark:via-blue-900 dark:to-purple-950 text-white py-20 overflow-hidden">
        <div 
          className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%22100%22 height=%22100%22 viewBox=%220 0 100 100%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cpath d=%22M50 50L50 0L100 50L50 100L0 50Z%22 fill=%22%23ffffff%22 fill-opacity=%220.03%22/%3E%3C/svg%3E')] opacity-20"
          style={{ transform: `translateY(${parallaxOffset * 0.3}px)` }}
        />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <AnimatedSection animation="fade-up">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-blue-200 to-orange-300 bg-clip-text text-transparent leading-tight">
                Internet de
                <span className="block text-orange-400">Alta Velocidade</span>
              </h1>
            </AnimatedSection>
            
            <AnimatedSection animation="fade-up" delay={200}>
              <p className="text-xl md:text-2xl mb-8 text-blue-100 leading-relaxed">
                Conecte-se ao futuro com a internet mais rápida e estável de Matões do Norte - MA
              </p>
            </AnimatedSection>

            <AnimatedSection animation="scale-in" delay={400}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button 
                  size="lg"
                  className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-4 text-lg font-semibold shadow-2xl hover:scale-105 transform transition-all"
                  onClick={() => document.getElementById('planos')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Ver Planos
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                
                <Button 
                  variant="outline"
                  size="lg"
                  className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 text-lg font-semibold transition-all duration-300"
                  onClick={() => document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  <Phone className="mr-2 w-5 h-5" />
                  Fale Conosco
                </Button>
              </div>
            </AnimatedSection>
          </div>
        </div>

        <AnimatedSection animation="fade-up" delay={600} className="mt-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <StatsCounter
                icon={<Users className="w-8 h-8" />}
                endValue={2500}
                label="Clientes Conectados"
                suffix="+"
              />
              <StatsCounter
                icon={<Signal className="w-8 h-8" />}
                endValue={99}
                label="Uptime de Qualidade"
                suffix="%"
              />
              <StatsCounter
                icon={<Router className="w-8 h-8" />}
                endValue={48}
                label="Suporte Técnico"
                suffix="h"
              />
            </div>
          </div>
        </AnimatedSection>
      </section>

      {/* Plans Section */}
      <section id="planos" className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="fade-up">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4">
                Nossos Planos
              </h2>
              <p className="text-gray-600 dark:text-gray-300 text-lg max-w-3xl mx-auto">
                Escolha o plano que melhor se adapta às suas necessidades e aproveite a melhor experiência de conexão
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Plano 1 */}
            <AnimatedSection animation="scale-in" delay={100}>
              <Card className="shadow-xl hover:shadow-2xl transition-all duration-300 border-2 border-blue-500">
                <div className="p-6">
                  <div className="text-center mb-4">
                    <div className="inline-flex items-center bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">
                      <Zap className="w-4 h-4 mr-2" />
                      <span>300 Mega</span>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 dark:text-white text-center mb-2">
                    Plano Velocidade
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-center mb-4">
                    Ideal para quem busca velocidade e estabilidade para trabalhar, estudar e se divertir
                  </p>
                  <div className="text-center">
                    <span className="text-4xl font-bold text-blue-600 dark:text-blue-400">R$ 99,90</span>
                    <span className="text-gray-600 dark:text-gray-300">/mês</span>
                  </div>
                </div>
                <div className="p-6 border-t dark:border-gray-700">
                  <ul className="space-y-2">
                    <li className="flex items-center text-gray-800 dark:text-gray-200">
                      <CheckCircle className="w-5 h-5 mr-2 text-green-500" />
                      <span>Fibra óptica de alta performance</span>
                    </li>
                    <li className="flex items-center text-gray-800 dark:text-gray-200">
                      <CheckCircle className="w-5 h-5 mr-2 text-green-500" />
                      <span>Wi-fi grátis</span>
                    </li>
                    <li className="flex items-center text-gray-800 dark:text-gray-200">
                      <CheckCircle className="w-5 h-5 mr-2 text-green-500" />
                      <span>Suporte 24h</span>
                    </li>
                  </ul>
                  <Button 
                    className="w-full mt-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold shadow-md"
                    disabled={loadingPlan === "Velocidade"}
                    onClick={() => handlePlanClick("Velocidade")}
                  >
                    {loadingPlan === "Velocidade" ? <LoadingSpinner /> : "Contratar"}
                  </Button>
                </div>
              </Card>
            </AnimatedSection>

            {/* Plano 2 */}
            <AnimatedSection animation="scale-in" delay={200}>
              <Card className="shadow-xl hover:shadow-2xl transition-all duration-300 border-2 border-orange-500">
                <div className="p-6">
                  <div className="text-center mb-4">
                    <div className="inline-flex items-center bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-semibold">
                      <HeartHandshake className="w-4 h-4 mr-2" />
                      <span>500 Mega</span>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 dark:text-white text-center mb-2">
                    Plano Família
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-center mb-4">
                    A conexão ideal para toda a família, com ultra velocidade para todos os dispositivos
                  </p>
                  <div className="text-center">
                    <span className="text-4xl font-bold text-orange-600 dark:text-orange-400">R$ 129,90</span>
                    <span className="text-gray-600 dark:text-gray-300">/mês</span>
                  </div>
                </div>
                <div className="p-6 border-t dark:border-gray-700">
                  <ul className="space-y-2">
                    <li className="flex items-center text-gray-800 dark:text-gray-200">
                      <CheckCircle className="w-5 h-5 mr-2 text-green-500" />
                      <span>Ultravelocidade para todos</span>
                    </li>
                    <li className="flex items-center text-gray-800 dark:text-gray-200">
                      <CheckCircle className="w-5 h-5 mr-2 text-green-500" />
                      <span>2 pontos de wi-fi</span>
                    </li>
                    <li className="flex items-center text-gray-800 dark:text-gray-200">
                      <CheckCircle className="w-5 h-5 mr-2 text-green-500" />
                      <span>Atendimento prioritário</span>
                    </li>
                  </ul>
                  <Button 
                    className="w-full mt-4 bg-orange-600 hover:bg-orange-700 text-white font-semibold shadow-md"
                    disabled={loadingPlan === "Família"}
                    onClick={() => handlePlanClick("Família")}
                  >
                    {loadingPlan === "Família" ? <LoadingSpinner /> : "Contratar"}
                  </Button>
                </div>
              </Card>
            </AnimatedSection>

            {/* Plano 3 */}
            <AnimatedSection animation="scale-in" delay={300}>
              <Card className="shadow-xl hover:shadow-2xl transition-all duration-300 border-2 border-purple-500">
                <div className="p-6">
                  <div className="text-center mb-4">
                    <div className="inline-flex items-center bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-semibold">
                      <Award className="w-4 h-4 mr-2" />
                      <span>1 Giga</span>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 dark:text-white text-center mb-2">
                    Plano Premium
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-center mb-4">
                    A melhor experiência de conexão para quem exige o máximo de velocidade e performance
                  </p>
                  <div className="text-center">
                    <span className="text-4xl font-bold text-purple-600 dark:text-purple-400">R$ 199,90</span>
                    <span className="text-gray-600 dark:text-gray-300">/mês</span>
                  </div>
                </div>
                <div className="p-6 border-t dark:border-gray-700">
                  <ul className="space-y-2">
                    <li className="flex items-center text-gray-800 dark:text-gray-200">
                      <CheckCircle className="w-5 h-5 mr-2 text-green-500" />
                      <span>Velocidade de 1 Giga</span>
                    </li>
                    <li className="flex items-center text-gray-800 dark:text-gray-200">
                      <CheckCircle className="w-5 h-5 mr-2 text-green-500" />
                      <span>3 pontos de wi-fi</span>
                    </li>
                    <li className="flex items-center text-gray-800 dark:text-gray-200">
                      <CheckCircle className="w-5 h-5 mr-2 text-green-500" />
                      <span>Consultoria especializada</span>
                    </li>
                  </ul>
                  <Button 
                    className="w-full mt-4 bg-purple-600 hover:bg-purple-700 text-white font-semibold shadow-md"
                    disabled={loadingPlan === "Premium"}
                    onClick={() => handlePlanClick("Premium")}
                  >
                    {loadingPlan === "Premium" ? <LoadingSpinner /> : "Contratar"}
                  </Button>
                </div>
              </Card>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre" className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="fade-up">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4">
                Sobre a SaraivaNet
              </h2>
              <p className="text-gray-600 dark:text-gray-300 text-lg max-w-3xl mx-auto">
                Conectando você ao mundo com a melhor tecnologia e atendimento
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center max-w-5xl mx-auto">
            <AnimatedSection animation="fade-right">
              <img 
                src="https://images.unsplash.com/photo-1517245386804-bb43f653a1c3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" 
                alt="Equipe SaraivaNet" 
                className="rounded-2xl shadow-2xl" 
              />
            </AnimatedSection>

            <AnimatedSection animation="fade-left">
              <div className="space-y-4">
                <p className="text-gray-700 dark:text-gray-300 text-lg">
                  A SaraivaNet é uma empresa líder em soluções de internet, dedicada a fornecer a melhor experiência de conexão para nossos clientes.
                </p>
                <p className="text-gray-700 dark:text-gray-300 text-lg">
                  Com tecnologia de ponta e uma equipe altamente qualificada, garantimos internet de alta velocidade, estabilidade e segurança para você e sua família.
                </p>
                <p className="text-gray-700 dark:text-gray-300 text-lg">
                  Nossa missão é conectar pessoas, impulsionar negócios e transformar vidas através da internet.
                </p>
                <Button 
                  variant="outline"
                  className="border-blue-500 text-blue-500 hover:bg-blue-50 hover:text-blue-900"
                  onClick={() => document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Saiba Mais
                </Button>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Coverage Section */}
      <section id="cobertura" className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="fade-up">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4">
                Área de Cobertura
              </h2>
              <p className="text-gray-600 dark:text-gray-300 text-lg max-w-3xl mx-auto">
                Confira onde a SaraivaNet está presente e conectando pessoas
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="zoom-in">
            <InteractiveMap />
          </AnimatedSection>

          <AnimatedSection animation="fade-up" className="mt-8">
            <div className="text-center">
              <p className="text-gray-600 dark:text-gray-300 text-lg">
                Ainda não chegamos na sua região? Entre em contato e saiba quando a SaraivaNet estará disponível para você!
              </p>
              <Button 
                variant="outline"
                className="border-green-500 text-green-500 hover:bg-green-50 hover:text-green-900 mt-4"
                onClick={() => document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Verificar Cobertura
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="fade-up">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4">
                O que nossos clientes dizem
              </h2>
              <p className="text-gray-600 dark:text-gray-300 text-lg max-w-2xl mx-auto">
                Depoimentos reais de quem já confia na SaraivaNet
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <AnimatedSection key={index} animation="scale-in" delay={index * 150}>
                <TestimonialCard {...testimonial} />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contato" className="py-20 bg-blue-900 dark:bg-blue-950 text-white">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="fade-up">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Entre em Contato
              </h2>
              <p className="text-blue-200 text-lg max-w-2xl mx-auto">
                Estamos prontos para conectar você ao melhor da internet
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <AnimatedSection animation="fade-up" delay={100}>
              <Card className="p-6 text-center bg-white/10 backdrop-blur border-white/20 hover:bg-white/20 transition-all hover:scale-105 transform">
                <Phone className="w-12 h-12 text-orange-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Telefone</h3>
                <p className="text-blue-200 mb-4">(89) 99439-5789</p>
                <Button 
                  variant="outline" 
                  className="border-white/30 text-white hover:bg-white hover:text-blue-900"
                  onClick={handlePhoneClick}
                >
                  <Copy className="w-4 h-4 mr-2" />
                  Copiar Número
                </Button>
              </Card>
            </AnimatedSection>

            <AnimatedSection animation="fade-up" delay={200}>
              <Card className="p-6 text-center bg-white/10 backdrop-blur border-white/20 hover:bg-white/20 transition-all hover:scale-105 transform">
                <MapPin className="w-12 h-12 text-orange-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Endereço</h3>
                <p className="text-blue-200">Matões do Norte - MA</p>
              </Card>
            </AnimatedSection>

            <AnimatedSection animation="fade-up" delay={300}>
              <Card className="p-6 text-center bg-white/10 backdrop-blur border-white/20 hover:bg-white/20 transition-all hover:scale-105 transform">
                <Clock className="w-12 h-12 text-orange-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Atendimento</h3>
                <p className="text-blue-200">24 horas por dia</p>
                <p className="text-blue-200">7 dias por semana</p>
              </Card>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Floating Components */}
      <FloatingWhatsApp />
      <ChatBot />
    </div>
  );
};

export default Index;
