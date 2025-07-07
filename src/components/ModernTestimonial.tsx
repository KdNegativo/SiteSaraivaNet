import { Star, Quote } from 'lucide-react';
import ModernCard from './ModernCard';
import AnimatedIcon from './AnimatedIcon';

interface ModernTestimonialProps {
  name: string;
  location: string;
  text: string;
  rating: number;
  avatar?: string;
  delay?: number;
}

const ModernTestimonial = ({ 
  name, 
  location, 
  text, 
  rating, 
  avatar,
  delay = 0 
}: ModernTestimonialProps) => {
  return (
    <div style={{ animationDelay: `${delay}ms` }}>
      <ModernCard 
        variant="glass" 
        hover 
        glow 
        className="h-full animate-fade-in"
      >
      <div className="relative">
        {/* Quote Icon */}
        <div className="absolute -top-2 -left-2">
          <AnimatedIcon animation="float" size="lg" className="text-orange-400/60">
            <Quote className="w-8 h-8" />
          </AnimatedIcon>
        </div>

        {/* Rating Stars */}
        <div className="flex items-center gap-1 mb-4 justify-center">
          {Array.from({ length: 5 }, (_, i) => (
            <AnimatedIcon 
              key={i} 
              animation="glow" 
              size="sm" 
              delay={i * 100}
              className={i < rating ? "text-yellow-400" : "text-gray-300"}
            >
              <Star className="w-4 h-4 fill-current" />
            </AnimatedIcon>
          ))}
        </div>

        {/* Testimonial Text */}
        <blockquote className="text-gray-700 dark:text-gray-300 mb-6 text-center leading-relaxed font-medium">
          "{text}"
        </blockquote>

        {/* Author Info */}
        <div className="flex items-center justify-center gap-3">
          {avatar ? (
            <img 
              src={avatar} 
              alt={name}
              className="w-12 h-12 rounded-full object-cover border-2 border-orange-400/50"
            />
          ) : (
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-400 to-red-500 flex items-center justify-center text-white font-bold text-lg">
              {name.charAt(0)}
            </div>
          )}
          <div className="text-center">
            <div className="font-semibold text-gray-900 dark:text-white">{name}</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">{location}</div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute -bottom-2 -right-2 w-16 h-16 bg-gradient-to-br from-orange-400/10 to-red-500/10 rounded-full blur-xl" />
      </div>
    </ModernCard>
    </div>
  );
};

export default ModernTestimonial;