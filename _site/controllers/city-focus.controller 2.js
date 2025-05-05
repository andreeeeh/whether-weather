document.addEventListener("DOMContentLoaded", () => {
  const urlParam = new URLSearchParams(window.location.search).get("city");
  const city = getCity(urlParam);
  const todayIndex = new Date().getDay();
  const hourIndex = new Date().getHours();
  const cityDaily = weatherData[city.daily].daily;
  const cityHourly = weatherData[city.hourly].hourly;

  //Update city name
  updateCityName(city.name);

  //Current weather
  const title = dayjs(new Date()).format("lll");
  const wetherIcon = cityHourly.weather_code[hourIndex];
  const iconUrl = getWeatherIconUrl(wetherIcon);
  const temperature = getTemperature(cityHourly.temperature_2m[hourIndex]);
  const wind = cityHourly.wind_speed_10m[hourIndex] + "Km/h";
  updateCurrentWeather(title, iconUrl, wetherIcon, temperature, wind);

  //Update today's weather
  const maxTemp = getTemperature(cityDaily.temperature_2m_max[todayIndex]);
  const minTemp = getTemperature(cityDaily.temperature_2m_min[todayIndex]);
  const sunrise = getTime(cityDaily.sunrise[todayIndex]);
  const sunset = getTime(cityDaily.sunset[todayIndex]);
  const windSpeed = cityDaily.wind_speed_10m_max[todayIndex] + "Km/h";
  updateTodayWeather(maxTemp, minTemp, sunrise, sunset, windSpeed);

  //Update weekly weather
  for (let i = 0; i < 7; i++) {
    const dayIndex = (todayIndex + i) % 7;
    const dayName = dayjs(new Date()).add(i, "day").format("ddd");
    const weatherCard = createWeekDayrCard(cityDaily, dayIndex, dayName);
    renderWeekDayWeather(weatherCard);
  }
});
