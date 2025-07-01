
import { useState } from 'react';
import { MessageCircle, Phone, HelpCircle, X, Sparkles } from 'lucide-react';
import AnimatedIcon from './AnimatedIcon';

const FloatingActionButton = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleWhatsAppClick = () => {
    const phoneNumber = "5589994395789";
    const message = "Olá! Gostaria de saber mais sobre os planos da SaraivaNet.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    setIsMenuOpen(false);
  };

  const handleChatBotClick = () => {
    // Trigger the chatbot opening - we'll need to communicate with the ChatBot component
    const event = new CustomEvent('openChatBot');
    window.dispatchEvent(event);
    setIsMenuOpen(false);
  };

  return (
    <div className="fixed bottom-6 right-4 md:right-6 z-50">
      {/* Menu Options */}
      {isMenuOpen && (
        <div className="absolute bottom-20 right-0 space-y-3 animate-scale-in">
          {/* WhatsApp Option */}
          <div className="flex items-center gap-3">
            <div className="hidden md:block glass-card px-4 py-3 rounded-2xl text-sm font-semibold text-gray-800 dark:text-white shadow-xl border border-green-200/30 dark:border-green-700/30">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                Fale conosco no WhatsApp
              </div>
            </div>
            <button
              onClick={handleWhatsAppClick}
              className="group relative bg-gradient-to-br from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white w-14 h-14 rounded-2xl shadow-2xl hover:shadow-green-500/30 transition-all duration-300 hover:scale-110 hover:-translate-y-1 flex items-center justify-center"
              aria-label="Entrar em contato via WhatsApp"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-green-400 to-green-600 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-xl"></div>
              <div className="relative z-10">
                <MessageCircle className="w-6 h-6 drop-shadow-lg" />
              </div>
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-white rounded-full flex items-center justify-center md:hidden shadow-lg">
                <Phone className="w-2 h-2 text-green-600" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
            </button>
          </div>

          {/* ChatBot Option */}
          <div className="flex items-center gap-3">
            <div className="hidden md:block glass-card px-4 py-3 rounded-2xl text-sm font-semibold text-gray-800 dark:text-white shadow-xl border border-blue-200/30 dark:border-blue-700/30">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-blue-600 animate-pulse" />
                Tire suas dúvidas
              </div>
            </div>
            <button
              onClick={handleChatBotClick}
              className="group relative bg-gradient-to-br from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white w-14 h-14 rounded-2xl shadow-2xl hover:shadow-blue-500/30 transition-all duration-300 hover:scale-110 hover:-translate-y-1 flex items-center justify-center"
              aria-label="Abrir chat de dúvidas frequentes"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-600 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-xl"></div>
              <div className="relative z-10">
                <AnimatedIcon animation="float">
                  <MessageCircle className="w-6 h-6 drop-shadow-lg" />
                </AnimatedIcon>
              </div>
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-white rounded-full flex items-center justify-center md:hidden shadow-lg">
                <HelpCircle className="w-2 h-2 text-blue-600" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
            </button>
          </div>
        </div>
      )}

      {/* Main Floating Button */}
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className={`group relative text-white w-16 h-16 rounded-2xl shadow-2xl transition-all duration-300 hover:scale-110 hover:-translate-y-1 flex items-center justify-center ${
          isMenuOpen 
            ? 'bg-gradient-to-br from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 hover:shadow-red-500/30' 
            : 'bg-gradient-to-br from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 hover:shadow-purple-500/30'
        }`}
        aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu de contato"}
      >
        {/* Glow effect */}
        <div className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-xl ${
          isMenuOpen 
            ? 'bg-gradient-to-br from-red-400 to-red-600' 
            : 'bg-gradient-to-br from-purple-400 to-pink-600'
        }`}></div>
        
        {/* Main icon */}
        <div className="relative z-10">
          <AnimatedIcon animation={isMenuOpen ? "pulse" : "pulse"}>
            {isMenuOpen ? (
              <X className="w-8 h-8 drop-shadow-lg" />
            ) : (
              <MessageCircle className="w-8 h-8 drop-shadow-lg" />
            )}
          </AnimatedIcon>
        </div>
        
        {/* Shine effect */}
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
        
        {/* Mobile tooltip */}
        <div className="absolute bottom-full right-0 mb-3 px-3 py-2 bg-gray-900 text-white text-xs rounded-lg opacity-0 group-active:opacity-100 transition-opacity duration-200 whitespace-nowrap md:hidden pointer-events-none shadow-xl">
          {isMenuOpen ? 'Fechar' : 'Contato'}
          <div className="absolute top-full right-2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
        </div>
      </button>
    </div>
  );
};

export default FloatingActionButton;
