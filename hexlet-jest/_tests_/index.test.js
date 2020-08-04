import reverse from '../src/index.js';

test('reverse', () => {
  expect(reverse('hello')).toEqual('ollleh');
  expect(reverse('')).toEqual('');
});l
