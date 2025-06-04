
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
        <div className="container mx-auto px-2 py-1.5 flex items-center justify-between">
          <div className="flex items-center space-x-1.5">
            <img 
              src="/lovable-uploads/935d3409-f4aa-423b-937b-2d4df265cbed.png" 
              alt="SaraivaNet Logo" 
              className="w-5 h-5 rounded-full"
            />
            <h1 className="text-xs font-bold text-white">SaraivaNet</h1>
          </div>
          
          <div className="hidden lg:flex items-center space-x-6">
            <nav className="flex space-x-4">
              <a href="#inicio" className="text-white hover:text-orange-200 transition-colors font-medium text-sm">Início</a>
              <a href="#planos" className="text-white hover:text-orange-200 transition-colors font-medium text-sm">Planos</a>
              <a href="#cobertura" className="text-white hover:text-orange-200 transition-colors font-medium text-sm">Cobertura</a>
              <a href="#sobre" className="text-white hover:text-orange-200 transition-colors font-medium text-sm">Sobre</a>
              <a href="#contato" className="text-white hover:text-orange-200 transition-colors font-medium text-sm">Contato</a>
            </nav>
            <ThemeToggle />
          </div>

          <div className="flex items-center space-x-1.5 lg:hidden">
            <ThemeToggle />
            <MobileNavigation />
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="inicio" className="relative min-h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-600/90 to-red-600/90 dark:from-gray-900/90 dark:to-gray-800/90"></div>
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
        
        <div className="relative z-10 text-center px-2 max-w-4xl mx-auto">
          <h2 className="text-base font-bold text-white mb-1.5 animate-fade-in">
            Internet de <span className="text-yellow-300">Alta Velocidade</span>
          </h2>
          <p className="text-xs text-white/90 mb-2.5 max-w-2xl mx-auto animate-fade-in">
            Conecte-se com o futuro! Planos de fibra óptica com velocidades de até 1GB para sua casa ou empresa.
          </p>
          
          <div className="flex flex-col gap-1.5 justify-center items-center mb-3 animate-bounce-in">
            <Button 
              size="sm" 
              className="w-full max-w-xs bg-white text-orange-600 hover:bg-orange-50 font-bold py-1 px-2.5 rounded-lg text-xs shadow-lg transform hover:scale-105 transition-all"
              onClick={() => document.getElementById('planos')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Wifi className="mr-1 h-3 w-3" />
              Ver Planos
            </Button>
            <Button 
              variant="outline" 
              size="sm" 
              className="w-full max-w-xs border-2 border-white text-white hover:bg-white hover:text-orange-600 font-bold py-1 px-2.5 rounded-lg text-xs transition-all"
              onClick={() => {
                const phoneNumber = "5589994395789";
                const message = "Olá! Gostaria de saber mais sobre os planos da SaraivaNet.";
                const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
                window.open(whatsappUrl, '_blank');
              }}
            >
              <Phone className="mr-1 h-3 w-3" />
              Fale Conosco
            </Button>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-1 gap-1.5 mt-3">
            <div className="text-center animate-slide-in-left p-1">
              <div className="w-5 h-5 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-0.5 shadow-lg">
                <Zap className="w-2.5 h-2.5 text-white" />
              </div>
              <StatsCounter endValue={1000} label="Mbps de Velocidade" />
              <div className="text-white/80 mt-0.5 text-xs">
                Fibra óptica premium
              </div>
            </div>

            <div className="text-center animate-scale-in p-1">
              <div className="w-5 h-5 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-0.5 shadow-lg">
                <Users className="w-2.5 h-2.5 text-white" />
              </div>
              <StatsCounter endValue={500} label="Clientes Satisfeitos" />
              <div className="text-white/80 mt-0.5 text-xs">
                E crescendo cada dia
              </div>
            </div>

            <div className="text-center animate-slide-in-right p-1">
              <div className="w-5 h-5 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-0.5 shadow-lg">
                <MapPin className="w-2.5 h-2.5 text-white" />
              </div>
              <StatsCounter endValue={5} label="Cidades Atendidas" />
              <div className="text-white/80 mt-0.5 text-xs">
                Cobertura no sul do Piauí
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-1.5 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-3.5 h-3.5 text-white/70" />
        </div>
      </section>

      {/* Plans Section */}
      <section id="planos" className="py-4 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-2">
          <div className="text-center mb-4">
            <h3 className="text-base font-bold text-gray-900 dark:text-white mb-1.5">
              Escolha seu Plano Ideal
            </h3>
            <p className="text-xs text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Temos o plano perfeito para suas necessidades. Todos com fibra óptica e suporte 24/7.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-2.5">
            {/* Plano Básico */}
            <Card className="relative overflow-hidden group hover:shadow-xl transition-all duration-300 border-2">
              <CardContent className="p-2.5">
                <div className="text-center">
                  <Zap className="w-5 h-5 text-orange-600 mx-auto mb-1.5" />
                  <h4 className="text-xs font-bold text-gray-900 dark:text-white mb-0.5">Plano Básico</h4>
                  <div className="text-base font-bold text-orange-600 mb-1.5">
                    R$ 59,90
                    <span className="text-xs text-gray-500 dark:text-gray-400 font-normal">/mês</span>
                  </div>
                  <div className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    100 Mbps
                  </div>
                  
                  <ul className="space-y-0.5 mb-2.5 text-left">
                    <li className="flex items-center text-xs">
                      <CheckCircle className="w-2.5 h-2.5 text-green-500 mr-1 flex-shrink-0" />
                      <span>Download: 100 Mbps</span>
                    </li>
                    <li className="flex items-center text-xs">
                      <CheckCircle className="w-2.5 h-2.5 text-green-500 mr-1 flex-shrink-0" />
                      <span>Upload: 50 Mbps</span>
                    </li>
                    <li className="flex items-center text-xs">
                      <CheckCircle className="w-2.5 h-2.5 text-green-500 mr-1 flex-shrink-0" />
                      <span>Fibra óptica</span>
                    </li>
                    <li className="flex items-center text-xs">
                      <CheckCircle className="w-2.5 h-2.5 text-green-500 mr-1 flex-shrink-0" />
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
              <CardContent className="p-2.5">
                <div className="text-center">
                  <Wifi className="w-5 h-5 text-orange-600 mx-auto mb-1.5" />
                  <h4 className="text-xs font-bold text-gray-900 dark:text-white mb-0.5">Plano Intermediário</h4>
                  <div className="text-base font-bold text-orange-600 mb-1.5">
                    R$ 89,90
                    <span className="text-xs text-gray-500 dark:text-gray-400 font-normal">/mês</span>
                  </div>
                  <div className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    300 Mbps
                  </div>
                  
                  <ul className="space-y-0.5 mb-2.5 text-left">
                    <li className="flex items-center text-xs">
                      <CheckCircle className="w-2.5 h-2.5 text-green-500 mr-1 flex-shrink-0" />
                      <span>Download: 300 Mbps</span>
                    </li>
                    <li className="flex items-center text-xs">
                      <CheckCircle className="w-2.5 h-2.5 text-green-500 mr-1 flex-shrink-0" />
                      <span>Upload: 150 Mbps</span>
                    </li>
                    <li className="flex items-center text-xs">
                      <CheckCircle className="w-2.5 h-2.5 text-green-500 mr-1 flex-shrink-0" />
                      <span>Fibra óptica</span>
                    </li>
                    <li className="flex items-center text-xs">
                      <CheckCircle className="w-2.5 h-2.5 text-green-500 mr-1 flex-shrink-0" />
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
            <Card className="relative overflow-hidden group hover:shadow-xl transition-all duration-300 border-2 border-orange-500">
              <div className="absolute top-0 right-0 bg-orange-500 text-white px-1 py-0.5 text-xs font-bold">
                POPULAR
              </div>
              <CardContent className="p-2.5">
                <div className="text-center">
                  <Zap className="w-5 h-5 text-orange-600 mx-auto mb-1.5" />
                  <h4 className="text-xs font-bold text-gray-900 dark:text-white mb-0.5">Plano Premium</h4>
                  <div className="text-base font-bold text-orange-600 mb-1.5">
                    R$ 129,90
                    <span className="text-xs text-gray-500 dark:text-gray-400 font-normal">/mês</span>
                  </div>
                  <div className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    600 Mbps
                  </div>
                  
                  <ul className="space-y-0.5 mb-2.5 text-left">
                    <li className="flex items-center text-xs">
                      <CheckCircle className="w-2.5 h-2.5 text-green-500 mr-1 flex-shrink-0" />
                      <span>Download: 600 Mbps</span>
                    </li>
                    <li className="flex items-center text-xs">
                      <CheckCircle className="w-2.5 h-2.5 text-green-500 mr-1 flex-shrink-0" />
                      <span>Upload: 300 Mbps</span>
                    </li>
                    <li className="flex items-center text-xs">
                      <CheckCircle className="w-2.5 h-2.5 text-green-500 mr-1 flex-shrink-0" />
                      <span>Fibra óptica</span>
                    </li>
                    <li className="flex items-center text-xs">
                      <CheckCircle className="w-2.5 h-2.5 text-green-500 mr-1 flex-shrink-0" />
                      <span>Suporte 24/7</span>
                    </li>
                    <li className="flex items-center text-xs">
                      <CheckCircle className="w-2.5 h-2.5 text-green-500 mr-1 flex-shrink-0" />
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
              <CardContent className="p-2.5">
                <div className="text-center">
                  <Rocket className="w-5 h-5 text-orange-600 mx-auto mb-1.5" />
                  <h4 className="text-xs font-bold text-gray-900 dark:text-white mb-0.5">Plano Ultra</h4>
                  <div className="text-base font-bold text-orange-600 mb-1.5">
                    R$ 199,90
                    <span className="text-xs text-gray-500 dark:text-gray-400 font-normal">/mês</span>
                  </div>
                  <div className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    1000 Mbps
                  </div>
                  
                  <ul className="space-y-0.5 mb-2.5 text-left">
                    <li className="flex items-center text-xs">
                      <CheckCircle className="w-2.5 h-2.5 text-green-500 mr-1 flex-shrink-0" />
                      <span>Download: 1000 Mbps</span>
                    </li>
                    <li className="flex items-center text-xs">
                      <CheckCircle className="w-2.5 h-2.5 text-green-500 mr-1 flex-shrink-0" />
                      <span>Upload: 500 Mbps</span>
                    </li>
                    <li className="flex items-center text-xs">
                      <CheckCircle className="w-2.5 h-2.5 text-green-500 mr-1 flex-shrink-0" />
                      <span>Fibra óptica</span>
                    </li>
                    <li className="flex items-center text-xs">
                      <CheckCircle className="w-2.5 h-2.5 text-green-500 mr-1 flex-shrink-0" />
                      <span>Suporte 24/7</span>
                    </li>
                    <li className="flex items-center text-xs">
                      <CheckCircle className="w-2.5 h-2.5 text-green-500 mr-1 flex-shrink-0" />
                      <span>WiFi 6 incluso</span>
                    </li>
                    <li className="flex items-center text-xs">
                      <CheckCircle className="w-2.5 h-2.5 text-green-500 mr-1 flex-shrink-0" />
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
      <section id="cobertura" className="py-4 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-2">
          <div className="text-center mb-4">
            <h3 className="text-base font-bold text-gray-900 dark:text-white mb-1.5">
              Nossa Cobertura
            </h3>
            <p className="text-xs text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Estamos expandindo nossa rede para levar internet de qualidade para toda a região.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-3 items-center">
            <div>
              <h4 className="text-sm font-bold text-gray-900 dark:text-white mb-2">
                Cidades Atendidas
              </h4>
              
              <div className="grid grid-cols-1 gap-1.5">
                {[
                  { name: "Eliseu Martins", status: "Ativo", coverage: 95 },
                  { name: "Colônia do Gurguéia", status: "Ativo", coverage: 90 },
                  { name: "Manoel Emídio", status: "Ativo", coverage: 85 },
                  { name: "Canavieira", status: "Em Expansão", coverage: 60 },
                  { name: "Jerumenha", status: "Em Expansão", coverage: 45 }
                ].map((city, index) => (
                  <Card key={index} className="p-2 hover:shadow-lg transition-shadow">
                    <div className="flex items-center justify-between mb-0.5">
                      <h5 className="font-semibold text-gray-900 dark:text-white text-xs">{city.name}</h5>
                      <span className={`px-1 py-0.5 rounded-full text-xs font-medium ${
                        city.status === 'Ativo' 
                          ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300' 
                          : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300'
                      }`}>
                        {city.status}
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1">
                      <div 
                        className="bg-orange-600 h-1 rounded-full transition-all duration-1000" 
                        style={{ width: `${city.coverage}%` }}
                      ></div>
                    </div>
                    <p className="text-xs text-gray-600 dark:text-gray-400 mt-0.5">
                      {city.coverage}% de cobertura
                    </p>
                  </Card>
                ))}
              </div>

              <div className="mt-3 p-2.5 bg-orange-50 dark:bg-orange-900/20 rounded-lg border border-orange-200 dark:border-orange-800">
                <div className="flex items-start space-x-1.5">
                  <MapPin className="w-3.5 h-3.5 text-orange-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h5 className="font-semibold text-gray-900 dark:text-white mb-0.5 text-xs">
                      Sua cidade não está na lista?
                    </h5>
                    <p className="text-xs text-gray-600 dark:text-gray-400 mb-1.5">
                      Entre em contato conosco! Estamos sempre expandindo nossa rede.
                    </p>
                    <Button 
                      size="sm" 
                      className="bg-orange-600 hover:bg-orange-700 text-white text-xs"
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

            <div>
              <div className="bg-white dark:bg-gray-900 p-1.5 rounded-lg shadow-lg">
                <RealMap />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre" className="py-4 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-2">
          <div className="grid grid-cols-1 gap-3 items-center">
            <div className="animate-slide-in-left">
              <h3 className="text-base font-bold text-gray-900 dark:text-white mb-2">
                Sobre a SaraivaNet
              </h3>
              <p className="text-xs text-gray-600 dark:text-gray-300 mb-1.5 leading-relaxed">
                Há mais de 10 anos levando internet de qualidade para o interior do Piauí. 
                Nossa missão é conectar pessoas e empresas com a tecnologia do futuro.
              </p>
              <p className="text-xs text-gray-600 dark:text-gray-300 mb-3 leading-relaxed">
                Com infraestrutura própria de fibra óptica, garantimos estabilidade, 
                velocidade e o melhor suporte técnico da região.
              </p>
              
              <div className="grid grid-cols-1 gap-1.5">
                <div className="flex items-center space-x-1.5">
                  <div className="w-5 h-5 bg-orange-100 dark:bg-orange-900/30 rounded-full flex items-center justify-center">
                    <Shield className="w-2.5 h-2.5 text-orange-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white text-xs">Confiabilidade</h4>
                    <p className="text-xs text-gray-600 dark:text-gray-400">99.9% de uptime</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-1.5">
                  <div className="w-5 h-5 bg-orange-100 dark:bg-orange-900/30 rounded-full flex items-center justify-center">
                    <Clock className="w-2.5 h-2.5 text-orange-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white text-xs">Suporte 24/7</h4>
                    <p className="text-xs text-gray-600 dark:text-gray-400">Sempre disponível</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-1.5">
                  <div className="w-5 h-5 bg-orange-100 dark:bg-orange-900/30 rounded-full flex items-center justify-center">
                    <Award className="w-2.5 h-2.5 text-orange-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white text-xs">Qualidade</h4>
                    <p className="text-xs text-gray-600 dark:text-gray-400">Fibra óptica pura</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-1.5">
                  <div className="w-5 h-5 bg-orange-100 dark:bg-orange-900/30 rounded-full flex items-center justify-center">
                    <Heart className="w-2.5 h-2.5 text-orange-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white text-xs">Local</h4>
                    <p className="text-xs text-gray-600 dark:text-gray-400">Empresa piauiense</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="animate-slide-in-right">
              <Card className="overflow-hidden shadow-xl">
                <div className="aspect-video bg-gradient-to-br from-orange-500 to-red-600 p-3 flex items-center justify-center">
                  <div className="text-center text-white">
                    <Wifi className="w-6 h-6 mx-auto mb-1.5" />
                    <h4 className="text-xs font-bold mb-0.5">Tecnologia de Ponta</h4>
                    <p className="text-xs opacity-90">
                      Investimos constantemente em infraestrutura para oferecer o melhor serviço
                    </p>
                  </div>
                </div>
                <CardContent className="p-2.5">
                  <div className="grid grid-cols-3 gap-1.5 text-center">
                    <div>
                      <div className="text-sm font-bold text-orange-600">10+</div>
                      <div className="text-xs text-gray-600 dark:text-gray-400">Anos de experiência</div>
                    </div>
                    <div>
                      <div className="text-sm font-bold text-orange-600">500+</div>
                      <div className="text-xs text-gray-600 dark:text-gray-400">Clientes satisfeitos</div>
                    </div>
                    <div>
                      <div className="text-sm font-bold text-orange-600">5</div>
                      <div className="text-xs text-gray-600 dark:text-gray-400">Cidades atendidas</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-4 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-2">
          <div className="text-center mb-4">
            <h3 className="text-base font-bold text-gray-900 dark:text-white mb-1.5">
              O que nossos clientes dizem
            </h3>
            <p className="text-xs text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              A satisfação dos nossos clientes é nossa maior conquista
            </p>
          </div>

          <div className="grid grid-cols-1 gap-2.5">
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
      <section id="contato" className="py-4 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-2">
          <div className="text-center mb-4">
            <h3 className="text-base font-bold text-gray-900 dark:text-white mb-1.5">
              Entre em Contato
            </h3>
            <p className="text-xs text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Estamos prontos para atender você. Escolha a forma de contato mais conveniente.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-2.5">
            <Card className="p-2.5 text-center hover:shadow-lg transition-shadow">
              <div className="w-6 h-6 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-1.5">
                <img 
                  src="/lovable-uploads/981f602c-b0d2-4161-8119-dfd91ef1c234.png" 
                  alt="WhatsApp" 
                  className="w-3.5 h-3.5"
                />
              </div>
              <h4 className="text-xs font-bold text-gray-900 dark:text-white mb-0.5">WhatsApp</h4>
              <p className="text-xs text-gray-600 dark:text-gray-400 mb-1.5">
                Atendimento rápido e direto
              </p>
              <Button 
                className="w-full bg-green-600 hover:bg-green-700 text-white text-xs"
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

            <Card className="p-2.5 text-center hover:shadow-lg transition-shadow">
              <div className="w-6 h-6 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-1.5">
                <Phone className="w-3.5 h-3.5 text-blue-600" />
              </div>
              <h4 className="text-xs font-bold text-gray-900 dark:text-white mb-0.5">Telefone</h4>
              <p className="text-xs text-gray-600 dark:text-gray-400 mb-1.5">
                Ligue para nós agora
              </p>
              <Button 
                variant="outline" 
                className="w-full text-xs"
                onClick={() => window.open('tel:+5589994395789', '_self')}
              >
                (89) 99439-5789
              </Button>
            </Card>

            <Card className="p-2.5 text-center hover:shadow-lg transition-shadow">
              <div className="w-6 h-6 bg-orange-100 dark:bg-orange-900/30 rounded-full flex items-center justify-center mx-auto mb-1.5">
                <MapPin className="w-3.5 h-3.5 text-orange-600" />
              </div>
              <h4 className="text-xs font-bold text-gray-900 dark:text-white mb-0.5">Nossos Escritórios</h4>
              <p className="text-xs text-gray-600 dark:text-gray-400 mb-1.5">
                Visite-nos em uma de nossas cidades
              </p>
              <div className="text-xs text-gray-600 dark:text-gray-400 space-y-0.5">
                <div>Eliseu Martins - Matriz</div>
                <div>Colônia do Gurguéia</div>
                <div>Manoel Emídio</div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 dark:bg-gray-950 text-white py-3">
        <div className="container mx-auto px-2">
          <div className="grid grid-cols-1 gap-3">
            <div>
              <div className="flex items-center space-x-1.5 mb-1.5">
                <img 
                  src="/lovable-uploads/935d3409-f4aa-423b-937b-2d4df265cbed.png" 
                  alt="SaraivaNet Logo" 
                  className="w-4 h-4 rounded-full"
                />
                <span className="text-xs font-bold">SaraivaNet</span>
              </div>
              <p className="text-xs text-gray-400 mb-1.5">
                Conectando o Piauí com internet de qualidade há mais de 10 anos.
              </p>
              <div className="flex space-x-1.5">
                <div className="w-5 h-5 bg-gray-800 rounded-full flex items-center justify-center">
                  <Phone className="w-2.5 h-2.5" />
                </div>
                <div className="w-5 h-5 bg-gray-800 rounded-full flex items-center justify-center">
                  <Mail className="w-2.5 h-2.5" />
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-xs font-semibold mb-1.5">Planos</h4>
              <ul className="space-y-0.5 text-xs text-gray-400">
                <li>Básico - 100 Mbps</li>
                <li>Intermediário - 300 Mbps</li>
                <li>Premium - 600 Mbps</li>
                <li>Ultra - 1000 Mbps</li>
              </ul>
            </div>

            <div>
              <h4 className="text-xs font-semibold mb-1.5">Cidades</h4>
              <ul className="space-y-0.5 text-xs text-gray-400">
                <li>Eliseu Martins</li>
                <li>Colônia do Gurguéia</li>
                <li>Manoel Emídio</li>
                <li>Canavieira</li>
                <li>Jerumenha</li>
              </ul>
            </div>

            <div>
              <h4 className="text-xs font-semibold mb-1.5">Contato</h4>
              <ul className="space-y-0.5 text-xs text-gray-400">
                <li>(89) 99439-5789</li>
                <li>suporte@saraivanet.com.br</li>
                <li>Atendimento 24/7</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-3 pt-3 text-center">
            <p className="text-xs text-gray-400">
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
