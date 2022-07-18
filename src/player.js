import Gameboard from './gameboard';
import * as utils from './utils';

function Player(num) {
  const playerBoard = Gameboard();
  const enemyBoard = utils.getEmptyBoard();
  function fire(x, y) {
    if (enemyBoard[x][y] === 'X' || enemyBoard[x][y] === 'O') { return 'ERROR'; }
    utils.pubsub.publish(`player${num}Played`, [x, y]);

    return (() => { utils.pubsub.publish(`player${num}Played`, [x, y]); })();
  }

  function takeFire([x, y]) {
    const { shipHit, board } = playerBoard.receiveAttack(x, y);
    // utils.pubsub.publish(`player${num}BoardChanged`, board);
    if (shipHit) { utils.pubsub.publish(`player${num}Hit`, [x, y, true]); } else { utils.pubsub.publish(`player${num}Hit`, [x, y, false]); }
  }
  utils.pubsub.subscribe(`player${num === 2 ? 1 : 2}Played`, takeFire);
  function updateEnemyBoard([x, y, hit]) {
    if (hit) { enemyBoard[x][y] = 'X'; } else { enemyBoard[x][y] = 'O'; }
  }
  utils.pubsub.subscribe(`player${num === 2 ? 1 : 2}Hit`, updateEnemyBoard);
  return {
    enemyBoard,
    playerBoard,
    fire,
  };
}

export default Player;
