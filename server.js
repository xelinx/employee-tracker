"use strict";

//Dependencies
const { prompt } = require("inquirer");
const logo = require("asciiart-logo");
require("./db");
require("console.table");

require("./db/connection")

init();

function init() {
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

    prompts();
}

async function prompts() {
    const { choice } = await prompt([
        {
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
        }
    ]);
    switch (choice) {
        case "View All Employees":
            return viewAllEmployees();
            break;
        case "View All Departments":
            return viewAllDepartments();
            break;
        case "View All Roles":
            return viewAllRoles();
            break;
        case "Add Employee":
            return addEmployee();
            break;
        case "Add Role":
            return addRole();
            break;
        case "Add Department":
            return addDepartment();
            break;
        case "Update Employee":
            return updateEmployee();
            break;
        case "Exit":
            process.exit();
        default:
            process.exit();
    }    
}

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
}

async function viewAllRoles() {
    const roles = await db.viewAllRoles();

    console.log("\n");
    console.table(roles);
    prompts();
};

async function addEmployee() {
    const roles = await db.viewAllRoles();
    const employees = await db.viewAllEmployees();

    const employee = await prompt([
        {
            name: "first_name",
            message: "What is the employee's first name?"
        },
        {
            name: "last_name",
            message: "What is the employee's last name?"
        }
    ]);

    const roleChoices = roles.map(({ id, title }) => ({
        name: title,
        value: id
    }));

    const { roleId } = await prompt({
        type: "list",
        name: "roleId",
        message: "What is the employee's role?",
        choices: roleChoices
    });

    employee.role_id = roleId;

    const managerChoices = employees.map(({ id, first_name, last_name }) => ({
        name: `${first_name} ${last_name}`,
        value: id
    }));
    managerChoices.unshift({ name: "None", value: null });

    const { managerId } = await prompt({
        type: "list",
        name: "managerId",
        message: "Who is the employee's manager?",
        choices: managerChoices
    });

    employee.manager_id = managerId;

    await db.addEmployee(employee);

    console.log(
        `Added ${employee.first_name} ${employee.last_name} to the database`
    );

    prompts();
}

async function addRole() {
    const departments = await db.viewAllDepartments();

    const departmentChoices = departments.map(({ id, name }) => ({
        name: name,
        value: id
    }));

    const role = await prompt([
        {
            name: "title",
            message: "What is the name of the role?"
        },
        {
            name: "salary",
            message: "What is the salary of the role?"
        },
        {
            type: "list",
            name: "department_id",
            message: "Which department does the role belong to?",
            choices: departmentChoices
        }
    ]);

    await db.addRole(role);

    console.log(`Added ${role.title} to the database`);

    prompts();
}

async function addDepartment() {
    const department = await prompt([
        {
            name: "name",
            message: "What is the name of the department?"
        }
    ]);

    await db.addDepartment(department);

    console.log(`Added ${department.name} to the database`);

    prompts();
}

async function updateEmployee() {
    const employees = await db.viewAllEmployees();

    const employeeChoices = employees.map(({ id, first_name, last_name }) => ({
        name: `${first_name} ${last_name}`,
        value: id
    }));

    const { employeeId } = await prompt([
        {
            type: "list",
            name: "employeeId",
            message: "Which employee's role do you want to update?",
            choices: employeeChoices
        }
    ]);

    const roles = await db.viewAllRoles();

    const roleChoices = roles.map(({ id, title }) => ({
        name: title,
        value: id
    }));

    const { roleId } = await prompt([
        {
            type: "list",
            name: "roleId",
            message: "Which role do you want to assign the selected employee?",
            choices: roleChoices
        }
    ]);

    await db.updateEmployee(employeeId, roleId);

    console.log("Employee role updated");

    prompts();
}
