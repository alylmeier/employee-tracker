const initQuestions = [
  {
    type: "list",
    message: "What would you like to do?",
    choices: [
      "View All Employees",
      "Add Employee",
      "Update Employee Role",
      "View All Roles",
      "Add Role",
      "View All Departments",
      "Add Department",
      "Quit",
    ],
    name: "action",
  },
];

const departmentQuestions = [
  {
    type: "input",
    message: "What is the name of the department?",
    name: "name",
  },
];

const roleQuestions = [
  {
    type: "input",
    message: "What is the name of the role?",
    name: "title",
  },
  {
    type: "input",
    message: "What is the salary of the role?",
    name: "salary",
  },
  {
    type: "list",
    message: "Which department does the role belong?",
    choices: ["Engineering", "Finance", "Legal", "Sales", "Service"],
    name: "department",
  },
];
const employeeQuestions = [
  {
    type: "input",
    message: "What is the employee's first name?",
    name: "first_name",
  },
  {
    type: "input",
    message: "What is the employee's last name?",
    name: "last_name",
  },
  {
    type: "list",
    message: "What is their role?",
    choices: [
      "Sales Lead",
      "Salesperson",
      "Lead Engineer",
      "Software Enginerr",
      "Account Manager",
      "Accountant",
      "Legal Team Lead",
      "Lawyer",
      "Customer Service",
    ],
    name: "role",
  },
  {
    type: "list",
    message: "Who is their manager?",
    choices: [
      "John Doe",
      "Mike Chan",
      "Ashley Rodriguez",
      "Kevin Tupnik",
      "Kunal Singh",
      "Malia Brown",
      "None",
    ],
    name: "manager",
  },
];

module.exports = {
  initQuestions,
  departmentQuestions,
  roleQuestions,
  employeeQuestions,
};
