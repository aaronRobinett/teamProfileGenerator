const getLastItem = employee => {
    let strArray = [];
    const role = employee.getRole();
    if (role === 'Manager') {
        strArray.push(`<p>Office number: ${employee.getOfficeNumber()}</p>`);
    } else if (role === 'Engineer') {
        strArray.push(`<p>GitHub: <a href="https://github.com/${employee.getGithub()}">${employee.getGithub()}</a></p>`);
    } else {
        strArray.push(`<p>School: ${employee.getSchool()}</p>`);
    }
    return strArray[0];
}

const makeRows = employeeArr => {
    const rowArrays = [];
    const rowCount = Math.ceil(employeeArr.length / 3);
    for (let i = 0; i < rowCount; i++) {
        const tempArray = [];
        for (let j = 0; j < 3; j++) {
            if (i * 3 + j < employeeArr.length) {
                tempArray.push(employeeArr[i * 3 + j]);
            }
        }
        rowArrays.push(tempArray);
    }

    const strArray = [];
    for (let i = 0; i < rowCount; i++) {
        strArray.push('<div class="row">');
        for (let j = 0; j < rowArrays[i].length; j++) {
            strArray.push(makeCard(rowArrays[i][j]));
        }
        strArray.push('</div>');
    }
    return strArray.join('');

}

const makeCard = employee => {
    const str = `<div class="col-4">
    <div class="card">
        <div class="card-header bg-primary text-white">
            <h4>${employee.getName()}</h4>
            <p>${employee.getRole()}</p>
        </div>
        <div class="card-body">
            <p>ID: 2</p>
            <p>Email: <a href="mailto:${employee.getEmail()}">${employee.getEmail()}</a></p>
            ${getLastItem(employee)}
            </div>
            </div>
            </div> `;
    return str;
}


module.exports = employeeData => {
    const pageString = `<!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>My Team</title>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css"
            integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
    </head>
    
    <body>
        <header>
            <div class="container-fluid bg-danger pt-5 pb-5 text-center">
                <h3 class="text-light">My Team</h3>
            </div>
        </header>
        <div class="container pt-3 pb-3" id="card-area">
        ${makeRows(employeeData)}
        </div>
        <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
            integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"
            crossorigin="anonymous"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js"
            integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49"
            crossorigin="anonymous"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js"
            integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy"
            crossorigin="anonymous"></script>
    </body>
    
    </html>`;
    return pageString;
};