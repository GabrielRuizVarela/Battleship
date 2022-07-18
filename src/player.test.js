import Player from './player';
import * as utils from './utils';

test('enemyBoard update after fire miss', () => {
  const player1 = Player(1);
  const player2 = Player(2);
  player1.fire(0, 0);
  const successArray = utils.getEmptyBoard();
  successArray[0][0] = 'O';
  expect(player1.enemyBoard).toEqual(successArray);
});

test('enemyBoard update after fire hit', () => {
  const player1 = Player(1);
  const player2 = Player(2);
  player2.playerBoard.addShip(2, { x: 0, y: 0, orientation: 'v' });
  player1.fire(0, 0);
  const successArray = utils.getEmptyBoard();
  successArray[0][0] = 'X';
  expect(player1.enemyBoard).toEqual(successArray);
});

test('enemyBoard update after fire hit', () => {
  const player1 = Player(1);
  const player2 = Player(2);
  player2.playerBoard.addShip(2, { x: 0, y: 0, orientation: 'v' });
  player1.fire(0, 0);
  const successArray = utils.getEmptyBoard();
  player1.fire(1, 0);
  successArray[0][0] = 'X';
  successArray[1][0] = 'X';
  expect(player1.enemyBoard).toEqual(successArray);
});
