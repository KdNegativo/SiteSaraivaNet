
import { Phone } from "lucide-react";

const MobilePhoneButton = () => {
  return (
    <div className="flex justify-center px-4 pb-4">
      <a 
        href="tel:(89)99439-5789"
        className="flex items-center space-x-3 text-white bg-gradient-to-r from-orange-600 to-red-600 px-6 py-3 rounded-xl hover:from-orange-700 hover:to-red-700 transition-all duration-300 shadow-lg hover:scale-105 transform w-full max-w-xs justify-center"
      >
        <Phone className="w-5 h-5" />
        <span className="font-bold text-lg">(89) 99439-5789</span>
      </a>
    </div>
  );
};

export default MobilePhoneButton;
