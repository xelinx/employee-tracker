### Schema
CREATE DATABASE kdc_db;
USE kdc_db;

CREATE TABLE department
(
    id int NOT NULL AUTO_INCREMENT,
    name varchar(30) NOT NULL,
    PRIMARY KEY (id)
);


CREATE TABLE role
(
	id int NOT NULL AUTO_INCREMENT,
	title varchar(30) NOT NULL,
	salary DECIMAL,
    department_id INT,
	PRIMARY KEY (id)
);
