import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Smartphone, Infinity as InfinityIcon, ArrowRight, CheckCircle, Shield, CreditCard, FileText, Star } from "lucide-react";
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

      <main className="min-h-screen">
        {/* Hero Section - Modern Black Design */}
        <section className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-black to-gray-800">
          {/* Background Effects */}
          <div className="absolute inset-0">
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-blue-600/10 to-transparent rounded-full"></div>
          </div>
          
          <div className="relative mx-auto max-w-7xl px-6 pt-24 pb-16 md:pt-32 md:pb-20">
            <div className="grid gap-12 lg:grid-cols-3 lg:items-center">
              {/* Left Side Card */}
              <div className="hidden lg:block animate-fade-in">
                <Card className="bg-gradient-to-br from-gray-800/90 to-gray-900/90 backdrop-blur-xl border-gray-700/50 text-white p-8 hover-scale group transition-all duration-500 hover:border-blue-500/50">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="rounded-xl bg-gradient-to-r from-blue-500 to-blue-600 p-3 shadow-lg shadow-blue-500/25 group-hover:shadow-blue-500/40 transition-all duration-300">
                      <Shield className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">Segurança</h3>
                  </div>
                  <p className="text-gray-300 leading-relaxed">
                    Dados seguros e protegidos com tecnologia de ponta e criptografia militar
                  </p>
                  <div className="mt-4 h-1 w-0 bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-full transition-all duration-700"></div>
                </Card>
              </div>

              {/* Center Content */}
              <div className="text-center animate-scale-in">
                <div className="inline-flex items-center rounded-full bg-gradient-to-r from-blue-600/30 to-purple-600/30 backdrop-blur-sm border border-blue-500/30 px-6 py-3 text-sm font-semibold text-blue-300 mb-8 hover-scale">
                  <InfinityIcon className="mr-2 h-5 w-5 animate-pulse" />
                  <span className="bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text text-transparent">Dados acumulativos</span>
                </div>
                
                <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-8">
                  <span className="bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent animate-fade-in">
                    Chips
                  </span>
                  <br />
                  <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 bg-clip-text text-transparent animate-fade-in delay-200">
                    SaraivaNet
                  </span>
                </h1>
                
                <p className="text-gray-300 text-xl mb-10 max-w-lg mx-auto leading-relaxed animate-fade-in delay-300">
                  Internet móvel revolucionária com dados que 
                  <span className="text-blue-400 font-semibold"> acumulam infinitamente</span>. 
                  Nunca perca seus dados novamente.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in delay-500">
                  <a href={waUrl} target="_blank" rel="noreferrer">
                    <Button size="lg" className="group relative bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white px-10 py-4 text-lg font-semibold rounded-xl shadow-lg shadow-blue-600/25 hover:shadow-blue-600/40 transition-all duration-300 hover-scale border-0">
                      <span className="relative z-10 flex items-center gap-2">
                        Pedir Chip Agora
                        <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                      </span>
                      <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-xl"></div>
                    </Button>
                  </a>
                  <Link to="/">
                    <Button variant="outline" size="lg" className="border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white px-8 py-4 rounded-xl transition-all duration-300">
                      ← Voltar à Home
                    </Button>
                  </Link>
                </div>
              </div>

              {/* Right Side Card */}
              <div className="hidden lg:block animate-fade-in delay-200">
                <Card className="bg-gradient-to-br from-gray-800/90 to-gray-900/90 backdrop-blur-xl border-gray-700/50 text-white p-8 hover-scale group transition-all duration-500 hover:border-green-500/50">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="rounded-xl bg-gradient-to-r from-green-500 to-emerald-600 p-3 shadow-lg shadow-green-500/25 group-hover:shadow-green-500/40 transition-all duration-300">
                      <InfinityIcon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">Acumulativo</h3>
                  </div>
                  <p className="text-gray-300 leading-relaxed">
                    Seus dados não utilizados acumulam automaticamente para o próximo mês
                  </p>
                  <div className="mt-4 h-1 w-0 bg-gradient-to-r from-green-500 to-emerald-500 group-hover:w-full transition-all duration-700"></div>
                </Card>
              </div>
            </div>

            {/* Mobile Cards */}
            <div className="grid gap-6 mt-16 md:grid-cols-2 lg:hidden animate-fade-in delay-700">
              <Card className="bg-gradient-to-br from-gray-800/90 to-gray-900/90 backdrop-blur-xl border-gray-700/50 text-white p-6 hover-scale group">
                <div className="flex items-center gap-4">
                  <div className="rounded-lg bg-gradient-to-r from-blue-500 to-blue-600 p-2 shadow-lg shadow-blue-500/25">
                    <Shield className="h-5 w-5 text-white" />
                  </div>
                  <span className="font-bold text-lg bg-gradient-to-r from-white to-blue-300 bg-clip-text text-transparent">Segurança</span>
                </div>
              </Card>
              <Card className="bg-gradient-to-br from-gray-800/90 to-gray-900/90 backdrop-blur-xl border-gray-700/50 text-white p-6 hover-scale group">
                <div className="flex items-center gap-4">
                  <div className="rounded-lg bg-gradient-to-r from-green-500 to-emerald-600 p-2 shadow-lg shadow-green-500/25">
                    <InfinityIcon className="h-5 w-5 text-white" />
                  </div>
                  <span className="font-bold text-lg bg-gradient-to-r from-white to-green-300 bg-clip-text text-transparent">Acumulativo</span>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Coming Soon Banner */}
        <section className="relative bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-400 text-black py-4 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse"></div>
          <div className="relative mx-auto max-w-7xl px-6 text-center">
            <p className="font-bold text-lg flex items-center justify-center gap-2 animate-fade-in">
              <span className="text-2xl animate-pulse">🚀</span>
              <span className="bg-gradient-to-r from-yellow-900 to-yellow-800 bg-clip-text text-transparent">
                Em breve: Novos planos com ainda mais benefícios e velocidade 5G!
              </span>
              <span className="text-2xl animate-pulse delay-500">✨</span>
            </p>
          </div>
        </section>

        {/* We Are Different Section */}
        <section className="py-20 md:py-24 bg-gradient-to-br from-slate-50 via-white to-blue-50/30">
          <div className="mx-auto max-w-7xl px-6">
            <AnimatedSection animation="fade-up">
              <header className="mb-16 text-center">
                <div className="inline-flex items-center rounded-full bg-gradient-to-r from-blue-100 to-purple-100 px-6 py-2 text-sm font-semibold text-blue-600 mb-6 animate-fade-in">
                  <Star className="mr-2 h-4 w-4" />
                  Por que somos únicos
                </div>
                <h2 className="text-4xl md:text-6xl font-black mb-6 animate-fade-in delay-200">
                  <span className="bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900 bg-clip-text text-transparent">
                    Somos diferentes
                  </span>
                </h2>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in delay-300">
                  Tecnologia de ponta, inovação constante e o melhor atendimento do mercado
                </p>
              </header>

              <div className="grid gap-8 md:grid-cols-3">
                <Card className="group relative p-10 text-center border-0 bg-gradient-to-br from-white to-blue-50/50 hover:from-blue-50 hover:to-purple-50 shadow-lg hover:shadow-xl transition-all duration-500 hover-scale animate-fade-in">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-purple-600/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative">
                    <div className="rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 p-6 w-20 h-20 mx-auto mb-6 shadow-lg shadow-blue-500/25 group-hover:shadow-blue-500/40 group-hover:scale-110 transition-all duration-300">
                      <Shield className="h-8 w-8 text-white mx-auto" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-blue-900 bg-clip-text text-transparent">Segurança</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Proteção total dos seus dados com criptografia avançada e tecnologia de ponta. 
                      Sua privacidade é nossa prioridade máxima.
                    </p>
                    <div className="mt-6 h-1 w-0 bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-full transition-all duration-700 mx-auto"></div>
                  </div>
                </Card>

                <Card className="group relative p-10 text-center border-0 bg-gradient-to-br from-white to-green-50/50 hover:from-green-50 hover:to-emerald-50 shadow-lg hover:shadow-xl transition-all duration-500 hover-scale animate-fade-in delay-200">
                  <div className="absolute inset-0 bg-gradient-to-br from-green-600/5 to-emerald-600/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative">
                    <div className="rounded-2xl bg-gradient-to-br from-green-500 to-emerald-600 p-6 w-20 h-20 mx-auto mb-6 shadow-lg shadow-green-500/25 group-hover:shadow-green-500/40 group-hover:scale-110 transition-all duration-300">
                      <InfinityIcon className="h-8 w-8 text-white mx-auto" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-green-900 bg-clip-text text-transparent">Acumulativo</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Dados não utilizados acumulam automaticamente para o próximo mês. 
                      Tecnologia inovadora que maximiza seu investimento.
                    </p>
                    <div className="mt-6 h-1 w-0 bg-gradient-to-r from-green-500 to-emerald-500 group-hover:w-full transition-all duration-700 mx-auto"></div>
                  </div>
                </Card>

                <Card className="group relative p-10 text-center border-0 bg-gradient-to-br from-white to-purple-50/50 hover:from-purple-50 hover:to-pink-50 shadow-lg hover:shadow-xl transition-all duration-500 hover-scale animate-fade-in delay-400">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 to-pink-600/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative">
                    <div className="rounded-2xl bg-gradient-to-br from-purple-500 to-pink-600 p-6 w-20 h-20 mx-auto mb-6 shadow-lg shadow-purple-500/25 group-hover:shadow-purple-500/40 group-hover:scale-110 transition-all duration-300">
                      <FileText className="h-8 w-8 text-white mx-auto" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-purple-900 bg-clip-text text-transparent">Faturas</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Controle total com faturas detalhadas e transparentes. 
                      Sem surpresas, sem taxas ocultas na sua conta.
                    </p>
                    <div className="mt-6 h-1 w-0 bg-gradient-to-r from-purple-500 to-pink-500 group-hover:w-full transition-all duration-700 mx-auto"></div>
                  </div>
                </Card>
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
