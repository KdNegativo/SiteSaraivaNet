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
        {/* Hero Section - Black Background */}
        <section className="relative overflow-hidden bg-black text-white">
          <div className="mx-auto max-w-7xl px-6 pt-24 pb-12 md:pt-32 md:pb-16">
            <div className="grid gap-10 lg:grid-cols-3 lg:items-center">
              {/* Left Side Card */}
              <div className="hidden lg:block">
                <Card className="bg-gray-900/80 border-gray-700 text-white p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="rounded-lg bg-blue-600 p-2">
                      <Shield className="h-5 w-5 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold">Segurança</h3>
                  </div>
                  <p className="text-gray-300 text-sm">
                    Dados seguros e protegidos com tecnologia de ponta
                  </p>
                </Card>
              </div>

              {/* Center Content */}
              <div className="text-center">
                <div className="inline-flex items-center rounded-full bg-blue-600/20 px-4 py-2 text-sm font-medium text-blue-400 mb-6">
                  <InfinityIcon className="mr-2 h-4 w-4" /> Dados acumulativos
                </div>
                <h1 className="text-4xl font-extrabold tracking-tight md:text-6xl mb-6">
                  Chips SaraivaNet
                </h1>
                <p className="text-gray-300 text-lg mb-8 max-w-md mx-auto">
                  Internet móvel com dados que acumulam mês a mês. Nunca perca seus dados novamente.
                </p>
                <a href={waUrl} target="_blank" rel="noreferrer">
                  <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg">
                    Pedir Chip
                  </Button>
                </a>
              </div>

              {/* Right Side Card */}
              <div className="hidden lg:block">
                <Card className="bg-gray-900/80 border-gray-700 text-white p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="rounded-lg bg-green-600 p-2">
                      <CreditCard className="h-5 w-5 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold">Acumulativo</h3>
                  </div>
                  <p className="text-gray-300 text-sm">
                    Seus dados não utilizados acumulam para o próximo mês
                  </p>
                </Card>
              </div>
            </div>

            {/* Mobile Cards */}
            <div className="grid gap-4 mt-12 md:grid-cols-2 lg:hidden">
              <Card className="bg-gray-900/80 border-gray-700 text-white p-4">
                <div className="flex items-center gap-3">
                  <Shield className="h-5 w-5 text-blue-400" />
                  <span className="font-semibold">Segurança</span>
                </div>
              </Card>
              <Card className="bg-gray-900/80 border-gray-700 text-white p-4">
                <div className="flex items-center gap-3">
                  <CreditCard className="h-5 w-5 text-green-400" />
                  <span className="font-semibold">Acumulativo</span>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Coming Soon Banner */}
        <section className="bg-yellow-500 text-black py-3">
          <div className="mx-auto max-w-7xl px-6 text-center">
            <p className="font-semibold">🚀 Em breve: Novos planos com ainda mais benefícios!</p>
          </div>
        </section>

        {/* We Are Different Section */}
        <section className="py-12 md:py-16 bg-background">
          <div className="mx-auto max-w-7xl px-6">
            <AnimatedSection animation="fade-up">
              <header className="mb-12 text-center">
                <h2 className="text-3xl font-bold md:text-4xl text-foreground">Somos diferentes</h2>
                <p className="mt-2 text-muted-foreground">Descubra por que escolher nossos chips</p>
              </header>

              <div className="grid gap-8 md:grid-cols-3">
                <Card className="p-8 text-center border-2 hover:border-primary transition-colors">
                  <div className="rounded-full bg-blue-100 p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <Shield className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Segurança</h3>
                  <p className="text-muted-foreground">
                    Proteção total dos seus dados com criptografia avançada e tecnologia de ponta
                  </p>
                </Card>

                <Card className="p-8 text-center border-2 hover:border-primary transition-colors">
                  <div className="rounded-full bg-green-100 p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <InfinityIcon className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Acumulativo</h3>
                  <p className="text-muted-foreground">
                    Dados não utilizados acumulam automaticamente para o próximo mês. Nunca perca nada!
                  </p>
                </Card>

                <Card className="p-8 text-center border-2 hover:border-primary transition-colors">
                  <div className="rounded-full bg-purple-100 p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <FileText className="h-8 w-8 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Faturas</h3>
                  <p className="text-muted-foreground">
                    Controle total com faturas detalhadas e transparentes. Sem surpresas na sua conta
                  </p>
                </Card>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Plans Section */}
        <section className="py-12 md:py-16 bg-muted/20">
          <div className="mx-auto max-w-7xl px-6">
            <AnimatedSection animation="fade-up">
              <header className="mb-8 text-center">
                <h2 className="text-3xl font-bold md:text-4xl">Escolha seu plano</h2>
                <p className="mt-2 text-muted-foreground">Todos acumulam os dados não utilizados para o mês seguinte.</p>
              </header>

              <div className="grid gap-6 md:grid-cols-3">
                {plans.map((plan) => (
                  <Card key={plan.id} className={`p-6 ${plan.best ? "ring-2 ring-primary bg-primary/5" : ""}`}>
                    {plan.best && (
                      <div className="mb-3 inline-flex items-center rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground">
                        <Star className="mr-1 h-3 w-3" />
                        Mais popular
                      </div>
                    )}
                    <div className="flex items-center gap-3">
                      <div className="rounded-lg bg-primary/10 p-2 text-primary">
                        <Smartphone className="h-5 w-5" />
                      </div>
                      <h3 className="text-xl font-semibold">{plan.title}</h3>
                    </div>
                    <p className="mt-4 text-4xl font-extrabold text-primary">{plan.data}</p>
                    <p className="mt-1 text-muted-foreground text-lg">{plan.price}</p>
                    <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-500" />Dados acumulam</li>
                      <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-500" />Cobertura nacional</li>
                      <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-500" />Sem fidelidade</li>
                    </ul>
                    <a href={waUrl} target="_blank" rel="noreferrer" className="mt-6 block">
                      <Button className="w-full">Pedir este plano</Button>
                    </a>
                  </Card>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* About Section */}
        <section className="py-12 md:py-16 bg-background">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid gap-12 md:grid-cols-2 md:items-center">
              <div>
                <h2 className="text-3xl font-bold md:text-4xl mb-6">Sobre nossos chips</h2>
                <p className="text-muted-foreground text-lg mb-6">
                  Na SaraivaNet, oferecemos chips com tecnologia inovadora de dados acumulativos. 
                  Isso significa que você nunca perde o que pagou - todos os dados não utilizados 
                  são automaticamente transferidos para o próximo mês.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span>Ativação em até 24 horas</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span>Suporte técnico especializado</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span>Cobertura 4G em todo o país</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span>Sem taxas de cancelamento</span>
                  </li>
                </ul>
                <a href={waUrl} target="_blank" rel="noreferrer">
                  <Button className="gap-2" size="lg">
                    Falar com especialista
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </a>
              </div>
              <div className="relative">
                <img
                  src="/lovable-uploads/01df9255-1f15-4131-86c5-638e9796ee23.png"
                  alt="Chips SaraivaNet com dados acumulativos"
                  className="h-auto w-full rounded-2xl shadow-lg"
                  loading="lazy"
                />
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
