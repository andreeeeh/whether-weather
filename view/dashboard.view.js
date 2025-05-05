const updateDashboardTitle = (title) => {
  const dashboardTitle = document.getElementById("dashboard-title");
  dashboardTitle.innerHTML = title;
};

const createWeatherCard = (city, cityDaily) => {
  const today = new Date().getDay();
  const weatherIcon = cityDaily.daily.weather_code[today];
  const dashboard = document.getElementById("dashboard");
  const card = document.createElement("section");

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
        ${getTemperature(cityDaily.daily.temperature_2m_min[today])}
        
      </p>
      <p class="is-size-5 has-text-white has-text-weight-bold">
        ${getTemperature(cityDaily.daily.temperature_2m_max[today])}
      </p>
    </article>
    </a>
  </div>
  `;

  dashboard.appendChild(card);
};
