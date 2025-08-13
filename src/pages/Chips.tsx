import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Smartphone, Infinity as InfinityIcon, ArrowRight, CheckCircle, Lock, PieChart, Layers, Receipt, Rocket } from "lucide-react";
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

      <main className="min-h-screen bg-background text-foreground">
        {/* Hero */}
        <section className="relative min-h-[70vh] md:min-h-[75vh] overflow-hidden">
          <div className="absolute inset-0 -z-10">
            <img
              src="/lovable-uploads/935d3409-f4aa-423b-937b-2d4df265cbed.png"
              alt="Fundo com smartphone representando conectividade móvel"
              className="h-full w-full object-cover opacity-20"
            />
            <div className="absolute inset-0 bg-foreground/70" />
          </div>

          <div className="mx-auto max-w-6xl px-6 pt-28 pb-16 md:pt-36 md:pb-24">
            <div className="max-w-2xl text-left text-background">
              <span className="inline-flex items-center rounded-full bg-background/10 px-4 py-2 text-sm font-semibold backdrop-blur">
                <InfinityIcon className="mr-2 h-4 w-4" /> Dados acumulam todo mês
              </span>
              <h1 className="mt-5 text-4xl font-extrabold leading-tight tracking-tight md:text-5xl">
                A era digital chegou, você está pronto?
                <span className="block text-background/80 mt-2 text-2xl md:text-3xl">
                  Chips SaraivaNet com dados que acumulam
                </span>
              </h1>
              <p className="mt-4 text-background/80 text-lg">
                Sem burocracia e sem letras miúdas. Assine, use quando precisar e acumule o que sobrar.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a href={waUrl} target="_blank" rel="noreferrer">
                  <Button size="lg" className="gap-2">
                    Pedir Chip
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </a>
                <Link to="/">
                  <Button variant="outline" size="lg">Voltar à Home</Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Planos */}
        <section className="py-12 md:py-16">
          <div className="mx-auto max-w-6xl px-6">
            <AnimatedSection animation="fade-up">
              <header className="mb-8 text-center">
                <h2 className="text-3xl font-bold md:text-4xl">Escolha seu plano</h2>
                <p className="mt-2 text-muted-foreground">Todos acumulam os dados não utilizados para o mês seguinte.</p>
              </header>

              <div className="grid gap-6 md:grid-cols-3">
                {plans.map((plan) => (
                  <Card key={plan.id} className={`p-6 ${plan.best ? "ring-2 ring-primary" : ""}`}>
                    {plan.best && (
                      <div className="mb-3 inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                        Mais popular
                      </div>
                    )}
                    <div className="flex items-center gap-3">
                      <div className="rounded-lg bg-primary/10 p-2 text-primary">
                        <Smartphone className="h-5 w-5" />
                      </div>
                      <h3 className="text-xl font-semibold">{plan.title}</h3>
                    </div>
                    <p className="mt-4 text-4xl font-extrabold">{plan.data}</p>
                    <p className="mt-1 text-muted-foreground">{plan.price}</p>
                    <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-primary" />Dados acumulam</li>
                      <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-primary" />Cobertura nacional</li>
                      <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-primary" />Sem fidelidade</li>
                    </ul>
                    <a href={waUrl} target="_blank" rel="noreferrer" className="mt-6 block">
                      <Button className="w-full">Pedir este plano</Button>
                    </a>
                  </Card>
                ))}
              </div>
            </AnimatedSection>

            <div className="mt-12 grid gap-6 md:grid-cols-2 md:items-center">
              <img
                src="/lovable-uploads/01df9255-1f15-4131-86c5-638e9796ee23.png"
                alt="Promoções e vantagens dos chips SaraivaNet"
                className="h-auto w-full rounded-2xl"
                loading="lazy"
              />
              <div>
                <h3 className="text-2xl font-bold">Como funciona o acúmulo de dados?</h3>
                <p className="mt-2 text-muted-foreground">
                  Simples: se você não usar toda a franquia no mês, o restante vai para o próximo. Assim você nunca perde seus dados.
                </p>
                <a href={waUrl} target="_blank" rel="noreferrer">
                  <Button className="mt-4 gap-2">
                    Tirar dúvidas no WhatsApp
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </a>
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
