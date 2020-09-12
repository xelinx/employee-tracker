### Schema
CREATE DATABASE kdc_db;
USE kdc_db;

--Department table--
CREATE TABLE department
(
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(30) NOT NULL,
    PRIMARY KEY (id)
);

--Role table--
CREATE TABLE role
(
	id INT NOT NULL AUTO_INCREMENT,
	title VARCHAR(30) NOT NULL,
	salary DECIMAL NOT NULL,
    department_id INT NOT NULL 
	PRIMARY KEY (id)
);

--Employee table--
CREATE TABLE Employee
(
    id INT NOT NULL AUTO_INCREMENT,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    role_id INT NOT NULL,
    manager_id INT
    PRIMARY KEY (id)
);