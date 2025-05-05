const renderDropdownItem = (city, isActive) => {
  const favorites = document.getElementById("favorites");
  const dropdownContent = document.getElementById("dropdown-content");
  const cityLink = document.createElement("a");

  cityLink.classList.add("dropdown-item");
  cityLink.innerHTML = city.name;
  cityLink.href = `/city-focus/?city=${city.url}`;

  favorites.classList.remove("is-hidden");

  if (isActive) {
    cityLink.classList.add("is-active");
  }

  dropdownContent.appendChild(cityLink);
};

const highlightNav = (elementId, activate = true) => {
  let element = document.getElementById(elementId);
  let style = "is-link";

  if (elementId.includes("link")) {
    style = "has-background-link";
  }

  if (activate) {
    element.classList.add(style);
  } else {
    element.classList.remove(style);
  }
};
