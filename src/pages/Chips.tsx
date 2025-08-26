import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { 
  CheckCircle, 
  MessageCircle, 
  Phone,
  Wifi,
  Users,
  Award,
  ArrowRight,
  Clock,
  Shield,
  Star,
  Zap
} from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const WHATSAPP_PHONE = "5589994395789";
const WHATSAPP_MSG = "Olá! Quero contratar um plano de dados móveis.";

const Chips = () => {
  const canonical = typeof window !== "undefined" ? `${window.location.origin}/chips` : "/chips";
  const waUrl = `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(WHATSAPP_MSG)}`;
  
  const plans = [
    { 
      id: "basico", 
      title: "Plano Básico", 
      data: "10 GB", 
      price: "R$ 39,90", 
      period: "por mês",
      recommended: false,
      features: [
        "10 GB de internet por mês",
        "Velocidade 4G em todo Brasil",
        "Ligações ilimitadas",
        "WhatsApp liberado",
        "Suporte por telefone"
      ]
    },
    { 
      id: "familia", 
      title: "Plano Família", 
      data: "25 GB", 
      price: "R$ 69,90", 
      period: "por mês",
      recommended: true,
      features: [
        "25 GB de internet por mês",
        "Velocidade 4G e 5G",
        "Ligações ilimitadas",
        "Apps sociais liberados",
        "Suporte prioritário",
        "Até 4 linhas na família"
      ]
    },
    { 
      id: "premium", 
      title: "Plano Premium", 
      data: "50 GB", 
      price: "R$ 99,90", 
      period: "por mês",
      recommended: false,
      features: [
        "50 GB de internet por mês",
        "Velocidade 5G premium",
        "Ligações e SMS ilimitados",
        "Todos os apps liberados",
        "Suporte VIP 24 horas",
        "Roaming nacional grátis"
      ]
    }
  ];

  const faqs = [
    {
      question: "Como funciona a contratação?",
      answer: "É muito simples! Clique no botão WhatsApp, converse com nosso atendente e escolha seu plano. Enviamos o chip pelos Correios em até 3 dias úteis."
    },
    {
      question: "Preciso cancelar meu plano atual?",
      answer: "Não se preocupe! Nosso time ajuda você a cancelar seu plano atual sem complicação. Cuidamos de todo o processo para você."
    },
    {
      question: "Como é feito o pagamento?",
      answer: "Você pode pagar por boleto bancário, cartão de crédito ou débito automático. O valor é cobrado todo mês na mesma data."
    },
    {
      question: "E se eu não gostar do serviço?",
      answer: "Oferecemos 7 dias para testar sem compromisso. Se não ficar satisfeito, cancelamos sem cobrança adicional."
    },
    {
      question: "A cobertura funciona na minha cidade?",
      answer: "Temos cobertura em mais de 4.500 cidades brasileiras. Entre em contato para confirmar a disponibilidade na sua região."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Planos de Celular - Internet móvel com melhor preço | SaraivaNet</title>
        <meta name="description" content="Planos de celular com internet de qualidade, ligações ilimitadas e preços justos. Atendimento especializado para toda família. Contrate já!" />
        <link rel="canonical" href={canonical} />
      </Helmet>

      <main className="min-h-screen bg-background">
        {/* Cabeçalho Moderno */}
        <header className="gradient-primary text-white py-8 shadow-xl">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex items-center justify-between">
              <Link to="/" className="text-3xl font-bold font-playfair hover:scale-105 transition-transform">
                SaraivaNet
              </Link>
              <div className="flex items-center gap-6 text-xl font-medium">
                <Phone className="w-6 h-6" />
                <span className="hidden md:inline">(85) 9999-5789</span>
                <span className="md:hidden">Ligue</span>
              </div>
            </div>
          </div>
        </header>

        {/* Seção Hero Moderna */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-secondary/30 to-accent/20"></div>
          <div className="max-w-7xl mx-auto px-4 text-center relative">
            <div className="max-w-5xl mx-auto">
              <h1 className="text-5xl md:text-7xl font-bold font-playfair text-primary mb-8 leading-tight animate-fade-in">
                Planos de Celular
                <span className="block text-accent">Sem Complicação</span>
              </h1>
              <p className="text-2xl md:text-3xl text-foreground/80 mb-12 leading-relaxed animate-fade-in delay-100">
                Internet de qualidade para toda família<br />
                <strong className="text-primary">Transparência total, sem pegadinhas</strong>
              </p>
              
              {/* Benefícios Modernos */}
              <div className="grid md:grid-cols-3 gap-8 mb-16">
                <div className="glass-card p-8 rounded-2xl hover-float animate-fade-in delay-200">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Shield className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 font-playfair">100% Transparente</h3>
                  <p className="text-lg text-foreground/70">Valor fixo todo mês, sem taxas escondidas ou surpresas</p>
                </div>
                <div className="glass-card p-8 rounded-2xl hover-float animate-fade-in delay-300">
                  <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Zap className="w-8 h-8 text-accent" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 font-playfair">Velocidade Total</h3>
                  <p className="text-lg text-foreground/70">5G premium em todo Brasil, internet que não trava</p>
                </div>
                <div className="glass-card p-8 rounded-2xl hover-float animate-fade-in delay-500">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Users className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 font-playfair">Atendimento Real</h3>
                  <p className="text-lg text-foreground/70">Pessoas de verdade te ajudam, sem robôs</p>
                </div>
              </div>

              <a href={waUrl} target="_blank" rel="noreferrer">
                <Button size="lg" className="btn-ultra text-white px-16 py-8 text-2xl rounded-2xl font-bold shadow-2xl animate-bounce-in delay-700">
                  <MessageCircle className="w-8 h-8 mr-4" />
                  Conversar no WhatsApp Agora
                  <ArrowRight className="w-8 h-8 ml-4" />
                </Button>
              </a>
            </div>
          </div>
        </section>

        {/* Seção de Planos Premium */}
        <section className="py-20 bg-secondary/20">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-6xl font-bold font-playfair text-primary mb-6">
                Escolha Seu Plano
              </h2>
              <p className="text-2xl text-foreground/80">
                Preços justos, sem pegadinhas
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {plans.map((plan, index) => (
                <Card key={plan.id} className={`relative p-10 rounded-3xl transition-all duration-500 hover:scale-105 ${
                  plan.recommended 
                    ? 'glass-ultra border-2 border-primary shadow-2xl animate-bounce-in' 
                    : 'glass-card border border-border/50 animate-fade-in'
                }`} style={{animationDelay: `${index * 200}ms`}}>
                  {plan.recommended && (
                    <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                      <Badge className="bg-primary text-primary-foreground px-6 py-3 text-lg font-bold rounded-full shadow-lg">
                        <Star className="w-5 h-5 mr-2" />
                        Mais Popular
                      </Badge>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-3xl font-bold font-playfair text-foreground mb-4">{plan.title}</h3>
                    <div className="mb-6">
                      <span className="text-5xl font-bold text-primary">{plan.price}</span>
                      <span className="text-foreground/60 ml-2 text-lg">{plan.period}</span>
                    </div>
                    <div className="text-4xl font-bold text-accent mb-6 bg-accent/10 py-4 px-6 rounded-2xl">{plan.data}</div>
                  </div>

                  <ul className="space-y-4 mb-10">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-4">
                        <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                          <CheckCircle className="w-4 h-4 text-primary" />
                        </div>
                        <span className="text-lg text-foreground/80 leading-relaxed">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <a href={waUrl} target="_blank" rel="noreferrer" className="block">
                    <Button 
                      className={`w-full py-6 text-xl font-bold rounded-2xl transition-all duration-300 ${
                        plan.recommended 
                          ? 'btn-ultra text-white shadow-xl hover:shadow-2xl' 
                          : 'bg-secondary text-secondary-foreground hover:bg-secondary/80 border-2 border-primary/20'
                      }`}
                    >
                      Contratar Agora
                      <ArrowRight className="w-6 h-6 ml-3" />
                    </Button>
                  </a>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Como Funciona - Moderno */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5"></div>
          <div className="max-w-6xl mx-auto px-4 relative">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-6xl font-bold font-playfair text-primary mb-6">
                Como Funciona
              </h2>
              <p className="text-2xl text-foreground/80">
                3 passos simples para ter internet de qualidade
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-12">
              <div className="text-center group animate-fade-in delay-100">
                <div className="relative mb-8">
                  <div className="w-24 h-24 gradient-primary text-white rounded-full flex items-center justify-center text-3xl font-bold mx-auto shadow-2xl group-hover:scale-110 transition-transform duration-300">
                    1
                  </div>
                  <div className="absolute -inset-4 bg-primary/20 rounded-full blur-xl opacity-70 group-hover:opacity-100 transition-opacity"></div>
                </div>
                <h3 className="text-2xl font-bold font-playfair mb-4 text-foreground">Escolha seu Plano</h3>
                <p className="text-lg text-foreground/70 leading-relaxed">
                  Clique no WhatsApp e converse com nossa equipe. 
                  Vamos te ajudar a encontrar o plano perfeito.
                </p>
              </div>
              
              <div className="text-center group animate-fade-in delay-200">
                <div className="relative mb-8">
                  <div className="w-24 h-24 gradient-primary text-white rounded-full flex items-center justify-center text-3xl font-bold mx-auto shadow-2xl group-hover:scale-110 transition-transform duration-300">
                    2
                  </div>
                  <div className="absolute -inset-4 bg-accent/20 rounded-full blur-xl opacity-70 group-hover:opacity-100 transition-opacity"></div>
                </div>
                <h3 className="text-2xl font-bold font-playfair mb-4 text-foreground">Receba o Chip</h3>
                <p className="text-lg text-foreground/70 leading-relaxed">
                  Enviamos seu chip pelos Correios, diretamente na sua casa, 
                  sem nenhum custo adicional.
                </p>
              </div>
              
              <div className="text-center group animate-fade-in delay-300">
                <div className="relative mb-8">
                  <div className="w-24 h-24 gradient-primary text-white rounded-full flex items-center justify-center text-3xl font-bold mx-auto shadow-2xl group-hover:scale-110 transition-transform duration-300">
                    3
                  </div>
                  <div className="absolute -inset-4 bg-primary/20 rounded-full blur-xl opacity-70 group-hover:opacity-100 transition-opacity"></div>
                </div>
                <h3 className="text-2xl font-bold font-playfair mb-4 text-foreground">Use e Aproveite</h3>
                <p className="text-lg text-foreground/70 leading-relaxed">
                  Coloque o chip no celular e pronto! 
                  Internet rápida funcionando na hora.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Perguntas Frequentes Premium */}
        <section className="py-20 bg-secondary/10">
          <div className="max-w-5xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-6xl font-bold font-playfair text-primary mb-6">
                Dúvidas Frequentes
              </h2>
              <p className="text-2xl text-foreground/80">
                Tudo que você precisa saber
              </p>
            </div>

            <Accordion type="single" collapsible className="space-y-6">
              {faqs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`} 
                  className="glass-card border-2 border-border/20 rounded-2xl px-8 animate-fade-in"
                  style={{animationDelay: `${index * 100}ms`}}
                >
                  <AccordionTrigger className="text-left text-xl font-bold font-playfair py-8 hover:no-underline text-foreground hover:text-primary transition-colors">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-foreground/80 text-lg leading-relaxed pb-8">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* Chamada Final Premium */}
        <section className="py-20 gradient-primary text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="max-w-6xl mx-auto px-4 text-center relative">
            <h2 className="text-4xl md:text-6xl font-bold font-playfair mb-8 animate-fade-in">
              Vamos Começar?
            </h2>
            <p className="text-xl md:text-2xl mb-12 leading-relaxed opacity-90 animate-fade-in delay-100">
              Nossa equipe está pronta para te atender agora mesmo <br />
              <strong className="text-2xl">Segunda a sexta, das 8h às 18h</strong>
            </p>
            
            <div className="flex flex-col lg:flex-row gap-8 justify-center items-center animate-bounce-in delay-200">
              <a href={waUrl} target="_blank" rel="noreferrer">
                <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white px-12 py-6 text-2xl font-bold rounded-2xl shadow-2xl hover:scale-105 transition-all duration-300">
                  <MessageCircle className="w-8 h-8 mr-4" />
                  Falar no WhatsApp Agora
                  <ArrowRight className="w-8 h-8 ml-4" />
                </Button>
              </a>
              
              <div className="flex items-center gap-4 text-xl bg-white/10 backdrop-blur-md px-8 py-4 rounded-2xl border border-white/20">
                <Phone className="w-6 h-6" />
                <span className="font-medium">Ou ligue: (85) 9999-5789</span>
              </div>
            </div>
          </div>
        </section>

        {/* Rodapé Moderno */}
        <footer className="py-12 bg-foreground/5 border-t border-border/20">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
              <div className="text-center lg:text-left">
                <div className="text-2xl font-bold font-playfair text-primary mb-2">SaraivaNet</div>
                <div className="text-foreground/60 text-lg">
                  © 2024 - Conectando famílias com qualidade
                </div>
              </div>
              <div className="flex flex-col lg:flex-row items-center gap-6 text-lg">
                <Link to="/" className="text-primary hover:text-accent font-semibold transition-colors">
                  Voltar ao Início
                </Link>
                <span className="hidden lg:inline text-foreground/40">•</span>
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