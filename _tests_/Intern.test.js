const { test, expect } = require('@jest/globals');
const Intern = require('../lib/Intern.js');

test('create a new intern object', () => {
    const intern= new Intern('todd', '6000', 'todd@gmail.com', 'University of Oregon');
    expect(intern.name).toBe('todd');
    expect(intern.id).toBe('6000');
    expect(intern.email).toBe('todd@gmail.com');
    expect(intern.school).toBe('University of Oregon');
});

test('getRole returns intern', () => {
    const intern= new Intern('todd', '6000', 'todd@gmail.com', 'University of Oregon');
    expect(intern.getRole()).toBe('Intern'); 
});

test('getSchool returns a string', () => {
    const intern= new Intern('todd', '6000', 'todd@gmail.com', 'University of Oregon');
    expect(intern.getSchool()).toEqual(expect.any(String));
});