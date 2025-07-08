import { MessageSquare, Phone } from 'lucide-react';
import { useState } from 'react';

const FloatingWhatsAppButton = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleWhatsAppClick = () => {
    const phoneNumber = "5589994395789";
    const message = "Olá! Gostaria de contratar internet + SaraivaTV da SaraivaNet.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="fixed bottom-4 left-4 z-40 flex items-center gap-3">
      {/* Tooltip Desktop */}
      {isHovered && (
        <div className="hidden md:block bg-green-500 text-white px-4 py-2 rounded-2xl text-sm font-medium shadow-xl animate-scale-in relative">
          <div className="flex items-center gap-2">
            <MessageSquare className="w-4 h-4" />
            <span>Fale conosco no WhatsApp</span>
          </div>
          {/* Arrow */}
          <div className="absolute right-0 top-1/2 transform translate-x-full -translate-y-1/2 w-0 h-0 border-l-8 border-l-green-500 border-t-4 border-b-4 border-t-transparent border-b-transparent"></div>
        </div>
      )}
      
      {/* WhatsApp Button */}
      <button
        onClick={handleWhatsAppClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="relative group bg-green-500 hover:bg-green-600 p-4 rounded-full shadow-2xl transform hover:scale-110 transition-all duration-300 border-2 border-white/30 overflow-hidden"
        aria-label="Falar no WhatsApp"
      >
        {/* Pulse Effect */}
        <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-30"></div>
        
        {/* Shimmer Effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer"></div>
        
        {/* WhatsApp Icon */}
        <div className="relative z-10">
          <img 
            src="/lovable-uploads/981f602c-b0d2-4161-8119-dfd91ef1c234.png" 
            alt="WhatsApp" 
            className="w-7 h-7 filter brightness-0 invert"
          />
        </div>
        
        {/* Notification Badge */}
        <div className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center border-2 border-white shadow-lg animate-bounce">
          <span className="text-xs text-white font-bold">!</span>
        </div>
      </button>
    </div>
  );
};

export default FloatingWhatsAppButton;