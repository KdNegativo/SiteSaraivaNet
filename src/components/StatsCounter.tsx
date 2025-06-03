
import React, { useState, useEffect } from 'react';

interface StatsCounterProps {
  endValue: number;
  label: string;
  suffix?: string;
  duration?: number;
  icon?: React.ReactNode;
}

const StatsCounter: React.FC<StatsCounterProps> = ({ 
  endValue, 
  label, 
  suffix = '', 
  duration = 2000,
  icon 
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
    <div className="text-center">
      {icon && (
        <div className="flex justify-center mb-4 text-orange-400">
          {icon}
        </div>
      )}
      <div className="text-4xl font-bold mb-2 text-white">
        {count}{suffix}
      </div>
      <div className="text-xl font-semibold mb-2 text-white">{label}</div>
    </div>
  );
};

export default StatsCounter;
