import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, Wifi, Zap, Phone, MessageCircle, MapPin } from "lucide-react";
import InteractiveMap from "@/components/InteractiveMap";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-blue-50">
      {/* Header */}
      <header className="border-b sticky top-0 bg-white/80 backdrop-blur-md z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <span className="text-2xl font-bold text-orange-600">SaraivaNet</span>
            </div>
            <nav className="hidden md:flex space-x-10">
              <a href="#" className="text-base font-medium text-gray-500 hover:text-gray-900">Planos</a>
              <a href="#" className="text-base font-medium text-gray-500 hover:text-gray-900">Cobertura</a>
              <a href="#" className="text-base font-medium text-gray-500 hover:text-gray-900">Sobre</a>
              <a href="#" className="text-base font-medium text-gray-500 hover:text-gray-900">Contato</a>
            </nav>
            <div className="flex items-center space-x-4">
              <a href="#" className="text-sm font-medium text-orange-600 hover:text-orange-500">
                Área do Cliente
              </a>
              <Button>Assine Já</Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                Internet de <span className="text-orange-600">Fibra Óptica</span> para o Sul do Piauí
              </h1>
              <p className="mt-6 text-lg text-gray-600">
                Conectamos você ao mundo com a melhor internet da região. 
                Velocidade, estabilidade e suporte técnico de qualidade.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-orange-600 hover:bg-orange-700">
                  Ver Planos <ArrowRight className="ml-2" />
                </Button>
                <Button size="lg" variant="outline" className="border-orange-600 text-orange-600 hover:bg-orange-50">
                  Verificar Cobertura
                </Button>
              </div>
              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="text-gray-600">Sem fidelidade</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="text-gray-600">Instalação grátis</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="text-gray-600">Suporte 24/7</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="text-gray-600">Wi-Fi grátis</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -top-8 -left-8 w-64 h-64 bg-orange-200 rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-blob"></div>
              <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-blob animation-delay-2000"></div>
              <div className="absolute inset-0 w-64 h-64 mx-auto my-auto bg-green-200 rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-blob animation-delay-4000"></div>
              <div className="relative">
                <img 
                  src="/images/fiber-optic.jpg" 
                  alt="Fibra óptica SaraivaNet" 
                  className="rounded-2xl shadow-2xl"
                  onError={(e) => {
                    e.currentTarget.src = "https://placehold.co/600x400/orange/white?text=Fibra+%C3%93ptica+SaraivaNet";
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-gradient-to-b from-white to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Por que escolher a SaraivaNet?
            </h2>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
              Oferecemos a melhor experiência de internet para sua casa ou empresa
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-14 h-14 bg-orange-100 rounded-full flex items-center justify-center mb-6">
                <Zap className="h-7 w-7 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Velocidade Real</h3>
              <p className="text-gray-600">
                Entregamos 100% da velocidade contratada, com baixa latência e alta estabilidade para todas suas atividades online.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-14 h-14 bg-orange-100 rounded-full flex items-center justify-center mb-6">
                <Wifi className="h-7 w-7 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Fibra Óptica</h3>
              <p className="text-gray-600">
                Tecnologia de ponta com fibra óptica até sua casa, garantindo a melhor qualidade de conexão disponível.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-14 h-14 bg-orange-100 rounded-full flex items-center justify-center mb-6">
                <Phone className="h-7 w-7 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Suporte Local</h3>
              <p className="text-gray-600">
                Equipe técnica na sua cidade, pronta para atender rapidamente qualquer necessidade de suporte.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mapa de Cobertura */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Nossa Área de Cobertura
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Conectamos toda a região sul do Piauí com internet de fibra óptica de alta qualidade
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-6">
                🌐 Cidades Atendidas
              </h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3 bg-white p-4 rounded-lg shadow-sm">
                  <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                  <span className="font-semibold">Eliseu Martins</span>
                  <span className="text-sm text-gray-500">- Sede</span>
                </div>
                <div className="flex items-center space-x-3 bg-white p-4 rounded-lg shadow-sm">
                  <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                  <span className="font-semibold">Colônia do Gurguéia</span>
                </div>
                <div className="flex items-center space-x-3 bg-white p-4 rounded-lg shadow-sm">
                  <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                  <span className="font-semibold">Manoel Emídio</span>
                </div>
                <div className="flex items-center space-x-3 bg-white p-4 rounded-lg shadow-sm">
                  <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                  <span className="font-semibold">Jerumenha</span>
                </div>
                <div className="flex items-center space-x-3 bg-white p-4 rounded-lg shadow-sm">
                  <div className="w-4 h-4 bg-orange-500 rounded-full animate-pulse"></div>
                  <span className="font-semibold">Canto do Buriti</span>
                  <span className="text-sm text-orange-600">- Em Breve</span>
                </div>
              </div>
            </div>
            
            <div>
              <InteractiveMap />
              <p className="text-sm text-gray-500 mt-4 text-center">
                🗺️ Mapa interativo - Clique nos pontos para mais detalhes
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Planos */}
      <section className="py-16 bg-gradient-to-b from-orange-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Planos para todos os perfis
            </h2>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
              Escolha o plano ideal para sua necessidade com a qualidade SaraivaNet
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow border-t-4 border-gray-400">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900">Básico</h3>
                <div className="mt-4 flex items-baseline justify-center">
                  <span className="text-5xl font-extrabold text-gray-900">R$89</span>
                  <span className="ml-1 text-xl text-gray-500">/mês</span>
                </div>
                <p className="mt-2 text-gray-500">Ideal para uso pessoal</p>
              </div>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  <span>100 Mega de velocidade</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  <span>Wi-Fi de alta performance</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  <span>Suporte técnico</span>
                </li>
                <li className="flex items-center text-gray-400">
                  <CheckCircle className="h-5 w-5 text-gray-300 mr-2" />
                  <span>Sem TV inclusa</span>
                </li>
              </ul>
              
              <Button className="w-full">Contratar Agora</Button>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-xl hover:shadow-2xl transition-shadow border-t-4 border-orange-600 transform md:-translate-y-4 relative">
              <div className="absolute -top-4 left-0 right-0 flex justify-center">
                <span className="bg-orange-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase">Mais Popular</span>
              </div>
              
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900">Família</h3>
                <div className="mt-4 flex items-baseline justify-center">
                  <span className="text-5xl font-extrabold text-gray-900">R$129</span>
                  <span className="ml-1 text-xl text-gray-500">/mês</span>
                </div>
                <p className="mt-2 text-gray-500">Perfeito para toda família</p>
              </div>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  <span>300 Mega de velocidade</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  <span>Wi-Fi de alta performance</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  <span>Suporte técnico prioritário</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  <span>SaraivaTV com 30 canais</span>
                </li>
              </ul>
              
              <Button className="w-full bg-orange-600 hover:bg-orange-700">Contratar Agora</Button>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow border-t-4 border-blue-600">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900">Premium</h3>
                <div className="mt-4 flex items-baseline justify-center">
                  <span className="text-5xl font-extrabold text-gray-900">R$199</span>
                  <span className="ml-1 text-xl text-gray-500">/mês</span>
                </div>
                <p className="mt-2 text-gray-500">Para quem exige o máximo</p>
              </div>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  <span>500 Mega de velocidade</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  <span>Wi-Fi Mesh (2 pontos)</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  <span>Suporte técnico VIP</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  <span>SaraivaTV com 80 canais</span>
                </li>
              </ul>
              
              <Button className="w-full bg-blue-600 hover:bg-blue-700">Contratar Agora</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Depoimentos */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              O que nossos clientes dizem
            </h2>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
              A satisfação dos nossos clientes é nossa maior conquista
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="flex items-center mb-6">
                <div className="mr-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                    <span className="text-xl font-bold text-orange-600">JM</span>
                  </div>
                </div>
                <div>
                  <h4 className="font-bold">João Mendes</h4>
                  <p className="text-sm text-gray-500">Eliseu Martins</p>
                </div>
              </div>
              <p className="text-gray-600 italic">
                "Desde que contratei a SaraivaNet, nunca mais tive problemas com internet. 
                Velocidade excelente e suporte sempre disponível quando preciso."
              </p>
              <div className="mt-4 flex">
                <span className="text-yellow-400">★★★★★</span>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="flex items-center mb-6">
                <div className="mr-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                    <span className="text-xl font-bold text-orange-600">MS</span>
                  </div>
                </div>
                <div>
                  <h4 className="font-bold">Maria Silva</h4>
                  <p className="text-sm text-gray-500">Colônia do Gurguéia</p>
                </div>
              </div>
              <p className="text-gray-600 italic">
                "Trabalho de casa e preciso de uma internet estável. A SaraivaNet 
                superou minhas expectativas. Recomendo para todos da região!"
              </p>
              <div className="mt-4 flex">
                <span className="text-yellow-400">★★★★★</span>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="flex items-center mb-6">
                <div className="mr-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                    <span className="text-xl font-bold text-orange-600">PS</span>
                  </div>
                </div>
                <div>
                  <h4 className="font-bold">Pedro Santos</h4>
                  <p className="text-sm text-gray-500">Manoel Emídio</p>
                </div>
              </div>
              <p className="text-gray-600 italic">
                "Meus filhos estudam online e jogam, eu trabalho de casa, e a internet 
                nunca cai. O técnico veio no mesmo dia quando precisei. Excelente serviço!"
              </p>
              <div className="mt-4 flex">
                <span className="text-yellow-400">★★★★★</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-orange-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                Pronto para ter a melhor internet da região?
              </h2>
              <p className="mt-4 text-lg text-orange-100">
                Contrate agora e tenha instalação expressa em até 48h. 
                Aproveite nossas condições especiais!
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-end">
              <Button size="lg" className="bg-white text-orange-600 hover:bg-orange-50">
                Contratar Agora
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-orange-700">
                <Phone className="mr-2" /> Falar com Consultor
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">SaraivaNet</h3>
              <p className="text-gray-400">
                Conectando o sul do Piauí com internet de fibra óptica de alta qualidade.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Links Rápidos</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">Planos</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Cobertura</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Sobre Nós</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Contato</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Contato</h4>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-center">
                  <MapPin className="h-4 w-4 mr-2" />
                  <span>Av. Principal, 123, Eliseu Martins - PI</span>
                </li>
                <li className="flex items-center">
                  <Phone className="h-4 w-4 mr-2" />
                  <span>(89) 9999-9999</span>
                </li>
                <li className="flex items-center">
                  <MessageCircle className="h-4 w-4 mr-2" />
                  <span>contato@saraivanet.com.br</span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Horário de Atendimento</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Segunda a Sexta: 8h às 18h</li>
                <li>Sábado: 8h às 12h</li>
                <li>Suporte Técnico: 24/7</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>© 2023 SaraivaNet. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <a 
          href="https://wa.me/5589999999999" 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg flex items-center justify-center transition-all hover:scale-110"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-message-circle">
            <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default Index;
