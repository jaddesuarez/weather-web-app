import moment from "moment";
import { HourCard } from "../HourCard/HourCard";
import { renderPrevButton, renderNextButton } from "@utils/carousel";
import { getHour, isDayTime } from "@utils";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import PropTypes from "prop-types";

export const HourlyCard = ({ hourlyWeather, sunrise, sunset }) => {
  const hoursResponsive = {
    0: { items: 3, itemsFit: "contain" },
    750: { items: 4, itemsFit: "contain" },
    950: { items: 4, itemsFit: "contain" },
    1200: { items: 4, itemsFit: "contain" },
  };

  const hoursItems = hourlyWeather.time.map((hour, idx) => {
    return (
      <HourCard
        key={idx}
        temperature={Math.round(hourlyWeather.temperature_2m[idx])}
        hour={getHour(hour)}
        rain={hourlyWeather.rain[idx]}
        snow={hourlyWeather.snowfall[idx]}
        cloudCover={hourlyWeather.cloud_cover[idx]}
        isDayTime={isDayTime(
          parseInt(hour.split("T")[1].split(":")[0]),
          parseInt(sunrise.split(":")[0]),
          parseInt(sunset.split(":")[0])
        )}
      />
    );
  });

  return (
    <div className="text-white min-w-[300px] bg-gradient-to-b from-indigo-950 to-fuchsia-400 py-4 rounded-3xl shadow-lg">
      <div className="flex justify-between px-8">
        <p>Today</p>
        <p>{moment().format("MMMM, D")}</p>
      </div>
      <div className="w-full h-[1px] bg-white/30"></div>
      <div className="flex gap-4 px-2 justify-center mt-4 max-w-[300px] sm:max-w-[450px]">
        <AliceCarousel
          disableDotsControls
          mouseTracking
          infinite
          items={hoursItems}
          responsive={hoursResponsive}
          renderPrevButton={renderPrevButton}
          renderNextButton={renderNextButton}
        />
      </div>
    </div>
  );
};

HourlyCard.propTypes = {
  hourlyWeather: PropTypes.shape({
    time: PropTypes.arrayOf(PropTypes.string).isRequired,
    temperature_2m: PropTypes.arrayOf(PropTypes.number).isRequired,
    rain: PropTypes.arrayOf(PropTypes.number).isRequired,
    snowfall: PropTypes.arrayOf(PropTypes.number).isRequired,
    cloud_cover: PropTypes.arrayOf(PropTypes.number).isRequired,
  }).isRequired,
  sunrise: PropTypes.string.isRequired,
  sunset: PropTypes.string.isRequired,
};
