
import { useEffect, useRef, useState } from 'react';

interface AnimatedSectionProps {
  children: React.ReactNode;
  animation?: 'fade-up' | 'fade-in' | 'scale-in' | 'slide-left' | 'slide-right' | 'bounce-in' | 'rotate-in';
  delay?: number;
  className?: string;
  duration?: 'fast' | 'normal' | 'slow';
}

const AnimatedSection = ({ 
  children, 
  animation = 'fade-up', 
  delay = 0,
  className = '',
  duration = 'normal'
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

  const durationClasses = {
    fast: 'duration-300',
    normal: 'duration-700',
    slow: 'duration-1000'
  };

  const animationClasses = {
    'fade-up': isVisible ? 'animate-fade-in' : 'opacity-0 translate-y-8',
    'fade-in': isVisible ? 'animate-fade-in' : 'opacity-0',
    'scale-in': isVisible ? 'animate-scale-in' : 'opacity-0 scale-95',
    'slide-left': isVisible ? 'animate-slide-in-left' : 'opacity-0 -translate-x-8',
    'slide-right': isVisible ? 'animate-slide-in-right' : 'opacity-0 translate-x-8',
    'bounce-in': isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-75',
    'rotate-in': isVisible ? 'opacity-100 rotate-0' : 'opacity-0 rotate-12',
  };

  return (
    <div
      ref={ref}
      className={`transition-all ${durationClasses[duration]} ease-out ${animationClasses[animation]} ${className}`}
    >
      {children}
    </div>
  );
};

export default AnimatedSection;
