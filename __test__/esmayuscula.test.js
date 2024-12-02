const isUpperCase = require('../utils/esmayuscula');

test('Comprueba HOLA = True', () => {
    expect(isUpperCase('HOLA')).toBe(true)
})

test('Comprueba chau = False', () => {
    expect(isUpperCase('chau')).toBe(false)
    })