const { test, expect } = require('@jest/globals');
const Engineer = require('../lib/Engineer.js');

test('create a new engineer object', () => {
    const engineer = new Engineer('todd', '6000', 'todd@gmail.com', 'toddhub');
    expect(engineer.name).toBe('todd');
    expect(engineer.id).toBe('6000');
    expect(engineer.email).toBe('todd@gmail.com');
    expect(engineer.github).toBe('toddhub');
});

test('getGitHub returns a string', () => {
    const engineer = new Engineer('todd', '6000', 'todd@gmail.com', 'toddhub');
    expect(engineer.getGithub()).toEqual(expect.any(String)); 
});

test('getRole returns Engineer', () => {
    const engineer = new Engineer('todd', '6000', 'todd@gmail.com', 'toddhub');
    expect(engineer.getRole()).toBe('Engineer'); 
});