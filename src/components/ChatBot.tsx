import { useState } from 'react';
import { MessageCircle, X, ArrowLeft, HelpCircle } from 'lucide-react';
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
      answer: "Nossa equipe agenda um horário conveniente e realiza todo o processo de instalação profissional. O valor da instalação é cobrado separadamente conforme nossa tabela de preços."
    },
    {
      question: "Qual a área de cobertura?",
      answer: "Atendemos Eliseu Martins, Colônia do Gurguéia, Manoel Emídio e Jerumenha."
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
      {/* Chat Button with Improved Mobile UX */}
      <div className="fixed bottom-36 right-4 md:bottom-24 md:right-6 z-40 flex items-center gap-3">
        {/* Desktop label - only visible on medium screens and up */}
        <div className="hidden md:block bg-white dark:bg-gray-800 text-gray-800 dark:text-white px-3 py-2 rounded-lg shadow-lg text-sm font-medium border border-gray-200 dark:border-gray-700 animate-pulse">
          Tire suas dúvidas
        </div>
        
        {/* Chat button with better mobile accessibility */}
        <button
          onClick={() => setIsOpen(true)}
          className="bg-blue-600 hover:bg-blue-700 text-white rounded-full p-4 shadow-xl transition-all duration-300 hover:scale-110 flex items-center justify-center group relative"
          aria-label="Abrir chat de dúvidas frequentes"
        >
          {/* Icon with subtle help indicator */}
          <div className="relative">
            <MessageCircle className="w-6 h-6" />
            <HelpCircle className="w-3 h-3 absolute -top-1 -right-1 bg-white text-blue-600 rounded-full md:hidden" />
          </div>
          
          {/* Mobile-only tooltip on long press */}
          <div className="absolute bottom-full right-0 mb-2 px-2 py-1 bg-gray-800 text-white text-xs rounded opacity-0 group-active:opacity-100 transition-opacity duration-200 whitespace-nowrap md:hidden pointer-events-none">
            Dúvidas frequentes
          </div>
        </button>
      </div>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed inset-x-4 bottom-4 md:bottom-6 md:right-6 md:left-auto md:w-80 z-50 animate-scale-in">
          <Card className="w-full h-[32rem] md:h-96 flex flex-col shadow-2xl border-0 overflow-hidden">
            {/* Header */}
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-4 flex justify-between items-center">
              <div className="flex items-center gap-2">
                {!showOptions && (
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={handleBack}
                    className="text-white hover:bg-white/20 w-8 h-8"
                  >
                    <ArrowLeft className="w-4 h-4" />
                  </Button>
                )}
                <div>
                  <h3 className="font-semibold">Assistente SaraivaNet</h3>
                  <p className="text-sm opacity-90">Online agora</p>
                </div>
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsOpen(false)}
                className="text-white hover:bg-white/20"
              >
                <X className="w-5 h-5" />
              </Button>
            </div>

            {/* Messages */}
            <div className="flex-1 p-4 overflow-y-auto space-y-3 bg-gray-50 dark:bg-gray-900">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
                >
                  <div
                    className={`max-w-[85%] p-3 rounded-lg text-sm animate-fade-in ${
                      message.isBot
                        ? 'bg-white dark:bg-gray-800 text-gray-800 dark:text-white shadow-md'
                        : 'bg-blue-600 text-white shadow-md'
                    }`}
                  >
                    {message.text}
                  </div>
                </div>
              ))}

              {/* FAQ Options */}
              {showOptions && (
                <div className="space-y-2 mt-4">
                  {faqOptions.map((faq, index) => (
                    <Button
                      key={index}
                      variant="outline"
                      size="sm"
                      onClick={() => handleFaqClick(faq)}
                      className="w-full text-left justify-start h-auto p-3 text-sm hover:bg-blue-50 hover:border-blue-300 dark:hover:bg-blue-900/20 transition-all duration-200"
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
