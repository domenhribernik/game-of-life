const game = document.getElementById("game");
let arr = [];
let x = null;
const height = 30;
const width = 70;

let colorGrid = () => {
  let elem;
  for (let i = 1; i <= height; i++) {
    for (let j = 1; j <= width; j++) {
      elem = document.getElementsByClassName(`h${i} w${j}`)[0];
      arr[i][j] == 1 ? elem.classList.add("life") : null;
      arr[i][j] == 0 && elem.classList.contains("life") ? elem.classList.remove("life") : null;
    }
  }
}

let getNeighbours = (x, y) => {
  let sum = 0;
  for (let i = x-1; i < x+2; i++) {
    for (let j = y-1; j < y+2; j++) {
      if (arr[i][j] == 1 && (x != i || y != j)) {
        sum++;
      }
    }
  }
  return sum;
}

let addCell = e => {
  let elem = e.target;
  let h = elem.classList[1].substr(1);
  let w = elem.classList[2].substr(1);
  arr[h][w] == 1 ? arr[h][w] = 0 : arr[h][w] = 1;
  colorGrid();
}

for (let i = 0; i < height; i++) {
  for (let j = 0; j < width; j++) {
    let cell = document.createElement("div");
    cell.classList.add("cell", "h"+(i+1), "w"+(j+1));
    cell.addEventListener('click', addCell);
    game.append(cell);
  }
}

for (let i = 0; i < height+2; i++) {
  arr.push([]);
  for (let j = 0; j < width+2; j++) {
    arr[0].push(0);
  }
}

let gameOfLife = () => {
  const tmp = JSON.parse(JSON.stringify(arr));
  let neighbours;
  for (let i = 1; i <= height; i++) {
    for (let j = 1; j <= width; j++) {
      neighbours = getNeighbours(i, j)
      arr[i][j] == 1 
      ? neighbours > 3 || neighbours < 2 
        ? tmp[i][j] = 0 : null
      : neighbours == 3 ? tmp[i][j] = 1 : null;
    }
  }
  arr =  JSON.parse(JSON.stringify(tmp));
  colorGrid();
}

let gameController = e => {
  e.key == "d" ? gameOfLife() :
  e.key == "s" && !x ? x = setInterval(gameOfLife, 100) :
  e.key == "q" ? (clearInterval(x), x = null) : null; 
}

document.addEventListener('keypress', gameController);