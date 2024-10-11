// import mapboxgl from "mapbox-gl";

mapboxgl.accessToken = "pk.eyJ1Ijoidm95dGFzcyIsImEiOiJjbTI0cHdqZWQwZmNhMnFzZzBsY3JvZmw4In0.qsZMkUu8RMnFYBw1oCohug";

const mapOptions = {
  container: "map",
  style: 'mapbox://styles/mapbox/streets-v12',
  zoom: 10
}

const locationOptions = {
  enableHighAccuracy: true
}

const initMap = () => {
  navigator.geolocation.getCurrentPosition(successLocation, errorLocation, locationOptions);

  const map = new mapboxgl.Map(mapOptions);
}

const successLocation = (position) => {
  console.log(position);
}

const errorLocation = () => {
  console.log("Błąd");
}

export default initMap;