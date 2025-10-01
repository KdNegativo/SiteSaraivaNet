import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const HeroCarousel = () => {
  const images = [
    {
      src: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1400&auto=format&fit=crop",
      alt: "Setup Gaming Profissional - Internet Ultra Rápida SaraivaNet"
    },
    {
      src: "https://images.unsplash.com/photo-1560169897-fc0cdbdfa4d5?q=80&w=1400&auto=format&fit=crop",
      alt: "Streaming de TV - Assista Seus Programas Favoritos com SaraivaNet"
    },
    {
      src: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=1400&auto=format&fit=crop",
      alt: "Tecnologia e Trabalho Remoto - Conectividade SaraivaNet"
    },
    {
      src: "https://images.unsplash.com/photo-1750712263185-edde9f359e33?q=80&w=1400&auto=format&fit=crop",
      alt: "WiFi Moderno - Rede de Alta Velocidade SaraivaNet"
    },
    {
      src: "https://images.unsplash.com/photo-1498084393753-b411b2d26b34?q=80&w=1400&auto=format&fit=crop",
      alt: "Velocidade Extrema - Internet Fibra Óptica SaraivaNet"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Troca a cada 5 segundos

    return () => clearInterval(interval);
  }, [images.length]);

  const goToPrevious = () => {
    setCurrentIndex(currentIndex === 0 ? images.length - 1 : currentIndex - 1);
  };

  const goToNext = () => {
    setCurrentIndex(currentIndex === images.length - 1 ? 0 : currentIndex + 1);
  };

  return (
    <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl group">
      {/* Images */}
      <div className="relative w-full h-full">
        {images.map((image, index) => (
          <img
            key={index}
            src={image.src}
            alt={image.alt}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
              index === currentIndex ? 'opacity-100' : 'opacity-0'
            }`}
          />
        ))}
      </div>

      {/* Navigation Arrows - aparecem no hover */}
      <button
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white p-3 rounded-full transition-all duration-300 hover:scale-110 opacity-0 group-hover:opacity-100"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      
      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white p-3 rounded-full transition-all duration-300 hover:scale-110 opacity-0 group-hover:opacity-100"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`transition-all duration-300 rounded-full ${
              index === currentIndex 
                ? 'w-8 h-3 bg-white shadow-lg' 
                : 'w-3 h-3 bg-white/60 hover:bg-white/90'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroCarousel;