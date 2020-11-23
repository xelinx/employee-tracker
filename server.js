"use strict";

//Dependencies
const inquirer = require("inquirer");
const logo = require("asciiart-logo");
require("./db/index");
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

async function prompts() {

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
        "Update employee",
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
                    viewAllEmployees();
                    break;
                case "View All Departments":
                    viewAllDepartments();
                    break;
                case "View All Roles":
                    viewAllRoles();
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
                case "Update Employee":
                    updateEmployee();
                    break;
                case "Exit":
                    process.exit();
                default:
                    break;
            }
        })                   
};     

async function viewAllEmployees() {
    const employees = await db.viewAllEmployees();

    console.log('\n');
    console.table(employees);
    prompts();
};

async function viewAllDepartments() {
    const departments = await db.viewAllDepartments();

    console.log("\n");
    console.table(departments);
    prompts();
};

async function viewAllRoles() {
    const roles = await db.viewAllRoles();

    console.log("\n");
    console.table(roles);
    prompts();
};

async function addEmployee(){
    const { first_name, last_name, role_id, manager_id } = await inquirer.prompt(prompts.addEmployee);
    const newEmployee = await db.addEmployee(first_name, last_name, role_id, manager_id);
    console.log('\n');
    console.log(
        `New Role added:
        First Name: ${first_name}
        Last Name: ${last_name}
        Role_ID: ${role_id}
        Manager_ID: ${manager_id}
        `
    );
};

async function addRole() {
    const { title, salary, department_id } = await inquirer.prompt(prompts.addRole);
    const newRole = await db.addRole();

    console.log('\n');
    console.log(
        `New Role added:
        Title: ${title}
        Salary: ${salary}
        Department_ID: ${department_id}
        `
    );
    prompts();
};

async function addDepartment() {
    const { name } = await inquirer.prompt(prompts.addDepartment);
    const newDept = await db.addDepartment(name);

    console.log('\n');
    console.log(`New Department ${name} added.`);
    prompts();
};

async function updateEmployee() {
    const {id} = await inquirer.prompt(prompts.selectEmployee_askID);
    const selectedEmployee = await db.viewEmployee(id);
    console.log('\n');
    console.table(selectedEmployee);
    
    const { first_name: firstName, last_name: lastName, role_id: roleID, manager_id: managerID } = selectedEmployee[0];
    const updateEmployee_details = prompts.updateEmployee_function(firstName, lastName, roleID, managerID);
    
    const { first_name, last_name, role_id, manager_id } = await inquirer.prompt(updateEmployee_details);
    const updatedEmployee = await db.updateEmployee(id, first_name, last_name, role_id, manager_id);

    console.log('\n');
    console.log(`Employee ${id} Updated!`);
};
