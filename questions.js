const managers = [
  { name: "John Doe", value: 1 },
  { name: "Mike Chan", value: 2 },
  { name: "Ashley Rodriguez", value: 3 },
  { name: "Kevin Tupnik", value: 4 },
  { name: "Kunal Singh", value: 5 },
  { name: "Malia Brown", value: 6 },
  { name: "None", value: null },
];

const departments = [
  { name: "Engineering", value: 1 },
  { name: "Finance", value: 2 },
  { name: "Legal", value: 3 },
  { name: "Sales", value: 4 },
  { name: "Service", value: 5 },
];

const roles = [
  { name: "Sales Lead", value: 1 },
  { name: "Salesperson", value: 2 },
  { name: "Lead Engineer", value: 3 },
  { name: "Software Engineer", value: 4 },
  { name: "Account Manager", value: 5 },
  { name: "Accountant", value: 6 },
  { name: "Legal Team Lead", value: 7 },
  { name: "Lawyer", value: 8 },
  { name: "Customer Service", value: 9 },
];
const initQuestions = [
  {
    type: "list",
    message: "What would you like to do?",
    choices: [
      "Add Employee",
      "Update Employee Role",
      "View All Employees",
      "Add Role",
      "View All Roles",
      "Add Department",
      "View All Departments",
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
    choices: departments,
    name: "department_id",
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
    choices: roles,
    name: "role_id",
  },
  {
    type: "list",
    message: "Who is their manager?",
    choices: managers,
    name: "manager_id",
  },
];
const updateQuestions = [
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
    message: "What is their new role?",
    choices: roles,
    name: "role_id",
  },
];

module.exports = {
  initQuestions,
  departmentQuestions,
  roleQuestions,
  employeeQuestions,
  updateQuestions,
};
