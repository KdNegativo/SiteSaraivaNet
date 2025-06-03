
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
  type: 'centro';
  description: string;
}

const coveragePoints: CoveragePoint[] = [
  {
    id: '1',
    name: 'Centro de Eliseu Martins',
    lat: -8.1575,
    lng: -43.1415,
    type: 'centro',
    description: 'Cobertura completa no centro da cidade com velocidade máxima'
  }
];

const getMarkerColor = (type: string) => {
  return '#f97316'; // orange-500 para centro
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
        🏢
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

    // Coordenadas corretas de Eliseu Martins - PI conforme mostrado na imagem
    const map = L.map(mapRef.current).setView([-8.1575, -43.1415], 14);

    // Adicionar camada do OpenStreetMap
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors',
      maxZoom: 18,
    }).addTo(map);

    // Adicionar marcador para o centro
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
            Centro
          </div>
        </div>
      `);
    });

    // Adicionar círculo de cobertura principal
    L.circle([-8.1575, -43.1415], {
      color: '#f97316',
      fillColor: '#fed7aa',
      fillOpacity: 0.3,
      radius: 3000
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
