import PropTypes from "prop-types";

export const HourCard = ({ temperature, hour }) => {
  const emoji = temperature > 20 ? "☀️" : "🌧️";
  return (
    <div className="flex flex-col justify-center items-center">
      {/* Temperature */}
      <span className="text-white text-sm font-medium mb-2">
        {temperature}°
      </span>
      {/* Weather Emoji */}
      <span className="text-3xl my-1">{emoji}</span>
      {/* Hour */}
      <span className="text-white text-sm font-medium mb-2">{hour}</span>
    </div>
  );
};

HourCard.propTypes = {
  temperature: PropTypes.number.isRequired,
  hour: PropTypes.string.isRequired,
};
