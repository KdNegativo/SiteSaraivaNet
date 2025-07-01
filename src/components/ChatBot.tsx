import { useState, useEffect } from 'react';
import { MessageCircle, X, ArrowLeft, HelpCircle, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import AnimatedIcon from './AnimatedIcon';
import PremiumButton from './PremiumButton';

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

  // Listen for external events to open the chatbot
  useEffect(() => {
    const handleOpenChatBot = () => {
      setIsOpen(true);
    };

    window.addEventListener('openChatBot', handleOpenChatBot);
    return () => {
      window.removeEventListener('openChatBot', handleOpenChatBot);
    };
  }, []);

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
      answer: "É nosso app gratuito com canais de TV e rádios que você pode assistir no celular."
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
      {/* Premium Chat Window - removed the floating button since it's handled by FloatingActionButton */}
      {isOpen && (
        <div className="fixed inset-x-4 bottom-4 md:bottom-6 md:right-6 md:left-auto md:w-80 z-50 animate-scale-in">
          <div className="w-full h-[32rem] md:h-96 flex flex-col shadow-2xl bg-white dark:bg-gray-900 rounded-2xl overflow-hidden border border-gray-200/20 dark:border-gray-700/20">
            {/* Header with enhanced gradient */}
            <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-700 text-white p-4 flex justify-between items-center">
              <div className="flex items-center gap-3">
                {!showOptions && (
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={handleBack}
                    className="text-white hover:bg-white/20 w-8 h-8 transition-all duration-200 rounded-xl"
                  >
                    <ArrowLeft className="w-4 h-4" />
                  </Button>
                )}
                <div>
                  <h3 className="font-heading font-bold flex items-center gap-2">
                    <Sparkles className="w-5 h-5" />
                    Assistente SaraivaNet
                  </h3>
                  <p className="text-sm opacity-90 flex items-center gap-1">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    Online agora
                  </p>
                </div>
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsOpen(false)}
                className="text-white hover:bg-white/20 transition-all duration-200 rounded-xl"
              >
                <X className="w-5 h-5" />
              </Button>
            </div>

            {/* Messages with enhanced styling */}
            <div className="flex-1 p-4 overflow-y-auto space-y-3 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 scrollbar-thin">
              {messages.map((message, index) => (
                <div
                  key={message.id}
                  className={`flex animate-fade-in ${message.isBot ? 'justify-start' : 'justify-end'}`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div
                    className={`max-w-[85%] p-3 rounded-2xl text-sm font-inter shadow-lg ${
                      message.isBot
                        ? 'bg-gradient-to-br from-gray-100 to-gray-50 dark:from-gray-800 dark:to-gray-700 text-gray-800 dark:text-white border border-gray-200/50 dark:border-gray-600/50'
                        : 'bg-gradient-to-br from-blue-500 to-purple-600 text-white'
                    }`}
                  >
                    {message.text}
                  </div>
                </div>
              ))}

              {/* Enhanced FAQ Options */}
              {showOptions && (
                <div className="space-y-3 mt-4">
                  {faqOptions.map((faq, index) => (
                    <PremiumButton
                      key={index}
                      variant="secondary"
                      size="sm"
                      onClick={() => handleFaqClick(faq)}
                      className="w-full text-left justify-start h-auto p-4 text-sm bg-gradient-to-br from-white to-gray-50 hover:from-gray-50 hover:to-gray-100 dark:from-gray-800 dark:to-gray-700 dark:hover:from-gray-700 dark:hover:to-gray-600 text-gray-800 dark:text-white border border-gray-200/50 dark:border-gray-600/50 shadow-md hover:shadow-lg transition-all duration-300 hover:scale-[1.02] animate-slide-in-left rounded-xl"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      {faq.question}
                    </PremiumButton>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatBot;
