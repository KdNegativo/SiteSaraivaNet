import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { 
  CheckCircle, 
  MessageCircle, 
  Phone,
  Users,
  ArrowRight,
  Clock,
  Shield,
  Star,
  Zap,
  Menu,
  X,
  Wifi,
  MapPin,
  Smartphone
} from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import AnimatedSection from "@/components/AnimatedSection";
import TouchButton from "@/components/TouchButton";
import { useState, useEffect } from "react";

const WHATSAPP_PHONE = "5589994395789";
const WHATSAPP_MSG = "Olá! Quero contratar um plano de dados móveis.";

const Chips = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  
  const canonical = typeof window !== "undefined" ? `${window.location.origin}/chips` : "/chips";
  const waUrl = `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(WHATSAPP_MSG)}`;
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const plans = [
    { 
      id: "basico", 
      title: "Plano Básico", 
      data: "15 GB", 
      price: "39,90", 
      period: "mês",
      recommended: false,
      features: [
        "15 GB de internet por mês",
        "Velocidade 4G em todo Brasil",
        "Ligações ilimitadas",
        "WhatsApp liberado",
        "Suporte 24 horas"
      ]
    },
    { 
      id: "familia", 
      title: "Plano Família", 
      data: "35 GB", 
      price: "69,90", 
      period: "mês",
      recommended: true,
      features: [
        "35 GB de internet por mês",
        "Velocidade 4G e 5G",
        "Ligações ilimitadas",
        "Apps sociais liberados",
        "Suporte prioritário 24/7",
        "Até 4 linhas na família"
      ]
    },
    { 
      id: "premium", 
      title: "Plano Premium", 
      data: "80 GB", 
      price: "119,90", 
      period: "mês",
      recommended: false,
      features: [
        "80 GB de internet por mês",
        "Velocidade 5G premium",
        "Ligações e SMS ilimitados",
        "Todos os apps liberados",
        "Suporte VIP 24 horas",
        "Roaming nacional grátis"
      ]
    }
  ];

  const benefits = [
    {
      icon: Shield,
      title: "100% Transparente",
      description: "Sem taxas escondidas, sem letras miúdas. O preço que você vê é o que paga."
    },
    {
      icon: Zap,
      title: "5G Ultra Rápido",
      description: "Conectividade de última geração com velocidade até 10x mais rápida."
    },
    {
      icon: Users,
      title: "Suporte Humano",
      description: "Atendimento com pessoas reais, sem robôs. Sempre prontos para ajudar."
    }
  ];

  const faqs = [
    {
      question: "Como funciona a contratação?",
      answer: "É muito simples! Clique no botão WhatsApp, converse com nosso atendente e escolha seu plano ideal. Enviamos o chip pelos Correios em até 2 dias úteis."
    },
    {
      question: "Preciso cancelar meu plano atual?",
      answer: "Não se preocupe! Nossa equipe ajuda você a cancelar seu plano atual sem complicação. Cuidamos de todo o processo."
    },
    {
      question: "Quais são as formas de pagamento?",
      answer: "Aceitamos boleto bancário, cartão de crédito, débito automático e PIX. Total transparência no pagamento."
    },
    {
      question: "E se eu não gostar do serviço?",
      answer: "Oferecemos 7 dias para testar sem compromisso. Se não ficar satisfeito, cancelamos sem cobrança adicional."
    }
  ];

  return (
    <div className="min-h-screen relative overflow-hidden" style={{background: 'linear-gradient(135deg, #fff9f5 0%, #ffeee0 25%, #ffe5d0 50%, #ffddc0 75%, #ffd5b0 100%)'}}>
      <Helmet>
        <title>SaraivaNet - Planos de Celular sem Complicação | Internet 5G Premium</title>
        <meta name="description" content="Planos de celular com internet 5G de qualidade, preços transparentes e atendimento humano. Contrate já!" />
        <link rel="canonical" href={canonical} />
      </Helmet>

      {/* Elegant Background Pattern */}
      <div className="absolute inset-0" style={{
        backgroundImage: `
          radial-gradient(circle at 20% 20%, rgba(255, 102, 0, 0.05) 0%, transparent 50%),
          radial-gradient(circle at 80% 80%, rgba(255, 165, 0, 0.03) 0%, transparent 50%),
          radial-gradient(circle at 40% 60%, rgba(255, 140, 0, 0.02) 0%, transparent 50%)
        `,
        backgroundSize: '800px 800px, 600px 600px, 400px 400px'
      }}></div>

      {/* Header igual ao site principal */}
      <header style={{background: '#ff6600', borderBottomColor: '#ff4400'}} className="fixed top-0 left-0 right-0 shadow-xl px-4 py-3 border-b-4 z-50">
        {/* Mobile Layout */}
        <div className="md:hidden">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-white to-orange-100 rounded-xl flex items-center justify-center shadow-lg border border-white/30">
                <Wifi className="w-4 h-4 text-orange-600" />
              </div>
              <div>
                <span style={{fontSize: '18px', fontWeight: 'bold', color: '#ffffff', textShadow: '2px 2px 8px rgba(0,0,0,0.8)', fontFamily: 'Poppins, sans-serif', letterSpacing: '0.5px'}}>SaraivaNet</span>
                <div className="text-xs text-orange-100 font-medium flex items-center">
                  <MapPin className="w-2.5 h-2.5 mr-1" />
                  <span className="bg-gradient-to-r from-white/80 to-white/60 bg-clip-text text-transparent font-bold">Eliseu Martins - PI</span>
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <a href={waUrl} target="_blank" rel="noreferrer">
                <TouchButton className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg font-semibold text-sm">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  WhatsApp
                </TouchButton>
              </a>
            </div>
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden md:flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-lg">
              <Wifi className="w-5 h-5 text-orange-600" />
            </div>
            <div>
              <span style={{fontSize: '24px', fontWeight: 'bold', color: '#ffffff', textShadow: '2px 2px 4px #000000', fontFamily: 'Poppins, sans-serif'}}>SaraivaNet</span>
              <div className="text-xs text-orange-100 font-medium flex items-center">
                <MapPin className="w-3 h-3 mr-1" />
                Eliseu Martins - PI
              </div>
            </div>
          </div>
          
          <nav className="flex items-center space-x-6">
            <Link to="/"><TouchButton className="text-white hover:text-orange-200 transition-colors font-medium">Início</TouchButton></Link>
            <TouchButton className="text-white hover:text-orange-200 transition-colors font-semibold">Chips</TouchButton>
          </nav>

          <div className="flex items-center space-x-4">
            <a href={waUrl} target="_blank" rel="noreferrer">
              <TouchButton className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold">
                <MessageCircle className="w-5 h-5 mr-2" />
                WhatsApp
              </TouchButton>
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section no estilo do site */}
      <section className="relative overflow-hidden min-h-screen flex items-center" style={{background: 'linear-gradient(135deg, #ff6600 0%, #ff5722 25%, #e65100 50%, #d84315 75%, #bf360c 100%)'}}>
        
        {/* Sophisticated Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/50"></div>
        <div className="absolute inset-0" style={{
          backgroundImage: `
            radial-gradient(circle at 25% 25%, rgba(255,255,255,0.15) 2px, transparent 2px),
            radial-gradient(circle at 75% 75%, rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.05) 50%, transparent 70%)
          `,
          backgroundSize: '80px 80px, 60px 60px, 120px 120px'
        }}></div>
        
        {/* Elegant Floating Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-orange-300/25 to-yellow-300/20 rounded-full blur-3xl animate-float" style={{ animationDuration: '8s' }}></div>
          <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-br from-red-300/20 to-pink-300/15 rounded-full blur-3xl animate-float" style={{ animationDuration: '10s', animationDelay: '3s' }}></div>
          <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-gradient-to-br from-yellow-300/15 to-orange-300/10 rounded-full blur-3xl animate-float" style={{ animationDuration: '12s', animationDelay: '5s' }}></div>
        </div>
        
        {/* Main Content */}
        <div className="relative z-10 w-full px-6 py-12">
          <div className="max-w-6xl mx-auto">
            
            {/* Mobile Version */}
            <div className="md:hidden">
              <AnimatedSection animation="fade-up">
                <div className="text-center space-y-8">
                  {/* Elegant Badge */}
                  <div className="inline-flex items-center bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 text-gray-900 px-5 py-3 rounded-full font-bold text-sm shadow-xl border-2 border-yellow-200/50">
                    <Smartphone className="w-4 h-4 mr-2 fill-current" />
                    <span>📱 Planos de Celular</span>
                  </div>
                  
                  {/* Luxurious Title */}
                  <h1 className="text-4xl font-black leading-tight text-white font-playfair">
                    <span className="block mb-2" style={{textShadow: '4px 4px 16px rgba(0,0,0,0.8), 0 0 40px rgba(255,255,255,0.4)'}}>Planos de Celular</span>
                    <span className="block" style={{textShadow: '4px 4px 16px rgba(0,0,0,0.8), 0 0 40px rgba(255,255,255,0.4)'}}>sem Complicação</span>
                  </h1>
                  
                  {/* Elegant Subtitle */}
                  <p className="text-lg text-white/95 font-medium" style={{textShadow: '2px 2px 8px rgba(0,0,0,0.6)'}}>
                    🚀 Internet 5G premium com preços transparentes
                  </p>

                  {/* Beautiful Button */}
                  <TouchButton 
                    onClick={() => window.open(waUrl, '_blank')} 
                    className="w-full bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 hover:from-yellow-300 hover:via-orange-400 hover:to-red-400 text-gray-900 px-8 py-4 rounded-2xl font-black text-lg shadow-2xl border-2 border-yellow-200/50 hover:scale-110 hover:-translate-y-2 transition-all duration-500 hover:shadow-2xl hover:shadow-yellow-500/30"
                  >
                    📱 Contratar Agora
                  </TouchButton>

                  <p className="text-sm text-white/80 mt-4">
                    ✓ Sem taxa de adesão • ✓ Chip grátis em casa • ✓ 7 dias para testar
                  </p>
                </div>
              </AnimatedSection>
            </div>

            {/* Desktop Version */}
            <div className="hidden md:block">
              <AnimatedSection animation="fade-up">
                <div className="text-center space-y-12">
                  {/* Elegant Badge Desktop */}
                  <div className="inline-flex items-center bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 text-gray-900 px-8 py-4 rounded-full font-bold text-lg shadow-xl border-2 border-yellow-200/50">
                    <Smartphone className="w-5 h-5 mr-3 fill-current" />
                    <span>📱 Planos de Celular</span>
                  </div>
                  
                  {/* Sophisticated Title */}
                  <h1 className="text-6xl lg:text-7xl font-black leading-tight text-white max-w-4xl mx-auto font-playfair">
                    <span className="block mb-4" style={{textShadow: '5px 5px 20px rgba(0,0,0,0.8), 0 0 50px rgba(255,255,255,0.5), 0 0 100px rgba(255,165,0,0.4)'}}>Planos de Celular sem Complicação</span>
                  </h1>
                  
                  {/* Beautiful Subtitle */}
                  <p className="text-2xl lg:text-3xl text-white/95 font-medium max-w-3xl mx-auto" style={{textShadow: '3px 3px 12px rgba(0,0,0,0.6)'}}>
                    🚀 Internet 5G premium com preços transparentes
                  </p>

                  {/* Stunning Button */}
                  <TouchButton 
                    onClick={() => window.open(waUrl, '_blank')} 
                    className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 hover:from-yellow-300 hover:via-orange-400 hover:to-red-400 text-gray-900 px-16 py-6 rounded-2xl font-black text-2xl shadow-2xl border-3 border-yellow-200/50 hover:scale-115 hover:-translate-y-3 transition-all duration-700 hover:shadow-2xl hover:shadow-yellow-500/40"
                  >
                    📱 Contratar Agora
                  </TouchButton>

                  <p className="text-lg text-white/80 mt-6">
                    ✓ Sem taxa de adesão • ✓ Chip grátis em casa • ✓ 7 dias para testar
                  </p>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* Diferenciais - no estilo do site */}
      <section className="relative overflow-hidden py-20 px-4" style={{background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 25%, #0f3460 50%, #0e4b82 75%, #0d5aa7 100%)'}}>
        
        {/* Sophisticated Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/8 via-transparent to-blue-500/8"></div>
        
        {/* Elegant Floating Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 w-64 h-64 bg-orange-400/15 rounded-full blur-3xl animate-float" style={{ animationDuration: '10s' }}></div>
          <div className="absolute bottom-20 left-20 w-80 h-80 bg-blue-400/12 rounded-full blur-3xl animate-float" style={{ animationDuration: '12s', animationDelay: '3s' }}></div>
          <div className="absolute top-1/3 right-1/3 w-48 h-48 bg-purple-400/10 rounded-full blur-3xl animate-float" style={{ animationDuration: '8s', animationDelay: '6s' }}></div>
        </div>
        
        <div className="max-w-6xl mx-auto relative z-10">
          <AnimatedSection animation="fade-up">
            <div className="text-center mb-16">
              {/* Simple Badge */}
              <div className="inline-flex items-center bg-orange-500/90 text-white px-6 py-3 rounded-full text-lg font-bold mb-8 border border-orange-400">
                <Shield className="w-5 h-5 mr-3" />
                <span>Por que SaraivaNet?</span>
              </div>
              
              {/* Beautiful Title */}
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6" style={{textShadow: '3px 3px 12px rgba(0,0,0,0.8)'}}>
                Vantagens Exclusivas
              </h2>
              <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-3xl mx-auto leading-relaxed font-medium">
                O que torna nossos planos de celular únicos
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {benefits.map((benefit, index) => (
              <AnimatedSection 
                key={index} 
                animation="fade-up" 
                delay={index * 200}
                className="group"
              >
                <div className="glass-dynamic rounded-4xl p-10 text-center hover:scale-105 transition-all duration-500">
                  <div className="w-20 h-20 bg-orange-500/20 rounded-full flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-300">
                    <benefit.icon className="w-10 h-10 text-orange-400 group-hover:animate-bounce" />
                  </div>
                  <h3 className="text-2xl font-bold font-playfair mb-6 text-white group-hover:text-orange-300 transition-colors">
                    {benefit.title}
                  </h3>
                  <p className="text-lg text-slate-300 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Planos - no estilo do site */}
      <section className="py-20 lg:py-32" style={{background: 'linear-gradient(135deg, #fff9f5 0%, #ffeee0 25%, #ffe5d0 50%, #ffddc0 75%, #ffd5b0 100%)'}}>
        <div className="max-w-6xl mx-auto px-4 lg:px-8">
          <AnimatedSection animation="fade-up">
            <div className="text-center mb-16">
              {/* Simple Badge */}
              <div className="inline-flex items-center bg-orange-500/90 text-white px-6 py-3 rounded-full text-lg font-bold mb-8 border border-orange-400">
                <Smartphone className="w-5 h-5 mr-3" />
                <span>Nossos Planos</span>
              </div>
              
              {/* Beautiful Title */}
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-6" style={{textShadow: '2px 2px 8px rgba(0,0,0,0.1)'}}>
                Escolha Seu Plano Ideal
              </h2>
              <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed font-medium">
                Planos transparentes e sem pegadinhas
              </p>
            </div>
          </AnimatedSection>

          <div className="grid lg:grid-cols-3 gap-8 lg:gap-10">
            {plans.map((plan, index) => (
              <AnimatedSection 
                key={plan.id} 
                animation="scale-in" 
                delay={index * 200}
                className="relative"
              >
                <div className={`relative p-8 lg:p-10 rounded-4xl transition-all duration-500 hover:scale-105 hover:shadow-2xl ${
                  plan.recommended 
                    ? 'bg-gradient-to-br from-orange-500/90 to-red-500/90 text-white border-2 border-orange-400 shadow-2xl' 
                    : 'bg-white/90 backdrop-blur-lg border border-orange-200/50 shadow-xl'
                }`}>
                  {plan.recommended && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="bg-gradient-to-r from-yellow-400 to-orange-400 text-gray-900 px-6 py-2 text-sm font-bold rounded-full shadow-lg border-2 border-yellow-200">
                        <Star className="w-4 h-4 mr-2 inline fill-current" />
                        Mais Popular
                      </div>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className={`text-2xl lg:text-3xl font-bold font-playfair mb-4 ${plan.recommended ? 'text-white' : 'text-gray-900'}`}>
                      {plan.title}
                    </h3>
                    
                    <div className="mb-6">
                      <div className="flex items-baseline justify-center gap-2">
                        <span className={`text-lg ${plan.recommended ? 'text-white/80' : 'text-gray-600'}`}>R$</span>
                        <span className={`text-4xl lg:text-5xl font-bold ${plan.recommended ? 'text-white' : 'text-orange-600'}`}>{plan.price}</span>
                        <span className={`text-lg ${plan.recommended ? 'text-white/80' : 'text-gray-600'}`}>/{plan.period}</span>
                      </div>
                    </div>
                    
                    <div className={`text-3xl font-bold mb-6 py-4 px-6 rounded-2xl ${
                      plan.recommended 
                        ? 'bg-white/20 text-white border border-white/30' 
                        : 'bg-orange-500/10 text-orange-600 border border-orange-200'
                    }`}>
                      {plan.data}
                    </div>
                  </div>

                  <ul className="space-y-4 mb-10">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-4">
                        <div className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                          plan.recommended 
                            ? 'bg-white/20' 
                            : 'bg-orange-500/10'
                        }`}>
                          <CheckCircle className={`w-4 h-4 ${plan.recommended ? 'text-white' : 'text-orange-600'}`} />
                        </div>
                        <span className={`text-base leading-relaxed ${plan.recommended ? 'text-white/90' : 'text-gray-700'}`}>
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <a href={waUrl} target="_blank" rel="noreferrer" className="block">
                    <TouchButton 
                      className={`w-full py-4 text-lg font-bold rounded-2xl transition-all duration-300 hover:scale-105 ${
                        plan.recommended 
                          ? 'bg-white text-orange-600 hover:bg-orange-50 shadow-xl hover:shadow-2xl' 
                          : 'bg-gradient-to-r from-orange-500 to-red-500 text-white hover:from-orange-600 hover:to-red-600 shadow-lg hover:shadow-xl'
                      }`}
                    >
                      Contratar Agora
                      <ArrowRight className="w-5 h-5 ml-3 inline" />
                    </TouchButton>
                  </a>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ - no estilo do site */}
      <section className="relative overflow-hidden py-20 px-4" style={{background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 25%, #0f3460 50%, #0e4b82 75%, #0d5aa7 100%)'}}>
        
        {/* Sophisticated Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/8 via-transparent to-blue-500/8"></div>
        
        {/* Elegant Floating Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 w-64 h-64 bg-orange-400/15 rounded-full blur-3xl animate-float" style={{ animationDuration: '10s' }}></div>
          <div className="absolute bottom-20 left-20 w-80 h-80 bg-blue-400/12 rounded-full blur-3xl animate-float" style={{ animationDuration: '12s', animationDelay: '3s' }}></div>
        </div>
        
        <div className="max-w-5xl mx-auto relative z-10">
          <AnimatedSection animation="fade-up">
            <div className="text-center mb-16">
              {/* Simple Badge */}
              <div className="inline-flex items-center bg-orange-500/90 text-white px-6 py-3 rounded-full text-lg font-bold mb-8 border border-orange-400">
                <MessageCircle className="w-5 h-5 mr-3" />
                <span>Dúvidas Frequentes</span>
              </div>
              
              {/* Beautiful Title */}
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6" style={{textShadow: '3px 3px 12px rgba(0,0,0,0.8)'}}>
                Tire suas Dúvidas
              </h2>
              <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-3xl mx-auto leading-relaxed font-medium">
                Respostas rápidas para suas principais perguntas
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="fade-up" delay={200}>
            <Accordion type="single" collapsible className="space-y-6">
              {faqs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`} 
                  className="glass-dynamic border-2 border-white/10 rounded-2xl px-8"
                >
                  <AccordionTrigger className="text-left text-lg font-bold font-playfair py-8 hover:no-underline text-white hover:text-orange-300 transition-colors">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-300 text-base leading-relaxed pb-8">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA Final - no estilo do site */}
      <section className="relative overflow-hidden min-h-screen flex items-center" style={{background: 'linear-gradient(135deg, #ff6600 0%, #ff5722 25%, #e65100 50%, #d84315 75%, #bf360c 100%)'}}>
        
        {/* Sophisticated Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/50"></div>
        <div className="absolute inset-0" style={{
          backgroundImage: `
            radial-gradient(circle at 25% 25%, rgba(255,255,255,0.15) 2px, transparent 2px),
            radial-gradient(circle at 75% 75%, rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.05) 50%, transparent 70%)
          `,
          backgroundSize: '80px 80px, 60px 60px, 120px 120px'
        }}></div>
        
        {/* Elegant Floating Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-orange-300/25 to-yellow-300/20 rounded-full blur-3xl animate-float" style={{ animationDuration: '8s' }}></div>
          <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-br from-red-300/20 to-pink-300/15 rounded-full blur-3xl animate-float" style={{ animationDuration: '10s', animationDelay: '3s' }}></div>
        </div>
        
        <div className="relative z-10 w-full px-6 py-12">
          <div className="max-w-6xl mx-auto text-center">
            <AnimatedSection animation="fade-up">
              <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-8 font-playfair" style={{textShadow: '5px 5px 20px rgba(0,0,0,0.8), 0 0 50px rgba(255,255,255,0.5)'}}>
                Pronto para Mudar?
              </h2>
              <p className="text-xl md:text-2xl lg:text-3xl text-white/95 mb-12 leading-relaxed opacity-90 max-w-4xl mx-auto font-medium" style={{textShadow: '3px 3px 12px rgba(0,0,0,0.6)'}}>
                Junte-se a milhares de clientes satisfeitos<br />
                <strong>Atendimento de segunda a sexta, 8h às 18h</strong>
              </p>
              
              <TouchButton 
                onClick={() => window.open(waUrl, '_blank')} 
                className="bg-gradient-to-r from-green-500 via-green-600 to-green-700 hover:from-green-400 hover:via-green-500 hover:to-green-600 text-white px-16 py-6 rounded-2xl font-black text-2xl shadow-2xl border-3 border-green-200/50 hover:scale-115 hover:-translate-y-3 transition-all duration-700 hover:shadow-2xl hover:shadow-green-500/40"
              >
                <MessageCircle className="w-6 h-6 mr-4" />
                Contratar pelo WhatsApp
                <ArrowRight className="w-6 h-6 ml-4" />
              </TouchButton>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Footer - no estilo do site */}
      <footer className="py-16" style={{background: 'linear-gradient(135deg, #fff9f5 0%, #ffeee0 25%, #ffe5d0 50%, #ffddc0 75%, #ffd5b0 100())'}}>
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
            <div className="text-center lg:text-left">
              <div className="flex items-center space-x-3 justify-center lg:justify-start mb-4">
                <div className="w-10 h-10 bg-orange-600 rounded-xl flex items-center justify-center shadow-lg">
                  <Wifi className="w-5 h-5 text-white" />
                </div>
                <span style={{fontSize: '24px', fontWeight: 'bold', color: '#ff6600', fontFamily: 'Poppins, sans-serif'}}>SaraivaNet</span>
              </div>
              <div className="text-gray-600">
                © 2024 - Conectando famílias com qualidade
              </div>
            </div>
            <div className="flex items-center gap-6">
              <Link to="/" className="text-orange-600 hover:text-orange-700 font-semibold transition-colors">
                Voltar ao Início
              </Link>
              <span className="text-gray-600">CNPJ: 00.000.000/0001-00</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Chips;