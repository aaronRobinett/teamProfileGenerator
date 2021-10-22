const { test, expect } = require('@jest/globals');
const Manager = require('../lib/Manager.js');

test('create a new manager object', () => {
    const manager = new Manager('todd', '6000', 'todd@gmail.com', 123);
    expect(manager.name).toBe('todd');
    expect(manager.id).toBe('6000');
    expect(manager.email).toBe('todd@gmail.com');
    expect(manager.officeNumber).toBe(123);
});

test('getRole returns Manager', () => {
    const manager = new Manager('todd', '6000', 'todd@gmail.com', 123);
    expect(manager.getRole()).toBe('Manager'); 
});