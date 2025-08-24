import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { 
  Smartphone, 
  CheckCircle, 
  Shield, 
  Clock, 
  MessageCircle, 
  Phone,
  Wifi,
  DollarSign,
  Users,
  Award,
  ArrowRight
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

      <main className="min-h-screen bg-white">
        {/* Cabeçalho Simples */}
        <header className="bg-blue-900 text-white py-6">
          <div className="max-w-6xl mx-auto px-4">
            <div className="flex items-center justify-between">
              <Link to="/" className="text-2xl font-bold">SaraivaNet</Link>
              <div className="flex items-center gap-4 text-lg">
                <Phone className="w-5 h-5" />
                <span>(85) 9999-5789</span>
              </div>
            </div>
          </div>
        </header>

        {/* Seção Principal */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4 text-center">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Planos de Celular com Internet de Qualidade
              </h1>
              <p className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed">
                Escolha o plano ideal para você e sua família. <br />
                <strong>Sem complicação, sem letra miúda.</strong>
              </p>
              
              {/* Benefícios Principais */}
              <div className="grid md:grid-cols-3 gap-6 mb-12">
                <div className="bg-white p-6 rounded-lg shadow-sm border">
                  <CheckCircle className="w-12 h-12 text-green-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Sem Surpresas</h3>
                  <p className="text-gray-600">Valor fixo todo mês, sem taxas escondidas</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm border">
                  <Wifi className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Internet Rápida</h3>
                  <p className="text-gray-600">4G e 5G em todo o Brasil</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm border">
                  <Users className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Atendimento Humano</h3>
                  <p className="text-gray-600">Pessoas reais te ajudam sempre</p>
                </div>
              </div>

              <a href={waUrl} target="_blank" rel="noreferrer">
                <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white px-12 py-6 text-xl rounded-lg">
                  <MessageCircle className="w-6 h-6 mr-3" />
                  Falar com Atendente no WhatsApp
                  <ArrowRight className="w-6 h-6 ml-3" />
                </Button>
              </a>
            </div>
          </div>
        </section>

        {/* Seção de Planos */}
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Nossos Planos
              </h2>
              <p className="text-xl text-gray-600">
                Escolha o que melhor se adapta ao seu uso
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {plans.map((plan) => (
                <Card key={plan.id} className={`relative p-8 ${plan.recommended ? 'border-2 border-blue-500 shadow-lg' : 'border border-gray-200'}`}>
                  {plan.recommended && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <Badge className="bg-blue-500 text-white px-4 py-2 text-sm font-semibold">
                        <Award className="w-4 h-4 mr-1" />
                        Mais Escolhido
                      </Badge>
                    </div>
                  )}
                  
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.title}</h3>
                    <div className="mb-4">
                      <span className="text-4xl font-bold text-blue-600">{plan.price}</span>
                      <span className="text-gray-600 ml-2">{plan.period}</span>
                    </div>
                    <div className="text-3xl font-bold text-gray-900 mb-4">{plan.data}</div>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <a href={waUrl} target="_blank" rel="noreferrer" className="block">
                    <Button 
                      className={`w-full py-3 text-lg ${
                        plan.recommended 
                          ? 'bg-blue-600 hover:bg-blue-700 text-white' 
                          : 'bg-gray-100 hover:bg-gray-200 text-gray-900 border border-gray-300'
                      }`}
                    >
                      Contratar este Plano
                    </Button>
                  </a>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Como Funciona */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Como Funciona
              </h2>
              <p className="text-xl text-gray-600">
                Em 3 passos simples você já está conectado
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  1
                </div>
                <h3 className="text-xl font-semibold mb-3">Escolha seu Plano</h3>
                <p className="text-gray-600">
                  Clique no WhatsApp e fale com nosso atendente. 
                  Ele vai te ajudar a escolher o melhor plano.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  2
                </div>
                <h3 className="text-xl font-semibold mb-3">Receba o Chip</h3>
                <p className="text-gray-600">
                  Enviamos o chip pelos Correios direto na sua casa, 
                  sem custo adicional.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  3
                </div>
                <h3 className="text-xl font-semibold mb-3">Pronto para Usar</h3>
                <p className="text-gray-600">
                  Coloque o chip no celular e pronto! 
                  Sua internet já está funcionando.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Perguntas Frequentes */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Perguntas Frequentes
              </h2>
              <p className="text-xl text-gray-600">
                Tire suas dúvidas sobre nossos planos
              </p>
            </div>

            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border border-gray-200 rounded-lg px-6">
                  <AccordionTrigger className="text-left text-lg font-semibold py-6 hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700 text-base leading-relaxed pb-6">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* Chamada Final */}
        <section className="py-16 bg-blue-900 text-white">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Pronto para se Conectar?
            </h2>
            <p className="text-xl mb-8 leading-relaxed">
              Nosso time está esperando para te ajudar a escolher o melhor plano. <br />
              <strong>Atendimento de segunda a sexta, das 8h às 18h.</strong>
            </p>
            
            <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
              <a href={waUrl} target="_blank" rel="noreferrer">
                <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 text-lg">
                  <MessageCircle className="w-6 h-6 mr-3" />
                  Conversar no WhatsApp
                </Button>
              </a>
              
              <div className="flex items-center gap-3 text-lg">
                <Phone className="w-5 h-5" />
                <span>ou ligue: (85) 9999-5789</span>
              </div>
            </div>
          </div>
        </section>

        {/* Rodapé */}
        <footer className="py-8 bg-gray-100 border-t">
          <div className="max-w-6xl mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="text-gray-600">
                © 2024 SaraivaNet - Todos os direitos reservados
              </div>
              <div className="flex items-center gap-6">
                <Link to="/" className="text-blue-600 hover:underline">
                  Página Inicial
                </Link>
                <span className="text-gray-400">|</span>
                <span className="text-gray-600">CNPJ: 00.000.000/0001-00</span>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
};

export default Chips;