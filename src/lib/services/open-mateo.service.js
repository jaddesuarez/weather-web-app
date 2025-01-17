import { fetch } from "@configs/axios.config";

export const openMateoService = {
  getWeather: async (lat, lng) => {
    try {
      const res = await fetch.get(
        `forecast?latitude=${lat}&longitude=${lng}&current=temperature_2m,rain,snowfall,cloud_cover&hourly=temperature_2m,rain,snowfall,cloud_cover&daily=temperature_2m_max,temperature_2m_min,sunrise,sunset,precipitation_sum,snowfall_sum`
      );
      return res.data;
    } catch (error) {
      console.error("GET WEATHER ERROR =>", error);
    }
  },
};
