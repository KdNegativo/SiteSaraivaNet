import { useState } from 'react';
import { MessageCircle, X, ArrowLeft, HelpCircle } from 'lucide-react';
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
      {/* Chat Button with Enhanced Premium Design */}
      <div className="fixed bottom-20 right-4 md:bottom-6 md:right-6 z-40 flex items-center gap-3">
        {/* Desktop label with beautiful gradient */}
        <div className="hidden md:block bg-gradient-to-r from-blue-600/90 to-purple-600/90 backdrop-blur-md text-white px-4 py-3 rounded-xl text-sm font-medium shadow-xl border border-white/20 animate-pulse hover:scale-105 transition-all duration-300">
          <div className="flex items-center gap-2">
            <HelpCircle className="w-4 h-4" />
            <span>Tire suas dúvidas</span>
          </div>
        </div>
        
        {/* Enhanced premium chat button */}
        <button
          onClick={() => setIsOpen(true)}
          className="relative group bg-gradient-to-br from-blue-500 via-purple-600 to-indigo-700 hover:from-blue-400 hover:via-purple-500 hover:to-indigo-600 p-4 rounded-full shadow-2xl hover:shadow-purple-500/40 transform hover:scale-110 transition-all duration-300 border-2 border-white/30 hover:border-white/50"
          aria-label="Abrir chat de dúvidas frequentes"
        >
          {/* Glow effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-600 rounded-full blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-300 -z-10"></div>
          
          {/* Button content */}
          <div className="relative">
            <AnimatedIcon animation="float" className="text-white">
              <MessageCircle className="w-7 h-7" />
            </AnimatedIcon>
          </div>
          
          {/* Mobile tooltip with enhanced design */}
          <div className="absolute bottom-full right-0 mb-3 px-4 py-2 bg-gradient-to-r from-gray-800 to-gray-900 text-white text-xs rounded-lg opacity-0 group-active:opacity-100 transition-all duration-300 whitespace-nowrap md:hidden pointer-events-none shadow-xl border border-gray-600">
            <div className="flex items-center gap-2">
              <HelpCircle className="w-3 h-3" />
              <span>Dúvidas frequentes</span>
            </div>
            {/* Tooltip arrow */}
            <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-gray-800"></div>
          </div>
        </button>
      </div>

      {/* Premium Chat Window */}
      {isOpen && (
        <div className="fixed inset-x-4 bottom-4 md:bottom-6 md:right-6 md:left-auto md:w-80 z-50 animate-scale-in">
          <div className="w-full h-[32rem] md:h-96 flex flex-col shadow-2xl bg-white dark:bg-gray-900 rounded-xl overflow-hidden">
            {/* Header with gradient */}
            <div className="gradient-primary text-white p-4 flex justify-between items-center">
              <div className="flex items-center gap-3">
                {!showOptions && (
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={handleBack}
                    className="text-white hover:bg-white/20 w-8 h-8 transition-all duration-200"
                  >
                    <ArrowLeft className="w-4 h-4" />
                  </Button>
                )}
                <div>
                  <h3 className="font-heading font-semibold">Assistente SaraivaNet</h3>
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
                className="text-white hover:bg-white/20 transition-all duration-200"
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
                    className={`max-w-[85%] p-3 rounded-2xl text-sm font-inter ${
                      message.isBot
                        ? 'bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-white shadow-lg'
                        : 'gradient-blue text-white shadow-lg'
                    }`}
                  >
                    {message.text}
                  </div>
                </div>
              ))}

              {/* Premium FAQ Options */}
              {showOptions && (
                <div className="space-y-3 mt-4">
                  {faqOptions.map((faq, index) => (
                    <PremiumButton
                      key={index}
                      variant="secondary"
                      size="sm"
                      onClick={() => handleFaqClick(faq)}
                      className="w-full text-left justify-start h-auto p-4 text-sm bg-white hover:bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700 text-gray-800 dark:text-white border border-gray-200 dark:border-gray-700 animate-slide-in-left"
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
