import './style.scss';
import Ship from './ship';
import * as utils from './utils';
import Gameboard from './gameboard';
import Player from './player';

const ships1 = [
  { lenght: 2, coord: { x: 0, y: 0, orientation: 'v' } },
  { lenght: 3, coord: { x: 5, y: 0, orientation: 'h' } },
];
const shoots1 = [
  [0, 0],
  [1, 0],
  [5, 0],
  [5, 1],
  // [5, 4],
  [5, 1],
];

const ships2 = [
  { lenght: 2, coord: { x: 9, y: 8, orientation: 'h' } },
  { lenght: 3, coord: { x: 0, y: 5, orientation: 'v' } },
];
const shoots2 = [
  [9, 8],
  [9, 9],
  [0, 5],
  [1, 5],
  [2, 5],
];

const player1 = Player(1);
const player2 = Player(2);
// player2.playerBoard.addShip(ships2[0].lenght, ships2[0].coord);
ships1.forEach((ship) => player1.playerBoard.addShip(ship.lenght, ship.coord));
ships2.forEach((ship) => player2.playerBoard.addShip(ship.lenght, ship.coord));
// let turn = player1;
let i = 0;
// while (i < 5) {
while (!player1.playerBoard.isGameOver() && !player2.playerBoard.isGameOver()) {
  player1.fire(shoots2[i][0], shoots2[i][1]);
  player2.fire(shoots1[i][0], shoots1[i][1]);
  i += 1;
  // turn = turn === player1 ? turn = player2 : turn = player1;
}
console.table(player1.playerBoard.board);
console.table(player1.enemyBoard);
console.table(player2.playerBoard.board);
console.table(player2.enemyBoard);

console.log(player2.playerBoard.isGameOver());
