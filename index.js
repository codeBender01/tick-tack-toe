const cells = document.body.querySelectorAll(".cell");
const restartBtn = document.body.querySelector("button");

const circle = `<svg class="svg-circle">
<circle
  r="40%"
  cx="50%"
  cy="50%"
  stroke="whitesmoke"
  fill="transparent"
  stroke-width="15"
/>
</svg>`;
const cross = `<svg class="svg-icon" viewBox="0 0 20 20">
<path
  fill="none"
  d="M11.469,10l7.08-7.08c0.406-0.406,0.406-1.064,0-1.469c-0.406-0.406-1.063-0.406-1.469,0L10,8.53l-7.081-7.08
c-0.406-0.406-1.064-0.406-1.469,0c-0.406,0.406-0.406,1.063,0,1.469L8.531,10L1.45,17.081c-0.406,0.406-0.406,1.064,0,1.469
c0.203,0.203,0.469,0.304,0.735,0.304c0.266,0,0.531-0.101,0.735-0.304L10,11.469l7.08,7.081c0.203,0.203,0.469,0.304,0.735,0.304
c0.267,0,0.532-0.101,0.735-0.304c0.406-0.406,0.406-1.064,0-1.469L11.469,10z"
></path>
</svg> `;
let cellMatrix = [];
let scoreMatrix = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];
let arr = [];
let count = 0;

function checkForWin() {
  for (let i = 0; i < scoreMatrix.length; i++) {
    for (let j = 0; j < scoreMatrix[i].length; j++) {
      if (scoreMatrix[i][j]) {
        if (
          scoreMatrix[i][j] === scoreMatrix[i][j + 1] &&
          scoreMatrix[i][j] === scoreMatrix[i][j + 2]
        ) {
          console.log("huy");
        }
        if (
          scoreMatrix[i][j] === scoreMatrix[i + 1][j] &&
          scoreMatrix[i][j] === scoreMatrix[i + 2][j]
        ) {
          console.log("pidor");
        }
      }
    }
  }
}

for (let el of cells) {
  arr.push(el);
  if (arr.length === 3) {
    cellMatrix.push(arr);
    arr = [];
  }
}

for (let i = 0; i < cellMatrix.length; i++) {
  for (let j = 0; j < cellMatrix[i].length; j++) {
    cellMatrix[i][j].addEventListener("click", () => {
      count++;
      if (count % 2 === 0) {
        if (cellMatrix[i][j].innerHTML === "") {
          cellMatrix[i][j].innerHTML = circle;
          scoreMatrix[i][j] = "circle";
          checkForWin();
        }
        return;
      }
      if (cellMatrix[i][j].innerHTML === "") {
        cellMatrix[i][j].innerHTML = cross;
        scoreMatrix[i][j] = "cross";
        checkForWin();
      }
    });
  }
}

restartBtn.addEventListener("click", () => {
  cells.forEach((el) => {
    el.innerHTML = "";
  });
  count = 0;
});
