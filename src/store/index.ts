import { createStore, createEvent } from "effector";
import { fetchData } from "../api";
export const $weatherStore = createStore([]).on(
  fetchData.doneData,
  (_, repos) => repos
);

export const changeForecast = createEvent<string>();

export const $forecastStore = createStore("daily").on(
  changeForecast,
  (state, payload) => payload
);
