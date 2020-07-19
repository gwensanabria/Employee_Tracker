-- create database Employee_TrackerDB;

-- use Employee_TrackerDB;

-- CREATE TABLE department (
--     id INT AUTO_INCREMENT PRIMARY KEY 
--     name VARCHAR (30)
-- );

-- CREATE TABLE roles (
--     id INT AUTO_INCREMENT PRIMARY KEY
--     title VARCHAR (30)
--     salary DECIMAL 
--     department_id INT
--     constraint fk_department FOREIGN KEY (department_id)
-- );

-- CREATE TABLE employee (
--     id INT AUTO_INCREMENT  PRIMARY KEY
--     first_name VARCHAR(30) NOT NULL 
--     last_name VARCHAR(30) NOT NULL 
--     role_id INT
--     constraint fk_role FOREIGN KEY (role_id)
--     manager_id INT
--     constraint fk_manager FOREIGN KEY (manager_id) 
-- )

DROP DATABASE IF EXISTS Employee_TrackerDB;

create database Employee_TrackerDB;

use Employee_TrackerDB;

CREATE TABLE department (
    id INT AUTO_INCREMENT PRIMARY KEY, 
    name VARCHAR (30)
);

create table role (
id int auto_increment primary key,
title varchar(30),
salary decimal,
department_id int,
constraint fk_department foreign key (department_id)
references department(id)
);

create table employee (
id int auto_increment primary key,
first_name varchar(30) not null,
last_name varchar(30) not null,
role_id int,
constraint fk_role foreign key (role_id)
references role(id),
manager_id int,
constraint fk_manager foreign key (manager_id)
references employee(id)
)