
import React from 'react';

const Contact = () => {
  return (
    <section className="py-16 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
          Entre em contato conosco
        </h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
              Telefone
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              (89) 99439-5789
            </p>
          </div>
          <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
              WhatsApp
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              (89) 99439-5789
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
