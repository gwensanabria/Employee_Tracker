# Foobar

Allows user to:
  
* Add departments, roles, employees

* View departments, roles, employees

* Update employee roles

## Installation

* Fork repo.

* Employee Tracker requires [Node.js](https://nodejs.org/) and the dependancies [mysql] and [inquirer]. Can install the dependancy [dotenv] to keep mysql password protected.

* Change .env-sample to .env and replace password with your mysql password

* Run [schema.sql] file in [MySQL Workbench] to set up database, can use [seeds.sql] to have generic starter data. Make sure mysql database matches database name in the code

* Start node project and then install dependencies and run in the termainal

```sh
$ cd Employee_Tracker
$ npm init -y
$ npm install mysql inquirer dotenv
$ node server.js
```

## Usage

* In the terminal run the following after installation.

```sh
$ node server.js
```

* Select what you would like to do from the list of options and fill in data as prompted.

## Contributing
Feel free to fork repo. For major changes, please open an issue first to discuss what you would like to change.

## License
[![License: WTFPL](https://img.shields.io/badge/License-WTFPL-brightgreen.svg)](http://www.wtfpl.net/about/)
