let div = document.querySelector("div");
let btn = document.querySelector("button");

const setBg = () => {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  div.style.backgroundColor = "#" + randomColor;
  return "#" + randomColor;
};
setBg();

function makeLittleSquare() {
  for (let i = 0; i < 72; i++) {
    let span = document.createElement("span");
    setInterval(() => {
      span.style.backgroundColor = setBg();
    }, 1000);
    span.style.width = "50px";
    span.style.height = "50px";
    span.style.borderRadius = "50px";
    div.appendChild(span);
  }
}

makeLittleSquare();
