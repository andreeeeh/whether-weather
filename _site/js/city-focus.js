document.addEventListener("DOMContentLoaded", () => {
  const urlParam = new URLSearchParams(window.location.search).get("city");
  const city = cities.find((city) => city.url === urlParam);
  const todayIndex = new Date().getDay();

  //City name
  const cityName = document.getElementById("city-name");

  cityName.innerHTML = city.name;

  //Current weather
  const rightNowTitle = document.getElementById("right-now");
  const rightNowIcon = document.getElementById("right-now-icon");
  const rightNowTemp = document.getElementById("right-now-temp");
  const rightNowWind = document.getElementById("right-now-wind");
  const cityHourly = weatherData[city.hourly];
  const hourIndex = new Date().getHours();

  rightNowTitle.innerHTML = `${dayjs(new Date()).format("lll")}`;
  rightNowIcon.src = `/images/${getWeatherIcon(
    cityHourly.hourly.weather_code[hourIndex]
  )}.png`;
  rightNowTemp.innerHTML = `${cityHourly.hourly.temperature_2m[hourIndex]} ${cityHourly.hourly_units.temperature_2m}`;
  rightNowWind.innerHTML = `${cityHourly.hourly.wind_speed_10m[hourIndex]} ${cityHourly.hourly_units.wind_speed_10m}`;

  //Today's weather
  const maxTemp = document.getElementById("max-temp");
  const minTemp = document.getElementById("min-temp");
  const sunrise = document.getElementById("sunrise");
  const sunset = document.getElementById("sunset");
  const windSpeed = document.getElementById("wind-speed");
  const cityDaily = weatherData[city.daily];

  maxTemp.innerHTML = `${cityDaily.daily.temperature_2m_max[todayIndex]} ${cityDaily.daily_units.temperature_2m_max}`;
  minTemp.innerHTML = `${cityDaily.daily.temperature_2m_min[todayIndex]} ${cityDaily.daily_units.temperature_2m_min}`;
  sunrise.innerHTML = `${cityDaily.daily.sunrise[todayIndex].split("T")[2]}`;
  sunset.innerHTML = `${cityDaily.daily.sunset[todayIndex].split("T")[2]}`;
  windSpeed.innerHTML = `${cityDaily.daily.wind_speed_10m_max[todayIndex]} ${cityDaily.daily_units.wind_speed_10m_max}`;

  //Week weather
  const weekWeather = document.getElementById("week-weather");

  for (let i = 0; i < 7; i++) {
    const dayIndex = (todayIndex + i) % 7;
    const dayName = dayjs(new Date()).add(i, "day").format("ddd");
    const weatherCard = createWeekWeatherCard(city, dayIndex, dayName);
    weekWeather.appendChild(weatherCard);
  }
});

const createWeekWeatherCard = (city, dayIndex, title) => {
  const cityDaily = weatherData[city.daily];
  const weatherIcon = getWeatherIcon(cityDaily.daily.weather_code[dayIndex]);
  const weekWeatherCard = document.createElement("div");

  weekWeatherCard.classList.add("column");
  weekWeatherCard.innerHTML = `
    <section class="card has-text-centered">
      <header class="card-header">
        <p class="card-header-title is-size-5 is-centered">${title}</p>
      </header>
      <div class="card-image is-flex is-justify-content-center">
        <figure class="image is-48x48">
          <img src="/images/${weatherIcon}.png" alt="${weatherIcon}"/>
        </figure>
      </div>
      <article class="card-content is-flex is-justify-content-space-between">
        <p class="is-size-6 has-text-white has-text-weight-bold">
          ${cityDaily.daily.temperature_2m_min[dayIndex]}
          ${cityDaily.daily_units.temperature_2m_min}
        </p>
        <p class="is-size-6 has-text-white has-text-weight-bold">
          ${cityDaily.daily.temperature_2m_max[dayIndex]}
          ${cityDaily.daily_units.temperature_2m_max}
        </p>
      </article>
    </section>
  `;
  return weekWeatherCard;
};
