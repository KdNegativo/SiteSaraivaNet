import { useEffect, useRef, ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface ScrollAnimationProps {
  children: ReactNode;
  className?: string;
  animation?: 'fade-up' | 'fade-scale' | 'fade-left' | 'fade-right';
  delay?: number;
  threshold?: number;
}

export const ScrollAnimation = ({ 
  children, 
  className,
  animation = 'fade-up',
  delay = 0,
  threshold = 0.1
}: ScrollAnimationProps) => {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            element.classList.add('animate');
          }, delay);
        }
      },
      { threshold }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [delay, threshold]);

  const animationClasses = {
    'fade-up': 'animate-on-scroll',
    'fade-scale': 'animate-on-scroll-scale',
    'fade-left': 'animate-on-scroll-left',
    'fade-right': 'animate-on-scroll-right'
  };

  return (
    <div 
      ref={elementRef}
      className={cn(animationClasses[animation], className)}
    >
      {children}
    </div>
  );
};

export default ScrollAnimation;