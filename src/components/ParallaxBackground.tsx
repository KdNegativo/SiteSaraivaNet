import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

interface ParallaxBackgroundProps {
  children?: React.ReactNode;
  className?: string;
  intensity?: number;
  variant?: 'mesh' | 'geometric' | 'floating' | 'particles';
}

const ParallaxBackground = ({ 
  children, 
  className, 
  intensity = 0.5,
  variant = 'mesh'
}: ParallaxBackgroundProps) => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const parallaxStyle = {
    transform: `translateY(${scrollY * intensity}px)`
  };

  const renderVariant = () => {
    switch (variant) {
      case 'mesh':
        return (
          <div className="absolute inset-0 gradient-mesh opacity-30" style={parallaxStyle} />
        );
      case 'geometric':
        return (
          <div className="absolute inset-0" style={parallaxStyle}>
            <div className="absolute top-20 left-10 w-32 h-32 bg-orange-400/20 rounded-full blur-2xl animate-float" />
            <div className="absolute top-40 right-20 w-24 h-24 bg-purple-400/20 rounded-full blur-2xl animate-float" style={{ animationDelay: '1s' }} />
            <div className="absolute bottom-40 left-1/4 w-40 h-40 bg-blue-400/20 rounded-full blur-2xl animate-float" style={{ animationDelay: '2s' }} />
            <div className="absolute bottom-20 right-1/3 w-28 h-28 bg-pink-400/20 rounded-full blur-2xl animate-float" style={{ animationDelay: '3s' }} />
          </div>
        );
      case 'floating':
        return (
          <div className="absolute inset-0" style={parallaxStyle}>
            {Array.from({ length: 20 }, (_, i) => (
              <div
                key={i}
                className={cn(
                  'absolute rounded-full blur-sm animate-float',
                  i % 4 === 0 && 'bg-orange-400/10 w-16 h-16',
                  i % 4 === 1 && 'bg-purple-400/10 w-12 h-12',
                  i % 4 === 2 && 'bg-blue-400/10 w-20 h-20',
                  i % 4 === 3 && 'bg-pink-400/10 w-8 h-8'
                )}
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 4}s`,
                  animationDuration: `${3 + Math.random() * 4}s`
                }}
              />
            ))}
          </div>
        );
      case 'particles':
        return (
          <div className="absolute inset-0" style={parallaxStyle}>
            {Array.from({ length: 50 }, (_, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 bg-white/20 rounded-full animate-pulse"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 2}s`
                }}
              />
            ))}
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className={cn('relative overflow-hidden', className)}>
      {renderVariant()}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default ParallaxBackground;