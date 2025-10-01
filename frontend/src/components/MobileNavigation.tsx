import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Menu, X, Home, CreditCard, MapPin, Heart, Phone, Smartphone } from "lucide-react";

const MobileNavigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleSmoothScroll = (targetId: string) => {
    setIsOpen(false); // Fecha o menu após clicar
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const headerHeight = 80;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerHeight;
      
      window.scrollTo({
        top: offsetPosition,
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

  // Bloqueia o scroll quando o menu está aberto
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    
    // Cleanup quando o componente desmontar
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const toggleMenu = () => {
    console.log('Menu toggle clicked!', !isOpen);
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Botão do Menu - Aumentado e mais visível */}
      <button
        onClick={toggleMenu}
        className="relative z-[100] w-12 h-12 bg-white/20 backdrop-blur-sm border-2 border-white/40 rounded-xl flex items-center justify-center text-white hover:bg-white/30 transition-all duration-200 active:scale-95 shadow-lg"
        style={{ 
          WebkitTapHighlightColor: 'transparent',
          touchAction: 'manipulation'
        }}
        aria-label="Menu"
      >
        {isOpen ? (
          <X className="h-6 w-6" />
        ) : (
          <Menu className="h-6 w-6" />
        )}
      </button>

      {/* Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[90]"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Menu Lateral */}
      <div className={`fixed top-0 right-0 h-full w-80 max-w-[90vw] bg-gradient-to-b from-orange-600 to-red-600 z-[95] shadow-2xl transform transition-transform duration-300 ease-in-out ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <div className="p-6 h-full overflow-y-auto">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-lg font-bold text-white">SaraivaNet</h1>
              <h2 className="text-sm text-white/80">Menu</h2>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <div className="space-y-4">
            <button
              onClick={() => { setIsOpen(false); navigate('/chips'); }}
              className="w-full flex items-center space-x-3 p-3 text-white bg-white/15 hover:bg-white/25 rounded-lg transition-colors text-left"
            >
              <Smartphone className="w-5 h-5" />
              <span className="font-semibold">Chips</span>
            </button>

            <nav className="space-y-4">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleSmoothScroll(item.id)}
                  className="w-full flex items-center space-x-3 p-3 text-white hover:bg-white/20 rounded-lg transition-colors text-left"
                >
                  <item.icon className="w-5 h-5" />
                  <span className="font-medium">{item.label}</span>
                </button>
              ))}
            </nav>
          </div>

          <div className="mt-8 pt-8 border-t border-white/20">
            <div className="text-center">
              <p className="text-white/80 text-sm mb-4">Entre em contato</p>
              <button 
                onClick={handleWhatsAppClick}
                className="w-full bg-white text-orange-600 hover:bg-orange-50 font-bold py-3 rounded-xl flex items-center justify-center space-x-2 transition-colors"
              >
                <img 
                  src="/lovable-uploads/981f602c-b0d2-4161-8119-dfd91ef1c234.png" 
                  alt="WhatsApp" 
                  className="w-5 h-5"
                />
                <span>WhatsApp</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileNavigation;