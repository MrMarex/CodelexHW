import validateName from '../../components/validateName';

describe('validateName', () => {
  test('Returns true for valid name', () => {
    const name = 'John Doe';
    expect(validateName(name)).toBe(true);
  });

  test('Returns false for name with less than 2 characters', () => {
    const name = 'J';
    expect(validateName(name)).toBe(false);
  });

  test('Returns false for name with special characters', () => {
    const name = 'John Doe!';
    expect(validateName(name)).toBe(false);
  });
});
