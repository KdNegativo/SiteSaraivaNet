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
        <div className="container mx-auto px-2 sm:px-4 py-2 sm:py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2 sm:space-x-4">
            <img 
              src="/lovable-uploads/935d3409-f4aa-423b-937b-2d4df265cbed.png" 
              alt="SaraivaNet Logo" 
              className="w-8 h-8 sm:w-10 sm:h-10 rounded-full"
            />
            <h1 className="text-lg sm:text-2xl font-bold text-white">SaraivaNet</h1>
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
      <section id="inicio" className="relative min-h-[80vh] sm:min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-600/90 to-red-600/90 dark:from-gray-900/90 dark:to-gray-800/90"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%23ffffff\" fill-opacity=\"0.1\"%3E%3Ccircle cx=\"30\" cy=\"30\" r=\"2\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
        
        <div className="relative z-10 text-center px-2 sm:px-4 max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white mb-4 sm:mb-6 animate-fade-in">
            Internet de <span className="text-yellow-300">Alta Velocidade</span>
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-white/90 mb-6 sm:mb-8 max-w-3xl mx-auto animate-fade-in">
            Conecte-se com o futuro! Planos de fibra óptica com velocidades de até 1GB para sua casa ou empresa.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-8 sm:mb-12 animate-bounce-in">
            <Button 
              size="lg" 
              className="w-full sm:w-auto bg-white text-orange-600 hover:bg-orange-50 font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-xl text-base sm:text-lg shadow-lg transform hover:scale-105 transition-all"
              onClick={() => document.getElementById('planos')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Wifi className="mr-2 h-5 w-5" />
              Ver Planos
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="w-full sm:w-auto border-2 border-white text-white hover:bg-white hover:text-orange-600 font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-xl text-base sm:text-lg transition-all"
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
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-8 mt-8 sm:mt-16">
            <div className="text-center animate-slide-in-left p-3 sm:p-6">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-6 shadow-lg">
                <Zap className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
              </div>
              <StatsCounter endValue={1000} label="Mbps de Velocidade" />
              <div className="text-white/80 mt-2 text-sm sm:text-lg">
                Fibra óptica premium
              </div>
            </div>

            <div className="text-center animate-scale-in p-3 sm:p-6">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-6 shadow-lg">
                <Users className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
              </div>
              <StatsCounter endValue={500} label="Clientes Satisfeitos" />
              <div className="text-white/80 mt-2 text-sm sm:text-lg">
                E crescendo cada dia
              </div>
            </div>

            <div className="text-center animate-slide-in-right p-3 sm:p-6">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-6 shadow-lg">
                <MapPin className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
              </div>
              <StatsCounter endValue={5} label="Cidades Atendidas" />
              <div className="text-white/80 mt-2 text-sm sm:text-lg">
                Cobertura no sul do Piauí
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-6 h-6 sm:w-8 sm:h-8 text-white/70" />
        </div>
      </section>

      {/* Plans Section */}
      <section id="planos" className="py-8 sm:py-16 lg:py-24 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-2 sm:px-4">
          <div className="text-center mb-8 sm:mb-16">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">
              Escolha seu Plano Ideal
            </h3>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Temos o plano perfeito para suas necessidades. Todos com fibra óptica e suporte 24/7.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {/* Plano Básico */}
            <Card className="relative overflow-hidden group hover:shadow-xl transition-all duration-300 border-2">
              <CardContent className="p-4 sm:p-6">
                <div className="text-center">
                  <Zap className="w-10 h-10 sm:w-12 sm:h-12 text-orange-600 mx-auto mb-3 sm:mb-4" />
                  <h4 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-2">Plano Básico</h4>
                  <div className="text-2xl sm:text-3xl font-bold text-orange-600 mb-2 sm:mb-4">
                    R$ 59,90
                    <span className="text-sm sm:text-base text-gray-500 dark:text-gray-400 font-normal">/mês</span>
                  </div>
                  <div className="text-xl sm:text-2xl font-semibold text-gray-700 dark:text-gray-300 mb-4 sm:mb-6">
                    100 Mbps
                  </div>
                  
                  <ul className="space-y-2 sm:space-y-3 mb-4 sm:mb-6 text-left">
                    <li className="flex items-center text-sm sm:text-base">
                      <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 mr-2 flex-shrink-0" />
                      <span>Download: 100 Mbps</span>
                    </li>
                    <li className="flex items-center text-sm sm:text-base">
                      <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 mr-2 flex-shrink-0" />
                      <span>Upload: 50 Mbps</span>
                    </li>
                    <li className="flex items-center text-sm sm:text-base">
                      <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 mr-2 flex-shrink-0" />
                      <span>Fibra óptica</span>
                    </li>
                    <li className="flex items-center text-sm sm:text-base">
                      <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 mr-2 flex-shrink-0" />
                      <span>Suporte 24/7</span>
                    </li>
                  </ul>
                  
                  <Button className="w-full bg-orange-600 hover:bg-orange-700 text-white py-2 sm:py-3">
                    Contratar Agora
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Plano Intermediário */}
            <Card className="relative overflow-hidden group hover:shadow-xl transition-all duration-300 border-2">
              <CardContent className="p-4 sm:p-6">
                <div className="text-center">
                  <Wifi className="w-10 h-10 sm:w-12 sm:h-12 text-orange-600 mx-auto mb-3 sm:mb-4" />
                  <h4 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-2">Plano Intermediário</h4>
                  <div className="text-2xl sm:text-3xl font-bold text-orange-600 mb-2 sm:mb-4">
                    R$ 89,90
                    <span className="text-sm sm:text-base text-gray-500 dark:text-gray-400 font-normal">/mês</span>
                  </div>
                  <div className="text-xl sm:text-2xl font-semibold text-gray-700 dark:text-gray-300 mb-4 sm:mb-6">
                    300 Mbps
                  </div>
                  
                  <ul className="space-y-2 sm:space-y-3 mb-4 sm:mb-6 text-left">
                    <li className="flex items-center text-sm sm:text-base">
                      <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 mr-2 flex-shrink-0" />
                      <span>Download: 300 Mbps</span>
                    </li>
                    <li className="flex items-center text-sm sm:text-base">
                      <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 mr-2 flex-shrink-0" />
                      <span>Upload: 150 Mbps</span>
                    </li>
                    <li className="flex items-center text-sm sm:text-base">
                      <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 mr-2 flex-shrink-0" />
                      <span>Fibra óptica</span>
                    </li>
                    <li className="flex items-center text-sm sm:text-base">
                      <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 mr-2 flex-shrink-0" />
                      <span>Suporte 24/7</span>
                    </li>
                  </ul>
                  
                  <Button className="w-full bg-orange-600 hover:bg-orange-700 text-white py-2 sm:py-3">
                    Contratar Agora
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Plano Premium - Destacado */}
            <Card className="relative overflow-hidden group hover:shadow-xl transition-all duration-300 border-2 border-orange-500 lg:scale-105">
              <div className="absolute top-0 right-0 bg-orange-500 text-white px-2 sm:px-3 py-1 text-xs sm:text-sm font-bold">
                POPULAR
              </div>
              <CardContent className="p-4 sm:p-6">
                <div className="text-center">
                  <Zap className="w-10 h-10 sm:w-12 sm:h-12 text-orange-600 mx-auto mb-3 sm:mb-4" />
                  <h4 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-2">Plano Premium</h4>
                  <div className="text-2xl sm:text-3xl font-bold text-orange-600 mb-2 sm:mb-4">
                    R$ 129,90
                    <span className="text-sm sm:text-base text-gray-500 dark:text-gray-400 font-normal">/mês</span>
                  </div>
                  <div className="text-xl sm:text-2xl font-semibold text-gray-700 dark:text-gray-300 mb-4 sm:mb-6">
                    600 Mbps
                  </div>
                  
                  <ul className="space-y-2 sm:space-y-3 mb-4 sm:mb-6 text-left">
                    <li className="flex items-center text-sm sm:text-base">
                      <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 mr-2 flex-shrink-0" />
                      <span>Download: 600 Mbps</span>
                    </li>
                    <li className="flex items-center text-sm sm:text-base">
                      <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 mr-2 flex-shrink-0" />
                      <span>Upload: 300 Mbps</span>
                    </li>
                    <li className="flex items-center text-sm sm:text-base">
                      <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 mr-2 flex-shrink-0" />
                      <span>Fibra óptica</span>
                    </li>
                    <li className="flex items-center text-sm sm:text-base">
                      <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 mr-2 flex-shrink-0" />
                      <span>Suporte 24/7</span>
                    </li>
                    <li className="flex items-center text-sm sm:text-base">
                      <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 mr-2 flex-shrink-0" />
                      <span>WiFi 6 incluso</span>
                    </li>
                  </ul>
                  
                  <Button className="w-full bg-orange-600 hover:bg-orange-700 text-white py-2 sm:py-3">
                    Contratar Agora
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Plano Ultra */}
            <Card className="relative overflow-hidden group hover:shadow-xl transition-all duration-300 border-2">
              <CardContent className="p-4 sm:p-6">
                <div className="text-center">
                  <Rocket className="w-10 h-10 sm:w-12 sm:h-12 text-orange-600 mx-auto mb-3 sm:mb-4" />
                  <h4 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-2">Plano Ultra</h4>
                  <div className="text-2xl sm:text-3xl font-bold text-orange-600 mb-2 sm:mb-4">
                    R$ 199,90
                    <span className="text-sm sm:text-base text-gray-500 dark:text-gray-400 font-normal">/mês</span>
                  </div>
                  <div className="text-xl sm:text-2xl font-semibold text-gray-700 dark:text-gray-300 mb-4 sm:mb-6">
                    1000 Mbps
                  </div>
                  
                  <ul className="space-y-2 sm:space-y-3 mb-4 sm:mb-6 text-left">
                    <li className="flex items-center text-sm sm:text-base">
                      <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 mr-2 flex-shrink-0" />
                      <span>Download: 1000 Mbps</span>
                    </li>
                    <li className="flex items-center text-sm sm:text-base">
                      <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 mr-2 flex-shrink-0" />
                      <span>Upload: 500 Mbps</span>
                    </li>
                    <li className="flex items-center text-sm sm:text-base">
                      <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 mr-2 flex-shrink-0" />
                      <span>Fibra óptica</span>
                    </li>
                    <li className="flex items-center text-sm sm:text-base">
                      <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 mr-2 flex-shrink-0" />
                      <span>Suporte 24/7</span>
                    </li>
                    <li className="flex items-center text-sm sm:text-base">
                      <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 mr-2 flex-shrink-0" />
                      <span>WiFi 6 incluso</span>
                    </li>
                    <li className="flex items-center text-sm sm:text-base">
                      <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 mr-2 flex-shrink-0" />
                      <span>IP fixo gratuito</span>
                    </li>
                  </ul>
                  
                  <Button className="w-full bg-orange-600 hover:bg-orange-700 text-white py-2 sm:py-3">
                    Contratar Agora
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Coverage Section */}
      <section id="cobertura" className="py-8 sm:py-16 lg:py-24 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-2 sm:px-4">
          <div className="text-center mb-8 sm:mb-16">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">
              Nossa Cobertura
            </h3>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Estamos expandindo nossa rede para levar internet de qualidade para toda a região.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h4 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">
                Cidades Atendidas
              </h4>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                {[
                  { name: "Eliseu Martins", status: "Ativo", coverage: 95 },
                  { name: "Colônia do Gurguéia", status: "Ativo", coverage: 90 },
                  { name: "Manoel Emídio", status: "Ativo", coverage: 85 },
                  { name: "Canavieira", status: "Em Expansão", coverage: 60 },
                  { name: "Jerumenha", status: "Em Expansão", coverage: 45 }
                ].map((city, index) => (
                  <Card key={index} className="p-3 sm:p-4 hover:shadow-lg transition-shadow">
                    <div className="flex items-center justify-between mb-2">
                      <h5 className="font-semibold text-gray-900 dark:text-white text-sm sm:text-base">{city.name}</h5>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        city.status === 'Ativo' 
                          ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300' 
                          : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300'
                      }`}>
                        {city.status}
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div 
                        className="bg-orange-600 h-2 rounded-full transition-all duration-1000" 
                        style={{ width: `${city.coverage}%` }}
                      ></div>
                    </div>
                    <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mt-1">
                      {city.coverage}% de cobertura
                    </p>
                  </Card>
                ))}
              </div>

              <div className="mt-6 sm:mt-8 p-4 sm:p-6 bg-orange-50 dark:bg-orange-900/20 rounded-lg border border-orange-200 dark:border-orange-800">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-orange-600 mt-1 flex-shrink-0" />
                  <div>
                    <h5 className="font-semibold text-gray-900 dark:text-white mb-2 text-sm sm:text-base">
                      Sua cidade não está na lista?
                    </h5>
                    <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mb-3">
                      Entre em contato conosco! Estamos sempre expandindo nossa rede.
                    </p>
                    <Button 
                      size="sm" 
                      className="bg-orange-600 hover:bg-orange-700 text-white text-xs sm:text-sm"
                      onClick={() => {
                        const phoneNumber = "5589994395789";
                        const message = "Olá! Gostaria de saber sobre a disponibilidade da SaraivaNet na minha cidade.";
                        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
                        window.open(whatsappUrl, '_blank');
                      }}
                    >
                      Solicitar Cobertura
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <div className="bg-white dark:bg-gray-900 p-3 sm:p-4 rounded-lg shadow-lg">
                <RealMap />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre" className="py-8 sm:py-16 lg:py-24 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-2 sm:px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
            <div className="animate-slide-in-left">
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">
                Sobre a SaraivaNet
              </h3>
              <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 mb-4 sm:mb-6 leading-relaxed">
                Há mais de 10 anos levando internet de qualidade para o interior do Piauí. 
                Nossa missão é conectar pessoas e empresas com a tecnologia do futuro.
              </p>
              <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 mb-6 sm:mb-8 leading-relaxed">
                Com infraestrutura própria de fibra óptica, garantimos estabilidade, 
                velocidade e o melhor suporte técnico da região.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-orange-100 dark:bg-orange-900/30 rounded-full flex items-center justify-center">
                    <Shield className="w-5 h-5 sm:w-6 sm:h-6 text-orange-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white text-sm sm:text-base">Confiabilidade</h4>
                    <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">99.9% de uptime</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-orange-100 dark:bg-orange-900/30 rounded-full flex items-center justify-center">
                    <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-orange-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white text-sm sm:text-base">Suporte 24/7</h4>
                    <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">Sempre disponível</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-orange-100 dark:bg-orange-900/30 rounded-full flex items-center justify-center">
                    <Award className="w-5 h-5 sm:w-6 sm:h-6 text-orange-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white text-sm sm:text-base">Qualidade</h4>
                    <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">Fibra óptica pura</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-orange-100 dark:bg-orange-900/30 rounded-full flex items-center justify-center">
                    <Heart className="w-5 h-5 sm:w-6 sm:h-6 text-orange-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white text-sm sm:text-base">Local</h4>
                    <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">Empresa piauiense</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="animate-slide-in-right">
              <Card className="overflow-hidden shadow-xl">
                <div className="aspect-video bg-gradient-to-br from-orange-500 to-red-600 p-6 sm:p-8 flex items-center justify-center">
                  <div className="text-center text-white">
                    <Wifi className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4" />
                    <h4 className="text-xl sm:text-2xl font-bold mb-2">Tecnologia de Ponta</h4>
                    <p className="text-sm sm:text-base opacity-90">
                      Investimos constantemente em infraestrutura para oferecer o melhor serviço
                    </p>
                  </div>
                </div>
                <CardContent className="p-4 sm:p-6">
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-xl sm:text-2xl font-bold text-orange-600">10+</div>
                      <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">Anos de experiência</div>
                    </div>
                    <div>
                      <div className="text-xl sm:text-2xl font-bold text-orange-600">500+</div>
                      <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">Clientes satisfeitos</div>
                    </div>
                    <div>
                      <div className="text-xl sm:text-2xl font-bold text-orange-600">5</div>
                      <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">Cidades atendidas</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-8 sm:py-16 lg:py-24 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-2 sm:px-4">
          <div className="text-center mb-8 sm:mb-16">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">
              O que nossos clientes dizem
            </h3>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              A satisfação dos nossos clientes é nossa maior conquista
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            <TestimonialCard 
              name="Maria Silva"
              city="Eliseu Martins"
              text="Melhor internet que já tive! Velocidade excelente e suporte sempre disponível."
              rating={5}
            />
            <TestimonialCard 
              name="João Santos"
              city="Colônia do Gurguéia"
              text="Trabalho home office e nunca tive problemas. Internet estável o dia todo."
              rating={5}
            />
            <TestimonialCard 
              name="Ana Costa"
              city="Manoel Emídio"
              text="Atendimento impecável! Instalação rápida e internet de qualidade."
              rating={5}
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contato" className="py-8 sm:py-16 lg:py-24 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-2 sm:px-4">
          <div className="text-center mb-8 sm:mb-16">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">
              Entre em Contato
            </h3>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Estamos prontos para atender você. Escolha a forma de contato mais conveniente.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            <Card className="p-4 sm:p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <img 
                  src="/lovable-uploads/981f602c-b0d2-4161-8119-dfd91ef1c234.png" 
                  alt="WhatsApp" 
                  className="w-6 h-6 sm:w-8 sm:h-8"
                />
              </div>
              <h4 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-2">WhatsApp</h4>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-3 sm:mb-4">
                Atendimento rápido e direto
              </p>
              <Button 
                className="w-full bg-green-600 hover:bg-green-700 text-white"
                onClick={() => {
                  const phoneNumber = "5589994395789";
                  const message = "Olá! Gostaria de saber mais sobre os planos da SaraivaNet.";
                  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
                  window.open(whatsappUrl, '_blank');
                }}
              >
                Chamar no WhatsApp
              </Button>
            </Card>

            <Card className="p-4 sm:p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <Phone className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600" />
              </div>
              <h4 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-2">Telefone</h4>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-3 sm:mb-4">
                Ligue para nós agora
              </p>
              <Button 
                variant="outline" 
                className="w-full"
                onClick={() => window.open('tel:+5589994395789', '_self')}
              >
                (89) 99439-5789
              </Button>
            </Card>

            <Card className="p-4 sm:p-6 text-center hover:shadow-lg transition-shadow md:col-span-2 lg:col-span-1">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-orange-100 dark:bg-orange-900/30 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <MapPin className="w-6 h-6 sm:w-8 sm:h-8 text-orange-600" />
              </div>
              <h4 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-2">Nossos Escritórios</h4>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-3 sm:mb-4">
                Visite-nos em uma de nossas cidades
              </p>
              <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 space-y-1">
                <div>Eliseu Martins - Matriz</div>
                <div>Colônia do Gurguéia</div>
                <div>Manoel Emídio</div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 dark:bg-gray-950 text-white py-6 sm:py-8 lg:py-12">
        <div className="container mx-auto px-2 sm:px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            <div className="md:col-span-2 lg:col-span-1">
              <div className="flex items-center space-x-3 mb-3 sm:mb-4">
                <img 
                  src="/lovable-uploads/935d3409-f4aa-423b-937b-2d4df265cbed.png" 
                  alt="SaraivaNet Logo" 
                  className="w-8 h-8 sm:w-10 sm:h-10 rounded-full"
                />
                <span className="text-lg sm:text-xl font-bold">SaraivaNet</span>
              </div>
              <p className="text-sm sm:text-base text-gray-400 mb-3 sm:mb-4">
                Conectando o Piauí com internet de qualidade há mais de 10 anos.
              </p>
              <div className="flex space-x-4">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gray-800 rounded-full flex items-center justify-center">
                  <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gray-800 rounded-full flex items-center justify-center">
                  <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Planos</h4>
              <ul className="space-y-2 text-sm sm:text-base text-gray-400">
                <li>Básico - 100 Mbps</li>
                <li>Intermediário - 300 Mbps</li>
                <li>Premium - 600 Mbps</li>
                <li>Ultra - 1000 Mbps</li>
              </ul>
            </div>

            <div>
              <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Cidades</h4>
              <ul className="space-y-2 text-sm sm:text-base text-gray-400">
                <li>Eliseu Martins</li>
                <li>Colônia do Gurguéia</li>
                <li>Manoel Emídio</li>
                <li>Canavieira</li>
                <li>Jerumenha</li>
              </ul>
            </div>

            <div>
              <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Contato</h4>
              <ul className="space-y-2 text-sm sm:text-base text-gray-400">
                <li>(89) 99439-5789</li>
                <li>suporte@saraivanet.com.br</li>
                <li>Atendimento 24/7</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-6 sm:mt-8 pt-6 sm:pt-8 text-center">
            <p className="text-xs sm:text-sm text-gray-400">
              © 2024 SaraivaNet. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>

      {/* Floating Components */}
      <FloatingWhatsApp />
      <ChatBot />
    </div>
  );
};

export default Index;
