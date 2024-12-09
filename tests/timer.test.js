const { delayExecution } = require('../timer');

jest.useFakeTimers();

describe('delayExecution', () => {
    it('should call the callback after the specified delay', () => {
        const callback = jest.fn();

        delayExecution(callback, 2000);

        jest.advanceTimersByTime(2000);

        expect(callback).toHaveBeenCalledTimes(1);
    });
});
