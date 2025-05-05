document.addEventListener("DOMContentLoaded", () => {
  const urlParam = new URLSearchParams(window.location.search).get("favorites");
  const dashboardTitle = document.getElementById("dashboard-title");
  const card = document.getElementById("dashboard");
  let citiesList = cities;
  const favoriteCitiesStorage =
    JSON.parse(localStorage.getItem("favoriteCities")) || [];

  // Set title
  if (favoriteCitiesStorage.length && urlParam === "true") {
    dashboardTitle.innerHTML = `Favorite Cities`;
    citiesList = citiesList.filter((city) =>
      favoriteCitiesStorage.includes(city.name)
    );
  } else {
    dashboardTitle.innerHTML = `Weather Dashboard`;
  }

  // Set cities weather cards
  citiesList.forEach((city) => {
    const cardElement = createWeatherCard(city);
    card.appendChild(cardElement);
  });
});

const createWeatherCard = (city) => {
  const cityDaily = weatherData[city.daily];
  const today = new Date().getDay();
  const weatherIcon = cityDaily.daily.weather_code[today];
  const card = document.createElement("section");
  const unit = localStorage.getItem("unit");

  card.classList.add("column", "is-4");
  card.innerHTML = `
  <div class="card has-text-centered">
    <a href="/city-focus/?city=${city.url}">
    <header class="card-header">
      <p class="card-header-title is-size-4 is-centered">${city.name}</p>
    </header>
    <div class="card-image is-flex is-justify-content-center">
      <figure class="image is-96x96">
        <img src=${getWeatherIconUrl(weatherIcon)} alt="${weatherIcon}"/>
      </figure>
    </div>
    <article class="card-content is-flex is-justify-content-space-between">
      <p class="is-size-5 has-text-white has-text-weight-bold">
        ${getTemperature(cityDaily.daily.temperature_2m_min[today], unit)}
        
      </p>
      <p class="is-size-5 has-text-white has-text-weight-bold">
        ${getTemperature(cityDaily.daily.temperature_2m_max[today], unit)}
      </p>
    </article>
    </a>
  </div>
  `;
  return card;
};
