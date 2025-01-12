import { validateEmail } from '../src/utils/validatePassword';

describe('Email Validation', () => {
  test('should return true for valid email', () => {
    expect(validateEmail('test@example.com')).toBe(true);
  });

  test('should return false for invalid email', () => {
    expect(validateEmail('invalid-email')).toBe(false);
    expect(validateEmail('test@.com')).toBe(false);
  });

  test('should return false for empty input', () => {
    expect(validateEmail('')).toBe(false);
  });
});
