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
  MessageCircle,
  Layers,
  Cpu,
  Database,
  Settings
} from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useState, useEffect } from "react";

const WHATSAPP_PHONE = "5589994395789";
const WHATSAPP_MSG = "Olá! Quero pedir meu Chip com dados acumulativos.";

const Chips = () => {
  const canonical = typeof window !== "undefined" ? `${window.location.origin}/chips` : "/chips";
  const waUrl = `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(WHATSAPP_MSG)}`;
  
  const plans = [
    { 
      id: "p1", 
      title: "Essential", 
      data: "5 GB", 
      price: "R$ 29,90", 
      period: "/mês",
      best: false,
      icon: Rocket,
      color: "from-cyan-500 to-blue-500",
      features: ["Dados infinitos", "4G Nacional", "Suporte 24/7", "Sem fidelidade"]
    },
    { 
      id: "p2", 
      title: "Premium", 
      data: "15 GB", 
      price: "R$ 49,90", 
      period: "/mês",
      best: true,
      icon: Crown,
      color: "from-orange-500 to-pink-500",
      features: ["Dados infinitos", "5G Nacional", "Suporte prioritário", "Sem fidelidade", "Roaming"]
    },
    { 
      id: "p3", 
      title: "Ultimate", 
      data: "30 GB", 
      price: "R$ 79,90", 
      period: "/mês",
      best: false,
      icon: Diamond,
      color: "from-purple-500 to-indigo-500",
      features: ["Dados infinitos", "5G+ Nacional", "Suporte VIP", "Sem fidelidade", "Roaming", "Backup cloud"]
    },
  ];

  return (
    <>
      <Helmet>
        <title>Chips SaraivaNet – Revolução em dados acumulativos | Internet móvel premium</title>
        <meta name="description" content="Descubra a revolução em internet móvel: chips SaraivaNet com dados acumulativos ilimitados, cobertura 5G nacional e tecnologia premium. Nunca perca seus dados novamente!" />
        <link rel="canonical" href={canonical} />
      </Helmet>

      <main className="min-h-screen bg-slate-950 overflow-hidden">
        {/* Elegant Dark Hero Section */}
        <section className="relative py-24 md:py-40 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 overflow-hidden">
          {/* Subtle Background Elements */}
          <div className="absolute inset-0">
            {/* Single elegant gradient */}
            <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-gradient-to-r from-slate-800/20 to-slate-700/10 rounded-full blur-3xl"></div>
            
            {/* Minimal grid */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:80px_80px]"></div>
          </div>

          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="grid lg:grid-cols-2 gap-20 items-center">
              {/* Modern Left Content */}
              <AnimatedSection className="space-y-10">
                {/* Elegant Badge */}
                <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-slate-800/50 border border-slate-700 backdrop-blur-sm">
                  <div className="w-2 h-2 bg-slate-400 rounded-full"></div>
                  <span className="text-slate-300 font-medium text-sm tracking-wide">CONECTIVIDADE PREMIUM</span>
                </div>

                {/* Clean Hero Title */}
                <div className="space-y-8">
                  <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold leading-[0.9] text-balance">
                    <span className="block text-white mb-4">
                      Dados que
                    </span>
                    <span className="block text-slate-400">
                      nunca acabam
                    </span>
                  </h1>
                  
                  <p className="text-xl md:text-2xl text-slate-400 leading-relaxed max-w-2xl">
                    Tecnologia premium que revoluciona sua conectividade.
                    <span className="text-white font-semibold block mt-2">
                      Acumule dados infinitamente.
                    </span>
                  </p>
                </div>

                {/* Clean Feature Pills */}
                <div className="flex flex-wrap gap-4 py-8">
                  {[
                    { text: "Ativação 24h", icon: Clock },
                    { text: "Dados infinitos", icon: InfinityIcon },
                    { text: "Sem surpresas", icon: Shield },
                    { text: "5G nacional", icon: Wifi }
                  ].map((pill, idx) => (
                    <div key={idx} className="flex items-center gap-3 px-6 py-3 rounded-full bg-slate-800/60 border border-slate-700 hover:bg-slate-800 transition-all duration-300">
                      <pill.icon className="w-4 h-4 text-slate-400" />
                      <span className="text-slate-300 font-medium text-sm">{pill.text}</span>
                    </div>
                  ))}
                </div>

                {/* Clean CTAs */}
                <div className="flex flex-col sm:flex-row gap-6 pt-8">
                  <a href={waUrl} target="_blank" rel="noreferrer" className="group">
                    <button className="bg-white text-slate-900 px-12 py-4 rounded-2xl font-semibold text-lg hover:bg-slate-100 transition-all duration-300 shadow-lg">
                      <div className="flex items-center gap-3">
                        <MessageCircle className="w-5 h-5" />
                        <span>Falar no WhatsApp</span>
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                      </div>
                    </button>
                  </a>
                  
                  <Link to="/" className="group">
                    <button className="px-12 py-4 rounded-2xl font-semibold text-lg text-white border border-slate-700 bg-slate-800/50 hover:bg-slate-800 transition-all duration-300">
                      <div className="flex items-center gap-3">
                        <Globe className="w-5 h-5" />
                        <span>Ver cobertura</span>
                      </div>
                    </button>
                  </Link>
                </div>
              </AnimatedSection>

              {/* Modern Phone Mockup */}
              <AnimatedSection className="relative" animation="scale-in">
                <div className="relative">
                  {/* Glow effects */}
                  <div className="absolute -inset-8 bg-gradient-to-r from-orange-500/20 to-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>
                  
                  {/* Phone Container */}
                  <div className="relative bg-gradient-to-b from-slate-800 to-slate-900 p-8 rounded-3xl border border-white/10 backdrop-blur-sm shadow-2xl">
                    <div className="relative w-full h-96 bg-gradient-to-br from-slate-700 to-slate-800 rounded-2xl flex items-center justify-center overflow-hidden border border-white/10">
                      {/* Animated background */}
                      <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 via-pink-500/10 to-cyan-500/10 animate-gradient-shift"></div>
                      
                      {/* WhatsApp Icon - Modern Style */}
                      <div className="relative group">
                        <div className="w-40 h-40 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center shadow-2xl relative overflow-hidden hover:scale-110 transition-all duration-500">
                          {/* Shine effect */}
                          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                          
                          <svg className="w-20 h-20 text-white relative z-10" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.891 3.488"/>
                          </svg>
                        </div>
                        
                        {/* Pulse rings */}
                        <div className="absolute inset-0 border-4 border-green-400/30 rounded-full animate-ping"></div>
                        <div className="absolute inset-0 border-2 border-green-400/50 rounded-full animate-pulse"></div>
                      </div>
                    </div>
                    
                    {/* Bottom text */}
                    <div className="mt-8 text-center">
                      <div className="flex items-center justify-center gap-3 mb-4">
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                        <p className="text-white font-bold text-lg">Conecte-se agora</p>
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse delay-500"></div>
                      </div>
                      <div className="w-32 h-1 bg-gradient-to-r from-orange-400 via-pink-400 to-cyan-400 rounded-full mx-auto"></div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Elegant Plans Section */}
        <section className="py-32 md:py-40 bg-slate-950 relative">
          {/* Minimal background */}
          <div className="absolute inset-0">
            <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-slate-900/30 rounded-full blur-3xl"></div>
          </div>
          
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <AnimatedSection className="text-center mb-24">
              <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-slate-800/50 border border-slate-700 mb-10">
                <Crown className="w-5 h-5 text-slate-400" />
                <span className="text-slate-300 font-medium text-sm tracking-wide">PLANOS PREMIUM</span>
              </div>
              
              <h2 className="text-5xl md:text-6xl font-bold mb-10 text-white leading-tight">
                Escolha seu <span className="text-slate-400">plano</span>
              </h2>
              <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
                Planos desenvolvidos com tecnologia de ponta para uma experiência móvel única
              </p>
            </AnimatedSection>

            <div className="grid gap-12 lg:grid-cols-3 max-w-7xl mx-auto">
              {plans.map((plan, index) => (
                <AnimatedSection key={plan.id} className={`delay-${index * 300}`} animation="scale-in">
                  <div className={`relative group ${plan.best ? 'transform scale-105' : ''}`}>
                    {/* Glow effect for best plan */}
                    {plan.best && (
                      <div className="absolute -inset-6 bg-gradient-to-r from-orange-500/30 via-pink-500/30 to-cyan-500/30 rounded-3xl blur-2xl opacity-75 animate-pulse"></div>
                    )}
                    
                    <Card className={`relative bg-gradient-to-b from-slate-800 to-slate-900 p-10 rounded-3xl border-2 transition-all duration-700 hover:scale-105 hover:shadow-2xl ${
                      plan.best 
                        ? "border-orange-500/50 shadow-orange-500/20" 
                        : "border-white/10 hover:border-white/30"
                    }`}>
                      
                      {/* Premium badge for best plan */}
                      {plan.best && (
                        <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 z-20">
                          <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-pink-500 rounded-full blur animate-pulse"></div>
                            <div className="relative bg-gradient-to-r from-orange-500 to-pink-500 text-white px-8 py-3 rounded-full font-black text-sm shadow-2xl">
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
                          <div className={`relative w-28 h-28 mx-auto rounded-3xl mb-8 bg-gradient-to-br ${plan.color} shadow-2xl transition-all duration-500 group-hover:scale-110`}>
                            <div className="w-full h-full flex items-center justify-center relative z-10">
                              <plan.icon className="w-14 h-14 text-white drop-shadow-lg" />
                            </div>
                            
                            {plan.best && (
                              <div className="absolute -inset-2 border-2 border-orange-400/30 rounded-3xl animate-ping"></div>
                            )}
                          </div>
                          
                          <h3 className="text-3xl font-black mb-4 text-white">{plan.title}</h3>
                          <div className={`text-7xl font-black mb-3 ${
                            plan.best 
                              ? "bg-gradient-to-r from-orange-400 to-pink-400 bg-clip-text text-transparent" 
                              : "text-white"
                          }`}>
                            {plan.data}
                          </div>
                          <div className="flex items-center justify-center gap-2 text-2xl font-bold text-slate-300">
                            <span>{plan.price}</span>
                            <span className="text-lg opacity-70">{plan.period}</span>
                          </div>
                        </div>

                        {/* Premium features list */}
                        <div className="space-y-4 mb-10">
                          {plan.features.map((feature, idx) => (
                            <div key={idx} className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300">
                              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-green-400/20 to-green-500/20 flex items-center justify-center flex-shrink-0">
                                <CheckCircle className="w-5 h-5 text-green-400" />
                              </div>
                              <span className="text-white font-semibold text-lg flex-1 text-left">{feature}</span>
                            </div>
                          ))}
                        </div>

                        {/* Ultra Premium CTA Button */}
                        <a href={waUrl} target="_blank" rel="noreferrer" className="block group">
                          <button className={`w-full py-6 rounded-2xl font-black text-xl transition-all duration-500 shadow-2xl relative overflow-hidden ${
                            plan.best 
                              ? "bg-gradient-to-r from-orange-500 to-pink-500 text-white hover:shadow-orange-500/30" 
                              : "bg-gradient-to-r from-slate-700 to-slate-600 text-white hover:from-white/20 hover:to-white/10"
                          }`}>
                            <div className="flex items-center justify-center gap-3 relative z-10">
                              {plan.best ? <Crown className="w-6 h-6" /> : <Target className="w-6 h-6" />}
                              <span>Escolher {plan.title}</span>
                              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />
                            </div>
                          </button>
                        </a>
                      </div>
                    </Card>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Modern CTA Section */}
        <section className="py-40 md:py-52 relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
          {/* Ultra Premium Background */}
          <div className="absolute inset-0">
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-orange-500/30 to-pink-500/30 rounded-full blur-3xl animate-float" style={{animationDuration: '20s'}}></div>
            <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-gradient-to-r from-cyan-500/30 to-purple-500/30 rounded-full blur-3xl animate-float" style={{animationDuration: '25s', animationDelay: '3s'}}></div>
          </div>

          <div className="max-w-6xl mx-auto px-6 relative z-10">
            <AnimatedSection className="text-center" animation="scale-in">
              <div className="relative">
                <div className="absolute -inset-12 bg-gradient-to-r from-orange-500/30 via-pink-500/30 to-cyan-500/30 rounded-full blur-3xl opacity-50 animate-pulse"></div>
                
                <div className="relative space-y-12">
                  {/* Premium badge */}
                  <div className="inline-flex items-center gap-4 px-10 py-5 rounded-full bg-white/10 border-2 border-white/20 backdrop-blur-sm shadow-2xl">
                    <Crown className="w-8 h-8 text-orange-400 animate-pulse" />
                    <span className="text-white font-black text-lg tracking-wide">SEJA PARTE DA REVOLUÇÃO</span>
                    <Sparkles className="w-8 h-8 text-cyan-400 animate-pulse delay-500" />
                  </div>

                  {/* Hero title */}
                  <div className="space-y-8">
                    <h2 className="text-7xl md:text-8xl lg:text-9xl font-black leading-[0.85] text-balance">
                      <span className="block text-white mb-4">Pronto para</span>
                      <span className="block bg-gradient-to-r from-orange-400 via-pink-500 to-cyan-400 bg-clip-text text-transparent">
                        revolucionar?
                      </span>
                    </h2>
                    
                    <p className="text-3xl md:text-4xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
                      Junte-se a milhares que já descobriram o futuro da conectividade móvel
                    </p>
                  </div>

                  {/* Ultra Premium CTA */}
                  <div className="pt-8">
                    <a href={waUrl} target="_blank" rel="noreferrer" className="group inline-block">
                      <button className="relative overflow-hidden bg-gradient-to-r from-orange-500 via-pink-500 to-cyan-500 bg-[length:200%_100%] hover:bg-[length:100%_100%] px-16 py-8 rounded-3xl font-black text-2xl md:text-3xl text-white shadow-2xl hover:shadow-orange-500/30 transition-all duration-500 hover:scale-110">
                        <div className="flex items-center gap-6">
                          <div className="relative">
                            <MessageCircle className="w-10 h-10" />
                            <div className="absolute -inset-2 border-2 border-white/30 rounded-full animate-ping"></div>
                          </div>
                          <span>Começar agora</span>
                          <ArrowRight className="w-10 h-10 group-hover:translate-x-2 transition-transform duration-300" />
                        </div>
                      </button>
                    </a>
                  </div>

                  {/* Premium guarantee badges */}
                  <div className="grid md:grid-cols-3 gap-8 pt-16 max-w-4xl mx-auto">
                    {[
                      { icon: Shield, title: "Garantia Total", desc: "30 dias para testar" },
                      { icon: Award, title: "Qualidade Premium", desc: "Tecnologia certificada" },
                      { icon: HeartHandshake, title: "Suporte Dedicado", desc: "Atendimento 24/7" }
                    ].map((guarantee, index) => (
                      <div key={index} className="flex items-center gap-4 p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 group">
                        <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-orange-500/20 to-pink-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <guarantee.icon className="w-7 h-7 text-orange-400" />
                        </div>
                        <div className="text-left">
                          <h4 className="font-bold text-white">{guarantee.title}</h4>
                          <p className="text-sm text-slate-300">{guarantee.desc}</p>
                        </div>
                      </div>
                    ))}
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