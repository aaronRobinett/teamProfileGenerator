const inquirer = require('inquirer');
const Manager = require('./Manager.js');
const Engineer = require('./Engineer.js');
const Intern = require('./Intern.js');
const writeFile = require('../utils/generate-site.js');
const generatePage = require('../src/page-template');

// This function is exported to index.js and is the main logic for the application. It starts by
// checking for team manager information then call the other functions to collect user data.
function getEmployeeData(emplArr) {
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the name of your team manager?',
            validate: userInput => {
                if (userInput) {
                    return true;
                } else {
                    console.log('Please enter a name for your team manager!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "What is your team manager's employee id number?",
            validate: userInput => {
                if (userInput) {
                    return true;
                } else {
                    console.log('Please enter an id number for your team manager!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "What is your team manager's email address?",
            validate: userInput => {
                if (userInput) {
                    return true;
                } else {
                    console.log('Please enter an email for your team manager!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'onum',
            message: "What is your team manager's office number?",
            validate: userInput => {
                if (parseInt(userInput)) {
                    return true;
                } else {
                    console.log('Please enter a room number for your team manager!');
                    return false;
                }
            }
        }

    ])
        .then(managerData => {
            emplArr.push(new Manager(managerData.name, managerData.id, managerData.email, managerData.onum));
            getMenuResults(emplArr);
        });
}

// This is callled after each new team memeber is added.
function getMenuResults(employeeArr) {
    inquirer.prompt(
        [{
            type: 'list',
            message: 'Would you like to add another employee?',
            name: 'menuChoice',
            choices: ['Add an engineer', 'Add an intern', 'Finish building team']
        }
        ])
        .then(result => {
            if (result.menuChoice === 'Add an engineer') {
                addEngineer(employeeArr);
            }
            else if (result.menuChoice === 'Add an intern') {
                addIntern(employeeArr);
            }
            else {
                // end questions and generate site
                writeFile(generatePage(employeeArr));
            }
        });
}

function addEngineer(emplArr) {
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the name of your engineer?',
            validate: userInput => {
                if (userInput) {
                    return true;
                } else {
                    console.log('Please enter a name for your engineer!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "What is your engineer's employee id number?",
            validate: userInput => {
                if (userInput) {
                    return true;
                } else {
                    console.log('Please enter an id number for your engineer!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "What is your engineer's email address?",
            validate: userInput => {
                if (userInput) {
                    return true;
                } else {
                    console.log('Please enter an email for your engineer!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'github',
            message: "What is your team engineer's github username?",
            validate: userInput => {
                if (userInput) {
                    return true;
                } else {
                    console.log('Please enter a github username for your engineer!');
                    return false;
                }
            }
        }

    ])
        .then(engineerData => {
            emplArr.push(new Engineer(engineerData.name, engineerData.id, engineerData.email, engineerData.github));
            getMenuResults(emplArr);
        });
}

function addIntern(emplArr) {
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the name of your intern?',
            validate: userInput => {
                if (userInput) {
                    return true;
                } else {
                    console.log('Please enter a name for your intern!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "What is your intern's employee id number?",
            validate: userInput => {
                if (userInput) {
                    return true;
                } else {
                    console.log('Please enter an id number for your intern!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "What is your intern's email address?",
            validate: userInput => {
                if (userInput) {
                    return true;
                } else {
                    console.log('Please enter an email for your intern!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'school',
            message: "What is the name of your intern's school?",
            validate: userInput => {
                if (userInput) {
                    return true;
                } else {
                    console.log('Please enter a school for your intern!');
                    return false;
                }
            }
        }

    ])
        .then(internData => {
            emplArr.push(new Intern(internData.name, internData.id, internData.email, internData.school));
            getMenuResults(emplArr);
        });
}

module.exports = { getEmployeeData };