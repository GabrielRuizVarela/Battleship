import * as utils from './utils';

function Ship(length, { x, y, orientation }) {
  let name;
  switch (length) { // Select Name and Error check
    case 2:
      name = 'Patrol Boat';
      break;
    case 3:
      name = 'Submarine';
      break;
    case 3.5:
      name = 'Battleship';
      break;
    case 4:
      name = 'Destroyer';
      break;
    case 5:
      name = 'Carrier';
      break;
    default:
      name = 'ERROR';
      break;
  }
  const lengthFloor = Math.floor(length);
  const position = (() => { // put the ship in an empty board
    if ((orientation === 'v' && x + lengthFloor > 10) || (orientation === 'h' && y + lengthFloor > 10)) {
      throw new Error('ERROR: The ship is out of bounds');
    }
    const newArray = utils.getEmptyBoard();
    for (let i = 0; i < lengthFloor; i += 1) {
      if (orientation === 'v') {
        newArray[x + i][y] = name.at(0);
      } else {
        newArray[x][y + i] = name.at(0);
      }
    }
    return newArray;
  })();

  function isSunk() {
    for (let i = 0; i < 10; i += 1) {
      if (position[i].includes(name.at(0))) {
        return false;
      }
    }
    return true;
  }

  function hit(hx, hy) {
    if (hx > 9 || hy > 9) { return 'ERROR'; }
    if (position[hx][hy] !== '') {
      position[hx][hy] = 'X';
      return 'HIT';
    }
    position[hx][hy] = 'O';
    return 'MISS';
  }

  return {
    length: lengthFloor,
    name,
    position,
    hit,
    isSunk,
  };
}

export default Ship;
