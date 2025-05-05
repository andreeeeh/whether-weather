const updateCityName = (name) => {
  const cityName = document.getElementById("city-name");
  cityName.innerHTML = name;
};

const updateCurrentWeather = (title, iconUrl, iconAlt, temp, wind) => {
  const rightNowTitle = document.getElementById("right-now");
  const rightNowIcon = document.getElementById("right-now-icon");
  const rightNowTemp = document.getElementById("right-now-temp");
  const rightNowWind = document.getElementById("right-now-wind");

  rightNowTitle.innerHTML = title;
  rightNowIcon.src = iconUrl;
  rightNowIcon.alt = iconAlt;
  rightNowTemp.innerHTML = temp;
  rightNowWind.innerHTML = wind;
};

const updateTodayWeather = (maxT, minT, sunriseT, sunsetT, windS) => {
  const maxTemp = document.getElementById("max-temp");
  const minTemp = document.getElementById("min-temp");
  const sunrise = document.getElementById("sunrise");
  const sunset = document.getElementById("sunset");
  const windSpeed = document.getElementById("wind-speed");

  maxTemp.innerHTML = maxT;
  minTemp.innerHTML = minT;
  sunrise.innerHTML = sunriseT;
  sunset.innerHTML = sunsetT;
  windSpeed.innerHTML = windS;
};

const createWeekDayrCard = (cityDaily, dayIndex, title) => {
  const weatherIcon = cityDaily.weather_code[dayIndex];
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
          ${getTemperature(cityDaily.temperature_2m_min[dayIndex])}
        </p>
        <p class="is-size-6 has-text-white has-text-weight-bold">
          ${getTemperature(cityDaily.temperature_2m_max[dayIndex])}
        </p>
      </article>
    </section>
  `;
  return weekWeatherCard;
};

const renderWeekDayWeather = (weekDayWeather) => {
  const weekWeather = document.getElementById("week-weather");
  weekWeather.appendChild(weekDayWeather);
};
