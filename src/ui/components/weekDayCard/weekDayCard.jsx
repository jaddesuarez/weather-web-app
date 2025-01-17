import PropTypes from "prop-types";

export const WeekDayCard = ({
  day,
  maxTemp,
  minTemp,
  precipitationSum,
  snowSum,
}) => {
  const emoji = precipitationSum ? "🌧️" : snowSum ? "❄️" : "☀️";
  return (
    <div className="flex flex-col items-center bg-white/10 backdrop-blur-sm px-3 py-4 rounded-full min-w-[30px] hover:bg-white/20">
      {/* Week Day */}
      <span className="text-white text-sm font-medium mb-2">{day}</span>

      {/* Weather Emoji */}
      <span className="text-3xl my-1">{emoji}</span>

      {/* Temperature Range */}
      <div className="flex flex-col items-center gap-1 mt-2">
        <div className="flex items-center gap-1">
          <span className="text-white/60 text-xs">↑</span>
          <span className="text-white font-bold text-xs">{maxTemp}°C</span>
        </div>
        <div className="w-5 h-[1px] bg-white/30"></div>
        <div className="flex items-center gap-1">
          <span className="text-white/60 text-xs">↓</span>
          <span className="text-white/60 text-xs">{minTemp}°C</span>
        </div>
      </div>
    </div>
  );
};

WeekDayCard.propTypes = {
  day: PropTypes.string.isRequired,
  maxTemp: PropTypes.number.isRequired,
  minTemp: PropTypes.number.isRequired,
  precipitationSum: PropTypes.number,
  snowSum: PropTypes.number,
};
