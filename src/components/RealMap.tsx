
import React, { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { MapPin, Wifi, Tv, Zap } from 'lucide-react';

// Fix for default markers in Leaflet
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

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
    lat: -8.0833,
    lng: -43.6333,
    type: 'centro',
    description: 'Cobertura completa no centro da cidade com velocidade máxima'
  },
  {
    id: '2',
    name: 'Bairro São José',
    lat: -8.0823,
    lng: -43.6343,
    type: 'bairro',
    description: 'Internet de alta velocidade para residências e comércios'
  },
  {
    id: '3',
    name: 'Vila Nova',
    lat: -8.0843,
    lng: -43.6323,
    type: 'bairro',
    description: 'Cobertura residencial com SaraivaTV incluído'
  },
  {
    id: '4',
    name: 'Zona Rural Norte',
    lat: -8.0803,
    lng: -43.6353,
    type: 'interior',
    description: 'Internet no interior para fazendas e sítios'
  },
  {
    id: '5',
    name: 'Zona Rural Sul',
    lat: -8.0863,
    lng: -43.6313,
    type: 'interior',
    description: 'Conectividade rural de qualidade'
  },
  {
    id: '6',
    name: 'Fazenda Santa Maria',
    lat: -8.0883,
    lng: -43.6373,
    type: 'rural',
    description: 'Internet para propriedades rurais'
  },
  {
    id: '7',
    name: 'Sítio Boa Vista',
    lat: -8.0783,
    lng: -43.6293,
    type: 'rural',
    description: 'Conexão estável para zona rural'
  }
];

const getMarkerColor = (type: string) => {
  switch (type) {
    case 'centro': return '#f97316'; // orange-500
    case 'bairro': return '#22c55e'; // green-500
    case 'interior': return '#3b82f6'; // blue-500
    case 'rural': return '#a855f7'; // purple-500
    default: return '#6b7280'; // gray-500
  }
};

const createCustomIcon = (type: string) => {
  const color = getMarkerColor(type);
  return L.divIcon({
    html: `
      <div style="
        background-color: ${color};
        width: 30px;
        height: 30px;
        border-radius: 50%;
        border: 3px solid white;
        box-shadow: 0 2px 8px rgba(0,0,0,0.3);
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
        font-weight: bold;
        font-size: 12px;
      ">
        ${type === 'centro' ? '🏢' : type === 'bairro' ? '🏠' : type === 'interior' ? '🌾' : '🚜'}
      </div>
    `,
    className: 'custom-marker',
    iconSize: [30, 30],
    iconAnchor: [15, 15],
    popupAnchor: [0, -15]
  });
};

const RealMap: React.FC = () => {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<L.Map | null>(null);

  useEffect(() => {
    if (!mapRef.current || mapInstanceRef.current) return;

    // Coordenadas corretas de Eliseu Martins - PI baseadas na imagem
    const map = L.map(mapRef.current).setView([-8.0833, -43.6333], 12);

    // Adicionar camada do OpenStreetMap
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors',
      maxZoom: 18,
    }).addTo(map);

    // Adicionar marcadores para cada ponto de cobertura
    coveragePoints.forEach((point) => {
      const marker = L.marker([point.lat, point.lng], {
        icon: createCustomIcon(point.type)
      }).addTo(map);

      // Popup com informações do ponto
      marker.bindPopup(`
        <div style="padding: 10px; max-width: 250px;">
          <h3 style="margin: 0 0 8px 0; color: ${getMarkerColor(point.type)}; font-weight: bold;">
            ${point.name}
          </h3>
          <p style="margin: 0 0 8px 0; font-size: 14px; line-height: 1.4;">
            ${point.description}
          </p>
          <div style="
            background-color: ${getMarkerColor(point.type)};
            color: white;
            padding: 4px 8px;
            border-radius: 12px;
            font-size: 12px;
            display: inline-block;
            font-weight: 500;
          ">
            ${point.type.charAt(0).toUpperCase() + point.type.slice(1)}
          </div>
        </div>
      `);
    });

    // Adicionar círculo de cobertura principal com as coordenadas corretas
    L.circle([-8.0833, -43.6333], {
      color: '#f97316',
      fillColor: '#fed7aa',
      fillOpacity: 0.3,
      radius: 2000
    }).addTo(map);

    mapInstanceRef.current = map;

    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, []);

  return (
    <div className="w-full h-96 rounded-2xl overflow-hidden border-2 border-gray-200 shadow-lg">
      <div ref={mapRef} className="w-full h-full" />
    </div>
  );
};

export default RealMap;
