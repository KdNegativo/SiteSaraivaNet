
import { ReactNode, ButtonHTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

interface PremiumButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'glass' | 'gradient';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  loading?: boolean;
  icon?: ReactNode;
  glow?: boolean;
  shimmer?: boolean;
}

const PremiumButton = ({ 
  children, 
  className,
  variant = 'primary',
  size = 'md',
  loading = false,
  icon,
  disabled,
  glow = false,
  shimmer = false,
  ...props 
}: PremiumButtonProps) => {
  const baseClasses = "font-semibold rounded-xl transition-all duration-500 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed";
  
  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
    xl: 'px-10 py-5 text-xl'
  };

  const effectClasses = cn(
    glow && "hover-glow",
    shimmer && "hover-shimmer"
  );

  const variantClasses = {
    primary: 'btn-premium',
    secondary: 'bg-gray-100 hover:bg-gray-200 text-gray-900 dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-white',
    glass: 'glass-button text-white',
    gradient: 'gradient-animated text-white hover:scale-105 hover:shadow-lg'
  };

  return (
    <button
      className={cn(
        baseClasses,
        sizeClasses[size],
        variantClasses[variant],
        effectClasses,
        className
      )}
      disabled={disabled || loading}
      {...props}
    >
      {loading ? (
        <div className="w-5 h-5 border-2 border-current border-t-transparent rounded-full animate-spin" />
      ) : icon ? (
        <>
          {icon}
          {children}
        </>
      ) : (
        children
      )}
    </button>
  );
};

export default PremiumButton;
