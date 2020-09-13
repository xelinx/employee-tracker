--Deparment--

INSERT INTO department (id, name)
VALUES (1, "Sales");
INSERT INTO department (id, name)
VALUES (2, "Engineering");
INSERT INTO department (id, name)
VALUES (3, "Finance");
INSERT INTO department (id, name)
VALUES (4, "Legal");
INSERT INTO department (id, name)
VALUES (5, "Manager");

--Role--
INSERT INTO role (id, title, salary, department_id)
VALUES (1, "Sales Lead", 55000, 1);
INSERT INTO role (id, title, salary, department_id)
VALUES (2, "Salesperson", 35000, 1);
INSERT INTO role (id, title, salary, department_id)
VALUES (3, "Lead Engineer", 65000, 2);
INSERT INTO role (id, title, salary, department_id)
VALUES (4, "Accountant", 50000, 3);
INSERT INTO role (id, title, salary, department_id)
VALUES (5, "Legal Team Lead", 56000, 4);
INSERT INTO role (id, title, salary, department_id)
VALUES (6, "Manager", 65000, 5);

--Employee--
INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
values (6, "Dokja", "Kim", 6, null); 
INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
values (3, "Sooyoung", "Han", 4, 6);
INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
values (5, "Joonghyuk", "Yoo", 3, 6);
INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
values (2, "Seolhwa", "Lee", 1, 6);
INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
values (1, "Hyungsung", "Lee", 2, 1);
INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
values (4, "Sangah", "Yoo", 5, 6);
