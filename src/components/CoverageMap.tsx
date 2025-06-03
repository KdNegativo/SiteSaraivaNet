
import React, { useState } from 'react';
import { MapPin, Wifi, Tv, Zap } from 'lucide-react';

interface CoveragePoint {
  id: string;
  name: string;
  x: number; // posição x no mapa (%)
  y: number; // posição y no mapa (%)
  type: 'centro' | 'bairro' | 'interior' | 'rural';
  description: string;
}

const coveragePoints: CoveragePoint[] = [
  {
    id: '1',
    name: 'Centro de Eliseu Martins',
    x: 50,
    y: 45,
    type: 'centro',
    description: 'Cobertura completa no centro da cidade com velocidade máxima'
  },
  {
    id: '2',
    name: 'Bairro São José',
    x: 35,
    y: 30,
    type: 'bairro',
    description: 'Internet de alta velocidade para residências e comércios'
  },
  {
    id: '3',
    name: 'Vila Nova',
    x: 65,
    y: 60,
    type: 'bairro',
    description: 'Cobertura residencial com SaraivaTV incluído'
  },
  {
    id: '4',
    name: 'Zona Rural Norte',
    x: 45,
    y: 15,
    type: 'interior',
    description: 'Internet no interior para fazendas e sítios'
  },
  {
    id: '5',
    name: 'Zona Rural Sul',
    x: 55,
    y: 80,
    type: 'interior',
    description: 'Conectividade rural de qualidade'
  },
  {
    id: '6',
    name: 'Fazenda Santa Maria',
    x: 20,
    y: 70,
    type: 'rural',
    description: 'Internet para propriedades rurais'
  },
  {
    id: '7',
    name: 'Sítio Boa Vista',
    x: 80,
    y: 25,
    type: 'rural',
    description: 'Conexão estável para zona rural'
  }
];

const getMarkerColor = (type: string) => {
  switch (type) {
    case 'centro': return 'bg-orange-500';
    case 'bairro': return 'bg-green-500';
    case 'interior': return 'bg-blue-500';
    case 'rural': return 'bg-purple-500';
    default: return 'bg-gray-500';
  }
};

const getTypeIcon = (type: string) => {
  switch (type) {
    case 'centro': return <MapPin className="w-4 h-4" />;
    case 'bairro': return <Wifi className="w-4 h-4" />;
    case 'interior': return <Tv className="w-4 h-4" />;
    case 'rural': return <Zap className="w-4 h-4" />;
    default: return <MapPin className="w-4 h-4" />;
  }
};

const CoverageMap: React.FC = () => {
  const [selectedPoint, setSelectedPoint] = useState<CoveragePoint | null>(null);

  return (
    <div className="w-full h-96 bg-gradient-to-br from-green-100 via-blue-50 to-orange-50 rounded-2xl relative border-2 border-gray-200 overflow-hidden">
      {/* Título do mapa */}
      <div className="absolute top-4 left-4 z-20 bg-white/90 backdrop-blur-sm rounded-lg px-4 py-2 shadow-lg">
        <h3 className="text-lg font-bold text-gray-800">Eliseu Martins - PI</h3>
        <p className="text-sm text-gray-600">Cobertura SaraivaNet</p>
      </div>

      {/* Área de cobertura principal (círculo) */}
      <div 
        className="absolute border-4 border-orange-300 bg-orange-100/30 rounded-full"
        style={{
          width: '60%',
          height: '60%',
          left: '20%',
          top: '20%',
        }}
      />

      {/* Pontos de cobertura */}
      {coveragePoints.map((point) => (
        <div
          key={point.id}
          className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer z-10"
          style={{
            left: `${point.x}%`,
            top: `${point.y}%`,
          }}
          onClick={() => setSelectedPoint(selectedPoint?.id === point.id ? null : point)}
        >
          <div className={`w-8 h-8 ${getMarkerColor(point.type)} rounded-full border-3 border-white shadow-lg flex items-center justify-center text-white hover:scale-110 transition-transform`}>
            {getTypeIcon(point.type)}
          </div>
          
          {/* Tooltip/Info card */}
          {selectedPoint?.id === point.id && (
            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 bg-white rounded-lg shadow-xl p-4 min-w-[250px] border z-20">
              <div className="text-center">
                <h4 className={`font-bold text-lg mb-2 ${point.type === 'centro' ? 'text-orange-600' : point.type === 'bairro' ? 'text-green-600' : point.type === 'interior' ? 'text-blue-600' : 'text-purple-600'}`}>
                  {point.name}
                </h4>
                <p className="text-gray-600 text-sm mb-3 leading-relaxed">
                  {point.description}
                </p>
                <div className={`inline-block px-3 py-1 rounded-full text-xs font-medium text-white ${getMarkerColor(point.type)}`}>
                  {point.type.charAt(0).toUpperCase() + point.type.slice(1)}
                </div>
              </div>
              {/* Seta do tooltip */}
              <div className={`absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-[8px] border-r-[8px] border-t-[8px] border-l-transparent border-r-transparent border-t-white`}></div>
            </div>
          )}
        </div>
      ))}

      {/* Elementos decorativos para simular uma cidade */}
      <div className="absolute bottom-4 left-4 w-8 h-8 bg-gray-300 rounded opacity-40"></div>
      <div className="absolute bottom-6 left-14 w-6 h-6 bg-gray-400 rounded opacity-40"></div>
      <div className="absolute top-1/3 right-8 w-10 h-4 bg-green-300 rounded opacity-30"></div>
      <div className="absolute top-2/3 right-12 w-8 h-8 bg-green-400 rounded opacity-30"></div>

      {/* Instruções */}
      <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-2 text-xs text-gray-600">
        Clique nos pontos para ver detalhes
      </div>
    </div>
  );
};

export default CoverageMap;
