document.addEventListener("DOMContentLoaded", () => {
  const urlParam = new URLSearchParams(window.location.search).get("city");
  const city = cities.find((city) => city.url === urlParam);
  const todayIndex = new Date().getDay();
  const cityDaily = weatherData[city.daily];

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
  const wetherIcon = cityHourly.hourly.weather_code[hourIndex];
  const unit = localStorage.getItem("unit");

  rightNowTitle.innerHTML = `${dayjs(new Date()).format("lll")}`;
  rightNowIcon.src = getWeatherIconUrl(wetherIcon);
  rightNowIcon.alt = wetherIcon;
  rightNowTemp.innerHTML = getTemperature(
    cityHourly.hourly.temperature_2m[hourIndex],
    unit
  );
  rightNowWind.innerHTML = `${cityHourly.hourly.wind_speed_10m[hourIndex]} ${cityHourly.hourly_units.wind_speed_10m}`;

  //Today's weather
  const maxTemp = document.getElementById("max-temp");
  const minTemp = document.getElementById("min-temp");
  const sunrise = document.getElementById("sunrise");
  const sunset = document.getElementById("sunset");
  const windSpeed = document.getElementById("wind-speed");

  maxTemp.innerHTML = `${cityDaily.daily.temperature_2m_max[todayIndex]} ${cityDaily.daily_units.temperature_2m_max}`;
  minTemp.innerHTML = `${cityDaily.daily.temperature_2m_min[todayIndex]} ${cityDaily.daily_units.temperature_2m_min}`;
  sunrise.innerHTML = getTime(cityDaily.daily.sunrise[todayIndex]);
  sunset.innerHTML = getTime(cityDaily.daily.sunset[todayIndex]);
  windSpeed.innerHTML = `${cityDaily.daily.wind_speed_10m_max[todayIndex]} ${cityDaily.daily_units.wind_speed_10m_max}`;

  //Week weather
  const weekWeather = document.getElementById("week-weather");

  for (let i = 0; i < 7; i++) {
    const dayIndex = (todayIndex + i) % 7;
    const dayName = dayjs(new Date()).add(i, "day").format("ddd");
    const weatherCard = createWeekWeatherCard(
      cityDaily,
      dayIndex,
      dayName,
      unit
    );
    weekWeather.appendChild(weatherCard);
  }
});

const createWeekWeatherCard = (cityDaily, dayIndex, title, unit) => {
  const weatherIcon = cityDaily.daily.weather_code[dayIndex];
  const weekWeatherCard = document.createElement("div");

  weekWeatherCard.classList.add("column");
  weekWeatherCard.innerHTML = `
    <section class="card has-text-centered has-background-grey-darker">
        <p class="card-header-title is-size-5 is-centered">${title}</p>
      <div class="card-image is-flex is-justify-content-center">
        <figure class="image is-48x48">
          <img src=${getWeatherIconUrl(weatherIcon)} alt=${weatherIcon} />
        </figure>
      </div>
      <article class="card-content is-flex is-justify-content-space-between">
        <p class="is-size-6 has-text-white has-text-weight-bold">
          ${getTemperature(cityDaily.daily.temperature_2m_min[dayIndex], unit)}
        </p>
        <p class="is-size-6 has-text-white has-text-weight-bold">
          ${getTemperature(cityDaily.daily.temperature_2m_max[dayIndex], unit)}
        </p>
      </article>
    </section>
  `;
  return weekWeatherCard;
};
