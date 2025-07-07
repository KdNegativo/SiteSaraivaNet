import React from 'react';
import { useReducedMotion } from '@/hooks/useReducedMotion';

interface MobileOptimizedProps {
  children: React.ReactNode;
  className?: string;
  touchOptimized?: boolean;
  skipMotion?: boolean;
}

/**
 * Wrapper component for mobile-optimized content
 * Provides touch-friendly interactions and respects motion preferences
 */
const MobileOptimized: React.FC<MobileOptimizedProps> = ({ 
  children, 
  className = '', 
  touchOptimized = false,
  skipMotion = false 
}) => {
  const prefersReducedMotion = useReducedMotion();
  
  const baseClasses = [
    'mobile-friendly',
    touchOptimized ? 'touch-target' : '',
    (prefersReducedMotion || skipMotion) ? 'no-motion' : '',
    className
  ].filter(Boolean).join(' ');

  return (
    <div className={baseClasses}>
      {children}
    </div>
  );
};

export default MobileOptimized;