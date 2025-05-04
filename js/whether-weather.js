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
