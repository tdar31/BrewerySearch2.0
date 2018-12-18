var myFunction = function() {
  console.log("works");
  $.get("/api", function(data) {
    console.log(data);
    for (var i = 0; i < data.length; ++i) {
      console.log(data[i]);
      $(".breweryContainer").append(data[i].breweryName);
    }
  });
};
