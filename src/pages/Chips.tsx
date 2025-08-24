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

      <main className="min-h-screen bg-background">
        {/* Hero Section with Premium Design */}
        <section className="py-20 md:py-32 bg-gradient-to-br from-background to-secondary/30 relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5 opacity-50"></div>
          <div className="absolute top-0 left-0 w-72 h-72 bg-primary/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
          
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Left Content */}
              <AnimatedSection className="space-y-8">
                {/* Premium Badge */}
                <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm">
                  <div className="w-3 h-3 bg-primary rounded-full animate-pulse"></div>
                  <span className="text-primary font-semibold">Sobre nossos chips</span>
                </div>

                {/* Hero Title */}
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-balance">
                  <span className="text-foreground">Tecnologia que</span>
                  <br />
                  <span className="text-foreground">revoluciona</span>
                  <br />
                  <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    sua experiência móvel
                  </span>
                </h1>

                {/* Description */}
                <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                  <p>
                    Na SaraivaNet, oferecemos chips com tecnologia inovadora 
                    de dados acumulativos. Uma revolução que garante que você{' '}
                    <span className="text-primary font-semibold">nunca perca o que pagou</span>{' '}
                    - todos os dados não utilizados são automaticamente transferidos para o próximo mês.
                  </p>
                </div>

                {/* Premium Features Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 py-8">
                  <div className="flex items-center gap-4 p-4 rounded-xl bg-card/50 border border-border/50 hover:bg-card/80 transition-all duration-300 hover:scale-105">
                    <div className="w-12 h-12 bg-green-500/10 rounded-xl flex items-center justify-center border border-green-500/20">
                      <CheckCircle className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-card-foreground">Ativação em até 24 horas</h3>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 p-4 rounded-xl bg-card/50 border border-border/50 hover:bg-card/80 transition-all duration-300 hover:scale-105">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center border border-primary/20">
                      <Users className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-card-foreground">Suporte técnico especializado</h3>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 p-4 rounded-xl bg-card/50 border border-border/50 hover:bg-card/80 transition-all duration-300 hover:scale-105">
                    <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center border border-accent/20">
                      <InfinityIcon className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-card-foreground">Cobertura 4G em todo o país</h3>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 p-4 rounded-xl bg-card/50 border border-border/50 hover:bg-card/80 transition-all duration-300 hover:scale-105">
                    <div className="w-12 h-12 bg-yellow-500/10 rounded-xl flex items-center justify-center border border-yellow-500/20">
                      <Star className="w-6 h-6 text-yellow-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-card-foreground">Sem taxas de cancelamento</h3>
                    </div>
                  </div>
                </div>

                {/* Premium CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <a href={waUrl} target="_blank" rel="noreferrer">
                    <Button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-xl font-semibold text-lg flex items-center gap-3 w-full sm:w-auto shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                      <Zap className="w-5 h-5" />
                      Falar com especialista
                      <ArrowRight className="w-5 h-5" />
                    </Button>
                  </a>
                  <Link to="/">
                    <Button variant="outline" className="border-2 border-border text-foreground hover:bg-secondary px-8 py-4 rounded-xl font-semibold text-lg w-full sm:w-auto hover:scale-105 transition-all duration-300">
                      Ver cobertura
                    </Button>
                  </Link>
                </div>
              </AnimatedSection>

              {/* Right Side - Enhanced WhatsApp Visual */}
              <AnimatedSection className="relative">
                <div className="relative">
                  {/* Floating decorative elements */}
                  <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary/20 rounded-full blur-xl animate-float"></div>
                  <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-accent/20 rounded-full blur-xl animate-float delay-500"></div>
                  
                  {/* Main card */}
                  <div className="relative bg-card/80 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-border/50 hover:shadow-3xl transition-all duration-500 hover:scale-105">
                    <div className="w-full h-80 bg-gradient-to-br from-secondary/30 to-muted/50 rounded-2xl flex items-center justify-center relative overflow-hidden border border-border/30">
                      {/* Animated background pattern */}
                      <div className="absolute inset-0 opacity-20">
                        <div className="w-full h-full bg-gradient-to-r from-primary/10 via-transparent to-accent/10 animate-gradient-shift"></div>
                      </div>
                      
                      {/* WhatsApp Icon with premium styling */}
                      <div className="relative">
                        <div className="w-36 h-36 bg-green-500 rounded-full flex items-center justify-center shadow-2xl relative overflow-hidden hover:scale-110 transition-transform duration-300">
                          {/* Shine effect */}
                          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent -translate-x-full hover:translate-x-full transition-transform duration-1000"></div>
                          <svg className="w-20 h-20 text-white relative z-10" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.891 3.488"/>
                          </svg>
                        </div>
                        {/* Floating pulse rings */}
                        <div className="absolute inset-0 border-4 border-green-400/30 rounded-full animate-ping"></div>
                        <div className="absolute inset-0 border-2 border-green-400/50 rounded-full animate-pulse"></div>
                      </div>
                    </div>
                    
                    {/* Bottom accent */}
                    <div className="mt-6 text-center">
                      <p className="text-sm text-muted-foreground font-medium">Fale conosco via WhatsApp</p>
                      <div className="w-16 h-1 bg-gradient-to-r from-primary to-accent rounded-full mx-auto mt-2"></div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
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

        {/* Premium Plans Section */}
        <section className="py-20 md:py-32 bg-background relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute inset-0 bg-gradient-to-b from-secondary/20 to-background"></div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>
          
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <AnimatedSection className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6">
                <CreditCard className="w-4 h-4" />
                <span className="text-sm font-medium">Planos Premium</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
                Escolha seu plano
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Todos os planos incluem dados acumulativos e cobertura nacional
              </p>
            </AnimatedSection>

            <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
              {plans.map((plan, index) => (
                <AnimatedSection key={plan.id} className={`delay-${index * 200}`}>
                  <Card className={`relative p-8 rounded-3xl border-2 transition-all duration-500 hover:scale-105 hover:shadow-2xl group ${
                    plan.best 
                      ? "border-primary bg-gradient-to-br from-primary/5 to-accent/5 shadow-xl" 
                      : "border-border bg-card hover:border-primary/50"
                  }`}>
                    
                    {plan.best && (
                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                        <div className="bg-gradient-to-r from-primary to-accent text-primary-foreground px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                          <div className="flex items-center gap-2">
                            <Trophy className="w-4 h-4" />
                            MAIS POPULAR
                          </div>
                        </div>
                      </div>
                    )}
                    
                    <div className="text-center">
                      <div className="mb-8">
                        <div className={`w-20 h-20 mx-auto rounded-3xl flex items-center justify-center mb-6 relative ${
                          plan.best 
                            ? "bg-gradient-to-br from-primary to-accent" 
                            : "bg-secondary group-hover:bg-primary/10"
                        } transition-all duration-300`}>
                          <Smartphone className={`w-10 h-10 ${
                            plan.best ? "text-white" : "text-primary group-hover:text-primary"
                          } transition-colors duration-300`} />
                          {plan.best && (
                            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary to-accent animate-pulse opacity-50"></div>
                          )}
                        </div>
                        
                        <h3 className="text-2xl font-bold mb-3 text-card-foreground">{plan.title}</h3>
                        <div className={`text-5xl font-black mb-2 ${
                          plan.best 
                            ? "bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent" 
                            : "text-primary"
                        }`}>
                          {plan.data}
                        </div>
                        <div className="text-xl font-semibold text-muted-foreground">{plan.price}</div>
                      </div>

                      <div className="space-y-4 mb-8">
                        {[
                          { icon: InfinityIcon, text: 'Dados acumulativos' },
                          { icon: Wifi, text: 'Cobertura nacional' },
                          { icon: Users, text: 'Suporte 24/7' },
                          { icon: Shield, text: 'Sem fidelidade' }
                        ].map((feature, idx) => (
                          <div key={idx} className="flex items-center gap-4 p-3 rounded-xl bg-secondary/50 hover:bg-secondary/80 transition-colors duration-300">
                            <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                              plan.best ? "bg-primary/20" : "bg-primary/10"
                            }`}>
                              <feature.icon className="w-4 h-4 text-primary" />
                            </div>
                            <span className="text-card-foreground font-medium">{feature.text}</span>
                          </div>
                        ))}
                      </div>

                      <a href={waUrl} target="_blank" rel="noreferrer">
                        <Button className={`w-full py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl ${
                          plan.best 
                            ? "bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-primary-foreground" 
                            : "bg-secondary hover:bg-primary text-card-foreground hover:text-primary-foreground"
                        }`}>
                          <div className="flex items-center justify-center gap-2">
                            <Award className="w-5 h-5" />
                            Escolher Plano
                            <ArrowRight className="w-5 h-5" />
                          </div>
                        </Button>
                      </a>
                    </div>
                  </Card>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

      </main>
    </>
  );
};

export default Chips;
