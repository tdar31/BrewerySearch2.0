var myFunction = function() {
  console.log("works");
  $.get("/api", function(data) {
    console.log(data[0].breweryName);
    $(".breweryContainer").text(data[0].breweryName);
  });
};
