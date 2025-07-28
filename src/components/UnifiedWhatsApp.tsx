import { MessageCircle, X, Phone } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

interface WhatsAppContact {
  number: string;
  name: string;
  message?: string;
}

interface UnifiedWhatsAppProps {
  position?: 'floating' | 'inline';
  variant?: 'expanded' | 'simple' | 'button';
  size?: 'sm' | 'md' | 'lg';
  contacts?: WhatsAppContact[];
  className?: string;
}

const UnifiedWhatsApp = ({ 
  position = 'floating',
  variant = 'simple',
  size = 'md',
  contacts = [
    { 
      number: "5589994395789", 
      name: "SaraivaNet", 
      message: "Olá! Gostaria de saber mais sobre os planos da SaraivaNet." 
    }
  ],
  className = ""
}: UnifiedWhatsAppProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleWhatsAppClick = (contact: WhatsAppContact) => {
    const whatsappUrl = contact.message 
      ? `https://wa.me/${contact.number}?text=${encodeURIComponent(contact.message)}`
      : `https://wa.me/${contact.number}`;
    window.open(whatsappUrl, '_blank');
    setIsExpanded(false);
  };

  // Configurações de tamanho
  const sizeClasses = {
    sm: {
      button: 'w-12 h-12',
      icon: 'w-5 h-5',
      text: 'text-sm',
      padding: 'p-3'
    },
    md: {
      button: 'w-16 h-16',
      icon: 'w-6 h-6',
      text: 'text-base',
      padding: 'p-4'
    },
    lg: {
      button: 'w-20 h-20',
      icon: 'w-8 h-8',
      text: 'text-lg',
      padding: 'p-6'
    }
  };

  const currentSize = sizeClasses[size];

  // Versão flutuante (padrão do site)
  if (position === 'floating') {
    return (
      <div className={`fixed bottom-6 right-6 z-50 ${className}`}>
        {/* Cartão expandido */}
        {isExpanded && variant === 'expanded' && (
          <div className="absolute bottom-20 right-0 w-80 max-w-[90vw] bg-white/95 backdrop-blur-xl rounded-2xl shadow-xl border border-orange-200/50 p-6 animate-scale-in transform origin-bottom-right">
            {/* Cabeçalho */}
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center">
                  <MessageCircle className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-800 text-sm">SaraivaNet</h3>
                  <p className="text-xs text-orange-600">Online agora</p>
                </div>
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsExpanded(false)}
                className="text-gray-400 hover:text-gray-600 w-8 h-8"
              >
                <X className="w-4 h-4" />
              </Button>
            </div>

            {/* Mensagem */}
            <div className="bg-orange-50 rounded-xl p-4 mb-4">
              <p className="text-sm text-gray-700 leading-relaxed">
                👋 Olá! Como podemos ajudar você hoje? Estamos prontos para esclarecer suas dúvidas sobre nossos planos!
              </p>
            </div>

            {/* Contatos */}
            <div className="space-y-2">
              {contacts.map((contact, index) => (
                <Button
                  key={index}
                  onClick={() => handleWhatsAppClick(contact)}
                  className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-semibold py-3 px-4 rounded-xl transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-4 h-4" />
                  Conversar com {contact.name}
                </Button>
              ))}
            </div>
          </div>
        )}

        {/* Botão flutuante */}
        <Button
          onClick={() => {
            if (variant === 'expanded') {
              setIsExpanded(!isExpanded);
            } else {
              handleWhatsAppClick(contacts[0]);
            }
          }}
          className={`${currentSize.button} relative bg-gradient-to-br from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 shadow-xl hover:shadow-orange transition-all duration-300 rounded-full hover:scale-110 border-2 border-white/20`}
        >
          <div className="relative z-10">
            {isExpanded && variant === 'expanded' ? (
              <X className={`${currentSize.icon} text-white`} />
            ) : (
              <MessageCircle className={`${currentSize.icon} text-white`} />
            )}
          </div>
          {/* Efeito ondulação */}
          <div className="absolute inset-0 bg-white/20 rounded-full scale-0 group-hover:scale-100 transition-transform duration-500"></div>
        </Button>
      </div>
    );
  }

  // Versão inline (para usar em outros componentes)
  if (position === 'inline') {
    return (
      <Button
        onClick={() => handleWhatsAppClick(contacts[0])}
        className={`bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-semibold ${currentSize.padding} rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-orange flex items-center gap-2 ${className}`}
      >
        <MessageCircle className={currentSize.icon} />
        <span className={currentSize.text}>WhatsApp</span>
      </Button>
    );
  }

  return null;
};

export default UnifiedWhatsApp;