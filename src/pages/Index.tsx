import { Phone, Mail, MapPin, Clock, Wifi, Tv, Music, Shield, Star, Users, Heart, Award } from "lucide-react";
import RealMap from "@/components/RealMap";
import StatsCounter from "@/components/StatsCounter";
import TestimonialCard from "@/components/TestimonialCard";
import MobileNavigation from "@/components/MobileNavigation";
import AnimatedSection from "@/components/AnimatedSection";
import TouchButton from "@/components/TouchButton";
import UnifiedWhatsApp from "@/components/UnifiedWhatsApp";
import SinglePlan from "@/components/SinglePlan";
import { useReducedMotion } from "@/hooks/useReducedMotion";

const Index = () => {
  const prefersReducedMotion = useReducedMotion();
  
  const handleSmoothScroll = (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const headerHeight = 80;
      const elementPosition = targetElement.offsetTop - headerHeight;
      
      window.scrollTo({
        top: elementPosition,
        behavior: prefersReducedMotion ? 'auto' : 'smooth'
      });
    }
  };

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-orange-50 via-white to-orange-50">
      {/* Background pattern simplificado */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-100/20 via-transparent to-orange-100/10"></div>
      
      {/* WhatsApp unificado */}
      <UnifiedWhatsApp variant="floating" />
      
      {/* Header simplificado */}
      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b border-orange-300/30 bg-gradient-to-r from-orange-500 to-red-500">
        <div className="absolute inset-0 bg-gradient-to-r from-black/5 via-transparent to-black/5"></div>
        
        <div className="relative px-4 py-4">
          {/* Mobile Layout */}
          <div className="md:hidden">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-white to-orange-100 rounded-2xl flex items-center justify-center shadow-2xl border-2 border-white/50">
                  <Wifi className="w-5 h-5 text-orange-600" />
                </div>
                <div>
                  <span className="text-xl font-black text-white font-playfair" style={{textShadow: '2px 2px 8px rgba(0,0,0,0.8)', letterSpacing: '0.5px'}}>SaraivaNet</span>
                  <div className="text-xs text-orange-100 font-semibold flex items-center">
                    <MapPin className="w-3 h-3 mr-1" />
                    <span className="bg-gradient-to-r from-white/90 to-white/70 bg-clip-text text-transparent font-bold">Eliseu Martins - PI</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <MobileNavigation />
              </div>
            </div>
          </div>

          {/* Desktop Layout */}
          <div className="hidden md:flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gradient-to-br from-white to-orange-100 rounded-2xl flex items-center justify-center shadow-2xl border-2 border-white/50">
                <Wifi className="w-6 h-6 text-orange-600" />
              </div>
              <div>
                <span className="text-2xl font-black text-white font-playfair" style={{textShadow: '3px 3px 12px rgba(0,0,0,0.8)', letterSpacing: '1px'}}>SaraivaNet</span>
                <div className="text-sm text-orange-100 font-semibold flex items-center">
                  <MapPin className="w-4 h-4 mr-1" />
                  <span className="bg-gradient-to-r from-white/90 to-white/70 bg-clip-text text-transparent">Eliseu Martins - PI</span>
                </div>
              </div>
            </div>
            
            <nav className="flex items-center space-x-2">
              <button onClick={e => handleSmoothScroll(e, 'inicio')} className="relative px-6 py-3 text-white hover:text-orange-200 transition-all duration-300 font-semibold group rounded-full">
                <span className="relative z-10">Início</span>
                <div className="absolute inset-0 bg-white/10 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300"></div>
              </button>
              <button onClick={e => handleSmoothScroll(e, 'planos')} className="relative px-6 py-3 text-white hover:text-orange-200 transition-all duration-300 font-semibold group rounded-full">
                <span className="relative z-10">Planos</span>
                <div className="absolute inset-0 bg-white/10 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300"></div>
              </button>
              <button onClick={e => handleSmoothScroll(e, 'cobertura')} className="relative px-6 py-3 text-white hover:text-orange-200 transition-all duration-300 font-semibold group rounded-full">
                <span className="relative z-10">Cobertura</span>
                <div className="absolute inset-0 bg-white/10 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300"></div>
              </button>
              <button onClick={e => handleSmoothScroll(e, 'sobre')} className="relative px-6 py-3 text-white hover:text-orange-200 transition-all duration-300 font-semibold group rounded-full">
                <span className="relative z-10">Sobre</span>
                <div className="absolute inset-0 bg-white/10 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300"></div>
              </button>
              <button onClick={e => handleSmoothScroll(e, 'contato')} className="relative px-6 py-3 text-white hover:text-orange-200 transition-all duration-300 font-semibold group rounded-full">
                <span className="relative z-10">Contato</span>
                <div className="absolute inset-0 bg-white/10 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300"></div>
              </button>
            </nav>

            <div className="flex items-center space-x-4">
              {/* Espaço para futuros elementos */}
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section - Simplificado e elegante */}
      <section id="inicio" className="relative min-h-screen flex items-center pt-20 bg-gradient-to-br from-orange-500 to-red-500">
        
        {/* Background effects reduzidos */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/30"></div>
        
        {/* Floating elements minimalistas */}
        {!prefersReducedMotion && (
          <div className="absolute inset-0">
            <div className="absolute top-20 right-20 w-64 h-64 bg-white/10 rounded-full blur-3xl animate-float" style={{ animationDuration: '8s' }}></div>
            <div className="absolute bottom-20 left-20 w-48 h-48 bg-yellow-300/20 rounded-full blur-2xl animate-float" style={{ animationDuration: '10s', animationDelay: '3s' }}></div>
          </div>
        )}
        
        {/* Main Content */}
        <div className="relative z-10 w-full px-6 py-12">
          <div className="max-w-6xl mx-auto">
            
            {/* Mobile Version */}
            <div className="md:hidden">
              <AnimatedSection animation="fade-up">
                <div className="text-center space-y-8">
                  {/* Badge */}
                  <div className="inline-flex items-center bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 text-gray-900 px-5 py-3 rounded-full font-bold text-sm shadow-xl border-2 border-yellow-200/50">
                    <Star className="w-4 h-4 mr-2 fill-current animate-pulse" />
                    <span>🔥 Internet + TV Grátis</span>
                  </div>
                  
                  {/* Title */}
                  <h1 className="text-4xl font-black leading-tight text-white font-playfair">
                    <span className="block mb-2" style={{textShadow: '4px 4px 16px rgba(0,0,0,0.8), 0 0 40px rgba(255,255,255,0.4)'}}>Internet</span>
                    <span className="block" style={{textShadow: '4px 4px 16px rgba(0,0,0,0.8), 0 0 40px rgba(255,255,255,0.4)'}}>+ SaraivaTV</span>
                  </h1>
                  
                  {/* Subtitle */}
                  <p className="text-lg text-white/95 font-medium" style={{textShadow: '2px 2px 8px rgba(0,0,0,0.6)'}}>
                    🚀 Internet ultrarrápida + App gratuito
                  </p>

                  {/* Feature Cards */}
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { icon: Wifi, text: "Internet ULTRA", gradient: "from-orange-500/80 to-red-500/70" },
                      { icon: Tv, text: "TV Premium", gradient: "from-blue-500/80 to-purple-500/70" },
                      { icon: Music, text: "Rádios 24h", gradient: "from-green-500/80 to-emerald-500/70" },
                      { icon: Shield, text: "Suporte VIP", gradient: "from-purple-500/80 to-pink-500/70" }
                    ].map((card, index) => (
                      <div key={index} className={`bg-gradient-to-br ${card.gradient} backdrop-blur-xl rounded-3xl p-5 flex flex-col items-center space-y-3 border border-white/40 shadow-2xl hover:scale-110 hover:-translate-y-2 transition-all duration-500 hover:shadow-2xl hover:shadow-white/20`}>
                        <div className="w-12 h-12 bg-white/30 backdrop-blur-sm rounded-2xl flex items-center justify-center shadow-2xl">
                          <card.icon className="w-6 h-6 text-white" />
                        </div>
                        <span className="font-bold text-sm text-white text-center drop-shadow-2xl">{card.text}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <UnifiedWhatsApp 
                    variant="button" 
                    message="Olá! Gostaria de contratar o plano de Internet + SaraivaTV."
                    className="w-full bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-300 hover:to-orange-400 text-gray-900 text-lg py-4 shadow-2xl font-black"
                  >
                    🚀 Contratar Agora
                  </UnifiedWhatsApp>

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
                <div className="text-center space-y-12">
                  {/* Badge Desktop */}
                  <div className="inline-flex items-center bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 text-gray-900 px-8 py-4 rounded-full font-bold text-lg shadow-xl border-2 border-yellow-200/50">
                    <Star className="w-5 h-5 mr-3 fill-current animate-pulse" />
                    <span>🔥 Internet + TV Grátis</span>
                  </div>
                  
                  {/* Title */}
                  <h1 className="text-6xl lg:text-7xl font-black leading-tight text-white max-w-4xl mx-auto font-playfair">
                    <span className="block mb-4" style={{textShadow: '5px 5px 20px rgba(0,0,0,0.8), 0 0 50px rgba(255,255,255,0.5), 0 0 100px rgba(255,165,0,0.4)'}}>Internet + SaraivaTV</span>
                  </h1>
                  
                  {/* Subtitle */}
                  <p className="text-2xl lg:text-3xl text-white/95 font-medium max-w-3xl mx-auto" style={{textShadow: '3px 3px 12px rgba(0,0,0,0.6)'}}>
                    🚀 Internet ultrarrápida + App gratuito
                  </p>

                  {/* Feature Cards Desktop */}
                  <div className="grid grid-cols-4 gap-8 max-w-5xl mx-auto">
                    {[
                      { icon: Wifi, text: "Internet ULTRA", gradient: "from-orange-500/80 to-red-500/70" },
                      { icon: Tv, text: "TV Premium", gradient: "from-blue-500/80 to-purple-500/70" },
                      { icon: Music, text: "Rádios 24h", gradient: "from-green-500/80 to-emerald-500/70" },
                      { icon: Shield, text: "Suporte VIP", gradient: "from-purple-500/80 to-pink-500/70" }
                    ].map((card, index) => (
                      <div key={index} className={`bg-gradient-to-br ${card.gradient} backdrop-blur-xl rounded-4xl p-10 flex flex-col items-center space-y-5 border border-white/50 shadow-2xl hover:scale-115 hover:-translate-y-3 transition-all duration-700 hover:shadow-2xl hover:shadow-white/30`}>
                        <div className="w-20 h-20 bg-white/35 backdrop-blur-sm rounded-3xl flex items-center justify-center shadow-2xl hover:rotate-12 transition-transform duration-300">
                          <card.icon className="w-8 h-8 text-white" />
                        </div>
                        <span className="font-bold text-xl text-white text-center drop-shadow-2xl">{card.text}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button Desktop */}
                  <UnifiedWhatsApp 
                    variant="button" 
                    message="Olá! Gostaria de contratar o plano de Internet + SaraivaTV."
                    className="bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-300 hover:to-orange-400 text-gray-900 px-16 py-6 text-2xl shadow-2xl font-black"
                  >
                    🚀 Contratar Agora
                  </UnifiedWhatsApp>

                  {/* Stats Desktop */}
                  <div className="flex justify-center gap-12 text-center max-w-3xl mx-auto">
                    {[
                      { value: 1000, label: "Clientes", suffix: "+" },
                      { value: 99, label: "Uptime", suffix: "%" },
                      { value: 20, label: "Canais", suffix: "+" },
                      { value: 24, label: "Online", suffix: "h" }
                    ].map((stat, index) => (
                      <div key={index} className="bg-white/20 backdrop-blur-lg rounded-2xl p-6 border border-white/30 shadow-xl hover:bg-white/25 hover:scale-110 hover:-translate-y-1 transition-all duration-500">
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

      {/* Plano único - componente dedicado */}
      <SinglePlan />

      {/* About Section - Simplified */}
      <section id="sobre" className="py-20 px-4 bg-gradient-to-br from-gray-50 to-orange-50">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection animation="fade-up">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black text-gray-800 mb-6">Por que escolher a SaraivaNet?</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Somos a empresa de internet que mais cresce em Eliseu Martins, oferecendo tecnologia de ponta e atendimento humanizado.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Heart,
                title: "Atendimento Humano",
                description: "Nossa equipe está sempre pronta para ajudar com carinho e dedicação."
              },
              {
                icon: Award,
                title: "Qualidade Garantida",
                description: "Internet estável com velocidade real garantida por contrato."
              },
              {
                icon: Users,
                title: "Confiança Local",
                description: "Empresa local que conhece as necessidades da nossa região."
              }
            ].map((item, index) => (
              <AnimatedSection key={index} animation="fade-up" delay={index * 200}>
                <div className="bg-white/90 backdrop-blur-xl rounded-2xl p-8 shadow-xl border border-orange-200/50 hover:scale-105 transition-all duration-300 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <item.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Coverage Section */}
      <section id="cobertura" className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection animation="fade-up">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black text-gray-800 mb-6">Nossa Cobertura</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                Atendemos toda Eliseu Martins com internet de alta qualidade. Veja se chegamos na sua região!
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="scale-in" delay={200}>
            <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-3xl p-8 border border-orange-200/50 shadow-xl">
              <RealMap />
              <div className="text-center mt-8">
                <UnifiedWhatsApp 
                  variant="button" 
                  message="Gostaria de verificar se a SaraivaNet atende na minha região."
                  className="text-lg px-8"
                >
                  📍 Verificar Minha Região
                </UnifiedWhatsApp>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-orange-50">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection animation="fade-up">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black text-gray-800 mb-6">O que nossos clientes dizem</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Depoimentos reais de quem já escolheu a SaraivaNet como provedor de internet.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Maria Silva",
                age: "45",
                location: "Centro",
                testimonial: "Melhor internet que já tive! Nunca fica fora do ar e o atendimento é excelente.",
                initials: "MS"
              },
              {
                name: "João Santos", 
                age: "38",
                location: "São José",
                testimonial: "A SaraivaTV é incrível! Minha família adora assistir os programas pelo celular.",
                initials: "JS"
              },
              {
                name: "Ana Costa",
                age: "32",
                location: "Nova Eliseu",
                testimonial: "Velocidade real mesmo! Upload e download funcionam perfeitamente para meu trabalho.",
                initials: "AC"
              }
            ].map((testimonial, index) => (
              <AnimatedSection key={index} animation="fade-up" delay={index * 150}>
                <TestimonialCard {...testimonial} />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contato" className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection animation="fade-up">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black text-gray-800 mb-6">Fale Conosco</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Entre em contato conosco! Estamos prontos para atender você da melhor forma possível.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Phone,
                title: "Telefone",
                info: "(89) 99943-5789",
                link: "tel:+5589999435789"
              },
              {
                icon: Mail,
                title: "E-mail",
                info: "contato@saraivanet.com.br",
                link: "mailto:contato@saraivanet.com.br"
              },
              {
                icon: MapPin,
                title: "Endereço",
                info: "Eliseu Martins - PI",
                link: "#"
              },
              {
                icon: Clock,
                title: "Horário",
                info: "24h por dia",
                link: "#"
              }
            ].map((contact, index) => (
              <AnimatedSection key={index} animation="fade-up" delay={index * 100}>
                <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-6 text-center border border-orange-200/50 shadow-lg hover:scale-105 transition-all duration-300">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <contact.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-bold text-gray-800 mb-2">{contact.title}</h3>
                  <p className="text-gray-600 text-sm">{contact.info}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection animation="fade-up" delay={400}>
            <div className="text-center mt-16">
              <UnifiedWhatsApp 
                variant="card"
                message="Olá! Gostaria de mais informações sobre os serviços da SaraivaNet."
                className="max-w-md mx-auto"
              >
                <p className="text-gray-600 mb-4">
                  Tem alguma dúvida? Converse conosco pelo WhatsApp e receba atendimento personalizado!
                </p>
              </UnifiedWhatsApp>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-orange-500 to-red-500 text-white py-8 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-4 mb-4 md:mb-0">
              <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center">
                <Wifi className="w-5 h-5 text-white" />
              </div>
              <div>
                <span className="text-xl font-black">SaraivaNet</span>
                <p className="text-sm text-orange-100">Internet que conecta você ao mundo</p>
              </div>
            </div>
            
            <div className="text-center md:text-right">
              <p className="text-sm text-orange-100">
                © 2024 SaraivaNet. Todos os direitos reservados.
              </p>
              <p className="text-xs text-orange-200 mt-1">
                Eliseu Martins - PI
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;