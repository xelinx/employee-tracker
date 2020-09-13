//Dependencies
const inquirer = require("inquirer");
const mysql = require("mysql");

//Question Prompt
function viewAllTitles(
    inquirer.prompt({
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
        //"View department budgets"
      ]
    }).then()
)