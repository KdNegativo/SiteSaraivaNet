
const Features = () => {
  return (
    <section className="py-16 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
          Nossos Recursos
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center p-6">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              Alta Velocidade
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Internet rápida e confiável
            </p>
          </div>
          <div className="text-center p-6">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              Suporte 24/7
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Atendimento sempre disponível
            </p>
          </div>
          <div className="text-center p-6">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              Preços Justos
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Planos que cabem no seu bolso
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
