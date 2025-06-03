
import { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
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

  const faqOptions = [
    {
      question: "Quais são os planos disponíveis?",
      answer: "Temos o plano 300MB por R$ 129,90/mês com SaraivaTV grátis incluído! Fibra óptica com instalação gratuita e suporte 24h."
    },
    {
      question: "Como funciona a instalação?",
      answer: "A instalação é totalmente gratuita! Nossa equipe agenda um horário conveniente e realiza todo o processo em até 2 horas."
    },
    {
      question: "Qual a área de cobertura?",
      answer: "Atendemos Eliseu Martins, Colônia do Gurguéia, Manoel Emídio e Jerumenha. Em breve chegamos em Canto do Buriti!"
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

    if (faq.isWhatsApp) {
      setTimeout(() => {
        const phoneNumber = "5589994395789";
        const message = "Olá! Gostaria de falar com um atendente da SaraivaNet.";
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');
      }, 1500);
    }
  };

  return (
    <>
      {/* Chat Button */}
      <Button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-20 right-6 z-40 bg-blue-600 hover:bg-blue-700 text-white rounded-full p-4 shadow-2xl transition-all duration-300 hover:scale-110 animate-pulse"
        aria-label="Abrir chat"
      >
        <MessageCircle className="w-6 h-6" />
      </Button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 z-50 w-80 max-w-[calc(100vw-2rem)] h-96 animate-scale-in">
          <Card className="w-full h-full flex flex-col shadow-2xl border-0 overflow-hidden">
            {/* Header */}
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-4 flex justify-between items-center">
              <div>
                <h3 className="font-semibold">Assistente SaraivaNet</h3>
                <p className="text-sm opacity-90">Online agora</p>
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
                    className={`max-w-[80%] p-3 rounded-lg text-sm animate-fade-in ${
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
              {messages.length <= 2 && (
                <div className="space-y-2 mt-4">
                  {faqOptions.map((faq, index) => (
                    <Button
                      key={index}
                      variant="outline"
                      size="sm"
                      onClick={() => handleFaqClick(faq)}
                      className="w-full text-left justify-start h-auto p-3 text-xs hover:bg-blue-50 hover:border-blue-300 dark:hover:bg-blue-900/20 transition-all duration-200"
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
