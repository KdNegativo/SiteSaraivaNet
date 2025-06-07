
import { useState } from 'react';
import { MessageCircle, X, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Olá! Como posso ajudá-lo hoje? Escolha uma das opções abaixo:",
      isBot: true
    }
  ]);
  const [showOptions, setShowOptions] = useState(true);

  const faqOptions = [
    {
      question: "Como funciona a instalação?",
      answer: "A instalação é 100% GRATUITA! Nossa equipe agenda um horário conveniente e realiza todo o processo em até 2 horas, sem nenhum custo para você."
    },
    {
      question: "Qual a área de cobertura?",
      answer: "Atendemos Eliseu Martins, Colônia do Gurguéia, Manoel Emídio, Canavieira e Jerumenha. Nossa cobertura está em constante expansão!"
    },
    {
      question: "O que é o SaraivaTV?",
      answer: "É nosso app exclusivo e GRATUITO com canais de TV e rádios que você pode assistir no celular. Vem incluído com todos os planos sem custo adicional!"
    },
    {
      question: "Falar com atendente",
      answer: "Vou te direcionar para nosso WhatsApp onde nossa equipe poderá ajudá-lo melhor!",
      isWhatsApp: true
    }
  ];

  const handleFaqClick = (faq: typeof faqOptions[0]) => {
    setMessages(prev => [
      ...prev,
      { id: Date.now(), text: faq.question, isBot: false },
      { id: Date.now() + 1, text: faq.answer, isBot: true }
    ]);
    setShowOptions(false);

    if (faq.isWhatsApp) {
      setTimeout(() => {
        const phoneNumber = "5589994395789";
        const message = "Olá! Gostaria de falar com um atendente da SaraivaNet.";
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');
      }, 1500);
    }
  };

  const handleBack = () => {
    setMessages([
      {
        id: 1,
        text: "Olá! Como posso ajudá-lo hoje? Escolha uma das opções abaixo:",
        isBot: true
      }
    ]);
    setShowOptions(true);
  };

  return (
    <>
      {/* Chat Button - Melhorado para mobile */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-28 right-4 md:bottom-24 md:right-6 z-40 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-full p-3 md:p-4 shadow-2xl transition-all duration-300 hover:scale-110 flex items-center justify-center border-2 border-blue-500 animate-pulse"
        aria-label="Abrir chat"
      >
        <MessageCircle className="w-5 h-5 md:w-6 md:h-6" />
      </button>

      {/* Chat Window - Melhorado para mobile */}
      {isOpen && (
        <div className="fixed inset-2 md:inset-x-4 md:bottom-4 md:top-auto md:right-6 md:left-auto md:w-96 z-50 animate-scale-in">
          <Card className="w-full h-full md:h-[28rem] flex flex-col shadow-2xl border-2 border-blue-200 overflow-hidden bg-white/95 backdrop-blur-sm">
            {/* Header - Melhorado */}
            <div className="bg-gradient-to-r from-blue-600 via-blue-700 to-purple-600 text-white p-3 md:p-4 flex justify-between items-center shadow-lg">
              <div className="flex items-center gap-2">
                {!showOptions && (
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={handleBack}
                    className="text-white hover:bg-white/20 w-8 h-8 rounded-full"
                  >
                    <ArrowLeft className="w-4 h-4" />
                  </Button>
                )}
                <div>
                  <h3 className="font-bold text-sm md:text-base">🤖 SaraivaNet Bot</h3>
                  <p className="text-xs opacity-90 flex items-center">
                    <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
                    Online agora
                  </p>
                </div>
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsOpen(false)}
                className="text-white hover:bg-white/20 rounded-full"
              >
                <X className="w-4 h-4 md:w-5 md:h-5" />
              </Button>
            </div>

            {/* Messages - Melhorado para mobile */}
            <div className="flex-1 p-3 md:p-4 overflow-y-auto space-y-3 bg-gradient-to-b from-gray-50 to-blue-50">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
                >
                  <div
                    className={`max-w-[85%] p-3 rounded-2xl text-sm animate-fade-in shadow-md ${
                      message.isBot
                        ? 'bg-white border border-blue-200 text-gray-800 rounded-bl-sm'
                        : 'bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-br-sm'
                    }`}
                  >
                    {message.text}
                  </div>
                </div>
              ))}

              {/* FAQ Options - Melhorado */}
              {showOptions && (
                <div className="space-y-2 mt-4">
                  {faqOptions.map((faq, index) => (
                    <Button
                      key={index}
                      variant="outline"
                      size="sm"
                      onClick={() => handleFaqClick(faq)}
                      className="w-full text-left justify-start h-auto p-3 text-xs md:text-sm hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 hover:border-blue-300 border-2 rounded-xl transition-all duration-300 hover:scale-[1.02] bg-white/80 backdrop-blur-sm"
                    >
                      <span className="text-blue-600 mr-2">💬</span>
                      {faq.question}
                    </Button>
                  ))}
                </div>
              )}
            </div>
          </Card>
        </div>
      )}
    </>
  );
};

export default ChatBot;
