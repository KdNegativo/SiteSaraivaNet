import { Card } from "@/components/ui/card";
import { CheckCircle, Wifi, Tv, Music, Shield, Zap, Star } from "lucide-react";
import TouchButton from "./TouchButton";
import AnimatedSection from "./AnimatedSection";

interface SinglePlanProps {
  className?: string;
}

const SinglePlan = ({ className = "" }: SinglePlanProps) => {
  const handleWhatsAppClick = () => {
    const phoneNumber = "5589994395789";
    const message = "Olá! Gostaria de contratar o plano de 300MB + SaraivaTV por R$ 129,90.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const features = [
    { icon: Wifi, text: "300MB Fibra Óptica" },
    { icon: Tv, text: "SaraivaTV Grátis" },
    { icon: Music, text: "Rádios Online" },
    { icon: Shield, text: "Suporte 24h" },
    { icon: Zap, text: "Instalação Profissional" }
  ];

  const benefits = [
    "Download ultrarrápido",
    "Upload simétrico",
    "Ping baixíssimo para jogos",
    "Streaming sem travamentos",
    "Conexão estável 24h",
    "Wi-Fi de alta qualidade",
    "Atendimento personalizado",
    "Sem limite de dados"
  ];

  return (
    <div className={`w-full max-w-4xl mx-auto ${className}`}>
      <AnimatedSection animation="fade-up">
        {/* Cabeçalho da seção */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-gradient-to-r from-orange-100 to-red-100 text-orange-800 px-6 py-3 rounded-full font-bold text-sm mb-6 border border-orange-200">
            <Star className="w-4 h-4 mr-2 fill-current" />
            Plano Completo
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-playfair" style={{textShadow: '3px 3px 12px rgba(0,0,0,0.8)'}}>
            Internet + SaraivaTV
          </h2>
          <p className="text-xl text-white/90" style={{textShadow: '2px 2px 8px rgba(0,0,0,0.6)'}}>
            Tudo que você precisa em um só plano
          </p>
        </div>

        {/* Card do plano */}
        <Card className="relative overflow-hidden bg-white/95 backdrop-blur-xl border border-orange-200/50 shadow-2xl rounded-3xl hover:scale-105 hover:-translate-y-2 transition-all duration-500">
          {/* Efeitos de fundo */}
          <div className="absolute inset-0 bg-gradient-to-br from-orange-50/80 to-red-50/40"></div>
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-orange-200/30 to-transparent rounded-full blur-2xl"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-red-200/30 to-transparent rounded-full blur-2xl"></div>

          <div className="relative z-10 p-8 md:p-12">
            {/* Mobile Layout */}
            <div className="md:hidden">
              <div className="text-center mb-8">
                {/* Badge de destaque */}
                <div className="inline-flex items-center bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-2 rounded-full font-bold text-sm mb-4">
                  🔥 Mais Popular
                </div>
                
                {/* Preço */}
                <div className="mb-6">
                  <div className="text-4xl font-black text-orange-600 mb-2">
                    R$ 129<span className="text-2xl">,90</span>
                  </div>
                  <div className="text-sm text-gray-600">por mês</div>
                  <div className="text-xs text-orange-600 font-semibold mt-1">
                    3 primeiros meses com desconto!
                  </div>
                </div>

                {/* Features principais */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  {features.map((feature, index) => (
                    <div key={index} className="flex flex-col items-center p-4 bg-orange-50 rounded-xl">
                      <feature.icon className="w-8 h-8 text-orange-600 mb-2" />
                      <span className="text-sm font-semibold text-gray-700 text-center">{feature.text}</span>
                    </div>
                  ))}
                </div>

                {/* Benefícios */}
                <div className="grid grid-cols-2 gap-2 mb-8">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center text-sm">
                      <CheckCircle className="w-4 h-4 text-green-600 mr-2 flex-shrink-0" />
                      <span className="text-gray-700">{benefit}</span>
                    </div>
                  ))}
                </div>

                {/* Botão de ação */}
                <TouchButton
                  onClick={handleWhatsAppClick}
                  className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-bold py-4 px-6 rounded-xl text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  🚀 Contratar Agora
                </TouchButton>

                <p className="text-xs text-gray-500 mt-4">
                  Taxa de instalação: R$ 150,00 (paga apenas uma vez)
                </p>
              </div>
            </div>

            {/* Desktop Layout */}
            <div className="hidden md:block">
              <div className="grid md:grid-cols-2 gap-12">
                {/* Lado esquerdo - Informações */}
                <div>
                  {/* Badge de destaque */}
                  <div className="inline-flex items-center bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-3 rounded-full font-bold text-sm mb-6">
                    🔥 Plano Mais Popular
                  </div>
                  
                  {/* Preço */}
                  <div className="mb-8">
                    <div className="text-6xl font-black text-orange-600 mb-2">
                      R$ 129<span className="text-4xl">,90</span>
                    </div>
                    <div className="text-lg text-gray-600">por mês</div>
                    <div className="text-sm text-orange-600 font-semibold mt-2 bg-orange-100 px-3 py-1 rounded-full inline-block">
                      3 primeiros meses com desconto especial!
                    </div>
                  </div>

                  {/* Features principais */}
                  <div className="space-y-4 mb-8">
                    {features.map((feature, index) => (
                      <div key={index} className="flex items-center p-4 bg-orange-50 rounded-xl hover:bg-orange-100 transition-colors duration-300">
                        <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center mr-4">
                          <feature.icon className="w-6 h-6 text-white" />
                        </div>
                        <span className="text-lg font-semibold text-gray-700">{feature.text}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Lado direito - Benefícios e ação */}
                <div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-6">Benefícios inclusos:</h3>
                  
                  {/* Benefícios */}
                  <div className="space-y-3 mb-8">
                    {benefits.map((benefit, index) => (
                      <div key={index} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-600 mr-3 flex-shrink-0" />
                        <span className="text-gray-700">{benefit}</span>
                      </div>
                    ))}
                  </div>

                  {/* Botão de ação */}
                  <TouchButton
                    onClick={handleWhatsAppClick}
                    className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-bold py-6 px-8 rounded-xl text-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                  >
                    🚀 Contratar Agora
                  </TouchButton>

                  <div className="mt-6 p-4 bg-gray-50 rounded-xl">
                    <p className="text-sm text-gray-600 text-center">
                      <strong>Taxa de instalação:</strong> R$ 150,00 (paga apenas uma vez)<br/>
                      <strong>Fidelidade:</strong> 12 meses<br/>
                      <strong>Atendimento:</strong> 24h por dia
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </AnimatedSection>
    </div>
  );
};

export default SinglePlan;