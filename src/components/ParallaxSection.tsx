
import React from 'react';
import { useParallax } from '@/hooks/useParallax';

interface ParallaxSectionProps {
  children: React.ReactNode;
  speed?: number;
  className?: string;
  backgroundImage?: string;
  overlay?: boolean;
}

const ParallaxSection: React.FC<ParallaxSectionProps> = ({
  children,
  speed = 0.5,
  className = '',
  backgroundImage,
  overlay = false
}) => {
  const offset = useParallax(speed);

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {backgroundImage && (
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${backgroundImage})`,
            transform: `translateY(${offset}px)`,
          }}
        />
      )}
      {overlay && (
        <div className="absolute inset-0 bg-black bg-opacity-30" />
      )}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default ParallaxSection;
