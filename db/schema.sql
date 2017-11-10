/* Create the burgers_db */
CREATE DATABASE burgers_db;

/* Switch to or use the burgers_db */
USE burgers_db;

/* Create a burgers table */
CREATE TABLE burgers
(
	id int NOT NULL AUTO_INCREMENT,
    burger_name varchar (25) NOT NULL,
    devoured boolean DEFAULT false,
    date TIMESTAMP,
	PRIMARY KEY (id)
);