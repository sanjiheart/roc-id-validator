import RocIdValidator from '../src';

test('correct', () => {
  expect(RocIdValidator.validate('A123456789')).toBe(true);
});

test('wrong', () => {
  expect(RocIdValidator.validate('A987654321')).toBe(false);
});