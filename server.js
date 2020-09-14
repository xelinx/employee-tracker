"use strict";

//Dependencies
const inquirer = require("inquirer");
const logo = require("asciiart-logo");
const db = require("./db");
require("console.table");

require("./db/connection")

console.log(
    logo({
        name: 'KD Company',
        lineChars: 10,
        padding: 2,
        margin: 3,
        borderColor: 'cyan',
        logoColor: 'bold-cyan',
        textColor: 'cyan',
    })
    .emptyLine()
    .right('by Emay Lin')
    .emptyLine()
    .render()
);

//async function viewAllTitles() {

//    const titles = await db.viewAllTitles();

//    console.log("\n");
//    console.table(titles);

    prompts();
//}


function prompts() {

    inquirer
    .prompt({
      name: "action",
      type: "list",
      message: "MAIN MENU",
      choices: [
        "Test",
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
                case "Test":
                    test();
                    break;
                case "View All Employees":
                    viewAllEmployee();
                    break;
                case "View All Departments":
                    viewAllDepartment();
                    break;
                case "View All Roles":
                    viewAllRole();
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
};     
//Test console.table
async function test() {
    var values = [
        ['max', 20],
        ['joe', 30]
  ];
  console.log("\n");
  console.table(['name', 'age'], values);
  prompts();
}

async function viewAllEmployee() {
    const employee = await db.viewAllEmployee();

    console.log("\n");
    console.table(employee);
    prompts();
};

async function viewAllDepartment() {
    const department = await db.viewAllDepartment();

    console.log("\n");
    console.table(deptOption);
    prompts();
};


async function viewAllRole() {
    const role = await db.viewAllRole();

    console.log("\n");
    console.table(role);
    prompts();
};

async function addEmployee(){
    

};

async function addRole() {

};

async function addDepartment() {

};

async function updateEmployeeRole() {

};
