
import { MessageCircle, Phone } from "lucide-react";

const FloatingWhatsApp = () => {
  const handleWhatsAppClick = () => {
    const phoneNumber = "5589994395789";
    const message = "Olá! Gostaria de saber mais sobre os planos da SaraivaNet.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="fixed bottom-20 right-4 md:bottom-6 md:right-6 z-40 flex items-center gap-4">
      {/* Desktop label with premium styling */}
      <div className="hidden md:block glass-card px-4 py-3 rounded-2xl text-sm font-semibold text-gray-800 dark:text-white shadow-xl border border-green-200/30 dark:border-green-700/30">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
          Fale conosco no WhatsApp
        </div>
      </div>
      
      {/* Premium WhatsApp button */}
      <button
        onClick={handleWhatsAppClick}
        className="group relative bg-gradient-to-br from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white w-16 h-16 rounded-2xl shadow-2xl hover:shadow-green-500/30 transition-all duration-300 hover:scale-110 hover:-translate-y-1 flex items-center justify-center"
        aria-label="Entrar em contato via WhatsApp"
      >
        {/* Glow effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-green-400 to-green-600 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-xl"></div>
        
        {/* Main icon */}
        <div className="relative z-10">
          <MessageCircle className="w-8 h-8 drop-shadow-lg" />
        </div>
        
        {/* Phone indicator for mobile */}
        <div className="absolute -top-1 -right-1 w-5 h-5 bg-white rounded-full flex items-center justify-center md:hidden shadow-lg">
          <Phone className="w-3 h-3 text-green-600" />
        </div>
        
        {/* Shine effect */}
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
        
        {/* Mobile tooltip */}
        <div className="absolute bottom-full right-0 mb-3 px-3 py-2 bg-gray-900 text-white text-xs rounded-lg opacity-0 group-active:opacity-100 transition-opacity duration-200 whitespace-nowrap md:hidden pointer-events-none shadow-xl">
          WhatsApp
          <div className="absolute top-full right-2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
        </div>
      </button>
    </div>
  );
};

export default FloatingWhatsApp;
