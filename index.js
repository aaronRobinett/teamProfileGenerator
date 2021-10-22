const { getEmployeeData } = require('./lib/userResponses');

console.log('Provide some info about your team and I will generate a webpage for you!\n');

const emplArr = [];
getEmployeeData(emplArr);


