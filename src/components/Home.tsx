import { useStore } from "effector-react";
import { memo } from "react";
import { $weatherStore, $forecastStore } from "../store";
import Form from "./Form";
import WeatherCard from "./WeatherCard";
const Home = memo(() => {
  const forecast: string = useStore($forecastStore);
  const weatherData: any = useStore($weatherStore);
  const index = forecast === "hourly" ? "daily" : "hourly";
  const weatherList = weatherData[index];

  return (
    <div className="container my-3">
      <Form />
      <div className="row">
        {weatherList &&
          weatherList.map((el: any, ind: number) => {
            console.log(el);

            return <WeatherCard key={ind} {...el.weather[0]} />;
          })}
      </div>
    </div>
  );
});

export default Home;
