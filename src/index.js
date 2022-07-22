import './style.scss';
// import Ship from './ship';
import * as utils from './utils';
// import Gameboard from './gameboard';
import Player from './player';
import * as DOM from './DOM';

// --- init ---

const playerGrid = DOM.createGrid();
playerGrid.setAttribute('id', 'player-grid');
document.body.appendChild(playerGrid);

const enemyGrid = DOM.createGrid();
enemyGrid.setAttribute('id', 'enemy-grid');
document.body.appendChild(enemyGrid);

utils.pubsub.subscribe('player1BoardChanged', (board) => DOM.updateGrid(board, playerGrid));

const shipsClassicTemplate = [2, 3, 3.5, 4, 5];
const player1 = Player(1);
const player2 = Player(2);
function enemyBoardEvent(e) {
  const x = e.target.getAttribute(['data-x']);
  const y = e.target.getAttribute(['data-y']);
  player1.fire(x, y);
  player2.computerFire();
}
enemyGrid.querySelectorAll('div').forEach((div) => div.addEventListener('click', enemyBoardEvent));
utils.pubsub.subscribe('enemy1BoardChanged', (board) => DOM.updateEnemyGrid(board, enemyGrid, enemyBoardEvent));

shipsClassicTemplate.forEach((length) => {
  // player1.addComputerShip(length);
  player2.addComputerShip(length);
});
utils.pubsub.subscribe('player1AddShipToGrid', ({ length, coord }) => {
  player1.addShip(length, coord);
  // console.table(player1.playerBoard.board);
  // console.log({ length, coord });
});

DOM.editMode(playerGrid);
