
import React, { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import TouchButton from "./TouchButton";
import { CheckCircle, Zap, Wifi, Rocket, ChevronLeft, ChevronRight } from "lucide-react";

const plans = [
  {
    id: 1,
    name: "Plano Básico",
    price: "59,90",
    speed: "100 Mbps",
    icon: Zap,
    features: ["Download: 100 Mbps", "Upload: 50 Mbps", "Fibra óptica", "Suporte 24/7"]
  },
  {
    id: 2,
    name: "Plano Intermediário",
    price: "89,90",
    speed: "300 Mbps",
    icon: Wifi,
    features: ["Download: 300 Mbps", "Upload: 150 Mbps", "Fibra óptica", "Suporte 24/7"]
  },
  {
    id: 3,
    name: "Plano Premium",
    price: "129,90",
    speed: "600 Mbps",
    icon: Zap,
    popular: true,
    features: ["Download: 600 Mbps", "Upload: 300 Mbps", "Fibra óptica", "Suporte 24/7", "WiFi 6 incluso"]
  },
  {
    id: 4,
    name: "Plano Ultra",
    price: "199,90",
    speed: "1000 Mbps",
    icon: Rocket,
    features: ["Download: 1000 Mbps", "Upload: 500 Mbps", "Fibra óptica", "Suporte 24/7", "WiFi 6 incluso", "IP fixo gratuito"]
  }
];

const MobilePlansCarousel = () => {
  const [currentPlan, setCurrentPlan] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const nextPlan = () => {
    setCurrentPlan((prev) => (prev + 1) % plans.length);
  };

  const prevPlan = () => {
    setCurrentPlan((prev) => (prev - 1 + plans.length) % plans.length);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      nextPlan();
    }
    if (isRightSwipe) {
      prevPlan();
    }
  };

  const plan = plans[currentPlan];
  const Icon = plan.icon;

  return (
    <div className="md:hidden">
      <div className="relative">
        <div
          className="overflow-hidden"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
            <Card className={`relative overflow-hidden group hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-gray-800 to-gray-900 shadow-lg ${
            plan.popular ? 'ring-2 ring-orange-500/50 scale-105' : ''
          }`}>
            {plan.popular && (
              <div className="absolute top-0 right-0 bg-orange-500 text-white px-2 py-1 text-xs font-bold rounded-bl-lg">
                POPULAR
              </div>
            )}
            <CardContent className="p-4">
              <div className="text-center">
                <Icon className="w-12 h-12 text-orange-400 mx-auto mb-3" />
                <h4 className="text-lg font-bold text-white mb-2">{plan.name}</h4>
                <div className="text-2xl font-bold text-orange-400 mb-3">
                  R$ {plan.price}
                  <span className="text-sm text-gray-300 font-normal">/mês</span>
                </div>
                <div className="text-xl font-semibold text-gray-100 mb-4">
                  {plan.speed}
                </div>
                
                <ul className="space-y-2 mb-6 text-left">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-sm">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      <span className="text-gray-200">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <TouchButton className="w-full bg-orange-600 hover:bg-orange-700 text-white">
                  Contratar Agora
                </TouchButton>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Botões de navegação */}
        <button
          onClick={prevPlan}
          className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 dark:bg-gray-800/80 rounded-full flex items-center justify-center shadow-lg backdrop-blur-sm touch-manipulation"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        
        <button
          onClick={nextPlan}
          className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 dark:bg-gray-800/80 rounded-full flex items-center justify-center shadow-lg backdrop-blur-sm touch-manipulation"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* Indicador de pontos */}
      <div className="flex justify-center mt-4 space-x-2">
        {plans.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentPlan(index)}
            className={`w-2 h-2 rounded-full transition-all duration-200 touch-manipulation ${
              index === currentPlan ? 'bg-orange-500 w-6' : 'bg-gray-300 dark:bg-gray-600'
            }`}
          />
        ))}
      </div>

      <div className="text-center mt-4 text-xs text-gray-500 dark:text-gray-400">
        Deslize para ver outros planos
      </div>
    </div>
  );
};

export default MobilePlansCarousel;
