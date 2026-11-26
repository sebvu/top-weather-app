export default new (class VisualCrossingService {
  #unit = "metric";
  #API_LINK = new URL(
    "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/",
  );

  // methods

  #getWeatherAPILink(searchQuery) {
    return this.#API_LINK + searchQuery + `?unitGroup=${this.#unit}`;
  }

  async requestWeatherInformation(rawSearchQuery) {
    // NOTE: substitute space with %20 percent encoded representation to prevent spaces in api query
    const searchQuery = rawSearchQuery.replaceAll(" ", "%20");
    const weatherAPILink = this.#getWeatherAPILink(searchQuery);

    // fetch and transfer data to json req
    const rawWeatherData = await fetch(weatherAPILink);
    const weatherData = await rawWeatherData.json();

    return weatherData;
  }

  // setters & getters

  getUnit() {
    return this.#unit;
  }

  setUnitMetric() {
    this.#unit = "metric";
  }

  setUnitImperial() {
    this.#unit = "imperial";
  }
})();
