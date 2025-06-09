
import { useState } from "react";
import { Menu, X, Home, CreditCard, MapPin, Heart, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const MobileNavigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    setIsOpen(false); // Fecha o menu após clicar
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const handleWhatsAppClick = () => {
    const phoneNumber = "5589994395789";
    const message = "Olá! Gostaria de saber mais sobre os planos da SaraivaNet.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const menuItems = [
    { id: 'inicio', label: 'Início', icon: Home },
    { id: 'planos', label: 'Planos', icon: CreditCard },
    { id: 'cobertura', label: 'Cobertura', icon: MapPin },
    { id: 'sobre', label: 'Sobre', icon: Heart },
    { id: 'contato', label: 'Contato', icon: Phone },
  ];

  return (
    <>
      <Button
        variant="ghost"
        size="icon"
        onClick={() => setIsOpen(!isOpen)}
        className="w-10 h-10 text-white hover:bg-white/20 transition-colors rounded-full relative z-40"
      >
        <Menu className="h-5 w-5" />
      </Button>

      {/* Overlay - não deve interferir com outros elementos quando fechado */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Menu - z-index menor que os botões flutuantes */}
      <div className={`fixed top-0 right-0 h-full w-80 bg-gradient-to-b from-orange-600 to-red-600 dark:from-gray-800 dark:to-gray-900 z-40 transform transition-transform duration-300 ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <div className="p-6">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-xl font-bold text-white">Menu</h2>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(false)}
              className="w-8 h-8 text-white hover:bg-white/20 transition-colors rounded-full"
            >
              <X className="h-5 w-5" />
            </Button>
          </div>

          <nav className="space-y-4">
            {menuItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => handleSmoothScroll(e, item.id)}
                className="flex items-center space-x-3 p-3 text-white hover:bg-white/20 rounded-lg transition-colors"
              >
                <item.icon className="w-5 h-5" />
                <span className="font-medium">{item.label}</span>
              </a>
            ))}
          </nav>

          <div className="mt-8 pt-8 border-t border-white/20">
            <div className="text-center">
              <p className="text-white/80 text-sm mb-4">Entre em contato</p>
              <Button 
                onClick={handleWhatsAppClick}
                className="w-full bg-white text-orange-600 hover:bg-orange-50 font-bold py-3 rounded-xl flex items-center justify-center space-x-2"
              >
                <img 
                  src="/lovable-uploads/981f602c-b0d2-4161-8119-dfd91ef1c234.png" 
                  alt="WhatsApp" 
                  className="w-5 h-5"
                />
                <span>WhatsApp</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileNavigation;
