--Deparment--

INSERT INTO department (name)
VALUES ("Sales");
INSERT INTO department (name)
VALUES ("Engineering");
INSERT INTO department (name)
VALUES ("Finance");
INSERT INTO department (name)
VALUES ("Legal");
INSERT INTO department (name)
VALUES ("Manager");

--Role--
INSERT INTO role (title, salary, department_id)
VALUES ("Sales Lead", 55000, 1);
INSERT INTO role (title, salary, department_id)
VALUES ("Salesperson", 35000, 1);
INSERT INTO role (title, salary, department_id)
VALUES ("Lead Engineer", 65000, 2);
INSERT INTO role (title, salary, department_id)
VALUES ("Accountant", 50000, 3);
INSERT INTO role (title, salary, department_id)
VALUES ("Legal Team Lead", 56000, 4);
INSERT INTO role (title, salary, department_id)
VALUES ("Manager", 65000, 5);

--Employee--
INSERT INTO employee (first_name, last_name, role_id, manager_id)
values ("Dokja", "Kim", 3); 
INSERT INTO employee (first_name, last_name, role_id, manager_id)
values ("Sooyoung", "Han", 4);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
values ("Joonghyuk", "Yoo", 5);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
values ("Seolhwa", "Lee", 6);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
values ("Hyungsung", "Lee", 7);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
values ("Sangah", "Yoo", 8);
