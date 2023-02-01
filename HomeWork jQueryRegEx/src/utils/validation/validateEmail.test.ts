import validateEmail from '../../components/validateEmail';

describe('validateEmail', () => {
  test('Returns true for valid email', () => {
    const email = 'john.doe@example.com';
    expect(validateEmail(email)).toBe(true);
  });

  test('Returns false for invalid email format', () => {
    const email = 'johndoe@example';
    expect(validateEmail(email)).toBe(false);
  });
});
