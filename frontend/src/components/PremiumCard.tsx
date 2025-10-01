
import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface PremiumCardProps {
  children: ReactNode;
  className?: string;
  variant?: 'glass' | 'premium' | 'gradient';
  hover?: boolean;
  glow?: boolean;
}

const PremiumCard = ({ 
  children, 
  className, 
  variant = 'premium', 
  hover = true, 
  glow = false 
}: PremiumCardProps) => {
  const baseClasses = "rounded-xl p-6 transition-all duration-300";
  
  const variantClasses = {
    glass: "card-glass",
    premium: "card-premium", 
    gradient: "gradient-animated text-white"
  };

  const hoverClasses = hover ? "hover-lift" : "";
  const glowClasses = glow ? "hover-glow" : "";

  return (
    <div 
      className={cn(
        baseClasses,
        variantClasses[variant],
        hoverClasses,
        glowClasses,
        className
      )}
    >
      {children}
    </div>
  );
};

export default PremiumCard;
