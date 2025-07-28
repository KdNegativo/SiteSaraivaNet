
import { useState } from "react";
import { Menu, X, Home, CreditCard, MapPin, Heart, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const MobileNavigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSmoothScroll = (e: React.MouseEvent<HTMLButtonElement>, targetId: string) => {
    e.preventDefault();
    setIsOpen(false); // Fecha o menu após clicar
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const headerHeight = 80; // Altura do header
      const elementPosition = targetElement.offsetTop - headerHeight;
      
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
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
        className="w-10 h-10 text-white hover:bg-white/20 transition-colors rounded-full"
      >
        <Menu className="h-5 w-5" />
      </Button>

      {/* Sobreposição */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Menu */}
      <div className={`fixed top-0 right-0 h-full w-80 bg-gradient-to-br from-orange-600 via-red-600 to-red-700 backdrop-blur-xl border-l border-white/20 z-50 transform transition-all duration-500 ease-out ${
        isOpen ? 'translate-x-0 shadow-2xl' : 'translate-x-full'
      }`}>
        <div className="p-6">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-lg font-bold text-white">SaraivaNet</h1>
              <h2 className="text-sm text-white/80">Menu</h2>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(false)}
              className="w-8 h-8 text-white hover:bg-white/20 transition-colors rounded-full"
            >
              <X className="h-5 w-5" />
            </Button>
          </div>

          <nav className="space-y-3">
            {menuItems.map((item, index) => (
              <button
                key={item.id}
                onClick={(e) => handleSmoothScroll(e, item.id)}
                className="w-full flex items-center space-x-4 p-4 text-white hover:bg-white/20 rounded-2xl transition-all duration-300 hover:scale-105 hover:-translate-y-1 group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-white/30 transition-colors duration-300">
                  <item.icon className="w-5 h-5" />
                </div>
                <span className="font-semibold text-lg">{item.label}</span>
              </button>
            ))}
          </nav>

          <div className="mt-8 pt-8 border-t border-white/30">
            <div className="text-center">
              <p className="text-white/90 text-sm mb-6 font-medium">Entre em contato</p>
                <Button 
                onClick={handleWhatsAppClick}
                className="w-full bg-gradient-to-r from-white to-orange-50 text-orange-600 hover:from-orange-50 hover:to-white font-black py-4 rounded-2xl flex items-center justify-center space-x-3 shadow-2xl hover:scale-105 hover:-translate-y-1 transition-all duration-300 border-2 border-white/50"
              >
                <span className="text-2xl">💬</span>
                <span className="text-lg">WhatsApp</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileNavigation;
