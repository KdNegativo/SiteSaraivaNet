import React from 'react';
import { Star, Wifi, Tv, Smartphone, Shield } from 'lucide-react';
import AnimatedSection from './AnimatedSection';
import StatsCounter from './StatsCounter';
import TouchButton from './TouchButton';
import { useReducedMotion } from '@/hooks/useReducedMotion';

interface HeroSectionProps {
  onWhatsAppClick: () => void;
}

const HeroSection = ({ onWhatsAppClick }: HeroSectionProps) => {
  const prefersReducedMotion = useReducedMotion();

  const benefits = [
    { icon: Wifi, text: "300MB Fibra", subtitle: "Ultrarrápida" },
    { icon: Tv, text: "TV Premium", subtitle: "App gratuito" },
    { icon: Smartphone, text: "TV Mobile", subtitle: "Qualquer lugar" },
    { icon: Shield, text: "Suporte 24h", subtitle: "Sempre disponível" }
  ];

  const stats = [
    { value: 1000, label: "Clientes", suffix: "+" },
    { value: 99, label: "Uptime", suffix: "%" },
    { value: 24, label: "Suporte", suffix: "h" }
  ];

  return (
    <section id="inicio" className="relative overflow-hidden min-h-screen flex items-center pt-20 gradient-hero">
      {/* Simplified Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/40"></div>
      <div className="absolute inset-0 opacity-30" style={{
        backgroundImage: `radial-gradient(circle at 30% 30%, rgba(255,255,255,0.1) 1px, transparent 1px)`,
        backgroundSize: '60px 60px'
      }}></div>
      
      {/* Floating Elements */}
      {!prefersReducedMotion && (
        <div className="absolute inset-0">
          <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-white/10 rounded-full blur-3xl animate-float" style={{ animationDuration: '8s' }}></div>
          <div className="absolute bottom-1/4 left-1/4 w-48 h-48 bg-white/5 rounded-full blur-3xl animate-float" style={{ animationDuration: '12s', animationDelay: '4s' }}></div>
        </div>
      )}
      
      {/* Content */}
      <div className="relative z-10 w-full px-6 py-12">
        <div className="max-w-6xl mx-auto">
          
          {/* Mobile Version */}
          <div className="md:hidden">
            <AnimatedSection animation="fade-up">
              <div className="text-center space-y-8">
                {/* Badge */}
                <div className="inline-flex items-center bg-white/20 backdrop-blur-md text-white px-5 py-3 rounded-full font-bold text-sm border border-white/30">
                  <Star className="w-4 h-4 mr-2 fill-current" />
                  <span>Internet + TV Grátis</span>
                </div>
                
                {/* Title */}
                <h1 className="text-4xl font-black leading-tight text-white font-playfair">
                  <span className="block mb-2">Internet Fibra</span>
                  <span className="block gradient-text-luxury">+ SaraivaTV</span>
                </h1>
                
                {/* Subtitle */}
                <p className="text-lg text-white/90 font-medium">
                  300MB ultrarrápido + App Premium gratuito
                </p>

                {/* Benefits Grid */}
                <div className="grid grid-cols-2 gap-4">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="glass-button-luxury rounded-2xl p-4 flex flex-col items-center space-y-2 hover:scale-105 transition-all duration-300">
                      <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center">
                        <benefit.icon className="w-5 h-5 text-white" />
                      </div>
                      <span className="font-semibold text-sm text-white text-center">{benefit.text}</span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <TouchButton 
                  onClick={onWhatsAppClick} 
                  className="btn-luxury w-full text-lg"
                >
                  🚀 Contratar Agora
                </TouchButton>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-3 text-center">
                  {[
                    { value: 1000, label: "Clientes", suffix: "+" },
                    { value: 99, label: "Uptime", suffix: "%" },
                    { value: 20, label: "Canais", suffix: "+" },
                    { value: 24, label: "Online", suffix: "h" }
                  ].map((stat, index) => (
                    <div key={index} className="bg-white/20 backdrop-blur-lg rounded-xl p-3 border border-white/30 shadow-lg hover:bg-white/25 hover:scale-105 transition-all duration-300">
                      <StatsCounter endValue={stat.value} label={stat.label} suffix={stat.suffix} />
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>

          {/* Desktop Version */}
          <div className="hidden md:block">
            <AnimatedSection animation="fade-up">
              <div className="text-center space-y-10">
                {/* Badge */}
                <div className="inline-flex items-center bg-white/20 backdrop-blur-md text-white px-8 py-4 rounded-full font-bold text-lg border border-white/30">
                  <Star className="w-5 h-5 mr-3 fill-current" />
                  <span>Internet + TV Grátis</span>
                </div>
                
                {/* Title */}
                <h1 className="text-5xl lg:text-6xl font-black leading-tight text-white max-w-4xl mx-auto font-playfair">
                  <span className="block mb-2">Internet Fibra 300MB</span>
                  <span className="block gradient-text-luxury">+ SaraivaTV Premium</span>
                </h1>
                
                {/* Subtitle */}
                <p className="text-xl lg:text-2xl text-white/90 font-medium max-w-3xl mx-auto">
                  A combinação perfeita para sua casa
                </p>

                {/* Benefits Grid */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="glass-button-luxury rounded-2xl p-6 flex flex-col items-center space-y-3 hover:scale-105 transition-all duration-300">
                      <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                        <benefit.icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="text-center">
                        <div className="font-bold text-white">{benefit.text}</div>
                        <div className="text-sm text-white/70">{benefit.subtitle}</div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <TouchButton 
                  onClick={onWhatsAppClick} 
                  className="btn-luxury text-xl px-12 py-4"
                >
                  🚀 Contratar Agora
                </TouchButton>

                {/* Stats */}
                <div className="flex justify-center gap-8 text-center max-w-2xl mx-auto">
                  {stats.map((stat, index) => (
                    <div key={index} className="glass-button-luxury rounded-xl p-4 hover:scale-105 transition-all duration-300">
                      <StatsCounter endValue={stat.value} label={stat.label} suffix={stat.suffix} />
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;