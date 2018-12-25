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
  locationGog VARCHAR(100) NULL,
  PRIMARY KEY (id)
);

-- INSERT INTO breweries (breweryName, region, fullAddress, fullDescription, website, photo, phone)
-- VALUES ("Stoup Brewing", "Ballard", "123 Memer Street", "This is the full Description Slot", "www.meme.com", "http://via.placeholder.com/600x400", "555-555-5555");

-- INSERT INTO breweries (breweryName, region, fullAddress, fullDescription, website, photo, phone)
-- VALUES ("Ballard Brewing", "Ballard", "432 Ave Street", "This is the full Description Slot", "www.bbbbbb.com", "http://via.placeholder.com/600x400", "666-666-6666");