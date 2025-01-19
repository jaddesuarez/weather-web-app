import { fetch } from "@configs/axios.config";

export const openMeteoService = {
  getWeather: async (lat, lng) => {
    try {
      const res = await fetch.get(
        `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lng}&current=temperature_2m,rain,snowfall,cloud_cover&hourly=temperature_2m,rain,snowfall,cloud_cover&daily=temperature_2m_max,temperature_2m_min,sunrise,sunset,precipitation_sum,snowfall_sum&timezone=auto`
      );
      return res.data;
    } catch (error) {
      console.error("GET WEATHER ERROR =>", error);
    }
  },
};
