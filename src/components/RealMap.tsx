
import React, { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { Phone } from 'lucide-react';

// Fix para os ícones padrão do Leaflet
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

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
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstance = useRef<L.Map | null>(null);

  const handleContact = (cityName: string, status: string) => {
    const message = status === 'active' 
      ? `Olá! Gostaria de saber mais sobre os planos de internet em ${cityName}`
      : `Olá! Gostaria de demonstrar interesse na chegada da internet em ${cityName}`;
    
    window.open(`https://wa.me/5586999999999?text=${encodeURIComponent(message)}`, '_blank');
  };

  const createCustomIcon = (status: string) => {
    const color = status === 'active' ? '#16a34a' : '#ea580c';
    return L.divIcon({
      className: 'custom-marker',
      html: `
        <div style="
          background-color: ${color};
          width: 25px;
          height: 25px;
          border-radius: 50%;
          border: 3px solid white;
          box-shadow: 0 2px 4px rgba(0,0,0,0.3);
          position: relative;
        ">
          <div style="
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 10px;
            height: 10px;
            background-color: white;
            border-radius: 50%;
          "></div>
        </div>
      `,
      iconSize: [25, 25],
      iconAnchor: [12, 12],
    });
  };

  useEffect(() => {
    if (!mapRef.current || mapInstance.current) return;

    // Coordenadas centrais da região (Eliseu Martins)
    const centerCoords: [number, number] = [-8.0969, -44.0597];

    // Inicializar o mapa
    mapInstance.current = L.map(mapRef.current).setView(centerCoords, 10);

    // Adicionar camada do mapa
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors',
      maxZoom: 18,
    }).addTo(mapInstance.current);

    // Adicionar área de cobertura
    const coverageCircle = L.circle(centerCoords, {
      color: '#ea580c',
      fillColor: '#fed7aa',
      fillOpacity: 0.2,
      radius: 25000,
    }).addTo(mapInstance.current);

    coverageCircle.bindPopup(`
      <div style="text-align: center; padding: 10px;">
        <h3 style="margin: 0 0 8px 0; color: #ea580c; font-weight: bold;">
          Área de Cobertura SaraivaNet
        </h3>
        <p style="margin: 0; color: #666; font-size: 14px;">
          Internet de fibra óptica disponível em toda esta região
        </p>
      </div>
    `);

    // Adicionar pontos das cidades
    cities.forEach((city) => {
      const marker = L.marker([city.lat, city.lng], {
        icon: createCustomIcon(city.status)
      }).addTo(mapInstance.current!);

      const popupContent = `
        <div style="text-align: center; padding: 15px; min-width: 200px;">
          <h3 style="margin: 0 0 8px 0; color: ${city.status === 'active' ? '#16a34a' : '#ea580c'}; font-weight: bold;">
            ${city.name}
          </h3>
          <p style="margin: 0 0 10px 0; color: #666; font-size: 14px;">
            ${city.description}
          </p>
          <div style="margin: 8px 0; padding: 4px 8px; background-color: ${city.status === 'active' ? '#16a34a' : '#ea580c'}; color: white; border-radius: 12px; font-size: 12px; display: inline-block;">
            ${city.status === 'active' ? 'Internet Ativa' : 'Em Breve'}
          </div>
          <br>
          <button 
            onclick="window.open('https://wa.me/5586999999999?text=${encodeURIComponent(
              city.status === 'active' 
                ? `Olá! Gostaria de saber mais sobre os planos de internet em ${city.name}`
                : `Olá! Gostaria de demonstrar interesse na chegada da internet em ${city.name}`
            )}', '_blank')"
            style="
              margin-top: 8px;
              padding: 8px 12px;
              background-color: ${city.status === 'active' ? '#16a34a' : '#ea580c'};
              color: white;
              border: none;
              border-radius: 6px;
              cursor: pointer;
              font-size: 12px;
              font-weight: bold;
            "
          >
            ${city.status === 'active' ? `Contratar em ${city.name}` : 'Demonstrar Interesse'}
          </button>
        </div>
      `;

      marker.bindPopup(popupContent);
    });

    return () => {
      if (mapInstance.current) {
        mapInstance.current.remove();
        mapInstance.current = null;
      }
    };
  }, []);

  return (
    <div className="w-full">
      <div className="mb-4 text-center">
        <h3 className="text-2xl font-bold text-white mb-2">Mapa de Cobertura SaraivaNet</h3>
        <p className="text-blue-200">Mapa interativo com nossas áreas de cobertura</p>
      </div>
      
      {/* Mapa Real */}
      <div className="w-full h-96 rounded-2xl overflow-hidden shadow-lg border mb-6">
        <div ref={mapRef} className="w-full h-full" />
      </div>

      {/* Legenda */}
      <div className="grid grid-cols-2 gap-3 mb-6">
        <div className="flex items-center space-x-2 p-3 bg-blue-800 rounded-lg border border-blue-600">
          <div className="w-4 h-4 bg-green-600 rounded-full border-2 border-white"></div>
          <span className="text-sm font-semibold text-blue-200">Internet Ativa</span>
        </div>
        <div className="flex items-center space-x-2 p-3 bg-blue-800 rounded-lg border border-blue-600">
          <div className="w-4 h-4 bg-orange-600 rounded-full border-2 border-white"></div>
          <span className="text-sm font-semibold text-blue-200">Em Breve</span>
        </div>
      </div>

      {/* Informações */}
      <div className="p-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl text-white text-center">
        <p className="text-sm font-medium mb-2">
          🗺️ <strong>Mapa Interativo Real</strong>
        </p>
        <p className="text-xs opacity-90">
          Clique nos marcadores para ver detalhes e entrar em contato
        </p>
      </div>
    </div>
  );
};

export default RealMap;
