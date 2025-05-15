const renderDropdownItem = (city, isActive, isFavorite) => {
  const dropdownContent = document.getElementById("dropdown-content");
  const cityLink = document.createElement("a");

  cityLink.classList.add("dropdown-item", "is-hidden");
  cityLink.id = city.daily;
  cityLink.innerHTML = city.name;
  cityLink.href = `/city-focus/?city=${city.url}`;

  if (isActive) {
    cityLink.classList.add("is-active");
  }

  if (isFavorite) {
    cityLink.classList.remove("is-hidden");
  }

  dropdownContent.appendChild(cityLink);
};

showFavoritesMenu = () => {
  const list = getFavoriteCities();
  const favorites = document.getElementById("favorites");
  list.length
    ? favorites.classList.remove("is-hidden")
    : favorites.classList.add("is-hidden");
};

const highlightNav = (elementId) => {
  const element = document.getElementById(elementId);
  let style = "is-link";

  if (elementId.includes("link")) {
    style = "has-background-link";
  }

  element.classList.toggle(style);
};

const showCityLink = (cityLinkId) => {
  const cityLink = document.getElementById(cityLinkId);
  cityLink.classList.toggle("is-hidden");
};

const resetSettings = (city) => {
  const cityButton = document.getElementById(city.url);
  const cityLink = document.getElementById(city.daily);

  cityButton.classList.remove("is-link");
  cityLink.classList.add("is-hidden");
};
