import { fetch } from "@configs/axios.config";

export const nominatimService = {
  getCoordinates: async (query, language) => {
    const response = await fetch(
      `https://nominatim.openstreetmap.org/search?format=json&q=${query}&limit=5&accept-language=${language}`
    );
    return response.data;
  },

  getCityById: async (osmId, language) => {
    const response = await fetch(
      `https://nominatim.openstreetmap.org/lookup?osm_ids=${osmId}&format=json&extratags=1&accept-language=${language}`
    );
    return response.data;
  },
};
