
import RealMap from "@/components/RealMap";

const MapSection = () => {
  return (
    <section id="contato" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Nossa Localização
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Estamos localizados no coração de Eliseu Martins, prontos para atender você.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <RealMap />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 max-w-4xl mx-auto">
          <div className="text-center">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Endereço</h3>
            <p className="text-gray-600">Centro de Eliseu Martins - PI</p>
          </div>
          
          <div className="text-center">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Telefone</h3>
            <p className="text-gray-600">(86) 99999-9999</p>
          </div>
          
          <div className="text-center">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Horário</h3>
            <p className="text-gray-600">Segunda a Sexta: 8h às 18h</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MapSection;
