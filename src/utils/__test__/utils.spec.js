require('colors');
const { errorCheck, localeDate, logger, random, regexp } = require('../');

describe('utils', () => {
    describe('error-check', () => {
        const args = [1, 2];

        it('should resolve when no error', () => {
            return errorCheck(null, args).then(arg => {
                expect(arg).toEqual(args);
            });
        });

        it('should log when error', () => {
            const error = {
                message: 'test-error-message',
                stack: ['test-error-stack1', 'test-error-stack2']
            };
            spyOn(logger, 'error');
            spyOn(logger, 'debug');

            errorCheck(error, args);
            expect(logger.error).toHaveBeenCalledWith(error.message);
            expect(logger.debug).toHaveBeenCalledWith(error.stack);
        });
    });

    describe('locale-date', () => {
        it('should return locale date', () => {
            const result = localeDate(new Date('December 17, 1995 03:24:00'));
            expect(result).toEqual('1995-12-17 03:24:00');
        });
    });

    describe('logger', () => {
        beforeEach(() => {
            spyOn(console, 'log');
        });

        it('should log error message', () => {
            const message = 'test-error-message';
            const result = logger.error(message);

            expect(console.log).toHaveBeenCalled();
            expect(result).toMatch('ERROR');
            expect(result).toMatch('test-error-message');
        });
    });

    describe('regexp', () => {
        it('should return first occurence', () => {
            const result = regexp('^([abc]+)d$', 'abccbcd');
            expect(result).toEqual(['abccbc']);
        });

        it('should return null when no match', () => {
            const result = regexp('^([abc]+)d$', 'zxcvsddvxcz');
            expect(result).toEqual(null);
        });

        it('should return multiple match', () => {
            const result = regexp('^([abc]+) ([0-9]+) (test)$', 'abcbca 127886 test');
            expect(result).toEqual(['abcbca', '127886', 'test']);
        });
    });

    describe('random', () => {
        it('should genere a random number', () => {
            for (let i = 0; i < 1000; i++) {
                const result = random(100);
                expect(result).toBeLessThan(100);
                expect(result).toBeGreaterThanOrEqual(0);
            }
        });
    });
});
