
import React, { useState } from 'react';
import { MapPin, Wifi, Clock, Phone } from 'lucide-react';

interface City {
  name: string;
  lat: number;
  lng: number;
  status: 'active' | 'coming-soon';
  description: string;
}

const cities: City[] = [
  {
    name: 'Eliseu Martins',
    lat: -8.0969,
    lng: -44.0597,
    status: 'active',
    description: 'Internet fibra óptica 300MB + SaraivaTV'
  },
  {
    name: 'Colônia do Gurguéia',
    lat: -8.1833,
    lng: -43.7833,
    status: 'active',
    description: 'Internet fibra óptica disponível'
  },
  {
    name: 'Manoel Emídio',
    lat: -7.8667,
    lng: -44.2167,
    status: 'active',
    description: 'Cobertura completa de fibra óptica'
  },
  {
    name: 'Jerumenha',
    lat: -8.0667,
    lng: -43.8333,
    status: 'active',
    description: 'Internet de alta velocidade'
  },
  {
    name: 'Canto do Buriti',
    lat: -8.1167,
    lng: -42.9500,
    status: 'coming-soon',
    description: 'Expansão prevista para 2025'
  }
];

const RealMap: React.FC = () => {
  const [selectedCity, setSelectedCity] = useState<City | null>(null);

  const handleCityClick = (city: City) => {
    setSelectedCity(city);
  };

  const handleContact = (cityName: string, status: string) => {
    const message = status === 'active' 
      ? `Olá! Gostaria de saber mais sobre os planos de internet em ${cityName}`
      : `Olá! Gostaria de demonstrar interesse na chegada da internet em ${cityName}`;
    
    window.open(`https://wa.me/5586999999999?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div className="w-full">
      <div className="mb-4 text-center">
        <h3 className="text-2xl font-bold text-white mb-2">Mapa de Cobertura SaraivaNet</h3>
        <p className="text-blue-200">Veja onde nossa internet está disponível</p>
      </div>
      
      {/* Mapa Visual Simples */}
      <div className="relative bg-gradient-to-br from-blue-900 to-purple-900 rounded-2xl p-8 mb-6 min-h-[400px] shadow-2xl border border-blue-600">
        <div className="absolute inset-0 bg-black/20 rounded-2xl"></div>
        
        {/* Região Central */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full">
          <div className="text-center mb-8">
            <h4 className="text-xl font-bold text-white mb-2">Região do Sul do Piauí</h4>
            <p className="text-blue-200 text-sm">Clique nas cidades para ver detalhes</p>
          </div>
          
          {/* Grid de Cidades */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 w-full max-w-4xl">
            {cities.map((city, index) => (
              <div
                key={city.name}
                onClick={() => handleCityClick(city)}
                className={`
                  relative p-4 rounded-xl cursor-pointer transition-all duration-300 transform hover:scale-105
                  ${city.status === 'active' 
                    ? 'bg-green-500/20 border-2 border-green-400 hover:bg-green-500/30' 
                    : 'bg-orange-500/20 border-2 border-orange-400 hover:bg-orange-500/30'
                  }
                  ${selectedCity?.name === city.name ? 'ring-4 ring-white/50 scale-105' : ''}
                `}
              >
                <div className="flex items-center space-x-2 mb-2">
                  <div className={`w-3 h-3 rounded-full ${
                    city.status === 'active' ? 'bg-green-400 animate-pulse' : 'bg-orange-400 animate-pulse'
                  }`}></div>
                  <MapPin className="w-4 h-4 text-white" />
                </div>
                
                <h5 className="font-bold text-white text-sm mb-1">{city.name}</h5>
                <p className="text-xs text-blue-200 opacity-90">{city.description}</p>
                
                <div className={`mt-2 text-xs px-2 py-1 rounded-full inline-block font-medium ${
                  city.status === 'active' 
                    ? 'bg-green-400 text-green-900' 
                    : 'bg-orange-400 text-orange-900'
                }`}>
                  {city.status === 'active' ? 'Ativa' : 'Em Breve'}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Detalhes da Cidade Selecionada */}
      {selectedCity && (
        <div className="bg-white rounded-2xl p-6 shadow-lg mb-6 border-2 border-blue-200">
          <div className="flex items-start justify-between mb-4">
            <div>
              <h4 className="text-xl font-bold text-gray-800 mb-2">{selectedCity.name}</h4>
              <p className="text-gray-600">{selectedCity.description}</p>
            </div>
            <button
              onClick={() => setSelectedCity(null)}
              className="text-gray-400 hover:text-gray-600 text-xl font-bold"
            >
              ×
            </button>
          </div>
          
          <div className="flex items-center space-x-2 mb-4">
            <div className={`w-3 h-3 rounded-full ${
              selectedCity.status === 'active' ? 'bg-green-500' : 'bg-orange-500'
            }`}></div>
            <span className={`font-medium ${
              selectedCity.status === 'active' ? 'text-green-600' : 'text-orange-600'
            }`}>
              {selectedCity.status === 'active' ? 'Internet Ativa' : 'Em Breve'}
            </span>
          </div>
          
          <button
            onClick={() => handleContact(selectedCity.name, selectedCity.status)}
            className={`w-full py-3 px-6 rounded-lg font-semibold text-white transition-all duration-300 ${
              selectedCity.status === 'active'
                ? 'bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700'
                : 'bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700'
            }`}
          >
            <Phone className="w-4 h-4 inline mr-2" />
            {selectedCity.status === 'active' ? `Contratar em ${selectedCity.name}` : 'Demonstrar Interesse'}
          </button>
        </div>
      )}

      {/* Legenda */}
      <div className="grid grid-cols-2 gap-3 mb-6">
        <div className="flex items-center space-x-2 p-3 bg-blue-800 rounded-lg border border-blue-600">
          <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
          <Wifi className="w-4 h-4 text-blue-200" />
          <span className="text-sm font-semibold text-blue-200">Internet Ativa</span>
        </div>
        <div className="flex items-center space-x-2 p-3 bg-blue-800 rounded-lg border border-blue-600">
          <div className="w-3 h-3 bg-orange-500 rounded-full animate-pulse"></div>
          <Clock className="w-4 h-4 text-blue-200" />
          <span className="text-sm font-semibold text-blue-200">Em Breve</span>
        </div>
      </div>

      {/* Informações Adicionais */}
      <div className="p-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl text-white text-center">
        <p className="text-sm font-medium mb-2">
          🗺️ <strong>Mapa Interativo de Cobertura</strong>
        </p>
        <p className="text-xs opacity-90">
          Clique nas cidades para ver detalhes e entrar em contato
        </p>
      </div>
    </div>
  );
};

export default RealMap;
