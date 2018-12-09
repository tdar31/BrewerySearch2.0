function initMap() {
  var options = {
    zoom: 10,
    center: { lat: 47.6062, lng: -122.3321 }
  };
  var map = new google.maps.Map(document.getElementById("map"), options);
}
