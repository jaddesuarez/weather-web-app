import { fetch } from "@configs/axios.config";

export const openMateoService = {
  getWeather: async (lat, lng) => {
    try {
      const res = await fetch.get(
        `forecast?latitude=${lat}&longitude=${lng}&current=precipitation&hourly=temperature_2m`
      );
      return res.data;
    } catch (error) {
      console.error("GET WEATHER ERROR =>", error);
    }
  },
};
