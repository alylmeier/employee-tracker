const cTable = require("console.table");
var Table = require("easy-table");
const {
  initQuestions,
  departmentQuestions,
  roleQuestions,
  employeeQuestions,
  updateQuestions,
} = require("./questions");
//const fs = require("fs");

const inquirer = require("inquirer");
// Import and require mysql2
const mysql = require("mysql2");

const db = mysql.createConnection(
  {
    host: "localhost",
    // MySQL username,
    user: "root",
    // MySQL password
    password: "password",
    database: "cms_db",
  },
  console.log(`Connected to the cms_db database.`)
);

db.connect((err) => {
  if (err) throw err;
});

function init() {
  console.log("This is the employee tracking application");
  inquirer.prompt(initQuestions).then(({ action }) => {
    console.log(action);
    generate(action);
  });
}

function generate(action) {
  if (action === "View All Employees") {
    viewEmployees();
  } else if (action === "Add Employee") {
    addEmployee();
  } else if (action === "Update Employee Role") {
    updateRole();
  } else if (action === "View All Roles") {
    viewAllRoles();
  } else if (action === "Add Role") {
    addRole();
  } else if (action === "View All Departments") {
    viewAllDepts();
  } else if (action === "Add Department") {
    addDepartment();
  } else {
    console.log("Restart the application if you want to do more. Thank you!");
  }
}

function viewAllDepts() {
  db.query("SELECT * FROM department", function (err, results) {
    console.table(results);
    init();
  });
}
function viewAllRoles() {
  db.query(
    "SELECT role.title, role.salary, department.name FROM role LEFT JOIN department ON department.id = role.department_id",
    function (err, results) {
      console.table(results);
      init();
    }
  );
}
function viewEmployees() {
  db.query("SELECT * FROM employee", function (err, results) {
    console.table(results);
    init();
  });
}
function addEmployee() {
  inquirer.prompt(employeeQuestions).then((answer) => {
    db.query(`INSERT INTO employee SET ?`, answer, function (err, results) {
      init();
    });
  });
}

function addDepartment() {
  inquirer.prompt(departmentQuestions).then((answer) => {
    db.query(`INSERT INTO department SET ?`, answer, function (err, results) {
      init();
    });
  });
}
function addRole() {
  inquirer.prompt(roleQuestions).then((answer) => {
    //you were thinking of push to the array here, but would have to add a lot of code
    db.query(`INSERT INTO role SET ?`, answer, function (err, results) {
      init();
    });
  });
}

function updateRole() {
  inquirer.prompt(updateQuestions).then((answer) => {
    const sql = `UPDATE employee SET role_id = ? WHERE first_name = ? AND last_name = ? `;
    const params = [answer.role_id, answer.first_name, answer.last_name];
    db.query(sql, params, (err, result) => {
      init();
    });
  });
}

init();
