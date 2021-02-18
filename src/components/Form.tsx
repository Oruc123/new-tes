import { memo } from "react";
import { useStore } from "effector-react";
import { changeForecast } from "../store";
import { $forecastStore } from "../store";
const Form = memo(() => {
  const forecast: string = useStore($forecastStore);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    changeForecast(event.target.value);
  };
  return (
    <form>
      <div className="form-check">
        <input
          className="form-check-input"
          type="radio"
          name="forecast"
          id="daily"
          value="daily"
          onChange={handleChange}
          checked={forecast === "daily"}
        />
        <label htmlFor="daily" className="form-check-label">
          Hourly forecast for 48 hours
        </label>
      </div>
      <div className="form-check">
        <input
          checked={forecast === "hourly"}
          onChange={handleChange}
          className="form-check-input"
          type="radio"
          name="forecast"
          id="hourly"
          value="hourly"
        />
        <label htmlFor="hourly" className="form-check-label">
          Daily forecast for 7 days
        </label>
      </div>
    </form>
  );
});

export default Form;
