
import React from 'react';

const RealMap: React.FC = () => {
  return (
    <div className="w-full h-96 rounded-2xl overflow-hidden border-2 border-gray-200 shadow-lg">
      <iframe 
        src="https://www.google.com/maps/d/edit?mid=1sbdaCVQvh1xXwJqqQiNLDY7cFeJrHck&usp=sharing" 
        width="100%" 
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Mapa de Eliseu Martins"
      />
    </div>
  );
};

export default RealMap;
