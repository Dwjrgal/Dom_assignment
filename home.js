

const boxEl = document.getElementsByClassName("box")[i];
const btnEl = document.getElementsByTagName("button");


function generateColor() {
    const rColor = Math.floor(Math.random() * 256); 
    const gColor = Math.floor(Math.random() * 256); 
    const bColor = Math.floor(Math.random() * 256);
    return `rgb(${rColor},${gColor},${bColor})`;
  }


  
function changeBackgroundColor() {
    boxEl.style.backgroundColor = generateColor();
}

// btnEl.addEventListener("click", changeBackgroundColor);


 
btnEl.addEventListener("click", change);

// btnEl.addEventListener("click", change);
