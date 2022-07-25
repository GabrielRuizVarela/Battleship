/* eslint-disable no-param-reassign */
// import pubsub from './utils';
import patrol from './images/patrol.svg';
import submarine from './images/submarine.svg';
import destroyer from './images/destroyer.svg';
import carrier from './images/carrier.svg';
import patrolv from './images/patrol-v.svg';
import submarinev from './images/submarine-v.svg';
import destroyerv from './images/destroyer-v.svg';
import destroyerbv from './images/destroyer1v.svg';
import carrierv from './images/carrier-v.svg';
import { pubsub } from './utils';

let IMG = [];
const ships = [
  { length: 2, url: patrol, v: patrolv },
  { length: 3, url: submarine, v: submarinev },
  { length: 3.5, url: destroyer, v: destroyerv },
  { length: 4, url: destroyer, v: destroyerbv },
  { length: 5, url: carrier, v: carrierv },
];
let shipIndex = 0;
let ORIENTATION = 'h';
const switchOrientation = document.querySelector('#switch-orientation');
switchOrientation.classList.add('valid');
switchOrientation.addEventListener('click', () => {
  if (ORIENTATION === 'v') {
    ORIENTATION = 'h';
    switchOrientation.classList.add('valid');
    switchOrientation.classList.remove('invalid');
  } else {
    ORIENTATION = 'v';
    switchOrientation.classList.add('invalid');
    switchOrientation.classList.remove('valid');
  }
});

function createGrid(size = 10) {
  const grid = document.createElement('div');
  for (let i = 0; i < size; i += 1) {
    for (let j = 0; j < size; j += 1) {
      const div = document.createElement('div');
      div.setAttribute('data-x', i);
      div.setAttribute('data-y', j);
      div.classList.add('tile');
      grid.appendChild(div);
    }
  }
  return grid;
}

function updateGrid(board, grid, reset = false) {
  board.forEach((rows, x) => {
    rows.forEach((columns, y) => {
      const div = grid.querySelector(`[data-x="${x}"][data-y="${y}"]`);
      div.setAttribute('data-ship', columns);
      if (columns === 'X') {
        div.classList.add('hit');
      }
      if (columns === 'O') {
        div.classList.add('miss');
      }
      if (reset) { div.textContent = ''; }
    });
  });
  if (reset) {
    IMG = [];
    shipIndex = 0;
  }
  IMG.forEach((img) => {
    const target = grid.querySelector(`[data-x="${img.x}"][data-y="${img.y}"]`);
    target.appendChild(img.image);
    target.style.position = 'relative';
  });
}

function updateEnemyGrid(board, grid, eventCB) {
  // console.table(board);
  board.forEach((rows, x) => {
    rows.forEach((columns, y) => {
      const div = grid.querySelector(`[data-x="${x}"][data-y="${y}"]`);
      div.setAttribute('data-ship', columns);
      if (columns === 'X') {
        div.classList.add('hit');
      }
      if (columns === 'O') {
        div.classList.add('miss');
      }
      div.removeEventListener('click', eventCB);
      if (columns === '') { div.addEventListener('click', eventCB); }
    });
  });
}

function xyToIndex(x, y) {
  return Number(x) * 10 + Number(y);
}

function addShipToGrid(e) {
  let orientation = ORIENTATION;
  let target;
  if (e.orientation) {
    orientation = e.orientation;
    target = e.target;
  } else {
    target = this;
  }
  const x = Number(target.getAttribute(['data-x']));
  const y = Number(target.getAttribute(['data-y']));
  const length = Math.floor(ships[shipIndex].length);
  const grid = target.parentNode;
  const image = document.createElement('span');
  image.classList.add('ship-over');
  if (orientation === 'h') {
    image.style.backgroundImage = `url("${ships[shipIndex].url}")`;
    image.style.height = `${target.clientHeight}px`;
    image.style.width = `${target.clientWidth * length}px`;
  } else {
    image.style.backgroundImage = `url("${ships[shipIndex].v}")`;
    image.style.height = `${target.clientHeight * length}px`;
    image.style.width = `${target.clientWidth}px`;
  }
  IMG.push({ x, y, image });
  if (!e.orientation) {
    pubsub.publish('player1AddShipToGrid', { length: Math.floor(ships[shipIndex].length), coord: { x, y, orientation: ORIENTATION } });
    if (shipIndex < ships.length - 1) { shipIndex += 1; } else {
      pubsub.publish('killEvents', grid);
    }
  } else if (shipIndex < ships.length - 1) { shipIndex += 1; } else {
    pubsub.publish('killEvents', grid);
  }
}

