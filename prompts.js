//Dependencies
//const inquirer = require("inquirer");
//const mysql = require("mysql");
//var connection = require('./db/connection');

//Question Prompt
function prompts() {
    inquirer
    .prompt({
      name: "action",
      type: "list",
      message: "MAIN MENU",
      choices: [
        "View all employees",
        "View all employees by department",
        "View all employees by manager",
        "View all employees by role",
        "Add employee",
        "Add role",
        "Add department",
        "Update employee role",
        //"Update employee manager",
        //"Delete department",
        //"Delete role",
        //"Delete employee",
        //"View department budgets",
        "Exit"
      ]
    }).then(function(response) {
            switch (response.action) {
                case "View All Employees":
                    viewAllEmployee();
                    break;
                case "View All Employees By Department":
                    viewAllEmployeeByDep();
                    break;
                case "View All Employees By Manager":
                    viewAllEmployeeByManager();
                    break;
                case "View All Employees By Role":
                    viewAllEmployeeByRole();
                    break;
                case "Add Employee":
                    addEmployee();
                    break;
                case "Add Role":
                    addRole();
                    break;   
                case "Add Department":
                    addDepartment();
                    break;                                        
                case "Update Employee Role":
                    updateEmployeeRole();
                    break;
                case "Exit":
                    process.exit();
                default:
                    break;
            }
        })                    
}        