function initMap() {
  var options = {
    zoom: 10,
    center: { lat: 47.6062, lng: -122.3321 }
  };

  var map = new google.maps.Map(document.getElementById("map"), options);

  // new google.maps.Marker({
  //   position: { lat: 47.6653, lng: -122.373 },
  //   map: map,
  //   title: "Hello World!"

  //Google Maps Marker Creation
  $.get("/api", function(data) {
    console.log(data);
    $.each(data, function(i, field) {
      createMarker(data);

      function createMarker(data) {
        var marker = new google.maps.Marker({
          position: new google.maps.LatLng(data[i].latitude, data[i].longitude),
          map: map,
          title: field.crossroad
        });
      }
    });
  });
}
