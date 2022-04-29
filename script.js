const game = document.getElementById("game");
let arr = [];
const height = 30;
const width = 70;

let colorGrid = () => {
  for (let i = 0; i < height; i++) {
    for (let j = 0; j < width; j++) {
      arr[i][j] == 1 ? document.getElementsByClassName(`h${i} w${j}`)[0].classList.add("life") : null;
    }
  }
}

let addCell = e => {
  let elem = e.target;
  // elem.classList.contains("life") ?
  // elem.classList.remove("life") :
  // elem.classList.add("life");
  let h = elem.classList[1].substr(1);
  let w = elem.classList[2].substr(1);
  arr[h][w] = 1;
  console.log(arr[h][w]);
  colorGrid();
}

for (let i = 0; i < height; i++) {
  arr.push([]);
  for (let j = 0; j < width; j++) {
    arr[0].push(0);
    let cell = document.createElement("div");
    cell.classList.add("cell", "h"+i, "w"+j);
    cell.addEventListener('click', addCell);
    game.append(cell);
  }
}

let gameOfLife = () => {
  
}

document.addEventListener('keypress', gameOfLife);