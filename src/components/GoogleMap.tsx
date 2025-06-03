
import React, { useCallback, useRef, useState } from 'react';
import { Wrapper, Status } from '@googlemaps/react-wrapper';

interface CoveragePoint {
  id: string;
  name: string;
  lat: number;
  lng: number;
  type: 'centro' | 'bairro' | 'interior' | 'rural';
  description: string;
}

const coveragePoints: CoveragePoint[] = [
  {
    id: '1',
    name: 'Centro de Eliseu Martins',
    lat: -8.0956,
    lng: -42.8764,
    type: 'centro',
    description: 'Cobertura completa no centro da cidade com velocidade máxima'
  },
  {
    id: '2',
    name: 'Bairro São José',
    lat: -8.0876,
    lng: -42.8684,
    type: 'bairro',
    description: 'Internet de alta velocidade para residências e comércios'
  },
  {
    id: '3',
    name: 'Vila Nova',
    lat: -8.1036,
    lng: -42.8844,
    type: 'bairro',
    description: 'Cobertura residencial com SaraivaTV incluído'
  },
  {
    id: '4',
    name: 'Zona Rural Norte',
    lat: -8.0756,
    lng: -42.8564,
    type: 'interior',
    description: 'Internet no interior para fazendas e sítios'
  },
  {
    id: '5',
    name: 'Zona Rural Sul',
    lat: -8.1156,
    lng: -42.8964,
    type: 'interior',
    description: 'Conectividade rural de qualidade'
  },
  {
    id: '6',
    name: 'Fazenda Santa Maria',
    lat: -8.0656,
    lng: -42.9064,
    type: 'rural',
    description: 'Internet para propriedades rurais'
  },
  {
    id: '7',
    name: 'Sítio Boa Vista',
    lat: -8.1256,
    lng: -42.8464,
    type: 'rural',
    description: 'Conexão estável para zona rural'
  }
];

const getMarkerColor = (type: string) => {
  switch (type) {
    case 'centro': return '#ea580c';
    case 'bairro': return '#16a34a';
    case 'interior': return '#2563eb';
    case 'rural': return '#9333ea';
    default: return '#6b7280';
  }
};

const MapComponent: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [map, setMap] = useState<google.maps.Map>();

  const initMap = useCallback(() => {
    if (ref.current && window.google?.maps && !map) {
      console.log('Inicializando Google Maps...');
      try {
        const newMap = new window.google.maps.Map(ref.current, {
          center: { lat: -8.0956, lng: -42.8764 },
          zoom: 13,
          mapTypeId: 'roadmap',
          styles: [
            {
              featureType: 'poi',
              elementType: 'labels',
              stylers: [{ visibility: 'simplified' }]
            }
          ]
        });

        // Adicionar área de cobertura
        new window.google.maps.Circle({
          strokeColor: '#ea580c',
          strokeOpacity: 0.8,
          strokeWeight: 2,
          fillColor: '#fed7aa',
          fillOpacity: 0.2,
          map: newMap,
          center: { lat: -8.0956, lng: -42.8764 },
          radius: 5000,
        });

        // Adicionar pontos de cobertura
        coveragePoints.forEach((point) => {
          const marker = new window.google.maps.Marker({
            position: { lat: point.lat, lng: point.lng },
            map: newMap,
            title: point.name,
            icon: {
              path: window.google.maps.SymbolPath.CIRCLE,
              fillColor: getMarkerColor(point.type),
              fillOpacity: 1,
              strokeColor: '#ffffff',
              strokeWeight: 3,
              scale: 8,
            },
          });

          const infoWindow = new window.google.maps.InfoWindow({
            content: `
              <div style="text-align: center; padding: 10px; max-width: 250px;">
                <h3 style="margin: 0 0 8px 0; color: ${getMarkerColor(point.type)}; font-weight: bold; font-size: 16px;">
                  ${point.name}
                </h3>
                <p style="margin: 0 0 8px 0; color: #666; font-size: 14px; line-height: 1.4;">
                  ${point.description}
                </p>
                <div style="padding: 4px 8px; background-color: ${getMarkerColor(point.type)}; color: white; border-radius: 12px; font-size: 12px; display: inline-block;">
                  ${point.type.charAt(0).toUpperCase() + point.type.slice(1)}
                </div>
              </div>
            `,
          });

          marker.addListener('click', () => {
            infoWindow.open(newMap, marker);
          });
        });

        setMap(newMap);
        console.log('Google Maps inicializado com sucesso!');
      } catch (error) {
        console.error('Erro ao inicializar o mapa:', error);
      }
    }
  }, [ref, map]);

  React.useEffect(() => {
    if (window.google?.maps) {
      initMap();
    }
  }, [initMap]);

  return <div ref={ref} className="w-full h-full" />;
};

const render = (status: Status) => {
  console.log('Status do Google Maps:', status);
  
  switch (status) {
    case Status.LOADING:
      return (
        <div className="w-full h-96 bg-gray-100 rounded-2xl flex items-center justify-center">
          <div className="text-gray-500">Carregando mapa...</div>
        </div>
      );
    case Status.FAILURE:
      return (
        <div className="w-full h-96 bg-orange-50 rounded-2xl flex flex-col items-center justify-center p-8">
          <div className="text-orange-600 text-lg font-semibold mb-4">Mapa Temporariamente Indisponível</div>
          <div className="text-gray-600 text-center max-w-md">
            <p className="mb-4">
              Nossa cobertura continua disponível em toda Eliseu Martins! Veja abaixo as áreas atendidas:
            </p>
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <h4 className="font-semibold mb-2">Áreas com Cobertura SaraivaNet:</h4>
              <ul className="text-sm space-y-1">
                <li>🏢 Centro de Eliseu Martins</li>
                <li>🏘️ Bairro São José</li>
                <li>🏘️ Vila Nova</li>
                <li>🌾 Zona Rural Norte</li>
                <li>🌾 Zona Rural Sul</li>
                <li>🚜 Fazenda Santa Maria</li>
                <li>🌿 Sítio Boa Vista</li>
              </ul>
            </div>
          </div>
        </div>
      );
    case Status.SUCCESS:
      return <MapComponent />;
    default:
      return (
        <div className="w-full h-96 bg-gray-100 rounded-2xl flex items-center justify-center">
          <div className="text-gray-500">Inicializando mapa...</div>
        </div>
      );
  }
};

const GoogleMap: React.FC = () => {
  return (
    <div className="w-full h-96 rounded-2xl overflow-hidden shadow-lg border">
      <Wrapper 
        apiKey="" 
        render={render}
        libraries={['places']}
        version="weekly"
      >
        <MapComponent />
      </Wrapper>
    </div>
  );
};

export default GoogleMap;
