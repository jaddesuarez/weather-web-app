import moment from "moment";
import { i18n } from "@configs/i18n.config";

export const getTodayWeather = (weather) => {
  return {
    timezone: weather.timezone,
    weather: weather.current,
    hours: weather.hourly,
    sunrise: getHour(weather.daily.sunrise[0]),
    sunset: getHour(weather.daily.sunset[0]),
    maxTemp: Math.round(weather.daily.temperature_2m_max[0]),
    minTemp: Math.round(weather.daily.temperature_2m_min[0]),
  };
};

export const getWeekWeatherArray = (daily) => {
  const weekWeatherArray = daily.time.map((day, idx) => {
    return {
      time: moment(day).format("ddd"),
      precipitationSum: daily.precipitation_sum[idx],
      snowfall_sum: daily.snowfall_sum[idx],
      temperature_2m_max: Math.round(daily.temperature_2m_max[idx]),
      temperature_2m_min: Math.round(daily.temperature_2m_min[idx]),
    };
  });
  return weekWeatherArray;
};

export const getHour = (time) => {
  return moment(time).format("HH:mm");
};

export const getLanguageIcon = (lng) => {
  return {
    en: "🇺🇸",
    es: "🇪🇸",
    pt: "🇧🇷",
  }[lng];
};

export const changeLanguage = (lng) => {
  i18n.changeLanguage(lng);
};

export const isDayTime = (currentHour, sunrise, sunset) => {
  return currentHour >= sunrise && currentHour <= sunset;
};
