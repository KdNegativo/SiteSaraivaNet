import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface AnimatedIconProps {
  children: ReactNode;
  animation?: 'float' | 'glow' | 'bounce' | 'pulse' | 'spin' | 'wiggle' | 'none';
  gradient?: boolean;
  size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  className?: string;
  delay?: number;
}

const AnimatedIcon = ({ 
  children, 
  animation = 'none',
  gradient = false,
  size = 'md',
  className,
  delay = 0
}: AnimatedIconProps) => {
  const sizeClasses = {
    sm: 'w-6 h-6',
    md: 'w-8 h-8', 
    lg: 'w-12 h-12',
    xl: 'w-16 h-16',
    '2xl': 'w-20 h-20'
  };

  const animationClasses = {
    float: 'animate-float',
    glow: 'animate-glow',
    bounce: 'animate-bounce-in',
    pulse: 'animate-pulse-glow',
    spin: 'animate-spin',
    wiggle: 'animate-wiggle',
    none: ''
  };

  const gradientClasses = gradient 
    ? 'bg-gradient-to-br from-orange-400 via-red-500 to-purple-600 text-transparent bg-clip-text' 
    : '';

  const style = delay > 0 ? { animationDelay: `${delay}ms` } : {};

  return (
    <div 
      className={cn(
        'flex items-center justify-center',
        sizeClasses[size],
        animationClasses[animation],
        gradientClasses,
        className
      )}
      style={style}
    >
      {children}
    </div>
  );
};

export default AnimatedIcon;