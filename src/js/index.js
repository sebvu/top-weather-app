async function f() {
  const API_LINK = new URL(
    "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/",
  );
  const UNIT = "metric";
  const UNIT_GROUP = `?unitGroup=${UNIT}`;
  let res = "";
  let data = "";

  while (true) {
    try {
      const searchQuery = prompt(
        "Insert search query",
        "Houston, Texas",
      ).replaceAll(" ", "%20"); // substitute space with %20 equivalent encoded representation

      const fullLink = API_LINK + searchQuery + UNIT_GROUP;
      console.log(fullLink);
      res = await fetch(fullLink);
      data = await res.json();
      break;
    } catch (err) {
      console.log("hi");
      alert(`Error did not work; ${err}`);
    }
  }
  console.log(data);

  // const p = document.createElement("p");
  // p.textContent = JSON.stringify(data);
  // document.body.appendChild(p);
}

f();
