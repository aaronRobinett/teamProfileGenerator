const { test, expect } = require('@jest/globals');
const Employee = require('../lib/Employee.js');

test('creates an employee object', () => {
    const empl = new Employee('todd', '6969', 'todd@gmail.com');
    expect(empl.name).toBe('todd');
    expect(empl.id).toBe('6969');
    expect(empl.email).toBe('todd@gmail.com');
});

test('gets attribute when function is called', () => {
    const empl = new Employee('todd', '6969', 'todd@gmail.com');
    expect(empl.getName()).toBe('todd');
    expect(empl.getId()).toBe('6969');
    expect(empl.getEmail()).toBe('todd@gmail.com');
    expect(empl.getRole()).toEqual(expect.any(String));
});

