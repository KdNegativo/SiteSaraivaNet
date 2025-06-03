
import React from 'react';
import { Card } from '@/components/ui/card';

interface TestimonialCardProps {
  name: string;
  age: string | number;
  location?: string;
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
    <Card className="p-8 hover:shadow-lg transition-shadow duration-300">
      <div className="flex items-center mb-4">
        <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
          {initials}
        </div>
        <div className="flex text-orange-500">
          {[...Array(5)].map((_, i) => (
            <span key={i} className="text-xl">⭐</span>
          ))}
        </div>
      </div>
      <p className="text-gray-600 mb-6 italic leading-relaxed">
        "{testimonial}"
      </p>
      <div>
        <div className="font-semibold text-gray-800">{name}</div>
        <div className="text-sm text-orange-500">{age} anos</div>
        {location && (
          <div className="text-sm text-gray-500">{location}</div>
        )}
      </div>
    </Card>
  );
};

export default TestimonialCard;
