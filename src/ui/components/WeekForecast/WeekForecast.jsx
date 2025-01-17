import PropTypes from "prop-types";
import { WeekDayCard } from "../weekDayCard/weekDayCard";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

export const WeekForecast = ({ weekWeather }) => {
  const responsive = {
    0: { items: 4, itemsFit: "contain" },
    750: { items: 5, itemsFit: "contain" },
    950: { items: 5, itemsFit: "contain" },
    1200: { items: 5, itemsFit: "contain" },
  };
  const items = weekWeather.map((day, idx) => (
    <WeekDayCard
      key={idx}
      day={day.time}
      maxTemp={day.temperature_2m_max}
      minTemp={day.temperature_2m_min}
      precipitationSum={day.precipitation_sum}
      snowSum={day.snowfall_sum}
    />
  ));
  return (
    <div className="flex justify-center mt-4 max-w-[300px] sm:max-w-[450px]">
      <AliceCarousel
        disableButtonsControls
        mouseTracking
        items={items}
        responsive={responsive}
      />
    </div>
  );
};

WeekForecast.propTypes = {
  weekWeather: PropTypes.arrayOf(
    PropTypes.shape({
      time: PropTypes.string.isRequired,
      temperature_2m_max: PropTypes.number.isRequired,
      temperature_2m_min: PropTypes.number.isRequired,
      precipitation_sum: PropTypes.number,
      snowfall_sum: PropTypes.number,
    })
  ).isRequired,
};
