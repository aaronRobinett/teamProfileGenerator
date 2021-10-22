// Start the application by running node index.js

const { getEmployeeData } = require('./lib/userResponses');

console.log('Provide some info about your team and I will generate a webpage for you!\n');

const emplArr = [];

// Most of logic for application is in lib/userResponses.js
getEmployeeData(emplArr);


