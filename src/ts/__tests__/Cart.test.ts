import Cart from '../service/Cart';
import Movie from '../domain/Movie';

const cart = new Cart();
const movie1 = new Movie(
  1009,
  'Мстители',
  'The Avengers',
  'IMAX',
  2012,
  'США',
  'Avengers Assemble!',
  ['фантастика', 'боевик', 'фэнтези', 'приключения'],
  '137 мин. / 02:17',
  2000,
);

cart.add(movie1);

const movie2 = new Movie(
  1010,
  'Мстители',
  'The Avengers',
  'IMAX',
  2012,
  'США',
  'Avengers Assemble!',
  ['фантастика', 'боевик', 'фэнтези', 'приключения'],
  '137 мин. / 02:17',
  2000,
);

cart.add(movie2);

test('method "sum" of class "Cart" should work correctly', () => {
  expect(cart.sum()).toBe(4000);
});

test('method "totalSum" of class "Cart" should work correctly', () => {
  expect(cart.totalSum(50)).toBe(2000);
});

test('method "deleteItem" of class "Cart" should work correctly', () => {
  cart.deleteItem(1010);
  expect(cart.items).toEqual([movie1]);
});
