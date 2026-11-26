import VisualCrossingService from "./service/VisualCrossingService.js";
import { handleError } from "./service/handleErrorService.js";

// temporary function
async function requestWeatherData() {
  const searchQuery = prompt("Insert search query", "Houston, Texas");

  // attach handleError HOF (higher order function) to deal with generic errors
  const reqWeatherInfo = await handleError(
    VisualCrossingService.requestWeatherInformation.bind(VisualCrossingService),
  )(searchQuery);

  return {
    address: reqWeatherInfo.resolvedAddress,
    currentConditions: reqWeatherInfo.currentConditions,
    daysForecast: reqWeatherInfo.days,
  };
}

async function main() {
  const weatherData = await requestWeatherData();
  const documentBody = document.body;

  for (const data in weatherData) {
    const p = document.createElement("p");
    console.log(weatherData[data]);
    p.textContent = weatherData[data];
    documentBody.appendChild(p);
  }
}

main();
