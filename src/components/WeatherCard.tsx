import React from "react";
type WeatherCardType = {
  description: string;
  main: string;
  icon: string;
};
const WeatherCard: React.FC<WeatherCardType> = ({
  main,
  description,
  icon,
}) => {
  return (
    <div className="col-md-4 my-2">
      <div className="card">
        <ul className="list-group">
          <li className="list-group-item"> {main}</li>
          <li className="list-group-item"> {description}</li>
          <li className="list-group-item">
            <img
              src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
              alt={main}
            />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default WeatherCard;
