
import React from 'react';

const Pricing = () => {
  const plans = [
    {
      name: "Básico",
      speed: "100MB",
      price: "R$ 79,90"
    },
    {
      name: "Premium",
      speed: "300MB",
      price: "R$ 99,90"
    },
    {
      name: "Ultra",
      speed: "600MB",
      price: "R$ 129,90"
    }
  ];

  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg text-center">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                {plan.name}
              </h3>
              <div className="text-4xl font-bold text-blue-600 mb-4">
                {plan.price}
              </div>
              <div className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                {plan.speed}
              </div>
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition-colors">
                Contratar
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
