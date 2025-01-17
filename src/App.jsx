import { useEffect, useState } from "react";
import { getTodayWeather, getWeekWeatherArray } from "@utils";
import { openMateoService } from "@services/open-mateo.service";
import { NavBar } from "@components/NavBar/NavBar";
import { WeekForecast } from "@components/WeekForecast/WeekForecast";
import { WeatherCard } from "@components/WeatherCard/WeatherCard";
import { HourlyCard } from "@components/HourlyCard/HourlyCard";
import { SunCard } from "@components/SunCard/SunCard";

function App() {
  const [todayWeather, setTodayWeather] = useState(null);
  const [weekWeather, setWeekWeather] = useState(null);
  const { getWeather } = openMateoService;

  useEffect(() => {
    getWeather(52.52, 13.41).then((res) => {
      console.log(res);
      setTodayWeather(getTodayWeather(res));
      setWeekWeather(getWeekWeatherArray(res.daily));
    });
  }, [getWeather]);

  return (
    <>
      <NavBar />
      <div className="p-10 flex flex-col justify-center items-center text-center bg-gradient-to-b from-indigo-950 to-fuchsia-400 min-h-screen">
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
              />
              <HourlyCard />
            </div>
            <div className="flex flex-col justify-center items-center gap-6">
              <div>
                <p className="text-white text-xl font-bold">7-Days Forecast</p>
                <WeekForecast weekWeather={weekWeather} />
              </div>
              <div className="flex justify-center items-center gap-4">
                <SunCard
                  text={"Sunrise"}
                  hour={todayWeather.sunrise}
                  emoji={"☀️"}
                />
                <SunCard
                  text={"Sunset"}
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
