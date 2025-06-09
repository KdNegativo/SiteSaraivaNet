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
      {/* Floating Components */}
      <FloatingWhatsApp />
      <ChatBot />
      
      {/* Header */}
      <header className="bg-gradient-to-r from-orange-600 to-red-600 dark:from-gray-800 dark:to-gray-900 shadow-lg sticky top-0 z-50">
        <div className="container mx-auto px-2 sm:px-4 py-2 sm:py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2 sm:space-x-4">
            <img 
              src="/lovable-uploads/935d3409-f4aa-423b-937b-2d4df265cbed.png" 
              alt="SaraivaNet Logo" 
              className="w-6 h-6 sm:w-10 sm:h-10 rounded-full"
            />
            <h1 className="text-sm sm:text-2xl font-bold text-white">SaraivaNet</h1>
          </div>
          
          <div className="hidden lg:flex items-center space-x-8">
            <nav className="flex space-x-6">
              <a href="#inicio" className="text-white hover:text-orange-200 transition-colors font-medium">Início</a>
              <a href="#planos" className="text-white hover:text-orange-200 transition-colors font-medium">Planos</a>
              <a href="#cobertura" className="text-white hover:text-orange-200 transition-colors font-medium">Cobertura</a>
              <a href="#sobre" className="text-white hover:text-orange-200 transition-colors font-medium">Sobre</a>
              <a href="#contato" className="text-white hover:text-orange-200 transition-colors font-medium">Contato</a>
            </nav>
            <ThemeToggle />
          </div>

          <div className="flex items-center space-x-2 lg:hidden">
            <ThemeToggle />
            <MobileNavigation />
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="inicio" className="relative min-h-[70vh] sm:min-h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-600/90 to-red-600/90 dark:from-gray-900/90 dark:to-gray-800/90"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%23ffffff\" fill-opacity=\"0.1\"%3E%3Ccircle cx=\"30\" cy=\"30\" r=\"2\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
        
        <div className="relative z-10 text-center px-2 sm:px-4 max-w-6xl mx-auto">
          <h2 className="text-lg sm:text-3xl md:text-5xl font-bold text-white mb-2 sm:mb-4 animate-fade-in">
            Internet de <span className="text-yellow-300">Alta Velocidade</span>
          </h2>
          <p className="text-xs sm:text-lg md:text-xl text-white/90 mb-3 sm:mb-6 max-w-3xl mx-auto animate-fade-in">
            Conecte-se com o futuro! Planos de fibra óptica com velocidades de até 1GB para sua casa ou empresa.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 justify-center items-center mb-4 sm:mb-8 animate-bounce-in">
            <Button 
              size="lg" 
              className="w-full sm:w-auto bg-white text-orange-600 hover:bg-orange-50 font-bold py-1.5 sm:py-3 px-3 sm:px-6 rounded-xl text-xs sm:text-base shadow-lg transform hover:scale-105 transition-all"
              onClick={() => document.getElementById('planos')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Wifi className="mr-1 sm:mr-2 h-3 w-3 sm:h-5 sm:w-5" />
              Ver Planos
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="w-full sm:w-auto border-2 border-white text-white hover:bg-white hover:text-orange-600 font-bold py-1.5 sm:py-3 px-3 sm:px-6 rounded-xl text-xs sm:text-base transition-all"
              onClick={() => {
                const phoneNumber = "5589994395789";
                const message = "Olá! Gostaria de saber mais sobre os planos da SaraivaNet.";
                const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
                window.open(whatsappUrl, '_blank');
              }}
            >
              <Phone className="mr-1 sm:mr-2 h-3 w-3 sm:h-5 sm:w-5" />
              Fale Conosco
            </Button>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-6 mt-4 sm:mt-12">
            <div className="text-center animate-slide-in-left p-1 sm:p-4">
              <div className="w-8 h-8 sm:w-16 sm:h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-1 sm:mb-4 shadow-lg">
                <Zap className="w-4 h-4 sm:w-8 sm:h-8 text-white" />
              </div>
              <StatsCounter endValue={1000} label="Mbps de Velocidade" />
              <div className="text-white/80 mt-0.5 text-xs sm:text-sm">
                Fibra óptica premium
              </div>
            </div>

            <div className="text-center animate-scale-in p-1 sm:p-4">
              <div className="w-8 h-8 sm:w-16 sm:h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-1 sm:mb-4 shadow-lg">
                <Users className="w-4 h-4 sm:w-8 sm:h-8 text-white" />
              </div>
              <StatsCounter endValue={500} label="Clientes Satisfeitos" />
              <div className="text-white/80 mt-0.5 text-xs sm:text-sm">
                E crescendo cada dia
              </div>
            </div>

            <div className="text-center animate-slide-in-right p-1 sm:p-4">
              <div className="w-8 h-8 sm:w-16 sm:h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-1 sm:mb-4 shadow-lg">
                <MapPin className="w-4 h-4 sm:w-8 sm:h-8 text-white" />
              </div>
              <StatsCounter endValue={5} label="Cidades Atendidas" />
              <div className="text-white/80 mt-0.5 text-xs sm:text-sm">
                Cobertura no sul do Piauí
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-2 sm:bottom-4 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-4 h-4 sm:w-6 sm:h-6 text-white/70" />
        </div>
      </section>

      {/* Plans Section */}
      <section id="planos" className="py-4 sm:py-12 lg:py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-2 sm:px-4">
          <div className="text-center mb-4 sm:mb-12">
            <h3 className="text-lg sm:text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-1 sm:mb-3">
              Escolha seu Plano Ideal
            </h3>
            <p className="text-xs sm:text-base lg:text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Temos o plano perfeito para suas necessidades. Todos com fibra óptica e suporte 24/7.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-4 lg:gap-6">
            {/* Plano Básico */}
            <Card className="relative overflow-hidden group hover:shadow-xl transition-all duration-300 border-2">
              <CardContent className="p-2 sm:p-4">
                <div className="text-center">
                  <Zap className="w-6 h-6 sm:w-10 sm:h-10 text-orange-600 mx-auto mb-1 sm:mb-3" />
                  <h4 className="text-sm sm:text-lg font-bold text-gray-900 dark:text-white mb-1 sm:mb-2">Plano Básico</h4>
                  <div className="text-lg sm:text-2xl font-bold text-orange-600 mb-1 sm:mb-3">
                    R$ 59,90
                    <span className="text-xs text-gray-500 dark:text-gray-400 font-normal">/mês</span>
                  </div>
                  <div className="text-base sm:text-xl font-semibold text-gray-700 dark:text-gray-300 mb-2 sm:mb-4">
                    100 Mbps
                  </div>
                  
                  <ul className="space-y-1 mb-2 sm:mb-4 text-left">
                    <li className="flex items-center text-xs">
                      <CheckCircle className="w-3 h-3 text-green-500 mr-1 flex-shrink-0" />
                      <span>Download: 100 Mbps</span>
                    </li>
                    <li className="flex items-center text-xs">
                      <CheckCircle className="w-3 h-3 text-green-500 mr-1 flex-shrink-0" />
                      <span>Upload: 50 Mbps</span>
                    </li>
                    <li className="flex items-center text-xs">
                      <CheckCircle className="w-3 h-3 text-green-500 mr-1 flex-shrink-0" />
                      <span>Fibra óptica</span>
                    </li>
                    <li className="flex items-center text-xs">
                      <CheckCircle className="w-3 h-3 text-green-500 mr-1 flex-shrink-0" />
                      <span>Suporte 24/7</span>
                    </li>
                  </ul>
                  
                  <Button className="w-full bg-orange-600 hover:bg-orange-700 text-white py-1 text-xs">
                    Contratar Agora
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Plano Intermediário */}
            <Card className="relative overflow-hidden group hover:shadow-xl transition-all duration-300 border-2">
              <CardContent className="p-2 sm:p-4">
                <div className="text-center">
                  <Wifi className="w-6 h-6 sm:w-10 sm:h-10 text-orange-600 mx-auto mb-1 sm:mb-3" />
                  <h4 className="text-sm sm:text-lg font-bold text-gray-900 dark:text-white mb-1 sm:mb-2">Plano Intermediário</h4>
                  <div className="text-lg sm:text-2xl font-bold text-orange-600 mb-1 sm:mb-3">
                    R$ 89,90
                    <span className="text-xs text-gray-500 dark:text-gray-400 font-normal">/mês</span>
                  </div>
                  <div className="text-base sm:text-xl font-semibold text-gray-700 dark:text-gray-300 mb-2 sm:mb-4">
                    300 Mbps
                  </div>
                  
                  <ul className="space-y-1 mb-2 sm:mb-4 text-left">
                    <li className="flex items-center text-xs">
                      <CheckCircle className="w-3 h-3 text-green-500 mr-1 flex-shrink-0" />
                      <span>Download: 300 Mbps</span>
                    </li>
                    <li className="flex items-center text-xs">
                      <CheckCircle className="w-3 h-3 text-green-500 mr-1 flex-shrink-0" />
                      <span>Upload: 150 Mbps</span>
                    </li>
                    <li className="flex items-center text-xs">
                      <CheckCircle className="w-3 h-3 text-green-500 mr-1 flex-shrink-0" />
                      <span>Fibra óptica</span>
                    </li>
                    <li className="flex items-center text-xs">
                      <CheckCircle className="w-3 h-3 text-green-500 mr-1 flex-shrink-0" />
                      <span>Suporte 24/7</span>
                    </li>
                  </ul>
                  
                  <Button className="w-full bg-orange-600 hover:bg-orange-700 text-white py-1 text-xs">
                    Contratar Agora
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Plano Premium - Destacado */}
            <Card className="relative overflow-hidden group hover:shadow-xl transition-all duration-300 border-2 border-orange-500 lg:scale-105">
              <div className="absolute top-0 right-0 bg-orange-500 text-white px-1 py-0.5 text-xs font-bold">
                POPULAR
              </div>
              <CardContent className="p-2 sm:p-4">
                <div className="text-center">
                  <Zap className="w-6 h-6 sm:w-10 sm:h-10 text-orange-600 mx-auto mb-1 sm:mb-3" />
                  <h4 className="text-sm sm:text-lg font-bold text-gray-900 dark:text-white mb-1 sm:mb-2">Plano Premium</h4>
                  <div className="text-lg sm:text-2xl font-bold text-orange-600 mb-1 sm:mb-3">
                    R$ 129,90
                    <span className="text-xs text-gray-500 dark:text-gray-400 font-normal">/mês</span>
                  </div>
                  <div className="text-base sm:text-xl font-semibold text-gray-700 dark:text-gray-300 mb-2 sm:mb-4">
                    600 Mbps
                  </div>
                  
                  <ul className="space-y-1 mb-2 sm:mb-4 text-left">
                    <li className="flex items-center text-xs">
                      <CheckCircle className="w-3 h-3 text-green-500 mr-1 flex-shrink-0" />
                      <span>Download: 600 Mbps</span>
                    </li>
                    <li className="flex items-center text-xs">
                      <CheckCircle className="w-3 h-3 text-green-500 mr-1 flex-shrink-0" />
                      <span>Upload: 300 Mbps</span>
                    </li>
                    <li className="flex items-center text-xs">
                      <CheckCircle className="w-3 h-3 text-green-500 mr-1 flex-shrink-0" />
                      <span>Fibra óptica</span>
                    </li>
                    <li className="flex items-center text-xs">
                      <CheckCircle className="w-3 h-3 text-green-500 mr-1 flex-shrink-0" />
                      <span>Suporte 24/7</span>
                    </li>
                    <li className="flex items-center text-xs">
                      <CheckCircle className="w-3 h-3 text-green-500 mr-1 flex-shrink-0" />
                      <span>WiFi 6 incluso</span>
                    </li>
                  </ul>
                  
                  <Button className="w-full bg-orange-600 hover:bg-orange-700 text-white py-1 text-xs">
                    Contratar Agora
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Plano Ultra */}
            <Card className="relative overflow-hidden group hover:shadow-xl transition-all duration-300 border-2">
              <CardContent className="p-2 sm:p-4">
                <div className="text-center">
                  <Rocket className="w-6 h-6 sm:w-10 sm:h-10 text-orange-600 mx-auto mb-1 sm:mb-3" />
                  <h4 className="text-sm sm:text-lg font-bold text-gray-900 dark:text-white mb-1 sm:mb-2">Plano Ultra</h4>
                  <div className="text-lg sm:text-2xl font-bold text-orange-600 mb-1 sm:mb-3">
                    R$ 199,90
                    <span className="text-xs text-gray-500 dark:text-gray-400 font-normal">/mês</span>
                  </div>
                  <div className="text-base sm:text-xl font-semibold text-gray-700 dark:text-gray-300 mb-2 sm:mb-4">
                    1000 Mbps
                  </div>
                  
                  <ul className="space-y-1 mb-2 sm:mb-4 text-left">
                    <li className="flex items-center text-xs">
                      <CheckCircle className="w-3 h-3 text-green-500 mr-1 flex-shrink-0" />
                      <span>Download: 1000 Mbps</span>
                    </li>
                    <li className="flex items-center text-xs">
                      <CheckCircle className="w-3 h-3 text-green-500 mr-1 flex-shrink-0" />
                      <span>Upload: 500 Mbps</span>
                    </li>
                    <li className="flex items-center text-xs">
                      <CheckCircle className="w-3 h-3 text-green-500 mr-1 flex-shrink-0" />
                      <span>Fibra óptica</span>
                    </li>
                    <li className="flex items-center text-xs">
                      <CheckCircle className="w-3 h-3 text-green-500 mr-1 flex-shrink-0" />
                      <span>Suporte 24/7</span>
                    </li>
                    <li className="flex items-center text-xs">
                      <CheckCircle className="w-3 h-3 text-green-500 mr-1 flex-shrink-0" />
                      <span>WiFi 6 incluso</span>
                    </li>
                    <li className="flex items-center text-xs">
                      <CheckCircle className="w-3 h-3 text-green-500 mr-1 flex-shrink-0" />
                      <span>IP fixo gratuito</span>
                    </li>
                  </ul>
                  
                  <Button className="w-full bg-orange-600 hover:bg-orange-700 text-white py-1 text-xs">
                    Contratar Agora
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Coverage Section */}
      <section id="cobertura" className="py-4 sm:py-12 lg:py-16 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-800 dark:to-gray-900">
        <div className="container mx-auto px-2 sm:px-4">
          <div className="text-center mb-8 sm:mb-12">
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Nossa Área de Cobertura</h3>
            <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
              Levamos internet de fibra óptica de alta qualidade para toda a região sul do Piauí.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Cidades Atendidas</h4>
              <ul className="space-y-3">
                <li className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-gray-800 dark:text-gray-200">Eliseu Martins - Cobertura Completa</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-gray-800 dark:text-gray-200">Colônia do Gurguéia - Internet Ativa</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-gray-800 dark:text-gray-200">Manoel Emídio - Fibra Óptica</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-gray-800 dark:text-gray-200">Canavieira - Alta Velocidade</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-gray-800 dark:text-gray-200">Jerumenha - Premium TV</span>
                </li>
              </ul>
            </div>

            <div>
              <RealMap />
            </div>
          </div>

          <div className="text-center mt-8">
            <a
              href="https://wa.me/5586999999999?text=Olá! Gostaria de saber sobre a disponibilidade da internet SaraivaNet na minha região."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-3 bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              <span>💬</span>
              <span>Verificar Disponibilidade</span>
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre" className="py-4 sm:py-12 lg:py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-2 sm:px-4">
          <div className="text-center mb-8 sm:mb-12">
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Sobre a SaraivaNet</h3>
            <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
              Há 22 anos conectando Eliseu Martins com o mundo digital. Somos uma empresa piauense comprometida em levar internet de qualidade para todos os lares e empresas da nossa cidade.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Nossa História</h4>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Fundada em 2003 por empreendedores locais, a SaraivaNet nasceu do sonho de democratizar o acesso à internet de qualidade em Eliseu Martins.
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Começamos atendendo apenas algumas famílias e hoje somos referência em conectividade na região, sempre mantendo nosso compromisso com a excelência no atendimento e tecnologia de ponta.
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Nossa missão é simples: conectar pessoas, aproximar famílias e impulsionar o desenvolvimento digital da nossa querida cidade piauense.
              </p>
            </div>

            <div>
              <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Tecnologia que Conecta Corações</h4>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Na SaraivaNet, acreditamos que internet não é apenas tecnologia, é conexão humana. É o avô vendo o neto pela primeira vez por videochamada, é o estudante acessando conhecimento, e o empreendedor expandindo seus negócios. Somos parte da sua história há mais de duas décadas.
              </p>
              <div className="inline-flex items-center text-orange-600 font-bold text-lg bg-white px-6 py-3 rounded-full shadow-lg">
                <Heart className="w-6 h-6 mr-2" />
                Feito com amor no Piauí desde 2003
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-4 sm:py-12 lg:py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-2 sm:px-4">
          <div className="text-center mb-8 sm:mb-12">
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">O Que Nossos Clientes Dizem</h3>
            <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
              Histórias reais de pessoas que confiam na SaraivaNet para se conectar com o mundo.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <TestimonialCard
              name="Maria Santos"
              age="68 anos"
              location="Centro de Eliseu Martins"
              initials="MS"
              testimonial="A internet da SaraivaNet mudou minha vida! Agora consigo falar com meus netos que moram longe todos os dias. O atendimento é muito carinhoso."
            />
            
            <TestimonialCard
              name="João Silva"
              age="45 anos"
              location="Bairro São José"
              initials="JS"
              testimonial="Trabalho com vendas online e a internet nunca me deixou na mão. Rápida e estável, exatamente o que precisava para meu negócio crescer."
            />
            
            <TestimonialCard
              name="Ana Oliveira"
              age="72 anos"
              location="Vila Nova"
              initials="AO"
              testimonial="Os técnicos são muito educados e me ensinaram a usar o Wi-Fi. Agora assisto meus programas favoritos no tablet sem travar."
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contato" className="py-4 sm:py-12 lg:py-16 bg-gradient-to-br from-orange-600 to-red-600 dark:from-gray-900 dark:to-gray-800 text-white">
        <div className="container mx-auto px-2 sm:px-4">
          <div className="text-center mb-8 sm:mb-12">
            <h3 className="text-3xl font-bold mb-4">Entre em Contato</h3>
            <p className="text-base sm:text-lg max-w-3xl mx-auto mb-8">
              Estamos aqui para ajudar! Entre em contato conosco e descubra como podemos conectar você ao mundo digital.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <Card className="p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center shadow-lg">
                  <Phone className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h4 className="text-2xl font-bold text-gray-900 dark:text-white">Telefone</h4>
                  <p className="text-lg">(89) 99439-5789</p>
                  <p className="text-sm text-gray-500">WhatsApp disponível</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center shadow-lg">
                  <MapPin className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h4 className="text-2xl font-bold text-gray-900 dark:text-white">Endereço</h4>
                  <p className="text-lg">Rua Fernando Silva, Centro</p>
                  <p className="text-sm text-gray-500">Eliseu Martins - PI</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center shadow-lg">
                  <Clock className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h4 className="text-2xl font-bold text-gray-900 dark:text-white">Horário</h4>
                  <p className="text-lg">Segunda a Sábado</p>
                  <p className="text-sm text-gray-500">8h às 18h</p>
                </div>
              </div>
            </Card>
          </div>

          <div className="text-center space-x-6">
            <Button 
              onClick={() => {
                const phoneNumber = "5589994395789";
                const message = "Olá! Gostaria de contratar o plano de internet + SaraivaTV.";
                const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
                window.open(whatsappUrl, '_blank');
              }}
              className="bg-green-500 hover:bg-green-600 text-white px-12 py-4 rounded-2xl text-lg font-bold shadow-xl border-0 transition-all duration-300 transform hover:scale-105"
            >
              📱 WhatsApp
            </Button>
            <Button className="bg-white text-orange-600 hover:bg-orange-50 px-12 py-4 rounded-2xl text-lg font-bold shadow-xl border-0 transition-all duration-300 transform hover:scale-105">
              📞 Ligar Agora
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 dark:bg-black text-white py-4 sm:py-8">
        <div className="container mx-auto px-2 sm:px-4">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center shadow-lg">
                <Wifi className="w-6 h-6 text-white" />
              </div>
              <span className="text-3xl font-bold bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">SaraivaNet</span>
            </div>

            <div className="flex space-x-8">
              <nav className="flex space-x-6">
                <a href="#inicio" className="text-gray-300 hover:text-orange-400 transition-colors text-lg">Início</a>
                <a href="#planos" className="text-gray-300 hover:text-orange-400 transition-colors text-lg">Planos</a>
                <a href="#cobertura" className="text-gray-300 hover:text-orange-400 transition-colors text-lg">Cobertura</a>
                <a href="#sobre" className="text-gray-300 hover:text-orange-400 transition-colors text-lg">Sobre Nós</a>
                <a href="#contato" className="text-gray-300 hover:text-orange-400 transition-colors text-lg">Contato</a>
              </nav>
            </div>

            <div className="flex space-x-6">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-orange-400" />
                <span className="text-lg">(89) 99439-5789</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-orange-400" />
                <span className="text-lg">Rua Fernando Silva, Centro, Eliseu Martins - PI</span>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-8 pt-4 text-center">
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
