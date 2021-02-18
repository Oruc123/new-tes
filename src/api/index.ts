import { createEffect } from "effector";
import { LocationType } from "../types";
const API_KEY = "55ff47bd15ca38c679f0daf767c97db0";
const BASE_URL = "https://api.openweathermap.org/data/2.5/onecall";

export const fetchData = createEffect(
  async ({
    location,
    forecast,
  }: {
    location: LocationType;
    forecast: string;
  }) => {
    const API_URL = `${BASE_URL}?lat=${location.latitude}&lon=${location.longitude}&exclude=${forecast}&appid=${API_KEY}`;
    const req = await fetch(API_URL);
    return req.json();
  }
);
