import React from 'react';
import TestimonialCard from '@/components/TestimonialCard';

const Index = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-100 to-red-100 py-20">
        <div className="container mx-auto px-4">
          <div className="lg:flex items-center">
            <div className="lg:w-1/2 text-center lg:text-left">
              <h1 className="text-5xl font-bold text-gray-800 mb-6">
                Internet de Alta Velocidade para Você e sua Família
              </h1>
              <p className="text-xl text-gray-600 mb-12">
                Conecte-se com o mundo de forma rápida e estável.
              </p>
              <button className="bg-gradient-to-r from-orange-500 to-red-500 text-white py-3 px-8 rounded-full font-semibold hover:from-orange-600 hover:to-red-600 transition-colors duration-300">
                Ver Planos
              </button>
            </div>
            <div className="lg:w-1/2">
              <img
                src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
                alt="High-speed internet"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">
            O que nossos clientes estão dizendo
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <TestimonialCard
              name="João Silva"
              age="35 anos"
              location="São Paulo, SP"
              testimonial="A internet é muito rápida e o suporte é excelente. Recomendo!"
              initials="JS"
            />
            <TestimonialCard
              name="Maria Oliveira"
              age="28 anos"
              location="Rio de Janeiro, RJ"
              testimonial="Estou muito satisfeita com a qualidade da internet e o atendimento."
              initials="MO"
            />
            <TestimonialCard
              name="Carlos Pereira"
              age="42 anos"
              location="Belo Horizonte, MG"
              testimonial="A melhor internet que já tive. Sem quedas e com ótima velocidade."
              initials="CP"
            />
          </div>
        </div>
      </section>

        {/* Pricing Section */}
        <section className="py-20 bg-gradient-to-br from-orange-50 to-red-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">
                Planos para Todos os Perfis
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Escolha o plano ideal para suas necessidades de internet
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {/* Plano Básico */}
              <div className="bg-white/80 backdrop-blur-sm border-2 border-gray-200 rounded-2xl p-8 hover:border-orange-300 transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">Básico</h3>
                  <div className="text-4xl font-bold text-orange-500 mb-1">R$ 49</div>
                  <div className="text-gray-500">/mês</div>
                </div>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                    <span className="text-gray-700">50 Mega de velocidade</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                    <span className="text-gray-700">Wi-Fi gratuito</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                    <span className="text-gray-700">Suporte técnico</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                    <span className="text-gray-700">Ideal para casa</span>
                  </div>
                </div>
                
                <button className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white py-3 px-6 rounded-xl font-semibold hover:from-orange-600 hover:to-red-600 transition-all duration-300 transform hover:scale-105">
                  Contratar Agora
                </button>
              </div>

              {/* Plano Padrão */}
              <div className="bg-white/90 backdrop-blur-sm border-2 border-orange-300 rounded-2xl p-8 hover:border-orange-400 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 relative">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-2 rounded-full text-sm font-semibold">
                    Mais Popular
                  </span>
                </div>
                
                <div className="text-center mb-6 mt-4">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">Padrão</h3>
                  <div className="text-4xl font-bold text-orange-500 mb-1">R$ 79</div>
                  <div className="text-gray-500">/mês</div>
                </div>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                    <span className="text-gray-700">100 Mega de velocidade</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                    <span className="text-gray-700">Wi-Fi premium</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                    <span className="text-gray-700">Suporte prioritário</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                    <span className="text-gray-700">Streaming em HD</span>
                  </div>
                </div>
                
                <button className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white py-3 px-6 rounded-xl font-semibold hover:from-orange-600 hover:to-red-600 transition-all duration-300 transform hover:scale-105 shadow-lg">
                  Contratar Agora
                </button>
              </div>

              {/* Plano Premium */}
              <div className="bg-white/80 backdrop-blur-sm border-2 border-gray-200 rounded-2xl p-8 hover:border-orange-300 transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">Premium</h3>
                  <div className="text-4xl font-bold text-orange-500 mb-1">R$ 129</div>
                  <div className="text-gray-500">/mês</div>
                </div>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                    <span className="text-gray-700">200 Mega de velocidade</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                    <span className="text-gray-700">Wi-Fi mesh gratuito</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                    <span className="text-gray-700">Suporte 24/7</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                    <span className="text-gray-700">Ideal para empresas</span>
                  </div>
                </div>
                
                <button className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white py-3 px-6 rounded-xl font-semibold hover:from-orange-600 hover:to-red-600 transition-all duration-300 transform hover:scale-105">
                  Contratar Agora
                </button>
              </div>
            </div>
          </div>
        </section>

      {/* Contact Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Entre em Contato Conosco
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Estamos prontos para atender você e tirar suas dúvidas.
            </p>
            <button className="bg-gradient-to-r from-orange-500 to-red-500 text-white py-3 px-8 rounded-full font-semibold hover:from-orange-600 hover:to-red-600 transition-colors duration-300">
              Fale Conosco
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
