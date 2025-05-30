import { mapBox } from "../main.js";

const companyOffice = [19.89338063987431250, 50.0882954269748];

const mapConfig = {
  container: "map",
  style: "mapbox://styles/mapbox/streets-v9",
  center: companyOffice,
  zoom: 15,
}

const directionsConfig = {
  accessToken: "pk.eyJ1Ijoidm95dGFzcyIsImEiOiJjbTI0cHdqZWQwZmNhMnFzZzBsY3JvZmw4In0.qsZMkUu8RMnFYBw1oCohug",
  unit: "metric",
  profile: "mapbox/driving",
  placeholderOrigin: "Twoja lokalizacja",
  placeholderDestination: "Ul. Jasnogórska 2, Kraków",
  language: "pl-PL"
}

const markerConfig = {
  color: "hsl(144, 73%, 52%)",
  draggable: false
}

const renderMap = () => {
  mapboxgl.accessToken = "pk.eyJ1Ijoidm95dGFzcyIsImEiOiJjbTI0cHdqZWQwZmNhMnFzZzBsY3JvZmw4In0.qsZMkUu8RMnFYBw1oCohug";

  if (mapBox) {
    mapBox.innerHTML = "";

    const navControls = new mapboxgl.NavigationControl();
    const map = new mapboxgl.Map(mapConfig);
    // Add zoom and rotation controls to the map:
    map.addControl(navControls, 'top-right');
    // Add a marker to the map according to the coords set by `companyOffice`:
    const marker = new mapboxgl.Marker(markerConfig)
      .setLngLat(companyOffice)
      .addTo(map);
    // Add directions to the map:
    const directions = new MapboxDirections(directionsConfig);
    // Set the default destination to the company office's location:
    directions.setDestination(companyOffice);
    // Add the directions to the map:
    map.addControl(directions, "top-left");
  }
}

export default renderMap;