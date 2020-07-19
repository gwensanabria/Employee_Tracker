//DEPENDANCIES
const mysql = require("mysql");
const inquirer = require("inquirer");
require('dotenv').config();


// SET CONNECTION TO DATABASE
const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: process.env.PASSWORD,
    database: "Employee_TrackerDB"
});

connection.connect(function(err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
    track();
})

function track() {
    inquirer.prompt({
        name: "action",
        type: "list",
        message: "What would you like to add?",
        choices: [
            "Add a department?",
            "Add a role?",
            "Add an employee?",
            "View all departments?",
            "view all roles?",
            "View all employees?",
            "Update employee roles?",
            "DONE"
        ]
})
.then(function(answer) {
    switch (answer.action) {
        case "Add a department?":
            addDep();
            break;

        case "Add a role?":
            addRole();
            break;

        case "Add an employee?":
            addEmp();
            break;

        case "View all departments?":
            viewDep();
            break;

        case "view all roles?":
            viewRole();
            break;

        case "View all employees?":
            viewEmp();
            break;

        case "Update employee roles?":
            update();
            break;

        default:
            connection.end()
            break;
    }
})
}

function addDep() {
    inquirer.prompt({
        name: "addDepartment",
        type: "input",
        message: "What department do you want to add?"
    })
    .then(function(answer) {
        connection.query("INSERT INTO department (name) VALUES (?)", [answer.addDepartment], function(err, data) {
            if (err) throw err;
            console.log('Department added!')
            track()
        })
    })
}

function addRole() {
    inquirer.prompt({
        name: "addRole",
        type: "input",
        message: "What role would you like to add?"
    })
    .then(function(answer) {
        connection.query("INSERT INTO role (title) VALUES (?)", [answer.addRole], function(err, data) {
            if (err) throw err;
            console.log('Role added!')
            track()
        })
    })
}

function addEmp() {
    inquirer.prompt([
        {
        name: "first",
        type: "input",
        message: "What is the employee's first name?"
        },
        {
        name: "last",
        type: "input",
        message: "What is the employee's last name?"
        },
        {
        name: "roleID",
        type: "input",
        message: "What is the employee's role ID?"
        },
        {
        name: "managerID",
        type: "input",
        message: "What is the employee's manager's ID (0 if none)?"
        }
    ])
    .then(function(answer) {
        connection.query("INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)", [answer.first, answer.last, answer.roleID, answer.managerID], function(err, data) {
            if (err) throw err;
            console.log('Employee added!')
            track()
        })
    })
}