import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Smartphone, Infinity as InfinityIcon, ArrowRight, CheckCircle } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

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
        <section className="relative overflow-hidden">
          <div className="mx-auto max-w-6xl px-6 pt-24 pb-12 md:pt-32 md:pb-16">
            <div className="grid gap-10 md:grid-cols-2 md:items-center">
              <div>
                <div className="inline-flex items-center rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
                  <InfinityIcon className="mr-2 h-4 w-4" /> Dados acumulam todo mês
                </div>
                <h1 className="mt-4 text-4xl font-extrabold tracking-tight md:text-5xl">
                  Chips SaraivaNet com dados que acumulam
                </h1>
                <p className="mt-4 text-muted-foreground text-lg">
                  Assine, use quando precisar e acumule o que sobrar. Planos simples, cobertura nacional e suporte de quem você confia.
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

                <ul className="mt-8 grid gap-3 text-sm text-muted-foreground md:grid-cols-2">
                  {[
                    "Dados que não vencem: acumulam mês a mês",
                    "Planos flexíveis e sem burocracia",
                    "Cobertura 4G ampla para o dia a dia",
                    "Ativação rápida e suporte local",
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle className="mt-0.5 h-5 w-5 text-primary" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="relative">
                <div className="absolute -inset-6 rounded-3xl bg-primary/10 blur-2xl" aria-hidden="true" />
                <img
                  src="/lovable-uploads/935d3409-f4aa-423b-937b-2d4df265cbed.png"
                  alt="Mockup do chip SaraivaNet com destaque para dados acumulativos"
                  className="relative z-10 mx-auto h-auto w-full max-w-md rounded-2xl"
                  loading="eager"
                />
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
      </main>
    </>
  );
};

export default Chips;
