// math.test.js
const sum = require('../math');

describe('sum function', () => {
    it('should return the correct sum of two positive numbers', () => {
        expect(sum(2, 3)).toBe(5);
    });

    it('should return the correct sum of a positive and a negative number', () => {
        expect(sum(7, -3)).toBe(4);
    });

    it('should return 0 if both numbers are 0', () => {
        expect(sum(0, 0)).toBe(0);
    });
});
