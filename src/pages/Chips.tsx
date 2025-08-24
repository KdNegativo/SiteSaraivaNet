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

      <main className="min-h-screen bg-white">
        {/* About Section - Following Reference Design */}
        <section className="py-20 md:py-24 bg-gradient-to-br from-gray-50 to-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Left Content */}
              <div className="space-y-8">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-medium">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  Sobre nossos chips
                </div>

                {/* Main Title */}
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                  <span className="text-gray-900">Tecnologia que</span>
                  <br />
                  <span className="text-gray-900">revoluciona</span>
                  <br />
                  <span className="text-blue-600">sua experiência móvel</span>
                </h1>

                {/* Description */}
                <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
                  <p>
                    Na SaraivaNet, oferecemos chips com tecnologia inovadora 
                    de dados acumulativos. Uma revolução que garante que você{' '}
                    <span className="text-blue-600 font-semibold">nunca perca o que pagou</span>{' '}
                    - todos os dados não utilizados são automaticamente transferidos para o próximo mês.
                  </p>
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-2 gap-6 py-8">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Ativação em até 24 horas</h3>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                      <Users className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Suporte técnico especializado</h3>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                      <InfinityIcon className="w-5 h-5 text-purple-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Cobertura 4G em todo o país</h3>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center">
                      <Star className="w-5 h-5 text-yellow-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Sem taxas de cancelamento</h3>
                    </div>
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <a href={waUrl} target="_blank" rel="noreferrer">
                    <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold text-lg flex items-center gap-2 w-full sm:w-auto">
                      Falar com especialista
                      <ArrowRight className="w-5 h-5" />
                    </Button>
                  </a>
                  <Link to="/">
                    <Button variant="outline" className="border-2 border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-3 rounded-lg font-semibold text-lg w-full sm:w-auto">
                      Ver cobertura
                    </Button>
                  </Link>
                </div>
              </div>

              {/* Right Side - WhatsApp Image */}
              <div className="relative">
                <div className="relative bg-gray-100 rounded-2xl p-8 shadow-lg">
                  <div className="w-full h-80 bg-gradient-to-br from-gray-200 to-gray-300 rounded-xl flex items-center justify-center relative overflow-hidden">
                    {/* WhatsApp Icon Background Pattern */}
                    <div className="absolute inset-0 opacity-10">
                      <div className="w-full h-full" style={{
                        backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(0,0,0,0.1) 10px, rgba(0,0,0,0.1) 20px)`,
                      }}></div>
                    </div>
                    
                    {/* WhatsApp Icon */}
                    <div className="relative w-32 h-32 bg-green-500 rounded-full flex items-center justify-center shadow-2xl">
                      <svg className="w-16 h-16 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.891 3.488"/>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section - Dark Background */}
        <section className="py-20 md:py-24 bg-gray-900 text-white">
          <div className="max-w-4xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-orange-400">
                Perguntas Frequentes
              </h2>
              <p className="text-xl text-gray-300">
                Tire suas dúvidas sobre os planos de chips com dados acumulativos.
              </p>
            </div>

            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-1" className="border border-gray-700 rounded-lg bg-gray-800/50">
                <AccordionTrigger className="px-6 py-4 text-left hover:no-underline hover:bg-gray-700/50 rounded-t-lg">
                  <span className="text-lg font-semibold text-white">
                    É necessário pagar alguma taxa para aderir ao plano?
                  </span>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-300 text-base leading-relaxed">
                  Não, não cobramos nenhuma taxa de adesão. Você paga apenas a mensalidade do seu plano escolhido.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="border border-gray-700 rounded-lg bg-gray-800/50">
                <AccordionTrigger className="px-6 py-4 text-left hover:no-underline hover:bg-gray-700/50 rounded-t-lg">
                  <span className="text-lg font-semibold text-white">
                    Como é feito a portabilidade do número?
                  </span>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-300 text-base leading-relaxed">
                  A portabilidade é feita de forma simples e gratuita. Nossa equipe técnica te auxilia em todo o processo, que leva até 3 dias úteis para ser concluído.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="border border-gray-700 rounded-lg bg-gray-800/50">
                <AccordionTrigger className="px-6 py-4 text-left hover:no-underline hover:bg-gray-700/50 rounded-t-lg">
                  <span className="text-lg font-semibold text-white">
                    Como é feita a renovação do plano?
                  </span>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-300 text-base leading-relaxed">
                  A renovação é automática todo mês na data de vencimento do seu plano. Os dados não utilizados são automaticamente transferidos para o próximo ciclo.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="border border-gray-700 rounded-lg bg-gray-800/50">
                <AccordionTrigger className="px-6 py-4 text-left hover:no-underline hover:bg-gray-700/50 rounded-t-lg">
                  <span className="text-lg font-semibold text-white">
                    Posso cancelar meu plano a qualquer momento?
                  </span>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-300 text-base leading-relaxed">
                  Sim, você pode cancelar seu plano a qualquer momento sem taxa de cancelamento. O cancelamento é efetivado no final do período já pago.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="border border-gray-700 rounded-lg bg-gray-800/50">
                <AccordionTrigger className="px-6 py-4 text-left hover:no-underline hover:bg-gray-700/50 rounded-t-lg">
                  <span className="text-lg font-semibold text-white">
                    Como funciona o acúmulo de dados?
                  </span>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-300 text-base leading-relaxed">
                  Nossa tecnologia exclusiva permite que todos os dados não utilizados no mês sejam automaticamente transferidos para o próximo período, sem limite de acúmulo.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>

        {/* Plans Section */}
        <section className="py-20 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
                Escolha seu plano
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Todos os planos incluem dados acumulativos e cobertura nacional
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-3 max-w-5xl mx-auto">
              {plans.map((plan, index) => (
                <Card key={plan.id} className={`relative p-8 rounded-2xl border-2 transition-all duration-300 hover:shadow-xl ${
                  plan.best 
                    ? "border-blue-500 bg-blue-50 shadow-lg" 
                    : "border-gray-200 bg-white hover:border-blue-300"
                }`}>
                  
                  {plan.best && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-bold">
                        MAIS POPULAR
                      </div>
                    </div>
                  )}
                  
                  <div className="text-center">
                    <div className="mb-6">
                      <div className={`w-16 h-16 mx-auto rounded-2xl flex items-center justify-center mb-4 ${
                        plan.best ? "bg-blue-500" : "bg-gray-100"
                      }`}>
                        <Smartphone className={`w-8 h-8 ${plan.best ? "text-white" : "text-gray-600"}`} />
                      </div>
                      <h3 className="text-2xl font-bold mb-2 text-gray-900">{plan.title}</h3>
                      <div className="text-4xl font-black text-blue-600 mb-2">{plan.data}</div>
                      <div className="text-xl font-semibold text-gray-600">{plan.price}</div>
                    </div>

                    <div className="space-y-4 mb-8">
                      {['Dados acumulativos', 'Cobertura nacional', 'Suporte 24/7', 'Sem fidelidade'].map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-3">
                          <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <a href={waUrl} target="_blank" rel="noreferrer">
                      <Button className={`w-full py-3 rounded-xl font-semibold text-lg transition-all duration-300 ${
                        plan.best 
                          ? "bg-blue-600 hover:bg-blue-700 text-white" 
                          : "bg-gray-100 hover:bg-gray-200 text-gray-900"
                      }`}>
                        Escolher Plano
                      </Button>
                    </a>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

      </main>
    </>
  );
};

export default Chips;
