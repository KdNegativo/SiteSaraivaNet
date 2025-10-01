import heroGamer from "@/assets/hero-gamer.jpg";

const HeroCarousel = () => {
  return (
    <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl">
      {/* Single Image */}
      <img
        src={heroGamer}
        alt="Pessoa usando computador com internet SaraivaNet"
        className="w-full h-full object-cover"
      />
    </div>
  );
};

export default HeroCarousel;