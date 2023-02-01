import validatePassword from '../../components/validatePassword';

describe('validatePassword', () => {
  test('Returns true for valid password', () => {
    const password = 'P@ssword1';
    expect(validatePassword(password)).toBe(true);
  });

  test('Returns false for password with less than 8 characters', () => {
    const password = 'P@ssw1';
    expect(validatePassword(password)).toBe(false);
  });

  test('Returns false for password without a number', () => {
    const password = 'P@ssword!';
    expect(validatePassword(password)).toBe(false);
  });

  test('Returns false for password without a special character', () => {
    const password = 'Password1';
    expect(validatePassword(password)).toBe(false);
  });
});
