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

  if (favoriteCitiesStorage.length) {
    const citiesList = filterFavoriteCities(cities, favoriteCitiesStorage);

    citiesList.forEach((city) => {
      renderDropdownItem(city, urlCityParam === city.url);
    });
  }
});
