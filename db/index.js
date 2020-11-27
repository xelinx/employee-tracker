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
        employee.id, 
        employee.first_name, 
        employee.last_name, 
        role.title, 
        department.name AS department, 
        role.salary, 
        CONCAT(manager.first_name, ' ', manager.last_name) AS manager 
      FROM 
        employee 
      LEFT JOIN 
        role on employee.role_id = role.id 
      LEFT JOIN 
        department on role.department_id = department.id 
      LEFT JOIN 
        employee manager on manager.id = employee.manager_id

      `
    );
  }

  viewAllDepartments() {
    return this.connection.query(
      `
      SELECT
        department.id, 
        department.name, 
      SUM(role.salary) AS utilized_budget 
      FROM 
        employee 
      LEFT JOIN 
        role on employee.role_id = role.id 
      LEFT JOIN 
        department on role.department_id = department.id 
      GROUP BY 
        department.id, 
        department.name

      `
    );
  }

  viewAllRoles() {
    return this.connection.query(
      `
      SELECT
        role.id, 
        role.title, 
        department.name AS department, 
        role.salary 
      FROM 
        role 
      LEFT JOIN 
        department on role.department_id = department.id

        `
    );
  };


  // POST METHODS
  addDepartment(department) {
    return this.connection.query(
      `
      INSERT INTO 
          department
      SET 
        ?
      `, department
    );
  };

  addRole(role) {
    return this.connection.query(
      `
      INSERT INTO 
          role
      SET 
        ?
      `, role
    );
  };

  addEmployee(employee) {
    return this.connection.query(
      `
      INSERT INTO 
          role
      SET 
        ?
      `, employee    
    );
  };


  // PUT METHOD
  updateEmployee(employeeId, roleId) {
    return this.connection.query(
      `
      UPDATE 
          employees
      SET 
        role_id = ?
      WHERE id = ?
      `, [roleId, employeeId]
    );
  };

}

module.exports = new DB(connection)