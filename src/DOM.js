import * as utils from './utils';
import patrol from './patrol.svg';
import submarine from './submarine.svg';
import destroyer from './destroyer.svg';
import carrier from './carrier.svg';

const ships = [
  { length: 2, url: patrol },
  { length: 3, url: submarine },
  { length: 3.5, url: destroyer },
  { length: 4, url: destroyer },
  { length: 5, url: carrier },
];
const ORIENTATION = 'h';
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
      div.textContent = columns;
    });
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

function isPositionValid(length, { x, y, orientation }, grid, size = 10) {
  const nx = Number(x);
  const ny = Number(y);
  const array = Array.from(grid.querySelectorAll('div'));
  array.forEach((div) => {
    div.classList.remove('invalid');
    div.classList.remove('valid');
    div.style.position = 'static';
    document.querySelectorAll('span').forEach((span) => span.remove());
  });
  const index = orientation === 'v' ? nx : ny;
  for (let i = index; i < index + length && i < size; i += 1) {
    if (orientation === 'v') {
      if (array[xyToIndex(i, ny)].textContent !== '' || index + length > size) {
        for (let j = index; j < index + length && j < size; j += 1) {
          array[xyToIndex(j, ny)].classList.add('invalid');
        }
        return false;
      }
      for (let j = index; j < index + length && j < size; j += 1) {
        array[xyToIndex(j, ny)].classList.add('valid');
      }
    } else {
      if (array[xyToIndex(nx, i)].textContent !== '' || index + length > size) {
        for (let j = index; j < index + length && j < size; j += 1) {
          array[xyToIndex(nx, j)].classList.add('invalid');
        }
        return false;
      }
      for (let j = index; j < index + length && j < size; j += 1) {
        array[xyToIndex(nx, j)].classList.add('valid');
      }
    }
  }
  array[xyToIndex(nx, ny)].style.position = 'relative';
  return true;
}

function editModeEvent(e) {
  const x = e.target.getAttribute(['data-x']);
  const y = e.target.getAttribute(['data-y']);
  const valid = isPositionValid(LENGHT, { x, y, orientation: ORIENTATION }, e.target.parentNode);
  const shipOverlay = document.createElement('span');
  shipOverlay.classList.add('ship-overlay');
  shipOverlay.style.backgroundImage = `url("${ships[1].url}")`;
  if (ORIENTATION === 'h') {
    shipOverlay.style.height = `${e.target.clientHeight}px`;
    shipOverlay.style.width = `${e.target.clientWidth * ships[1].length}px`;
  } else {
    shipOverlay.style.transform = 'rotate(90deg)';
    shipOverlay.style.height = `${e.target.clientHeight}px`;
    shipOverlay.style.width = `${e.target.clientWidth * ships[1].length}px`;
    shipOverlay.style.top = '100%';
    shipOverlay.style.left = '-100%';
  }

  if (valid) {
    e.target.appendChild(shipOverlay);
  } else {
    // e.target.style.backgroundColor = 'red';
  }
}

function editMode(grid) {
  const divs = grid.querySelectorAll('div');
  divs.forEach((div) => div.addEventListener('mouseover', editModeEvent));
  const button = document.createElement('button');
  button.textContent = 'Done';
  grid.parentNode.appendChild(button);
  button.onclick = () => {
    divs.forEach((div) => div.removeEventListener('mouseover', editModeEvent));
    button.remove();
  };
}

export {
  createGrid,
  updateGrid,
  updateEnemyGrid,
  modal,
  editMode,
  editModeEvent,
};
