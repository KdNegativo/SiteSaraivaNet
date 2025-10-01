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
  status: 'active';
  description: string;
}

// Coordenadas corretas das cidades do Piauí - apenas cidades ativas
const cities: City[] = [
  {
    name: 'Eliseu Martins',
    lat: -8.09667,
    lng: -43.6636,
    status: 'active',
    description: 'Internet fibra óptica 300MB + SaraivaTV incluso | 1.200+ clientes conectados'
  },
  {
    name: 'Colônia do Gurguéia',
    lat: -8.18241,
    lng: -43.7922,
    status: 'active',
    description: 'Internet fibra óptica 300MB + SaraivaTV | Instalação gratuita disponível'
  },
  {
    name: 'Manoel Emídio',
    lat: -8.01278,
    lng: -43.8719,
    status: 'active',
    description: 'Cobertura completa 300MB + SaraivaTV | 800+ clientes satisfeitos'
  },
  {
    name: 'Canavieira',
    lat: -7.70000,
    lng: -43.7167,
    status: 'active',
    description: 'Internet fibra óptica 300MB + SaraivaTV | Zona rural incluída'
  },
  {
    name: 'Jerumenha',
    lat: -7.08778,
    lng: -43.5097,
    status: 'active',
    description: 'Conectividade premium 300MB + SaraivaTV | Suporte 24h disponível'
  }
];

