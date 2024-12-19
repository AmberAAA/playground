import { isMobile } from './char';
import { isChinesePhoneNumber } from './char';

describe('isMobile', () => {
    beforeEach(() => {
        // Reset the window size before each test
        window.innerWidth = 1024;
    });

    test('should return true when window width is less than 768', () => {
        window.innerWidth = 767;
        expect(isMobile()).toBe(true);
    });

    test('should return false when window width is 768 or greater', () => {
        window.innerWidth = 768;
        expect(isMobile()).toBe(false);

        window.innerWidth = 1024;
        expect(isMobile()).toBe(false);
    });
});
describe('isChinesePhoneNumber', () => {
    test('should return true for valid Chinese phone numbers', () => {
        expect(isChinesePhoneNumber('13812345678')).toBe(true);
        expect(isChinesePhoneNumber('15987654321')).toBe(true);
        expect(isChinesePhoneNumber('17812345678')).toBe(true);
    });

    test('should return false for invalid Chinese phone numbers', () => {
        expect(isChinesePhoneNumber('23812345678')).toBe(false); // Invalid starting digit
        expect(isChinesePhoneNumber('1381234567')).toBe(false);  // Too short
        expect(isChinesePhoneNumber('138123456789')).toBe(false); // Too long
        expect(isChinesePhoneNumber('abcdefghijk')).toBe(false);  // Non-numeric
    });
});