function isPositionValid(length, { x, y, orientation }, grid, size = 10) {
  const nx = Number(x);
  const ny = Number(y);
  const array = Array.from(grid.querySelectorAll('div'));
  const index = orientation === 'v' ? nx : ny;
  for (let i = index; i < index + length && i < size; i += 1) {
    if (orientation === 'v') {
      if (!(array[xyToIndex(i, ny)].getAttribute(['data-ship']) === '' || array[xyToIndex(i, ny)].getAttribute(['data-ship']) === null) || index + length > size) {
        return false;
      }
    } else if (!(array[xyToIndex(nx, i)].getAttribute(['data-ship']) === '' || array[xyToIndex(i, ny)].getAttribute(['data-ship']) === null) || index + length > size) {
      return false;
    }
  }
  array[xyToIndex(nx, ny)].style.position = 'relative';
  return true;
}

function manageValidClass(length, { x, y, orientation }, grid, classToAdd, size = 10) {
  const nx = Number(x);
  const ny = Number(y);
  const array = Array.from(grid.querySelectorAll('div'));
  if (orientation === 'v') {
    for (let j = nx; j < nx + length && j < size; j += 1) {
      array[xyToIndex(j, ny)].classList.add(classToAdd);
    }
  } else {
    for (let j = ny; j < ny + length && j < size; j += 1) {
      array[xyToIndex(nx, j)].classList.add(classToAdd);
    }
  }
  array[xyToIndex(nx, ny)].style.position = 'relative';
}

function editModeEvent(e) {
  // e.stopPropagation();
  if (e.target !== this) { return; }
  const x = e.target.getAttribute(['data-x']);
  const y = e.target.getAttribute(['data-y']);
  const grid = e.target.parentNode;
  const array = Array.from(grid.querySelectorAll('.tile'));
  array.forEach((div) => {
    div.classList.remove('invalid');
    div.classList.remove('valid');
    if (!div.innerHTML) { div.style.position = 'static'; }
  });
  grid.querySelectorAll('span.ship-overlay').forEach((span) => span.remove());
  const length = Math.floor(ships[shipIndex].length);
  const positionIsValid = isPositionValid(
    length,
    { x, y, orientation: ORIENTATION },
    grid,
  );
  const shipOverlay = document.createElement('span');
  shipOverlay.classList.add('ship-overlay');
  if (positionIsValid) {
    shipOverlay.classList.add('valid');
    // manageValidClass(length, { x, y, orientation: ORIENTATION }, grid, 'valid');
    if (ORIENTATION === 'h') {
      shipOverlay.style.backgroundImage = `url("${ships[shipIndex].url}")`;
      shipOverlay.style.height = `${e.target.clientHeight}px`;
      shipOverlay.style.width = `${e.target.clientWidth * length}px`;
    } else {
      shipOverlay.style.backgroundImage = `url("${ships[shipIndex].v}")`;
      shipOverlay.style.height = `${e.target.clientHeight * length}px`;
      shipOverlay.style.width = `${e.target.clientWidth}px`;
    }
    array[xyToIndex(x, y)].addEventListener('click', addShipToGrid);
    array[xyToIndex(x, y)].appendChild(shipOverlay);
  } else {
    // shipOverlay.classList.add('invalid');
    manageValidClass(ships[shipIndex].length, { x, y, orientation: ORIENTATION }, grid, 'invalid');
    array[xyToIndex(x, y)].removeEventListener('click', addShipToGrid);
  }
}

function editMode(grid) {
  const divs = grid.querySelectorAll('.tile');
  divs.forEach((div) => div.addEventListener('mouseover', editModeEvent));
}

function welcomeScreen(grid) {
  const modal = document.querySelector('#welcome-modal');
  modal.addEventListener('cancel', () => {
    pubsub.publish('addShipsAtRandom', ships);
  });
  const startGameButton = document.querySelector('#start-game');
  startGameButton.addEventListener('click', () => {
    editMode(grid);
    modal.close();
  });
  const quickStart = document.querySelector('#quick-start');
  quickStart.addEventListener('click', () => {
    pubsub.publish('addShipsAtRandom', ships);
    modal.close();
  });
  modal.showModal();
  return {
    showModal: () => modal.showModal(),
    close: () => modal.close(),
  };
}

function endScreen(cb) {
  const modal = document.querySelector('#end-modal');
  // modal.showModal();
  modal.addEventListener('cancel', () => {
    cb();
  });
  const h1 = modal.querySelector('h1');
  // h1.textContent = msg;
  const button = modal.querySelector('#reset-button');
  button.addEventListener('click', () => {
    modal.close();
    cb();
  });
  return {
    showModal: () => modal.showModal(),
    title: h1,
  };
}

pubsub.subscribe('killEvents', (grid) => {
  grid.querySelectorAll('div').forEach((div) => {
    div.removeEventListener('mouseover', editModeEvent);
    div.classList.remove('valid');
    div.classList.remove('invalid');
    if (!div.innerHTML) { div.style.position = 'static'; }
    grid.querySelectorAll('span.ship-overlay').forEach((span) => span.remove());
  });
  pubsub.publish('ready');
});

export {
  createGrid,
  updateGrid,
  updateEnemyGrid,
  editMode,
  editModeEvent,
  addShipToGrid,
  welcomeScreen,
  endScreen,
};
