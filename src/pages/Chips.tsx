import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Smartphone, Infinity as InfinityIcon, ArrowRight, CheckCircle, Shield, CreditCard, FileText, Star, Zap, Award, Users, Trophy, Wifi, Lock, Clock, DollarSign } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const WHATSAPP_PHONE = "5589994395789";
const WHATSAPP_MSG = "Olá! Quero pedir meu Chip com dados acumulativos.";

const Chips = () => {
  const canonical = typeof window !== "undefined" ? `${window.location.origin}/chips` : "/chips";
  const waUrl = `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(WHATSAPP_MSG)}`;

  const plans = [
    { id: "p1", title: "Plano Start", data: "5 GB", price: "R$ 29,90/mês", best: false },
    { id: "p2", title: "Plano Plus", data: "10 GB", price: "R$ 49,90/mês", best: true },
    { id: "p3", title: "Plano Pro", data: "20 GB", price: "R$ 79,90/mês", best: false },
  ];

  return (
    <>
      <Helmet>
        <title>Chips SaraivaNet – Dados acumulativos e internet móvel</title>
        <meta name="description" content="Peça seu chip SaraivaNet: internet móvel com dados acumulativos mês a mês, planos flexíveis e suporte local." />
        <link rel="canonical" href={canonical} />
      </Helmet>

      <main className="min-h-screen bg-black">
        {/* Premium Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black text-white">
          {/* Advanced Background Effects */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-br from-slate-900/50 via-black to-blue-900/50"></div>
            <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[120px] animate-pulse"></div>
            <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-[120px] animate-pulse delay-1000"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-gradient-radial from-cyan-500/5 via-blue-500/5 to-transparent rounded-full"></div>
            
            {/* Animated Grid Pattern */}
            <div className="absolute inset-0 opacity-[0.02]">
              <div className="w-full h-full" style={{
                backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
                backgroundSize: '50px 50px'
              }}></div>
            </div>
          </div>

          <div className="relative w-full max-w-7xl mx-auto px-6 py-20">
            <div className="grid lg:grid-cols-12 gap-8 items-center">
              
              {/* Left Premium Card */}
              <div className="lg:col-span-3 hidden lg:block">
                <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-2xl blur-lg opacity-20 group-hover:opacity-40 transition-all duration-700"></div>
                  <Card className="relative bg-gradient-to-br from-slate-900/90 via-slate-800/90 to-slate-900/90 backdrop-blur-xl border border-slate-700/50 text-white p-8 rounded-2xl hover:border-blue-500/50 transition-all duration-500 group-hover:transform group-hover:scale-[1.02]">
                    <div className="absolute top-4 right-4">
                      <Lock className="h-5 w-5 text-blue-400 opacity-60" />
                    </div>
                    <div className="flex items-center gap-4 mb-6">
                      <div className="relative">
                        <div className="absolute inset-0 bg-blue-500 rounded-xl blur-md opacity-50"></div>
                        <div className="relative bg-gradient-to-br from-blue-500 to-blue-600 p-3 rounded-xl shadow-lg">
                          <Shield className="h-6 w-6 text-white" />
                        </div>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">Máxima Segurança</h3>
                        <p className="text-slate-400 text-sm">Criptografia militar</p>
                      </div>
                    </div>
                    <p className="text-slate-300 leading-relaxed text-sm">
                      Proteção de dados com tecnologia blockchain e criptografia AES-256. Seus dados estão sempre seguros.
                    </p>
                    <div className="mt-6 h-1 w-0 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 group-hover:w-full transition-all duration-1000 rounded-full"></div>
                  </Card>
                </div>
              </div>

              {/* Center Hero Content */}
              <div className="lg:col-span-6 text-center space-y-8">
                {/* Premium Badge */}
                <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full border border-blue-500/30 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-blue-500/10 backdrop-blur-sm">
                  <div className="relative">
                    <div className="absolute inset-0 bg-blue-400 rounded-full blur-sm opacity-50 animate-pulse"></div>
                    <div className="relative w-2 h-2 bg-blue-400 rounded-full"></div>
                  </div>
                  <span className="text-sm font-semibold bg-gradient-to-r from-blue-300 via-purple-300 to-blue-300 bg-clip-text text-transparent">
                    DADOS ACUMULATIVOS INFINITOS
                  </span>
                  <InfinityIcon className="h-4 w-4 text-blue-400" />
                </div>

                {/* Main Title */}
                <div className="space-y-4">
                  <h1 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tight leading-none">
                    <span className="block bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
                      CHIPS
                    </span>
                    <span className="block bg-gradient-to-r from-blue-400 via-purple-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent animate-pulse">
                      PREMIUM
                    </span>
                  </h1>
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/20 to-transparent h-px blur-sm"></div>
                    <div className="h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>
                  </div>
                </div>

                {/* Subtitle */}
                <p className="text-xl md:text-2xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
                  A revolução em conectividade móvel. Dados que 
                  <span className="font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent"> nunca expiram</span>, 
                  velocidade <span className="font-bold text-white">5G</span> e cobertura nacional.
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 items-center justify-center pt-4">
                  <a href={waUrl} target="_blank" rel="noreferrer">
                    <div className="relative group">
                      <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-2xl blur-lg opacity-50 group-hover:opacity-100 transition-all duration-500"></div>
                      <Button className="relative bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 hover:from-blue-500 hover:via-purple-500 hover:to-blue-500 text-white font-bold px-12 py-6 text-lg rounded-2xl border-0 shadow-2xl group-hover:scale-105 transition-all duration-300">
                        <span className="flex items-center gap-3">
                          <Zap className="h-6 w-6" />
                          PEDIR AGORA
                          <ArrowRight className="h-6 w-6 group-hover:translate-x-1 transition-transform" />
                        </span>
                      </Button>
                    </div>
                  </a>
                  <Link to="/">
                    <Button variant="outline" className="border-2 border-slate-600 text-slate-300 hover:bg-slate-800 hover:text-white hover:border-slate-500 px-8 py-6 text-lg rounded-2xl font-semibold transition-all duration-300">
                      ← Voltar
                    </Button>
                  </Link>
                </div>

                {/* Stats Row */}
                <div className="grid grid-cols-3 gap-8 pt-12 max-w-lg mx-auto">
                  <div className="text-center">
                    <div className="text-3xl font-black bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">99%</div>
                    <div className="text-slate-400 text-sm font-medium">Cobertura</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-black bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">24/7</div>
                    <div className="text-slate-400 text-sm font-medium">Suporte</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-black bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">∞</div>
                    <div className="text-slate-400 text-sm font-medium">Dados</div>
                  </div>
                </div>
              </div>

              {/* Right Premium Card */}
              <div className="lg:col-span-3 hidden lg:block">
                <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-green-500 via-emerald-500 to-teal-500 rounded-2xl blur-lg opacity-20 group-hover:opacity-40 transition-all duration-700"></div>
                  <Card className="relative bg-gradient-to-br from-slate-900/90 via-slate-800/90 to-slate-900/90 backdrop-blur-xl border border-slate-700/50 text-white p-8 rounded-2xl hover:border-green-500/50 transition-all duration-500 group-hover:transform group-hover:scale-[1.02]">
                    <div className="absolute top-4 right-4">
                      <Clock className="h-5 w-5 text-green-400 opacity-60" />
                    </div>
                    <div className="flex items-center gap-4 mb-6">
                      <div className="relative">
                        <div className="absolute inset-0 bg-green-500 rounded-xl blur-md opacity-50"></div>
                        <div className="relative bg-gradient-to-br from-green-500 to-emerald-600 p-3 rounded-xl shadow-lg">
                          <InfinityIcon className="h-6 w-6 text-white" />
                        </div>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold bg-gradient-to-r from-white to-green-200 bg-clip-text text-transparent">Dados Infinitos</h3>
                        <p className="text-slate-400 text-sm">Acumula para sempre</p>
                      </div>
                    </div>
                    <p className="text-slate-300 leading-relaxed text-sm">
                      Tecnologia exclusiva que acumula dados não utilizados indefinidamente. Nunca perca o que pagou.
                    </p>
                    <div className="mt-6 h-1 w-0 bg-gradient-to-r from-green-500 via-emerald-500 to-green-500 group-hover:w-full transition-all duration-1000 rounded-full"></div>
                  </Card>
                </div>
              </div>
            </div>

            {/* Mobile Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16 lg:hidden">
              <Card className="bg-gradient-to-br from-slate-900/90 to-slate-800/90 backdrop-blur-xl border border-slate-700/50 text-white p-6 rounded-xl hover:border-blue-500/50 transition-all duration-300">
                <div className="flex items-center gap-4">
                  <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-3 rounded-lg">
                    <Shield className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-white">Segurança Total</h3>
                    <p className="text-slate-400 text-sm">Proteção militar</p>
                  </div>
                </div>
              </Card>
              <Card className="bg-gradient-to-br from-slate-900/90 to-slate-800/90 backdrop-blur-xl border border-slate-700/50 text-white p-6 rounded-xl hover:border-green-500/50 transition-all duration-300">
                <div className="flex items-center gap-4">
                  <div className="bg-gradient-to-br from-green-500 to-emerald-600 p-3 rounded-lg">
                    <InfinityIcon className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-white">Dados Infinitos</h3>
                    <p className="text-slate-400 text-sm">Acumula para sempre</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Premium Coming Soon Banner */}
        <section className="relative bg-gradient-to-r from-yellow-400 via-amber-400 to-yellow-400 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse"></div>
          <div className="absolute inset-0">
            <div className="w-full h-full opacity-10" style={{
              backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 2px, rgba(0,0,0,0.1) 2px, rgba(0,0,0,0.1) 4px)`
            }}></div>
          </div>
          <div className="relative py-6 text-center">
            <div className="max-w-6xl mx-auto px-6">
              <div className="flex items-center justify-center gap-4 text-black">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-black rounded-full animate-bounce"></div>
                  <div className="w-3 h-3 bg-black rounded-full animate-bounce delay-100"></div>
                  <div className="w-3 h-3 bg-black rounded-full animate-bounce delay-200"></div>
                </div>
                <p className="font-black text-xl md:text-2xl tracking-wide">
                  🚀 EM BREVE: VELOCIDADE 5G + PLANOS ILIMITADOS ✨
                </p>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-black rounded-full animate-bounce delay-300"></div>
                  <div className="w-3 h-3 bg-black rounded-full animate-bounce delay-400"></div>
                  <div className="w-3 h-3 bg-black rounded-full animate-bounce delay-500"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Premium Why We're Different Section */}
        <section className="py-24 md:py-32 bg-gradient-to-br from-white via-slate-50 to-blue-50 relative overflow-hidden">
          {/* Background Elements */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-cyan-100/30 to-transparent rounded-full"></div>

          <div className="relative max-w-7xl mx-auto px-6">
            <AnimatedSection animation="fade-up">
              {/* Section Header */}
              <div className="text-center mb-20">
                <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-blue-100/80 to-purple-100/80 backdrop-blur-sm border border-blue-200/50 mb-8">
                  <Trophy className="h-5 w-5 text-blue-600" />
                  <span className="font-bold text-blue-700">POR QUE SOMOS LÍDERES</span>
                </div>
                
                <h2 className="text-5xl md:text-7xl font-black mb-8 leading-tight">
                  <span className="bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900 bg-clip-text text-transparent">
                    SOMOS
                  </span>
                  <br />
                  <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                    DIFERENTES
                  </span>
                </h2>
                
                <div className="max-w-3xl mx-auto">
                  <p className="text-2xl text-slate-600 leading-relaxed">
                    Tecnologia revolucionária, inovação constante e atendimento premium que supera todas as expectativas
                  </p>
                </div>
              </div>

              {/* Premium Cards Grid */}
              <div className="grid gap-8 md:gap-12 md:grid-cols-3">
                {/* Security Card */}
                <div className="group relative">
                  <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-blue-500/20 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
                  <Card className="relative bg-gradient-to-br from-white via-blue-50/50 to-white border-0 shadow-xl hover:shadow-2xl transition-all duration-500 group-hover:transform group-hover:scale-[1.02] rounded-2xl overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                    <div className="relative p-10 text-center">
                      {/* Icon Container */}
                      <div className="relative mb-8">
                        <div className="absolute inset-0 bg-blue-500 rounded-3xl blur-xl opacity-20 group-hover:opacity-40 transition-all duration-500"></div>
                        <div className="relative bg-gradient-to-br from-blue-500 via-blue-600 to-purple-600 p-6 w-24 h-24 mx-auto rounded-3xl shadow-2xl shadow-blue-500/25 group-hover:shadow-blue-500/50 group-hover:scale-110 transition-all duration-500">
                          <Shield className="h-12 w-12 text-white mx-auto" />
                        </div>
                      </div>
                      
                      <h3 className="text-3xl font-black mb-6 bg-gradient-to-r from-gray-900 to-blue-900 bg-clip-text text-transparent">
                        SEGURANÇA TOTAL
                      </h3>
                      
                      <p className="text-slate-600 text-lg leading-relaxed mb-8">
                        Proteção de dados com criptografia militar AES-256, blockchain e monitoramento 24/7. 
                        <span className="font-bold text-blue-600"> Seus dados nunca estiveram tão seguros.</span>
                      </p>
                      
                      <div className="space-y-3">
                        {['Criptografia AES-256', 'Blockchain Security', 'Monitoramento 24/7'].map((feature, idx) => (
                          <div key={idx} className="flex items-center gap-3 justify-center">
                            <CheckCircle className="h-5 w-5 text-blue-500" />
                            <span className="text-slate-700 font-medium">{feature}</span>
                          </div>
                        ))}
                      </div>
                      
                      <div className="mt-8 h-1 w-0 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 group-hover:w-full transition-all duration-1000 mx-auto rounded-full"></div>
                    </div>
                  </Card>
                </div>

                {/* Accumulative Card */}
                <div className="group relative">
                  <div className="absolute -inset-4 bg-gradient-to-r from-green-500/20 via-emerald-500/20 to-green-500/20 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
                  <Card className="relative bg-gradient-to-br from-white via-green-50/50 to-white border-0 shadow-xl hover:shadow-2xl transition-all duration-500 group-hover:transform group-hover:scale-[1.02] rounded-2xl overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 via-transparent to-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                    <div className="relative p-10 text-center">
                      {/* Icon Container */}
                      <div className="relative mb-8">
                        <div className="absolute inset-0 bg-green-500 rounded-3xl blur-xl opacity-20 group-hover:opacity-40 transition-all duration-500"></div>
                        <div className="relative bg-gradient-to-br from-green-500 via-emerald-600 to-teal-600 p-6 w-24 h-24 mx-auto rounded-3xl shadow-2xl shadow-green-500/25 group-hover:shadow-green-500/50 group-hover:scale-110 transition-all duration-500">
                          <InfinityIcon className="h-12 w-12 text-white mx-auto" />
                        </div>
                      </div>
                      
                      <h3 className="text-3xl font-black mb-6 bg-gradient-to-r from-gray-900 to-green-900 bg-clip-text text-transparent">
                        DADOS INFINITOS
                      </h3>
                      
                      <p className="text-slate-600 text-lg leading-relaxed mb-8">
                        Tecnologia exclusiva que acumula dados não utilizados indefinidamente. 
                        <span className="font-bold text-green-600"> Nunca perca o que investiu.</span>
                      </p>
                      
                      <div className="space-y-3">
                        {['Acúmulo Infinito', 'Sem Perda de Dados', 'Tecnologia Exclusiva'].map((feature, idx) => (
                          <div key={idx} className="flex items-center gap-3 justify-center">
                            <CheckCircle className="h-5 w-5 text-green-500" />
                            <span className="text-slate-700 font-medium">{feature}</span>
                          </div>
                        ))}
                      </div>
                      
                      <div className="mt-8 h-1 w-0 bg-gradient-to-r from-green-500 via-emerald-500 to-green-500 group-hover:w-full transition-all duration-1000 mx-auto rounded-full"></div>
                    </div>
                  </Card>
                </div>

                {/* Premium Support Card */}
                <div className="group relative">
                  <div className="absolute -inset-4 bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-purple-500/20 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
                  <Card className="relative bg-gradient-to-br from-white via-purple-50/50 to-white border-0 shadow-xl hover:shadow-2xl transition-all duration-500 group-hover:transform group-hover:scale-[1.02] rounded-2xl overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                    <div className="relative p-10 text-center">
                      {/* Icon Container */}
                      <div className="relative mb-8">
                        <div className="absolute inset-0 bg-purple-500 rounded-3xl blur-xl opacity-20 group-hover:opacity-40 transition-all duration-500"></div>
                        <div className="relative bg-gradient-to-br from-purple-500 via-pink-600 to-purple-600 p-6 w-24 h-24 mx-auto rounded-3xl shadow-2xl shadow-purple-500/25 group-hover:shadow-purple-500/50 group-hover:scale-110 transition-all duration-500">
                          <Users className="h-12 w-12 text-white mx-auto" />
                        </div>
                      </div>
                      
                      <h3 className="text-3xl font-black mb-6 bg-gradient-to-r from-gray-900 to-purple-900 bg-clip-text text-transparent">
                        SUPORTE PREMIUM
                      </h3>
                      
                      <p className="text-slate-600 text-lg leading-relaxed mb-8">
                        Atendimento especializado 24/7 com técnicos certificados e tempos de resposta ultra-rápidos. 
                        <span className="font-bold text-purple-600"> Experiência VIP garantida.</span>
                      </p>
                      
                      <div className="space-y-3">
                        {['Suporte 24/7', 'Técnicos Certificados', 'Resposta Imediata'].map((feature, idx) => (
                          <div key={idx} className="flex items-center gap-3 justify-center">
                            <CheckCircle className="h-5 w-5 text-purple-500" />
                            <span className="text-slate-700 font-medium">{feature}</span>
                          </div>
                        ))}
                      </div>
                      
                      <div className="mt-8 h-1 w-0 bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 group-hover:w-full transition-all duration-1000 mx-auto rounded-full"></div>
                    </div>
                  </Card>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Plans Section */}
        <section className="py-20 md:py-24 bg-gradient-to-br from-gray-900 via-black to-blue-900 text-white relative overflow-hidden">
          {/* Background Effects */}
          <div className="absolute inset-0">
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl"></div>
          </div>
          
          <div className="relative mx-auto max-w-7xl px-6">
            <AnimatedSection animation="fade-up">
              <header className="mb-16 text-center">
                <div className="inline-flex items-center rounded-full bg-gradient-to-r from-blue-600/30 to-purple-600/30 backdrop-blur-sm border border-blue-500/30 px-6 py-2 text-sm font-semibold text-blue-300 mb-6 animate-fade-in">
                  <Smartphone className="mr-2 h-4 w-4" />
                  Planos disponíveis
                </div>
                <h2 className="text-4xl md:text-6xl font-black mb-6 animate-fade-in delay-200">
                  <span className="bg-gradient-to-r from-white via-blue-200 to-white bg-clip-text text-transparent">
                    Escolha seu plano
                  </span>
                </h2>
                <p className="text-xl text-gray-300 max-w-2xl mx-auto animate-fade-in delay-300">
                  Todos os planos incluem dados acumulativos e cobertura nacional
                </p>
              </header>

              <div className="grid gap-8 md:grid-cols-3">
                {plans.map((plan, index) => (
                  <Card key={plan.id} className={`group relative p-8 border-0 transition-all duration-500 hover-scale animate-fade-in ${
                    plan.best 
                      ? "bg-gradient-to-br from-blue-900/90 to-purple-900/90 ring-2 ring-gradient-to-r ring-blue-500/50 shadow-2xl shadow-blue-500/25" 
                      : "bg-gradient-to-br from-gray-800/90 to-gray-900/90 hover:from-gray-700/90 hover:to-gray-800/90"
                  } backdrop-blur-xl`} style={{animationDelay: `${index * 200}ms`}}>
                    
                    {/* Glow Effect for Best Plan */}
                    {plan.best && (
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-lg blur-xl opacity-75 group-hover:opacity-100 transition-opacity"></div>
                    )}
                    
                    <div className="relative">
                      {plan.best && (
                        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                          <div className="inline-flex items-center rounded-full bg-gradient-to-r from-blue-500 to-purple-500 px-4 py-2 text-xs font-bold text-white shadow-lg animate-pulse">
                            <Star className="mr-1 h-3 w-3" />
                            MAIS POPULAR
                          </div>
                        </div>
                      )}
                      
                      <div className="flex items-center gap-4 mb-6 mt-4">
                        <div className={`rounded-xl p-3 shadow-lg transition-all duration-300 group-hover:scale-110 ${
                          plan.best 
                            ? "bg-gradient-to-r from-blue-500 to-purple-500 shadow-blue-500/25" 
                            : "bg-gradient-to-r from-gray-600 to-gray-700 shadow-gray-500/25"
                        }`}>
                          <Smartphone className="h-6 w-6 text-white" />
                        </div>
                        <h3 className="text-2xl font-bold text-white">{plan.title}</h3>
                      </div>
                      
                      <div className="text-center mb-6">
                        <p className={`text-5xl font-black mb-2 ${
                          plan.best 
                            ? "bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text text-transparent" 
                            : "text-white"
                        }`}>
                          {plan.data}
                        </p>
                        <p className="text-gray-300 text-lg">{plan.price}</p>
                      </div>
                      
                      <ul className="space-y-3 mb-8">
                        <li className="flex items-center gap-3 text-gray-300">
                          <CheckCircle className="h-5 w-5 text-green-400" />
                          <span>Dados acumulam infinitamente</span>
                        </li>
                        <li className="flex items-center gap-3 text-gray-300">
                          <CheckCircle className="h-5 w-5 text-green-400" />
                          <span>Cobertura 4G nacional</span>
                        </li>
                        <li className="flex items-center gap-3 text-gray-300">
                          <CheckCircle className="h-5 w-5 text-green-400" />
                          <span>Sem fidelidade ou taxas</span>
                        </li>
                        <li className="flex items-center gap-3 text-gray-300">
                          <CheckCircle className="h-5 w-5 text-green-400" />
                          <span>Suporte 24/7</span>
                        </li>
                      </ul>
                      
                      <a href={waUrl} target="_blank" rel="noreferrer" className="block">
                        <Button className={`w-full py-4 text-lg font-semibold rounded-xl transition-all duration-300 group-hover:shadow-lg ${
                          plan.best 
                            ? "bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-400 hover:to-purple-400 text-white shadow-blue-500/25 hover:shadow-blue-500/40" 
                            : "bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-500 hover:to-gray-600 text-white"
                        }`}>
                          Pedir este plano
                        </Button>
                      </a>
                    </div>
                  </Card>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* About Section */}
        <section className="py-20 md:py-24 bg-gradient-to-br from-slate-50 via-white to-blue-50/30 relative overflow-hidden">
          {/* Background Elements */}
          <div className="absolute top-0 right-0 w-72 h-72 bg-blue-200/30 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-purple-200/30 rounded-full blur-3xl"></div>
          
          <div className="relative mx-auto max-w-7xl px-6">
            <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
              <div className="animate-fade-in">
                <div className="inline-flex items-center rounded-full bg-gradient-to-r from-blue-100 to-purple-100 px-6 py-2 text-sm font-semibold text-blue-600 mb-8">
                  <FileText className="mr-2 h-4 w-4" />
                  Sobre nossos chips
                </div>
                
                <h2 className="text-4xl md:text-5xl font-black mb-8">
                  <span className="bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900 bg-clip-text text-transparent">
                    Tecnologia que revoluciona
                  </span>
                  <br />
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    sua experiência móvel
                  </span>
                </h2>
                
                <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                  Na SaraivaNet, oferecemos chips com tecnologia inovadora de dados acumulativos. 
                  Uma revolução que garante que você <span className="font-semibold text-blue-600">nunca perca o que pagou</span> - 
                  todos os dados não utilizados são automaticamente transferidos para o próximo mês.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                  {[
                    { icon: CheckCircle, text: "Ativação em até 24 horas", color: "text-green-500" },
                    { icon: Shield, text: "Suporte técnico especializado", color: "text-blue-500" },
                    { icon: InfinityIcon, text: "Cobertura 4G em todo o país", color: "text-purple-500" },
                    { icon: Star, text: "Sem taxas de cancelamento", color: "text-yellow-500" }
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-4 p-4 rounded-xl bg-white/80 backdrop-blur-sm shadow-sm hover:shadow-md transition-all duration-300 animate-fade-in" style={{animationDelay: `${index * 100}ms`}}>
                      <div className={`rounded-lg p-2 ${item.color === 'text-green-500' ? 'bg-green-100' : item.color === 'text-blue-500' ? 'bg-blue-100' : item.color === 'text-purple-500' ? 'bg-purple-100' : 'bg-yellow-100'}`}>
                        <item.icon className={`h-5 w-5 ${item.color}`} />
                      </div>
                      <span className="font-medium text-gray-700">{item.text}</span>
                    </div>
                  ))}
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4 animate-fade-in delay-500">
                  <a href={waUrl} target="_blank" rel="noreferrer">
                    <Button className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover-scale">
                      <span className="flex items-center gap-2">
                        Falar com especialista
                        <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </Button>
                  </a>
                  <Button variant="outline" className="px-8 py-4 text-lg rounded-xl border-2 border-gray-300 hover:border-blue-500 hover:text-blue-600 transition-all duration-300">
                    Ver cobertura
                  </Button>
                </div>
              </div>
              
              <div className="relative animate-fade-in delay-300">
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-3xl blur-2xl"></div>
                <div className="relative bg-white p-2 rounded-2xl shadow-2xl">
                  <img
                    src="/lovable-uploads/01df9255-1f15-4131-86c5-638e9796ee23.png"
                    alt="Chips SaraivaNet com dados acumulativos"
                    className="h-auto w-full rounded-xl"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-12 md:py-16 bg-muted/20">
          <div className="mx-auto max-w-6xl px-6">
            <header className="mb-8 text-center">
              <h2 className="text-3xl font-bold md:text-4xl">Perguntas Frequentes</h2>
              <p className="mt-2 text-muted-foreground">Tire suas dúvidas sobre os planos de chips com dados acumulativos.</p>
            </header>
            <Accordion type="single" collapsible className="mx-auto max-w-3xl">
              <AccordionItem value="item-1">
                <AccordionTrigger>É necessário pagar alguma taxa para aderir ao plano?</AccordionTrigger>
                <AccordionContent>
                  Não. Você adquire o chip e, após a primeira recarga, a ativação ocorre automaticamente. A confirmação chega por SMS ou App.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>Como faço a portabilidade?</AccordionTrigger>
                <AccordionContent>
                  Pelo App ou suporte via WhatsApp. Solicitamos dados básicos e, em até 5 dias úteis após autorização da operadora atual, seu número estará ativo.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>Como é feita a renovação do plano?</AccordionTrigger>
                <AccordionContent>
                  É automática no dia seguinte ao vencimento (ciclo de 30 dias). Você pode alterar ou cancelar pelo App a qualquer momento.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger>É possível fazer ligações internacionais (DDI)?</AccordionTrigger>
                <AccordionContent>
                  Não. Os planos focam em dados móveis. Para DDI, utilize apps de chamada com a franquia de internet.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>
      </main>
    </>
  );
};

export default Chips;
