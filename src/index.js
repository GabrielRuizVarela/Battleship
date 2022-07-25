import './style/style.scss';
// import Ship from './ship';
import * as utils from './utils';
// import Gameboard from './gameboard';
import Player from './player';
import * as DOM from './DOM';

// --- init ---
let ready = false;
utils.pubsub.subscribe('ready', () => { ready = true; });
const main = document.querySelector('#boards');

const playerGrid = DOM.createGrid();
playerGrid.setAttribute('id', 'player-grid');
main.appendChild(playerGrid);

const enemyGrid = DOM.createGrid();
enemyGrid.setAttribute('id', 'enemy-grid');
main.appendChild(enemyGrid);

const player1 = Player(1);
const player2 = Player(2);

const welcomeModal = DOM.welcomeScreen(playerGrid);
const endScreen = DOM.endScreen(welcomeModal.showModal);

utils.pubsub.subscribe('player1BoardChanged', (board) => {
  DOM.updateGrid(board, playerGrid);
  if (player1.playerBoard.isGameOver()) {
    utils.pubsub.publish('GameOver', 'Computer Wins');
  }
});

function enemyBoardEvent(e) {
  if (!ready) { return; }
  const x = e.target.getAttribute(['data-x']);
  const y = e.target.getAttribute(['data-y']);
  player1.fire(x, y);
  player2.computerFire();
}
enemyGrid.querySelectorAll('div').forEach((div) => div.addEventListener('click', enemyBoardEvent));

utils.pubsub.subscribe('enemy1BoardChanged', (board) => {
  DOM.updateEnemyGrid(board, enemyGrid, enemyBoardEvent);
  if (player2.playerBoard.isGameOver()) {
    // console.log(player2.playerBoard.isGameOver());
    utils.pubsub.publish('GameOver', 'Player Wins');
  }
});

utils.pubsub.subscribe('player1AddShipToGrid', ({ length, coord }) => {
  player1.addShip(length, coord);
  player2.addComputerShip(length);
});

utils.pubsub.subscribe('addShipsAtRandom', (ships) => {
  ships.forEach((ship) => {
    const [x, y, orientation] = player1.addComputerShip(ship.length);
    const div = playerGrid.querySelector(`[data-x="${x}"][data-y="${y}"]`);
    div.style.position = 'relative';
    DOM.addShipToGrid({ target: div, orientation });
    player2.addComputerShip(ship.length);
  });
  utils.pubsub.publish('player1BoardChanged', player1.playerBoard.board);
});

utils.pubsub.subscribe('GameOver', (str) => {
  player1.reset();
  DOM.updateGrid(player1.playerBoard.board, playerGrid, true);
  player2.reset();
  DOM.updateEnemyGrid(player1.enemyBoard, enemyGrid);
  endScreen.title.textContent = str;
  endScreen.showModal();
});
