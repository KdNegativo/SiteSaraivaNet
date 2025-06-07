
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
      answer: "A instalação tem custo de R$ 150,00. Nossa equipe agenda um horário conveniente e realiza todo o processo em até 2 horas."
    },
    {
      question: "Qual a área de cobertura?",
      answer: "Atendemos Eliseu Martins, Colônia do Gurguéia, Manoel Emídio e Jerumenha com internet de fibra óptica."
    },
    {
      question: "O que é o SaraivaTV?",
      answer: "É nosso app gratuito com canais de TV e rádios que você pode assistir no celular. Vem incluído com todos os planos!"
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
      {/* Chat Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-32 right-4 md:bottom-24 md:right-6 z-40 bg-orange-600 hover:bg-orange-700 text-white rounded-full p-3 md:p-4 shadow-xl transition-all duration-300 hover:scale-110 flex items-center justify-center"
        aria-label="Abrir chat"
      >
        <MessageCircle className="w-5 h-5 md:w-6 md:h-6" />
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed inset-x-2 bottom-2 md:bottom-6 md:right-6 md:left-auto md:w-80 z-50 animate-scale-in">
          <Card className="w-full h-[28rem] md:h-96 flex flex-col shadow-2xl border-0 overflow-hidden">
            {/* Header */}
            <div className="bg-gradient-to-r from-orange-600 to-red-600 text-white p-3 md:p-4 flex justify-between items-center">
              <div className="flex items-center gap-2">
                {!showOptions && (
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={handleBack}
                    className="text-white hover:bg-white/20 w-7 h-7 md:w-8 md:h-8"
                  >
                    <ArrowLeft className="w-3 h-3 md:w-4 md:h-4" />
                  </Button>
                )}
                <div>
                  <h3 className="font-semibold text-sm md:text-base">Assistente SaraivaNet</h3>
                  <p className="text-xs md:text-sm opacity-90">Online agora</p>
                </div>
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsOpen(false)}
                className="text-white hover:bg-white/20 w-7 h-7 md:w-8 md:h-8"
              >
                <X className="w-4 h-4 md:w-5 md:h-5" />
              </Button>
            </div>

            {/* Messages */}
            <div className="flex-1 p-3 md:p-4 overflow-y-auto space-y-2 md:space-y-3 bg-gray-50 dark:bg-gray-900">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
                >
                  <div
                    className={`max-w-[85%] p-2 md:p-3 rounded-lg text-xs md:text-sm animate-fade-in ${
                      message.isBot
                        ? 'bg-white dark:bg-gray-800 text-gray-800 dark:text-white shadow-md'
                        : 'bg-orange-600 text-white shadow-md'
                    }`}
                  >
                    {message.text}
                  </div>
                </div>
              ))}

              {/* FAQ Options */}
              {showOptions && (
                <div className="space-y-2 mt-3 md:mt-4">
                  {faqOptions.map((faq, index) => (
                    <Button
                      key={index}
                      variant="outline"
                      size="sm"
                      onClick={() => handleFaqClick(faq)}
                      className="w-full text-left justify-start h-auto p-2 md:p-3 text-xs md:text-sm hover:bg-orange-50 hover:border-orange-300 dark:hover:bg-orange-900/20 transition-all duration-200"
                    >
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
