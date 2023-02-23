const cTable = require("console.table");
var Table = require("easy-table");
const {
  initQuestions,
  departmentQuestions,
  roleQuestions,
  employeeQuestions,
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
// Query database
//   db.query('SELECT * FROM employee', function (err, results) {
//     console.log(results);
//   });

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
    console.log("something went wrong");
    //buildCMS();
  }
}
function viewEmployees() {}
function viewAllDepts() {
  db.query("SELECT * FROM department", function (err, results) {
    console.table(results);
    init();
  });
}
function viewAllRoles() {}
function addEmployee() {
  inquirer.prompt(employeeQuestions).then((answer) => {
    console.log(answer);
  });
  // .then(({ title, name, id, email, misc }) => {
  //   const manager = new Manager(title, name, id, email, misc);
  //   team.push(manager);
  //   init();
  // });
  console.log({ first_name, last_name, role });
}

function addDepartment() {
  inquirer.prompt(departmentQuestions).then((answer) => {
    console.log(answer);
    db.query(`INSERT INTO department SET ?`, answer, function (err, results) {
      console.table(results);
      init();
    });
  });
  // .then(({ title, name, id, email, misc }) => {
  //   const manager = new Manager(title, name, id, email, misc);
  //   team.push(manager);
  //   init();
  // });
}
function addRole() {
  //lets get all the department info ..... THEN.....

  inquirer.prompt(roleQuestions);
  // .then(({ title, name, id, email, misc }) => {
  //   const manager = new Manager(title, name, id, email, misc);
  //   team.push(manager);
  //   init();
  // });
  console.log({ first_name, last_name, role });
}

function updateRole() {
  // UPDATE employee
  // SET name = {$first_name, last_name'}
  // WHERE id = 2;
}

//init();

//const choices = ["bob", "sally", "steve"];
const choices = [
  { name: "bob", value: 1 },
  { name: "sally", value: 2 },
  { name: "steve", value: 3 },
];
inquirer
  .prompt({
    type: "list",
    name: "fun",
    message: "Whos your friend?",
    choices: choices,
  })
  .then((answer) => {
    console.log(answer);
  });
