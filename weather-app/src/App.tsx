import { useState } from "react";
import SearchBar from "./components/SearchBar";
import WeatherDisplay from "./components/WeatherDisplay";

function App() {
  const [weatherData, setweatherData] = useState(null);

  const fetchWeather = async (city: string) => {
    const apiKey = "88f0a844d7f17742e9e3f2dc18d1ef45";
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`
    );
    const data = await response.json();
    setweatherData(data);
  };
  return (
    <div className="flex items-center justify-center min-h-screen bg-slate-600">
      <div className="bg-gradient-to-r from-cyan-400 to-fuchsia-600 shadow-md rounded-lg p-7 m-2 max-w-md w-full">
        <h1 className="text-4xl text-center font-bold text-white">
          Weather Report
        </h1>
        <SearchBar onSearch={fetchWeather} />
        <WeatherDisplay weatherData={weatherData} />
      </div>
    </div>
  );
}

export default App;
