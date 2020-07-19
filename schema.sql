DROP DATABASE IF EXISTS Employee_TrackerDB;

create database Employee_TrackerDB;

use Employee_TrackerDB;

CREATE TABLE departments (
    id INT AUTO_INCREMENT PRIMARY KEY, 
    name VARCHAR (30)
);

create table role (
id int auto_increment primary key,
title varchar(30),
salary decimal(10,2),
departments_id int
-- constraint fk_departments foreign key (departments_id)
-- references departments(id)
);

create table employee (
id int auto_increment primary key,
first_name varchar(30) not null,
last_name varchar(30) not null,
role_id int,
-- constraint fk_role foreign key (role_id)
-- references role(id),
manager_id int null
-- constraint fk_manager foreign key (manager_id)
-- references employee(id)
);

-- Errors when using constraint fk_manager (cannot add or update a child row)