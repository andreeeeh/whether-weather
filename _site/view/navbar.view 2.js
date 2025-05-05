const renderDropdownItem = (city, isActive) => {
  const dropdownContent = document.getElementById("dropdown-content");
  const cityLink = document.createElement("a");

  cityLink.classList.add("dropdown-item");
  cityLink.innerHTML = city.name;
  cityLink.href = `/city-focus/?city=${city.url}`;

  if (isActive) {
    cityLink.classList.add("is-active");
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
  let element = document.getElementById(elementId);
  let style = "is-link";

  if (elementId.includes("link")) {
    style = "has-background-link";
  }

  element.classList.toggle(style);
};

const resetSettings = (elementId) => {
  const element = document.getElementById(elementId);
  element.classList.remove("is-link");
};
