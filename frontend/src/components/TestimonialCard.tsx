
import React from 'react';
import { Card } from '@/components/ui/card';

interface TestimonialCardProps {
  name: string;
  age: string;
  location: string;
  testimonial: string;
  initials: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  name,
  age,
  location,
  testimonial,
  initials
}) => {
  return (
    <Card className="p-8 hover:shadow-2xl hover:scale-105 transition-all duration-500 ease-out hover:-translate-y-2 bg-white border-0 shadow-lg group">
      <div className="flex items-center mb-4">
        <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4 group-hover:scale-110 transition-transform duration-300">
          {initials}
        </div>
        <div className="flex text-orange-500">
          {[...Array(5)].map((_, i) => (
            <span 
              key={i} 
              className="text-xl transform transition-transform duration-300 hover:scale-125"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              ⭐
            </span>
          ))}
        </div>
      </div>
      <p className="text-gray-600 mb-6 italic leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
        "{testimonial}"
      </p>
      <div className="space-y-1">
        <div className="font-semibold text-gray-800 group-hover:text-orange-600 transition-colors duration-300">{name}</div>
        <div className="text-sm text-orange-500">{age}</div>
        <div className="text-sm text-gray-500">{location}</div>
      </div>
    </Card>
  );
};

export default TestimonialCard;
