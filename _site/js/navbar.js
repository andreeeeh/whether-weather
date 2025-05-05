document.addEventListener("DOMContentLoaded", () => {
  const urlParam = new URLSearchParams(window.location.search).get("city");
  const favoriteCitiesStorage =
    JSON.parse(localStorage.getItem("favoriteCities")) || [];
  const favorites = document.getElementById("favorites");
  const dropdownContent = document.getElementById("dropdown-content");

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

      if (urlParam === city.url) {
        cityLink.classList.add("is-active");
      }
      dropdownContent.appendChild(cityLink);
    });
  }
});
