document.addEventListener("DOMContentLoaded", () => {
  dayjs.extend(window.dayjs_plugin_localizedFormat);
});

const cities = [
  {
    name: "Amsterdam",
    url: "amsterdam",
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

const getWeatherIconUrl = (code) => {
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
  return `/images/${icon}.png`;
};

const getUnit = () => {
  return localStorage.getItem("unit") || "celsius";
};

const setUnit = (unit) => {
  localStorage.setItem("unit", unit);
};

const getFavoriteCities = () => {
  return JSON.parse(localStorage.getItem("favoriteCities")) || [];
};

const setFavoreiteCities = (favCities) => {
  localStorage.setItem("favoriteCities", JSON.stringify(favCities));
};

const filterFavoriteCities = (cities, favoriteCities) => {
  return cities.filter((city) => favoriteCities.includes(city.name));
};

const getCity = (urlParam) => {
  return cities.find((city) => city.url === urlParam);
};

const getTemperature = (temperature) => {
  const unit = getUnit();
  if (unit === "fahrenheit") {
    return Math.round((temperature * 9) / 5 + 32) + "°F";
  }

  return temperature + "°C";
};

const getTime = (date) => {
  const time = date.split("T")[2];
  const hour = time.split(":")[0];
  const minute = time.split(":")[1];
  const convertTime = new Date().setHours(hour, minute);

  return dayjs(convertTime).format("LT");
};
