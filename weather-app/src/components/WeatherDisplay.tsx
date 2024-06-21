import React from "react";
import { MdWaves } from "react-icons/md";
import { FaWind } from "react-icons/fa6";

interface WeatherData {
  name: string;
  main?: {
    temp: number;
    humidity: number;
  };
  wind?: {
    speed: number;
  };
}

interface WeatherDisplayProps {
  weatherData: WeatherData | null;
}

const WeatherDisplay: React.FC<WeatherDisplayProps> = ({ weatherData }) => {
  if (!weatherData) {
    return null;
  }

  const { name, main, wind } = weatherData;

  return (
    <div className="mt-10 text-center">
      <h2 className="text-2xl font-bold text-white">{name}</h2>

      {main ? (
        <p className="text-2xl font-bold text-white  mt-3">{main.temp}°C</p>
      ) : (
        <p className="text-xl text-red-500">Temperature data not available</p>
      )}
      <div className="flex">
        {main ? (
          <p className="text-lg flex ">
            <MdWaves className="mt-5 ml-3 size-11 text-white" />
            <div className="mt-5 ml-1 text-white ">
              {main.humidity}%<h6>Humidity</h6>
            </div>
          </p>
        ) : (
          <p className="text-lg text-red-500">
            Weather condition not available
          </p>
        )}
        {wind ? (
          <p className="text-lg flex ml-4 ">
            <FaWind className="mt-5 ml-3 size-11 text-white" />
            <div className="mt-5 ml-1 text-white ">
              {wind.speed}%<h6>Wind speed</h6>
            </div>
          </p>
        ) : (
          <p className="text-lg text-red-500">
            Weather condition not available
          </p>
        )}
      </div>
    </div>
  );
};

export default WeatherDisplay;
