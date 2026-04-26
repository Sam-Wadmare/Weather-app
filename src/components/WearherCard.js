

const WeatherCard = ({ data }) => {
  return (
    <div>
      <h2>{data.name}</h2>
      <p>🌡 Temp: {data.main.temp}°C</p>
      <p>💧 Humidity: {data.main.humidity}%</p>
      <p>☁ Condition: {data.weather[0].main}</p>

      <img
        src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
        alt="weather icon"
      />
    </div>
  );
};

export default WeatherCard;
