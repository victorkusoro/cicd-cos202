const { randomNumber } = require('./index');

test('generates a random number between 1 and 50', () => {
  const res = randomNumber();
  expect(res).toBeGreaterThanOrEqual(1);
  expect(res).toBeLessThanOrEqual(50);
});