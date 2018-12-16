DROP DATABASE IF EXISTS breweries_DB;
CREATE DATABASE breweries_DB;

USE breweries_DB;

CREATE TABLE breweries (
  id INT NOT NULL AUTO_INCREMENT,
  brewery_name VARCHAR(100) NULL,
  region VARCHAR(75) NULL,
  full_address VARCHAR(250) NULL,
  full_description VARCHAR(2500) NULL,
  website VARCHAR(100) NULL,
  photo VARCHAR(100) NULL,
  PRIMARY KEY (id)
);