import Gameboard from './gameboard';
import * as utils from './utils';

function Player(num) {
  const playerBoard = Gameboard();
  const pEnemyBoard = utils.getEmptyBoard();
  function fire(x, y) {
    if (pEnemyBoard[x][y] === 'X' || pEnemyBoard[x][y] === 'O') { throw new Error('you can not fire where you already did'); }
    utils.pubsub.publish(`player${num}Played`, [x, y]);
  }

  function takeFire([x, y]) {
    const { shipHit, board } = playerBoard.receiveAttack(x, y);
    utils.pubsub.publish(`player${num}BoardChanged`, board);
    if (shipHit !== undefined) {
      utils.pubsub.publish(`player${num}Hit`, [x, y, true, board]);
    } else {
      utils.pubsub.publish(`player${num}Hit`, [x, y, false, board]);
    }
  }
  utils.pubsub.subscribe(`player${num === 2 ? 1 : 2}Played`, takeFire);

  function updateEnemyBoard([x, y, hit]) {
    if (hit) { pEnemyBoard[x][y] = 'X'; } else { pEnemyBoard[x][y] = 'O'; }
    utils.pubsub.publish(`enemy${num}BoardChanged`, pEnemyBoard);
  }
  utils.pubsub.subscribe(`player${num === 2 ? 1 : 2}Hit`, updateEnemyBoard);

  function randomCoord(size = 10, size2 = 10) {
    const x = Math.floor(Math.random() * size);
    const y = Math.floor(Math.random() * size2);
    return [x, y];
  }

  function computerFire() {
    for (let i = 0; i < 100; i += 1) {
      try {
        const [x, y] = randomCoord();
        fire(x, y);
        return;
      } catch (err) {
        // console.log(err);
      }
    }
  }

  function addShip(...params) {
    playerBoard.addShip(params[0], params[1]);
    utils.pubsub.publish(`player${num}BoardChanged`, playerBoard.board);
  }

  function addComputerShip(lenght, size = 10) {
    let x; let y; let orientation;
    let count = 0;
    for (let i = 0; i < 100; i += 1) {
      try {
        orientation = Math.floor(Math.random() * 2) ? 'v' : 'h';
        const size1 = orientation === 'v' ? (size - Math.floor(lenght)) : size;
        const size2 = orientation === 'h' ? (size - Math.floor(lenght)) : size;
        [x, y] = randomCoord(size1, size2);
        addShip(lenght, { x, y, orientation });
        count = 0;
        break;
      } catch (err) {
        // console.log(err);
        count += 1;
        if (count > 100) { break; }
      }
    }
  }

  return {
    get enemyBoard() { return pEnemyBoard; },
    playerBoard,
    addShip,
    fire,
    computerFire,
    addComputerShip,
  };
}

export default Player;
