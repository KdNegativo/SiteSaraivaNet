import React from 'react';
import { Button } from '@/components/ui/button';
import { type VariantProps } from 'class-variance-authority';
import { buttonVariants } from '@/components/ui/button';

interface AccessibleButtonProps extends 
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  VariantProps<typeof buttonVariants> {
  loading?: boolean;
  loadingText?: string;
  visuallyHiddenText?: string;
  touchOptimized?: boolean;
}

/**
 * Enhanced button component with accessibility features
 * Includes proper ARIA attributes, focus management, and touch optimization
 */
const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  children,
  loading = false,
  loadingText = 'Carregando...',
  visuallyHiddenText,
  touchOptimized = false,
  className = '',
  disabled,
  variant,
  size,
  ...props
}) => {
  const enhancedClasses = [
    'focus-visible',
    touchOptimized ? 'touch-target' : '',
    'interactive-scale',
    'gpu-accelerated',
    className
  ].filter(Boolean).join(' ');

  return (
    <Button
      className={enhancedClasses}
      disabled={disabled || loading}
      aria-disabled={disabled || loading}
      aria-busy={loading}
      variant={variant}
      size={size}
      {...props}
    >
      {loading && (
        <span className="sr-only">{loadingText}</span>
      )}
      
      {visuallyHiddenText && (
        <span className="sr-only">{visuallyHiddenText}</span>
      )}
      
      <span aria-hidden={loading}>
        {children}
      </span>
      
      {loading && (
        <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin ml-2" 
             aria-hidden="true" />
      )}
    </Button>
  );
};

export default AccessibleButton;