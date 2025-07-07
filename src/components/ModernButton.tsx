import { ReactNode, ButtonHTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

interface ModernButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'gradient' | 'glass' | 'neon' | 'floating';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  glow?: boolean;
  shine?: boolean;
  loading?: boolean;
}

const ModernButton = ({ 
  children, 
  className, 
  variant = 'primary',
  size = 'md',
  glow = false,
  shine = false,
  loading = false,
  disabled,
  ...props 
}: ModernButtonProps) => {
  const baseClasses = "relative inline-flex items-center justify-center font-semibold rounded-xl transition-all duration-300 overflow-hidden group disabled:opacity-50 disabled:cursor-not-allowed";
  
  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
    xl: 'px-10 py-5 text-xl'
  };

  const variantClasses = {
    primary: 'bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white shadow-lg hover:shadow-xl hover:scale-105',
    secondary: 'bg-white dark:bg-gray-800 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 shadow-md hover:shadow-lg',
    gradient: 'bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 hover:from-purple-600 hover:via-pink-600 hover:to-orange-600 text-white shadow-lg hover:shadow-xl hover:scale-105',
    glass: 'bg-white/20 backdrop-blur-md border border-white/30 text-white hover:bg-white/30 shadow-lg hover:shadow-xl',
    neon: 'bg-gray-900 border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-gray-900 shadow-lg shadow-cyan-400/25 hover:shadow-cyan-400/50',
    floating: 'bg-white dark:bg-gray-800 text-gray-900 dark:text-white shadow-2xl hover:shadow-3xl hover:scale-105 hover:-translate-y-1'
  };

  const glowClasses = glow ? 'hover:shadow-2xl hover:shadow-orange-500/30' : '';
  const shineClasses = shine ? 'before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent before:translate-x-[-100%] before:transition-transform before:duration-700 hover:before:translate-x-[100%]' : '';

  return (
    <button
      className={cn(
        baseClasses,
        sizeClasses[size],
        variantClasses[variant],
        glowClasses,
        shineClasses,
        className
      )}
      disabled={disabled || loading}
      {...props}
    >
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-5 h-5 border-2 border-current border-t-transparent rounded-full animate-spin" />
        </div>
      )}
      <span className={loading ? 'opacity-0' : ''}>{children}</span>
    </button>
  );
};

export default ModernButton;