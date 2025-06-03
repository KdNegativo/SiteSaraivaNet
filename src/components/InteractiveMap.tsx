
import React, { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

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

const InteractiveMap: React.FC = () => {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstance = useRef<L.Map | null>(null);

  // Coordenadas aproximadas de Eliseu Martins - PI
  const centerCoords: [number, number] = [-8.0956, -42.8764];

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
      case 'centro': return '#ea580c'; // orange-600
      case 'bairro': return '#16a34a'; // green-600
      case 'interior': return '#2563eb'; // blue-600
      case 'rural': return '#9333ea'; // purple-600
      default: return '#6b7280'; // gray-500
    }
  };

  const createCustomIcon = (type: string) => {
    const color = getMarkerColor(type);
    return L.divIcon({
      className: 'custom-marker',
      html: `
        <div style="
          background-color: ${color};
          width: 20px;
          height: 20px;
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
            width: 8px;
            height: 8px;
            background-color: white;
            border-radius: 50%;
          "></div>
        </div>
      `,
      iconSize: [20, 20],
      iconAnchor: [10, 10],
    });
  };

  useEffect(() => {
    if (!mapRef.current || mapInstance.current) return;

    // Inicializar o mapa
    mapInstance.current = L.map(mapRef.current).setView(centerCoords, 13);

    // Adicionar camada do mapa
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors',
      maxZoom: 18,
    }).addTo(mapInstance.current);

    // Adicionar pontos de cobertura
    coveragePoints.forEach((point) => {
      const marker = L.marker([point.lat, point.lng], {
        icon: createCustomIcon(point.type)
      }).addTo(mapInstance.current!);

      marker.bindPopup(`
        <div style="text-align: center; padding: 10px;">
          <h3 style="margin: 0 0 8px 0; color: ${getMarkerColor(point.type)}; font-weight: bold;">
            ${point.name}
          </h3>
          <p style="margin: 0; color: #666; font-size: 14px;">
            ${point.description}
          </p>
          <div style="margin-top: 8px; padding: 4px 8px; background-color: ${getMarkerColor(point.type)}; color: white; border-radius: 12px; font-size: 12px; display: inline-block;">
            ${point.type.charAt(0).toUpperCase() + point.type.slice(1)}
          </div>
        </div>
      `);
    });

    // Adicionar área de cobertura geral
    const coverageCircle = L.circle(centerCoords, {
      color: '#ea580c',
      fillColor: '#fed7aa',
      fillOpacity: 0.2,
      radius: 5000,
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

    return () => {
      if (mapInstance.current) {
        mapInstance.current.remove();
        mapInstance.current = null;
      }
    };
  }, []);

  return (
    <div className="w-full h-96 rounded-2xl overflow-hidden shadow-lg border">
      <div ref={mapRef} className="w-full h-full" />
    </div>
  );
};

export default InteractiveMap;
