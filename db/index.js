"use strict";

const connection = require("./connection");



class DB {
  constructor(connection) {
    this.connection = connection;
  }

  viewAllEmployees() {
    return this.connection.query(
      `
        SELECT
            e1.id AS ID,
            e1.first_name AS First_Name,
            e1.last_name AS Last_Name,
            roles.title AS Role,
            CONCAT(e2.first_name, ' ', e2.last_name) AS Manager_Name,
            e1.manager_id AS Manager_ID
        FROM
            employees e1
        LEFT JOIN
            roles ON e1.role_id = roles.id
        LEFT JOIN
            employees e2 ON e1.manager_id = e2.id
        ORDER BY
            e1.id;
          `
    );
  }

  viewAllDepartments() {
    return this.connection.query(
      `
          SELECT
              departments.id,
              departments.name AS Department
          FROM
              departments
          ORDER BY
              departments.id;
          `
    );
  }

  viewAllRoles() {
    return this.connection.query(
      `
        SELECT
            roles.id,
            roles.title AS Role,
            roles.salary AS Salary,
            departments.name AS Department
        FROM
            roles
        LEFT JOIN
            departments ON roles.department_id = departments.id
        ORDER BY
            roles.id;
          `
    );
  };

  viewEmployee(id) {
    return this.connection.query(
      `
            SELECT
            employees.id,
            employees.first_name,
            employees.last_name,
            employees.role_id,
            employees.manager_id
        FROM
            employees
            WHERE
            employees.id = ?;
            `, [id]
    );
  };


  // POST METHODS
  addDepartment(dept) {
    return this.connection.query(
      `
            INSERT INTO 
                departments (name)
            VALUES (?);
            `, [dept]
    );
  };

  addRole(title, salary, department_id) {
    return this.connection.query(
      `
            INSERT INTO 
                roles (title, salary, department_id)
            VALUES (?, ?, ?);
            `, [
      title,
      salary,
      department_id
    ]

    );
  };

  addEmployee(first_name, last_name, role_id, manager_id) {
    return this.connection.query(
      `INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?);`, [first_name, last_name, role_id, manager_id]
    );
  };


  // PUT METHOD
  updateEmployee(id, first_name, last_name, role_id, manager_id) {
    return this.connection.query(
      `
            UPDATE 
                employees
            SET ?
            WHERE ?;
            `, [
      {
        first_name: first_name,
        last_name: last_name,
        role_id: role_id,
        manager_id: manager_id
      },
      {
        id: id
      }
    ]
    );
  };

}

module.exports = new DB(connection)