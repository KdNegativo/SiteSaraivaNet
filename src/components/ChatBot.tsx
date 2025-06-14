
import { useState } from 'react';
import { MessageCircle, X, ArrowLeft, HelpCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import PremiumCard from './PremiumCard';
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
      {/* Chat Button with Premium Design */}
      <div className="fixed bottom-36 right-4 md:bottom-24 md:right-6 z-40 flex items-center gap-3">
        {/* Desktop label with glassmorphism */}
        <div className="hidden md:block glass-card px-4 py-2 rounded-lg text-sm font-medium text-gray-800 dark:text-white animate-pulse">
          Tire suas dúvidas
        </div>
        
        {/* Premium chat button */}
        <button
          onClick={() => setIsOpen(true)}
          className="btn-premium rounded-full p-4 shadow-2xl hover:scale-110 hover:shadow-blue-500/25 group relative"
          aria-label="Abrir chat de dúvidas frequentes"
        >
          <AnimatedIcon animation="float" className="text-white">
            <MessageCircle className="w-6 h-6" />
          </AnimatedIcon>
          
          {/* Help indicator with glow */}
          <div className="absolute -top-1 -right-1 w-4 h-4 bg-white rounded-full flex items-center justify-center md:hidden">
            <HelpCircle className="w-3 h-3 text-blue-600" />
          </div>
          
          {/* Mobile tooltip with glass effect */}
          <div className="absolute bottom-full right-0 mb-2 px-3 py-1 glass text-white text-xs rounded opacity-0 group-active:opacity-100 transition-opacity duration-200 whitespace-nowrap md:hidden pointer-events-none">
            Dúvidas frequentes
          </div>
        </button>
      </div>

      {/* Premium Chat Window */}
      {isOpen && (
        <div className="fixed inset-x-4 bottom-4 md:bottom-6 md:right-6 md:left-auto md:w-80 z-50 animate-scale-in">
          <PremiumCard variant="glass" className="w-full h-[32rem] md:h-96 flex flex-col shadow-2xl border-0 overflow-hidden">
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
                        ? 'glass-card text-gray-800 dark:text-white shadow-lg'
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
                      variant="glass"
                      size="sm"
                      onClick={() => handleFaqClick(faq)}
                      className="w-full text-left justify-start h-auto p-4 text-sm bg-white/60 hover:bg-white/80 text-gray-800 dark:text-white backdrop-blur-md border border-white/30 animate-slide-in-left"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      {faq.question}
                    </PremiumButton>
                  ))}
                </div>
              )}
            </div>
          </PremiumCard>
        </div>
      )}
    </>
  );
};

export default ChatBot;
