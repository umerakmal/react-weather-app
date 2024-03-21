import SearchBox from "./SearchBox";
import InfoCard from "./InfoCard";
import { useState } from "react";

export default function WeatherApp() {
  const [weather, setWeather] = useState({});

  function newWeather(result) {
    setWeather(result);
  }

  return (
    <div className="weatherContainer">
      <div className="WeatherApp">
        <SearchBox update={newWeather} />
        <InfoCard result={weather} />
      </div>
    </div>
  );
}
