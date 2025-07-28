import { Wifi, Tv, Music, Shield, Star, CheckCircle } from "lucide-react";
import UnifiedWhatsApp from "./UnifiedWhatsApp";
import AnimatedSection from "./AnimatedSection";

const SinglePlan = () => {
  const planFeatures = [
    { icon: Wifi, text: "Internet Ultra Rápida", detail: "Velocidade garantida" },
    { icon: Tv, text: "SaraivaTV Grátis", detail: "App premium incluído" },
    { icon: Music, text: "Rádios 24h", detail: "Música sem parar" },
    { icon: Shield, text: "Suporte VIP", detail: "Atendimento prioritário" }
  ];

  const benefits = [
    "✅ Instalação gratuita",
    "✅ Wifi de alta performance",
    "✅ App SaraivaTV incluído",
    "✅ Suporte técnico 24h",
    "✅ Sem fidelidade",
    "✅ Preço fixo por 12 meses"
  ];

  return (
    <section id="planos" className="py-20 px-4 bg-gradient-to-br from-gray-50 to-orange-50">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection animation="fade-up">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-3 rounded-full font-bold text-lg shadow-xl mb-6">
              <Star className="w-5 h-5 mr-2 fill-current animate-pulse" />
              Plano Único
            </div>
            <h2 className="text-5xl md:text-6xl font-black text-gray-800 mb-4">
              Internet + SaraivaTV
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Tudo que você precisa em um só plano. Internet ultra rápida + TV premium.
            </p>
          </div>
        </AnimatedSection>

        {/* Plano Principal */}
        <AnimatedSection animation="scale-in" delay={200}>
          <div className="max-w-4xl mx-auto">
            <div className="bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl border-2 border-orange-200/50 overflow-hidden hover:scale-105 transition-all duration-500">
              
              {/* Header do Plano */}
              <div className="bg-gradient-to-r from-orange-500 to-red-500 px-8 py-6 text-center">
                <div className="inline-flex items-center bg-yellow-400 text-gray-900 px-4 py-2 rounded-full font-bold text-sm mb-4">
                  🔥 MAIS POPULAR
                </div>
                <h3 className="text-3xl font-black text-white mb-2">Plano Completo</h3>
                <p className="text-orange-100">Internet + TV + Suporte VIP</p>
              </div>

              <div className="p-8">
                {/* Grid de Features */}
                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  
                  {/* Features principais */}
                  <div>
                    <h4 className="text-2xl font-bold text-gray-800 mb-6">Incluído no Plano:</h4>
                    <div className="space-y-4">
                      {planFeatures.map((feature, index) => (
                        <div key={index} className="flex items-center gap-4 p-4 bg-gradient-to-r from-orange-50 to-red-50 rounded-xl border border-orange-200/50">
                          <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center">
                            <feature.icon className="w-6 h-6 text-white" />
                          </div>
                          <div>
                            <p className="font-bold text-gray-800">{feature.text}</p>
                            <p className="text-sm text-gray-600">{feature.detail}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Benefícios */}
                  <div>
                    <h4 className="text-2xl font-bold text-gray-800 mb-6">Benefícios:</h4>
                    <div className="space-y-3">
                      {benefits.map((benefit, index) => (
                        <div key={index} className="flex items-center gap-3 p-3 hover:bg-orange-50 rounded-lg transition-colors">
                          <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                          <span className="text-gray-700 font-medium">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Preço e CTA */}
                <div className="border-t border-gray-200 pt-8">
                  <div className="text-center mb-6">
                    <div className="flex items-center justify-center gap-2 mb-2">
                      <span className="text-lg text-gray-500 line-through">R$ 89,90</span>
                      <span className="bg-red-500 text-white px-2 py-1 rounded text-sm font-bold">-20%</span>
                    </div>
                    <div className="text-5xl font-black text-gray-800 mb-2">
                      R$ 69<span className="text-2xl text-gray-600">,90</span>
                    </div>
                    <p className="text-gray-600">por mês • Preço fixo por 12 meses</p>
                  </div>

                  <UnifiedWhatsApp 
                    variant="button" 
                    message="Olá! Gostaria de contratar o plano de Internet + SaraivaTV por R$ 69,90/mês."
                    className="w-full text-xl py-4 shadow-2xl"
                  >
                    🚀 Contratar Agora
                  </UnifiedWhatsApp>

                  <p className="text-center text-sm text-gray-500 mt-4">
                    📞 Atendimento personalizado via WhatsApp
                  </p>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Call to action adicional */}
        <AnimatedSection animation="fade-up" delay={400}>
          <div className="text-center mt-12">
            <p className="text-lg text-gray-600 mb-4">
              Dúvidas sobre o plano? Fale conosco!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <UnifiedWhatsApp 
                variant="button" 
                message="Gostaria de tirar dúvidas sobre o plano de Internet + SaraivaTV."
                className="text-lg px-8"
              >
                💬 Tirar Dúvidas
              </UnifiedWhatsApp>
              <UnifiedWhatsApp 
                variant="button" 
                message="Preciso verificar a cobertura na minha região."
                className="text-lg px-8 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700"
              >
                📍 Verificar Cobertura
              </UnifiedWhatsApp>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default SinglePlan;