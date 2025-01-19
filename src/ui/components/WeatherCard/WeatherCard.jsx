import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";

export const WeatherCard = ({
  rain,
  snow,
  cloudCover,
  temperature,
  maxTemp,
  minTemp,
  isDayTime,
}) => {
  const { t } = useTranslation();
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
          {snow
            ? t("common.snowy")
            : rain
            ? t("common.rainy")
            : cloudCover > 50
            ? t("common.cloudy")
            : isDayTime
            ? t("common.sunny")
            : t("common.clear")}
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
