document.addEventListener("DOMContentLoaded", () => {
  const unit = localStorage.getItem("unit");
  const celsius = document.getElementById("celsius");
  const fahrenheit = document.getElementById("fahrenheit");

  // Set favorite cities
  const favoriteCitiesStorage =
    JSON.parse(localStorage.getItem("favoriteCities")) || [];
  const favCitiesContainer = document.getElementById("fav-cities");
  cities.forEach((city) => {
    const cityButton = document.createElement("button");
    cityButton.classList.add("button", "is-medium", "m-2");
    cityButton.innerHTML = city.name;
    cityButton.addEventListener("click", () => {
      if (favoriteCitiesStorage.includes(city.name)) {
        favoriteCitiesStorage.splice(
          favoriteCitiesStorage.indexOf(city.name),
          1
        );
        cityButton.classList.remove("is-link");
      } else {
        favoriteCitiesStorage.push(city.name);
        cityButton.classList.add("is-link");
      }
      localStorage.setItem(
        "favoriteCities",
        JSON.stringify(favoriteCitiesStorage)
      );
      location.reload();
    });

    if (favoriteCitiesStorage.includes(city.name)) {
      cityButton.classList.add("is-link");
    }

    favCitiesContainer.appendChild(cityButton);
  });

  // Set temperature unit
  if (unit === "fahrenheit") {
    fahrenheit.classList.add("is-link");
    celsius.classList.remove("is-link");
  } else {
    celsius.classList.add("is-link");
    fahrenheit.classList.remove("is-link");
  }

  celsius.addEventListener("click", () => {
    localStorage.setItem("unit", "celsius");
    celsius.classList.add("is-link");
    fahrenheit.classList.remove("is-link");
  });
  fahrenheit.addEventListener("click", () => {
    localStorage.setItem("unit", "fahrenheit");
    fahrenheit.classList.add("is-link");
    celsius.classList.remove("is-link");
  });

  // Reset to default settings
  const resetButton = document.getElementById("reset");
  resetButton.addEventListener("click", () => {
    localStorage.removeItem("unit");
    localStorage.removeItem("favoriteCities");
    location.reload();
  });
});
