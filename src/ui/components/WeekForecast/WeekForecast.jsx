import PropTypes from "prop-types";
import { WeekDayCard } from "../weekDayCard/weekDayCard";

export const WeekForecast = ({ weekWeather }) => {
  return (
    <div className="flex justify-center flex-wrap gap-3 mt-4 max-w-[300px] sm:max-w-[500px]">
      {weekWeather.map((day, idx) => (
        <WeekDayCard
          key={idx}
          day={day.time}
          maxTemp={day.temperature_2m_max}
          minTemp={day.temperature_2m_min}
          precipitationSum={day.precipitation_sum}
          snowSum={day.snowfall_sum}
        />
      ))}
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
