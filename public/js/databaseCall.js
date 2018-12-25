function initMap() {
  var options = {
    zoom: 10,
    center: { lat: 47.6062, lng: -122.3321 }
  };

  var map = new google.maps.Map(document.getElementById("map"), options);

  new google.maps.Marker({
    position: { lat: 47.6653, lng: -122.373 },
    map: map,
    title: "Hello World!"
  });

  // var generateBrew = function() {
    $.get("/api", function(data) {
      // var breweryTitle;

      for (var i = 0; i < data.length; ++i) {
        console.log(data[i]);
        var brew = data[i];
        //Brewery Title
        $("<h1>")
          .addClass("breweryName title")
          .appendTo(".breweryContainer"); //.text(brew.breweryName)
        //Image
        $("<img>")
          .addClass("breweryImage")
          .appendTo(".breweryContainer"); //.attr("src", brew.photo)
        //Address
        $("<div>")
          .addClass("addressText")
          .appendTo(".breweryContainer"); //.text(brew.fullAddress)
        //Phone
        $("<div>")
          .addClass("phoneNum")
          .appendTo(".breweryContainer"); //.text(brew.Phone)
        //Region
        //Not sure what to do with this yet
        $("<div>")
          .addClass("regionText")
          .appendTo(".breweryContainer"); //.text(brew.region)
        //Website
        $("<a>")
          .addClass("websiteText")
          .appendTo(".breweryContainer"); //.text(brew.website)
        //Full Description
        $("<div>")
          .addClass("descriptText")
          .appendTo(".breweryContainer"); //.text(brew.website)
        //Italics for Description
        $("<i>").appendTo("descriptText");
      }

      //Populating all the divs with relavent information
      //Number of issues when trying to combine these two processes into a single loop
      //100% success rate spliting it into two for loops

      for (var i = 0; i < data.length; ++i) {
        var brew = data[i];
        $(".breweryName")
          .eq(i)
          .text(brew.breweryName);
        $(".breweryImage")
          .eq(i)
          .attr("src", brew.photo);
        $(".phoneNum")
          .eq(i)
          .text(brew.phone);
        $(".addressText")
          .eq(i)
          .text(brew.fullAddress);
        // $(".regionText").eq(i).text(brew.region);
        $(".websiteText")
          .eq(i)
          .text("Link to " + brew.breweryName + " Website");
        //Hyperlink to website
        $(".websiteText")
          .eq(i)
          .attr("href", "http://" + brew.website);
        $(".websiteText")
          .eq(i)
          .attr("target", "_blank");
        $(".descriptText")
          .eq(i)
          .text(brew.fullDescription);
      }
    });
  // };
};
