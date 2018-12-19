var generateBrew = function() {
  $.get("/api", function(data) {

    // var breweryTitle;

    for (var i = 0; i < data.length; ++i) {
      console.log(data[i]);
      var brew = data[i];
      //Brewery Title
      $("<h1>").addClass("breweryName title").appendTo(".breweryContainer"); //.text(brew.breweryName)
      //Contact Line (Contains Image, Address and Phone)
      // $("<div>").addClass("contactRow").appendTo(".breweryContainer"); //.text("THIS IS THE CONTACT ROW")
      //Image
      $("<img>").addClass("breweryImage").appendTo(".breweryContainer"); //.attr("src", brew.photo)
      //Address
      $("<div>").addClass("addressText").appendTo(".breweryContainer"); //.text(brew.fullAddress)
      //Phone
      $("<div>").addClass("phoneNum").appendTo(".breweryContainer"); //.text(brew.Phone)
      //Region
      $("<div>").addClass("regionText").appendTo(".breweryContainer"); //.text(brew.region)
      //Website
      $("<div>").addClass("websiteText").appendTo(".breweryContainer"); //.text(brew.website)
      //Full Description
      $("<div>").addClass("descriptText").appendTo(".breweryContainer"); //.text(brew.website)

    }

    for (var i = 0; i < data.length; ++i) {
      var brew = data[i];
      $(".breweryName").eq(i).text(brew.breweryName);
      $(".breweryImage").eq(i).attr("src", brew.photo);
      $(".addressText").eq(i).text(brew.fullAddress);
      $(".phoneNum").eq(i).text(brew.phone);
      $(".regionText").eq(i).text(brew.region);
      $(".websiteText").eq(i).text(brew.website);
      $(".descriptText").eq(i).text(brew.fullDescription);
    }

  });
};
