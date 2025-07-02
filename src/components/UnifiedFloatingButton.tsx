
import { useState } from 'react';
import { MessageCircle, Phone, X, ArrowLeft, HelpCircle, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import AnimatedIcon from './AnimatedIcon';
import PremiumButton from './PremiumButton';

const UnifiedFloatingButton = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [showChat, setShowChat] = useState(false);
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

  const handleWhatsAppClick = () => {
    const phoneNumber = "5589994395789";
    const message = "Olá! Gostaria de saber mais sobre os planos da SaraivaNet.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    setIsExpanded(false);
  };

  const handleChatClick = () => {
    setShowChat(true);
    setIsExpanded(false);
  };

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
      {/* Unified Floating Button */}
      <div className="fixed bottom-20 right-4 md:bottom-6 md:right-6 z-40 flex flex-col items-end gap-4">
        {/* Expanded Options */}
        {isExpanded && (
          <div className="flex flex-col gap-3 animate-scale-in">
            {/* WhatsApp Option */}
            <div className="flex items-center gap-4">
              <div className="hidden md:block glass-card px-4 py-3 rounded-2xl text-sm font-semibold text-gray-800 dark:text-white shadow-xl border border-green-200/30 dark:border-green-700/30">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  Fale conosco no WhatsApp
                </div>
              </div>
              <button
                onClick={handleWhatsAppClick}
                className="group relative bg-gradient-to-br from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white w-14 h-14 rounded-2xl shadow-2xl hover:shadow-green-500/30 transition-all duration-300 hover:scale-110 flex items-center justify-center"
                aria-label="Entrar em contato via WhatsApp"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-green-400 to-green-600 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-xl"></div>
                <div className="relative z-10">
                  <Phone className="w-6 h-6 drop-shadow-lg" />
                </div>
              </button>
            </div>

            {/* Chat Option */}
            <div className="flex items-center gap-4">
              <div className="hidden md:block glass-card px-4 py-3 rounded-2xl text-sm font-semibold text-gray-800 dark:text-white shadow-xl border border-blue-200/30 dark:border-blue-700/30">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-blue-600 animate-pulse" />
                  Tire suas dúvidas
                </div>
              </div>
              <button
                onClick={handleChatClick}
                className="group relative bg-gradient-to-br from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white w-14 h-14 rounded-2xl shadow-2xl hover:shadow-blue-500/30 transition-all duration-300 hover:scale-110 flex items-center justify-center"
                aria-label="Abrir chat de dúvidas frequentes"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-600 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-xl"></div>
                <div className="relative z-10">
                  <HelpCircle className="w-6 h-6 drop-shadow-lg" />
                </div>
              </button>
            </div>
          </div>
        )}

        {/* Main Toggle Button */}
        <div className="flex items-center gap-4">
          {!isExpanded && (
            <div className="hidden md:block glass-card px-4 py-3 rounded-2xl text-sm font-semibold text-gray-800 dark:text-white shadow-xl border border-gray-200/30 dark:border-gray-700/30">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                Precisa de ajuda?
              </div>
            </div>
          )}
          
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="group relative bg-gradient-to-br from-gray-700 to-gray-800 hover:from-gray-800 hover:to-gray-900 text-white w-16 h-16 rounded-2xl shadow-2xl hover:shadow-gray-500/30 transition-all duration-300 hover:scale-110 hover:-translate-y-1 flex items-center justify-center"
            aria-label="Abrir opções de contato"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-gray-600 to-gray-800 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-xl"></div>
            
            <div className="relative z-10">
              <AnimatedIcon animation="float">
                {isExpanded ? (
                  <X className="w-8 h-8 drop-shadow-lg" />
                ) : (
                  <MessageCircle className="w-8 h-8 drop-shadow-lg" />
                )}
              </AnimatedIcon>
            </div>
            
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
            
            <div className="absolute bottom-full right-0 mb-3 px-3 py-2 bg-gray-900 text-white text-xs rounded-lg opacity-0 group-active:opacity-100 transition-opacity duration-200 whitespace-nowrap md:hidden pointer-events-none shadow-xl">
              {isExpanded ? 'Fechar' : 'Ajuda'}
              <div className="absolute top-full right-2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
            </div>
          </button>
        </div>
      </div>

      {/* Chat Window */}
      {showChat && (
        <div className="fixed inset-x-4 bottom-4 md:bottom-6 md:right-6 md:left-auto md:w-80 z-50 animate-scale-in">
          <div className="w-full h-[32rem] md:h-96 flex flex-col shadow-2xl bg-white dark:bg-gray-900 rounded-2xl overflow-hidden border border-gray-200/20 dark:border-gray-700/20">
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
                onClick={() => setShowChat(false)}
                className="text-white hover:bg-white/20 transition-all duration-200 rounded-xl"
              >
                <X className="w-5 h-5" />
              </Button>
            </div>

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

export default UnifiedFloatingButton;
