import * as utils from './utils';
import Ship from './ship';

function Gameboard(size = 10) {
  let board = utils.getEmptyBoard(size);

  const ships = [];

  function addToBoard({ position }) {
    board = board.map((a, i) => (a.map((b, j) => {
      if (position[i][j] === 'O' || position[i][j] === 'X') {
        return 'X';
      }
      return b + position[i][j];
    })));
  }

  function updateBoard() {
    board = utils.getEmptyBoard(size);
    ships.forEach((ship) => addToBoard(ship));
  }

  function checkBoard() {
    board.forEach((vector) => vector.forEach((element) => {
      if (element.length > 1) { throw new Error('There another ship in that place'); }
    }));
  }
  function addShip(length, { x, y, orientation }) {
    const ship = Ship(length, { x, y, orientation });
    ships.push(ship);
    updateBoard();
    checkBoard();
    return { status: 'SUCCESS', board };
  }

  function receiveAttack(x, y) {
    let shipHit;
    ships.forEach((ship) => {
      if (ship.hit(x, y) === 'HIT') {
        shipHit = ship;
      }
    });
    updateBoard();
    return { shipHit, board };
  }

  function isGameOver() {
    let allShipSunk = true;
    ships.forEach((ship) => {
      if (!ship.isSunk()) {
        allShipSunk = false;
      }
    });
    return allShipSunk;
  }

  return {
    addShip,
    receiveAttack,
    isGameOver,
    board,
  };
}

export default Gameboard;
