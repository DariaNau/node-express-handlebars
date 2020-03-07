DROP DATABASE IF EXISTS burger_db;
CREATE DATABASE burger_db;

USE burger_db;

CREATE TABLE burgers (
  id int AUTO_INCREMENT NOT NULL,
  burger_name varchar(30) NOT NULL,
  devoured boolean DEFAULT false,
  PRIMARY KEY(id)
);