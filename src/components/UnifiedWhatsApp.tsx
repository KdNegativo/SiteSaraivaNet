import { MessageCircle, X, Phone } from "lucide-react";
import { useState } from "react";

interface UnifiedWhatsAppProps {
  variant?: 'floating' | 'button' | 'card';
  message?: string;
  className?: string;
  children?: React.ReactNode;
}

const UnifiedWhatsApp = ({ 
  variant = 'floating', 
  message = "Olá! Gostaria de saber mais sobre os planos da SaraivaNet.",
  className = "",
  children
}: UnifiedWhatsAppProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  
  const phoneNumber = "5589994395789";
  
  const handleWhatsAppClick = (customMessage?: string) => {
    const finalMessage = customMessage || message;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(finalMessage)}`;
    window.open(whatsappUrl, '_blank');
  };

  // Floating variant (substitui FloatingWhatsApp)
  if (variant === 'floating') {
    return (
      <div className="fixed bottom-6 right-6 z-50 flex items-end gap-3">
        {/* Card expandido */}
        {isExpanded && (
          <div className="absolute bottom-20 right-0 w-80 max-w-[90vw] bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-orange-200/50 p-6 animate-scale-in transform origin-bottom-right">
            {/* Header */}
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
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-4 mb-4 border border-orange-200/50">
              <p className="text-sm text-gray-700 leading-relaxed">
                👋 Olá! Como podemos ajudar você hoje? Estamos aqui para tirar suas dúvidas sobre nossos planos de internet e SaraivaTV!
              </p>
            </div>

            {/* Ações rápidas */}
            <div className="space-y-2">
              <button
                onClick={() => handleWhatsAppClick()}
                className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-semibold py-3 px-4 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl hover:scale-105"
              >
                <MessageCircle className="w-4 h-4" />
                Conversar no WhatsApp
              </button>
              
              <div className="flex gap-2">
                <button
                  onClick={() => handleWhatsAppClick("Gostaria de saber sobre os planos de internet disponíveis.")}
                  className="flex-1 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white text-xs font-medium py-2 px-3 rounded-lg transition-all duration-300 hover:scale-105"
                >
                  📶 Ver Planos
                </button>
                <button
                  onClick={() => handleWhatsAppClick("Preciso verificar a cobertura na minha região.")}
                  className="flex-1 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white text-xs font-medium py-2 px-3 rounded-lg transition-all duration-300 hover:scale-105"
                >
                  📍 Cobertura
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Label - sempre visível quando não expandido */}
        {!isExpanded && (
          <div className="bg-white/90 backdrop-blur-md shadow-lg rounded-full px-4 py-2 border border-orange-200/50">
            <p className="text-sm font-medium text-gray-700 whitespace-nowrap">💬 WhatsApp</p>
          </div>
        )}

        {/* Botão flutuante */}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className={`relative bg-gradient-to-br from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 shadow-2xl transition-all duration-300 flex items-center justify-center rounded-full group overflow-hidden ${
            isExpanded ? 'w-14 h-14' : 'w-16 h-16 hover:scale-110'
          }`}
          style={{ boxShadow: '0 8px 32px rgba(34, 197, 94, 0.4)' }}
        >
          <div className="relative z-10">
            {isExpanded ? (
              <X className="w-7 h-7 text-white transition-transform duration-300" />
            ) : (
              <MessageCircle className="w-8 h-8 text-white transition-transform duration-300 group-hover:scale-110" />
            )}
          </div>
          <div className="absolute inset-0 bg-white/20 rounded-full scale-0 group-hover:scale-100 transition-transform duration-500"></div>
        </button>
      </div>
    );
  }

  // Button variant (para CTAs)
  if (variant === 'button') {
    return (
      <button
        onClick={() => handleWhatsAppClick()}
        className={`bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold px-6 py-3 rounded-xl transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-xl hover:scale-105 ${className}`}
      >
        <MessageCircle className="w-5 h-5" />
        {children || "WhatsApp"}
      </button>
    );
  }

  // Card variant (para seções específicas)
  if (variant === 'card') {
    return (
      <div className={`bg-white/90 backdrop-blur-xl rounded-2xl p-6 border border-orange-200/50 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 ${className}`}>
        <div className="flex items-center gap-4 mb-4">
          <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center">
            <Phone className="w-6 h-6 text-white" />
          </div>
          <div>
            <h3 className="font-bold text-gray-800">Fale Conosco</h3>
            <p className="text-sm text-gray-600">Atendimento personalizado</p>
          </div>
        </div>
        
        {children}
        
        <button
          onClick={() => handleWhatsAppClick()}
          className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-semibold py-3 px-4 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl hover:scale-105"
        >
          <MessageCircle className="w-5 h-5" />
          Conversar no WhatsApp
        </button>
      </div>
    );
  }

  return null;
};

export default UnifiedWhatsApp;