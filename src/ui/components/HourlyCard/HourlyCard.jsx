import { HourCard } from "../HourCard/HourCard";
import { renderPrevButton, renderNextButton } from "@utils/carousel";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

export const HourlyCard = () => {
  const responsive = {
    0: { items: 3, itemsFit: "contain" },
    750: { items: 4, itemsFit: "contain" },
    950: { items: 4, itemsFit: "contain" },
    1200: { items: 4, itemsFit: "contain" },
  };

  const items = Array.from({ length: 24 }, (_, i) => (
    <HourCard key={i} temperature={10} hour={`${i}:00`} />
  ));

  return (
    <div className="text-white min-w-[300px] bg-gradient-to-b from-indigo-950 to-fuchsia-400 py-4 rounded-3xl shadow-lg">
      <div className="flex justify-between px-8">
        <p>Today</p>
        <p>January, 15</p>
      </div>
      <div className="w-full h-[1px] bg-white/30"></div>
      <div className="flex gap-4 px-2 justify-center mt-4 max-w-[300px] sm:max-w-[450px]">
        <AliceCarousel
          disableDotsControls
          mouseTracking
          infinite
          items={items}
          responsive={responsive}
          renderPrevButton={renderPrevButton}
          renderNextButton={renderNextButton}
        />
      </div>
    </div>
  );
};
