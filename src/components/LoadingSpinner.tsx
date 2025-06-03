
import React from 'react';

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  color?: 'primary' | 'white' | 'orange';
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ 
  size = 'md', 
  color = 'primary' 
}) => {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12'
  };

  const colorClasses = {
    primary: 'border-blue-600',
    white: 'border-white',
    orange: 'border-orange-500'
  };

  return (
    <div className={`${sizeClasses[size]} animate-spin rounded-full border-2 border-solid ${colorClasses[color]} border-t-transparent`}></div>
  );
};

export default LoadingSpinner;
