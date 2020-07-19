INSERT INTO departments (name) VALUES ("Billing");

INSERT INTO departments (name) VALUES ("Human Resources");

INSERT INTO role (title, salary, departments_id) VALUES ('manager', '52.01', '1');

INSERT INTO role (title, salary, departments_id) VALUES ('IT', '55.27', '2');

INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ('Matt', 'Mars', '1', '0');

INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ('Spencer', 'Knass', '2', '1');

INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ('Myka', 'Wells', '3', '2');