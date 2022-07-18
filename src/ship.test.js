import Ship from './ship';

const ship = Ship(2, { x: 4, y: 4, orientation: 'h' });
test('hit should return ERROR if coordenates are out of range', () => {
  expect(ship.hit(10, 5)).toMatch('ERROR');
});

test('hit should return MISS if coordenates do not hit the ship', () => {
  expect(ship.hit(0, 5)).toMatch('MISS');
});

test('hit should return HIT if coordenates do hit the ship', () => {
  expect(ship.hit(4, 4)).toMatch('HIT');
});

test('isSunk should return false if the boat is not sunk', () => {
  expect(ship.isSunk()).toBeFalsy();
});

test('isSunk should return false if the boat is not sunk', () => {
  ship.hit(4, 5);
  expect(ship.isSunk()).toBeTruthy();
});
