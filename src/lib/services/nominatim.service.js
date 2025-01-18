import { fetch } from "@configs/axios.config";

export const nominatimService = {
  getCoordinates: async (query) => {
    try {
      const res = await fetch.get(
        `https://nominatim.openstreetmap.org/search?format=json&q=${query}&limit=5`
      );
      return res.data;
    } catch (error) {
      console.error("GET COORDINATES ERROR =>", error);
    }
  },
};
