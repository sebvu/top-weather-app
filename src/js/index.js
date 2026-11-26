import VisualCrossingService from "./service/VisualCrossingService.js";
import { handleError } from "./service/handleErrorService.js";

function main() {
  const searchQuery = prompt("Insert search query", "Houston, Texas");

  handleError(
    VisualCrossingService.requestWeatherInformation.bind(VisualCrossingService),
  )(searchQuery).then((res) => console.log(res));
}

main();
