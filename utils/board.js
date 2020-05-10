import {
  NUMBER_OF_ROWS,
  NUMBER_OF_COLUMNS,
  MAX_NUMBER_OF_MINES,
} from './constants';

export const createBoard = () => {
  let board = [];
  for (let i = 0; i < NUMBER_OF_ROWS; i++) {
    let row = [];
    for (let j = 0; j < NUMBER_OF_COLUMNS; j++) {
      row.push({
        x: j,
        y: i,
        number: 0,
        isRevealed: false,
        hasMine: false,
        isFlagged: false,
      });
    }
    board.push(row);
  }
  addMines(board);
  addNumbers(board);
  return board;
};

const addMines = board => {
  let numOfMines = 0;
  while (numOfMines < MAX_NUMBER_OF_MINES) {
    const x = Math.floor(Math.random() * NUMBER_OF_COLUMNS);
    const y = Math.floor(Math.random() * NUMBER_OF_ROWS);
    if (!board[y][x].hasMine) {
      board[y][x].hasMine = true;
      numOfMines++;
    }
  }
};

const getNeighbours = (block, board) => {
  const neighbours = [];
  const xIndex = block.x;
  const yIndex = block.y;
  if (yIndex === 0) {
    if (xIndex === 0) {
      neighbours.push(board[yIndex][xIndex + 1]);
      neighbours.push(board[yIndex + 1][xIndex + 1]);
      neighbours.push(board[yIndex + 1][xIndex]);
      // top left corner (3 neighbours)
    } else if (xIndex === NUMBER_OF_COLUMNS - 1) {
      neighbours.push(board[yIndex][xIndex - 1]);
      neighbours.push(board[yIndex + 1][xIndex - 1]);
      neighbours.push(board[yIndex + 1][xIndex]);
      // top right corner (3 neighbours)
    } else {
      neighbours.push(board[yIndex][xIndex - 1]);
      neighbours.push(board[yIndex + 1][xIndex - 1]);
      neighbours.push(board[yIndex + 1][xIndex]);
      neighbours.push(board[yIndex + 1][xIndex + 1]);
      neighbours.push(board[yIndex][xIndex + 1]);
      // all other top row blocks (5 neighbours)
    }
  } else if (yIndex === NUMBER_OF_ROWS - 1) {
    if (xIndex === 0) {
      neighbours.push(board[yIndex - 1][xIndex]);
      neighbours.push(board[yIndex - 1][xIndex + 1]);
      neighbours.push(board[yIndex][xIndex + 1]);
      // bottom left corner (3 neighbours)
    } else if (xIndex === NUMBER_OF_COLUMNS - 1) {
      neighbours.push(board[yIndex][xIndex - 1]);
      neighbours.push(board[yIndex - 1][xIndex - 1]);
      neighbours.push(board[yIndex - 1][xIndex]);
      // bottom right corner (3 neighbours)
    } else {
      neighbours.push(board[yIndex][xIndex - 1]);
      neighbours.push(board[yIndex - 1][xIndex - 1]);
      neighbours.push(board[yIndex - 1][xIndex]);
      neighbours.push(board[yIndex - 1][xIndex + 1]);
      neighbours.push(board[yIndex][xIndex + 1]);
      // all other bottom row blocks (5 neighbours)
    }
  } else {
    if (xIndex === 0) {
      neighbours.push(board[yIndex - 1][xIndex]);
      neighbours.push(board[yIndex - 1][xIndex + 1]);
      neighbours.push(board[yIndex][xIndex + 1]);
      neighbours.push(board[yIndex + 1][xIndex + 1]);
      neighbours.push(board[yIndex + 1][xIndex]);
      // left edge case (5 neighbours)
    } else if (xIndex === NUMBER_OF_COLUMNS - 1) {
      neighbours.push(board[yIndex - 1][xIndex]);
      neighbours.push(board[yIndex - 1][xIndex - 1]);
      neighbours.push(board[yIndex][xIndex - 1]);
      neighbours.push(board[yIndex + 1][xIndex - 1]);
      neighbours.push(board[yIndex + 1][xIndex]);
      // right edge case (5 neighbours)
    } else {
      neighbours.push(board[yIndex - 1][xIndex - 1]);
      neighbours.push(board[yIndex - 1][xIndex]);
      neighbours.push(board[yIndex - 1][xIndex + 1]);
      neighbours.push(board[yIndex][xIndex + 1]);
      neighbours.push(board[yIndex + 1][xIndex + 1]);
      neighbours.push(board[yIndex + 1][xIndex]);
      neighbours.push(board[yIndex + 1][xIndex - 1]);
      neighbours.push(board[yIndex][xIndex - 1]);
      // middle case (8 neighbours)
    }
  }
  return neighbours;
};

const addNumbers = board => {
  for (let i = 0; i < NUMBER_OF_ROWS; i++) {
    for (let j = 0; j < NUMBER_OF_COLUMNS; j++) {
      const block = board[j][i];
      const neighbours = getNeighbours(block, board);
      for (const n of neighbours) {
        if (n.hasMine) {
          block.number++;
        }
      }
    }
  }
};

export const revealSection = (block, board) => {
  const neighbours = getNeighbours(block, board);
  for (const n of neighbours) {
    if (!n.isRevealed && n.number === 0) {
      n.isRevealed = true;
      revealSection(n, board);
    }
    n.isRevealed = true;
  }
};

export const updateFlags = (board, flagsLeft, setFlagsLeft) => {
  for (let i = 0; i < NUMBER_OF_ROWS; i++) {
    for (let j = 0; j < NUMBER_OF_COLUMNS; j++) {
      if (board[j][i].isFlagged && board[j][i].isRevealed) {
        console.log(flagsLeft);
        board[j][i].isFlagged = false;
        setFlagsLeft(++flagsLeft);
      }
    }
  }
};

export const hasWonGame = board => {
  let matches = 0;
  let notRevealed = false;
  for (let i = 0; i < NUMBER_OF_ROWS; i++) {
    for (let j = 0; j < NUMBER_OF_COLUMNS; j++) {
      if (board[j][i].isFlagged && board[j][i].hasMine) {
        matches++;
      }
      if (!board[j][i].isFlagged && !board[j][i].isRevealed) {
        notRevealed = true;
      }
    }
  }
  if (matches === MAX_NUMBER_OF_MINES && !notRevealed) {
    return true;
  }
  return false;
};
