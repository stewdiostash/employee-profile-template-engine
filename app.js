const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const util = require("util");
const appendFileAsync = util.promisify(fs.appendFile);
const generateManager = require("./utils/generateManager.js");
const employees = [];

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

const managerQuestions = [
  {
    name: "name",
    message: "What's your manager's name?",
    type: "input",
  },
  {
    name: "id",
    message: "What's your manager's ID number?",
    type: "input",
  },
  {
    name: "email",
    message: "What's your manager's email?",
    type: "input",
  },
  {
    name: "officeNumber",
    message: "What's your manager's office number?",
    type: "input",
  },
];

const engineerQuestions = [
  {
    name: "name",
    message: "What's your engineer's name?",
    type: "input",
  },
  {
    name: "id",
    message: "What's your engineer's ID number?",
    type: "input",
  },
  {
    name: "email",
    message: "What's your engineer's email?",
    type: "input",
  },
  {
    name: "github",
    message: "What's your engineer's GitHub username?",
    type: "input",
  },
];

const internQuestions = [
  {
    name: "name",
    message: "What's your intern's name?",
    type: "input",
  },
  {
    name: "id",
    message: "What's your intern's ID number?",
    type: "input",
  },
  {
    name: "email",
    message: "What's your intern's email?",
    type: "input",
  },
  {
    name: "school",
    message: "Which school does your intern attend?",
    type: "input",
  },
];

const addQuestion = [
  {
    name: "add",
    message: "Add an additional team member?",
    type: "list",
    choices: ["Add Engineer", "Add Intern", "I'm done adding team members"],
  },
];

function init() {
  inquirer
    .prompt(managerQuestions)
    .then((answers) => {
      console.log(answers);
      const manager = new Manager(
        answers.name,
        answers.id,
        answers.email,
        answers.officeNumber
      );
      employees.push(manager);
      console.log(employees);
      addOption();
    })
    .catch((err) => {
      console.log(err);
      console.log("Failed to add manager");
    });
}

function addEngineer() {
  inquirer
    .prompt(engineerQuestions)
    .then((answers) => {
      console.log(answers);
      const engineer = new Engineer(
        answers.name,
        answers.id,
        answers.email,
        answers.github
      );
      employees.push(engineer);
      console.log(employees);
      addOption();
    })
    .catch((err) => {
      console.log(err);
      console.log("Failed to add engineer");
    });
}

function addIntern() {
  inquirer
    .prompt(internQuestions)
    .then((answers) => {
      console.log(answers);
      const intern = new Intern(
        answers.name,
        answers.id,
        answers.email,
        answers.school
      );
      employees.push(intern);
      console.log(employees);
      addOption();
    })
    .catch((err) => {
      console.log(err);
      console.log("Failed to add intern");
    });
}

function addOption() {
  inquirer
    .prompt(addQuestion)
    .then((answers) => {
      if (answers.add === "Add Engineer") {
        addEngineer();
      } else if (answers.add === "Add Intern") {
        addIntern();
      } else if (answers.add === "I'm done adding team members") {
        publishTeam();
      }
    })
    .catch((err) => {
      console.log(err.message);
    });
}

function publishTeam() {
    fs.writeFileSync(outputPath, render(employees));
  }

init();

// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
