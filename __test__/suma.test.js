const sum = require('../utils/suma');

test('Comprueba suma 1 + 2 es igual 3', () => {
    expect(sum(1,2)).toBe(3)
})

test('Comprueba suma -1 + 2 es igual 3', () => {
    expect(sum(-1,2)).toBe(1)
})