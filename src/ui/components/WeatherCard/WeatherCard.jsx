import PropTypes from "prop-types";

export const WeatherCard = ({
  rain,
  snow,
  cloudCover,
  temperature,
  maxTemp,
  minTemp,
  isDayTime,
}) => {
  const emoji = snow
    ? "❄️"
    : rain
    ? "🌧️"
    : cloudCover > 50
    ? "☁️"
    : isDayTime
    ? "☀️"
    : "🌑";

  return (
    <div className="px-3 text-white">
      <p className="my-1 text-8xl sm:mr-4">{emoji}</p>
      <div>
        <p className="text-3xl font-bold p-2">{temperature}°</p>
        <p className="text-sm">
          {snow ? "Snow" : rain ? "Rain" : cloudCover > 50 ? "Cloudy" : "Sunny"}
        </p>
        <p className="text-sm">
          Max: {maxTemp}° | Min: {minTemp}°
        </p>
      </div>
    </div>
  );
};

WeatherCard.propTypes = {
  rain: PropTypes.number.isRequired,
  snow: PropTypes.number.isRequired,
  cloudCover: PropTypes.number.isRequired,
  temperature: PropTypes.number.isRequired,
  maxTemp: PropTypes.number.isRequired,
  minTemp: PropTypes.number.isRequired,
  isDayTime: PropTypes.bool.isRequired,
};
