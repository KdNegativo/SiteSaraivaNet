
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-4">SaraivaNet</h3>
          <p className="text-gray-400 mb-6">
            Internet de alta qualidade para toda a família
          </p>
          <div className="flex justify-center space-x-8">
            <span className="text-gray-400">Telefone: (89) 99439-5789</span>
            <span className="text-gray-400">WhatsApp: (89) 99439-5789</span>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>&copy; 2024 SaraivaNet. Todos os direitos reservados.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
