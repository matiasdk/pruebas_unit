const palindromo = require('../utils/palindromo');

    describe('palindromo', () => {
        test.each`
            firstValue | expectedResult    
            ${'MATIAS'}| ${'SAITAM'}
            ${'ROMA'}  | ${'AMOR'}
            ${'PERRO'} | ${'ORREP'}
    `('$firstValue should return $expectedResult', ({firstValue, expectedResult}) => {
        expect(palindromo(firstValue)).toBe(expectedResult);
        
    })
});