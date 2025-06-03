
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { ReactNode } from 'react';

interface AnimatedSectionProps {
  children: ReactNode;
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
  const { elementRef, isVisible } = useScrollAnimation();

  const animationClasses = {
    'fade-up': isVisible 
      ? 'opacity-100 translate-y-0' 
      : 'opacity-0 translate-y-8',
    'fade-in': isVisible 
      ? 'opacity-100' 
      : 'opacity-0',
    'scale-in': isVisible 
      ? 'opacity-100 scale-100' 
      : 'opacity-0 scale-95',
    'slide-left': isVisible 
      ? 'opacity-100 translate-x-0' 
      : 'opacity-0 translate-x-8',
    'slide-right': isVisible 
      ? 'opacity-100 translate-x-0' 
      : 'opacity-0 -translate-x-8',
  };

  return (
    <div
      ref={elementRef}
      className={`transition-all duration-700 ease-out ${animationClasses[animation]} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

export default AnimatedSection;
