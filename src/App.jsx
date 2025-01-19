import { useState, useEffect } from "react";
import { useUser } from "@context/UserContext";
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
import { openMeteoService } from "@services/open-meteo.service";
import { NavBar } from "@components/NavBar/NavBar";
import { WeekForecast } from "@components/WeekForecast/WeekForecast";
import { WeatherCard } from "@components/WeatherCard/WeatherCard";
import { HourlyCard } from "@components/HourlyCard/HourlyCard";
import { SunCard } from "@components/SunCard/SunCard";
import { SearchPlaceInput } from "@components/SearchPlaceInput/SearchPlaceInput";
import { FavoritesCitiesModal } from "@components/FavoritesCitiesModal/FavoritesCitiesModal";

function App() {
  const { user, addFavorite, removeFavorite } = useUser();
  const { t, i18n } = useTranslation();
  const { getWeather } = openMeteoService;
  const [todayWeather, setTodayWeather] = useState(null);
  const [weekWeather, setWeekWeather] = useState(null);
  const [currCity, setCurrCity] = useState(null);
  const [forecastColor, setForecastColor] = useState("fuchsia");
  const [isFavoritesModalOpen, setIsFavoritesModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleLocationSelect = ({ lat, lng }) => {
    setIsLoading(true);
    getWeather(lat, lng).then((res) => {
      setTodayWeather(getTodayWeather(res));
      setWeekWeather(getWeekWeatherArray(res.daily));
      setForecastColor(getForecastColor(res));
      setIsLoading(false);
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
      <NavBar setIsFavoritesModalOpen={setIsFavoritesModalOpen} />
      <div className={gradientBgClasses(forecastColor)}>
        <div className="my-8">
          <p className="flex justify-center items-center text-white text-3xl font-bold mb-8 lg:text-7xl">
            {isLoading ? (
              <span className="flex justify-center items-center gap-2">
                <span className="animate-bounce">.</span>
                <span className="animate-bounce delay-100">.</span>
                <span className="animate-bounce delay-200">.</span>
              </span>
            ) : currCity ? (
              currCity.name
            ) : (
              t("searchTitle")
            )}
            {currCity && !isLoading && (
              <button
                onClick={() => {
                  user?.favorite?.includes(currCity.id)
                    ? removeFavorite(currCity.id)
                    : addFavorite(currCity.id);
                }}
                className="ml-4 text-3xl sm:text-6xl hover:scale-110 transition-transform"
              >
                {user?.favorite?.includes(currCity.id) ? "⭐" : "☆"}
              </button>
            )}
          </p>

          <SearchPlaceInput
            onLocationSelect={handleLocationSelect}
            currCity={currCity}
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
      <FavoritesCitiesModal
        isOpen={isFavoritesModalOpen}
        onClose={() => setIsFavoritesModalOpen(false)}
        setCurrCity={setCurrCity}
        handleLocationSelect={handleLocationSelect}
      />
    </>
  );
}

export default App;
