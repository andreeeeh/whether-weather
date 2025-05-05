document.addEventListener("DOMContentLoaded", () => {
  const celsius = document.getElementById("celsius");
  const fahrenheit = document.getElementById("fahrenheit");
  const resetButton = document.getElementById("reset");
  const unit = getUnit();
  let favCitiesStg = getFavoriteCities();

  // Render favorite cities
  cities.forEach((city) => {
    const isFavorite = favCitiesStg.includes(city.name);
    const cityButton = renderCityButton(city, isFavorite);

    cityButton.addEventListener("click", () => {
      if (isFavorite) {
        favCitiesStg = favCitiesStg.filter((cityStg) => cityStg !== city.name);
        highlightNav(city.url);
      } else {
        favCitiesStg.push(city.name, false);
        highlightNav(city.url);
      }

      setFavoreiteCities(favCitiesStg);
      location.reload();
    });
  });

  //Update temperature measurement unit
  updateUnitButtons(unit, celsius, fahrenheit);

  celsius.addEventListener("click", () => {
    setUnit("celsius");
    updateUnitButtons("celsius", celsius, fahrenheit);
  });

  fahrenheit.addEventListener("click", () => {
    setUnit("fahrenheit");
    updateUnitButtons("fahrenheit", celsius, fahrenheit);
  });

  // Reset to default settings
  resetButton.addEventListener("click", () => {
    setUnit("celsius");
    setFavoreiteCities([]);
    location.reload();
  });
});