const RealMap: React.FC = () => {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstance = useRef<L.Map | null>(null);

  const createCustomIcon = (status: string) => {
    const color = '#16a34a';
    return L.divIcon({
      className: 'custom-marker',
      html: `
        <div style="
          background: linear-gradient(45deg, ${color}, #22c55e);
          width: 24px;
          height: 24px;
          border-radius: 50%;
          border: 2px solid white;
          box-shadow: 0 2px 8px rgba(0,0,0,0.2), 0 0 0 2px rgba(22,163,74,0.2);
          position: relative;
          animation: pulse 2s infinite;
        ">
          <div style="
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            color: white;
            font-size: 10px;
            font-weight: bold;
          ">📡</div>
        </div>
        <style>
          @keyframes pulse {
            0% { transform: scale(1); }
            50% { transform: scale(1.1); }
            100% { transform: scale(1); }
          }
        </style>
      `,
      iconSize: [24, 24],
      iconAnchor: [12, 12],
    });
  };

  useEffect(() => {
    console.log('RealMap: Iniciando inicialização do mapa');
    
    if (!mapRef.current) {
      console.log('RealMap: Elemento do mapa não encontrado');
      return;
    }
    
    if (mapInstance.current) {
      console.log('RealMap: Removendo mapa existente antes de criar novo');
      mapInstance.current.remove();
      mapInstance.current = null;
    }

    try {
      // Coordenadas centrais da região (centro entre as cidades)
      const centerCoords: [number, number] = [-8.0969, -43.5764];
      
      console.log('RealMap: Criando mapa centrado em:', centerCoords);

      // Criar o mapa com configurações específicas
      mapInstance.current = L.map(mapRef.current, {
        center: centerCoords,
        zoom: 11,
        minZoom: 8,
        maxZoom: 16,
        zoomControl: true,
        scrollWheelZoom: true,
        doubleClickZoom: true,
        dragging: true
      });

      console.log('RealMap: Mapa criado, adicionando camada de tiles');
      
      // Adicionar tiles sem marca d'água
      const tileLayer = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '',
        maxZoom: 18,
      });
      
      tileLayer.addTo(mapInstance.current);
      console.log('RealMap: Tiles adicionados');

      // Criar array de coordenadas para calcular bounds
      const coordinates: [number, number][] = [];
      
      // Adicionar marcadores das cidades
      cities.forEach((city) => {
        console.log(`RealMap: Adicionando ${city.name} em [${city.lat}, ${city.lng}]`);
        
        const marker = L.marker([city.lat, city.lng], {
          icon: createCustomIcon(city.status)
        });
        
        marker.addTo(mapInstance.current!);
        coordinates.push([city.lat, city.lng]);

        const popupContent = `
          <div style="text-align: center; padding: 15px; min-width: 200px; font-family: Arial, sans-serif;">
            <h3 style="margin: 0 0 10px 0; color: #16a34a; font-weight: bold; font-size: 16px;">
              📍 ${city.name}
            </h3>
            <p style="margin: 0 0 12px 0; color: #555; font-size: 14px; line-height: 1.4;">
              ${city.description}
            </p>
            <div style="margin: 10px 0; padding: 6px 12px; background-color: #16a34a; color: white; border-radius: 15px; font-size: 12px; display: inline-block; font-weight: bold;">
              🟢 Internet Ativa
            </div>
            <br>
            <button 
              onclick="window.open('https://wa.me/5589994395789?text=${encodeURIComponent(
                `Olá! Gostaria de contratar internet em ${city.name}. Podem me ajudar?`
              )}', '_blank')"
              style="
                margin-top: 10px;
                padding: 10px 15px;
                background-color: #25D366;
                color: white;
                border: none;
                border-radius: 8px;
                cursor: pointer;
                font-size: 13px;
                font-weight: bold;
                transition: background-color 0.3s;
              "
              onmouseover="this.style.backgroundColor='#1DA851'"
              onmouseout="this.style.backgroundColor='#25D366'"
            >
              💬 Contratar Agora
            </button>
          </div>
        `;

        marker.bindPopup(popupContent, {
          maxWidth: 250,
          className: 'custom-popup'
        });
      });

      // Ajustar a visualização para mostrar todas as cidades
      if (coordinates.length > 0) {
        const group = L.featureGroup(cities.map((city) => 
          L.marker([city.lat, city.lng])
        ));
        mapInstance.current.fitBounds(group.getBounds(), {
          padding: [20, 20],
          maxZoom: 12
        });
        console.log('RealMap: Visualização ajustada para mostrar todas as cidades');
      }

      console.log('RealMap: Mapa totalmente configurado e funcional');

    } catch (error) {
      console.error('RealMap: Erro crítico ao inicializar mapa:', error);
    }

    // Cleanup function
    return () => {
      console.log('RealMap: Limpando mapa');
      if (mapInstance.current) {
        mapInstance.current.remove();
        mapInstance.current = null;
      }
    };
  }, []);

  return (
    <div className="w-full">
      <div className="mb-6 text-center bg-gradient-to-r from-blue-900/50 to-purple-900/50 rounded-xl p-6 border border-blue-400/30">
        <h1 className="text-xl font-bold text-white mb-1">SaraivaNet</h1>
        <h3 className="text-3xl font-bold text-white mb-2 flex items-center justify-center gap-2">
          🗺️ Mapa de Cobertura Completa
        </h3>
        <p className="text-blue-200 text-lg">📍 Região Sul do Piauí - Internet Fibra Óptica 300MB</p>
        <div className="mt-3 flex justify-center gap-4 text-sm">
          <span className="bg-green-600/80 px-3 py-1 rounded-full text-white font-medium">5 Cidades Ativas</span>
          <span className="bg-orange-600/80 px-3 py-1 rounded-full text-white font-medium">3.000+ Clientes</span>
        </div>
      </div>
      
      {/* Container do Mapa */}
      <div className="w-full h-96 rounded-2xl overflow-hidden shadow-xl border-2 border-blue-400/30 mb-6">
        <div 
          ref={mapRef} 
          className="w-full h-full" 
          style={{ 
            minHeight: '384px',
            background: '#f8fafc' 
          }} 
        />
      </div>

      {/* Legenda - apenas Internet Ativa */}
      <div className="flex justify-center mb-6">
        <div className="flex items-center space-x-3 p-4 bg-blue-800/80 rounded-xl border border-blue-600/50">
          <div className="w-5 h-5 bg-green-600 rounded-full border-2 border-white shadow-md"></div>
          <span className="text-sm font-semibold text-blue-100">🟢 Internet Ativa</span>
        </div>
      </div>

      {/* Informações do Mapa */}
      <div className="p-6 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl text-white text-center shadow-lg">
        <p className="text-base font-bold mb-3">
          📍 <strong>Mapa Interativo Real - Piauí</strong>
        </p>
        <p className="text-sm opacity-90 mb-2">
          ✅ Clique nos marcadores para ver detalhes de cada cidade
        </p>
        <p className="text-sm opacity-90">
          💬 Entre em contato direto via WhatsApp em cada localização
        </p>
      </div>
    </div>
  );
};

export default RealMap;
