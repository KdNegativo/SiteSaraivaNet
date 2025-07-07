import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  variant?: 'default' | 'premium' | 'gradient';
  hover?: boolean;
}

export const GlassCard = ({ 
  children, 
  className,
  variant = 'default',
  hover = true
}: GlassCardProps) => {
  const baseClasses = "rounded-2xl p-6 transition-all duration-500";
  
  const variantClasses = {
    default: "glass",
    premium: "glass-card",
    gradient: "gradient-card"
  };

  const hoverClasses = hover ? "hover-lift" : "";

  return (
    <div 
      className={cn(
        baseClasses,
        variantClasses[variant],
        hoverClasses,
        className
      )}
    >
      {children}
    </div>
  );
};

export default GlassCard;