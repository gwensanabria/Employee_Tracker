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
        type: "input"
    })
}