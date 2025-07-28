
import { MessageCircle, X } from "lucide-react";
import { useState } from "react";

const FloatingWhatsApp = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleWhatsAppClick = () => {
    const phoneNumber = "5589994395789";
    const message = "Olá! Gostaria de saber mais sobre os planos da SaraivaNet.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-end gap-3">
      {/* Cartão expandido */}
      {isExpanded && (
        <div className="absolute bottom-20 right-0 w-80 max-w-[90vw] bg-white rounded-2xl shadow-2xl border border-gray-200 p-6 animate-scale-in transform origin-bottom-right">
          {/* Cabeçalho */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center">
                <MessageCircle className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-gray-800">SaraivaNet</h3>
                <p className="text-xs text-green-600">Online agora</p>
              </div>
            </div>
            <button
              onClick={() => setIsExpanded(false)}
              className="text-gray-400 hover:text-gray-600 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Mensagem */}
          <div className="bg-gray-50 rounded-xl p-4 mb-4">
            <p className="text-sm text-gray-700 leading-relaxed">
              👋 Olá! Como podemos ajudar você hoje? Estamos aqui para tirar suas dúvidas sobre nossos planos de internet e SaraivaTV!
            </p>
          </div>

          {/* Ações */}
          <div className="space-y-2">
            <button
              onClick={handleWhatsAppClick}
              className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-4 rounded-xl transition-colors flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-4 h-4" />
              Conversar no WhatsApp
            </button>
            <div className="flex gap-2">
              <button
                onClick={() => {
                  const message = "Gostaria de saber sobre os planos de internet disponíveis.";
                  const whatsappUrl = `https://wa.me/5589994395789?text=${encodeURIComponent(message)}`;
                  window.open(whatsappUrl, '_blank');
                }}
                className="flex-1 bg-orange-500 hover:bg-orange-600 text-white text-xs font-medium py-2 px-3 rounded-lg transition-colors"
              >
                📶 Ver Planos
              </button>
              <button
                onClick={() => {
                  const message = "Preciso verificar a cobertura na minha região.";
                  const whatsappUrl = `https://wa.me/5589994395789?text=${encodeURIComponent(message)}`;
                  window.open(whatsappUrl, '_blank');
                }}
                className="flex-1 bg-blue-500 hover:bg-blue-600 text-white text-xs font-medium py-2 px-3 rounded-lg transition-colors"
              >
                📍 Cobertura
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Rótulo de texto do WhatsApp - sempre visível */}
      {!isExpanded && (
        <div className="bg-white shadow-lg rounded-full px-4 py-2 border border-gray-200">
          <p className="text-sm font-medium text-gray-700 whitespace-nowrap">💬 WhatsApp</p>
        </div>
      )}

      {/* Botão flutuante */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className={`relative bg-gradient-to-br from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 shadow-2xl transition-all duration-300 flex items-center justify-center rounded-full group overflow-hidden ${
          isExpanded ? 'w-14 h-14' : 'w-16 h-16 hover:scale-110'
        }`}
        style={{
          boxShadow: '0 8px 32px rgba(34, 197, 94, 0.4)'
        }}
      >
        {/* Ícone */}
        <div className="relative z-10">
          {isExpanded ? (
            <X className="w-7 h-7 text-white transition-transform duration-300" />
          ) : (
            <MessageCircle className="w-8 h-8 text-white transition-transform duration-300 group-hover:scale-110" />
          )}
        </div>

        {/* Efeito ondulação no hover */}
        <div className="absolute inset-0 bg-white/20 rounded-full scale-0 group-hover:scale-100 transition-transform duration-500"></div>
      </button>
    </div>
  );
};

export default FloatingWhatsApp;
