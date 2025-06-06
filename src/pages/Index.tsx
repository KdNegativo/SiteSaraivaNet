import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, ChevronDown, Clock, Heart, Mail, MapPin, Rocket, Shield, Users, Wifi, Zap, Phone, Award } from "lucide-react";
import ThemeToggle from "@/components/ThemeToggle";
import MobileNavigation from "@/components/MobileNavigation";
import StatsCounter from "@/components/StatsCounter";
import RealMap from "@/components/RealMap";
import TestimonialCard from "@/components/TestimonialCard";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import ChatBot from "@/components/ChatBot";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white dark:from-gray-900 dark:to-gray-800">
      {/* Header */}
      <header className="bg-gradient-to-r from-orange-600 to-red-600 dark:from-gray-800 dark:to-gray-900 shadow-lg sticky top-0 z-50">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <img 
              src="/lovable-uploads/935d3409-f4aa-423b-937b-2d4df265cbed.png" 
              alt="SaraivaNet Logo" 
              className="w-8 h-8 rounded-full"
            />
            <h1 className="text-lg font-bold text-white">SaraivaNet</h1>
          </div>
          
          <div className="hidden lg:flex items-center space-x-6">
            <nav className="flex space-x-6">
              <a href="#inicio" className="text-white hover:text-orange-200 transition-colors font-medium">Início</a>
              <a href="#planos" className="text-white hover:text-orange-200 transition-colors font-medium">Planos</a>
              <a href="#cobertura" className="text-white hover:text-orange-200 transition-colors font-medium">Cobertura</a>
              <a href="#sobre" className="text-white hover:text-orange-200 transition-colors font-medium">Sobre</a>
              <a href="#contato" className="text-white hover:text-orange-200 transition-colors font-medium">Contato</a>
            </nav>
            <ThemeToggle />
          </div>

          <div className="flex items-center space-x-3 lg:hidden">
            <ThemeToggle />
            <MobileNavigation />
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="inicio" className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-600/90 to-red-600/90 dark:from-gray-900/90 dark:to-gray-800/90"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%23ffffff\" fill-opacity=\"0.1\"%3E%3Ccircle cx=\"30\" cy=\"30\" r=\"2\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 animate-fade-in">
            Internet de <span className="text-yellow-300">Alta Velocidade</span>
          </h2>
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto animate-fade-in">
            Conecte-se com o futuro! Planos de fibra óptica com velocidades de até 1GB para sua casa ou empresa.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-bounce-in">
            <Button 
              size="lg" 
              className="w-full sm:w-auto bg-white text-orange-600 hover:bg-orange-50 font-bold py-4 px-8 rounded-xl text-lg shadow-lg transform hover:scale-105 transition-all"
              onClick={() => document.getElementById('planos')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Wifi className="mr-2 h-5 w-5" />
              Ver Planos
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="w-full sm:w-auto border-2 border-white text-white hover:bg-white hover:text-orange-600 font-bold py-4 px-8 rounded-xl text-lg transition-all"
              onClick={() => {
                const phoneNumber = "5589994395789";
                const message = "Olá! Gostaria de saber mais sobre os planos da SaraivaNet.";
                const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
                window.open(whatsappUrl, '_blank');
              }}
            >
              <Phone className="mr-2 h-5 w-5" />
              Fale Conosco
            </Button>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="text-center animate-slide-in-left p-6">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <StatsCounter endValue={1000} label="Mbps de Velocidade" />
              <div className="text-white/80 mt-2 text-sm">
                Fibra óptica premium
              </div>
            </div>

            <div className="text-center animate-scale-in p-6">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Users className="w-8 h-8 text-white" />
              </div>
              <StatsCounter endValue={500} label="Clientes Satisfeitos" />
              <div className="text-white/80 mt-2 text-sm">
                E crescendo cada dia
              </div>
            </div>

            <div className="text-center animate-slide-in-right p-6">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <StatsCounter endValue={5} label="Cidades Atendidas" />
              <div className="text-white/80 mt-2 text-sm">
                Cobertura no sul do Piauí
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-white/70" />
        </div>
      </section>

      {/* Plans Section */}
      <section id="planos" className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Escolha seu Plano Ideal
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Temos o plano perfeito para suas necessidades. Todos com fibra óptica e suporte 24/7.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Plano Básico */}
            <Card className="relative overflow-hidden group hover:shadow-xl transition-all duration-300 border-2 hover:border-orange-500">
              <CardContent className="p-6">
                <div className="text-center">
                  <Zap className="w-12 h-12 text-orange-600 mx-auto mb-4" />
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Plano Básico</h4>
                  <div className="text-3xl font-bold text-orange-600 mb-4">
                    R$ 59,90
                    <span className="text-sm text-gray-500 dark:text-gray-400 font-normal">/mês</span>
                  </div>
                  <div className="text-2xl font-semibold text-gray-700 dark:text-gray-300 mb-6">
                    100 Mbps
                  </div>
                  
                  <ul className="space-y-3 mb-8 text-left">
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      <span>Download: 100 Mbps</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      <span>Upload: 50 Mbps</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      <span>Fibra óptica</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      <span>Suporte 24/7</span>
                    </li>
                  </ul>
                  
                  <Button className="w-full bg-orange-600 hover:bg-orange-700 text-white py-3 text-lg">
                    Contratar Agora
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Plano Intermediário */}
            <Card className="relative overflow-hidden group hover:shadow-xl transition-all duration-300 border-2 hover:border-orange-500">
              <CardContent className="p-6">
                <div className="text-center">
                  <Wifi className="w-12 h-12 text-orange-600 mx-auto mb-4" />
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Plano Intermediário</h4>
                  <div className="text-3xl font-bold text-orange-600 mb-4">
                    R$ 89,90
                    <span className="text-sm text-gray-500 dark:text-gray-400 font-normal">/mês</span>
                  </div>
                  <div className="text-2xl font-semibold text-gray-700 dark:text-gray-300 mb-6">
                    300 Mbps
                  </div>
                  
                  <ul className="space-y-3 mb-8 text-left">
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      <span>Download: 300 Mbps</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      <span>Upload: 150 Mbps</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      <span>Fibra óptica</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      <span>Suporte 24/7</span>
                    </li>
                  </ul>
                  
                  <Button className="w-full bg-orange-600 hover:bg-orange-700 text-white py-3 text-lg">
                    Contratar Agora
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Plano Premium - Destacado */}
            <Card className="relative overflow-hidden group hover:shadow-xl transition-all duration-300 border-2 border-orange-500 transform scale-105">
              <div className="absolute top-0 right-0 bg-orange-500 text-white px-4 py-2 text-sm font-bold">
                POPULAR
              </div>
              <CardContent className="p-6">
                <div className="text-center">
                  <Zap className="w-12 h-12 text-orange-600 mx-auto mb-4" />
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Plano Premium</h4>
                  <div className="text-3xl font-bold text-orange-600 mb-4">
                    R$ 129,90
                    <span className="text-sm text-gray-500 dark:text-gray-400 font-normal">/mês</span>
                  </div>
                  <div className="text-2xl font-semibold text-gray-700 dark:text-gray-300 mb-6">
                    600 Mbps
                  </div>
                  
                  <ul className="space-y-3 mb-8 text-left">
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      <span>Download: 600 Mbps</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      <span>Upload: 300 Mbps</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      <span>Fibra óptica</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      <span>Suporte 24/7</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      <span>WiFi 6 incluso</span>
                    </li>
                  </ul>
                  
                  <Button className="w-full bg-orange-600 hover:bg-orange-700 text-white py-3 text-lg">
                    Contratar Agora
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Plano Ultra */}
            <Card className="relative overflow-hidden group hover:shadow-xl transition-all duration-300 border-2 hover:border-orange-500">
              <CardContent className="p-6">
                <div className="text-center">
                  <Rocket className="w-12 h-12 text-orange-600 mx-auto mb-4" />
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Plano Ultra</h4>
                  <div className="text-3xl font-bold text-orange-600 mb-4">
                    R$ 199,90
                    <span className="text-sm text-gray-500 dark:text-gray-400 font-normal">/mês</span>
                  </div>
                  <div className="text-2xl font-semibold text-gray-700 dark:text-gray-300 mb-6">
                    1000 Mbps
                  </div>
                  
                  <ul className="space-y-3 mb-8 text-left">
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      <span>Download: 1000 Mbps</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      <span>Upload: 500 Mbps</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      <span>Fibra óptica</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      <span>Suporte 24/7</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      <span>WiFi 6 incluso</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      <span>IP fixo gratuito</span>
                    </li>
                  </ul>
                  
                  <Button className="w-full bg-orange-600 hover:bg-orange-700 text-white py-3 text-lg">
                    Contratar Agora
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Coverage Section */}
      <section id="cobertura" className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Área de Cobertura
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Confira onde nossa fibra óptica de alta velocidade está disponível.
            </p>
          </div>
          <RealMap />
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="depoimentos" className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              O que nossos clientes dizem
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Veja os depoimentos de quem já está aproveitando a SaraivaNet.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <TestimonialCard 
              name="Maria Silva" 
              testimonial="A SaraivaNet mudou minha vida! A internet é super rápida e o suporte é excelente." 
              rating={5} 
            />
            <TestimonialCard 
              name="João Santos" 
              testimonial="Finalmente uma internet que funciona de verdade. Recomendo a todos!" 
              rating={4} 
            />
            <TestimonialCard 
              name="Carla Oliveira" 
              testimonial="A melhor internet que já tive. Sem quedas e com alta velocidade." 
              rating={5} 
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre" className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Sobre a SaraivaNet
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Somos uma empresa focada em fornecer a melhor experiência de conexão para nossos clientes. 
              Com tecnologia de ponta e uma equipe dedicada, garantimos internet de alta velocidade e 
              estabilidade para sua casa ou empresa.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <img 
                src="/lovable-uploads/c8f53f5a-9a9a-4b1a-b3b8-4b9b3b3b3b3b.png" 
                alt="Equipe SaraivaNet" 
                className="rounded-xl shadow-lg" 
              />
            </div>
            <div>
              <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Nossa Missão</h4>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                Conectar pessoas e empresas com o mundo, oferecendo soluções de internet inovadoras e 
                um atendimento de excelência. Buscamos ser a melhor opção de internet na região, 
                impulsionando o desenvolvimento e a qualidade de vida de nossos clientes.
              </p>
              <ul className="list-disc pl-5 mt-4 text-gray-600 dark:text-gray-300">
                <li>Tecnologia de ponta</li>
                <li>Atendimento personalizado</li>
                <li>Compromisso com a qualidade</li>
                <li>Cobertura abrangente</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contato" className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Entre em Contato
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Estamos prontos para atender você. Entre em contato e descubra como podemos ajudar.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Contact Form */}
            <div>
              <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Formulário de Contato
              </h4>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-gray-700 dark:text-gray-300 mb-2">Nome</label>
                  <input type="text" id="name" className="w-full px-4 py-2 rounded-xl border border-gray-300 dark:border-gray-700 focus:ring-orange-500 focus:border-orange-500 dark:bg-gray-700 dark:text-white" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-700 dark:text-gray-300 mb-2">Email</label>
                  <input type="email" id="email" className="w-full px-4 py-2 rounded-xl border border-gray-300 dark:border-gray-700 focus:ring-orange-500 focus:border-orange-500 dark:bg-gray-700 dark:text-white" />
                </div>
                <div>
                  <label htmlFor="message" className="block text-gray-700 dark:text-gray-300 mb-2">Mensagem</label>
                  <textarea id="message" rows={4} className="w-full px-4 py-2 rounded-xl border border-gray-300 dark:border-gray-700 focus:ring-orange-500 focus:border-orange-500 dark:bg-gray-700 dark:text-white"></textarea>
                </div>
                <Button className="w-full bg-orange-600 hover:bg-orange-700 text-white py-3 text-lg">
                  Enviar Mensagem
                </Button>
              </form>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Informações de Contato
              </h4>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">
                Entre em contato conosco através dos seguintes meios:
              </p>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <MapPin className="w-5 h-5 text-orange-600 mr-3" />
                  <span>Rua Exemplo, 123 - Centro</span>
                </li>
                <li className="flex items-center">
                  <Phone className="w-5 h-5 text-orange-600 mr-3" />
                  <span>(89) 99439-5789</span>
                </li>
                <li className="flex items-center">
                  <Mail className="w-5 h-5 text-orange-600 mr-3" />
                  <span>contato@saraivanet.com.br</span>
                </li>
                <li className="flex items-center">
                    <Award className="w-5 h-5 text-orange-600 mr-3" />
                    <span>Atendimento de Segunda a Sábado</span>
                </li>
                <li className="flex items-center">
                    <Clock className="w-5 h-5 text-orange-600 mr-3" />
                    <span>Das 08:00 as 18:00</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <FloatingWhatsApp />
      <ChatBot />
    </div>
  );
};

export default Index;
