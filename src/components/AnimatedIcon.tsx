
import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface AnimatedIconProps {
  children: ReactNode;
  animation?: 'float' | 'glow' | 'bounce' | 'pulse' | 'none';
  gradient?: boolean;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
}

const AnimatedIcon = ({ 
  children, 
  animation = 'none',
  gradient = false,
  size = 'md',
  className 
}: AnimatedIconProps) => {
  const sizeClasses = {
    sm: 'w-6 h-6',
    md: 'w-8 h-8', 
    lg: 'w-12 h-12',
    xl: 'w-16 h-16'
  };

  const animationClasses = {
    float: 'icon-float',
    glow: 'icon-glow',
    bounce: 'animate-bounce-in',
    pulse: 'animate-pulse-glow',
    none: ''
  };

  const gradientClasses = gradient 
    ? 'bg-gradient-to-br from-blue-500 to-purple-600 text-transparent bg-clip-text' 
    : '';

  return (
    <div 
      className={cn(
        'flex items-center justify-center',
        sizeClasses[size],
        animationClasses[animation],
        gradientClasses,
        className
      )}
    >
      {children}
    </div>
  );
};

export default AnimatedIcon;
