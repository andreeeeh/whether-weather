document.addEventListener("DOMContentLoaded", () => {
  const resetButton = document.getElementById("reset");
  const unit = getUnit();
  let favCitiesStg = getFavoriteCities();

  // Render favorite cities
  cities.forEach((city) => {
    const isFavorite = favCitiesStg.includes(city.name);
    const cityButton = renderCityButton(city, isFavorite);

    cityButton.addEventListener("click", () => {
      const isFavorite = favCitiesStg.includes(city.name);
      if (isFavorite) {
        favCitiesStg = favCitiesStg.filter((cityStg) => cityStg !== city.name);
        highlightNav(city.url);
      } else {
        favCitiesStg.push(city.name);
        highlightNav(city.url);
      }

      setFavoreiteCities(favCitiesStg);
      showFavoritesMenu();
      showCityLink(city.daily);
    });
  });

  //Update temperature measurement unit
  updateUnitButtons(unit);

  celsius.addEventListener("click", () => {
    setUnit("celsius");
    updateUnitButtons("celsius");
  });

  fahrenheit.addEventListener("click", () => {
    setUnit("fahrenheit");
    updateUnitButtons("fahrenheit");
  });

  // Reset to default settings
  resetButton.addEventListener("click", () => {
    setUnit("celsius");
    updateUnitButtons("celsius");
    favCitiesStg = [];
    setFavoreiteCities([]);
    cities.forEach((city) => resetSettings(city));
    showFavoritesMenu();
  });
});
