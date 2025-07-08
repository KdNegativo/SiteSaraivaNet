import { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-32 right-4 md:bottom-24 md:right-6 z-40 bg-white/90 hover:bg-white backdrop-blur-md text-gray-800 p-3 rounded-full shadow-xl hover:shadow-2xl transform hover:scale-110 transition-all duration-300 border border-gray-200/50 group"
      aria-label="Voltar ao topo"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      <ArrowUp className="w-5 h-5 relative z-10 group-hover:text-orange-600 transition-colors duration-300" />
    </button>
  );
};

export default BackToTop;