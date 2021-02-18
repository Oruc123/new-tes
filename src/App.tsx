import React, { useEffect } from "react";
import Home from "./components/Home";
import useLocation from "./hooks/useLocation";
import { fetchData } from "./api";
import { $forecastStore } from "./store";
import { useStore } from "effector-react";
function App() {
  const { location, error } = useLocation();
  const forecast = useStore($forecastStore);
  useEffect(() => {
    if (location.longitude && location.latitude) {
      fetchData({ location, forecast });
    }
  }, [location, error, forecast]);

  if (error) {
    return (
      <div className="alert alert-danger">
        Разрешите доступ к вашему местоположению, чтобы увидеть контент
      </div>
    );
  }
  return <Home />;
}

export default App;
