
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
      className="fixed bottom-20 right-4 md:bottom-6 md:right-6 z-40 hover:scale-110 transition-all duration-300 flex items-center justify-center"
      aria-label="Entrar em contato via WhatsApp"
    >
      <img 
        src="/lovable-uploads/981f602c-b0d2-4161-8119-dfd91ef1c234.png" 
        alt="WhatsApp" 
        className="w-16 h-16"
      />
    </button>
  );
};

export default FloatingWhatsApp;
