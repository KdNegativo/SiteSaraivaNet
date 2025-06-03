
import { Zap, Shield, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section id="home" className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Internet de Alta Velocidade
            <span className="text-blue-600 block">para Eliseu Martins</span>
          </h1>
          
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Conecte-se com a melhor internet fibra ótica da região. 
            Velocidade, estabilidade e suporte técnico de qualidade.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-3">
              Ver Planos
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-3">
              Falar no WhatsApp
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="flex flex-col items-center">
              <Zap className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-lg font-semibold mb-2">Velocidade Máxima</h3>
              <p className="text-gray-600 text-center">Fibra ótica com até 1GB de velocidade</p>
            </div>
            
            <div className="flex flex-col items-center">
              <Shield className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-lg font-semibold mb-2">Conexão Estável</h3>
              <p className="text-gray-600 text-center">99.9% de disponibilidade garantida</p>
            </div>
            
            <div className="flex flex-col items-center">
              <Clock className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-lg font-semibold mb-2">Suporte 24h</h3>
              <p className="text-gray-600 text-center">Atendimento rápido e eficiente</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
