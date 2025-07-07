import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface ModernCardProps {
  children: ReactNode;
  className?: string;
  variant?: 'glass' | 'gradient' | 'floating' | 'premium' | 'neon';
  hover?: boolean;
  glow?: boolean;
  tilt?: boolean;
  shine?: boolean;
}

const ModernCard = ({ 
  children, 
  className, 
  variant = 'glass', 
  hover = true, 
  glow = false,
  tilt = false,
  shine = false
}: ModernCardProps) => {
  const baseClasses = "rounded-2xl p-6 transition-all duration-500";
  
  const variantClasses = {
    glass: "glass-card-premium",
    gradient: "gradient-animated text-white",
    floating: "glass-floating shadow-2xl",
    premium: "bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 border border-gray-200/50 dark:border-gray-700/50 shadow-xl",
    neon: "bg-gray-900 border-2 border-cyan-400/50 shadow-lg shadow-cyan-400/25"
  };

  const hoverClasses = hover ? "hover-lift" : "";
  const glowClasses = glow ? "hover-glow" : "";
  const tiltClasses = tilt ? "hover-tilt" : "";
  const shineClasses = shine ? "hover-shine" : "";

  return (
    <div 
      className={cn(
        baseClasses,
        variantClasses[variant],
        hoverClasses,
        glowClasses,
        tiltClasses,
        shineClasses,
        className
      )}
    >
      {children}
    </div>
  );
};

export default ModernCard;