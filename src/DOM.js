/* eslint-disable no-param-reassign */
// import pubsub from './utils';
import patrol from './patrol.svg';
import submarine from './submarine.svg';
import destroyer from './destroyer.svg';
import carrier from './carrier.svg';
import { pubsub } from './utils';

const IMG = [];
const ships = [
  { length: 2, url: patrol },
  { length: 3, url: submarine },
  { length: 3.5, url: destroyer },
  { length: 4, url: destroyer },
  { length: 5, url: carrier },
];
let shipIndex = 0;
const ORIENTATION = 'v';
const LENGHT = 3;

function createGrid(size = 10) {
  const grid = document.createElement('div');
  for (let i = 0; i < size; i += 1) {
    for (let j = 0; j < size; j += 1) {
      const div = document.createElement('div');
      div.setAttribute('data-x', i);
      div.setAttribute('data-y', j);
      grid.appendChild(div);
    }
  }
  return grid;
}

function updateGrid(board, grid) {
  board.forEach((rows, x) => {
    rows.forEach((columns, y) => {
      const div = grid.querySelector(`[data-x="${x}"][data-y="${y}"]`);
      div.innerText = columns;
    });
  });
  IMG.forEach((img) => {
    grid.querySelector(`[data-x="${img.x}"][data-y="${img.y}"]`).appendChild(img.image);
  });
}

function updateEnemyGrid(board, grid, eventCB) {
  board.forEach((rows, x) => {
    rows.forEach((columns, y) => {
      const div = grid.querySelector(`[data-x="${x}"][data-y="${y}"]`);
      div.textContent = columns;
      div.removeEventListener('click', eventCB);
      if (columns === '') { div.addEventListener('click', eventCB); }
    });
  });
}

function modal() {
  // console.log('hello');
  const dialog = document.createElement('dialog');
  dialog.open = true;
  document.body.appendChild(dialog);
  const div = document.createElement('div');
  dialog.appendChild(div);
}
// modal();
function xyToIndex(x, y) {
  return Number(x) * 10 + Number(y);
}

function addShipToGrid(e) {
  const x = Number(e.target.getAttribute(['data-x']));
  const y = Number(e.target.getAttribute(['data-y']));
  const length = Math.floor(ships[shipIndex].length);
  const grid = e.target.parentNode;
  const image = document.createElement('span');
  image.style.backgroundImage = `url("${ships[shipIndex].url}")`;
  image.classList.add('ship-over');
  if (ORIENTATION === 'h') {
    image.style.height = `${e.target.clientHeight}px`;
    image.style.width = `${e.target.clientWidth * length}px`;
  } else {
    image.style.transform = 'rotate(90deg)';
    image.style.height = `${e.target.clientHeight}px`;
    image.style.width = `${e.target.clientWidth * length}px`;
    image.style.top = length < 4 ? `${33 * length}%` : `${38 * length}%`;
    image.style.left = `${-30 * length}%`;
  }
  IMG.push({ x, y, image });
  console.log(IMG);
  pubsub.publish('player1AddShipToGrid', { length: Math.floor(ships[shipIndex].length), coord: { x, y, orientation: ORIENTATION } });
  if (shipIndex < 4) { shipIndex += 1; } else {
    pubsub.publish('killEvents', grid);
    console.log('this');
    document.querySelector('#edit-button').remove();
  }
}

function isPositionValid(length, { x, y, orientation }, grid, size = 10) {
  const nx = Number(x);
  const ny = Number(y);
  const array = Array.from(grid.querySelectorAll('div'));
  const index = orientation === 'v' ? nx : ny;
  for (let i = index; i < index + length && i < size; i += 1) {
    if (orientation === 'v') {
      // console.log(array[xyToIndex(i, ny)]);
      if (array[xyToIndex(i, ny)].textContent !== '' || index + length > size) {
        return false;
      }
    } else if (array[xyToIndex(nx, i)].textContent !== '' || index + length > size) {
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
  const x = e.target.getAttribute(['data-x']);
  const y = e.target.getAttribute(['data-y']);
  const grid = e.target.parentNode;

  const shipOverlay = document.createElement('span');
  shipOverlay.classList.add('ship-overlay');
  shipOverlay.style.backgroundImage = `url("${ships[shipIndex].url}")`;

  const array = Array.from(grid.querySelectorAll('div'));
  array.forEach((div) => {
    div.classList.remove('invalid');
    div.classList.remove('valid');
    if (!div.innerHTML) { div.style.position = 'static'; }
    grid.querySelectorAll('span.ship-overlay').forEach((span) => span.remove());
  });
  const length = Math.floor(ships[shipIndex].length);
  const positionIsValid = isPositionValid(
    length,
    { x, y, orientation: ORIENTATION },
    grid,
  );
  if (positionIsValid) {
    manageValidClass(length, { x, y, orientation: ORIENTATION }, grid, 'valid');
    if (ORIENTATION === 'h') {
      shipOverlay.style.height = `${e.target.clientHeight}px`;
      shipOverlay.style.width = `${e.target.clientWidth * length}px`;
    } else {
      shipOverlay.style.transform = 'rotate(90deg)';
      shipOverlay.style.height = `${e.target.clientHeight}px`;
      shipOverlay.style.width = `${e.target.clientWidth * length}px`;
      shipOverlay.style.top = length < 4 ? `${33 * length}%` : `${38 * length}%`;
      shipOverlay.style.left = `${-30 * length}%`;
    }
    e.target.appendChild(shipOverlay);
    array[xyToIndex(x, y)].addEventListener('click', addShipToGrid);
  } else {
    manageValidClass(ships[shipIndex].length, { x, y, orientation: ORIENTATION }, grid, 'invalid');
    array[xyToIndex(x, y)].removeEventListener('click', addShipToGrid);
  }
}

function editMode(grid) {
  const divs = grid.querySelectorAll('div');
  divs.forEach((div) => div.addEventListener('mouseover', editModeEvent));
  const button = document.createElement('button');
  button.id = 'edit-button';
  button.textContent = 'Done';
  grid.parentNode.appendChild(button);
  button.onclick = () => {
    divs.forEach((div) => div.removeEventListener('mouseover', editModeEvent));
    button.remove();
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
});

export {
  createGrid,
  updateGrid,
  updateEnemyGrid,
  modal,
  editMode,
  editModeEvent,
};
