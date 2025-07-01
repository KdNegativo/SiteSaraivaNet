
const Testimonials = () => {
  return (
    <section className="py-16 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
          O que nossos clientes dizem
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              "Excelente serviço! Internet rápida e estável."
            </p>
            <p className="font-semibold text-gray-900 dark:text-white">- João Silva</p>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              "Atendimento muito bom e preços justos."
            </p>
            <p className="font-semibold text-gray-900 dark:text-white">- Maria Santos</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
