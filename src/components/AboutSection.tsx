
import { Users, Award, MapPin, HeartHandshake } from "lucide-react";

const AboutSection = () => {
  const stats = [
    { icon: Users, value: "5000+", label: "Clientes Satisfeitos" },
    { icon: Award, value: "10+", label: "Anos de Experiência" },
    { icon: MapPin, value: "100%", label: "Cobertura da Cidade" },
    { icon: HeartHandshake, value: "24/7", label: "Suporte Técnico" }
  ];

  return (
    <section id="sobre" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Sobre a SaraivaNet
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Somos uma empresa local de Eliseu Martins, comprometida em oferecer 
            a melhor conexão de internet para nossa comunidade.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div key={index} className="text-center">
                <IconComponent className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            );
          })}
        </div>

        <div className="bg-white rounded-xl p-8 shadow-lg">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Nossa Missão
              </h3>
              <p className="text-gray-600 mb-6">
                Levar internet de qualidade para todos os cantos de Eliseu Martins, 
                conectando famílias, empresas e sonhos. Acreditamos que uma boa 
                conexão transforma vidas e abre oportunidades.
              </p>
              <p className="text-gray-600">
                Com tecnologia de ponta e atendimento humanizado, trabalhamos 
                todos os dias para ser a melhor escolha em internet da região.
              </p>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-lg p-8">
              <h4 className="text-xl font-semibold text-gray-900 mb-4">
                Por que escolher a SaraivaNet?
              </h4>
              <ul className="space-y-3 text-gray-600">
                <li>✓ Empresa local e confiável</li>
                <li>✓ Tecnologia fibra ótica</li>
                <li>✓ Preços justos e transparentes</li>
                <li>✓ Suporte técnico especializado</li>
                <li>✓ Instalação rápida e gratuita</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
