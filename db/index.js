"use strict";

const connection = require("./connection");



class DB {
    constructor(connection) {
        this.connection = connection;
    }

    viewAllEmployee() {
        return this.connection.query(
          `
                SELECT * EMPLOYEE
            `

        );
      }

    viewAllDepartment() {
        return this.connection.query(
          `
            SELECT 
              ID, 
              NAME 
            FROM 
              DEPARTMENT
            `
        );
      }
}

module.exports = new DB(connection)