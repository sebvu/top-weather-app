async function f() {
  const res = await fetch(
    "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/London,UK?unitGroup=metric",
  );
  const data = await res.json();

  const p = document.createElement("p");
  p.textContent = data.resolvedAddress;
  document.body.appendChild(p);
}

f();
