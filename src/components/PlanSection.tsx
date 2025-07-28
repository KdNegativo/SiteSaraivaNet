import React from 'react';
import { Award, Wifi, Tv, CheckCircle, Smartphone, Shield, Clock, Headphones } from 'lucide-react';
import AnimatedSection from './AnimatedSection';
import TouchButton from './TouchButton';

interface PlanSectionProps {
  onWhatsAppClick: () => void;
}

const PlanSection = ({ onWhatsAppClick }: PlanSectionProps) => {
  const features = [
    { icon: Wifi, text: "300 Mbps de download" },
    { icon: Tv, text: "SaraivaTV Premium incluído" },
    { icon: Smartphone, text: "App móvel gratuito" },
    { icon: Shield, text: "Fibra óptica 100% estável" },
    { icon: Clock, text: "Suporte técnico 24h" },
    { icon: Headphones, text: "Atendimento especializado" }
  ];

  return (
    <section id="planos" className="relative overflow-hidden py-24 px-4 gradient-secondary">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: `radial-gradient(circle at 20% 50%, hsl(20, 100%, 50%, 0.3) 0%, transparent 50%),
                         radial-gradient(circle at 80% 50%, hsl(220, 70%, 50%, 0.2) 0%, transparent 50%)`
      }}></div>

      <div className="max-w-4xl mx-auto relative z-10">
        <AnimatedSection animation="fade-up">
          {/* Header */}
          <div className="text-center mb-12">
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

        {/* Single Plan Card */}
        <AnimatedSection animation="scale-in" delay={200}>
          <div className="glass-dark-luxury rounded-3xl overflow-hidden group hover:scale-[1.02] transition-all duration-500">
            
            {/* Plan Header */}
            <div className="gradient-primary p-8 text-white relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent"></div>
              <div className="relative z-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                    <Wifi className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl md:text-3xl font-black mb-1">Fibra 300MB + TV</h3>
                    <p className="text-white/90 font-medium">Internet ultrarrápida + App Premium</p>
                  </div>
                </div>
                <div className="text-center md:text-right">
                  <div className="text-sm text-white/80 line-through mb-1">De R$ 169,90</div>
                  <div className="text-4xl md:text-5xl font-black">
                    R$ 129<span className="text-2xl">,90</span>
                  </div>
                  <div className="text-sm text-white/90 font-medium">/mês</div>
                </div>
              </div>
            </div>

            {/* Plan Content */}
            <div className="p-8 bg-gradient-to-b from-slate-800/50 to-slate-900/50">
              {/* Features Grid */}
              <div className="grid md:grid-cols-2 gap-4 mb-8">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3 p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-colors">
                    <div className="w-10 h-10 bg-gradient-to-br from-orange-400 to-orange-600 rounded-lg flex items-center justify-center">
                      <feature.icon className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-white font-medium">{feature.text}</span>
                  </div>
                ))}
              </div>

              {/* Special Offers */}
              <div className="bg-gradient-to-r from-orange-500/10 to-red-500/10 rounded-2xl p-6 mb-8 border border-orange-500/20">
                <h4 className="text-xl font-bold text-white mb-4 text-center">🎉 Promoção Especial</h4>
                <div className="grid md:grid-cols-3 gap-4 text-center">
                  <div className="bg-white/10 rounded-xl p-4">
                    <div className="text-2xl font-bold text-orange-400">Grátis</div>
                    <div className="text-sm text-white/90">Instalação</div>
                  </div>
                  <div className="bg-white/10 rounded-xl p-4">
                    <div className="text-2xl font-bold text-orange-400">1º Mês</div>
                    <div className="text-sm text-white/90">50% OFF</div>
                  </div>
                  <div className="bg-white/10 rounded-xl p-4">
                    <div className="text-2xl font-bold text-orange-400">SaraivaTV</div>
                    <div className="text-sm text-white/90">Permanente</div>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="text-center">
                <TouchButton 
                  onClick={onWhatsAppClick}
                  className="btn-luxury text-xl px-12 py-4 w-full md:w-auto"
                >
                  🚀 Contratar Agora - R$ 129,90
                </TouchButton>
                <p className="text-white/70 text-sm mt-4">
                  💳 Sem taxa de instalação • 📱 WhatsApp direto
                </p>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Additional Info */}
        <AnimatedSection animation="fade-up" delay={400}>
          <div className="text-center mt-12">
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm text-white px-6 py-3 rounded-full text-sm border border-white/20">
              <CheckCircle className="w-4 h-4 mr-2 text-green-400" />
              <span>✨ Sem fidelidade • Cancele quando quiser</span>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default PlanSection;