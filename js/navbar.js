document.addEventListener("DOMContentLoaded", () => {
  const urlParam = window.location.pathname;
  const urlFavoritesParam = new URLSearchParams(window.location.search).get(
    "favorites"
  );
  const urlCityParam = new URLSearchParams(window.location.search).get("city");
  const favoriteCitiesStorage =
    JSON.parse(localStorage.getItem("favoriteCities")) || [];
  const favorites = document.getElementById("favorites");
  const dropdownContent = document.getElementById("dropdown-content");

  if (urlParam === "/" && !urlFavoritesParam) {
    const dashboardButton = document.getElementById("dashboard-button");
    dashboardButton.classList.add("has-background-link");
  }

  if (urlParam === "/settings/") {
    const settingsButton = document.getElementById("settings-button");
    settingsButton.classList.add("has-background-link");
  }

  if (urlFavoritesParam) {
    const dropdonwButton = document.getElementById("dropdown-button");
    dropdonwButton.classList.add("is-link");
  }

  if (favoriteCitiesStorage.length) {
    favorites.classList.remove("is-hidden");
    const citiesList = cities.filter((city) =>
      favoriteCitiesStorage.includes(city.name)
    );

    citiesList.forEach((city) => {
      const cityLink = document.createElement("a");
      cityLink.classList.add("dropdown-item");
      cityLink.innerHTML = city.name;
      cityLink.setAttribute("href", `/city-focus/?city=${city.url}`);

      if (urlCityParam === city.url) {
        cityLink.classList.add("is-active");
      }
      dropdownContent.appendChild(cityLink);
    });
  }
});
