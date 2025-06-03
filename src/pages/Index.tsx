import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from 'react-router-dom';
import RealMap from '../components/RealMap';
import { Sparkles } from 'lucide-react';
import { cn } from "@/lib/utils";
import { useState, useEffect } from 'react';
import { useTheme } from "next-themes";

interface StatsCounterProps {
  end: number;
  label: string;
  icon: string;
  suffix: string;
}

const StatsCounter: React.FC<StatsCounterProps> = ({ end, label, icon, suffix }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = Math.ceil(end / 200); // Ajuste a sensibilidade da animação
    const timer = setInterval(() => {
      start += increment;
      if (start > end) {
        clearInterval(timer);
        start = end;
      }
      setCount(start);
    }, 1); // Ajuste o intervalo para controlar a velocidade

    return () => clearInterval(timer);
  }, [end]);

  return (
    <div>
      <div className="text-5xl font-bold">{icon} {count}{suffix}</div>
      <div className="text-lg text-gray-300">{label}</div>
    </div>
  );
};

interface ParallaxSectionProps {
  children: React.ReactNode;
  className?: string;
}

const ParallaxSection: React.FC<ParallaxSectionProps> = ({ children, className }) => {
  return (
    <div className={cn("bg-fixed bg-cover bg-center", className)} style={{ backgroundImage: 'url(/images/bg-fiber.webp)' }}>
      {children}
    </div>
  );
};

const Index: React.FC = () => {
  const { theme } = useTheme();
  const isDarkMode = theme === "dark";

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-50">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-r from-blue-400 to-purple-500 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-5xl font-bold mb-6">
                Conecte-se ao Futuro com SaraivaNet <Sparkles className="inline-block h-8 w-8 ml-2 sparkle-icon" />
              </h1>
              <p className="text-xl mb-8">
                Internet de fibra óptica de ultravelocidade para sua casa ou empresa.
                A melhor conexão, com a melhor experiência e o melhor suporte.
              </p>
              <Button asChild size="lg" className="bg-green-500 hover:bg-green-600">
                <Link to="https://wa.me/5586999999999?text=Olá! Gostaria de saber mais sobre os planos da SaraivaNet.">
                  Fale Conosco <ArrowRight className="ml-2" />
                </Link>
              </Button>
            </div>
            <img
              src="/images/hero-fiber.webp"
              alt="Fibra Óptica"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Seção de Estatísticas */}
      <ParallaxSection className="py-20 bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <StatsCounter
              end={5}
              label="Cidades Atendidas"
              icon="🏢"
              suffix=""
            />
            <StatsCounter
              end={1000}
              label="Clientes Satisfeitos"
              icon="😊"
              suffix="+"
            />
            <StatsCounter
              end={99}
              label="Uptime Garantido"
              icon="⚡"
              suffix="%"
            />
          </div>
        </div>
      </ParallaxSection>

      {/* Mapa de Cobertura */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <RealMap />
        </div>
      </section>

      {/* Seção de Testemunhos (Opcional) */}
      <section className="py-20 bg-gray-100 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            O que nossos clientes dizem
          </h2>
          {/* Adicione aqui os depoimentos dos clientes */}
          <p className="text-center text-gray-600 dark:text-gray-400">
            "A SaraivaNet mudou a forma como trabalho e me divirto em casa.
            A velocidade da internet é incrível!" - Cliente Satisfeito
          </p>
        </div>
      </section>

      {/* Seção de Contato */}
      <section className="py-24 bg-gradient-to-r from-purple-500 to-blue-600 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-4xl font-bold mb-8">
              Experimente a melhor internet agora!
            </h2>
            <p className="text-xl mb-12">
              Entre em contato conosco e descubra como podemos melhorar sua
              conexão.
            </p>
            <Button asChild size="lg" className="bg-green-500 hover:bg-green-600">
              <Link to="https://wa.me/5586999999999?text=Olá! Gostaria de saber mais sobre os planos da SaraivaNet.">
                Fale Conosco <ArrowRight className="ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-gray-200 dark:bg-gray-700 text-center text-gray-600 dark:text-gray-300">
        <p>
          © {new Date().getFullYear()} SaraivaNet. Todos os direitos reservados.
        </p>
      </footer>
    </div>
  );
};

export default Index;
