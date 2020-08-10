import { validateUrl } from "..";

describe('Test URL validator', () => {
  test('Testing for valid URL input from user', () => {
    const testInput = 'ww.thismightbeurl.';
    expect(validateUrl(testInput) === false).toBe(true);
  });
  test('Testing for valid URL input from user', () => {
    const testInput = 'www.udacity.com';
    expect(validateUrl(testInput) === true).toBe(true);
  });
  }
)