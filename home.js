// ----------- Change buttons backgroundcolors ------------

const boxEl = document.getElementsByClassName("box");
const btnEl = document.getElementsByTagName("button")[0];
console.log(btnEl);
console.log(boxEl);

function generateColor() {
  const rColor = Math.floor(Math.random() * 256);
  const gColor = Math.floor(Math.random() * 256);
  const bColor = Math.floor(Math.random() * 256);
  return `rgb(${rColor},${gColor},${bColor})`;
}

function changeBackgroundColor() {
  for (let i = 0; i < boxEl.length; i++) {
    boxEl[i].style.backgroundColor = generateColor();
  }
}
changeBackgroundColor();

btnEl.addEventListener("click", changeBackgroundColor);

// ----- Add box------//

const addBtn = document.getElementById("add");
console.log(addBtn);

addBtn.addEventListener("click", function () {
  const newBox = document.createElement("div");
  newBox.className = "box";
  const parent = document.getElementsByClassName("box-container")[0];
  parent.appendChild(newBox);
  newBox.style.width = "160px";
  newBox.style.height = "160px";
  newBox.style.backgroundColor = "teal";
  newBox.classList.toggle("box");
});
