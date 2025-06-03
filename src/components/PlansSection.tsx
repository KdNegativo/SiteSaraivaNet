
import { Check, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const PlansSection = () => {
  const plans = [
    {
      name: "Básico",
      speed: "100MB",
      price: "R$ 79,90",
      features: [
        "Velocidade de 100MB",
        "Wi-Fi grátis",
        "Instalação gratuita",
        "Suporte técnico"
      ],
      popular: false
    },
    {
      name: "Popular",
      speed: "300MB",
      price: "R$ 99,90",
      features: [
        "Velocidade de 300MB",
        "Wi-Fi grátis",
        "Instalação gratuita",
        "Suporte técnico 24h",
        "Netflix por 3 meses"
      ],
      popular: true
    },
    {
      name: "Premium",
      speed: "600MB",
      price: "R$ 149,90",
      features: [
        "Velocidade de 600MB",
        "Wi-Fi grátis",
        "Instalação gratuita",
        "Suporte técnico 24h",
        "Netflix por 6 meses",
        "Amazon Prime grátis"
      ],
      popular: false
    }
  ];

  return (
    <section id="planos" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Escolha seu Plano
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Temos o plano ideal para suas necessidades. Todos com fibra ótica e qualidade garantida.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <Card key={index} className={`relative ${plan.popular ? 'border-blue-500 border-2 transform scale-105' : 'border-gray-200'}`}>
              {plan.popular && (
                <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-blue-600">
                  <Star className="w-4 h-4 mr-1" />
                  Mais Popular
                </Badge>
              )}
              
              <CardHeader className="text-center">
                <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                <div className="text-4xl font-bold text-blue-600 my-4">
                  {plan.price}
                  <span className="text-lg text-gray-500">/mês</span>
                </div>
                <div className="text-xl font-semibold text-gray-700">
                  {plan.speed}
                </div>
              </CardHeader>
              
              <CardContent>
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <Check className="h-5 w-5 text-green-500 mr-3" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  className={`w-full ${plan.popular ? 'bg-blue-600 hover:bg-blue-700' : 'bg-gray-800 hover:bg-gray-900'}`}
                  size="lg"
                >
                  Contratar Agora
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PlansSection;
