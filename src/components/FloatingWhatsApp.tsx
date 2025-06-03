
const FloatingWhatsApp = () => {
  const handleWhatsAppClick = () => {
    const phoneNumber = "5589994395789";
    const message = "Olá! Gostaria de saber mais sobre os planos da SaraivaNet.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <button
      onClick={handleWhatsAppClick}
      className="fixed bottom-20 right-4 md:bottom-6 md:right-6 z-40 bg-white hover:bg-gray-50 rounded-full p-2 shadow-xl transition-all duration-300 hover:scale-110 flex items-center justify-center"
      aria-label="Entrar em contato via WhatsApp"
    >
      <img 
        src="/lovable-uploads/01df9255-1f15-4131-86c5-638e9796ee23.png" 
        alt="WhatsApp" 
        className="w-12 h-12"
      />
    </button>
  );
};

export default FloatingWhatsApp;
