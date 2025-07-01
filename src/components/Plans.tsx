
const Plans = () => {
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
          Nossos Planos
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white dark:bg-gray-900 p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Básico</h3>
            <p className="text-3xl font-bold text-blue-600 mb-6">R$ 49,90</p>
            <ul className="text-gray-600 dark:text-gray-300 space-y-2">
              <li>• 50 Mega</li>
              <li>• Wi-Fi grátis</li>
              <li>• Suporte técnico</li>
            </ul>
          </div>
          <div className="bg-white dark:bg-gray-900 p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Premium</h3>
            <p className="text-3xl font-bold text-blue-600 mb-6">R$ 79,90</p>
            <ul className="text-gray-600 dark:text-gray-300 space-y-2">
              <li>• 100 Mega</li>
              <li>• Wi-Fi grátis</li>
              <li>• Suporte 24/7</li>
            </ul>
          </div>
          <div className="bg-white dark:bg-gray-900 p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Ultra</h3>
            <p className="text-3xl font-bold text-blue-600 mb-6">R$ 99,90</p>
            <ul className="text-gray-600 dark:text-gray-300 space-y-2">
              <li>• 200 Mega</li>
              <li>• Wi-Fi grátis</li>
              <li>• Suporte prioritário</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Plans;
