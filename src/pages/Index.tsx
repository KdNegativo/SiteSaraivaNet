import { Phone, Mail, MapPin, Clock, Wifi, Tv, Music, Headphones, Smartphone, Zap, Users, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import CoverageMap from "@/components/CoverageMap";
import StatsCounter from "@/components/StatsCounter";
import TestimonialCard from "@/components/TestimonialCard";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Floating WhatsApp Button */}
      <FloatingWhatsApp />
      
      {/* Header */}
      <header className="bg-white shadow-sm px-6 py-4 border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div>
              <span className="text-3xl font-bold bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">SaraivaNet</span>
              <div className="text-sm text-gray-500 font-medium">Eliseu Martins - PI</div>
            </div>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#inicio" className="text-gray-600 hover:text-orange-500 transition-colors font-medium">Início</a>
            <a href="#planos" className="text-gray-600 hover:text-orange-500 transition-colors font-medium">Planos</a>
            <a href="#cobertura" className="text-gray-600 hover:text-orange-500 transition-colors font-medium">Cobertura</a>
            <a href="#sobre" className="text-gray-600 hover:text-orange-500 transition-colors font-medium">Sobre</a>
            <a href="#contato" className="text-gray-600 hover:text-orange-500 transition-colors font-medium">Contato</a>
          </nav>

          <div className="flex items-center space-x-2 text-orange-500 bg-orange-50 px-4 py-2 rounded-full hover:bg-orange-100 transition-colors cursor-pointer">
            <Phone className="w-4 h-4" />
            <span className="font-medium">(86) 9 9999-9999</span>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="inicio" className="bg-gradient-to-br from-orange-500 via-red-500 to-red-600 text-white px-6 py-24 relative overflow-hidden">
        {/* Background decorations */}
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute top-20 right-20 w-72 h-72 bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-orange-300/10 rounded-full blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">
          <div>
            <div className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-6 py-3 mb-8 border border-white/30 animate-pulse">
              <span className="text-sm font-medium">⭐ Internet + SaraivaTV Grátis</span>
            </div>
            
            <h1 className="text-6xl font-bold mb-6 leading-tight">
              Internet<br />
              <span className="text-orange-200">+ SaraivaTV</span>
            </h1>
            
            <p className="text-xl mb-10 text-gray-100 leading-relaxed">
              Conecte-se com nossa internet de fibra óptica ultrarrápida e ganhe acesso completo ao app SaraivaTV: 
              assista seus canais favoritos direto no celular, onde estiver.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-10">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 flex items-center space-x-4 border border-white/20">
                <div className="w-12 h-12 bg-orange-400 rounded-full flex items-center justify-center">
                  <Wifi className="w-6 h-6 text-white" />
                </div>
                <span className="font-medium">Internet Ultra Rápida</span>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 flex items-center space-x-4 border border-white/20">
                <div className="w-12 h-12 bg-orange-400 rounded-full flex items-center justify-center">
                  <Tv className="w-6 h-6 text-white" />
                </div>
                <span className="font-medium">Canais de TV</span>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 flex items-center space-x-4 border border-white/20">
                <div className="w-12 h-12 bg-orange-400 rounded-full flex items-center justify-center">
                  <Music className="w-6 h-6 text-white" />
                </div>
                <span className="font-medium">Rádios Online</span>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 flex items-center space-x-4 border border-white/20">
                <div className="w-12 h-12 bg-orange-400 rounded-full flex items-center justify-center">
                  <Headphones className="w-6 h-6 text-white" />
                </div>
                <span className="font-medium">Suporte 24h</span>
              </div>
            </div>

            <div className="flex space-x-6 mb-12">
              <Button className="bg-white text-orange-600 hover:bg-gray-100 px-10 py-4 rounded-xl font-semibold text-lg shadow-lg transform hover:scale-105 transition-all">
                Contratar Agora →
              </Button>
              <Button variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-orange-600 px-10 py-4 rounded-xl font-semibold text-lg">
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

          <div className="relative">
            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-10 border border-white/20 shadow-2xl">
              <div className="text-center mb-8">
                <div className="w-20 h-20 bg-gradient-to-br from-orange-400 to-red-400 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <Smartphone className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-2">SaraivaTV</h3>
                <p className="text-orange-200">Seus canais favoritos no celular</p>
              </div>
              
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-white/10 rounded-xl p-6 text-center border border-white/20">
                  <Tv className="w-8 h-8 mx-auto mb-3 text-orange-300" />
                  <span className="text-sm font-medium">Canais de TV</span>
                </div>
                <div className="bg-white/10 rounded-xl p-6 text-center border border-white/20">
                  <Music className="w-8 h-8 mx-auto mb-3 text-orange-300" />
                  <span className="text-sm font-medium">Rádios</span>
                </div>
                <div className="bg-white/10 rounded-xl p-6 text-center border border-white/20">
                  <Zap className="w-8 h-8 mx-auto mb-3 text-orange-300" />
                  <span className="text-sm font-medium">Ao Vivo</span>
                </div>
                <div className="bg-white/10 rounded-xl p-6 text-center border border-white/20">
                  <Smartphone className="w-8 h-8 mx-auto mb-3 text-orange-300" />
                  <span className="text-sm font-medium">No Celular</span>
                </div>
              </div>
              
              <p className="text-center text-sm text-orange-200 mb-6">
                Disponível para Android e iOS
              </p>
              
              <div className="flex justify-center space-x-4">
                <div className="bg-white/10 rounded-xl p-3 border border-white/20">
                  <Smartphone className="w-8 h-8 text-orange-300" />
                </div>
                <div className="bg-white/10 rounded-xl p-3 border border-white/20">
                  <Tv className="w-8 h-8 text-orange-300" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Plans Section - Single Plan */}
      <section id="planos" className="py-24 px-6 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-800 mb-6">Nosso Plano Completo</h2>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Um plano que atende todas as suas necessidades com o app <span className="text-orange-500 font-semibold">SaraivaTV gratuito</span> incluído.
            </p>
            <div className="inline-flex items-center bg-gradient-to-r from-orange-100 to-red-100 text-orange-600 px-6 py-3 rounded-full font-medium">
              🎉 3 meses com desconto especial!
            </div>
          </div>

          <div className="flex justify-center">
            {/* Single Plan Card */}
            <Card className="relative border-4 border-orange-500 shadow-2xl max-w-lg w-full">
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-3 rounded-full text-sm font-bold shadow-lg">
                  ⭐ PLANO COMPLETO
                </div>
              </div>
              <CardContent className="p-8">
                <div className="text-center mb-8">
                  <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                    <Users className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">Internet + SaraivaTV</h3>
                  <div className="text-4xl font-bold text-orange-500 mt-4">300 MB</div>
                  <div className="text-sm text-gray-500 line-through mt-2">R$ 169,90</div>
                  <div className="text-5xl font-bold text-gray-800 mt-3">
                    R$ 129,90<span className="text-lg font-normal">/mês</span>
                  </div>
                  <div className="text-sm text-gray-600 mt-2">Perfeito para toda família</div>
                </div>

                <ul className="space-y-3 mb-8">
                  <li className="flex items-center space-x-3">
                    <div className="w-5 h-5 bg-orange-500 rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <span>Internet 300MB fibra óptica</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-5 h-5 bg-orange-500 rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <span>App SaraivaTV Premium incluído</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-5 h-5 bg-orange-500 rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <span>Todos os canais de TV disponíveis</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-5 h-5 bg-orange-500 rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <span>Rádios nacionais e locais</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-5 h-5 bg-orange-500 rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <span>Wi-Fi potente e estável</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-5 h-5 bg-orange-500 rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <span>Suporte técnico 24h</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-5 h-5 bg-orange-500 rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <span>Instalação gratuita</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-5 h-5 bg-orange-500 rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <span>Velocidade garantida</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-5 h-5 bg-orange-500 rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <span>Atendimento em toda região</span>
                  </li>
                </ul>

                <Button className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-semibold py-4 text-lg rounded-xl shadow-lg transition-all">
                  Contratar Agora →
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Coverage Map Section */}
      <section id="cobertura" className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-800 mb-6">
              Nossa <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">Cobertura</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Levamos internet de qualidade para toda Eliseu Martins e região, incluindo áreas rurais e do interior.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-800 mb-6">Mapa de Cobertura</h3>
              <p className="text-gray-600 mb-6 text-lg">
                Clique nos pontos do mapa para ver detalhes da cobertura em cada região. 
                Nossa rede de fibra óptica atende todo Eliseu Martins e zona rural!
              </p>
              
              <CoverageMap />
              
              {/* Legenda */}
              <div className="mt-6 grid grid-cols-2 gap-4">
                <div className="flex items-center space-x-3">
                  <div className="w-4 h-4 bg-orange-500 rounded-full border-2 border-white shadow-md"></div>
                  <span className="text-sm font-medium text-gray-700">Centro</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-4 h-4 bg-green-500 rounded-full border-2 border-white shadow-md"></div>
                  <span className="text-sm font-medium text-gray-700">Bairros</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-4 h-4 bg-blue-500 rounded-full border-2 border-white shadow-md"></div>
                  <span className="text-sm font-medium text-gray-700">Interior</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-4 h-4 bg-purple-500 rounded-full border-2 border-white shadow-md"></div>
                  <span className="text-sm font-medium text-gray-700">Rural</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-gray-800 mb-6">Internet em Toda Região</h3>
              <p className="text-gray-600 mb-6 text-lg">
                A SaraivaNet chegou onde outros não conseguiram! Levamos nossa internet de fibra óptica 
                para o centro da cidade, todos os bairros e também para o interior e zona rural de Eliseu Martins.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-4 p-4 bg-orange-50 rounded-xl">
                  <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Centro e Bairros</h4>
                    <p className="text-gray-600 text-sm">Cobertura completa em toda área urbana</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4 p-4 bg-green-50 rounded-xl">
                  <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Interior e Zona Rural</h4>
                    <p className="text-gray-600 text-sm">Levamos internet até as fazendas e sítios</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4 p-4 bg-blue-50 rounded-xl">
                  <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                    <Zap className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Mesma Qualidade</h4>
                    <p className="text-gray-600 text-sm">Internet rápida e estável em toda região</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl p-6 text-white">
                <h4 className="text-xl font-bold mb-3">Sua Região Não Está na Lista?</h4>
                <p className="mb-4 opacity-90">
                  Entre em contato conosco! Estamos sempre expandindo nossa cobertura.
                </p>
                <Button className="bg-white text-orange-500 hover:bg-gray-100 font-semibold px-6 py-2 rounded-lg">
                  Consultar Disponibilidade
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SaraivaTV Features Section */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-800 mb-6">
              Conheça o <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">SaraivaTV</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              App gratuito que vem junto com sua internet. Assista TV direto no celular com qualidade HD!
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 mb-16">
            <Card className="text-center p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-0 bg-gradient-to-b from-orange-50 to-white">
              <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-red-500 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Tv className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Canais de TV</h3>
              <p className="text-gray-600 mb-6">
                Assista os mesmos canais da sua TV direto no celular
              </p>
              <div className="space-y-2">
                <span className="inline-block bg-orange-100 text-orange-600 px-3 py-1 rounded-full text-sm">TV Aberta</span>
                <span className="inline-block bg-orange-100 text-orange-600 px-3 py-1 rounded-full text-sm ml-2">Canais Locais</span>
                <div className="mt-2">
                  <span className="inline-block bg-orange-100 text-orange-600 px-3 py-1 rounded-full text-sm">Notícias</span>
                  <span className="inline-block bg-orange-100 text-orange-600 px-3 py-1 rounded-full text-sm ml-2">Esportes</span>
                </div>
              </div>
            </Card>

            <Card className="text-center p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-0 bg-gradient-to-b from-orange-50 to-white">
              <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-red-500 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Music className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Rádios Online</h3>
              <p className="text-gray-600 mb-6">
                Escute suas rádios favoritas onde estiver
              </p>
              <div className="space-y-2">
                <span className="inline-block bg-orange-100 text-orange-600 px-3 py-1 rounded-full text-sm">Rádios Locais</span>
                <span className="inline-block bg-orange-100 text-orange-600 px-3 py-1 rounded-full text-sm ml-2">Música</span>
                <div className="mt-2">
                  <span className="inline-block bg-orange-100 text-orange-600 px-3 py-1 rounded-full text-sm">Notícias</span>
                  <span className="inline-block bg-orange-100 text-orange-600 px-3 py-1 rounded-full text-sm ml-2">Esportes</span>
                </div>
              </div>
            </Card>

            <Card className="text-center p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-0 bg-gradient-to-b from-orange-50 to-white">
              <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-red-500 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Smartphone className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">No Seu Celular</h3>
              <p className="text-gray-600 mb-6">
                App fácil de usar para Android e iOS
              </p>
              <div className="space-y-2">
                <span className="inline-block bg-orange-100 text-orange-600 px-3 py-1 rounded-full text-sm">Android</span>
                <span className="inline-block bg-orange-100 text-orange-600 px-3 py-1 rounded-full text-sm ml-2">iOS</span>
                <div className="mt-2">
                  <span className="inline-block bg-orange-100 text-orange-600 px-3 py-1 rounded-full text-sm">Fácil de Usar</span>
                  <span className="inline-block bg-orange-100 text-orange-600 px-3 py-1 rounded-full text-sm ml-2">Gratuito</span>
                </div>
              </div>
            </Card>

            <Card className="text-center p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-0 bg-gradient-to-b from-orange-50 to-white">
              <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-red-500 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Zap className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Transmissão Ao Vivo</h3>
              <p className="text-gray-600 mb-6">
                Tudo que passa na TV, passa no app em tempo real
              </p>
              <div className="space-y-2">
                <span className="inline-block bg-orange-100 text-orange-600 px-3 py-1 rounded-full text-sm">Ao Vivo</span>
                <span className="inline-block bg-orange-100 text-orange-600 px-3 py-1 rounded-full text-sm ml-2">Tempo Real</span>
                <div className="mt-2">
                  <span className="inline-block bg-orange-100 text-orange-600 px-3 py-1 rounded-full text-sm">Sem Atraso</span>
                  <span className="inline-block bg-orange-100 text-orange-600 px-3 py-1 rounded-full text-sm ml-2">Qualidade HD</span>
                </div>
              </div>
            </Card>
          </div>

          <div className="bg-gradient-to-r from-orange-500 via-red-500 to-red-600 rounded-3xl p-16 text-center text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-black/10"></div>
            <div className="relative z-10">
              <h3 className="text-4xl font-bold mb-6">Pronto para ter Internet + SaraivaTV?</h3>
              <p className="text-xl mb-10 opacity-90 max-w-2xl mx-auto">
                Não perca tempo! Aproveite nossa oferta especial e ganhe o app SaraivaTV grátis.
              </p>
              <Button className="bg-white text-orange-600 hover:bg-gray-100 px-12 py-4 text-xl font-semibold rounded-xl shadow-lg transform hover:scale-105 transition-all">
                Quero Contratar Agora →
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 px-6 bg-gradient-to-r from-orange-500 to-red-600">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Números Que Falam Por Si</h2>
          <p className="text-xl text-white/90 mb-12">
            Resultados conquistados com dedicação e compromisso com Eliseu Martins
          </p>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-white">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <StatsCounter endValue={500} label="Famílias Conectadas" suffix="+" />
              <div className="text-white/80 mt-2">
                Lares piauenses com internet de qualidade
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-white">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <StatsCounter endValue={15} label="Bairros Atendidos" />
              <div className="text-white/80 mt-2">
                Cobertura em toda Eliseu Martins
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-white">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <StatsCounter endValue={99.9} label="Uptime Garantido" suffix="%" />
              <div className="text-white/80 mt-2">
                Conexão estável e confiável
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-white">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <StatsCounter endValue={98} label="Satisfação" suffix="%" />
              <div className="text-white/80 mt-2">
                Clientes recomendam nossos serviços
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre" className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Sobre a SaraivaNet</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Há 5 anos conectando Eliseu Martins com o mundo digital. Somos uma empresa piauense 
              comprometida em levar internet de qualidade para todos os lares e empresas da nossa cidade.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Nossa História</h3>
              <p className="text-gray-600 mb-6">
                Fundada em 2019 por empreendedores locais, a SaraivaNet nasceu do sonho 
                de democratizar o acesso à internet de qualidade em Eliseu Martins.
              </p>
              <p className="text-gray-600 mb-6">
                Começamos atendendo apenas algumas famílias e hoje somos referência em 
                conectividade na região, sempre mantendo nosso compromisso com a 
                excelência no atendimento e tecnologia de ponta.
              </p>
              <p className="text-gray-600 mb-8">
                Nossa missão é simples: conectar pessoas, aproximar famílias e impulsionar o 
                desenvolvimento digital da nossa querida cidade piauense.
              </p>

              <div className="grid grid-cols-2 gap-8">
                <div className="text-center">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Users className="w-6 h-6 text-orange-500" />
                  </div>
                  <div className="text-2xl font-bold text-orange-500">500+</div>
                  <div className="text-sm text-gray-600">Clientes Ativos</div>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <MapPin className="w-6 h-6 text-orange-500" />
                  </div>
                  <div className="text-2xl font-bold text-orange-500">100%</div>
                  <div className="text-sm text-gray-600">Cobertura Local</div>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Users className="w-6 h-6 text-orange-500" />
                  </div>
                  <div className="text-2xl font-bold text-orange-500">5</div>
                  <div className="text-sm text-gray-600">Anos de Experiência</div>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Heart className="w-6 h-6 text-orange-500" />
                  </div>
                  <div className="text-2xl font-bold text-orange-500">24h</div>
                  <div className="text-sm text-gray-600">Suporte Local</div>
                </div>
              </div>
            </div>

            <div className="bg-orange-50 rounded-3xl p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
                Tecnologia que Conecta Corações
              </h3>
              <p className="text-gray-600 text-center mb-6">
                Na SaraivaNet, acreditamos que internet não é apenas tecnologia, é conexão humana. É o avô vendo 
                o neto pela primeira vez por videochamada, é o estudante acessando conhecimento, e o 
                empreendedor expandindo seus negócios. Somos parte da sua história.
              </p>
              <div className="text-center">
                <div className="inline-flex items-center text-orange-600 font-medium">
                  <Heart className="w-5 h-5 mr-2" />
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
            <h2 className="text-4xl font-bold text-gray-800 mb-4">O Que Nossos Clientes Dizem</h2>
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
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Entre em Contato</h2>
            <p className="text-xl text-gray-600">
              Estamos aqui para ajudar! Entre em contato conosco e descubra como podemos 
              conectar você ao mundo digital.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="p-8">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                  <Phone className="w-6 h-6 text-orange-500" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">Telefone</h3>
                  <p className="text-gray-600">(86) 9 9999-9999</p>
                  <p className="text-sm text-gray-500">WhatsApp disponível</p>
                </div>
              </div>
            </Card>

            <Card className="p-8">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                  <Mail className="w-6 h-6 text-orange-500" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">Email</h3>
                  <p className="text-gray-600">contato@saraivanet.com.br</p>
                  <p className="text-sm text-gray-500">Resposta em até 2 horas</p>
                </div>
              </div>
            </Card>

            <Card className="p-8">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-orange-500" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">Endereço</h3>
                  <p className="text-gray-600">Centro de Eliseu Martins</p>
                  <p className="text-sm text-gray-500">Piauí, Brasil</p>
                </div>
              </div>
            </Card>

            <Card className="p-8">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                  <Clock className="w-6 h-6 text-orange-500" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">Horário</h3>
                  <p className="text-gray-600">Segunda a Sábado</p>
                  <p className="text-sm text-gray-500">8h às 18h</p>
                </div>
              </div>
            </Card>
          </div>

          <div className="text-center space-x-4">
            <Button className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-lg">
              📱 WhatsApp
            </Button>
            <Button variant="outline" className="border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white px-8 py-3 rounded-lg">
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
                <span className="text-3xl font-bold bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">SaraivaNet</span>
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Conectando Eliseu Martins com o mundo há 5 anos. Internet de qualidade, 
                suporte especializado e compromisso com nossa comunidade.
              </p>
              <div className="flex items-center text-orange-400">
                <Heart className="w-5 h-5 mr-2" />
                <span>Feito com amor no Piauí</span>
              </div>
            </div>

            <div>
              <h4 className="text-xl font-semibold mb-4 text-orange-400">Links Rápidos</h4>
              <ul className="space-y-2">
                <li><a href="#inicio" className="text-gray-300 hover:text-orange-500">Início</a></li>
                <li><a href="#planos" className="text-gray-300 hover:text-orange-500">Planos</a></li>
                <li><a href="#cobertura" className="text-gray-300 hover:text-orange-500">Cobertura</a></li>
                <li><a href="#sobre" className="text-gray-300 hover:text-orange-500">Sobre Nós</a></li>
                <li><a href="#contato" className="text-gray-300 hover:text-orange-500">Contato</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-xl font-semibold mb-4 text-orange-400">Contato</h4>
              <ul className="space-y-2">
                <li className="flex items-center space-x-2">
                  <Phone className="w-4 h-4" />
                  <span>(86) 9 9999-9999</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Mail className="w-4 h-4" />
                  <span>contato@saraivanet.com.br</span>
                </li>
                <li className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4" />
                  <span>Centro, Eliseu Martins - PI</span>
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
  );
};

export default Index;
