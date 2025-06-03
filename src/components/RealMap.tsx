
import React, { useEffect, useRef, useState } from 'react';
import { Wrapper, Status } from '@googlemaps/react-wrapper';
import { MapPin, Wifi, Clock } from 'lucide-react';

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

const MapComponent: React.FC<{ cities: City[] }> = ({ cities }) => {
  const mapRef = useRef<HTMLDivElement>(null);
  const [map, setMap] = useState<google.maps.Map | null>(null);

  useEffect(() => {
    if (!mapRef.current) return;

    const mapInstance = new google.maps.Map(mapRef.current, {
      center: { lat: -8.0969, lng: -44.0597 }, // Centered on Eliseu Martins
      zoom: 9,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      styles: [
        {
          featureType: 'all',
          elementType: 'geometry.fill',
          stylers: [{ color: '#f5f5f5' }]
        },
        {
          featureType: 'water',
          elementType: 'geometry.fill',
          stylers: [{ color: '#c9e7ff' }]
        },
        {
          featureType: 'road',
          elementType: 'geometry.stroke',
          stylers: [{ color: '#ffffff' }]
        }
      ]
    });

    setMap(mapInstance);

    // Add markers for each city
    cities.forEach((city) => {
      const marker = new google.maps.Marker({
        position: { lat: city.lat, lng: city.lng },
        map: mapInstance,
        title: city.name,
        icon: {
          url: city.status === 'active' 
            ? 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent(`
              <svg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
                <circle cx="20" cy="20" r="18" fill="#10B981" stroke="#ffffff" stroke-width="3"/>
                <path d="M15 20l4 4 8-8" stroke="#ffffff" stroke-width="3" fill="none"/>
              </svg>
            `)
            : 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent(`
              <svg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
                <circle cx="20" cy="20" r="18" fill="#F97316" stroke="#ffffff" stroke-width="3"/>
                <circle cx="20" cy="20" r="5" fill="#ffffff"/>
              </svg>
            `),
          scaledSize: new google.maps.Size(40, 40),
          anchor: new google.maps.Point(20, 20)
        }
      });

      const infoWindow = new google.maps.InfoWindow({
        content: `
          <div style="padding: 10px; font-family: system-ui, -apple-system, sans-serif;">
            <h3 style="margin: 0 0 8px 0; color: #1f2937; font-size: 16px; font-weight: bold;">
              ${city.name}
            </h3>
            <p style="margin: 0 0 8px 0; color: #6b7280; font-size: 14px;">
              ${city.description}
            </p>
            <div style="display: flex; align-items: center; gap: 4px; margin-bottom: 8px;">
              <span style="width: 8px; height: 8px; border-radius: 50%; background-color: ${city.status === 'active' ? '#10B981' : '#F97316'}; display: inline-block;"></span>
              <span style="font-size: 12px; font-weight: 500; color: ${city.status === 'active' ? '#10B981' : '#F97316'};">
                ${city.status === 'active' ? 'Internet Ativa' : 'Em Breve'}
              </span>
            </div>
            ${city.status === 'active' ? `
              <button onclick="window.open('https://wa.me/5586999999999?text=Olá! Gostaria de saber mais sobre os planos de internet em ${city.name}', '_blank')" 
                style="background: linear-gradient(135deg, #EA580C, #DC2626); color: white; border: none; padding: 8px 16px; border-radius: 8px; font-size: 12px; font-weight: 600; cursor: pointer; width: 100%;">
                💬 Contratar em ${city.name}
              </button>
            ` : `
              <button onclick="window.open('https://wa.me/5586999999999?text=Olá! Gostaria de demonstrar interesse na chegada da internet em ${city.name}', '_blank')" 
                style="background: linear-gradient(135deg, #F97316, #EA580C); color: white; border: none; padding: 8px 16px; border-radius: 8px; font-size: 12px; font-weight: 600; cursor: pointer; width: 100%;">
                ⭐ Demonstrar Interesse
              </button>
            `}
          </div>
        `
      });

      marker.addListener('click', () => {
        infoWindow.open(mapInstance, marker);
      });
    });

  }, [cities]);

  return <div ref={mapRef} className="w-full h-full min-h-[400px] rounded-2xl" />;
};

const LoadingComponent = () => (
  <div className="w-full h-96 rounded-2xl bg-gray-100 flex items-center justify-center border-2 border-gray-200">
    <div className="text-center">
      <div className="animate-spin w-8 h-8 border-2 border-orange-500 border-t-transparent rounded-full mx-auto mb-4"></div>
      <p className="text-gray-600 font-medium">Carregando mapa...</p>
    </div>
  </div>
);

const ErrorComponent = () => (
  <div className="w-full h-96 rounded-2xl bg-red-50 border-2 border-red-200 flex items-center justify-center">
    <div className="text-center text-red-600">
      <MapPin className="w-12 h-12 mx-auto mb-4" />
      <p className="font-medium mb-2">Erro ao carregar o mapa</p>
      <p className="text-sm">Verifique sua conexão com a internet</p>
    </div>
  </div>
);

const RealMap: React.FC = () => {
  const render = (status: Status) => {
    switch (status) {
      case Status.LOADING:
        return <LoadingComponent />;
      case Status.FAILURE:
        return <ErrorComponent />;
      case Status.SUCCESS:
        return <MapComponent cities={cities} />;
      default:
        return <LoadingComponent />;
    }
  };

  return (
    <div className="w-full">
      <div className="mb-4 text-center">
        <h3 className="text-2xl font-bold text-white mb-2">Mapa Interativo de Cobertura</h3>
        <p className="text-blue-200">Clique nos marcadores para ver detalhes e opções de contrato</p>
      </div>
      
      <div className="shadow-2xl rounded-2xl overflow-hidden border border-blue-600">
        <Wrapper 
          apiKey="AIzaSyBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB" 
          render={render}
          libraries={['places']}
        />
      </div>
      
      <div className="mt-4 grid grid-cols-2 gap-3">
        <div className="flex items-center space-x-2 p-3 bg-blue-800 rounded-lg border border-blue-600">
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          <Wifi className="w-4 h-4 text-blue-200" />
          <span className="text-sm font-semibold text-blue-200">Internet Ativa</span>
        </div>
        <div className="flex items-center space-x-2 p-3 bg-blue-800 rounded-lg border border-blue-600">
          <div className="w-3 h-3 bg-orange-500 rounded-full animate-pulse"></div>
          <Clock className="w-4 h-4 text-blue-200" />
          <span className="text-sm font-semibold text-blue-200">Em Breve</span>
        </div>
      </div>
      
      <div className="mt-4 p-4 bg-gradient-to-r from-orange-600 to-red-600 rounded-xl text-white text-center">
        <p className="text-sm font-medium mb-2">
          📍 <strong>Importante:</strong> Para usar o mapa, você precisa de uma chave da API do Google Maps
        </p>
        <p className="text-xs opacity-90">
          Substitua "AIzaSyBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB" por sua chave real do Google Maps
        </p>
      </div>
    </div>
  );
};

export default RealMap;
