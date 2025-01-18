import { useState, useEffect } from "react";
import moment from "moment";
import { useTranslation } from "react-i18next";
import { gradientBgClasses } from "@utils/clx";
import {
  getTodayWeather,
  getWeekWeatherArray,
  isDayTime,
  getForecastColor,
} from "@utils";
import { bgColors } from "@constants";
import { openMateoService } from "@services/open-mateo.service";
import { NavBar } from "@components/NavBar/NavBar";
import { WeekForecast } from "@components/WeekForecast/WeekForecast";
import { WeatherCard } from "@components/WeatherCard/WeatherCard";
import { HourlyCard } from "@components/HourlyCard/HourlyCard";
import { SunCard } from "@components/SunCard/SunCard";
import { SearchPlaceInput } from "@components/SearchPlaceInput/SearchPlaceInput";

function App() {
  const { t, i18n } = useTranslation();
  const { getWeather } = openMateoService;
  const [todayWeather, setTodayWeather] = useState(null);
  const [weekWeather, setWeekWeather] = useState(null);
  const [currCity, setCurrCity] = useState(null);
  const [forecastColor, setForecastColor] = useState("fuchsia");

  const handleLocationSelect = ({ lat, lng }) => {
    getWeather(lat, lng).then((res) => {
      setTodayWeather(getTodayWeather(res));
      setWeekWeather(getWeekWeatherArray(res.daily));
      setForecastColor(getForecastColor(res));
    });
  };

  useEffect(() => {
    setTodayWeather(null);
    setWeekWeather(null);
    setCurrCity(null);
    setForecastColor(bgColors.default);
  }, [i18n.language]);

  return (
    <>
      <NavBar />
      <div className={gradientBgClasses(forecastColor)}>
        <div className="my-8">
          <p className="text-white text-4xl font-bold mb-8 lg:text-7xl">
            {currCity ? currCity : t("searchTitle")}
          </p>
          <SearchPlaceInput
            onLocationSelect={handleLocationSelect}
            setCurrCity={setCurrCity}
          />
        </div>
        {todayWeather && weekWeather && (
          <div className="flex flex-col justify-center items-center gap-4 lg:flex-row lg:gap-16">
            <div className="flex flex-col justify-center items-center gap-4">
              <WeatherCard
                rain={todayWeather.weather.rain}
                snow={todayWeather.weather.snowfall}
                cloudCover={todayWeather.weather.cloud_cover}
                temperature={Math.round(todayWeather.weather.temperature_2m)}
                maxTemp={todayWeather.maxTemp}
                minTemp={todayWeather.minTemp}
                isDayTime={isDayTime(
                  parseInt(moment().format("HH:mm").split(":")[0]),
                  parseInt(todayWeather.sunrise.split(":")[0]),
                  parseInt(todayWeather.sunset.split(":")[0])
                )}
              />
              <HourlyCard
                hourlyWeather={todayWeather.hours}
                sunrise={todayWeather.sunrise}
                sunset={todayWeather.sunset}
                forecastColor={forecastColor}
              />
            </div>
            <div className="flex flex-col justify-center items-center gap-6">
              <div>
                <p className="text-white text-xl font-bold">
                  {t("weekForecastTitle")}
                </p>
                <WeekForecast weekWeather={weekWeather} />
              </div>
              <div className="flex justify-between items-center min-w-[300px] sm:min-w-[500px]">
                <SunCard
                  text={t("sunriseTitle")}
                  hour={todayWeather.sunrise}
                  emoji={"☀️"}
                />
                <SunCard
                  text={t("sunsetTitle")}
                  hour={todayWeather.sunset}
                  emoji={"🌑"}
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default App;
