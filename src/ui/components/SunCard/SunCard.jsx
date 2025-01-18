import PropTypes from "prop-types";

export const SunCard = ({ text, hour, emoji }) => {
  return (
    <div className="flex flex-col justify-center items-center bg-white/10 backdrop-blur-sm px-6 py-4 rounded-3xl border border-white/20 shadow-lg w-[140px] sm:w-[230px]">
      <div className="flex flex-col items-center gap-2">
        <div className="flex items-center gap-2">
          <span className="text-2xl">{emoji}</span>
          <span className="text-white text-md">{text}</span>
        </div>
        <span className="text-white text-2xl font-bold">{hour}</span>
      </div>
    </div>
  );
};

SunCard.propTypes = {
  text: PropTypes.string.isRequired,
  hour: PropTypes.string.isRequired,
  emoji: PropTypes.string.isRequired,
};
