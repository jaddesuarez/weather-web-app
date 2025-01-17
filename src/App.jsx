import { useEffect, useState } from "react";
import { getTodayWeather, getWeekWeatherArray } from "@utils";
import { openMateoService } from "@services/open-mateo.service";
import { NavBar } from "@components/NavBar/NavBar";
import { WeekDayCard } from "@components/weekDayCard/weekDayCard";

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
      <div className="p-10 text-center bg-gradient-to-b from-indigo-950 to-fuchsia-400 min-h-screen">
        <div className="flex gap-2 justify-center mt-4">
          {weekWeather?.map((day, idx) => (
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
      </div>
    </>
  );
}

export default App;
