document.addEventListener("DOMContentLoaded", () => {
  const cities = [
    {
      name: "Amsterdam",
      url: "amsterdan",
      daily: "amsterdam_daily",
      hourly: "amsterdam_hourly",
    },
    {
      name: "Berlin",
      url: "berlin",
      daily: "berlin_daily",
      hourly: "berlin_hourly",
    },
    {
      name: "Copenhagen",
      url: "copenhagen",
      daily: "copenhagen_daily",
      hourly: "copenhagen_hourly",
    },
    { name: "Cork", url: "cork", daily: "cork_daily", hourly: "cork_hourly" },
    {
      name: "New York",
      url: "new_york",
      daily: "new_york_daily",
      hourly: "new_york_hourly",
    },
    {
      name: "Paris",
      url: "paris",
      daily: "paris_daily",
      hourly: "paris_hourly",
    },
  ];
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
    <header class="card-header">
      <p class="card-header-title is-size-5 is-centered">${city.name}</p>
    </header>
    <div class="card-image is-flex is-justify-content-center">
      <figure class="image is-96x96">
        <img src="/images/${weatherIcon}.png" alt="${weatherIcon}"/>
      </figure>
    </div>
    <article class="card-content is-flex is-justify-content-space-between">
      <p class="is-size-6">
        ${cityDaily.daily.temperature_2m_min[today]}
        ${cityDaily.daily_units.temperature_2m_min}
      </p>
      <p class="is-size-6">
        ${cityDaily.daily.temperature_2m_max[today]}
        ${cityDaily.daily_units.temperature_2m_max}
      </p>
    </article>
  </section>
  `;
  return card;
};

const getWeatherIcon = (code) => {
  icon = "";
  switch (code) {
    case 1:
    case 2:
    case 3:
      icon = "cloudy";
      break;
    case 45:
    case 48:
      icon = "foggy";
      break;
    case 51:
    case 53:
    case 55:
      icon = "drizzle";
      break;
    case 61:
    case 63:
    case 65:
    case 66:
    case 67:
    case 80:
    case 81:
    case 82:
      icon = "rainy";
      break;
    case 71:
    case 73:
    case 75:
    case 77:
    case 85:
    case 86:
      icon = "snowy";
      break;
    case 95:
      icon = "thunderstorm";
      break;
    default:
      icon = "sunny";
      break;
  }
  return icon;
};
