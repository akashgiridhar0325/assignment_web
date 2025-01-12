import { validatePassword } from '../src/utils/validatePassword';

describe('Password Strength Validation', () => {
  test('should return true for strong password', () => {
    expect(validatePassword('Str0ng!Password')).toBe(true);
  });

  test('should return false for password without special character', () => {
    expect(validatePassword('StrongPassword1')).toBe(false);
  });

  test('should return false for short password', () => {
    expect(validatePassword('S!1')).toBe(false);
  });

  test('should return false for password without uppercase letter', () => {
    expect(validatePassword('weakpassword1!')).toBe(false);
  });
});
