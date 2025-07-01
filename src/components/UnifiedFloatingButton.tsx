
import { useState } from 'react';
import { MessageCircle, Phone, Bot, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import AnimatedIcon from './AnimatedIcon';

const UnifiedFloatingButton = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);
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
    setIsMenuOpen(false);
  };

  const handleChatBotClick = () => {
    setIsChatOpen(true);
    setIsMenuOpen(false);
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
      <div className="fixed bottom-6 right-4 md:right-6 z-40">
        {/* Menu Options */}
        {isMenuOpen && (
          <div className="absolute bottom-20 right-0 flex flex-col gap-3 animate-fade-in">
            {/* WhatsApp Option */}
            <button
              onClick={handleWhatsAppClick}
              className="bg-green-500 hover:bg-green-600 text-white px-4 py-3 rounded-full shadow-lg flex items-center gap-2 hover:scale-105 transition-all duration-300"
            >
              <Phone className="w-5 h-5" />
              <span className="text-sm font-medium">WhatsApp</span>
            </button>

            {/* ChatBot Option */}
            <button
              onClick={handleChatBotClick}
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-3 rounded-full shadow-lg flex items-center gap-2 hover:scale-105 transition-all duration-300"
            >
              <Bot className="w-5 h-5" />
              <span className="text-sm font-medium">Chat Bot</span>
            </button>
          </div>
        )}

        {/* Main Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="bg-gradient-to-r from-blue-500 to-green-500 hover:from-blue-600 hover:to-green-600 text-white w-16 h-16 rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-all duration-300 relative"
          aria-label="Abrir menu de contato"
        >
          <AnimatedIcon animation="float" className="text-white">
            {isMenuOpen ? <X className="w-7 h-7" /> : <MessageCircle className="w-7 h-7" />}
          </AnimatedIcon>
        </button>
      </div>

      {/* ChatBot Window */}
      {isChatOpen && (
        <div className="fixed inset-x-4 bottom-4 md:bottom-6 md:right-6 md:left-auto md:w-80 z-50 animate-scale-in">
          <div className="w-full h-[32rem] md:h-96 flex flex-col shadow-2xl bg-white dark:bg-gray-900 rounded-xl overflow-hidden">
            {/* Header */}
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-4 flex justify-between items-center">
              <div className="flex items-center gap-3">
                {!showOptions && (
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={handleBack}
                    className="text-white hover:bg-white/20 w-8 h-8"
                  >
                    <X className="w-4 h-4" />
                  </Button>
                )}
                <div>
                  <h3 className="font-semibold">Assistente SaraivaNet</h3>
                  <p className="text-sm opacity-90 flex items-center gap-1">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    Online agora
                  </p>
                </div>
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsChatOpen(false)}
                className="text-white hover:bg-white/20"
              >
                <X className="w-5 h-5" />
              </Button>
            </div>

            {/* Messages */}
            <div className="flex-1 p-4 overflow-y-auto space-y-3 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
              {messages.map((message, index) => (
                <div
                  key={message.id}
                  className={`flex animate-fade-in ${message.isBot ? 'justify-start' : 'justify-end'}`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div
                    className={`max-w-[85%] p-3 rounded-2xl text-sm ${
                      message.isBot
                        ? 'bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-white shadow-lg'
                        : 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg'
                    }`}
                  >
                    {message.text}
                  </div>
                </div>
              ))}

              {/* FAQ Options */}
              {showOptions && (
                <div className="space-y-3 mt-4">
                  {faqOptions.map((faq, index) => (
                    <button
                      key={index}
                      onClick={() => handleFaqClick(faq)}
                      className="w-full text-left p-4 text-sm bg-white hover:bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700 text-gray-800 dark:text-white border border-gray-200 dark:border-gray-700 rounded-lg transition-colors animate-slide-in-left"
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
    </>
  );
};

export default UnifiedFloatingButton;
