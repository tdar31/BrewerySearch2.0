DROP DATABASE IF EXISTS breweries_DB;
CREATE database breweries_DB;

USE breweries_DB;

CREATE TABLE breweries (
  id INT NOT NULL AUTO_INCREMENT,
  breweryName VARCHAR(100) NULL,
  region VARCHAR(75) NULL,
  fullAddress VARCHAR(250) NULL,
  fullDescription VARCHAR(2500) NULL,
  website VARCHAR(100) NULL,
  photo VARCHAR(100) NULL,
  phone VARCHAR(15) NULL,
  latitude VARCHAR(100) NULL,
  longitude VARCHAR(100) NULL,
  PRIMARY KEY (id)
);

-- INSERT INTO breweries (breweryName, region, fullAddress, fullDescription, website, photo, phone, latitude, longitude)
-- VALUES ("Rueben's Brewery", "Ballard", "5010 14th Ave NW, Seattle, WA 98107", "We're an award winning microbrewery focused on making small batches of top quality ales and lagers. We're family owned and focused on brewing unconstrained to make the best beer possible.", "www.reubensbrews.com/", "http://via.placeholder.com/500x400", "(206) 784-2859", "47.6653", "-122.373");

-- INSERT INTO breweries (breweryName, region, fullAddress, fullDescription, website, photo, phone, latitude, longitude)
-- VALUES ("Stoup Brewing", "Ballard", "1108 NW 52nd St, Seattle, WA 98107", "Stoup's beers are beautifully balanced from start to finish, which makes sense given certified-Cicerone Robyn Schumacher's contributions to the team. Stoup's best bets are the award-winning robust porter, excellent year-round, and the sour Berliner Weisse with a shot of flavored syrup.", "www.stoupbrewing.com/", "http://via.placeholder.com/500x400", "(206) 457-5524", "47.666703", "-122.371206");