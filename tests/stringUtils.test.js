const { capitalize } = require('../stringUtils');

describe('capitalize', () => {
    it('should capitalize the first letter of a word', () => {
        expect(capitalize('hello')).toBe('Hello');
    });

    it('should handle empty strings', () => {
        expect(capitalize('')).toBe('');
    });

    it('should handle already capitalized words', () => {
        expect(capitalize('World')).toBe('World');
    });

    it('should handle mixed case input', () => {
        expect(capitalize('hELLo')).toBe('Hello');
    });
});
