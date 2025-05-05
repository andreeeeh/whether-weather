const renderCityButton = (city, isFavorite) => {
  const favCitiesContainer = document.getElementById("fav-cities");
  const cityButton = document.createElement("button");

  cityButton.classList.add("button", "is-medium", "m-2");
  cityButton.innerHTML = city.name;
  cityButton.id = city.url;

  if (isFavorite) {
    cityButton.classList.add("is-link");
  }

  favCitiesContainer.appendChild(cityButton);
  return cityButton;
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
