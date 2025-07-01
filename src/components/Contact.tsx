
const Contact = () => {
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
          Entre em Contato
        </h2>
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
            Ficou interessado? Entre em contato conosco!
          </p>
          <div className="space-y-4">
            <p className="text-gray-900 dark:text-white">
              <strong>Telefone:</strong> (89) 99439-5789
            </p>
            <p className="text-gray-900 dark:text-white">
              <strong>Email:</strong> contato@saraivanet.com.br
            </p>
            <p className="text-gray-900 dark:text-white">
              <strong>Endereço:</strong> Eliseu Martins, PI
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
