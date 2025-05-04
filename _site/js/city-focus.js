document.addEventListener("DOMContentLoaded", () => {
  const urlParam = new URLSearchParams(window.location.search).get("city");
  const city = cities.find((city) => city.url === urlParam);
  const cityName = document.getElementById("city-name");
  const weekWeather = document.getElementById("week-weather");

  cityName.innerHTML = city.name;
});