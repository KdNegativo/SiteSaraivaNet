
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
        className="w-10 h-10 text-white hover:bg-white/20 transition-colors rounded-full relative group"
      >
        <div className={`transition-all duration-300 ${isOpen ? 'rotate-90' : ''}`}>
          <Menu className="h-5 w-5" />
        </div>
        {/* Micro-interaction indicator */}
        <div className="absolute inset-0 rounded-full bg-white/10 scale-0 group-hover:scale-100 transition-transform duration-200"></div>
      </Button>

      {/* Overlay with blur */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 transition-all duration-300"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Premium Mobile Menu */}
      <div className={`fixed top-0 right-0 h-full w-80 bg-gradient-to-br from-white/95 to-gray-50/95 dark:from-gray-800/95 dark:to-gray-900/95 backdrop-blur-xl z-50 transform transition-all duration-500 ease-out shadow-2xl border-l border-white/20 ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        {/* Animated Background Elements */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-orange-200/30 to-transparent rounded-full blur-2xl"></div>
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-red-200/30 to-transparent rounded-full blur-2xl"></div>
        
        <div className="p-6 relative z-10">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-xl font-bold text-gray-800 dark:text-white">SaraivaNet</h1>
              <h2 className="text-sm text-gray-600 dark:text-gray-300">Menu Principal</h2>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(false)}
              className="w-10 h-10 text-gray-600 dark:text-gray-300 hover:bg-gray-200/50 dark:hover:bg-gray-700/50 transition-all duration-200 rounded-full relative group"
            >
              <div className={`transition-all duration-300 ${isOpen ? 'rotate-180' : ''}`}>
                <X className="h-5 w-5" />
              </div>
              <div className="absolute inset-0 rounded-full bg-red-500/10 scale-0 group-hover:scale-100 transition-transform duration-200"></div>
            </Button>
          </div>

          <nav className="space-y-2">
            {menuItems.map((item, index) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => handleSmoothScroll(e, item.id)}
                className="flex items-center space-x-4 p-4 text-gray-700 dark:text-gray-200 hover:bg-gradient-to-r hover:from-orange-500/10 hover:to-red-500/10 rounded-2xl transition-all duration-300 group relative overflow-hidden"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Hover effect background */}
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500/5 to-red-500/5 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300 rounded-2xl"></div>
                
                <div className="w-10 h-10 bg-gradient-to-br from-orange-100 to-red-100 dark:from-orange-900/50 dark:to-red-900/50 rounded-xl flex items-center justify-center relative z-10 group-hover:scale-110 transition-transform duration-200">
                  <item.icon className="w-5 h-5 text-orange-600 dark:text-orange-400" />
                </div>
                <span className="font-medium relative z-10 group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors duration-200">{item.label}</span>
              </a>
            ))}
          </nav>

          <div className="mt-8 pt-8 border-t border-gray-200/50 dark:border-gray-700/50">
            <div className="text-center">
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 font-medium">Entre em contato conosco</p>
              <Button 
                onClick={handleWhatsAppClick}
                className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-400 hover:to-green-500 text-white font-bold py-4 rounded-2xl flex items-center justify-center space-x-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 relative overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                <img 
                  src="/lovable-uploads/981f602c-b0d2-4161-8119-dfd91ef1c234.png" 
                  alt="WhatsApp" 
                  className="w-6 h-6 relative z-10"
                />
                <span className="relative z-10">WhatsApp</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileNavigation;
