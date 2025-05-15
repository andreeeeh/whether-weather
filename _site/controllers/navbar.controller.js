document.addEventListener("DOMContentLoaded", () => {
  const urlParam = window.location.pathname;
  const urlFavoritesParam = new URLSearchParams(window.location.search).get(
    "favorites"
  );
  const urlCityParam = new URLSearchParams(window.location.search).get("city");
  const favoriteCitiesStorage = getFavoriteCities();

  if (urlParam === "/" && !urlFavoritesParam) {
    highlightNav("dashboard-link");
  }

  if (urlParam === "/settings/") {
    highlightNav("settings-link");
  }

  if (urlFavoritesParam) {
    highlightNav("dropdown-button");
  }

  cities.forEach((city) => {
    const isFavorite = favoriteCitiesStorage.includes(city.name);
    const isActive = urlCityParam === city.url;
    renderDropdownItem(city, isActive, isFavorite);
  });

  showFavoritesMenu();
});
