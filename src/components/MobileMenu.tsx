
import { useState } from 'react';
import { Menu, X, Home, Users, Wifi, MapPin, Phone } from 'lucide-react';
import { Button } from './ui/button';

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { icon: Home, label: 'Início', href: '#inicio' },
    { icon: Wifi, label: 'Planos', href: '#planos' },
    { icon: Users, label: 'Sobre', href: '#sobre' },
    { icon: MapPin, label: 'Cobertura', href: '#cobertura' },
    { icon: Phone, label: 'Contato', href: '#contato' },
  ];

  return (
    <div className="md:hidden">
      <Button
        variant="ghost"
        size="icon"
        onClick={() => setIsOpen(!isOpen)}
        className="text-white hover:bg-white/10"
      >
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </Button>

      {isOpen && (
        <div className="absolute top-full left-0 right-0 bg-blue-900/95 backdrop-blur-sm border-t border-white/10 animate-fade-in">
          <nav className="container mx-auto px-4 py-4">
            <ul className="space-y-2">
              {menuItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="flex items-center space-x-3 text-white hover:text-orange-300 py-3 px-2 rounded-lg hover:bg-white/5 transition-all duration-200"
                  >
                    <item.icon className="w-5 h-5" />
                    <span className="font-medium">{item.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </div>
  );
};

export default MobileMenu;
