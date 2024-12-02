const palindromo = require('../utils/palindromo');

test('Comprueba ROMA = AMOR', () => {
    expect(palindromo('ROMA')).toBe('AMOR')
    })

test('Comprueba PERRO no ORREP', () => {
    expect(palindromo('PERRO')).not.toBe('ROPE')
    })
