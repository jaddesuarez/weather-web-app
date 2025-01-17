import axios from "axios";

const baseURL = "https://api.open-meteo.com/v1";

export const fetch = axios.create({ baseURL });
