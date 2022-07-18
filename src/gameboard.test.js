import Gameboard from './gameboard';
import * as utils from './utils';
import Ship from './ship';

test('addShip should return error when ships share space', () => {
  const gameboard = Gameboard();
  gameboard.addShip(2, { x: 0, y: 0, orientation: 'h' });
  expect(() => gameboard.addShip(3, { x: 0, y: 0, orientation: 'v' })).toThrow('There another ship in that place');
});

test('addShip should return SUCCESS if there is no ship collision', () => {
  const gameboard = Gameboard();
  gameboard.addShip(2, { x: 0, y: 0, orientation: 'h' });
  expect(gameboard.addShip(3, { x: 1, y: 0, orientation: 'v' }).status).toMatch('SUCCES');
});

test('addShip should return a correct array if there is no ship colision', () => {
  const gameboard = Gameboard();
  gameboard.addShip(2, { x: 0, y: 0, orientation: 'h' });
  const successArray = utils.getEmptyBoard();
  successArray[0][0] = 'P';
  successArray[0][1] = 'P';
  successArray[1][0] = 'S';
  successArray[2][0] = 'S';
  successArray[3][0] = 'S';
  expect(gameboard.addShip(3, { x: 1, y: 0, orientation: 'v' }).board).toEqual(successArray);
});

test('receiveAttack miss should undefined shipHit and the appropiate board array', () => {
  const gameboard = Gameboard();
  gameboard.addShip(2, { x: 0, y: 0, orientation: 'h' });
  gameboard.addShip(3, { x: 1, y: 0, orientation: 'v' });
  const successArray = utils.getEmptyBoard();
  successArray[0][0] = 'P';
  successArray[0][1] = 'P';
  successArray[1][0] = 'S';
  successArray[2][0] = 'S';
  successArray[3][0] = 'S';
  successArray[4][4] = 'X';
  expect(gameboard.receiveAttack(4, 4).shipHit).toBe();
  expect(gameboard.receiveAttack(4, 4).board).toEqual(successArray);
});

test('receiveAttack hit should return the ship hit as shipHit and the appropiate board array', () => {
  const gameboard = Gameboard();
  gameboard.addShip(2, { x: 0, y: 0, orientation: 'h' });
  gameboard.addShip(3, { x: 1, y: 0, orientation: 'v' });
  const successArray = utils.getEmptyBoard();
  successArray[0][0] = 'P';
  successArray[0][1] = 'P';
  successArray[1][0] = 'S';
  successArray[2][0] = 'S';
  successArray[3][0] = 'S';
  successArray[0][0] = 'X';
  expect(gameboard.receiveAttack(0, 0).shipHit.name).toBe(Ship(2, { x: 0, y: 0, orientation: 'h' }).name);
  expect(gameboard.receiveAttack(0, 0).board).toEqual(successArray);
});

test('isGameOver should return false if theres still a ship', () => {
  const gameboard = Gameboard();
  gameboard.addShip(2, { x: 0, y: 0, orientation: 'h' });
  gameboard.addShip(3, { x: 1, y: 0, orientation: 'v' });
  gameboard.receiveAttack(0, 0);
  gameboard.receiveAttack(0, 1);
  expect(gameboard.isGameOver()).toBe(false);
});

test('isGameOver should return true if all ships are sunk', () => {
  const gameboard = Gameboard();
  gameboard.addShip(2, { x: 0, y: 0, orientation: 'h' });
  gameboard.receiveAttack(0, 0);
  gameboard.receiveAttack(0, 1);
  expect(gameboard.isGameOver()).toBe(true);
  gameboard.addShip(3, { x: 1, y: 0, orientation: 'v' });
  gameboard.receiveAttack(1, 0);
  gameboard.receiveAttack(2, 0);
  gameboard.receiveAttack(3, 0);
  expect(gameboard.isGameOver()).toBe(true);
});
