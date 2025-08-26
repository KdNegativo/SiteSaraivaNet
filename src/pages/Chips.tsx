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
  Smartphone,
  Sparkles,
  TrendingUp,
  Heart
} from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import AnimatedSection from "@/components/AnimatedSection";
import TouchButton from "@/components/TouchButton";
import { useState, useEffect, useRef } from "react";

const WHATSAPP_PHONE = "5589994395789";
const WHATSAPP_MSG = "Olá! Quero contratar um plano de dados móveis.";

const Chips = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const heroRef = useRef<HTMLElement>(null);
  
  const canonical = typeof window !== "undefined" ? `${window.location.origin}/chips` : "/chips";
  const waUrl = `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(WHATSAPP_MSG)}`;
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
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

      {/* Interactive Background with Mouse Following */}
      <div 
        className="fixed inset-0 pointer-events-none z-0"
        style={{
          background: `
            radial-gradient(800px circle at ${mousePosition.x}px ${mousePosition.y}px, 
              rgba(255, 102, 0, 0.15), 
              rgba(255, 165, 0, 0.08) 40%, 
              transparent 80%
            )
          `
        }}
      />
      
      {/* Dynamic Geometric Shapes */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-br from-orange-400/20 to-red-400/10 transform rotate-45 animate-pulse rounded-2xl" />
        <div className="absolute top-1/3 right-20 w-24 h-24 bg-gradient-to-bl from-yellow-400/15 to-orange-400/8 transform -rotate-12 animate-bounce rounded-full" style={{ animationDuration: '3s' }} />
        <div className="absolute bottom-40 left-1/4 w-40 h-40 bg-gradient-to-tr from-orange-300/12 to-pink-300/6 transform rotate-12 animate-float rounded-3xl" style={{ animationDuration: '6s' }} />
        <div className="absolute bottom-20 right-1/3 w-28 h-28 bg-gradient-to-tl from-red-400/18 to-orange-400/10 transform -rotate-45 animate-pulse rounded-xl" style={{ animationDuration: '4s' }} />
      </div>

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

      {/* Innovative Hero Section */}
      <section 
        ref={heroRef}
        className="relative overflow-hidden min-h-screen flex items-center" 
        style={{
          background: `
            linear-gradient(135deg, #ff6600 0%, #ff5722 25%, #e65100 50%, #d84315 75%, #bf360c 100%),
            radial-gradient(ellipse at center, rgba(255,255,255,0.1) 0%, transparent 70%)
          `
        }}
      >
        
        {/* 3D Perspective Background */}
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            background: `
              linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.1) 50%, transparent 70%),
              repeating-linear-gradient(
                90deg,
                transparent,
                transparent 100px,
                rgba(255,255,255,0.03) 100px,
                rgba(255,255,255,0.03) 102px
              )
            `,
            transform: `perspective(1000px) rotateX(20deg) translateZ(0)`,
            transformOrigin: 'center bottom'
          }}
        />
        
        {/* Interactive Floating Elements with 3D Effect */}
        <div className="absolute inset-0">
          <div 
            className="absolute w-96 h-96 rounded-full blur-3xl"
            style={{
              top: '10%',
              right: '15%',
              background: 'radial-gradient(circle, rgba(255,204,0,0.4) 0%, rgba(255,102,0,0.2) 50%, transparent 100%)',
              transform: `translateX(${mousePosition.x * 0.02}px) translateY(${mousePosition.y * 0.02}px)`,
              animation: 'float 8s ease-in-out infinite'
            }}
          />
          <div 
            className="absolute w-80 h-80 rounded-full blur-3xl"
            style={{
              bottom: '15%',
              left: '10%',
              background: 'radial-gradient(circle, rgba(255,64,0,0.3) 0%, rgba(255,102,0,0.15) 50%, transparent 100%)',
              transform: `translateX(${mousePosition.x * -0.015}px) translateY(${mousePosition.y * -0.015}px)`,
              animation: 'float 10s ease-in-out infinite 3s'
            }}
          />
          <div 
            className="absolute w-64 h-64 rounded-full blur-2xl"
            style={{
              top: '50%',
              left: '60%',
              background: 'radial-gradient(circle, rgba(255,165,0,0.25) 0%, rgba(255,140,0,0.1) 50%, transparent 100%)',
              transform: `translateX(${mousePosition.x * 0.01}px) translateY(${mousePosition.y * 0.01}px)`,
              animation: 'float 12s ease-in-out infinite 5s'
            }}
          />
        </div>
        
        {/* Geometric Patterns */}
        <div className="absolute inset-0">
          <div className="absolute top-32 left-32 w-16 h-16 border-2 border-white/20 rotate-45 animate-spin" style={{ animationDuration: '20s' }} />
          <div className="absolute bottom-32 right-32 w-12 h-12 border border-white/15 rounded-full animate-pulse" />
          <div className="absolute top-1/2 right-1/4 w-8 h-8 bg-white/10 transform rotate-45 animate-bounce" style={{ animationDuration: '4s' }} />
        </div>
        
        {/* Main Content */}
        <div className="relative z-10 w-full px-6 py-12">
          <div className="max-w-6xl mx-auto">
            
            {/* Mobile Version */}
            <div className="md:hidden">
              <AnimatedSection animation="fade-up">
                <div className="text-center space-y-8">
                   {/* Innovative Badge with Animation */}
                   <div className="inline-flex items-center bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 text-gray-900 px-5 py-3 rounded-full font-bold text-sm shadow-xl border-2 border-yellow-200/50 relative overflow-hidden group">
                     <div className="absolute inset-0 bg-gradient-to-r from-white/20 via-transparent to-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                     <Sparkles className="w-4 h-4 mr-2 animate-pulse" />
                     <span>✨ Planos Premium</span>
                   </div>
                   
                   {/* 3D Text Effect Title */}
                   <div className="relative">
                     <h1 className="text-4xl font-black leading-tight text-white relative z-10">
                       <span 
                         className="block mb-2 relative"
                         style={{
                           textShadow: '4px 4px 16px rgba(0,0,0,0.8), 0 0 40px rgba(255,255,255,0.4)',
                           filter: 'drop-shadow(0 0 20px rgba(255,165,0,0.6))'
                         }}
                       >
                         Planos de Celular
                         <span className="absolute inset-0 bg-gradient-to-r from-yellow-300 via-orange-300 to-red-300 bg-clip-text text-transparent opacity-50 blur-sm">
                           Planos de Celular
                         </span>
                       </span>
                       <span 
                         className="block relative"
                         style={{
                           textShadow: '4px 4px 16px rgba(0,0,0,0.8), 0 0 40px rgba(255,255,255,0.4)',
                           filter: 'drop-shadow(0 0 20px rgba(255,165,0,0.6))'
                         }}
                       >
                         sem Complicação
                         <span className="absolute inset-0 bg-gradient-to-r from-yellow-300 via-orange-300 to-red-300 bg-clip-text text-transparent opacity-50 blur-sm">
                           sem Complicação
                         </span>
                       </span>
                     </h1>
                   </div>
                   
                   {/* Animated Subtitle */}
                   <div className="relative overflow-hidden">
                     <p className="text-lg text-white/95 font-medium relative z-10" style={{textShadow: '2px 2px 8px rgba(0,0,0,0.6)'}}>
                       <span className="inline-block animate-bounce mr-2">🚀</span>
                       <span className="relative">
                         Internet 5G premium com preços transparentes
                         <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-yellow-400 to-orange-400 animate-pulse" />
                       </span>
                     </p>
                   </div>

                   {/* Morphing Button */}
                   <TouchButton 
                     onClick={() => window.open(waUrl, '_blank')} 
                     className="group relative w-full bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 hover:from-yellow-300 hover:via-orange-400 hover:to-red-400 text-gray-900 px-8 py-4 rounded-2xl font-black text-lg shadow-2xl border-2 border-yellow-200/50 hover:scale-110 hover:-translate-y-2 transition-all duration-500 hover:shadow-2xl hover:shadow-yellow-500/30 overflow-hidden"
                   >
                     <div className="absolute inset-0 bg-gradient-to-r from-white/20 via-white/40 to-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                     <span className="relative z-10 flex items-center justify-center">
                       <Heart className="w-5 h-5 mr-2 group-hover:animate-pulse" />
                       Contratar Agora
                       <TrendingUp className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
                     </span>
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
                   {/* Premium Badge Desktop with Shimmer */}
                   <div className="inline-flex items-center bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 text-gray-900 px-8 py-4 rounded-full font-bold text-lg shadow-xl border-2 border-yellow-200/50 relative overflow-hidden group">
                     <div className="absolute inset-0 bg-gradient-to-r from-white/30 via-white/60 to-white/30 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                     <Sparkles className="w-5 h-5 mr-3 animate-spin" style={{ animationDuration: '3s' }} />
                     <span className="relative z-10">✨ Planos Premium</span>
                   </div>
                   
                   {/* Ultra 3D Title Effect */}
                   <div className="relative perspective-1000">
                     <h1 className="text-6xl lg:text-7xl font-black leading-tight text-white max-w-4xl mx-auto relative z-10">
                       <span 
                         className="block mb-4 relative group"
                         style={{
                           textShadow: '5px 5px 20px rgba(0,0,0,0.8), 0 0 50px rgba(255,255,255,0.5), 0 0 100px rgba(255,165,0,0.4)',
                           filter: 'drop-shadow(0 0 30px rgba(255,165,0,0.8))',
                           transform: 'rotateX(10deg) rotateY(-5deg)'
                         }}
                       >
                         Planos de Celular sem Complicação
                         <span className="absolute inset-0 bg-gradient-to-r from-yellow-200 via-orange-200 to-red-200 bg-clip-text text-transparent opacity-40 blur-sm transform translate-y-1 translate-x-1">
                           Planos de Celular sem Complicação
                         </span>
                         <span className="absolute inset-0 bg-gradient-to-r from-yellow-100 via-orange-100 to-red-100 bg-clip-text text-transparent opacity-20 blur-md transform translate-y-2 translate-x-2">
                           Planos de Celular sem Complicação
                         </span>
                       </span>
                     </h1>
                   </div>
                   
                   {/* Interactive Subtitle */}
                   <div className="relative overflow-hidden max-w-3xl mx-auto">
                     <p className="text-2xl lg:text-3xl text-white/95 font-medium relative z-10 group" style={{textShadow: '3px 3px 12px rgba(0,0,0,0.6)'}}>
                       <span className="inline-block animate-bounce mr-3" style={{ animationDuration: '2s' }}>🚀</span>
                       <span className="relative">
                         Internet 5G premium com preços transparentes
                         <span className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 group-hover:w-full transition-all duration-1000 rounded-full" />
                       </span>
                     </p>
                   </div>

                   {/* Ultimate Interactive Button */}
                   <TouchButton 
                     onClick={() => window.open(waUrl, '_blank')} 
                     className="group relative bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 hover:from-yellow-300 hover:via-orange-400 hover:to-red-400 text-gray-900 px-16 py-6 rounded-2xl font-black text-2xl shadow-2xl border-3 border-yellow-200/50 hover:scale-115 hover:-translate-y-3 transition-all duration-700 hover:shadow-2xl hover:shadow-yellow-500/40 overflow-hidden"
                     style={{
                       background: 'linear-gradient(45deg, #ffd700, #ff8c00, #ff4500, #ff6347)',
                       backgroundSize: '400% 400%',
                       animation: 'gradientShift 3s ease infinite'
                     }}
                   >
                     <div className="absolute inset-0 bg-gradient-to-r from-white/30 via-white/60 to-white/30 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000" />
                     <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse transition-opacity duration-500" />
                     <span className="relative z-10 flex items-center justify-center">
                       <Heart className="w-6 h-6 mr-3 group-hover:animate-pulse group-hover:text-red-600 transition-colors" />
                       Contratar Agora
                       <TrendingUp className="w-6 h-6 ml-3 group-hover:rotate-12 group-hover:scale-110 transition-transform" />
                     </span>
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

      {/* Innovative Benefits Section */}
      <section className="relative overflow-hidden py-20 px-4" style={{background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 25%, #0f3460 50%, #0e4b82 75%, #0d5aa7 100%)'}}>
        
        {/* Interactive Mesh Background */}
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,102,0,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,102,0,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
            transform: `translateX(${mousePosition.x * 0.01}px) translateY(${mousePosition.y * 0.01}px)`
          }}
        />
        
        {/* Dynamic Floating Elements */}
        <div className="absolute inset-0">
          <div 
            className="absolute w-64 h-64 rounded-full blur-3xl"
            style={{
              top: '10%',
              right: '15%',
              background: 'radial-gradient(circle, rgba(255,165,0,0.2) 0%, rgba(255,102,0,0.1) 50%, transparent 100%)',
              transform: `translateX(${mousePosition.x * 0.02}px) translateY(${mousePosition.y * 0.02}px) rotate(${mousePosition.x * 0.05}deg)`,
              animation: 'float 10s ease-in-out infinite'
            }}
          />
          <div 
            className="absolute w-80 h-80 rounded-full blur-3xl"
            style={{
              bottom: '15%',
              left: '10%',
              background: 'radial-gradient(circle, rgba(0,150,255,0.15) 0%, rgba(0,100,200,0.08) 50%, transparent 100%)',
              transform: `translateX(${mousePosition.x * -0.015}px) translateY(${mousePosition.y * -0.015}px) rotate(${mousePosition.x * -0.03}deg)`,
              animation: 'float 12s ease-in-out infinite 3s'
            }}
          />
          <div 
            className="absolute w-48 h-48 rounded-full blur-2xl"
            style={{
              top: '40%',
              right: '30%',
              background: 'radial-gradient(circle, rgba(128,0,255,0.12) 0%, rgba(100,0,200,0.06) 50%, transparent 100%)',
              transform: `translateX(${mousePosition.x * 0.008}px) translateY(${mousePosition.y * 0.008}px) rotate(${mousePosition.x * 0.02}deg)`,
              animation: 'float 8s ease-in-out infinite 6s'
            }}
          />
        </div>
        
        {/* Geometric Accent Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-32 left-32 w-20 h-20 border-2 border-orange-400/30 transform rotate-45 animate-spin" style={{ animationDuration: '25s' }} />
          <div className="absolute bottom-40 right-20 w-16 h-16 border border-blue-400/20 rounded-full animate-pulse" style={{ animationDuration: '3s' }} />
          <div className="absolute top-1/2 left-1/4 w-12 h-12 bg-gradient-to-br from-orange-400/20 to-red-400/10 transform rotate-12 animate-bounce rounded-lg" style={{ animationDuration: '4s' }} />
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
                <div className="relative glass-dynamic rounded-4xl p-10 text-center hover:scale-105 transition-all duration-500 overflow-hidden">
                  {/* Card Background Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-orange-500/10 rounded-4xl" />
                  <div className="absolute inset-0 bg-gradient-to-t from-orange-500/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-4xl" />
                  
                  {/* Animated Border */}
                  <div className="absolute inset-0 rounded-4xl bg-gradient-to-r from-orange-400/30 via-yellow-400/30 to-red-400/30 p-px opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="w-full h-full bg-gradient-to-br from-slate-900/90 to-slate-800/90 rounded-4xl" />
                  </div>
                  
                  <div className="relative z-10">
                    {/* Interactive Icon */}
                    <div className="relative w-20 h-20 mx-auto mb-8">
                      <div className="absolute inset-0 bg-gradient-to-br from-orange-400/30 to-red-400/20 rounded-full group-hover:scale-110 transition-transform duration-300" />
                      <div className="absolute inset-0 bg-gradient-to-br from-orange-500/40 to-yellow-500/30 rounded-full animate-pulse opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      <div className="relative w-full h-full flex items-center justify-center">
                        <benefit.icon className="w-10 h-10 text-orange-400 group-hover:text-orange-300 group-hover:scale-110 transition-all duration-300 group-hover:drop-shadow-lg" style={{ filter: 'drop-shadow(0 0 10px rgba(255,165,0,0.5))' }} />
                      </div>
                    </div>
                    
                    {/* Dynamic Title */}
                    <h3 className="text-2xl font-bold mb-6 text-white group-hover:text-orange-300 transition-colors duration-300 relative">
                      {benefit.title}
                      <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-orange-400 to-yellow-400 group-hover:w-full transition-all duration-500" />
                    </h3>
                    
                    {/* Enhanced Description */}
                    <p className="text-lg text-slate-300 leading-relaxed group-hover:text-slate-200 transition-colors duration-300">
                      {benefit.description}
                    </p>
                  </div>
                  
                  {/* Floating Particles Effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
                    <div className="absolute top-4 right-4 w-2 h-2 bg-orange-400 rounded-full animate-ping" style={{ animationDelay: '0.5s' }} />
                    <div className="absolute bottom-4 left-4 w-1.5 h-1.5 bg-yellow-400 rounded-full animate-ping" style={{ animationDelay: '1s' }} />
                    <div className="absolute top-1/2 right-8 w-1 h-1 bg-red-400 rounded-full animate-ping" style={{ animationDelay: '1.5s' }} />
                  </div>
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