//DEPENDANCIES
const mysql = require("mysql");
const inquirer = require("inquirer");


// SET CONNECTION TO DATABASE
const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "Gs1520537!", // check how to keep password private
    database: "Employee_TrackerDB"
});

connection.connect(function(err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
    track();
})