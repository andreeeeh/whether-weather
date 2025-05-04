document.addEventListener("DOMContentLoaded", () => {
  const card = document.getElementById("dashboard");

  cities.forEach((city) => {
    const cardElement = createCard(city);
    card.appendChild(cardElement);
  });
});

const createCard = (city) => {
  const cityDaily = weatherData[city.daily];
  const today = new Date().getDay();
  const weatherIcon = getWeatherIcon(cityDaily.daily.weather_code[today]);
  const card = document.createElement("div");

  card.classList.add("column", "is-4");
  card.innerHTML = `
  <section class="card has-text-centered">
    <a href="/city-focus/?city=${city.url}">
    <header class="card-header">
      <p class="card-header-title is-size-4 is-centered">${city.name}</p>
    </header>
    <div class="card-image is-flex is-justify-content-center">
      <figure class="image is-96x96">
        <img src="/images/${weatherIcon}.png" alt="${weatherIcon}"/>
      </figure>
    </div>
    <article class="card-content is-flex is-justify-content-space-between">
      <p class="is-size-5 has-text-white has-text-weight-bold">
        ${cityDaily.daily.temperature_2m_min[today]}
        ${cityDaily.daily_units.temperature_2m_min}
      </p>
      <p class="is-size-5 has-text-white has-text-weight-bold">
        ${cityDaily.daily.temperature_2m_max[today]}
        ${cityDaily.daily_units.temperature_2m_max}
      </p>
    </article>
    </a>
  </section>
  `;
  return card;
};
