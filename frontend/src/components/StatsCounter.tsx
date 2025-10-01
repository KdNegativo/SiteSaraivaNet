
import React, { useState, useEffect } from 'react';

interface StatsCounterProps {
  endValue: number;
  label: string;
  suffix?: string;
  duration?: number;
}

const StatsCounter: React.FC<StatsCounterProps> = ({ 
  endValue, 
  label, 
  suffix = '', 
  duration = 2000 
}) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number;
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      setCount(Math.floor(progress * endValue));
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    
    requestAnimationFrame(animate);
  }, [endValue, duration]);

  return (
    <div className="text-center px-1">
      <div className="text-2xl sm:text-3xl md:text-4xl font-bold mb-1 text-white leading-tight">
        {count}{suffix}
      </div>
      <div className="text-xs sm:text-sm md:text-lg font-semibold text-white leading-tight">{label}</div>
    </div>
  );
};

export default StatsCounter;
