import Head from 'next/head';
import { TypeAnimation } from 'react-type-animation';
import { Sparkles } from 'lucide-react';
import Link from 'next/link';
import FloatingActionButton from "@/components/FloatingActionButton";
import ChatBot from "@/components/ChatBot";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-900 via-red-800 to-red-900">
      <Head>
        <title>SaraivaNet - Internet que conecta você ao mundo!</title>
        <meta name="description" content="A melhor internet da região, com ultravelocidade e стабильность garantida. Planos especiais para você e sua família." />
        <meta property="og:title" content="SaraivaNet - Sua conexão com o futuro!" />
        <meta property="og:description" content="Internet de ultravelocidade para você navegar sem limites. Confira nossos planos!" />
        <meta property="og:image" content="/images/logo-saraivanet.png" />
        <meta property="og:url" content="https://www.saraivanet.com.br" />
        <meta name="keywords" content="internet, ultravelocidade, planos, SaraivaNet, melhor internet, стабильность, fibra óptica" />
        <meta name="author" content="SaraivaNet" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="relative py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-red-900 via-red-800 to-red-900 opacity-30 rounded-3xl blur-lg"></div>
          <img src="/images/logo-saraivanet.png" alt="SaraivaNet Logo" className="mx-auto mb-8 h-24 md:h-32 relative z-10" />
          <h1 className="text-4xl md:text-5xl font-extrabold text-white relative z-10">
            SaraivaNet - Internet que conecta você ao mundo!
          </h1>
          <p className="mt-4 text-lg text-red-100 relative z-10">
            A melhor internet da região, com ultravelocidade e стабильность garantida.
          </p>
          <div className="mt-8 relative z-10">
            <TypeAnimation
              sequence={[
                'Ultravelocidade para você navegar sem limites!',
                1000,
                'A melhor experiência em jogos online.',
                1000,
                'Filmes e séries em 4K sem interrupções.',
                1000,
                'Planos especiais para você e sua família.',
                1000,
              ]}
              wrapper="span"
              cursor={true}
              repeat={Infinity}
              className="text-white text-xl md:text-2xl font-semibold"
            />
          </div>
          <Link href="/#planos" className="mt-10 inline-block bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-full shadow-lg transition duration-300 relative z-10">
            Confira nossos planos
          </Link>
        </div>
      </header>

      <section id="sobre" className="py-16 bg-gray-50 dark:bg-gray-950">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="md:order-2">
              <img src="/images/internet-fibra.webp" alt="Internet Fibra Óptica" className="rounded-3xl shadow-2xl" />
            </div>
            <div className="md:order-1">
              <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white mb-4">
                <Sparkles className="inline-block mr-2 text-red-500" />
                Por que escolher a SaraivaNet?
              </h2>
              <p className="text-gray-700 dark:text-gray-300 text-lg mb-6">
                Somos a melhor opção de internet da região, oferecendo ultravelocidade, стабильность e atendimento de qualidade.
                Com a SaraivaNet, você tem a garantia de uma conexão rápida e segura para todas as suas necessidades.
              </p>
              <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 text-lg">
                <li>Ultravelocidade de conexão</li>
                <li>Estabilidade garantida</li>
                <li>Atendimento personalizado</li>
                <li>Tecnologia de ponta em fibra óptica</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="planos" className="py-16 bg-red-100 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-extrabold text-center text-gray-900 dark:text-white mb-8">
            Nossos Planos
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Plano 1 */}
            <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl p-6 hover:scale-105 transition duration-300">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Plano Básico</h3>
              <p className="text-gray-700 dark:text-gray-300 text-lg">Ideal para quem precisa de uma conexão rápida para o dia a dia.</p>
              <div className="mt-4">
                <span className="text-4xl font-extrabold text-red-600 dark:text-red-500">R$ 79,90</span>
                <span className="text-gray-500 dark:text-gray-400">/mês</span>
              </div>
              <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 text-sm mt-4">
                <li>500 Mega de download</li>
                <li>250 Mega de upload</li>
                <li>Wi-fi incluso</li>
                <li>Suporte 24/7</li>
              </ul>
              <Link href="https://wa.me/5589994395789?text=Olá!%20Gostaria%20de%20assinar%20o%20plano%20básico." className="mt-6 inline-block bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-6 rounded-full transition duration-300">
                Assinar agora
              </Link>
            </div>

            {/* Plano 2 */}
            <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl p-6 hover:scale-105 transition duration-300">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Plano Intermediário</h3>
              <p className="text-gray-700 dark:text-gray-300 text-lg">Perfeito para quem trabalha em casa e precisa de mais velocidade.</p>
              <div className="mt-4">
                <span className="text-4xl font-extrabold text-red-600 dark:text-red-500">R$ 99,90</span>
                <span className="text-gray-500 dark:text-gray-400">/mês</span>
              </div>
              <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 text-sm mt-4">
                <li>700 Mega de download</li>
                <li>350 Mega de upload</li>
                <li>Wi-fi incluso</li>
                <li>Suporte 24/7</li>
                <li>Acesso ao SaraivaTV</li>
              </ul>
              <Link href="https://wa.me/5589994395789?text=Olá!%20Gostaria%20de%20assinar%20o%20plano%20intermediário." className="mt-6 inline-block bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-6 rounded-full transition duration-300">
                Assinar agora
              </Link>
            </div>

            {/* Plano 3 */}
            <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl p-6 hover:scale-105 transition duration-300">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Plano Premium</h3>
              <p className="text-gray-700 dark:text-gray-300 text-lg">A melhor experiência para quem exige o máximo de velocidade e стабильность.</p>
              <div className="mt-4">
                <span className="text-4xl font-extrabold text-red-600 dark:text-red-500">R$ 129,90</span>
                <span className="text-gray-500 dark:text-gray-400">/mês</span>
              </div>
              <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 text-sm mt-4">
                <li>1 Giga de download</li>
                <li>500 Mega de upload</li>
                <li>Wi-fi incluso</li>
                <li>Suporte 24/7 prioritário</li>
                <li>Acesso ao SaraivaTV</li>
                <li>IP Fixo</li>
              </ul>
              <Link href="https://wa.me/5589994395789?text=Olá!%20Gostaria%20de%20assinar%20o%20plano%20premium." className="mt-6 inline-block bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-6 rounded-full transition duration-300">
                Assinar agora
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section id="contato" className="py-16 bg-gray-50 dark:bg-gray-950">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-extrabold text-center text-gray-900 dark:text-white mb-8">
            Entre em contato conosco
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <p className="text-gray-700 dark:text-gray-300 text-lg mb-4">
                Estamos prontos para atender você e tirar todas as suas dúvidas. Entre em contato conosco através dos nossos canais de atendimento:
              </p>
              <ul className="text-gray-700 dark:text-gray-300 text-lg">
                <li className="mb-2">
                  <a href="https://wa.me/5589994395789" target="_blank" rel="noopener noreferrer" className="flex items-center hover:text-red-600 dark:hover:text-red-400 transition duration-300">
                    <img src="/images/whatsapp-icon.svg" alt="WhatsApp" className="mr-2 h-6 w-6" />
                    WhatsApp: (89) 99439-5789
                  </a>
                </li>
                <li className="mb-2">
                  <a href="tel:+558935751055" className="flex items-center hover:text-red-600 dark:hover:text-red-400 transition duration-300">
                    <img src="/images/phone-icon.svg" alt="Telefone" className="mr-2 h-6 w-6" />
                    Telefone: (89) 3575-1055
                  </a>
                </li>
                <li>
                  <a href="mailto:contato@saraivanet.com.br" className="flex items-center hover:text-red-600 dark:hover:text-red-400 transition duration-300">
                    <img src="/images/email-icon.svg" alt="Email" className="mr-2 h-6 w-6" />
                    Email: contato@saraivanet.com.br
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <img src="/images/atendimento-cliente.webp" alt="Atendimento ao Cliente" className="rounded-3xl shadow-2xl" />
            </div>
          </div>
        </div>
      </section>

      <footer className="py-8 bg-red-800 text-white text-center">
        <p>
          &copy; 2024 SaraivaNet. Todos os direitos reservados.
        </p>
      </footer>
      
      {/* Replace the individual FloatingWhatsApp and ChatBot floating buttons with the combined one */}
      <FloatingActionButton />
      <ChatBot />
    </div>
  );
};

export default Index;
