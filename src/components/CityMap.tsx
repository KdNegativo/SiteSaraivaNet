
import React, { useState } from 'react';
import { MapPin, Wifi, CheckCircle, Phone } from 'lucide-react';
import { Button } from "@/components/ui/button";

interface City {
  id: string;
  name: string;
  x: number; // posição x no mapa (%)
  y: number; // posição y no mapa (%)
  status: 'ativa' | 'em-breve';
  population: string;
  description: string;
}

const cities: City[] = [
  {
    id: '1',
    name: 'Eliseu Martins',
    x: 50,
    y: 45,
    status: 'ativa',
    population: '4.500 hab',
    description: 'Cobertura completa na cidade sede com internet fibra óptica'
  },
  {
    id: '2',
    name: 'Colônia do Gurguéia',
    x: 25,
    y: 30,
    status: 'ativa',
    population: '7.200 hab',
    description: 'Internet de alta velocidade disponível em toda cidade'
  },
  {
    id: '3',
    name: 'Manoel Emídio',
    x: 75,
    y: 35,
    status: 'ativa',
    population: '2.800 hab',
    description: 'Fibra óptica chegou para conectar toda população'
  },
  {
    id: '4',
    name: 'Jerumenha',
    x: 35,
    y: 70,
    status: 'ativa',
    population: '3.900 hab',
    description: 'Internet estável e rápida para residências e comércios'
  },
  {
    id: '5',
    name: 'Canto do Buriti',
    x: 70,
    y: 65,
    status: 'em-breve',
    population: '2.100 hab',
    description: 'Em breve! Expansão da rede prevista para 2025'
  }
];

const CityMap: React.FC = () => {
  const [selectedCity, setSelectedCity] = useState<City | null>(null);

  return (
    <div className="w-full h-96 bg-gradient-to-br from-green-50 via-blue-50 to-orange-50 rounded-2xl relative border-2 border-gray-200 overflow-hidden shadow-lg">
      {/* Título do mapa */}
      <div className="absolute top-4 left-4 z-20 bg-white/95 backdrop-blur-sm rounded-lg px-4 py-3 shadow-lg border">
        <h3 className="text-lg font-bold text-gray-800 flex items-center">
          <MapPin className="w-5 h-5 mr-2 text-orange-600" />
          Região Sul do Piauí
        </h3>
        <p className="text-sm text-gray-600">Cidades atendidas pela SaraivaNet</p>
      </div>

      {/* Legenda */}
      <div className="absolute top-4 right-4 z-20 bg-white/95 backdrop-blur-sm rounded-lg px-4 py-3 shadow-lg border">
        <div className="space-y-2">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            <span className="text-xs font-medium text-gray-700">Internet Ativa</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-orange-500 rounded-full animate-pulse"></div>
            <span className="text-xs font-medium text-gray-700">Em Breve</span>
          </div>
        </div>
      </div>

      {/* Área de cobertura regional */}
      <div 
        className="absolute border-4 border-orange-200 bg-orange-50/40 rounded-full opacity-60"
        style={{
          width: '70%',
          height: '70%',
          left: '15%',
          top: '15%',
        }}
      />

      {/* Cidades */}
      {cities.map((city) => (
        <div
          key={city.id}
          className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer z-10"
          style={{
            left: `${city.x}%`,
            top: `${city.y}%`,
          }}
          onClick={() => setSelectedCity(selectedCity?.id === city.id ? null : city)}
        >
          <div className={`relative ${city.status === 'ativa' ? 'animate-pulse' : ''}`}>
            <div className={`w-10 h-10 ${city.status === 'ativa' ? 'bg-green-500' : 'bg-orange-500'} rounded-full border-4 border-white shadow-lg flex items-center justify-center text-white hover:scale-110 transition-all duration-300`}>
              {city.status === 'ativa' ? (
                <CheckCircle className="w-5 h-5" />
              ) : (
                <Wifi className="w-5 h-5" />
              )}
            </div>
            
            {/* Nome da cidade sempre visível */}
            <div className="absolute top-12 left-1/2 transform -translate-x-1/2 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-1 shadow-md border">
              <span className="text-xs font-bold text-gray-800 whitespace-nowrap">{city.name}</span>
            </div>
          </div>
          
          {/* Card de detalhes */}
          {selectedCity?.id === city.id && (
            <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 bg-white rounded-xl shadow-2xl p-6 min-w-[280px] border z-30 animate-in fade-in duration-200">
              <div className="text-center">
                <div className="flex items-center justify-center space-x-2 mb-3">
                  <div className={`w-6 h-6 ${city.status === 'ativa' ? 'bg-green-500' : 'bg-orange-500'} rounded-full flex items-center justify-center`}>
                    {city.status === 'ativa' ? (
                      <CheckCircle className="w-4 h-4 text-white" />
                    ) : (
                      <Wifi className="w-4 h-4 text-white" />
                    )}
                  </div>
                  <h4 className="font-bold text-xl text-gray-800">{city.name}</h4>
                </div>
                
                <div className="mb-4">
                  <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold text-white ${city.status === 'ativa' ? 'bg-green-500' : 'bg-orange-500'}`}>
                    {city.status === 'ativa' ? '✅ Internet Ativa' : '🚀 Em Breve'}
                  </span>
                </div>
                
                <div className="text-sm text-gray-600 mb-3">
                  <div className="font-semibold text-gray-700 mb-1">{city.population}</div>
                  <p className="leading-relaxed">{city.description}</p>
                </div>

                {city.status === 'ativa' ? (
                  <div className="space-y-2">
                    <Button className="w-full bg-green-500 hover:bg-green-600 text-white text-sm py-2">
                      💬 Contratar Agora
                    </Button>
                    <Button variant="outline" className="w-full border-green-500 text-green-600 hover:bg-green-50 text-sm py-2">
                      📞 Falar com Técnico
                    </Button>
                  </div>
                ) : (
                  <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white text-sm py-2">
                    📋 Demonstrar Interesse
                  </Button>
                )}
              </div>
              
              {/* Seta do tooltip */}
              <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-[12px] border-r-[12px] border-t-[12px] border-l-transparent border-r-transparent border-t-white"></div>
            </div>
          )}
        </div>
      ))}

      {/* Elementos decorativos para simular geografia */}
      <div className="absolute bottom-6 left-8 w-12 h-6 bg-blue-200 rounded-full opacity-50"></div>
      <div className="absolute top-1/4 right-12 w-16 h-8 bg-green-200 rounded-full opacity-40"></div>
      <div className="absolute top-2/3 left-1/4 w-10 h-10 bg-green-300 rounded-full opacity-30"></div>

      {/* Instruções */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white/90 backdrop-blur-sm rounded-lg px-4 py-2 text-xs text-gray-600 shadow-md border">
        Clique nas cidades para ver detalhes da cobertura
      </div>
    </div>
  );
};

export default CityMap;
