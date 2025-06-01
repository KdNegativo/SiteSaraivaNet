
import { Phone, Mail, MapPin, Clock, Wifi, Tv, Music, Headphones, Smartphone, Zap, Users, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Floating WhatsApp Button */}
      <FloatingWhatsApp />
      
      {/* Header */}
      <header className="bg-white shadow-sm px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-4">
            {/* Logo */}
            <img 
              src="/lovable-uploads/935d3409-f4aa-423b-937b-2d4df265cbed.png" 
              alt="SaraivaNet Logo" 
              className="h-12 w-auto"
            />
            <div>
              <span className="text-2xl font-bold text-orange-500">SaraivaNet</span>
              <div className="text-sm text-gray-500">Eliseu Martins - PI</div>
            </div>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-600 hover:text-orange-500">Início</a>
            <a href="#" className="text-gray-600 hover:text-orange-500">Serviços</a>
            <a href="#" className="text-gray-600 hover:text-orange-500">Sobre</a>
            <a href="#" className="text-gray-600 hover:text-orange-500">Contato</a>
          </nav>

          <div className="flex items-center space-x-2 text-orange-500">
            <Phone className="w-4 h-4" />
            <span className="font-medium">(86) 9 9999-9999</span>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-600 via-red-600 to-red-700 text-white px-6 py-20">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center bg-orange-500/20 rounded-full px-4 py-2 mb-6">
              <span className="text-sm">⭐ Internet + SaraivaTV</span>
            </div>
            
            <h1 className="text-5xl font-bold mb-6">
              Internet<br />
              <span className="text-orange-300">+ SaraivaTV</span>
            </h1>
            
            <p className="text-xl mb-8 text-gray-100">
              Conecte-se com nossa internet de fibra óptica e ganhe acesso ao app SaraivaTV: assista seus canais favoritos direto no celular.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="bg-orange-500/20 rounded-lg p-4 flex items-center space-x-3">
                <Wifi className="w-6 h-6 text-orange-300" />
                <span>Internet Ultra Rápida</span>
              </div>
              <div className="bg-orange-500/20 rounded-lg p-4 flex items-center space-x-3">
                <Tv className="w-6 h-6 text-orange-300" />
                <span>Canais de TV</span>
              </div>
              <div className="bg-orange-500/20 rounded-lg p-4 flex items-center space-x-3">
                <Music className="w-6 h-6 text-orange-300" />
                <span>Músicas Online</span>
              </div>
              <div className="bg-orange-500/20 rounded-lg p-4 flex items-center space-x-3">
                <Headphones className="w-6 h-6 text-orange-300" />
                <span>Suporte 24h</span>
              </div>
            </div>

            <div className="flex space-x-4 mb-8">
              <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-medium">
                Contratar Agora →
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-orange-600 px-8 py-3 rounded-lg">
                Saiba Mais
              </Button>
            </div>

            <div className="flex space-x-8 text-sm">
              <div>
                <div className="font-bold text-2xl">500+</div>
                <div className="text-gray-300">Clientes</div>
              </div>
              <div>
                <div className="font-bold text-2xl">99,9%</div>
                <div className="text-gray-300">Uptime</div>
              </div>
              <div>
                <div className="font-bold text-2xl">20+</div>
                <div className="text-gray-300">Canais</div>
              </div>
              <div>
                <div className="font-bold text-2xl">24h</div>
                <div className="text-gray-300">Online</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="text-center mb-6">
                <Smartphone className="w-12 h-12 text-orange-300 mx-auto mb-4" />
                <h3 className="text-xl font-bold">SaraivaTV</h3>
                <p className="text-gray-300">Seus canais favoritos no celular</p>
              </div>
              
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-orange-500/20 rounded-lg p-4 text-center">
                  <Tv className="w-6 h-6 mx-auto mb-2" />
                  <span className="text-sm">Canais de TV</span>
                </div>
                <div className="bg-orange-500/20 rounded-lg p-4 text-center">
                  <Music className="w-6 h-6 mx-auto mb-2" />
                  <span className="text-sm">Rádios</span>
                </div>
                <div className="bg-orange-500/20 rounded-lg p-4 text-center">
                  <Zap className="w-6 h-6 mx-auto mb-2" />
                  <span className="text-sm">Ao Vivo</span>
                </div>
                <div className="bg-orange-500/20 rounded-lg p-4 text-center">
                  <Smartphone className="w-6 h-6 mx-auto mb-2" />
                  <span className="text-sm">No Celular</span>
                </div>
              </div>
              
              <p className="text-center text-sm text-gray-300 mb-4">
                Disponível para Android e iOS
              </p>
              
              <div className="flex justify-center space-x-4">
                <div className="bg-orange-500/20 rounded-lg p-2">
                  <Smartphone className="w-6 h-6" />
                </div>
                <div className="bg-orange-500/20 rounded-lg p-2">
                  <Tv className="w-6 h-6" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Plans Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Escolha Seu Plano</h2>
            <p className="text-xl text-gray-600 mb-6">
              Todos os planos incluem o app <span className="text-orange-500 font-semibold">SaraivaTV gratuito</span> para assistir TV no celular.
            </p>
            <div className="inline-flex items-center bg-orange-100 text-orange-600 px-4 py-2 rounded-full">
              🎉 3 meses com desconto especial!
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Basic Plan */}
            <Card className="relative">
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Wifi className="w-8 h-8 text-orange-500" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800">Plano Básico</h3>
                  <div className="text-3xl font-bold text-orange-500 mt-2">100 MB</div>
                  <div className="text-sm text-gray-500 line-through">R$ 119,90</div>
                  <div className="text-4xl font-bold text-gray-800 mt-2">
                    R$ 89,90<span className="text-base font-normal">/mês</span>
                  </div>
                  <div className="text-sm text-gray-600 mt-1">Ideal para uso básico</div>
                </div>

                <ul className="space-y-3 mb-8">
                  <li className="flex items-center space-x-3">
                    <div className="w-5 h-5 bg-orange-500 rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <span>Internet 100MB</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-5 h-5 bg-orange-500 rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <span>App SaraivaTV incluído</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-5 h-5 bg-orange-500 rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <span>Canais de TV aberta</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-5 h-5 bg-orange-500 rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <span>Rádios locais</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-5 h-5 bg-orange-500 rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <span>Wi-Fi grátis</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-5 h-5 bg-orange-500 rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <span>Suporte 24h</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-5 h-5 bg-orange-500 rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <span>Instalação gratuita</span>
                  </li>
                </ul>

                <Button variant="outline" className="w-full border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white">
                  Contratar Agora →
                </Button>
              </CardContent>
            </Card>

            {/* Family Plan - Most Popular */}
            <Card className="relative border-2 border-orange-500 transform scale-105">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <div className="bg-orange-500 text-white px-6 py-2 rounded-full text-sm font-medium">
                  ⭐ MAIS POPULAR
                </div>
              </div>
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800">Plano Família</h3>
                  <div className="text-3xl font-bold text-orange-500 mt-2">300 MB</div>
                  <div className="text-sm text-gray-500 line-through">R$ 169,90</div>
                  <div className="text-4xl font-bold text-gray-800 mt-2">
                    R$ 129,90<span className="text-base font-normal">/mês</span>
                  </div>
                  <div className="text-sm text-gray-600 mt-1">Perfeito para toda família</div>
                </div>

                <ul className="space-y-3 mb-8">
                  <li className="flex items-center space-x-3">
                    <div className="w-5 h-5 bg-orange-500 rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <span>Internet 300MB</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-5 h-5 bg-orange-500 rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <span>App SaraivaTV Premium</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-5 h-5 bg-orange-500 rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <span>Todos os canais disponíveis</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-5 h-5 bg-orange-500 rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <span>Rádios nacionais</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-5 h-5 bg-orange-500 rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <span>Wi-Fi potente</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-5 h-5 bg-orange-500 rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <span>Suporte prioritário</span>
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
                    <span>Múltiplos dispositivos</span>
                  </li>
                </ul>

                <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white">
                  Contratar Agora →
                </Button>
              </CardContent>
            </Card>

            {/* Business Plan */}
            <Card className="relative">
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8 text-orange-500" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800">Plano Empresarial</h3>
                  <div className="text-3xl font-bold text-orange-500 mt-2">500 MB</div>
                  <div className="text-sm text-gray-500 line-through">R$ 259,90</div>
                  <div className="text-4xl font-bold text-gray-800 mt-2">
                    R$ 199,90<span className="text-base font-normal">/mês</span>
                  </div>
                  <div className="text-sm text-gray-600 mt-1">Solução completa para empresas</div>
                </div>

                <ul className="space-y-3 mb-8">
                  <li className="flex items-center space-x-3">
                    <div className="w-5 h-5 bg-orange-500 rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <span>Internet 500MB</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-5 h-5 bg-orange-500 rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <span>App SaraivaTV Empresarial</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-5 h-5 bg-orange-500 rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <span>Canais comerciais</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-5 h-5 bg-orange-500 rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <span>IP fixo</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-5 h-5 bg-orange-500 rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <span>Suporte técnico dedicado</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-5 h-5 bg-orange-500 rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <span>Prioridade na rede</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-5 h-5 bg-orange-500 rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <span>Relatórios de uso</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-5 h-5 bg-orange-500 rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <span>Backup automático</span>
                  </li>
                </ul>

                <Button variant="outline" className="w-full border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white">
                  Contratar Agora →
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* SaraivaTV Features Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Conheça o <span className="text-orange-500">SaraivaTV</span>
            </h2>
            <p className="text-xl text-gray-600">
              App gratuito que vem junto com sua internet. Assista TV direto no celular!
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <Card className="text-center p-8 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Tv className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Canais de TV</h3>
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

            <Card className="text-center p-8 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Music className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Rádios Online</h3>
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

            <Card className="text-center p-8 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Smartphone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">No Seu Celular</h3>
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

            <Card className="text-center p-8 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Transmissão Ao Vivo</h3>
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

          <div className="bg-gradient-to-r from-orange-500 to-red-600 rounded-3xl p-12 text-center text-white">
            <h3 className="text-3xl font-bold mb-4">Pronto para ter Internet + SaraivaTV?</h3>
            <p className="text-xl mb-8 opacity-90">
              Não perca tempo! Aproveite nossa oferta especial e ganhe o app SaraivaTV grátis.
            </p>
            <Button className="bg-white text-orange-600 hover:bg-gray-100 px-8 py-3 text-lg font-medium rounded-lg">
              Quero Contratar Agora →
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-orange-500 to-red-600">
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
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-xl font-semibold mb-2">Famílias Conectadas</div>
              <div className="text-white/80">
                Lares piauenses com internet de qualidade
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-white">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <div className="text-4xl font-bold mb-2">15</div>
              <div className="text-xl font-semibold mb-2">Bairros Atendidos</div>
              <div className="text-white/80">
                Cobertura em toda Eliseu Martins
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-white">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <div className="text-4xl font-bold mb-2">99,9%</div>
              <div className="text-xl font-semibold mb-2">Uptime Garantido</div>
              <div className="text-white/80">
                Conexão estável e confiável
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-white">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <div className="text-4xl font-bold mb-2">98%</div>
              <div className="text-xl font-semibold mb-2">Satisfação</div>
              <div className="text-white/80">
                Clientes recomendam nossos serviços
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
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
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">O Que Nossos Clientes Dizem</h2>
            <p className="text-xl text-gray-600">
              Histórias reais de pessoas que confiam na SaraivaNet para se conectar com o mundo
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                  MS
                </div>
                <div className="flex text-orange-500">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-xl">⭐</span>
                  ))}
                </div>
              </div>
              <p className="text-gray-600 mb-6 italic">
                "A internet da SaraivaNet mudou minha vida! Agora consigo falar com meus netos 
                que moram longe todos os dias. O atendimento é muito carinhoso."
              </p>
              <div>
                <div className="font-semibold text-gray-800">Maria Santos</div>
                <div className="text-sm text-orange-500">68 anos</div>
                <div className="text-sm text-gray-500">Centro de Eliseu Martins</div>
              </div>
            </Card>

            <Card className="p-8">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                  JS
                </div>
                <div className="flex text-orange-500">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-xl">⭐</span>
                  ))}
                </div>
              </div>
              <p className="text-gray-600 mb-6 italic">
                "Trabalho com vendas online e a internet nunca me deixou na mão. Rápida e estável, 
                exatamente o que precisava para meu negócio crescer."
              </p>
              <div>
                <div className="font-semibold text-gray-800">João Silva</div>
                <div className="text-sm text-orange-500">45 anos</div>
                <div className="text-sm text-gray-500">Bairro São José</div>
              </div>
            </Card>

            <Card className="p-8">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                  AO
                </div>
                <div className="flex text-orange-500">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-xl">⭐</span>
                  ))}
                </div>
              </div>
              <p className="text-gray-600 mb-6 italic">
                "Os técnicos são muito educados e me ensinaram a usar o Wi-Fi. Agora assisto 
                meus programas favoritos no tablet sem travar."
              </p>
              <div>
                <div className="font-semibold text-gray-800">Ana Oliveira</div>
                <div className="text-sm text-orange-500">72 anos</div>
                <div className="text-sm text-gray-500">Vila Nova</div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
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
      <footer className="bg-gray-800 text-white py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <img 
                  src="/lovable-uploads/935d3409-f4aa-423b-937b-2d4df265cbed.png" 
                  alt="SaraivaNet Logo" 
                  className="h-8 w-auto"
                />
                <span className="text-2xl font-bold text-orange-500">SaraivaNet</span>
              </div>
              <p className="text-gray-300 mb-4">
                Conectando Eliseu Martins com o mundo há 5 anos. Internet de qualidade, 
                suporte especializado e compromisso com nossa comunidade.
              </p>
              <div className="flex items-center text-orange-500">
                <Heart className="w-5 h-5 mr-2" />
                <span>Feito com amor no Piauí</span>
              </div>
            </div>

            <div>
              <h4 className="text-xl font-semibold mb-4 text-orange-500">Links Rápidos</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-300 hover:text-orange-500">Início</a></li>
                <li><a href="#" className="text-gray-300 hover:text-orange-500">Planos</a></li>
                <li><a href="#" className="text-gray-300 hover:text-orange-500">Sobre Nós</a></li>
                <li><a href="#" className="text-gray-300 hover:text-orange-500">Contato</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-xl font-semibold mb-4 text-orange-500">Contato</h4>
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

          <div className="border-t border-gray-700 mt-8 pt-8 text-center">
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
