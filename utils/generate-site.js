const fs = require('fs');

const writeFile = fileContent => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/index.html', fileContent, err => {
            //if error reject promise 
            if (err) {
                reject(err);
                return;
            }

            // if no error resolve
            resolve({
                ok: true,
                message: 'File created!'
            });
        });
    });
};

module.exports = writeFile;