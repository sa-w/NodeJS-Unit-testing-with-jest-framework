
const subtract = require('./subtract');

test('Subtracts two numbers well', () => {
    expect(subtract(4, 3)).toBe(1);
})