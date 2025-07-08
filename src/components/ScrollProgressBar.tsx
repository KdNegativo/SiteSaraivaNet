import { useState, useEffect } from 'react';

const ScrollProgressBar = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const currentProgress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(Math.min(currentProgress, 100));
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-1 bg-gray-200/50 backdrop-blur-sm z-50">
      <div 
        className="h-full bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 transition-all duration-200 ease-out shadow-sm"
        style={{ width: `${scrollProgress}%` }}
      />
      <div 
        className="absolute top-0 h-full w-8 bg-gradient-to-r from-transparent to-white/30 blur-sm transition-all duration-200"
        style={{ left: `${Math.max(0, scrollProgress - 2)}%` }}
      />
    </div>
  );
};

export default ScrollProgressBar;