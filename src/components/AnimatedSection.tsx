
import { useEffect, useRef, useState } from 'react';

interface AnimatedSectionProps {
  children: React.ReactNode;
  animation?: 'fade-up' | 'fade-in' | 'scale-in' | 'slide-left' | 'slide-right';
  delay?: number;
  className?: string;
}

const AnimatedSection = ({ 
  children, 
  animation = 'fade-up', 
  delay = 0,
  className = '' 
}: AnimatedSectionProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, delay);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [delay]);

  const animationClasses = {
    'fade-up': isVisible ? 'animate-fade-in' : 'opacity-0 translate-y-8',
    'fade-in': isVisible ? 'animate-fade-in' : 'opacity-0',
    'scale-in': isVisible ? 'animate-scale-in' : 'opacity-0 scale-95',
    'slide-left': isVisible ? 'animate-slide-in-left' : 'opacity-0 -translate-x-8',
    'slide-right': isVisible ? 'animate-slide-in-right' : 'opacity-0 translate-x-8',
  };

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${animationClasses[animation]} ${className}`}
    >
      {children}
    </div>
  );
};

export default AnimatedSection;
