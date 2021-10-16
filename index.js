const { getEmployeeData } = require('./lib/userResponses');

console.log('Provide some info about your team and I will generate a webpage for you!');

const emplArr = [];
getEmployeeData(emplArr);





// getManagerData()
//     .then(userData => {
//        return getEmployeeData(userData);
//     })
//     .then(allEmployeeData => {
//         console.log(allEmployeeData);
//     })
//     .catch(err => {
//         console.log(err);
//     });


