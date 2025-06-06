
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Phone, MessageCircle, MapPin, Users, Building, Zap, Shield, Heart, Star, ChevronDown, Wifi, Clock, ThumbsUp } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import ParallaxSection from "@/components/ParallaxSection";
import { TestimonialCard } from "@/components/TestimonialCard";
import { StatsCounter } from "@/components/StatsCounter";
import { RealMap } from "@/components/RealMap";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";

const Index = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-accent/5">
      <FloatingWhatsApp />
      
      {/* Hero Section with Enhanced Gradient */}
      <ParallaxSection className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary/10 via-background to-secondary/20">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent"></div>
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <AnimatedSection animation="fade-up" delay={200}>
            <div className="inline-flex items-center px-4 py-2 bg-primary/10 border border-primary/20 rounded-full mb-8 backdrop-blur-sm">
              <Zap className="w-4 h-4 text-primary mr-2 animate-pulse" />
              <span className="text-sm font-medium text-primary">Internet de Alta Velocidade</span>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="fade-up" delay={400}>
            <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-primary via-foreground to-primary bg-clip-text text-transparent leading-tight">
              ConnectNet
            </h1>
          </AnimatedSection>

          <AnimatedSection animation="fade-up" delay={600}>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              Conectando você ao futuro digital com internet fibra óptica ultra-rápida
            </p>
          </AnimatedSection>

          <AnimatedSection animation="scale-in" delay={800}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button size="lg" className="group relative overflow-hidden bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary text-primary-foreground px-8 py-6 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <span className="relative z-10 flex items-center">
                  <Phone className="w-5 h-5 mr-2 group-hover:animate-bounce" />
                  Contratar Agora
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Button>
              
              <Button variant="outline" size="lg" className="group border-2 border-primary/30 hover:border-primary bg-background/50 backdrop-blur-sm px-8 py-6 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <MessageCircle className="w-5 h-5 mr-2 group-hover:animate-pulse" />
                Falar no WhatsApp
              </Button>
            </div>
          </AnimatedSection>

          {/* Floating Stats */}
          <AnimatedSection animation="fade-up" delay={1000}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-6 text-center hover:bg-card/70 transition-all duration-300 hover:scale-105 hover:shadow-lg">
                <div className="text-3xl font-bold text-primary mb-2">
                  <StatsCounter end={500} duration={2000} />+
                </div>
                <p className="text-sm text-muted-foreground">Clientes Satisfeitos</p>
              </div>
              
              <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-6 text-center hover:bg-card/70 transition-all duration-300 hover:scale-105 hover:shadow-lg">
                <div className="text-3xl font-bold text-primary mb-2">99.9%</div>
                <p className="text-sm text-muted-foreground">Uptime</p>
              </div>
              
              <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-6 text-center hover:bg-card/70 transition-all duration-300 hover:scale-105 hover:shadow-lg">
                <div className="text-3xl font-bold text-primary mb-2">
                  <StatsCounter end={5} duration={2000} />
                </div>
                <p className="text-sm text-muted-foreground">Cidades Atendidas</p>
              </div>
              
              <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-6 text-center hover:bg-card/70 transition-all duration-300 hover:scale-105 hover:shadow-lg">
                <div className="text-3xl font-bold text-primary mb-2">24/7</div>
                <p className="text-sm text-muted-foreground">Suporte</p>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="bounce-in" delay={1200}>
            <ChevronDown className="w-8 h-8 text-primary mx-auto mt-16 animate-bounce" />
          </AnimatedSection>
        </div>
      </ParallaxSection>

      {/* Plans Section with Enhanced Design */}
      <section className="py-24 bg-gradient-to-b from-background to-secondary/10">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="fade-up">
            <div className="text-center mb-16">
              <Badge variant="outline" className="mb-4 px-4 py-2 text-sm border-primary/30 bg-primary/5">
                Planos Disponíveis
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
                Escolha o Plano Ideal
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Planos flexíveis para todas as necessidades, com a melhor relação custo-benefício
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <AnimatedSection animation="slide-left" delay={200}>
              <Card className="group relative overflow-hidden border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-2xl hover:scale-105 bg-gradient-to-br from-card to-card/50">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <CardHeader className="relative z-10">
                  <div className="flex items-center justify-between mb-4">
                    <Badge variant="outline" className="bg-background/50">Residencial</Badge>
                    <Wifi className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-2xl">Plano Básico</CardTitle>
                  <CardDescription>Ideal para uso doméstico</CardDescription>
                </CardHeader>
                <CardContent className="relative z-10">
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-primary">100</span>
                    <span className="text-xl text-muted-foreground ml-1">Mbps</span>
                  </div>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-center text-sm">
                      <ThumbsUp className="w-4 h-4 text-primary mr-2" />
                      Wi-Fi grátis
                    </li>
                    <li className="flex items-center text-sm">
                      <Shield className="w-4 h-4 text-primary mr-2" />
                      Suporte 24/7
                    </li>
                    <li className="flex items-center text-sm">
                      <Clock className="w-4 h-4 text-primary mr-2" />
                      Instalação rápida
                    </li>
                  </ul>
                  <Button className="w-full group bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary text-primary-foreground rounded-xl transition-all duration-300">
                    <span className="group-hover:scale-105 transition-transform duration-200">Contratar</span>
                  </Button>
                </CardContent>
              </Card>
            </AnimatedSection>

            <AnimatedSection animation="scale-in" delay={400}>
              <Card className="group relative overflow-hidden border-2 border-primary hover:border-primary/70 transition-all duration-300 hover:shadow-2xl hover:scale-105 bg-gradient-to-br from-primary/5 via-card to-card/50">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground px-4 py-1 rounded-full shadow-lg">
                    Mais Popular
                  </Badge>
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-50"></div>
                <CardHeader className="relative z-10 pt-8">
                  <div className="flex items-center justify-between mb-4">
                    <Badge variant="outline" className="bg-background/50">Família</Badge>
                    <Wifi className="w-6 h-6 text-primary animate-pulse" />
                  </div>
                  <CardTitle className="text-2xl">Plano Premium</CardTitle>
                  <CardDescription>Perfeito para famílias</CardDescription>
                </CardHeader>
                <CardContent className="relative z-10">
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-primary">300</span>
                    <span className="text-xl text-muted-foreground ml-1">Mbps</span>
                  </div>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-center text-sm">
                      <ThumbsUp className="w-4 h-4 text-primary mr-2" />
                      Wi-Fi grátis
                    </li>
                    <li className="flex items-center text-sm">
                      <Shield className="w-4 h-4 text-primary mr-2" />
                      Suporte prioritário
                    </li>
                    <li className="flex items-center text-sm">
                      <Star className="w-4 h-4 text-primary mr-2" />
                      Streaming 4K
                    </li>
                  </ul>
                  <Button className="w-full group bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary text-primary-foreground rounded-xl transition-all duration-300 shadow-lg">
                    <span className="group-hover:scale-105 transition-transform duration-200">Contratar</span>
                  </Button>
                </CardContent>
              </Card>
            </AnimatedSection>

            <AnimatedSection animation="slide-right" delay={600}>
              <Card className="group relative overflow-hidden border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-2xl hover:scale-105 bg-gradient-to-br from-card to-card/50">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <CardHeader className="relative z-10">
                  <div className="flex items-center justify-between mb-4">
                    <Badge variant="outline" className="bg-background/50">Empresarial</Badge>
                    <Building className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-2xl">Plano Empresarial</CardTitle>
                  <CardDescription>Para empresas e escritórios</CardDescription>
                </CardHeader>
                <CardContent className="relative z-10">
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-primary">500</span>
                    <span className="text-xl text-muted-foreground ml-1">Mbps</span>
                  </div>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-center text-sm">
                      <Shield className="w-4 h-4 text-primary mr-2" />
                      Suporte dedicado
                    </li>
                    <li className="flex items-center text-sm">
                      <Star className="w-4 h-4 text-primary mr-2" />
                      IP fixo
                    </li>
                    <li className="flex items-center text-sm">
                      <Building className="w-4 h-4 text-primary mr-2" />
                      SLA garantido
                    </li>
                  </ul>
                  <Button className="w-full group bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary text-primary-foreground rounded-xl transition-all duration-300">
                    <span className="group-hover:scale-105 transition-transform duration-200">Contratar</span>
                  </Button>
                </CardContent>
              </Card>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Features Section with Enhanced Visuals */}
      <section className="py-24 bg-gradient-to-b from-secondary/10 to-background">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="fade-up">
            <div className="text-center mb-16">
              <Badge variant="outline" className="mb-4 px-4 py-2 text-sm border-primary/30 bg-primary/5">
                Nossos Diferenciais
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
                Por que escolher a ConnectNet?
              </h2>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatedSection animation="fade-up" delay={200}>
              <Card className="group h-full bg-gradient-to-br from-card to-card/50 border-2 hover:border-primary/30 transition-all duration-300 hover:shadow-xl hover:scale-105">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Zap className="w-8 h-8 text-primary group-hover:animate-pulse" />
                  </div>
                  <CardTitle className="text-xl">Ultra Velocidade</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground">
                    Tecnologia de fibra óptica com velocidades de até 1Gbps para uma experiência sem interrupções.
                  </p>
                </CardContent>
              </Card>
            </AnimatedSection>

            <AnimatedSection animation="fade-up" delay={400}>
              <Card className="group h-full bg-gradient-to-br from-card to-card/50 border-2 hover:border-primary/30 transition-all duration-300 hover:shadow-xl hover:scale-105">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Shield className="w-8 h-8 text-primary group-hover:animate-pulse" />
                  </div>
                  <CardTitle className="text-xl">Conexão Estável</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground">
                    99.9% de uptime garantido com nossa infraestrutura robusta e monitoramento 24/7.
                  </p>
                </CardContent>
              </Card>
            </AnimatedSection>

            <AnimatedSection animation="fade-up" delay={600}>
              <Card className="group h-full bg-gradient-to-br from-card to-card/50 border-2 hover:border-primary/30 transition-all duration-300 hover:shadow-xl hover:scale-105">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Heart className="w-8 h-8 text-primary group-hover:animate-pulse" />
                  </div>
                  <CardTitle className="text-xl">Suporte Humanizado</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground">
                    Equipe especializada disponível 24/7 para resolver qualquer problema rapidamente.
                  </p>
                </CardContent>
              </Card>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Coverage Map Section */}
      <section className="py-24 bg-gradient-to-b from-background to-secondary/10">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="fade-up">
            <div className="text-center mb-16">
              <Badge variant="outline" className="mb-4 px-4 py-2 text-sm border-primary/30 bg-primary/5">
                Área de Cobertura
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
                Onde Estamos
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Levamos internet de qualidade para várias cidades da região
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="scale-in" delay={400}>
            <Card className="max-w-4xl mx-auto overflow-hidden border-2 hover:border-primary/30 transition-all duration-300 hover:shadow-2xl bg-gradient-to-br from-card to-card/50">
              <CardContent className="p-0">
                <div className="h-96 w-full bg-gradient-to-br from-primary/5 to-secondary/5">
                  <RealMap />
                </div>
              </CardContent>
            </Card>
          </AnimatedSection>

          <AnimatedSection animation="fade-up" delay={600}>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mt-12 max-w-4xl mx-auto">
              {['Eliseu Martins', 'Colônia do Gurguéia', 'Manoel Emídio', 'Canavieira', 'Jerumenha'].map((city, index) => (
                <div key={city} className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary/80 rounded-full flex items-center justify-center mx-auto mb-2 shadow-lg hover:scale-110 transition-transform duration-300">
                    <MapPin className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <p className="text-sm font-medium">{city}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-gradient-to-b from-secondary/10 to-background">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="fade-up">
            <div className="text-center mb-16">
              <Badge variant="outline" className="mb-4 px-4 py-2 text-sm border-primary/30 bg-primary/5">
                Depoimentos
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
                O que nossos clientes dizem
              </h2>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <AnimatedSection animation="slide-left" delay={200}>
              <TestimonialCard 
                name="Maria Silva"
                age="34"
                location="Eliseu Martins"
                testimonial="A internet da ConnectNet mudou minha vida! Agora posso trabalhar de casa sem preocupações."
                initials="MS"
              />
            </AnimatedSection>

            <AnimatedSection animation="scale-in" delay={400}>
              <TestimonialCard 
                name="João Santos"
                age="28"
                location="Colônia do Gurguéia"
                testimonial="Velocidade incrível e suporte sempre disponível. Recomendo para todos!"
                initials="JS"
              />
            </AnimatedSection>

            <AnimatedSection animation="slide-right" delay={600}>
              <TestimonialCard 
                name="Ana Costa"
                age="42"
                location="Manoel Emídio"
                testimonial="Finalmente uma internet confiável na nossa região. Estou muito satisfeita!"
                initials="AC"
              />
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-primary/10 via-background to-secondary/20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <AnimatedSection animation="fade-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
              Pronto para se conectar?
            </h2>
            <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
              Entre em contato conosco e descubra como podemos melhorar sua conexão com a internet
            </p>
          </AnimatedSection>

          <AnimatedSection animation="scale-in" delay={400}>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button size="lg" className="group bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary text-primary-foreground px-12 py-6 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <Phone className="w-5 h-5 mr-2 group-hover:animate-bounce" />
                <span className="relative z-10">Ligar Agora</span>
              </Button>
              
              <Button variant="outline" size="lg" className="group border-2 border-primary/30 hover:border-primary bg-background/50 backdrop-blur-sm px-12 py-6 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <MessageCircle className="w-5 h-5 mr-2 group-hover:animate-pulse" />
                WhatsApp
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-foreground to-foreground/90 text-background py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-background to-background/80 bg-clip-text text-transparent">ConnectNet</h3>
              <p className="text-background/80 mb-4">
                Conectando você ao futuro digital com tecnologia de ponta.
              </p>
              <div className="flex space-x-3">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="w-10 h-10 bg-background/10 hover:bg-background/20 rounded-full flex items-center justify-center transition-colors duration-300 cursor-pointer">
                    <Users className="w-5 h-5" />
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Planos</h4>
              <ul className="space-y-2 text-background/80">
                <li className="hover:text-background transition-colors duration-200 cursor-pointer">Residencial</li>
                <li className="hover:text-background transition-colors duration-200 cursor-pointer">Empresarial</li>
                <li className="hover:text-background transition-colors duration-200 cursor-pointer">Premium</li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Suporte</h4>
              <ul className="space-y-2 text-background/80">
                <li className="hover:text-background transition-colors duration-200 cursor-pointer">Central de Ajuda</li>
                <li className="hover:text-background transition-colors duration-200 cursor-pointer">WhatsApp</li>
                <li className="hover:text-background transition-colors duration-200 cursor-pointer">Telefone</li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Contato</h4>
              <ul className="space-y-2 text-background/80">
                <li className="flex items-center">
                  <Phone className="w-4 h-4 mr-2" />
                  (89) 9999-9999
                </li>
                <li className="flex items-center">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  WhatsApp
                </li>
                <li className="flex items-center">
                  <MapPin className="w-4 h-4 mr-2" />
                  Eliseu Martins, PI
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-background/20 mt-12 pt-8 text-center text-background/60">
            <p>&copy; 2024 ConnectNet. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
