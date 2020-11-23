DROP DATABASE IF EXISTS kdc_db;
CREATE DATABASE kdc_db;
USE kdc_db;

--Department table--
CREATE TABLE departments(
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(30) NOT NULL,
    PRIMARY KEY (id)
);

--Role table--
CREATE TABLE roles(
	id INT NOT NULL AUTO_INCREMENT,
	title VARCHAR(30) NOT NULL,
	salary DECIMAL NOT NULL,
    department_id INT NOT NULL, 
	PRIMARY KEY (id),
    FOREIGN KEY (department_id) REFERENCES department(id) ON DELETE CASCADE
);

--Employee table--
CREATE TABLE employees(
    id INT NOT NULL AUTO_INCREMENT,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    role_id INT NOT NULL,
    manager_id INT,
    PRIMARY KEY (id),
    FOREIGN KEY (role_id) REFERENCES role(id) ON DELETE CASCADE,
    FOREIGN KEY (manager_id) REFERENCES employee(id) ON DELETE CASCADE
);