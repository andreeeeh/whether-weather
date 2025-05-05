const renderCityButton = (city, isFavorite) => {
  const favCitiesContainer = document.getElementById("fav-cities");
  const cityButton = document.createElement("button");

  cityButton.classList.add("button", "is-medium", "m-2");
  cityButton.innerHTML = city.name;
  cityButton.id = city.url;

  if (isFavorite) {
  }

  favCitiesContainer.appendChild(cityButton);
  return cityButton;
};

showFavMenu = () => {
  cityButton.classList.toggle("is-link");
};

const updateUnitButtons = (unit, celsius, fahrenheit) => {
  if (unit === "fahrenheit") {
    fahrenheit.classList.add("is-link");
    celsius.classList.remove("is-link");
  } else {
    celsius.classList.add("is-link");
    fahrenheit.classList.remove("is-link");
  }
};
