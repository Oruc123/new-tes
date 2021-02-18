import { useState, useEffect } from "react";
import { LocationType } from "../types";
const useLocation = () => {
  const [location, setLocation] = useState<LocationType>({
    latitude: "",
    longitude: "",
  });
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    const getCurrentLocationData = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            let latitude = position.coords.latitude;
            let longitude = position.coords.longitude;
            setLocation({ latitude, longitude });
          },
          () => setError(true)
        );
      }
    };
    getCurrentLocationData();
  }, [error]);

  return { location, error };
};

export default useLocation;
