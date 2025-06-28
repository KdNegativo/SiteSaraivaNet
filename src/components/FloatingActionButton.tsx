
import { useState } from 'react';
import { MessageCircle, Phone, HelpCircle, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import AnimatedIcon from './AnimatedIcon';

const FloatingActionButton = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showChatBot, setShowChatBot] = useState(false);
  const [chatMessages, setChatMessages] = useState([
    {
      id: 1,
      text: "Olá! Como posso ajudá-lo hoje? Escolha uma das opções abaixo:",
      isBot: true
    }
  ]);
  const [showChatOptions, setShowChatOptions] = useState(true);

  const handleWhatsAppClick = () => {
    const phoneNumber = "5589994395789";
    const message = "Olá! Gostaria de saber mais sobre os planos da SaraivaNet.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    setIsMenuOpen(false);
  };

  const handleChatBotClick = () => {
    setShowChatBot(true);
    setIsMenuOpen(false);
  };

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
    setChatMessages(prev => [
      ...prev,
      { id: Date.now(), text: faq.question, isBot: false },
      { id: Date.now() + 1, text: faq.answer, isBot: true }
    ]);
    setShowChatOptions(false);

    if (faq.isWhatsApp) {
      setTimeout(() => {
        handleWhatsAppClick();
      }, 1500);
    }
  };

  const handleChatBack = () => {
    setChatMessages([
      {
        id: 1,
        text: "Olá! Como posso ajudá-lo hoje? Escolha uma das opções abaixo:",
        isBot: true
      }
    ]);
    setShowChatOptions(true);
  };

  return (
    <>
      {/* Floating Action Button */}
      <div className="fixed bottom-6 right-6 z-40">
        {/* Menu Options */}
        {isMenuOpen && (
          <div className="absolute bottom-16 right-0 flex flex-col gap-3 animate-fade-in">
            {/* WhatsApp Option */}
            <div className="flex items-center gap-3">
              <span className="hidden md:block bg-green-50 dark:bg-green-900/20 text-green-800 dark:text-green-200 px-3 py-2 rounded-lg shadow-lg text-sm font-medium border border-green-200 dark:border-green-700">
                WhatsApp
              </span>
              <button
                onClick={handleWhatsAppClick}
                className="bg-green-500 hover:bg-green-600 hover:scale-110 transition-all duration-300 flex items-center justify-center w-12 h-12 rounded-full shadow-lg"
                aria-label="Entrar em contato via WhatsApp"
              >
                <Phone className="w-5 h-5 text-white" />
              </button>
            </div>

            {/* ChatBot Option */}
            <div className="flex items-center gap-3">
              <span className="hidden md:block glass-card px-3 py-2 rounded-lg text-sm font-medium text-gray-800 dark:text-white">
                Dúvidas
              </span>
              <button
                onClick={handleChatBotClick}
                className="btn-premium rounded-full p-3 shadow-2xl hover:scale-110 hover:shadow-blue-500/25"
                aria-label="Abrir chat de dúvidas frequentes"
              >
                <HelpCircle className="w-5 h-5 text-white" />
              </button>
            </div>
          </div>
        )}

        {/* Main FAB */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className={`btn-premium rounded-full p-4 shadow-2xl hover:scale-110 transition-all duration-300 ${
            isMenuOpen ? 'rotate-45' : ''
          }`}
          aria-label="Menu de contato"
        >
          <AnimatedIcon animation="float" className="text-white">
            {isMenuOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
          </AnimatedIcon>
        </button>
      </div>

      {/* ChatBot Modal */}
      {showChatBot && (
        <div className="fixed inset-x-4 bottom-4 md:bottom-6 md:right-6 md:left-auto md:w-80 z-50 animate-scale-in">
          <div className="w-full h-[32rem] md:h-96 flex flex-col shadow-2xl bg-white dark:bg-gray-900 rounded-xl overflow-hidden">
            {/* Header with gradient */}
            <div className="gradient-primary text-white p-4 flex justify-between items-center">
              <div className="flex items-center gap-3">
                {!showChatOptions && (
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={handleChatBack}
                    className="text-white hover:bg-white/20 w-8 h-8 transition-all duration-200"
                  >
                    <MessageCircle className="w-4 h-4" />
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
                onClick={() => setShowChatBot(false)}
                className="text-white hover:bg-white/20 transition-all duration-200"
              >
                <X className="w-5 h-5" />
              </Button>
            </div>

            {/* Messages */}
            <div className="flex-1 p-4 overflow-y-auto space-y-3 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 scrollbar-thin">
              {chatMessages.map((message, index) => (
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

              {/* FAQ Options */}
              {showChatOptions && (
                <div className="space-y-3 mt-4">
                  {faqOptions.map((faq, index) => (
                    <button
                      key={index}
                      onClick={() => handleFaqClick(faq)}
                      className="w-full text-left justify-start h-auto p-4 text-sm bg-white hover:bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700 text-gray-800 dark:text-white border border-gray-200 dark:border-gray-700 rounded-lg transition-all duration-200 animate-slide-in-left"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      {faq.question}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Overlay */}
      {(isMenuOpen || showChatBot) && (
        <div 
          className="fixed inset-0 bg-black/20 z-30"
          onClick={() => {
            setIsMenuOpen(false);
            setShowChatBot(false);
          }}
        />
      )}
    </>
  );
};

export default FloatingActionButton;
