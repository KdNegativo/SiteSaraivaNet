import { Phone, Mail, MapPin, Clock, Wifi, Tv, Music, Headphones, Smartphone, Zap, Users, Heart, Star, Shield, Award, CheckCircle, Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import RealMap from "@/components/RealMap";
import StatsCounter from "@/components/StatsCounter";
import TestimonialCard from "@/components/TestimonialCard";
import ThemeToggle from "@/components/ThemeToggle";
import MobileNavigation from "@/components/MobileNavigation";
import AnimatedSection from "@/components/AnimatedSection";
import ChatBot from "@/components/ChatBot";
import TouchButton from "@/components/TouchButton";
import MobilePlansCarousel from "@/components/MobilePlansCarousel";
import ResponsiveImage from "@/components/ResponsiveImage";
import HeroCarousel from "@/components/HeroCarousel";
import { useParallax } from "@/hooks/useParallax";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { Link } from "react-router-dom";
import saraivaLogo from "@/assets/saraiva-logo-official.png";

const Index = () => {
  const parallaxOffset = useParallax(0.5);
  const prefersReducedMotion = useReducedMotion();
  
  const handleSmoothScroll = (targetId: string) => {
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const headerHeight = 80;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerHeight;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: prefersReducedMotion ? 'auto' : 'smooth'
      });
    }
  };

  const handleWhatsAppClick = () => {
    const phoneNumber = "5589994395789";
    const message = "Olá! Gostaria de contratar o plano de internet + SaraivaTV.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handlePhoneClick = () => {
    window.open('tel:+5589994395789', '_self');
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Fundo Dinâmico Vibrante */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div 
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(45deg, #FF4500 0%, #DC143C 25%, #8B008B 50%, #FF1493 75%, #FF4500 100%)',
            backgroundSize: '400% 400%',
            animation: 'gradient-flow 8s ease-in-out infinite'
          }}
        />
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute inset-0">
          <div 
            className="absolute top-20 right-1/4 w-8 h-8 bg-white/80 rounded-full"
            style={{
              boxShadow: '0 0 30px #FF4500',
              animation: 'particle-float 10s ease-in-out infinite'
            }}
          />
          <div 
            className="absolute top-1/2 left-1/4 w-6 h-6 bg-white/70 rounded-full"
            style={{
              boxShadow: '0 0 25px #8B008B',
              animation: 'particle-float 12s ease-in-out infinite',
              animationDelay: '3s'
            }}
          />
          <div 
            className="absolute bottom-1/3 right-1/3 w-5 h-5 bg-white/60 rounded-full"
            style={{
              boxShadow: '0 0 20px #FF1493',
              animation: 'particle-float 14s ease-in-out infinite',
              animationDelay: '6s'
            }}
          />
        </div>
        <div className="absolute inset-0">
          <div 
            className="absolute top-1/4 left-0 w-full h-1 opacity-60"
            style={{
              background: 'linear-gradient(90deg, transparent 0%, #FF4500 20%, #DC143C 50%, #FF1493 80%, transparent 100%)',
              boxShadow: '0 0 10px #FF4500',
              animation: 'data-flow 8s linear infinite'
            }}
          />
          <div 
            className="absolute top-3/4 left-0 w-full h-0.5 opacity-40"
            style={{
              background: 'linear-gradient(90deg, transparent 0%, #8B008B 30%, #FF1493 70%, transparent 100%)',
              boxShadow: '0 0 8px #8B008B',
              animation: 'data-flow 12s linear infinite reverse'
            }}
          />
        </div>
      </div>

      <ChatBot />
      
      {/* Header */}
      <header style={{background: 'linear-gradient(135deg, #FF6600 0%, #FF2E00 100%)', borderBottomColor: '#ff2200'}} className="fixed top-0 left-0 right-0 shadow-xl px-4 py-2 border-b-4 z-50">
        {/* Mobile Layout */}
        <div className="md:hidden">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="flex items-center justify-center">
                <img src={saraivaLogo} alt="SaraivaNet Logo" className="object-contain" style={{width: '55px', height: '55px', filter: 'drop-shadow(0 0 2px rgba(255,255,255,0.9)) drop-shadow(0 0 4px rgba(255,255,255,0.5))'}} />
              </div>
            </div>
            <MobileNavigation onItemClick={handleSmoothScroll} />
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden md:flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="flex items-center justify-center">
              <img src={saraivaLogo} alt="SaraivaNet Logo" className="object-contain" style={{width: '45px', height: '45px', filter: 'drop-shadow(0 0 2px rgba(255,255,255,0.9)) drop-shadow(0 0 4px rgba(255,255,255,0.5))'}} />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-white text-shadow-elegant">SaraivaNet</h1>
              <p className="text-white/90 text-xs">Internet + TV de qualidade</p>
            </div>
          </div>

          <nav className="flex items-center space-x-6">
            <button onClick={() => handleSmoothScroll('planos')} className="text-white hover:text-yellow-200 font-medium transition-colors">Planos</button>
            <button onClick={() => handleSmoothScroll('cobertura')} className="text-white hover:text-yellow-200 font-medium transition-colors">Cobertura</button>
            <button onClick={() => handleSmoothScroll('sobre')} className="text-white hover:text-yellow-200 font-medium transition-colors">Sobre</button>
            <button onClick={() => handleSmoothScroll('contato')} className="text-white hover:text-yellow-200 font-medium transition-colors">Contato</button>
          </nav>

          <div className="flex items-center space-x-3">
            <Button onClick={handlePhoneClick} variant="outline" size="sm" className="text-white border-white hover:bg-white hover:text-primary font-semibold">
              <Phone className="w-4 h-4 mr-2" />
              (89) 99439-5789
            </Button>
            <Button onClick={handleWhatsAppClick} className="bg-green-600 hover:bg-green-700 text-white font-semibold">
              WhatsApp
            </Button>
          </div>
        </div>
      </header>

      
      
      <footer className="relative z-10 bg-gray-900 text-white pt-16 pb-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <img src={saraivaLogo} alt="SaraivaNet Logo" className="object-contain" style={{width: '40px', height: '40px', filter: 'drop-shadow(0 0 1px rgba(255,255,255,0.7))'}} />
                <h3 className="text-xl font-bold">SaraivaNet</h3>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Internet de alta velocidade e TV por assinatura com qualidade premium para toda a família.
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Serviços</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Internet Fibra Óptica</li>
                <li>TV por Assinatura</li>
                <li>Combo Internet + TV</li>
                <li>Suporte Técnico</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Contato</h4>
              <div className="space-y-3 text-gray-400">
                <div className="flex items-center space-x-3">
                  <Phone className="w-4 h-4 text-orange-500" />
                  <span>(89) 99439-5789</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-4 h-4 text-orange-500" />
                  <span>contato@saraivanet.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-4 h-4 text-orange-500" />
                  <span>Teresina, Piauí</span>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Horário de Atendimento</h4>
              <div className="space-y-2 text-gray-400">
                <div className="flex items-center space-x-2">
                  <Clock className="w-4 h-4 text-orange-500" />
                  <span>Segunda a Sábado</span>
                </div>
                <p className="ml-6">8:00 às 18:00</p>
                <div className="flex items-center space-x-2">
                  <Clock className="w-4 h-4 text-orange-500" />
                  <span>Domingo</span>
                </div>
                <p className="ml-6">8:00 às 12:00</p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-12 pt-8">
            <div className="flex justify-center mb-6">
              <div className="flex items-center justify-center">
                <img src={saraivaLogo} alt="SaraivaNet Logo" className="object-contain" style={{width: '35px', height: '35px', filter: 'drop-shadow(0 0 1px rgba(255,255,255,0.7))'}} />
              </div>
            </div>
            <p className="text-gray-400 text-lg text-center">
              © 2025 SaraivaNet. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
