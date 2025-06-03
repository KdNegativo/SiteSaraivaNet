import { Phone, Mail, MapPin, Clock, Wifi, Tv, Music, Headphones, Smartphone, Zap, Users, Heart, Star, Shield, Award, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import RealMap from "@/components/RealMap";
import StatsCounter from "@/components/StatsCounter";
import TestimonialCard from "@/components/TestimonialCard";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Floating WhatsApp Button */}
      <FloatingWhatsApp />
      
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md shadow-lg px-6 py-4 border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center shadow-lg">
              <Wifi className="w-6 h-6 text-white" />
            </div>
            <div>
              <span className="text-3xl font-bold bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">SaraivaNet</span>
              <div className="text-sm text-gray-500 font-medium flex items-center">
                <MapPin className="w-3 h-3 mr-1" />
                Eliseu Martins - PI
              </div>
            </div>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#inicio" className="text-gray-600 hover:text-orange-500 transition-all duration-300 font-medium hover:scale-105">Início</a>
            <a href="#planos" className="text-gray-600 hover:text-orange-500 transition-all duration-300 font-medium hover:scale-105">Planos</a>
            <a href="#cobertura" className="text-gray-600 hover:text-orange-500 transition-all duration-300 font-medium hover:scale-105">Cobertura</a>
            <a href="#sobre" className="text-gray-600 hover:text-orange-500 transition-all duration-300 font-medium hover:scale-105">Sobre</a>
            <a href="#contato" className="text-gray-600 hover:text-orange-500 transition-all duration-300 font-medium hover:scale-105">Contato</a>
          </nav>

          <div className="flex items-center space-x-2 text-orange-500 bg-gradient-to-r from-orange-50 to-red-50 px-6 py-3 rounded-full hover:from-orange-100 hover:to-red-100 transition-all duration-300 cursor-pointer shadow-md hover:shadow-lg transform hover:scale-105">
            <Phone className="w-4 h-4" />
            <span className="font-semibold">(86) 9 9999-9999</span>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="inicio" className="relative bg-gradient-to-br from-orange-500 via-red-500 to-purple-600 text-white px-6 py-24 overflow-hidden">
        {/* Enhanced Background decorations */}
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute top-10 right-10 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 left-10 w-72 h-72 bg-orange-300/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-red-300/10 rounded-full blur-3xl animate-pulse delay-500"></div>
        
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">
          <div className="animate-fade-in">
            <div className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-6 py-3 mb-8 border border-white/30 shadow-lg hover:bg-white/30 transition-all duration-300">
              <Star className="w-4 h-4 mr-2 text-yellow-300" />
              <span className="text-sm font-semibold">Internet + SaraivaTV Grátis</span>
            </div>
            
            <h1 className="text-7xl font-bold mb-6 leading-tight">
              Internet<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-200 to-yellow-200">+ SaraivaTV</span>
            </h1>
            
            <p className="text-xl mb-10 text-gray-100 leading-relaxed">
              Conecte-se com nossa internet de fibra óptica ultrarrápida e ganhe acesso completo ao app SaraivaTV: 
              assista seus canais favoritos direto no celular, onde estiver.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-10">
              <div className="bg-white/15 backdrop-blur-sm rounded-2xl p-6 flex items-center space-x-4 border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105 shadow-lg">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-red-400 rounded-full flex items-center justify-center shadow-lg">
                  <Wifi className="w-6 h-6 text-white" />
                </div>
                <span className="font-semibold">Internet Ultra Rápida</span>
              </div>
              <div className="bg-white/15 backdrop-blur-sm rounded-2xl p-6 flex items-center space-x-4 border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105 shadow-lg">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-red-400 rounded-full flex items-center justify-center shadow-lg">
                  <Tv className="w-6 h-6 text-white" />
                </div>
                <span className="font-semibold">Canais de TV</span>
              </div>
              <div className="bg-white/15 backdrop-blur-sm rounded-2xl p-6 flex items-center space-x-4 border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105 shadow-lg">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-red-400 rounded-full flex items-center justify-center shadow-lg">
                  <Music className="w-6 h-6 text-white" />
                </div>
                <span className="font-semibold">Rádios Online</span>
              </div>
              <div className="bg-white/15 backdrop-blur-sm rounded-2xl p-6 flex items-center space-x-4 border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105 shadow-lg">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-red-400 rounded-full flex items-center justify-center shadow-lg">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <span className="font-semibold">Suporte 24h</span>
              </div>
            </div>

            <div className="flex space-x-6 mb-12">
              <Button className="bg-white text-orange-600 hover:bg-gray-100 px-12 py-6 rounded-2xl font-bold text-xl shadow-2xl transform hover:scale-110 transition-all duration-300 hover:shadow-orange-500/25">
                Contratar Agora →
              </Button>
              <Button variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-orange-600 px-12 py-6 rounded-2xl font-bold text-xl shadow-2xl transform hover:scale-110 transition-all duration-300">
                Saiba Mais
              </Button>
            </div>

            <div className="flex space-x-12 text-sm">
              <div className="text-center">
                <StatsCounter endValue={500} label="Clientes" suffix="+" />
              </div>
              <div className="text-center">
                <StatsCounter endValue={99.9} label="Uptime" suffix="%" />
              </div>
              <div className="text-center">
                <StatsCounter endValue={20} label="Canais" suffix="+" />
              </div>
              <div className="text-center">
                <StatsCounter endValue={24} label="Online" suffix="h" />
              </div>
            </div>
          </div>

          <div className="relative animate-fade-in delay-300">
            <div className="bg-white/15 backdrop-blur-md rounded-3xl p-10 border border-white/20 shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:scale-105">
              <div className="text-center mb-8">
                <div className="w-24 h-24 bg-gradient-to-br from-orange-400 to-red-400 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-2xl">
                  <Smartphone className="w-12 h-12 text-white" />
                </div>
                <h3 className="text-3xl font-bold mb-2">SaraivaTV</h3>
                <p className="text-orange-200 text-lg">Seus canais favoritos no celular</p>
              </div>
              
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-white/10 rounded-xl p-6 text-center border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
                  <Tv className="w-8 h-8 mx-auto mb-3 text-orange-300" />
                  <span className="text-sm font-medium">Canais de TV</span>
                </div>
                <div className="bg-white/10 rounded-xl p-6 text-center border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
                  <Music className="w-8 h-8 mx-auto mb-3 text-orange-300" />
                  <span className="text-sm font-medium">Rádios</span>
                </div>
                <div className="bg-white/10 rounded-xl p-6 text-center border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
                  <Zap className="w-8 h-8 mx-auto mb-3 text-orange-300" />
                  <span className="text-sm font-medium">Ao Vivo</span>
                </div>
                <div className="bg-white/10 rounded-xl p-6 text-center border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
                  <Smartphone className="w-8 h-8 mx-auto mb-3 text-orange-300" />
                  <span className="text-sm font-medium">No Celular</span>
                </div>
              </div>
              
              <p className="text-center text-sm text-orange-200 mb-6">
                Disponível para Android e iOS
              </p>
              
              <div className="flex justify-center space-x-4">
                <div className="bg-white/10 rounded-xl p-3 border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-110">
                  <Smartphone className="w-8 h-8 text-orange-300" />
                </div>
                <div className="bg-white/10 rounded-xl p-3 border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-110">
                  <Tv className="w-8 h-8 text-orange-300" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Plans Section - Clean Design without Cards */}
      <section id="planos" className="py-24 px-6 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-orange-100 text-orange-600 px-6 py-3 rounded-full text-sm font-medium mb-6">
              <Award className="w-4 h-4 mr-2" />
              Plano Exclusivo
            </div>
            <h2 className="text-6xl font-bold bg-gradient-to-r from-gray-800 to-orange-600 bg-clip-text text-transparent mb-6">Nosso Plano Completo</h2>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Um plano que atende todas as suas necessidades com o app <span className="text-orange-500 font-semibold">SaraivaTV gratuito</span> incluído.
            </p>
            <div className="inline-flex items-center bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-3 rounded-full font-semibold shadow-lg animate-pulse">
              🎉 3 meses com desconto especial!
            </div>
          </div>

          <div className="bg-gradient-to-br from-orange-50 via-white to-red-50 rounded-3xl p-16 relative overflow-hidden shadow-2xl">
            {/* Background decorations */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-orange-200/30 to-red-200/30 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-orange-100/40 to-yellow-100/40 rounded-full blur-2xl"></div>
            
            {/* Popular badge */}
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-3 rounded-full text-lg font-bold shadow-xl">
                ⭐ PLANO MAIS POPULAR
              </div>
            </div>

            <div className="relative z-10 grid md:grid-cols-2 gap-16 items-center">
              {/* Left side - Plan info */}
              <div className="text-center md:text-left">
                <div className="w-24 h-24 bg-gradient-to-br from-orange-500 to-red-500 rounded-3xl flex items-center justify-center mx-auto md:mx-0 mb-8 shadow-2xl">
                  <Users className="w-12 h-12 text-white" />
                </div>
                
                <h3 className="text-4xl font-bold text-gray-800 mb-4">Internet + SaraivaTV</h3>
                <div className="text-7xl font-bold text-orange-500 mb-2">300MB</div>
                <div className="text-lg text-gray-500 line-through mb-2">R$ 169,90</div>
                <div className="text-6xl font-bold bg-gradient-to-r from-gray-800 to-orange-600 bg-clip-text text-transparent mb-4">
                  R$ 129,90<span className="text-2xl font-normal">/mês</span>
                </div>
                <div className="text-lg text-gray-600 mb-8">Perfeito para toda família</div>

                <Button className="w-full md:w-auto bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-bold py-4 px-12 text-xl rounded-2xl shadow-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-orange-500/50">
                  Contratar Agora →
                </Button>
              </div>

              {/* Right side - Features */}
              <div>
                <h4 className="text-2xl font-bold text-gray-800 mb-8 text-center">O que está incluído:</h4>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4 bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                    <CheckCircle className="w-6 h-6 text-orange-500 flex-shrink-0" />
                    <span className="font-medium text-gray-800">Internet 300MB fibra óptica</span>
                  </div>
                  <div className="flex items-center space-x-4 bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                    <CheckCircle className="w-6 h-6 text-orange-500 flex-shrink-0" />
                    <span className="font-medium text-gray-800">App SaraivaTV Premium incluído</span>
                  </div>
                  <div className="flex items-center space-x-4 bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                    <CheckCircle className="w-6 h-6 text-orange-500 flex-shrink-0" />
                    <span className="font-medium text-gray-800">Todos os canais de TV disponíveis</span>
                  </div>
                  <div className="flex items-center space-x-4 bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                    <CheckCircle className="w-6 h-6 text-orange-500 flex-shrink-0" />
                    <span className="font-medium text-gray-800">Rádios nacionais e locais</span>
                  </div>
                  <div className="flex items-center space-x-4 bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                    <CheckCircle className="w-6 h-6 text-orange-500 flex-shrink-0" />
                    <span className="font-medium text-gray-800">Wi-Fi potente e estável</span>
                  </div>
                  <div className="flex items-center space-x-4 bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                    <CheckCircle className="w-6 h-6 text-orange-500 flex-shrink-0" />
                    <span className="font-medium text-gray-800">Suporte técnico 24h</span>
                  </div>
                  <div className="flex items-center space-x-4 bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                    <CheckCircle className="w-6 h-6 text-orange-500 flex-shrink-0" />
                    <span className="font-medium text-gray-800">Instalação gratuita</span>
                  </div>
                  <div className="flex items-center space-x-4 bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                    <CheckCircle className="w-6 h-6 text-orange-500 flex-shrink-0" />
                    <span className="font-medium text-gray-800">Velocidade garantida</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Coverage Map Section */}
      <section id="cobertura" className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-orange-100 text-orange-600 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <MapPin className="w-4 h-4 mr-2" />
              Área de Cobertura
            </div>
            <h2 className="text-6xl font-bold mb-6">
              Nossa <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">Cobertura</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Levamos internet de qualidade para toda Eliseu Martins e região, incluindo áreas rurais e do interior.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h3 className="text-4xl font-bold text-gray-800 mb-6">Mapa de Cobertura Real</h3>
              <p className="text-gray-600 mb-6 text-lg">
                Veja no mapa real onde nossa rede de fibra óptica atende. 
                Clique nos marcadores para ver detalhes da cobertura em cada região!
              </p>
              
              <div className="shadow-2xl rounded-3xl overflow-hidden">
                <RealMap />
              </div>
              
              {/* Enhanced Legend */}
              <div className="mt-6 grid grid-cols-2 gap-4">
                <div className="flex items-center space-x-3 p-3 bg-orange-50 rounded-xl">
                  <div className="w-4 h-4 bg-orange-500 rounded-full border-2 border-white shadow-md"></div>
                  <span className="text-sm font-semibold text-gray-700">Centro</span>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-green-50 rounded-xl">
                  <div className="w-4 h-4 bg-green-500 rounded-full border-2 border-white shadow-md"></div>
                  <span className="text-sm font-semibold text-gray-700">Bairros</span>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-blue-50 rounded-xl">
                  <div className="w-4 h-4 bg-blue-500 rounded-full border-2 border-white shadow-md"></div>
                  <span className="text-sm font-semibold text-gray-700">Interior</span>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-purple-50 rounded-xl">
                  <div className="w-4 h-4 bg-purple-500 rounded-full border-2 border-white shadow-md"></div>
                  <span className="text-sm font-semibold text-gray-700">Rural</span>
                </div>
              </div>
            </div>

            <div className="animate-fade-in delay-300">
              <h3 className="text-4xl font-bold text-gray-800 mb-6">Internet em Toda Região</h3>
              <p className="text-gray-600 mb-6 text-lg">
                A SaraivaNet chegou onde outros não conseguiram! Levamos nossa internet de fibra óptica 
                para o centro da cidade, todos os bairros e também para o interior e zona rural de Eliseu Martins.
              </p>

              <div className="space-y-6 mb-8">
                <div className="flex items-center space-x-4 p-6 bg-gradient-to-r from-orange-50 to-red-50 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center shadow-lg">
                    <MapPin className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 text-lg">Centro e Bairros</h4>
                    <p className="text-gray-600">Cobertura completa em toda área urbana</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4 p-6 bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-500 rounded-2xl flex items-center justify-center shadow-lg">
                    <MapPin className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 text-lg">Interior e Zona Rural</h4>
                    <p className="text-gray-600">Levamos internet até as fazendas e sítios</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4 p-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center shadow-lg">
                    <Zap className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 text-lg">Mesma Qualidade</h4>
                    <p className="text-gray-600">Internet rápida e estável em toda região</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-orange-500 via-red-500 to-red-600 rounded-3xl p-16 text-white shadow-2xl transform hover:scale-105 transition-all duration-300">
                <h4 className="text-2xl font-bold mb-4">Sua Região Não Está na Lista?</h4>
                <p className="mb-6 opacity-90 text-lg">
                  Entre em contato conosco! Estamos sempre expandindo nossa cobertura.
                </p>
                <Button className="bg-white text-orange-500 hover:bg-gray-100 font-bold px-8 py-4 rounded-xl text-lg shadow-lg transform hover:scale-105 transition-all duration-300">
                  Consultar Disponibilidade
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SaraivaTV Features Section */}
      <section className="py-24 px-6 bg-gradient-to-b from-white to-orange-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-orange-100 text-orange-600 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Tv className="w-4 h-4 mr-2" />
              App Exclusivo
            </div>
            <h2 className="text-6xl font-bold mb-6">
              Conheça o <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">SaraivaTV</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              App gratuito que vem junto com sua internet. Assista TV direto no celular com qualidade HD!
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 mb-16">
            <Card className="text-center p-8 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 border-0 bg-gradient-to-b from-orange-50 to-white shadow-lg">
              <div className="w-24 h-24 bg-gradient-to-br from-orange-500 to-red-500 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-2xl">
                <Tv className="w-12 h-12 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Canais de TV</h3>
              <p className="text-gray-600 mb-6">
                Assista os mesmos canais da sua TV direto no celular
              </p>
              <div className="space-y-2">
                <span className="inline-block bg-gradient-to-r from-orange-100 to-red-100 text-orange-600 px-3 py-1 rounded-full text-sm font-medium">TV Aberta</span>
                <span className="inline-block bg-gradient-to-r from-orange-100 to-red-100 text-orange-600 px-3 py-1 rounded-full text-sm font-medium ml-2">Canais Locais</span>
                <div className="mt-2">
                  <span className="inline-block bg-gradient-to-r from-orange-100 to-red-100 text-orange-600 px-3 py-1 rounded-full text-sm font-medium">Notícias</span>
                  <span className="inline-block bg-gradient-to-r from-orange-100 to-red-100 text-orange-600 px-3 py-1 rounded-full text-sm font-medium ml-2">Esportes</span>
                </div>
              </div>
            </Card>

            <Card className="text-center p-8 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 border-0 bg-gradient-to-b from-orange-50 to-white shadow-lg">
              <div className="w-24 h-24 bg-gradient-to-br from-orange-500 to-red-500 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-2xl">
                <Music className="w-12 h-12 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Rádios Online</h3>
              <p className="text-gray-600 mb-6">
                Escute suas rádios favoritas onde estiver
              </p>
              <div className="space-y-2">
                <span className="inline-block bg-gradient-to-r from-orange-100 to-red-100 text-orange-600 px-3 py-1 rounded-full text-sm font-medium">Rádios Locais</span>
                <span className="inline-block bg-gradient-to-r from-orange-100 to-red-100 text-orange-600 px-3 py-1 rounded-full text-sm font-medium ml-2">Música</span>
                <div className="mt-2">
                  <span className="inline-block bg-gradient-to-r from-orange-100 to-red-100 text-orange-600 px-3 py-1 rounded-full text-sm font-medium">Notícias</span>
                  <span className="inline-block bg-gradient-to-r from-orange-100 to-red-100 text-orange-600 px-3 py-1 rounded-full text-sm font-medium ml-2">Esportes</span>
                </div>
              </div>
            </Card>

            <Card className="text-center p-8 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 border-0 bg-gradient-to-b from-orange-50 to-white shadow-lg">
              <div className="w-24 h-24 bg-gradient-to-br from-orange-500 to-red-500 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-2xl">
                <Smartphone className="w-12 h-12 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">No Seu Celular</h3>
              <p className="text-gray-600 mb-6">
                App fácil de usar para Android e iOS
              </p>
              <div className="space-y-2">
                <span className="inline-block bg-gradient-to-r from-orange-100 to-red-100 text-orange-600 px-3 py-1 rounded-full text-sm font-medium">Android</span>
                <span className="inline-block bg-gradient-to-r from-orange-100 to-red-100 text-orange-600 px-3 py-1 rounded-full text-sm font-medium ml-2">iOS</span>
                <div className="mt-2">
                  <span className="inline-block bg-gradient-to-r from-orange-100 to-red-100 text-orange-600 px-3 py-1 rounded-full text-sm font-medium">Fácil de Usar</span>
                  <span className="inline-block bg-gradient-to-r from-orange-100 to-red-100 text-orange-600 px-3 py-1 rounded-full text-sm font-medium ml-2">Gratuito</span>
                </div>
              </div>
            </Card>

            <Card className="text-center p-8 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 border-0 bg-gradient-to-b from-orange-50 to-white shadow-lg">
              <div className="w-24 h-24 bg-gradient-to-br from-orange-500 to-red-500 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-2xl">
                <Zap className="w-12 h-12 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Transmissão Ao Vivo</h3>
              <p className="text-gray-600 mb-6">
                Tudo que passa na TV, passa no app em tempo real
              </p>
              <div className="space-y-2">
                <span className="inline-block bg-gradient-to-r from-orange-100 to-red-100 text-orange-600 px-3 py-1 rounded-full text-sm font-medium">Ao Vivo</span>
                <span className="inline-block bg-gradient-to-r from-orange-100 to-red-100 text-orange-600 px-3 py-1 rounded-full text-sm font-medium ml-2">Tempo Real</span>
                <div className="mt-2">
                  <span className="inline-block bg-gradient-to-r from-orange-100 to-red-100 text-orange-600 px-3 py-1 rounded-full text-sm font-medium">Sem Atraso</span>
                  <span className="inline-block bg-gradient-to-r from-orange-100 to-red-100 text-orange-600 px-3 py-1 rounded-full text-sm font-medium ml-2">Qualidade HD</span>
                </div>
              </div>
            </Card>
          </div>

          <div className="bg-gradient-to-r from-orange-500 via-red-500 to-red-600 rounded-3xl p-16 text-white relative overflow-hidden shadow-2xl">
            <div className="absolute inset-0 bg-black/10"></div>
            <div className="absolute top-10 right-10 w-32 h-32 bg-white/10 rounded-full blur-xl"></div>
            <div className="absolute bottom-10 left-10 w-24 h-24 bg-orange-300/20 rounded-full blur-xl"></div>
            <div className="relative z-10">
              <h3 className="text-5xl font-bold mb-6">Pronto para ter Internet + SaraivaTV?</h3>
              <p className="text-2xl mb-10 opacity-90 max-w-2xl mx-auto">
                Não perca tempo! Aproveite nossa oferta especial e ganhe o app SaraivaTV grátis.
              </p>
              <Button className="bg-white text-orange-600 hover:bg-gray-100 px-16 py-6 text-2xl font-bold rounded-2xl shadow-2xl transform hover:scale-110 transition-all duration-300">
                Quero Contratar Agora →
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 px-6 bg-gradient-to-r from-orange-500 via-red-500 to-purple-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute top-10 right-10 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 left-10 w-72 h-72 bg-orange-300/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <h2 className="text-5xl font-bold text-white mb-4">Números Que Falam Por Si</h2>
          <p className="text-2xl text-white/90 mb-12">
            Resultados conquistados com dedicação e compromisso com Eliseu Martins
          </p>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="bg-white/15 backdrop-blur-sm rounded-3xl p-8 text-white shadow-2xl hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
              <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Users className="w-10 h-10 text-white" />
              </div>
              <StatsCounter endValue={500} label="Famílias Conectadas" suffix="+" />
              <div className="text-white/80 mt-2 text-lg">
                Lares piauenses com internet de qualidade
              </div>
            </div>

            <div className="bg-white/15 backdrop-blur-sm rounded-3xl p-8 text-white shadow-2xl hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
              <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <MapPin className="w-10 h-10 text-white" />
              </div>
              <StatsCounter endValue={15} label="Bairros Atendidos" />
              <div className="text-white/80 mt-2 text-lg">
                Cobertura em toda Eliseu Martins
              </div>
            </div>

            <div className="bg-white/15 backdrop-blur-sm rounded-3xl p-8 text-white shadow-2xl hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
              <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Zap className="w-10 h-10 text-white" />
              </div>
              <StatsCounter endValue={99.9} label="Uptime Garantido" suffix="%" />
              <div className="text-white/80 mt-2 text-lg">
                Conexão estável e confiável
              </div>
            </div>

            <div className="bg-white/15 backdrop-blur-sm rounded-3xl p-8 text-white shadow-2xl hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
              <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Heart className="w-10 h-10 text-white" />
              </div>
              <StatsCounter endValue={98} label="Satisfação" suffix="%" />
              <div className="text-white/80 mt-2 text-lg">
                Clientes recomendam nossos serviços
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre" className="py-24 px-6 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-orange-100 text-orange-600 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Heart className="w-4 h-4 mr-2" />
              Nossa História
            </div>
            <h2 className="text-5xl font-bold text-gray-800 mb-4">Sobre a SaraivaNet</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Há 5 anos conectando Eliseu Martins com o mundo digital. Somos uma empresa piauense 
              comprometida em levar internet de qualidade para todos os lares e empresas da nossa cidade.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="animate-fade-in">
              <h3 className="text-3xl font-bold text-gray-800 mb-6">Nossa História</h3>
              <p className="text-gray-600 mb-6 text-lg">
                Fundada em 2019 por empreendedores locais, a SaraivaNet nasceu do sonho 
                de democratizar o acesso à internet de qualidade em Eliseu Martins.
              </p>
              <p className="text-gray-600 mb-6 text-lg">
                Começamos atendendo apenas algumas famílias e hoje somos referência em 
                conectividade na região, sempre mantendo nosso compromisso com a 
                excelência no atendimento e tecnologia de ponta.
              </p>
              <p className="text-gray-600 mb-8 text-lg">
                Nossa missão é simples: conectar pessoas, aproximar famílias e impulsionar o 
                desenvolvimento digital da nossa querida cidade piauense.
              </p>

              <div className="grid grid-cols-2 gap-8">
                <div className="text-center p-6 bg-gradient-to-b from-orange-50 to-white rounded-2xl shadow-lg">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-orange-500">500+</div>
                  <div className="text-sm text-gray-600 font-medium">Clientes Ativos</div>
                </div>
                <div className="text-center p-6 bg-gradient-to-b from-orange-50 to-white rounded-2xl shadow-lg">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <MapPin className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-orange-500">100%</div>
                  <div className="text-sm text-gray-600 font-medium">Cobertura Local</div>
                </div>
                <div className="text-center p-6 bg-gradient-to-b from-orange-50 to-white rounded-2xl shadow-lg">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <Award className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-orange-500">5</div>
                  <div className="text-sm text-gray-600 font-medium">Anos de Experiência</div>
                </div>
                <div className="text-center p-6 bg-gradient-to-b from-orange-50 to-white rounded-2xl shadow-lg">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <Heart className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-orange-500">24h</div>
                  <div className="text-sm text-gray-600 font-medium">Suporte Local</div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-3xl p-10 shadow-2xl animate-fade-in delay-300">
              <h3 className="text-3xl font-bold text-gray-800 mb-6 text-center">
                Tecnologia que Conecta Corações
              </h3>
              <p className="text-gray-600 text-center mb-8 text-lg leading-relaxed">
                Na SaraivaNet, acreditamos que internet não é apenas tecnologia, é conexão humana. É o avô vendo 
                o neto pela primeira vez por videochamada, é o estudante acessando conhecimento, e o 
                empreendedor expandindo seus negócios. Somos parte da sua história.
              </p>
              <div className="text-center">
                <div className="inline-flex items-center text-orange-600 font-bold text-lg bg-white px-6 py-3 rounded-full shadow-lg">
                  <Heart className="w-6 h-6 mr-2" />
                  Feito com amor no Piauí
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 px-6 bg-gray-50">
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
              testimonial="A internet da SaraivaNet mudou minha vida! Agora consigo falar com meus netos 
                que moram longe todos os dias. O atendimento é muito carinhoso."
            />
            
            <TestimonialCard
              name="João Silva"
              age="45 anos"
              location="Bairro São José"
              initials="JS"
              testimonial="Trabalho com vendas online e a internet nunca me deixou na mão. Rápida e estável, 
                exatamente o que precisava para meu negócio crescer."
            />
            
            <TestimonialCard
              name="Ana Oliveira"
              age="72 anos"
              location="Vila Nova"
              initials="AO"
              testimonial="Os técnicos são muito educados e me ensinaram a usar o Wi-Fi. Agora assisto 
                meus programas favoritos no tablet sem travar."
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contato" className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-orange-100 text-orange-600 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Phone className="w-4 h-4 mr-2" />
              Fale Conosco
            </div>
            <h2 className="text-5xl font-bold text-gray-800 mb-4">Entre em Contato</h2>
            <p className="text-xl text-gray-600">
              Estamos aqui para ajudar! Entre em contato conosco e descubra como podemos 
              conectar você ao mundo digital.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center shadow-lg">
                  <Phone className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-800">Telefone</h3>
                  <p className="text-gray-600 text-lg">(86) 9 9999-9999</p>
                  <p className="text-sm text-gray-500">WhatsApp disponível</p>
                </div>
              </div>
            </Card>

            <Card className="p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center shadow-lg">
                  <Mail className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-800">Email</h3>
                  <p className="text-gray-600 text-lg">contato@saraivanet.com.br</p>
                  <p className="text-sm text-gray-500">Resposta em até 2 horas</p>
                </div>
              </div>
            </Card>

            <Card className="p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center shadow-lg">
                  <MapPin className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-800">Endereço</h3>
                  <p className="text-gray-600 text-lg">Centro de Eliseu Martins</p>
                  <p className="text-sm text-gray-500">Piauí, Brasil</p>
                </div>
              </div>
            </Card>

            <Card className="p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center shadow-lg">
                  <Clock className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-800">Horário</h3>
                  <p className="text-gray-600 text-lg">Segunda a Sábado</p>
                  <p className="text-sm text-gray-500">8h às 18h</p>
                </div>
              </div>
            </Card>
          </div>

          <div className="text-center space-x-6">
            <Button className="bg-green-500 hover:bg-green-600 text-white px-12 py-4 rounded-2xl text-lg font-bold shadow-lg transform hover:scale-105 transition-all duration-300">
              📱 WhatsApp
            </Button>
            <Button variant="outline" className="border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white px-12 py-4 rounded-2xl text-lg font-bold shadow-lg transform hover:scale-105 transition-all duration-300">
              📞 Ligar Agora
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-b from-gray-800 to-gray-900 text-white py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center shadow-lg">
                  <Wifi className="w-6 h-6 text-white" />
                </div>
                <span className="text-3xl font-bold bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">SaraivaNet</span>
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed text-lg">
                Conectando Eliseu Martins com o mundo há 5 anos. Internet de qualidade, 
                suporte especializado e compromisso com nossa comunidade.
              </p>
              <div className="flex items-center text-orange-400 bg-orange-900/20 px-4 py-2 rounded-full">
                <Heart className="w-5 h-5 mr-2" />
                <span className="font-medium">Feito com amor no Piauí</span>
              </div>
            </div>

            <div>
              <h4 className="text-2xl font-bold mb-6 text-orange-400">Links Rápidos</h4>
              <ul className="space-y-3">
                <li><a href="#inicio" className="text-gray-300 hover:text-orange-400 transition-colors text-lg">Início</a></li>
                <li><a href="#planos" className="text-gray-300 hover:text-orange-400 transition-colors text-lg">Planos</a></li>
                <li><a href="#cobertura" className="text-gray-300 hover:text-orange-400 transition-colors text-lg">Cobertura</a></li>
                <li><a href="#sobre" className="text-gray-300 hover:text-orange-400 transition-colors text-lg">Sobre Nós</a></li>
                <li><a href="#contato" className="text-gray-300 hover:text-orange-400 transition-colors text-lg">Contato</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-2xl font-bold mb-6 text-orange-400">Contato</h4>
              <ul className="space-y-4">
                <li className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-orange-400" />
                  <span className="text-lg">(86) 9 9999-9999</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-orange-400" />
                  <span className="text-lg">contato@saraivanet.com.br</span>
                </li>
                <li className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-orange-400" />
                  <span className="text-lg">Centro, Eliseu Martins - PI</span>
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
