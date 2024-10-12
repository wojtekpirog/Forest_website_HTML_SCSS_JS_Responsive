import { mapBox } from "../main.js";

export const renderMap = () => {
  mapboxgl.accessToken = "pk.eyJ1Ijoidm95dGFzcyIsImEiOiJjbTI0cHdqZWQwZmNhMnFzZzBsY3JvZmw4In0.qsZMkUu8RMnFYBw1oCohug";

  if (mapBox) {
    mapBox.innerHTML = "";

    const map = new mapboxgl.Map({
      container: "map",
      style: "mapbox://styles/mapbox/streets-v9",
      center: [-74.5, 40],
      zoom: 10
    }).on("error", (error) => {
      console.error(`Error while loading the map: ${error.error.message}`);
    });
  }
}