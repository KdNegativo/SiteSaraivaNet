import { CheckCircle, Wifi, Tv, Smartphone, Shield, Star, Award, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import AnimatedSection from "@/components/AnimatedSection";
import TouchButton from "@/components/TouchButton";

const PlanSection = () => {
  const handleWhatsAppClick = () => {
    const phoneNumber = "5589994395789";
    const message = "Olá! Gostaria de contratar o plano Fibra 300MB + SaraivaTV Premium.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const planFeatures = [
    {
      icon: Wifi,
      title: "Internet Fibra 300MB",
      description: "Velocidade ultrarrápida para toda família"
    },
    {
      icon: Tv,
      title: "SaraivaTV Premium",
      description: "App com filmes, séries e documentários"
    },
    {
      icon: Smartphone,
      title: "TV Mobile",
      description: "Assista em qualquer lugar pelo celular"
    },
    {
      icon: Shield,
      title: "Suporte 24h",
      description: "Atendimento técnico sempre disponível"
    }
  ];

  const benefits = [
    "Internet fibra óptica 300MB",
    "SaraivaTV Premium gratuito",
    "Aplicativo mobile incluído",
    "Instalação gratuita",
    "Suporte técnico 24h",
    "Wi-Fi grátis",
    "Sem fidelidade",
    "Primeiro mês grátis"
  ];

  return (
    <section id="planos" className="relative overflow-hidden py-24 px-4 gradient-secondary">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: `radial-gradient(circle at 20% 50%, hsl(20, 100%, 50%, 0.3) 0%, transparent 50%),
                         radial-gradient(circle at 80% 50%, hsl(220, 70%, 50%, 0.2) 0%, transparent 50%)`
      }}></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <AnimatedSection animation="fade-up">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gradient-primary text-white px-6 py-3 rounded-full text-sm font-bold mb-6 shadow-lg">
              <Award className="w-4 h-4 mr-2" />
              <span>Oferta Especial</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4 tracking-tight">
              Plano Completo SaraivaNet
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
              Internet fibra óptica + SaraivaTV em um só plano
            </p>
          </div>
        </AnimatedSection>

        {/* Main Plan Card */}
        <AnimatedSection animation="scale-in" delay={200}>
          <div className="glass-dark-luxury rounded-3xl overflow-hidden group hover:scale-[1.02] transition-all duration-500 max-w-4xl mx-auto">
            
            {/* Plan Header */}
            <div className="gradient-primary p-8 text-white relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent"></div>
              <div className="relative z-10">
                
                {/* Badge */}
                <div className="flex justify-center mb-6">
                  <div className="inline-flex items-center bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-bold">
                    <Star className="w-4 h-4 mr-2 fill-current" />
                    Mais Vendido
                  </div>
                </div>

                {/* Plan Info */}
                <div className="text-center mb-8">
                  <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-3xl flex items-center justify-center mx-auto mb-6">
                    <Wifi className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-3xl md:text-4xl font-black mb-2">Fibra 300MB + TV Premium</h3>
                  <p className="text-white/90 font-medium text-lg">Internet ultrarrápida + App Premium</p>
                </div>

                {/* Pricing */}
                <div className="text-center">
                  <div className="text-sm text-white/80 line-through mb-2">De R$ 169,90</div>
                  <div className="text-5xl md:text-6xl font-black mb-2">
                    R$ 129<span className="text-3xl">,90</span>
                  </div>
                  <div className="text-white/90 font-medium">por mês</div>
                </div>
              </div>
            </div>

            {/* Plan Content */}
            <div className="p-8 md:p-12">
              
              {/* Features Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {planFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-4 p-4 glass-button-luxury rounded-xl">
                    <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center flex-shrink-0">
                      <feature.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-bold text-white mb-1">{feature.title}</h4>
                      <p className="text-slate-300 text-sm">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Benefits List */}
              <div className="mb-8">
                <h4 className="text-xl font-bold text-white mb-6 text-center">O que está incluso:</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span className="text-slate-300">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Call to Action */}
              <div className="text-center space-y-4">
                <TouchButton 
                  onClick={handleWhatsAppClick}
                  className="btn-luxury w-full md:w-auto text-xl px-12 py-4"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Contratar Agora via WhatsApp
                </TouchButton>
                
                <p className="text-slate-400 text-sm">
                  Instalação gratuita • Suporte 24h • Sem fidelidade
                </p>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Additional Info */}
        <AnimatedSection animation="fade-up" delay={400}>
          <div className="mt-12 text-center">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="glass-button-luxury rounded-xl p-6">
                <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-6 h-6 text-green-400" />
                </div>
                <h4 className="font-bold text-white mb-2">Instalação Gratuita</h4>
                <p className="text-slate-300 text-sm">Técnico especializado em até 24h</p>
              </div>
              
              <div className="glass-button-luxury rounded-xl p-6">
                <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-6 h-6 text-blue-400" />
                </div>
                <h4 className="font-bold text-white mb-2">Suporte 24h</h4>
                <p className="text-slate-300 text-sm">Atendimento técnico sempre disponível</p>
              </div>
              
              <div className="glass-button-luxury rounded-xl p-6">
                <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Star className="w-6 h-6 text-purple-400" />
                </div>
                <h4 className="font-bold text-white mb-2">Sem Fidelidade</h4>
                <p className="text-slate-300 text-sm">Cancele quando quiser, sem multa</p>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default PlanSection;