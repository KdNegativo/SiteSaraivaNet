
import React from 'react';

const Features = () => {
  const features = [
    {
      title: "Alta Velocidade",
      description: "Internet de fibra ótica com velocidades de até 1GB"
    },
    {
      title: "Suporte 24/7",
      description: "Atendimento especializado disponível a qualquer hora"
    },
    {
      title: "Instalação Grátis",
      description: "Instalação profissional sem custo adicional"
    }
  ];

  return (
    <section className="py-16 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center p-6 rounded-lg bg-gray-50 dark:bg-gray-700">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
