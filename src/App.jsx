import { useEffect, useState } from "react";
import moment from "moment";
import { NavBar } from "./ui/components/NavBar/NavBar";
import { openMateoService } from "./lib/services/open-mateo.service";
import { WeekDayCard } from "./ui/components/weekDayCard/weekDayCard";

function App() {
  const [todayWeather, setTodayWeather] = useState(null);
  const [weekWeather, setWeekWeather] = useState(null);
  const { getWeather } = openMateoService;
  useEffect(() => {
    getWeather(52.52, 13.41).then((res) => {
      console.log(res);
      setTodayWeather({
        timezone: res.timezone,
        weather: res.current,
        hours: res.hourly,
      });

      const weekWeatherArray = res.daily.time.map((day, idx) => {
        return {
          time: moment(day).format("ddd"),
          precipitationSum: res.daily.precipitation_sum[idx],
          snowfall_sum: res.daily.snowfall_sum[idx],
          temperature_2m_max: Math.round(res.daily.temperature_2m_max[idx]),
          temperature_2m_min: Math.round(res.daily.temperature_2m_min[idx]),
        };
      });
      setWeekWeather(weekWeatherArray);
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
