
import { Users, MapPin, Zap, Heart } from "lucide-react";
import StatsCounter from "./StatsCounter";

const MobileStats = () => {
  return (
    <div className="grid grid-cols-2 gap-3 px-4 py-6">
      <div className="bg-white/15 backdrop-blur-sm rounded-lg p-3 text-white text-center">
        <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-2">
          <Users className="w-4 h-4 text-white" />
        </div>
        <StatsCounter endValue={500} label="" suffix="+" />
        <div className="text-xs text-white/80 mt-1">Clientes</div>
      </div>

      <div className="bg-white/15 backdrop-blur-sm rounded-lg p-3 text-white text-center">
        <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-2">
          <Zap className="w-4 h-4 text-white" />
        </div>
        <StatsCounter endValue={99.9} label="" suffix="%" />
        <div className="text-xs text-white/80 mt-1">Uptime</div>
      </div>

      <div className="bg-white/15 backdrop-blur-sm rounded-lg p-3 text-white text-center">
        <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-2">
          <MapPin className="w-4 h-4 text-white" />
        </div>
        <StatsCounter endValue={20} label="" suffix="+" />
        <div className="text-xs text-white/80 mt-1">Canais</div>
      </div>

      <div className="bg-white/15 backdrop-blur-sm rounded-lg p-3 text-white text-center">
        <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-2">
          <Heart className="w-4 h-4 text-white" />
        </div>
        <StatsCounter endValue={24} label="" suffix="h" />
        <div className="text-xs text-white/80 mt-1">Online</div>
      </div>
    </div>
  );
};

export default MobileStats;
