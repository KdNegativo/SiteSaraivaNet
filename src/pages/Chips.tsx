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
  X
} from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import AnimatedSection from "@/components/AnimatedSection";
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
    <>
      <Helmet>
        <title>SaraivaNet - Planos de Celular sem Complicação | Internet 5G Premium</title>
        <meta name="description" content="Planos de celular com internet 5G de qualidade, preços transparentes e atendimento humano. Contrate já!" />
        <link rel="canonical" href={canonical} />
      </Helmet>

      {/* Header fixo */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <Link to="/" className="text-2xl lg:text-3xl font-bold font-playfair text-primary hover:scale-105 transition-transform">
              SaraivaNet
            </Link>
            
            <a href={waUrl} target="_blank" rel="noreferrer" className="hidden lg:block">
              <Button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <MessageCircle className="w-5 h-5 mr-2" />
                WhatsApp
              </Button>
            </a>

            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 text-foreground hover:text-primary transition-colors"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/10"></div>
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-float"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-float"></div>
          </div>

          <div className="relative max-w-7xl mx-auto px-4 lg:px-8 text-center">
            <AnimatedSection animation="fade-up" className="max-w-5xl mx-auto">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-playfair text-foreground mb-8 leading-tight">
                Planos de Celular
                <span className="block text-primary mt-2">sem Complicação</span>
              </h1>
              
              <p className="text-lg md:text-xl lg:text-2xl text-foreground/80 mb-12 leading-relaxed max-w-3xl mx-auto">
                Internet 5G premium, preços transparentes e atendimento humano.<br />
                <strong className="text-primary">Conecte-se com qualidade de verdade.</strong>
              </p>

              <a href={waUrl} target="_blank" rel="noreferrer">
                <Button size="lg" className="btn-ultra text-white px-12 py-6 text-xl font-bold rounded-full shadow-2xl transition-all duration-300 hover:scale-105">
                  <MessageCircle className="w-6 h-6 mr-3" />
                  Assine Agora
                  <ArrowRight className="w-6 h-6 ml-3" />
                </Button>
              </a>
              
              <p className="text-sm text-foreground/60 mt-4">
                ✓ Sem taxa de adesão • ✓ Chip grátis em casa • ✓ 7 dias para testar
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* Diferenciais */}
        <section className="py-20 lg:py-32 bg-secondary/20">
          <div className="max-w-7xl mx-auto px-4 lg:px-8">
            <AnimatedSection animation="fade-up" className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold font-playfair text-foreground mb-6">
                Por que Escolher a SaraivaNet?
              </h2>
            </AnimatedSection>

            <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
              {benefits.map((benefit, index) => (
                <AnimatedSection 
                  key={index} 
                  animation="fade-up" 
                  delay={index * 200}
                  className="group"
                >
                  <Card className="glass-card p-8 lg:p-10 rounded-3xl hover:scale-105 transition-all duration-500 hover:shadow-2xl">
                    <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-300">
                      <benefit.icon className="w-10 h-10 text-primary group-hover:animate-bounce" />
                    </div>
                    <h3 className="text-2xl font-bold font-playfair mb-6 text-foreground group-hover:text-primary transition-colors">
                      {benefit.title}
                    </h3>
                    <p className="text-lg text-foreground/80 leading-relaxed">
                      {benefit.description}
                    </p>
                  </Card>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Planos */}
        <section className="py-20 lg:py-32">
          <div className="max-w-7xl mx-auto px-4 lg:px-8">
            <AnimatedSection animation="fade-up" className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold font-playfair text-foreground mb-6">
                Escolha Seu Plano Ideal
              </h2>
            </AnimatedSection>

            <div className="grid lg:grid-cols-3 gap-8 lg:gap-10">
              {plans.map((plan, index) => (
                <AnimatedSection 
                  key={plan.id} 
                  animation="scale-in" 
                  delay={index * 200}
                  className="relative"
                >
                  <Card className={`relative p-8 lg:p-10 rounded-3xl transition-all duration-500 hover:scale-105 hover:shadow-2xl ${
                    plan.recommended 
                      ? 'glass-ultra border-2 border-primary shadow-2xl' 
                      : 'glass-card border border-border/50'
                  }`}>
                    {plan.recommended && (
                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                        <Badge className="bg-primary text-primary-foreground px-6 py-2 text-sm font-bold rounded-full shadow-lg">
                          <Star className="w-4 h-4 mr-2" />
                          Mais Popular
                        </Badge>
                      </div>
                    )}
                    
                    <div className="text-center mb-8">
                      <h3 className="text-2xl lg:text-3xl font-bold font-playfair text-foreground mb-4">
                        {plan.title}
                      </h3>
                      
                      <div className="mb-6">
                        <div className="flex items-baseline justify-center gap-2">
                          <span className="text-lg text-foreground/60">R$</span>
                          <span className="text-4xl lg:text-5xl font-bold text-primary">{plan.price}</span>
                          <span className="text-lg text-foreground/60">/{plan.period}</span>
                        </div>
                      </div>
                      
                      <div className="text-3xl font-bold text-accent mb-6 bg-accent/10 py-4 px-6 rounded-2xl">
                        {plan.data}
                      </div>
                    </div>

                    <ul className="space-y-4 mb-10">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start gap-4">
                          <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                            <CheckCircle className="w-4 h-4 text-primary" />
                          </div>
                          <span className="text-base text-foreground/80 leading-relaxed">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>

                    <a href={waUrl} target="_blank" rel="noreferrer" className="block">
                      <Button 
                        className={`w-full py-4 text-lg font-bold rounded-2xl transition-all duration-300 ${
                          plan.recommended 
                            ? 'btn-ultra text-white shadow-xl hover:shadow-2xl' 
                            : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
                        }`}
                      >
                        Contratar Agora
                        <ArrowRight className="w-5 h-5 ml-3" />
                      </Button>
                    </a>
                  </Card>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 lg:py-32 bg-secondary/20">
          <div className="max-w-5xl mx-auto px-4 lg:px-8">
            <AnimatedSection animation="fade-up" className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold font-playfair text-foreground mb-6">
                Dúvidas Frequentes
              </h2>
            </AnimatedSection>

            <AnimatedSection animation="fade-up" delay={200}>
              <Accordion type="single" collapsible className="space-y-6">
                {faqs.map((faq, index) => (
                  <AccordionItem 
                    key={index} 
                    value={`item-${index}`} 
                    className="glass-card border-2 border-border/20 rounded-2xl px-8"
                  >
                    <AccordionTrigger className="text-left text-lg font-bold font-playfair py-8 hover:no-underline text-foreground hover:text-primary transition-colors">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-foreground/80 text-base leading-relaxed pb-8">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </AnimatedSection>
          </div>
        </section>

        {/* CTA Final */}
        <section className="py-20 lg:py-32 gradient-primary text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-black/20"></div>
          
          <div className="relative max-w-6xl mx-auto px-4 lg:px-8 text-center">
            <AnimatedSection animation="fade-up">
              <h2 className="text-3xl md:text-5xl font-bold font-playfair mb-8">
                Pronto para Mudar?
              </h2>
              <p className="text-lg md:text-xl mb-12 leading-relaxed opacity-90">
                Junte-se a milhares de clientes satisfeitos<br />
                <strong>Atendimento de segunda a sexta, 8h às 18h</strong>
              </p>
              
              <a href={waUrl} target="_blank" rel="noreferrer">
                <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white px-12 py-6 text-xl font-bold rounded-full shadow-2xl hover:scale-105 transition-all duration-300">
                  <MessageCircle className="w-6 h-6 mr-4" />
                  Contratar pelo WhatsApp
                  <ArrowRight className="w-6 h-6 ml-4" />
                </Button>
              </a>
            </AnimatedSection>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-16 bg-foreground/5 border-t border-border/20">
          <div className="max-w-7xl mx-auto px-4 lg:px-8">
            <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold font-playfair text-primary mb-4">SaraivaNet</div>
                <div className="text-foreground/60">
                  © 2024 - Conectando famílias com qualidade
                </div>
              </div>
              <div className="flex items-center gap-6">
                <Link to="/" className="text-primary hover:text-accent font-semibold transition-colors">
                  Voltar ao Início
                </Link>
                <span className="text-foreground/60">CNPJ: 00.000.000/0001-00</span>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
};

export default Chips;