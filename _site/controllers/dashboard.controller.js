document.addEventListener("DOMContentLoaded", () => {
  const urlParam = new URLSearchParams(window.location.search).get("favorites");
  const favoriteCitiesStorage = getFavoriteCities();
  let citiesList = cities;

  // Update dashboard title
  if (favoriteCitiesStorage.length && urlParam) {
    updateDashboardTitle("Favorite Cities");
    citiesList = filterFavoriteCities(cities, favoriteCitiesStorage);
  } else {
    updateDashboardTitle("Weather Dashboard");
  }

  // Rebder cities weather cards
  citiesList.forEach((city) => {
    const cityDaily = weatherData[city.daily];
    createWeatherCard(city, cityDaily);
  });
});
