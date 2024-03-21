import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import SearchIcon from "@mui/icons-material/Search";
import { useEffect, useState } from "react";

export default function SearchBox({ update }) {
  const [city, setCity] = useState("lahore");
  const apiurl ="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
  const apikey = "5f8d758bbacdd93d02768483d3b5dfbf";
  
  async function getWeather () {
    try {
        const response = await fetch(`${apiurl}${city}&appid=${apikey}&units=metric`);
        const data = await response.json();
        const result = {
            city: data.name,
            temp: data.main.temp,
            tempMin: data.main.temp_min,
            tempMax: data.main.temp_max,
            humidity: data.main.humidity,
            feelsLike: data.main.feels_like,
            description: data.weather[0].description,
        }
        return result;

    }
    catch {
        return {city: 'City Not Found'}
    }

}

  function handleInput(e) {
    setCity(e.target.value);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setCity("");
    displayData()
  }

  async function displayData(){
    let result = await getWeather();
    update(result);
  }

  useEffect( () => {
    displayData()
  }, [])

  return (
    <>
      <div className="SearchBox">
        <h3>Weather update</h3>
        <form onSubmit={handleSubmit}>
          <TextField
            id="outlined-basic"
            label="city name"
            variant="outlined"
            required
            onChange={handleInput}
            value={city}
          />{" "}
          <br />
          <br />
          <Button variant="contained" type="submit" startIcon={<SearchIcon />}>
            Search
          </Button>
        </form>
      </div>
    </>
  );
}
