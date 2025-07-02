
import React from 'react';

const FAQ = () => {
  const faqs = [
    {
      question: "Como funciona a instalação?",
      answer: "Nossa equipe agenda um horário e realiza toda a instalação profissional."
    },
    {
      question: "Qual a área de cobertura?",
      answer: "Atendemos toda a região com fibra ótica de alta qualidade."
    },
    {
      question: "Há taxa de instalação?",
      answer: "A instalação é gratuita para todos os nossos planos."
    }
  ];

  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">
                {faq.question}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
