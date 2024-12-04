const isUpperCase = require('../utils/esmayuscula');

    describe('isUpercase', () => {
        test.each`
            firstValue | expectedResult    
            ${'HOLA'}  | ${true}
            ${'chau'}  | ${false}
    `('$firstValue should return $expectedResult', ({firstValue, expectedResult}) => {
        expect(isUpperCase(firstValue)).toBe(expectedResult);
    
    })
});