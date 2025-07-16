import { useState, useEffect } from 'react';
import { MessageCircle, X, ArrowLeft, Send, Bot, User, Sparkles, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import AnimatedIcon from './AnimatedIcon';
import { useReducedMotion } from '@/hooks/useReducedMotion';

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Oi! 👋 Sou a assistente virtual da SaraivaNet! Como posso te ajudar hoje?",
      isBot: true,
      timestamp: new Date()
    }
  ]);
  const [showOptions, setShowOptions] = useState(true);
  const [currentStep, setCurrentStep] = useState('main');
  const [showContactOptions, setShowContactOptions] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  const faqOptions = [
    {
      id: 'installation',
      question: "🔧 Como funciona a instalação?",
      answer: "Nossa equipe técnica agenda um horário conveniente para você e realiza toda a instalação profissional! Levamos todos os equipamentos necessários e deixamos tudo funcionando perfeitamente. Taxa de instalação: R$ 150,00 (paga apenas uma vez). 🚀",
      icon: "🔧"
    },
    {
      id: 'coverage',
      question: "🗺️ Qual a área de cobertura?",
      answer: "Atendemos com fibra óptica em:\n• Eliseu Martins 📍\n• Colônia do Gurguéia 📍\n• Manoel Emídio 📍\n• Canavieira 📍\n• Jerumenha 📍\n\nTodos com internet ultra rápida! ⚡",
      icon: "🗺️"
    },
    {
      id: 'saraivatv',
      question: "📺 O que é o SaraivaTV?",
      answer: "O SaraivaTV é nosso app GRATUITO que vem junto com sua internet! 🎉\n\n📱 Assista TV no celular\n🎵 Ouça rádios online\n📺 Canais locais e nacionais\n🔴 Transmissão ao vivo\n\nTudo grátis e sem limite! 💝",
      icon: "📺"
    },
    {
      id: 'plans',
      question: "💰 Quais são os planos?",
      answer: "Nosso plano completo:\n\n🚀 300MB Fibra Óptica\n📺 SaraivaTV Grátis\n🔧 Instalação Profissional\n🛡️ Suporte 24h\n✅ Com fidelidade de 12 meses\n\nPor apenas R$ 129,90/mês\n(3 primeiros meses com desconto!) 🎊",
      icon: "💰"
    },
    {
      id: 'whatsapp',
      question: "💬 Falar com atendente humano",
      answer: "Perfeito! Escolha com quem gostaria de falar:",
      isWhatsApp: true,
      icon: "💬"
    }
  ];

  const handleFaqClick = (faq: typeof faqOptions[0]) => {
    // Adiciona a pergunta do usuário
    setMessages(prev => [
      ...prev,
      { 
        id: Date.now(), 
        text: faq.question.replace(/^[^a-zA-Z]+\s/, ''), // Remove emoji do início
        isBot: false, 
        timestamp: new Date() 
      }
    ]);

    // Simula digitação
    setIsTyping(true);
    setShowOptions(false);

    setTimeout(() => {
      setIsTyping(false);
      setMessages(prev => [
        ...prev,
        { 
          id: Date.now() + 1, 
          text: faq.answer, 
          isBot: true,
          timestamp: new Date()
        }
      ]);

      // Mostra botão de volta após resposta, exceto para WhatsApp
      if (!faq.isWhatsApp) {
        setTimeout(() => {
          setCurrentStep('back');
        }, 1000);
      }

      // Mostra opções de contato para WhatsApp
      if (faq.isWhatsApp) {
        setTimeout(() => {
          setShowContactOptions(true);
          setCurrentStep('contact');
        }, 1000);
      }
    }, 1500 + Math.random() * 1000); // Tempo variável para parecer mais humano
  };

  const handleContactOption = (type: 'office' | 'joaquim') => {
    const phoneNumbers = {
      office: "5589994395789",
      joaquim: "5589994024531"
    };
    
    const names = {
      office: "Escritório SaraivaNet",
      joaquim: "Joaquim"
    };
    
    const phoneNumber = phoneNumbers[type];
    const contactName = names[type];
    
    // Adiciona mensagem do usuário
    setMessages(prev => [
      ...prev,
      { 
        id: Date.now(), 
        text: `Contatar ${contactName}`, 
        isBot: false, 
        timestamp: new Date() 
      }
    ]);

    // Simula digitação da resposta
    setIsTyping(true);
    setShowContactOptions(false);

    setTimeout(() => {
      setIsTyping(false);
      setMessages(prev => [
        ...prev,
        { 
          id: Date.now() + 1, 
          text: `Perfeito! Redirecionando você para o WhatsApp de ${contactName}... 🚀`, 
          isBot: true,
          timestamp: new Date()
        }
      ]);
      
      setTimeout(() => {
        if (type === 'joaquim') {
          // Para Joaquim: WhatsApp sem mensagem automática
          const whatsappBusinessUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}`;
          const whatsappUrl = `https://wa.me/${phoneNumber}`;
          
          const businessWindow = window.open(whatsappBusinessUrl, '_blank');
          if (!businessWindow) {
            window.open(whatsappUrl, '_blank');
          }
        } else {
          // Para escritório: com mensagem automática
          const message = `Olá! Gostaria de falar com um atendente da SaraivaNet.`;
          const whatsappBusinessUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
          const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
          
          const businessWindow = window.open(whatsappBusinessUrl, '_blank');
          if (!businessWindow) {
            window.open(whatsappUrl, '_blank');
          }
        }
        setCurrentStep('back');
      }, 1500);
    }, 1000);
  };

  const handleBack = () => {
    setMessages([
      {
        id: 1,
        text: "Oi! 👋 Sou a assistente virtual da SaraivaNet! Como posso te ajudar hoje?",
        isBot: true,
        timestamp: new Date()
      }
    ]);
    setShowOptions(true);
    setShowContactOptions(false);
    setCurrentStep('main');
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('pt-BR', { 
      hour: '2-digit', 
      minute: '2-digit' 
    });
  };

  // Efeito de digitação
  const TypingIndicator = () => (
    <div className="flex justify-start animate-fade-in">
      <div className="max-w-[85%] p-4 rounded-2xl bg-white/80 backdrop-blur-sm border border-orange-200/50 shadow-lg">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-to-br from-orange-400 to-red-400 rounded-full flex items-center justify-center">
            <Bot className="w-4 h-4 text-white" />
          </div>
          <div className="flex space-x-1">
            <div className="w-2 h-2 bg-orange-400 rounded-full animate-bounce"></div>
            <div className="w-2 h-2 bg-orange-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
            <div className="w-2 h-2 bg-orange-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
          </div>
          <span className="text-sm text-gray-600 font-medium">Digitando...</span>
        </div>
      </div>
    </div>
  );

  return (
    <>
      {/* Floating Chat Button */}
      <div className="fixed bottom-20 right-4 md:bottom-6 md:right-6 z-40">
        {/* Chat Button */}
        <button
          onClick={() => setIsOpen(true)}
          className="relative group bg-gradient-to-br from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 p-4 rounded-full shadow-2xl transform hover:scale-110 transition-all duration-300 border-2 border-white/30 hover:border-white/50 overflow-hidden"
          aria-label="Abrir assistente virtual"
        >
          {/* Button Content */}
          <div className="relative z-10">
            <MessageCircle className="w-7 h-7 text-white" />
          </div>
        </button>
      </div>

      {/* Premium Chat Window */}
      {isOpen && (
        <div className="fixed inset-x-4 bottom-4 md:bottom-6 md:right-6 md:left-auto md:w-96 z-50 animate-scale-in">
          <div className="w-full h-[32rem] md:h-[28rem] flex flex-col shadow-2xl bg-white/95 backdrop-blur-xl rounded-3xl overflow-hidden border border-orange-200/50 relative">
            {/* Animated Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-orange-50/80 to-pink-50/80 pointer-events-none"></div>
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-orange-200/30 to-transparent rounded-full blur-2xl animate-pulse"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-pink-200/30 to-transparent rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }}></div>
            
            {/* Header Premium */}
            <div className="relative z-10 bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 text-white p-4 flex justify-between items-center">
              <div className="flex items-center gap-3">
                {currentStep === 'back' && (
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={handleBack}
                    className="text-white hover:bg-white/20 w-8 h-8 transition-all duration-200 rounded-full"
                  >
                    <ArrowLeft className="w-4 h-4" />
                  </Button>
                )}
                <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/30">
                  <Bot className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-lg">SaraivaNet Bot</h3>
                  <p className="text-sm opacity-90 flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    Assistente Virtual Online
                  </p>
                </div>
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsOpen(false)}
                className="text-white hover:bg-white/20 transition-all duration-200 rounded-full"
              >
                <X className="w-5 h-5" />
              </Button>
            </div>

            {/* Messages Area Premium */}
            <div className="flex-1 p-4 overflow-y-auto space-y-4 relative z-10" style={{ scrollbarWidth: 'thin' }}>
              {messages.map((message, index) => (
                <div
                  key={message.id}
                  className={`flex animate-fade-in ${message.isBot ? 'justify-start' : 'justify-end'}`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className={`max-w-[85%] ${message.isBot ? 'flex items-start gap-2' : ''}`}>
                    {message.isBot && (
                      <div className="w-8 h-8 bg-gradient-to-br from-orange-400 to-red-400 rounded-full flex items-center justify-center flex-shrink-0 mt-1 border-2 border-white shadow-lg">
                        <Bot className="w-4 h-4 text-white" />
                      </div>
                    )}
                    <div className="flex flex-col">
                      <div
                        className={`p-4 rounded-2xl text-sm font-medium shadow-lg relative overflow-hidden ${
                          message.isBot
                            ? 'bg-white/80 backdrop-blur-sm text-gray-800 border border-orange-200/50'
                            : 'bg-gradient-to-r from-orange-500 to-red-500 text-white'
                        }`}
                      >
                        {message.isBot && (
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-orange-100/30 to-transparent animate-shimmer"></div>
                        )}
                        <div className="relative z-10 whitespace-pre-line leading-relaxed">
                          {message.text}
                        </div>
                      </div>
                      <div className={`text-xs text-gray-500 mt-1 px-1 ${message.isBot ? 'text-left' : 'text-right'}`}>
                        {formatTime(message.timestamp)}
                      </div>
                    </div>
                    {!message.isBot && (
                      <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full flex items-center justify-center flex-shrink-0 mt-1 ml-2 border-2 border-white shadow-lg">
                        <User className="w-4 h-4 text-white" />
                      </div>
                    )}
                  </div>
                </div>
              ))}

              {/* Typing Indicator */}
              {isTyping && <TypingIndicator />}

              {/* FAQ Options Premium */}
              {showOptions && !isTyping && (
                <div className="space-y-3 mt-6">
                  <div className="text-center text-gray-600 font-medium mb-4 flex items-center justify-center gap-2">
                    <Sparkles className="w-4 h-4 text-orange-500" />
                    <span>Escolha uma opção:</span>
                  </div>
                  {faqOptions.map((faq, index) => (
                    <button
                      key={faq.id}
                      onClick={() => handleFaqClick(faq)}
                      className="w-full text-left p-4 bg-white/80 hover:bg-white backdrop-blur-sm text-gray-800 border border-orange-200/50 hover:border-orange-300/70 rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-lg animate-slide-in-left relative overflow-hidden group touch-manipulation"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-orange-100/30 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                      <div className="flex items-center gap-3 relative z-10">
                        <span className="text-lg">{faq.icon}</span>
                        <span className="font-medium text-sm leading-relaxed">{faq.question.replace(/^[^a-zA-Z]+\s/, '')}</span>
                      </div>
                    </button>
                  ))}
                </div>
              )}

              {/* Contact Options */}
              {showContactOptions && !isTyping && (
                <div className="space-y-3 mt-6">
                  <div className="text-center text-gray-600 font-medium mb-4 flex items-center justify-center gap-2">
                    <Sparkles className="w-4 h-4 text-orange-500" />
                    <span>Escolha o contato:</span>
                  </div>
                  <button
                    onClick={() => handleContactOption('office')}
                    className="w-full text-left p-4 bg-white/80 hover:bg-white backdrop-blur-sm text-gray-800 border border-orange-200/50 hover:border-orange-300/70 rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-lg animate-slide-in-left relative overflow-hidden group touch-manipulation"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-orange-100/30 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                    <div className="flex items-center gap-3 relative z-10">
                      <span className="text-lg">🏢</span>
                      <div>
                        <span className="font-medium text-sm leading-relaxed block">Escritório SaraivaNet</span>
                        <span className="text-xs text-gray-600">Atendimento comercial e suporte</span>
                      </div>
                    </div>
                  </button>
                  <button
                    onClick={() => handleContactOption('joaquim')}
                    className="w-full text-left p-4 bg-white/80 hover:bg-white backdrop-blur-sm text-gray-800 border border-orange-200/50 hover:border-orange-300/70 rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-lg animate-slide-in-left relative overflow-hidden group touch-manipulation"
                    style={{ animationDelay: '100ms' }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-orange-100/30 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                    <div className="flex items-center gap-3 relative z-10">
                      <span className="text-lg">👤</span>
                      <div>
                        <span className="font-medium text-sm leading-relaxed block">Joaquim</span>
                        <span className="text-xs text-gray-600">Atendimento direto</span>
                      </div>
                    </div>
                  </button>
                </div>
              )}

              {/* Back Button */}
              {currentStep === 'back' && !showOptions && (
                <div className="text-center pt-4 animate-fade-in">
                  <button
                    onClick={handleBack}
                    className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-400 hover:to-red-400 text-white px-6 py-3 rounded-2xl font-medium text-sm shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center gap-2 mx-auto"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    Voltar ao menu principal
                  </button>
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
