const inquirer = require('inquirer');

function getUserResponses() {
    return inquirer.prompt([
        {
            type: 'input'
        }
    ])
}

mosule.exports = getUserResponses;