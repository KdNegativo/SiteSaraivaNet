import { useState } from "react";
import { MapPin, Phone, Mail, Clock, Wifi, Star, Users, Shield, Zap, CheckCircle, ArrowRight, Signal, Router, HeartHandshake } from "lucide-react";
import InteractiveMap from "../components/InteractiveMap";
import StatsCounter from "../components/StatsCounter";
import TestimonialCard from "../components/TestimonialCard";
import FloatingWhatsApp from "../components/FloatingWhatsApp";
import ThemeToggle from "../components/ThemeToggle";
import MobileMenu from "../components/MobileMenu";
import SpeedCalculator from "../components/SpeedCalculator";
import AnimatedSection from "../components/AnimatedSection";
import LoadingSpinner from "../components/LoadingSpinner";
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

  const testimonials = [
    {
      name: "Maria Silva",
      age: "32 anos",
      location: "Centro",
      testimonial: "Internet super rápida e estável! Trabalho home office e nunca tive problemas.",
      initials: "MS"
    },
    {
      name: "João Santos",
      age: "45 anos", 
      location: "Bairro Alto",
      testimonial: "Melhor custo-benefício da cidade. Recomendo para todos!",
      initials: "JS"
    },
    {
      name: "Ana Costa",
      age: "28 anos",
      location: "Vila Nova", 
      testimonial: "Atendimento excelente e internet de qualidade. Muito satisfeita!",
      initials: "AC"
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      {/* Header */}
      <header className="relative bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 dark:from-blue-950 dark:via-blue-900 dark:to-blue-950 text-white shadow-2xl overflow-hidden">
        <div 
          className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width=%2260%22%20height=%2260%22%20viewBox=%220%200%2060%2060%22%20xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg%20fill=%22none%22%20fill-rule=%22evenodd%22%3E%3Cg%20fill=%22%23ffffff%22%20fill-opacity=%220.05%22%3E%3Ccircle%20cx=%2230%22%20cy=%2230%22%20r=%224%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"
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
              <div className="hidden md:flex items-center space-x-2 text-white bg-orange-700 px-4 py-2 rounded-full hover:bg-orange-800 transition-colors cursor-pointer shadow-lg hover-scale">
                <Phone className="w-4 h-4" />
                <span className="font-semibold">(89) 99439-5789</span>
              </div>
              <MobileMenu />
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="inicio" className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900 dark:from-blue-950 dark:via-blue-900 dark:to-purple-950 text-white py-20 overflow-hidden">
        <div 
          className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width=%22100%22%20height=%22100%22%20viewBox=%220%200%20100%20100%22%20xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cpath%20d=%22M50%2050L50%200L100%2050L50%20100L0%2050Z%22%20fill=%22%23ffffff%22%20fill-opacity=%220.03%22/%3E%3C/svg%3E')] opacity-20"
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
                  className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-4 text-lg font-semibold shadow-2xl hover-scale"
                  onClick={() => document.getElementById('planos')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Ver Planos
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                
                <Button 
                  variant="outline"
                  size="lg"
                  className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 text-lg font-semibold transition-all duration-300"
                  onClick={() => document.getElementById('teste-velocidade')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  <Signal className="mr-2 w-5 h-5" />
                  Teste sua Velocidade
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

      {/* Speed Calculator Section */}
      <section id="teste-velocidade" className="py-16 bg-gray-50 dark:bg-gray-800 transition-colors">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="fade-up">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
                Qual Velocidade Você Precisa?
              </h2>
              <p className="text-gray-600 dark:text-gray-300 text-lg max-w-2xl mx-auto">
                Use nossa calculadora para descobrir o plano ideal baseado no seu perfil de uso
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="scale-in" delay={200}>
            <div className="max-w-4xl mx-auto">
              <SpeedCalculator />
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Plans Section - keep existing plans with loading states */}
      <section id="planos" className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="fade-up">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4">
                Nossos Planos
              </h2>
              <p className="text-gray-600 dark:text-gray-300 text-lg max-w-2xl mx-auto">
                Escolha o plano ideal para suas necessidades. Todos com velocidade real e suporte 24h.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {[
              { name: "100 Mega", price: "R$ 79,90", speed: "100", ideal: "Básico", features: ["Download até 100 Mbps", "Upload até 50 Mbps", "Wi-Fi grátis", "Suporte 24h"] },
              { name: "200 Mega", price: "R$ 99,90", speed: "200", ideal: "Família", features: ["Download até 200 Mbps", "Upload até 100 Mbps", "Wi-Fi grátis", "Suporte 24h"], popular: true },
              { name: "400 Mega", price: "R$ 129,90", speed: "400", ideal: "Gamer", features: ["Download até 400 Mbps", "Upload até 200 Mbps", "Wi-Fi grátis", "Suporte 24h"] },
              { name: "600 Mega", price: "R$ 159,90", speed: "600", ideal: "Premium", features: ["Download até 600 Mbps", "Upload até 300 Mbps", "Wi-Fi grátis", "Suporte 24h"] }
            ].map((plan, index) => (
              <AnimatedSection key={plan.name} animation="fade-up" delay={index * 100}>
                <Card className={`relative p-6 h-full transition-all duration-300 hover-scale cursor-pointer group ${
                  plan.popular 
                    ? 'border-2 border-orange-500 dark:border-orange-400 shadow-xl bg-gradient-to-br from-orange-50 to-blue-50 dark:from-orange-950 dark:to-blue-950' 
                    : 'border border-gray-200 dark:border-gray-700 hover:border-orange-300 dark:hover:border-orange-600 hover:shadow-lg dark:bg-gray-800'
                }`}>
                  {plan.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-4 py-1 rounded-full text-sm font-bold shadow-lg">
                        Mais Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <Wifi className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">Ideal para {plan.ideal}</p>
                  </div>

                  <div className="text-center mb-6">
                    <div className="text-4xl font-bold text-gray-800 dark:text-white mb-1">{plan.price}</div>
                    <div className="text-gray-600 dark:text-gray-300 text-sm">/mês</div>
                  </div>

                  <div className="space-y-3 mb-8">
                    {plan.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Button 
                    className={`w-full py-3 transition-all duration-300 ${
                      plan.popular 
                        ? 'bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white' 
                        : 'bg-blue-600 hover:bg-blue-700 text-white'
                    }`}
                    onClick={() => handlePlanClick(plan.name)}
                    disabled={loadingPlan === plan.name}
                  >
                    {loadingPlan === plan.name ? (
                      <div className="flex items-center justify-center space-x-2">
                        <LoadingSpinner size="sm" />
                        <span>Processando...</span>
                      </div>
                    ) : (
                      'Contratar Agora'
                    )}
                  </Button>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre" className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <AnimatedSection animation="fade-up">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4">
                  Por que escolher a SaraivaNet?
                </h2>
                <p className="text-gray-600 dark:text-gray-300 text-lg max-w-2xl mx-auto">
                  Mais de 10 anos oferecendo a melhor conexão para Matões do Norte
                </p>
              </div>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: <Zap className="w-12 h-12 text-orange-500" />,
                  title: "Velocidade Real",
                  description: "Garantimos a velocidade contratada 24 horas por dia, sem oscilações."
                },
                {
                  icon: <Shield className="w-12 h-12 text-blue-500" />,
                  title: "Suporte Especializado",
                  description: "Equipe técnica qualificada disponível 24h para resolver qualquer problema."
                },
                {
                  icon: <HeartHandshake className="w-12 h-12 text-green-500" />,
                  title: "Compromisso Local",
                  description: "Empresa da região, conhecemos as necessidades da nossa comunidade."
                }
              ].map((item, index) => (
                <AnimatedSection key={index} animation="scale-in" delay={index * 150}>
                  <Card className="p-8 text-center h-full hover-scale transition-all duration-300 hover:shadow-xl dark:bg-gray-700 border-0">
                    <div className="mb-6 flex justify-center">
                      {item.icon}
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4">{item.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{item.description}</p>
                  </Card>
                </AnimatedSection>
              ))}
            </div>
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
              <p className="text-gray-600 dark:text-gray-300 text-lg max-w-2xl mx-auto">
                Nossa rede de fibra óptica está em constante expansão para atender toda a cidade
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="scale-in" delay={200}>
            <div className="max-w-4xl mx-auto">
              <InteractiveMap />
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
              <p className="text-gray-600 dark:text-gray-300 text-lg">
                Depoimentos reais de quem já escolheu a SaraivaNet
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <AnimatedSection key={index} animation="fade-up" delay={index * 100}>
                <TestimonialCard {...testimonial} />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contato" className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="fade-up">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4">
                Entre em Contato
              </h2>
              <p className="text-gray-600 dark:text-gray-300 text-lg">
                Estamos prontos para atender você da melhor forma
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <AnimatedSection animation="slide-right">
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-lg">
                    <Phone className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800 dark:text-white">Telefone</h3>
                    <p className="text-gray-600 dark:text-gray-300 text-lg">(89) 99439-5789</p>
                    <p className="text-sm text-gray-500">WhatsApp disponível</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-orange-100 dark:bg-orange-900 rounded-lg">
                    <MapPin className="w-6 h-6 text-orange-600 dark:text-orange-400" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800 dark:text-white">Endereço</h3>
                    <p className="text-gray-600 dark:text-gray-300 text-lg">
                      Rua Principal, 123<br />
                      Centro - Matões do Norte, MA
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-green-100 dark:bg-green-900 rounded-lg">
                    <Clock className="w-6 h-6 text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800 dark:text-white">Horário</h3>
                    <p className="text-gray-600 dark:text-gray-300 text-lg">
                      Segunda a Sexta: 8h às 18h<br />
                      Sábado: 8h às 12h<br />
                      Suporte Técnico: 24h
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="slide-left">
              <Card className="p-8 dark:bg-gray-800 border-0 shadow-xl">
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
                  Solicite um Orçamento
                </h3>
                <form className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Nome Completo
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white transition-all"
                      placeholder="Seu nome"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      WhatsApp
                    </label>
                    <input
                      type="tel"
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white transition-all"
                      placeholder="(89) 99999-9999"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Endereço
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white transition-all"
                      placeholder="Seu endereço completo"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Plano de Interesse
                    </label>
                    <select className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white transition-all">
                      <option>Selecione um plano</option>
                      <option>100 Mega - R$ 79,90</option>
                      <option>200 Mega - R$ 99,90</option>
                      <option>400 Mega - R$ 129,90</option>
                      <option>600 Mega - R$ 159,90</option>
                    </select>
                  </div>
                  <Button className="w-full py-3 bg-gradient-to-r from-blue-600 to-orange-600 hover:from-blue-700 hover:to-orange-700 text-white font-semibold transition-all duration-300 hover-scale">
                    Solicitar Contato
                  </Button>
                </form>
              </Card>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 dark:bg-black text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <AnimatedSection animation="fade-up">
              <div>
                <div className="flex items-center space-x-3 mb-6">
                  <div className="p-2 bg-orange-500 rounded-lg">
                    <Wifi className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">SaraivaNet</h3>
                    <p className="text-gray-400 text-sm">Internet de Qualidade</p>
                  </div>
                </div>
                <p className="text-gray-400 leading-relaxed">
                  Conectando Matões do Norte com a melhor internet de fibra óptica da região.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fade-up" delay={100}>
              <div>
                <h4 className="text-lg font-semibold mb-4">Planos</h4>
                <ul className="space-y-2 text-gray-400">
                  <li><a href="#" className="hover:text-orange-400 transition-colors">100 Mega</a></li>
                  <li><a href="#" className="hover:text-orange-400 transition-colors">200 Mega</a></li>
                  <li><a href="#" className="hover:text-orange-400 transition-colors">400 Mega</a></li>
                  <li><a href="#" className="hover:text-orange-400 transition-colors">600 Mega</a></li>
                </ul>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fade-up" delay={200}>
              <div>
                <h4 className="text-lg font-semibold mb-4">Empresa</h4>
                <ul className="space-y-2 text-gray-400">
                  <li><a href="#sobre" className="hover:text-orange-400 transition-colors">Sobre Nós</a></li>
                  <li><a href="#cobertura" className="hover:text-orange-400 transition-colors">Cobertura</a></li>
                  <li><a href="#contato" className="hover:text-orange-400 transition-colors">Contato</a></li>
                  <li><a href="#" className="hover:text-orange-400 transition-colors">Suporte</a></li>
                </ul>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fade-up" delay={300}>
              <div>
                <h4 className="text-lg font-semibold mb-4">Contato</h4>
                <ul className="space-y-4">
                  <li className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-orange-400" />
                    <span className="text-lg">(89) 99439-5789</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <MapPin className="w-5 h-5 text-orange-400" />
                    <span>Matões do Norte - MA</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-orange-400" />
                    <span>contato@saraivanet.com</span>
                  </li>
                </ul>
              </div>
            </AnimatedSection>
          </div>

          <AnimatedSection animation="fade-up" delay={400}>
            <div className="border-t border-gray-800 mt-12 pt-8 text-center">
              <p className="text-gray-400">
                © 2024 SaraivaNet. Todos os direitos reservados. Desenvolvido com ❤️ para nossa comunidade.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </footer>

      <FloatingWhatsApp />
    </div>
  );
};

export default Index;
