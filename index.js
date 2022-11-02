const { connection } = require("./db/connection");
const inquirer = require("inquirer");

function employeeView() {
    inquirer
      .prompt({
        name: "action",
        type: "list",
        message: "What would you like to do?",
        choices: [
          "View All Departments",
          "View All Roles",
          "View All Employees",
          "Add Department",
          "Add Role",
          "Add Employee",
          "Update Employee Role",
          "Quit",
        ],
      })
      .then((res) => {
        let choice = res.action;
        switch (choice) {
          case "View All Departments":
            departmentsView();
            break;
          case "View All Roles":
            rolesView();
            break;
          case "View All Employees":
            employeesView();
            break;
          case "Add Department":
            addDepartment();
            break;
          case "Add Role":
            addRole();
            break;
          case "Add Employee":
            addEmployee();
            break;
          case "Update Employee Role":
            updateEmployeeRole();
            break;
          case "Quit":
            connection.end();
            break;
        }
      });