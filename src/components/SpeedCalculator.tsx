
import { useState } from 'react';
import { Calculator, Wifi, Users, Smartphone, Laptop, Tv } from 'lucide-react';
import { Button } from './ui/button';
import { Card } from './ui/card';

const SpeedCalculator = () => {
  const [users, setUsers] = useState(1);
  const [devices, setDevices] = useState({ smartphone: 0, laptop: 0, smarttv: 0 });
  const [usage, setUsage] = useState<'basico' | 'moderado' | 'intenso'>('moderado');

  const calculateRecommendedSpeed = () => {
    const deviceRequirements = {
      smartphone: 5, // 5 Mbps por smartphone
      laptop: 10,    // 10 Mbps por laptop
      smarttv: 25    // 25 Mbps por smart TV
    };

    const usageMultiplier = {
      basico: 1,
      moderado: 1.5,
      intenso: 2
    };

    const totalDeviceSpeed = 
      devices.smartphone * deviceRequirements.smartphone +
      devices.laptop * deviceRequirements.laptop +
      devices.smarttv * deviceRequirements.smarttv;

    const baseSpeed = Math.max(totalDeviceSpeed, users * 10);
    const recommendedSpeed = Math.ceil(baseSpeed * usageMultiplier[usage]);
    
    return recommendedSpeed;
  };

  const recommendedSpeed = calculateRecommendedSpeed();

  const getRecommendedPlan = () => {
    if (recommendedSpeed <= 100) return '100 Mega';
    if (recommendedSpeed <= 200) return '200 Mega';
    if (recommendedSpeed <= 400) return '400 Mega';
    if (recommendedSpeed <= 600) return '600 Mega';
    return '1 Giga';
  };

  return (
    <Card className="p-6 bg-gradient-to-br from-blue-50 to-orange-50 dark:from-blue-950 dark:to-orange-950 border-0 shadow-xl">
      <div className="flex items-center space-x-3 mb-6">
        <div className="p-2 bg-blue-500 text-white rounded-lg">
          <Calculator className="w-6 h-6" />
        </div>
        <h3 className="text-2xl font-bold text-gray-800 dark:text-white">
          Calculadora de Velocidade
        </h3>
      </div>

      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Número de usuários na casa
          </label>
          <div className="flex items-center space-x-4">
            <Button
              variant="outline"
              size="icon"
              onClick={() => setUsers(Math.max(1, users - 1))}
              className="h-10 w-10"
            >
              -
            </Button>
            <span className="text-xl font-bold w-8 text-center">{users}</span>
            <Button
              variant="outline"
              size="icon"
              onClick={() => setUsers(users + 1)}
              className="h-10 w-10"
            >
              +
            </Button>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
            Dispositivos conectados
          </label>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {Object.entries(devices).map(([device, count]) => {
              const icons = { smartphone: Smartphone, laptop: Laptop, smarttv: Tv };
              const labels = { smartphone: 'Smartphones', laptop: 'Laptops', smarttv: 'Smart TVs' };
              const Icon = icons[device as keyof typeof icons];
              
              return (
                <div key={device} className="flex items-center justify-between p-3 bg-white dark:bg-gray-800 rounded-lg border">
                  <div className="flex items-center space-x-2">
                    <Icon className="w-5 h-5 text-blue-500" />
                    <span className="text-sm font-medium">{labels[device as keyof typeof labels]}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => setDevices(prev => ({ 
                        ...prev, 
                        [device]: Math.max(0, prev[device as keyof typeof prev] - 1) 
                      }))}
                    >
                      -
                    </Button>
                    <span className="w-6 text-center">{count}</span>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => setDevices(prev => ({ 
                        ...prev, 
                        [device]: prev[device as keyof typeof prev] + 1 
                      }))}
                    >
                      +
                    </Button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
            Tipo de uso
          </label>
          <div className="grid grid-cols-3 gap-2">
            {(['basico', 'moderado', 'intenso'] as const).map((type) => (
              <Button
                key={type}
                variant={usage === type ? 'default' : 'outline'}
                onClick={() => setUsage(type)}
                className="capitalize"
              >
                {type}
              </Button>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-500 to-orange-500 text-white p-4 rounded-lg text-center">
          <div className="flex items-center justify-center space-x-2 mb-2">
            <Wifi className="w-6 h-6" />
            <span className="text-lg font-semibold">Velocidade Recomendada</span>
          </div>
          <div className="text-3xl font-bold mb-2">{recommendedSpeed} Mbps</div>
          <div className="text-lg">
            Plano ideal: <span className="font-bold">{getRecommendedPlan()}</span>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default SpeedCalculator;
