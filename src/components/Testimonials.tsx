
import React from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Maria Silva",
      text: "Excelente qualidade de internet, muito estável!"
    },
    {
      name: "João Santos",
      text: "Atendimento perfeito e instalação rápida."
    },
    {
      name: "Ana Costa",
      text: "Melhor internet da região, super recomendo!"
    }
  ];

  return (
    <section className="py-16 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
              <p className="text-gray-600 dark:text-gray-300 mb-4 italic">
                "{testimonial.text}"
              </p>
              <div className="font-bold text-gray-900 dark:text-white">
                - {testimonial.name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
