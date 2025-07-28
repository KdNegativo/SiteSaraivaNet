import React from 'react';
import { MessageCircle, Phone } from 'lucide-react';
import TouchButton from './TouchButton';

interface OptimizedWhatsAppProps {
  variant?: 'floating' | 'inline' | 'minimal';
  customMessage?: string;
  size?: 'sm' | 'md' | 'lg';
}

const OptimizedWhatsApp = ({ 
  variant = 'floating', 
  customMessage = "Olá! Gostaria de contratar o plano de internet + SaraivaTV.",
  size = 'md'
}: OptimizedWhatsAppProps) => {
  const phoneNumber = "5589994395789";

  const handleWhatsAppClick = () => {
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(customMessage)}`;
    window.open(whatsappUrl, '_blank');
  };

  if (variant === 'floating') {
    return (
      <div className="fixed bottom-6 right-6 z-50 animate-fade-in">
        <TouchButton
          onClick={handleWhatsAppClick}
          className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 rounded-full shadow-2xl hover:shadow-green-500/25 group"
          aria-label="Conversar no WhatsApp"
        >
          <MessageCircle className="w-8 h-8 text-white group-hover:scale-110 transition-transform" />
          
          {/* Pulse animation */}
          <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-20"></div>
        </TouchButton>
        
        {/* Tooltip */}
        <div className="absolute bottom-20 right-0 bg-white text-gray-800 px-4 py-2 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
          Fale conosco no WhatsApp
        </div>
      </div>
    );
  }

  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  };

  if (variant === 'minimal') {
    return (
      <TouchButton
        onClick={handleWhatsAppClick}
        className={`bg-green-500 hover:bg-green-600 text-white rounded-lg transition-all duration-300 hover:scale-105 inline-flex items-center ${sizeClasses[size]}`}
      >
        <Phone className="w-4 h-4 mr-2" />
        WhatsApp
      </TouchButton>
    );
  }

  return (
    <TouchButton
      onClick={handleWhatsAppClick}
      className={`bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 inline-flex items-center ${sizeClasses[size]}`}
    >
      <MessageCircle className="w-5 h-5 mr-3" />
      Falar no WhatsApp
    </TouchButton>
  );
};

export default OptimizedWhatsApp;