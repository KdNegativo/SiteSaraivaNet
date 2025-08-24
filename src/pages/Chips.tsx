import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { 
  Smartphone, 
  Infinity as InfinityIcon, 
  ArrowRight, 
  CheckCircle, 
  Shield, 
  CreditCard, 
  FileText, 
  Star, 
  Zap, 
  Award, 
  Users, 
  Trophy, 
  Wifi, 
  Lock, 
  Clock, 
  DollarSign,
  Sparkles,
  Crown,
  Diamond,
  Gem,
  Rocket,
  Target,
  TrendingUp,
  Globe,
  HeartHandshake,
  Headphones,
  MessageCircle
} from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useState, useEffect } from "react";

const WHATSAPP_PHONE = "5589994395789";
const WHATSAPP_MSG = "Olá! Quero pedir meu Chip com dados acumulativos.";

const Chips = () => {
  const canonical = typeof window !== "undefined" ? `${window.location.origin}/chips` : "/chips";
  const waUrl = `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(WHATSAPP_MSG)}`;
  
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const plans = [
    { 
      id: "p1", 
      title: "Plano Essential", 
      data: "5 GB", 
      price: "R$ 29,90", 
      period: "/mês",
      best: false,
      icon: Rocket,
      color: "blue",
      features: ["Dados acumulativos", "4G Nacional", "Suporte 24/7", "Sem fidelidade", "App exclusivo"]
    },
    { 
      id: "p2", 
      title: "Plano Premium", 
      data: "15 GB", 
      price: "R$ 49,90", 
      period: "/mês",
      best: true,
      icon: Crown,
      color: "premium",
      features: ["Dados acumulativos", "4G+ Nacional", "Suporte prioritário", "Sem fidelidade", "App exclusivo", "Backup automático"]
    },
    { 
      id: "p3", 
      title: "Plano Ultimate", 
      data: "30 GB", 
      price: "R$ 79,90", 
      period: "/mês",
      best: false,
      icon: Diamond,
      color: "gold",
      features: ["Dados acumulativos", "5G Nacional", "Suporte VIP", "Sem fidelidade", "App exclusivo", "Backup automático", "Roaming internacional"]
    },
  ];

  return (
    <>
      <Helmet>
        <title>Chips SaraivaNet – Revolução em dados acumulativos | Internet móvel premium</title>
        <meta name="description" content="Descubra a revolução em internet móvel: chips SaraivaNet com dados acumulativos ilimitados, cobertura 5G nacional e tecnologia premium. Nunca perca seus dados novamente!" />
        <link rel="canonical" href={canonical} />
      </Helmet>

      <main className="min-h-screen bg-background overflow-hidden">
        {/* Ultra Premium Hero Section with Floating Particles */}
        <section className="relative py-24 md:py-40 bg-gradient-to-br from-background via-secondary/10 to-background overflow-hidden">
          {/* Animated Background Elements */}
          <div className="absolute inset-0">
            {/* Floating particles */}
            <div className="absolute top-20 left-10 w-4 h-4 bg-primary/30 rounded-full animate-float delay-0"></div>
            <div className="absolute top-40 right-20 w-6 h-6 bg-accent/40 rounded-full animate-float delay-1000"></div>
            <div className="absolute bottom-32 left-32 w-3 h-3 bg-primary/20 rounded-full animate-float delay-2000"></div>
            <div className="absolute top-60 left-1/2 w-5 h-5 bg-accent/30 rounded-full animate-float delay-1500"></div>
            <div className="absolute bottom-20 right-40 w-4 h-4 bg-primary/25 rounded-full animate-float delay-500"></div>
            
            {/* Dynamic gradient orbs */}
            <div className="absolute top-0 left-0 w-96 h-96 gradient-luxury rounded-full blur-3xl opacity-20 -translate-x-1/2 -translate-y-1/2 animate-gradient-shift"></div>
            <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-accent/20 to-primary/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2 animate-pulse"></div>
            <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-r from-primary/10 to-accent/10 rounded-full blur-2xl -translate-x-1/2 -translate-y-1/2 animate-float"></div>
          </div>

          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="grid lg:grid-cols-2 gap-20 items-center">
              {/* Premium Left Content */}
              <AnimatedSection className="space-y-10">
                {/* Ultra Premium Badge */}
                <div className="inline-flex items-center gap-4 px-8 py-4 rounded-full glass-ultra border border-primary/30 shadow-premium hover-luxe">
                  <div className="relative">
                    <div className="w-4 h-4 bg-primary rounded-full animate-pulse"></div>
                    <div className="absolute inset-0 w-4 h-4 bg-primary/50 rounded-full animate-ping"></div>
                  </div>
                  <span className="text-primary font-bold text-sm tracking-wide">REVOLUCIONÁRIO</span>
                  <Sparkles className="w-4 h-4 text-accent animate-pulse" />
                </div>

                {/* Hero Title with Luxury Styling */}
                <div className="space-y-4">
                  <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-[0.9] text-balance">
                    <span className="block text-foreground mb-2">O futuro da</span>
                    <span className="block gradient-luxury bg-clip-text text-transparent animate-gradient-shift text-shadow-elegant">
                      conectividade
                    </span>
                    <span className="block text-foreground mt-2">móvel</span>
                  </h1>
                  
                  <div className="relative inline-block">
                    <div className="absolute -inset-2 bg-gradient-to-r from-primary/20 to-accent/20 rounded-lg blur opacity-75 animate-pulse"></div>
                    <p className="relative text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-xl">
                      Dados acumulativos que{' '}
                      <span className="text-primary font-bold">nunca expiram</span>
                      . Tecnologia premium que evolui com você.
                    </p>
                  </div>
                </div>

                {/* Luxury Feature Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 py-8">
                  {[
                    { 
                      icon: InfinityIcon, 
                      title: "Dados Infinitos", 
                      desc: "Acumule sem limites",
                      color: "from-blue-500/10 to-blue-600/20",
                      borderColor: "border-blue-500/30"
                    },
                    { 
                      icon: Zap, 
                      title: "Ativação Express", 
                      desc: "24h para conectar",
                      color: "from-yellow-500/10 to-orange-600/20",
                      borderColor: "border-yellow-500/30"
                    },
                    { 
                      icon: Shield, 
                      title: "Proteção Total", 
                      desc: "Sem surpresas",
                      color: "from-green-500/10 to-emerald-600/20",
                      borderColor: "border-green-500/30"
                    },
                    { 
                      icon: Crown, 
                      title: "Suporte VIP", 
                      desc: "Atendimento premium",
                      color: "from-purple-500/10 to-violet-600/20",
                      borderColor: "border-purple-500/30"
                    }
                  ].map((feature, idx) => (
                    <div key={idx} className={`card-luxury p-6 rounded-2xl border-2 ${feature.borderColor} bg-gradient-to-br ${feature.color} group hover-luxe`}>
                      <div className="flex items-start gap-4">
                        <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <feature.icon className="w-7 h-7 text-primary" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-bold text-lg text-card-foreground mb-1">{feature.title}</h3>
                          <p className="text-muted-foreground text-sm">{feature.desc}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Premium CTA Section */}
                <div className="flex flex-col sm:flex-row gap-6 pt-4">
                  <a href={waUrl} target="_blank" rel="noreferrer" className="group">
                    <Button className="btn-luxury px-10 py-6 rounded-2xl font-bold text-xl flex items-center gap-4 w-full sm:w-auto shadow-2xl hover:shadow-primary/25 relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_100%] animate-gradient-shift opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      <MessageCircle className="w-6 h-6 relative z-10" />
                      <span className="relative z-10">Falar com especialista</span>
                      <ArrowRight className="w-6 h-6 relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
                    </Button>
                  </a>
                  <Link to="/" className="group">
                    <Button variant="outline" className="glass-ultra border-2 border-primary/30 px-10 py-6 rounded-2xl font-bold text-xl w-full sm:w-auto hover:bg-primary/10 transition-all duration-300 hover:scale-105">
                      <Globe className="w-6 h-6 mr-3" />
                      Ver cobertura
                    </Button>
                  </Link>
                </div>
              </AnimatedSection>

              {/* Ultra Premium WhatsApp Showcase */}
              <AnimatedSection className="relative" animation="scale-in">
                <div className="relative">
                  {/* Floating decorative elements with luxury effects */}
                  <div className="absolute -top-8 -left-8 w-32 h-32 bg-primary/20 rounded-full blur-2xl animate-float opacity-60"></div>
                  <div className="absolute -bottom-12 -right-12 w-40 h-40 bg-accent/20 rounded-full blur-2xl animate-float delay-1000 opacity-60"></div>
                  <div className="absolute top-1/2 right-0 w-24 h-24 bg-gradient-to-r from-primary/30 to-accent/30 rounded-full blur-xl animate-float delay-500 opacity-40"></div>
                  
                  {/* Main showcase card with luxury glass effect */}
                  <div className="relative card-luxury p-10 rounded-4xl shadow-2xl border-2 border-primary/20 hover-luxe">
                    <div className="relative w-full h-96 bg-gradient-to-br from-secondary/20 to-muted/30 rounded-3xl flex items-center justify-center overflow-hidden border-2 border-border/20">
                      {/* Animated background with luxury patterns */}
                      <div className="absolute inset-0">
                        <div className="w-full h-full gradient-luxury opacity-10 animate-gradient-shift"></div>
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,_rgba(255,102,0,0.1)_0%,_transparent_50%)]"></div>
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,_rgba(255,102,0,0.05)_0%,_transparent_50%)]"></div>
                      </div>
                      
                      {/* Premium WhatsApp Icon */}
                      <div className="relative group">
                        <div className="w-44 h-44 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center shadow-2xl relative overflow-hidden hover:scale-110 transition-all duration-500 cursor-pointer">
                          {/* Multiple shine effects */}
                          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                          <div className="absolute inset-0 bg-gradient-to-bl from-transparent via-white/10 to-transparent translate-x-full group-hover:-translate-x-full transition-transform duration-1500 delay-200"></div>
                          
                          <svg className="w-24 h-24 text-white relative z-10 drop-shadow-lg" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.891 3.488"/>
                          </svg>
                        </div>
                        
                        {/* Multiple animated rings */}
                        <div className="absolute inset-0 border-4 border-green-400/30 rounded-full animate-ping"></div>
                        <div className="absolute inset-0 border-2 border-green-400/50 rounded-full animate-pulse"></div>
                        <div className="absolute -inset-4 border border-green-300/20 rounded-full animate-ping delay-500"></div>
                      </div>
                    </div>
                    
                    {/* Premium bottom section */}
                    <div className="mt-8 text-center space-y-4">
                      <div className="flex items-center justify-center gap-3">
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                        <p className="text-lg font-bold text-card-foreground">Conecte-se agora via WhatsApp</p>
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse delay-500"></div>
                      </div>
                      <div className="w-24 h-1 bg-gradient-to-r from-primary via-accent to-primary rounded-full mx-auto animate-gradient-shift"></div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Premium Benefits Showcase */}
        <section className="py-24 md:py-32 relative overflow-hidden">
          {/* Ultra premium background */}
          <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/5 to-background"></div>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(255,102,0,0.03)_0%,_transparent_70%)]"></div>
          
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <AnimatedSection className="text-center mb-20">
              <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full glass-ultra border border-primary/20 mb-8">
                <Gem className="w-5 h-5 text-primary animate-pulse" />
                <span className="text-primary font-bold text-sm tracking-wide">DIFERENCIAIS EXCLUSIVOS</span>
              </div>
              
              <h2 className="text-5xl md:text-6xl font-black mb-8 text-foreground">
                Por que somos{' '}
                <span className="gradient-luxury bg-clip-text text-transparent animate-gradient-shift">únicos</span>
              </h2>
              <p className="text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Tecnologia revolucionária que transforma sua experiência móvel
              </p>
            </AnimatedSection>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: InfinityIcon,
                  title: "Dados Eternos",
                  description: "Seus dados nunca mais expiram. Acumule infinitamente e use quando quiser.",
                  color: "from-blue-500 to-cyan-500",
                  bgColor: "from-blue-500/10 to-cyan-500/10"
                },
                {
                  icon: Rocket,
                  title: "Velocidade 5G",
                  description: "Internet ultra-rápida com cobertura nacional e tecnologia de ponta.",
                  color: "from-purple-500 to-pink-500",
                  bgColor: "from-purple-500/10 to-pink-500/10"
                },
                {
                  icon: Shield,
                  title: "Proteção Total",
                  description: "Sem taxas ocultas, sem surpresas. Transparência total em todos os serviços.",
                  color: "from-green-500 to-emerald-500",
                  bgColor: "from-green-500/10 to-emerald-500/10"
                },
                {
                  icon: Crown,
                  title: "Suporte Real",
                  description: "Atendimento humanizado 24/7 com especialistas dedicados ao seu sucesso.",
                  color: "from-orange-500 to-red-500",
                  bgColor: "from-orange-500/10 to-red-500/10"
                }
              ].map((benefit, index) => (
                <AnimatedSection key={index} className={`delay-${index * 200}`} animation="fade-up">
                  <div className={`card-luxury p-8 rounded-3xl bg-gradient-to-br ${benefit.bgColor} border-2 border-primary/10 group hover-luxe relative overflow-hidden`}>
                    {/* Animated background overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${benefit.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                    
                    <div className="relative z-10">
                      <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${benefit.color} p-0.5 mb-6 group-hover:scale-110 transition-transform duration-300`}>
                        <div className="w-full h-full bg-background rounded-2xl flex items-center justify-center">
                          <benefit.icon className="w-10 h-10 text-primary" />
                        </div>
                      </div>
                      
                      <h3 className="text-2xl font-bold mb-4 text-card-foreground">{benefit.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
                      
                      <div className="mt-6 flex items-center gap-2 text-primary font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <span className="text-sm">Saiba mais</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section - Premium Dark Design */}
        <section className="py-20 md:py-32 bg-gradient-to-b from-foreground to-foreground/95 text-primary-foreground relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,_rgba(255,102,0,0.1)_0%,_transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,_rgba(255,102,0,0.05)_0%,_transparent_50%)]"></div>
          
          <div className="max-w-4xl mx-auto px-6 relative z-10">
            <AnimatedSection className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 text-primary mb-6">
                <FileText className="w-4 h-4" />
                <span className="text-sm font-medium">Dúvidas Frequentes</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary">
                Perguntas Frequentes
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Tire suas dúvidas sobre os planos de chips com dados acumulativos.
              </p>
            </AnimatedSection>

            <AnimatedSection>
              <Accordion type="single" collapsible className="space-y-4">
                <AccordionItem value="item-1" className="border border-border/20 rounded-xl bg-card/10 backdrop-blur-sm hover:bg-card/20 transition-all duration-300">
                  <AccordionTrigger className="px-6 py-5 text-left hover:no-underline rounded-t-xl [&[data-state=open]]:border-b [&[data-state=open]]:border-border/20">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center">
                        <DollarSign className="w-4 h-4 text-primary" />
                      </div>
                      <span className="text-lg font-semibold text-primary-foreground">
                        É necessário pagar alguma taxa para aderir ao plano?
                      </span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-5 text-muted-foreground text-base leading-relaxed">
                    Não, não cobramos nenhuma taxa de adesão. Você paga apenas a mensalidade do seu plano escolhido.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2" className="border border-border/20 rounded-xl bg-card/10 backdrop-blur-sm hover:bg-card/20 transition-all duration-300">
                  <AccordionTrigger className="px-6 py-5 text-left hover:no-underline rounded-t-xl [&[data-state=open]]:border-b [&[data-state=open]]:border-border/20">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center">
                        <Smartphone className="w-4 h-4 text-primary" />
                      </div>
                      <span className="text-lg font-semibold text-primary-foreground">
                        Como é feito a portabilidade do número?
                      </span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-5 text-muted-foreground text-base leading-relaxed">
                    A portabilidade é feita de forma simples e gratuita. Nossa equipe técnica te auxilia em todo o processo, que leva até 3 dias úteis para ser concluído.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3" className="border border-border/20 rounded-xl bg-card/10 backdrop-blur-sm hover:bg-card/20 transition-all duration-300">
                  <AccordionTrigger className="px-6 py-5 text-left hover:no-underline rounded-t-xl [&[data-state=open]]:border-b [&[data-state=open]]:border-border/20">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center">
                        <Clock className="w-4 h-4 text-primary" />
                      </div>
                      <span className="text-lg font-semibold text-primary-foreground">
                        Como é feita a renovação do plano?
                      </span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-5 text-muted-foreground text-base leading-relaxed">
                    A renovação é automática todo mês na data de vencimento do seu plano. Os dados não utilizados são automaticamente transferidos para o próximo ciclo.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4" className="border border-border/20 rounded-xl bg-card/10 backdrop-blur-sm hover:bg-card/20 transition-all duration-300">
                  <AccordionTrigger className="px-6 py-5 text-left hover:no-underline rounded-t-xl [&[data-state=open]]:border-b [&[data-state=open]]:border-border/20">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center">
                        <Lock className="w-4 h-4 text-primary" />
                      </div>
                      <span className="text-lg font-semibold text-primary-foreground">
                        Posso cancelar meu plano a qualquer momento?
                      </span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-5 text-muted-foreground text-base leading-relaxed">
                    Sim, você pode cancelar seu plano a qualquer momento sem taxa de cancelamento. O cancelamento é efetivado no final do período já pago.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-5" className="border border-border/20 rounded-xl bg-card/10 backdrop-blur-sm hover:bg-card/20 transition-all duration-300">
                  <AccordionTrigger className="px-6 py-5 text-left hover:no-underline rounded-t-xl [&[data-state=open]]:border-b [&[data-state=open]]:border-border/20">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center">
                        <InfinityIcon className="w-4 h-4 text-primary" />
                      </div>
                      <span className="text-lg font-semibold text-primary-foreground">
                        Como funciona o acúmulo de dados?
                      </span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-5 text-muted-foreground text-base leading-relaxed">
                    Nossa tecnologia exclusiva permite que todos os dados não utilizados no mês sejam automaticamente transferidos para o próximo período, sem limite de acúmulo.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </AnimatedSection>
          </div>
        </section>

        {/* Ultra Premium Plans Section */}
        <section className="py-32 md:py-40 bg-gradient-to-b from-background via-secondary/10 to-background relative overflow-hidden">
          {/* Ultra premium background elements */}
          <div className="absolute inset-0">
            <div className="absolute top-0 left-1/4 w-80 h-80 gradient-luxury rounded-full blur-3xl opacity-20 animate-gradient-shift"></div>
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-br from-accent/15 to-primary/15 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute top-1/2 left-0 w-64 h-64 bg-primary/10 rounded-full blur-2xl -translate-x-1/2 animate-float"></div>
            <div className="absolute top-1/3 right-0 w-72 h-72 bg-accent/10 rounded-full blur-2xl translate-x-1/2 animate-float delay-1000"></div>
          </div>
          
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <AnimatedSection className="text-center mb-24">
              <div className="inline-flex items-center gap-3 px-8 py-4 rounded-full glass-ultra border border-primary/30 mb-10">
                <Crown className="w-6 h-6 text-primary animate-pulse" />
                <span className="text-primary font-bold text-sm tracking-wide">PLANOS EXCLUSIVOS</span>
                <Sparkles className="w-6 h-6 text-accent animate-pulse delay-500" />
              </div>
              
              <h2 className="text-6xl md:text-7xl font-black mb-10 text-foreground leading-tight">
                Planos que{' '}
                <span className="gradient-luxury bg-clip-text text-transparent animate-gradient-shift text-shadow-elegant">
                  revolucionam
                </span>
              </h2>
              <p className="text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                Cada plano foi desenvolvido com tecnologia premium para oferecer a melhor experiência móvel do mercado
              </p>
            </AnimatedSection>

            <div className="grid gap-12 lg:grid-cols-3 max-w-7xl mx-auto">
              {plans.map((plan, index) => (
                <AnimatedSection key={plan.id} className={`delay-${index * 300}`} animation="scale-in">
                  <div className={`relative group hover-luxe ${
                    plan.best ? 'transform scale-105' : ''
                  }`}>
                    {/* Premium glow effect for best plan */}
                    {plan.best && (
                      <div className="absolute -inset-4 bg-gradient-to-r from-primary/30 via-accent/30 to-primary/30 rounded-4xl blur-xl opacity-75 animate-pulse"></div>
                    )}
                    
                    <Card className={`relative card-luxury p-10 rounded-4xl border-3 transition-all duration-700 ${
                      plan.best 
                        ? "border-primary/50 bg-gradient-to-br from-primary/10 via-background to-accent/10 shadow-2xl" 
                        : "border-primary/20 bg-gradient-to-br from-card/80 to-secondary/30 hover:border-primary/40"
                    }`}>
                      
                      {/* Premium badge for best plan */}
                      {plan.best && (
                        <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 z-20">
                          <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-full blur animate-pulse"></div>
                            <div className="relative bg-gradient-to-r from-primary to-accent text-primary-foreground px-8 py-3 rounded-full font-black text-sm shadow-2xl">
                              <div className="flex items-center gap-3">
                                <Trophy className="w-5 h-5" />
                                <span className="tracking-wide">MAIS POPULAR</span>
                                <Crown className="w-5 h-5" />
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                      
                      <div className="text-center relative z-10">
                        {/* Premium icon section */}
                        <div className="mb-10">
                          <div className={`relative w-28 h-28 mx-auto rounded-3xl mb-8 ${
                            plan.best 
                              ? "bg-gradient-to-br from-primary to-accent shadow-2xl" 
                              : "bg-gradient-to-br from-secondary to-muted group-hover:from-primary/20 group-hover:to-accent/20"
                          } transition-all duration-500 group-hover:scale-110`}>
                            {/* Multiple shine effects */}
                            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 rounded-3xl"></div>
                            <div className="absolute inset-0 bg-gradient-to-bl from-transparent via-white/10 to-transparent translate-x-full group-hover:-translate-x-full transition-transform duration-1500 delay-200 rounded-3xl"></div>
                            
                            <div className="w-full h-full flex items-center justify-center relative z-10">
                              <plan.icon className={`w-14 h-14 ${
                                plan.best ? "text-white drop-shadow-lg" : "text-primary group-hover:text-primary"
                              } transition-all duration-300`} />
                            </div>
                            
                            {plan.best && (
                              <>
                                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary to-accent animate-pulse opacity-30"></div>
                                <div className="absolute -inset-2 border-2 border-primary/30 rounded-3xl animate-ping"></div>
                              </>
                            )}
                          </div>
                          
                          <h3 className="text-3xl font-black mb-4 text-card-foreground">{plan.title}</h3>
                          <div className={`text-7xl font-black mb-3 ${
                            plan.best 
                              ? "gradient-luxury bg-clip-text text-transparent animate-gradient-shift" 
                              : "text-primary"
                          }`}>
                            {plan.data}
                          </div>
                          <div className="flex items-center justify-center gap-2 text-2xl font-bold text-muted-foreground">
                            <span>{plan.price}</span>
                            <span className="text-lg opacity-70">{plan.period}</span>
                          </div>
                        </div>

                        {/* Premium features list */}
                        <div className="space-y-4 mb-10">
                          {plan.features.map((feature, idx) => (
                            <div key={idx} className={`flex items-center gap-4 p-4 rounded-2xl transition-all duration-300 ${
                              plan.best 
                                ? "bg-primary/10 border border-primary/20 hover:bg-primary/15" 
                                : "bg-secondary/50 hover:bg-secondary/80 hover:border-primary/30 border border-transparent"
                            }`}>
                              <div className={`relative w-10 h-10 rounded-xl flex items-center justify-center ${
                                plan.best ? "bg-primary/20" : "bg-primary/10 group-hover:bg-primary/20"
                              } transition-colors duration-300`}>
                                {/* Feature-specific icons */}
                                {feature.includes('acumulativos') && <InfinityIcon className="w-5 h-5 text-primary" />}
                                {feature.includes('Nacional') && <Globe className="w-5 h-5 text-primary" />}
                                {feature.includes('Suporte') && <Headphones className="w-5 h-5 text-primary" />}
                                {feature.includes('fidelidade') && <Shield className="w-5 h-5 text-primary" />}
                                {feature.includes('App') && <Smartphone className="w-5 h-5 text-primary" />}
                                {feature.includes('Backup') && <Lock className="w-5 h-5 text-primary" />}
                                {feature.includes('Roaming') && <Wifi className="w-5 h-5 text-primary" />}
                                
                                {/* Glow effect */}
                                <div className="absolute inset-0 bg-primary/20 rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                              </div>
                              <span className="text-card-foreground font-semibold text-lg flex-1 text-left">{feature}</span>
                            </div>
                          ))}
                        </div>

                        {/* Ultra Premium CTA Button */}
                        <a href={waUrl} target="_blank" rel="noreferrer" className="block group">
                          <Button className={`w-full py-6 rounded-2xl font-black text-xl transition-all duration-500 shadow-2xl relative overflow-hidden ${
                            plan.best 
                              ? "btn-luxury hover:shadow-primary/30" 
                              : "bg-gradient-to-r from-secondary to-muted hover:from-primary hover:to-accent text-card-foreground hover:text-primary-foreground hover:shadow-accent/20"
                          }`}>
                            {/* Animated background overlay */}
                            <div className={`absolute inset-0 bg-gradient-to-r transition-opacity duration-500 ${
                              plan.best 
                                ? "from-primary via-accent to-primary bg-[length:200%_100%] animate-gradient-shift opacity-100" 
                                : "from-primary to-accent opacity-0 group-hover:opacity-100"
                            }`}></div>
                            
                            <div className="flex items-center justify-center gap-3 relative z-10">
                              {plan.best ? <Crown className="w-6 h-6" /> : <Target className="w-6 h-6" />}
                              <span>Escolher {plan.title}</span>
                              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />
                            </div>
                          </Button>
                        </a>
                        
                        {/* Premium guarantee text */}
                        <p className="text-sm text-muted-foreground mt-6 flex items-center justify-center gap-2">
                          <Shield className="w-4 h-4" />
                          <span>Garantia de satisfação de 30 dias</span>
                        </p>
                      </div>
                    </Card>
                  </div>
                </AnimatedSection>
              ))}
            </div>
            
            {/* Premium call-to-action section */}
            <AnimatedSection className="text-center mt-20" animation="fade-up">
              <div className="relative inline-block">
                <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-accent/20 rounded-2xl blur-xl opacity-75 animate-pulse"></div>
                <div className="relative glass-ultra p-8 rounded-2xl border border-primary/30">
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                    <div className="text-left">
                      <h3 className="text-2xl font-bold text-card-foreground mb-2">Ainda com dúvidas?</h3>
                      <p className="text-muted-foreground">Fale com nossos especialistas e descubra o plano ideal para você</p>
                    </div>
                    <a href={waUrl} target="_blank" rel="noreferrer" className="group">
                      <Button className="btn-luxury px-8 py-4 rounded-xl font-bold text-lg flex items-center gap-3 shadow-2xl hover:shadow-primary/25">
                        <MessageCircle className="w-5 h-5" />
                        <span>Falar com especialista</span>
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                      </Button>
                    </a>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>

      </main>
    </>
  );
};

export default Chips;
