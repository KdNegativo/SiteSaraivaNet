
import { MessageCircle, Phone } from "lucide-react";

const FloatingWhatsApp = () => {
  const handleWhatsAppClick = () => {
    const phoneNumber = "5589994395789";
    const message = "Olá! Gostaria de saber mais sobre os planos da SaraivaNet.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="fixed bottom-20 right-4 md:bottom-6 md:right-6 z-40 flex items-center gap-3">
      {/* Desktop label with subtle animation */}
      <div className="hidden md:block bg-green-50 dark:bg-green-900/20 text-green-800 dark:text-green-200 px-3 py-2 rounded-lg shadow-lg text-sm font-medium border border-green-200 dark:border-green-700 animate-pulse">
        Fale conosco
      </div>
      
      {/* WhatsApp button with better mobile UX */}
      <button
        onClick={handleWhatsAppClick}
        className="bg-green-500 hover:bg-green-600 hover:scale-110 transition-all duration-300 flex items-center justify-center w-14 h-14 rounded-full shadow-lg group relative"
        aria-label="Entrar em contato via WhatsApp"
      >
        {/* Icon with phone indicator for mobile */}
        <div className="relative">
          <MessageCircle className="w-7 h-7 text-white" />
          <Phone className="w-3 h-3 absolute -top-1 -right-1 bg-white text-green-600 rounded-full md:hidden" />
        </div>
        
        {/* Mobile-only tooltip on long press */}
        <div className="absolute bottom-full right-0 mb-2 px-2 py-1 bg-gray-800 text-white text-xs rounded opacity-0 group-active:opacity-100 transition-opacity duration-200 whitespace-nowrap md:hidden pointer-events-none">
          WhatsApp
        </div>
      </button>
    </div>
  );
};

export default FloatingWhatsApp;
